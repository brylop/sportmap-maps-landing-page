/**
 * useUpgradeContext — Hook usado por la landing /planes para:
 *
 *  1. Leer query params del deep-link que viene del admin app:
 *     ?role=escuela&current=crecimiento&school_id=...&upsell=tournaments&return=...&action=update_payment
 *
 *  2. Verificar si hay sesión Supabase activa (mismo proyecto que admin app).
 *     Si hay → renderiza badge "Tu plan actual" y wire CTAs al BFF.
 *     Si no → CTAs llevan al flow de registro (comportamiento legacy).
 *
 *  3. Crear el plan_upgrade_request POST al BFF cuando el usuario
 *     autenticado pide un plan. El BFF guarda + notifica super_admin.
 *     Devuelve { ok: true, request_id } y la landing muestra confirmación.
 *
 * Source of truth de URLs:
 *   - VITE_BFF_URL     → BFF (default: https://sportmaps-bff.onrender.com)
 *   - VITE_APP_URL     → admin app (default: https://app.sportmaps.co)
 */

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { TierCode, AddonKey } from '@/config/saas-plans';

// ============================================================
// Types
// ============================================================

export type UpgradeAction =
    | 'view'           // default — solo vista de planes
    | 'select_plan'    // usuario hace click en un plan específico
    | 'activate_addon' // usuario hace click en un addon
    | 'update_payment'; // usuario viene del banner "actualizar pago"

export interface UpgradeDeepLinkContext {
    /** Rol del visitante según el deep-link (escuela / entrenador / etc) */
    role: string | null;
    /** Plan actual del usuario en admin app */
    currentPlan: TierCode | null;
    /** School ID asociado (si admin app lo pasó) */
    schoolId: string | null;
    /** Feature/addon a destacar como upsell */
    upsell: string | null;
    /** URL de retorno al admin app */
    returnTo: string | null;
    /** Acción específica solicitada */
    action: UpgradeAction;
}

export interface UpgradeRequestPayload {
    request_type:
        | 'plan_upgrade'
        | 'plan_downgrade'
        | 'addon_activate'
        | 'addon_deactivate'
        | 'payment_update'
        | 'contact_sales';
    requested_plan_code?: TierCode;
    requested_addon_key?: AddonKey;
    requested_billing_cycle?: 'monthly' | 'annual';
    notes?: string;
}

// ============================================================
// Helpers
// ============================================================

/**
 * Detecta el BFF correcto segun el entorno desde donde viene el usuario.
 *
 * El admin app (dev.sportmaps.co o app.sportmaps.co) pasa su URL en el
 * query param `return`. Si esa URL apunta a un host dev, usamos el BFF
 * dev. Si no, prod. Asi un mismo landing puede servir ambos entornos
 * sin romper el cross-domain auth.
 */
function resolveBffUrl(): string {
    const configured = (import.meta as any).env?.VITE_BFF_URL;
    if (configured) return configured;

    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const returnUrl = params.get('return') || '';
        // Si el return apunta a un admin de dev, usamos el BFF dev
        if (returnUrl.includes('dev.sportmaps.co') || returnUrl.includes('localhost')) {
            return 'https://sportmaps-bff-dev.onrender.com';
        }
    }
    return 'https://sportmaps-bff.onrender.com';
}

// ============================================================
// Hook
// ============================================================

