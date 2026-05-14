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

function resolveBffUrl(): string {
    const configured = (import.meta as any).env?.VITE_BFF_URL;
    if (configured) return configured;
    return 'https://sportmaps-bff.onrender.com';
}

const BFF_URL = resolveBffUrl();

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
                if (newSession?.user) {
                    setSession({
                        userId: newSession.user.id,
                        email: newSession.user.email ?? null,
                    });
                } else {
                    setSession(null);
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
                // Obtenemos el JWT actual de Supabase para autenticar al BFF
                const { data: { session: supaSession } } = await supabase.auth.getSession();
                const token = supaSession?.access_token;

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
        [session, deepLink.schoolId]
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
        isAuthenticated: !!session,
        sessionLoaded,
        /** True si la visita viene de admin app autenticada (mostrar contexto) */
        hasContext: !!deepLink.schoolId && !!session,
        createUpgradeRequest,
        goBackToApp,
    };
}
