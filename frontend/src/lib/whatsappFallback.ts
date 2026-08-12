/**
 * Fallback común cuando una Edge Function de Supabase falla:
 * abrimos WhatsApp con un mensaje pre-poblado para que el lead nunca se pierda.
 *
 * El backend (Edge Functions) puede caerse por env vars desconfiguradas,
 * deploy desactualizado o CORS — pero el flujo comercial sigue funcionando.
 */

/**
 * Número comercial único del sitio. Se configura con `VITE_SALES_WHATSAPP`
 * (Vercel → Environment Variables). El literal es el valor real de producción
 * cuando la variable no está definida, así que debe quedar correcto.
 *
 * Formato: solo dígitos con indicativo país, como lo espera wa.me.
 */
export const SALES_WHATSAPP = (
  import.meta.env.VITE_SALES_WHATSAPP || '573202683539'
).replace(/\D/g, '');

/** El mismo número en formato legible: `+57 320 268 3539`. */
export const SALES_PHONE_DISPLAY =
  SALES_WHATSAPP.length === 12 && SALES_WHATSAPP.startsWith('57')
    ? `+57 ${SALES_WHATSAPP.slice(2, 5)} ${SALES_WHATSAPP.slice(5, 8)} ${SALES_WHATSAPP.slice(8)}`
    : `+${SALES_WHATSAPP}`;

/** Enlace `tel:` para los teléfonos clicables de footer y páginas legales. */
export const SALES_PHONE_TEL = `tel:+${SALES_WHATSAPP}`;

/** Construye el enlace de WhatsApp, con mensaje pre-poblado opcional. */
export function salesWhatsappLink(message?: string): string {
  const base = `https://wa.me/${SALES_WHATSAPP}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type LeadField = string | number | null | undefined;

export function buildLeadMessage(
  label: string,
  fields: Record<string, LeadField>
): string {
  const lines: string[] = [`Hola SportMaps, registro de *${label}* desde el sitio:`, ''];
  for (const [key, value] of Object.entries(fields)) {
    if (value === null || value === undefined || value === '') continue;
    lines.push(`• ${key}: ${String(value)}`);
  }
  return lines.join('\n');
}

export function openWhatsappWithMessage(message: string) {
  window.open(salesWhatsappLink(message), '_blank');
}

export function fallbackToWhatsapp(label: string, fields: Record<string, LeadField>) {
  openWhatsappWithMessage(buildLeadMessage(label, fields));
}