export function useUpgradeContext() {
    const [searchParams] = useSearchParams();
    const [session, setSession] = useState<{
        userId: string;
        email: string | null;
    } | null>(null);
    const [sessionLoaded, setSessionLoaded] = useState(false);
    /**
     * Token inline pasado por URL hash (#t=...) desde admin app.
     * Permite autenticar BFF requests sin compartir cookies/localStorage
     * entre dominios. Se usa en createUpgradeRequest como Bearer.
     * Memo en memoria — se limpia del URL al leerlo (replaceState).
     */
    const [inlineToken, setInlineToken] = useState<string | null>(null);

    // ── 1. Leer query params ──────────────────────────────────────
    const deepLink = useMemo<UpgradeDeepLinkContext>(() => {
        const role = searchParams.get('role');
        const current = searchParams.get('current') as TierCode | null;
        const schoolId = searchParams.get('school_id');
        const upsell = searchParams.get('upsell');
        const returnTo = searchParams.get('return');
        const actionRaw = searchParams.get('action') as UpgradeAction | null;

        return {
            role,
            currentPlan: current,
            schoolId,
            upsell,
            returnTo,
            action: actionRaw || (current || schoolId ? 'select_plan' : 'view'),
        };
    }, [searchParams]);

    // ── 1b. Leer token inline del hash (#t=...) y limpiar URL ─────
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const hash = window.location.hash;
        if (hash.startsWith('#t=') || hash.startsWith('#') && hash.includes('t=')) {
            const m = hash.match(/[#&]t=([^&]+)/);
            if (m && m[1]) {
                const token = decodeURIComponent(m[1]);
                setInlineToken(token);
                // Decodifica el JWT para extraer userId/email sin contactar Supabase
                try {
                    const payload = JSON.parse(atob(token.split('.')[1] || ''));
                    if (payload?.sub) {
                        setSession({
                            userId: payload.sub,
                            email: payload.email ?? null,
                        });
                    }
                } catch {
                    // JWT mal formado, ignoramos
                }
                // Limpia el hash del URL para no exponer el token
                window.history.replaceState(
                    null,
                    '',
                    window.location.pathname + window.location.search
                );
            }
        }
    }, []);

    // ── 2. Verificar sesión Supabase ──────────────────────────────
    useEffect(() => {
        let mounted = true;

        supabase.auth.getSession().then(({ data }) => {
            if (!mounted) return;
            if (data.session?.user) {
                setSession({
                    userId: data.session.user.id,
                    email: data.session.user.email ?? null,
                });
            }
            setSessionLoaded(true);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, newSession) => {
                if (!mounted) return;
                // Solo sobrescribe sesion si Supabase tiene una REAL.
                // Si no, NO wipeamos — puede que hayamos seteado sesion
                // desde el inlineToken (URL hash) y Supabase no la conoce
                // porque vive en otro dominio.
                if (newSession?.user) {
                    setSession({
                        userId: newSession.user.id,
                        email: newSession.user.email ?? null,
                    });
                }
            }
        );

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, []);

    // ── 3. Crear upgrade request al BFF ───────────────────────────
    const createUpgradeRequest = useCallback(
        async (payload: UpgradeRequestPayload): Promise<{
            ok: boolean;
            requestId?: string;
            error?: string;
        }> => {
            if (!session?.userId) {
                return {
                    ok: false,
                    error:
                        'Debes iniciar sesión en SportMaps para enviar tu solicitud.',
                };
            }
            if (!deepLink.schoolId) {
                return {
                    ok: false,
                    error: 'No detectamos tu escuela. Vuelve al admin y reintenta.',
                };
            }

            try {
                // Prioridad de token:
                //   1. inlineToken (vino por hash desde admin app)
                //   2. Sesión activa de Supabase en este dominio (si la hay)
                let token = inlineToken;
                if (!token) {
                    const { data: { session: supaSession } } = await supabase.auth.getSession();
                    token = supaSession?.access_token ?? null;
                }

                if (!token) {
                    return {
                        ok: false,
                        error: 'Sesión expirada. Vuelve a iniciar sesión.',
                    };
                }

                const res = await fetch(`${BFF_URL}/api/v1/upgrade-requests`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                        'x-school-id': deepLink.schoolId,
                    },
                    body: JSON.stringify({
                        ...payload,
                        source: 'landing',
                        source_url:
                            typeof window !== 'undefined'
                                ? window.location.href
                                : null,
                    }),
                });

                const data = await res.json();

                if (!res.ok) {
                    return {
                        ok: false,
                        error: data?.error || 'No pudimos enviar tu solicitud.',
                    };
                }

                return {
                    ok: true,
                    requestId: data.request_id,
                };
            } catch (err: any) {
                return {
                    ok: false,
                    error: err.message || 'Error de red. Intenta de nuevo.',
                };
            }
        },
        [session, deepLink.schoolId, inlineToken]
    );

    // ── 4. URL de retorno al admin app ────────────────────────────
    const goBackToApp = useCallback(() => {
        if (deepLink.returnTo) {
            window.location.href = deepLink.returnTo;
        } else {
            const appUrl =
                (import.meta as any).env?.VITE_APP_URL ||
                'https://app.sportmaps.co';
            window.location.href = `${appUrl}/mi-plan`;
        }
    }, [deepLink.returnTo]);

    return {
        deepLink,
        session,
        isAuthenticated: !!session || !!inlineToken,
        sessionLoaded,
        /**
         * True si la visita viene de admin app autenticada (mostrar contexto).
         * Considera tanto session (Supabase local) como inlineToken (de URL hash).
         */
        hasContext: !!deepLink.schoolId && (!!session || !!inlineToken),
        createUpgradeRequest,
        goBackToApp,
    };
}
