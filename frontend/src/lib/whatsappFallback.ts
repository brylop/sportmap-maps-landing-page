/**
 * Fallback común cuando una Edge Function de Supabase falla:
 * abrimos WhatsApp con un mensaje pre-poblado para que el lead nunca se pierda.
 *
 * El backend (Edge Functions) puede caerse por env vars desconfiguradas,
 * deploy desactualizado o CORS — pero el flujo comercial sigue funcionando.
 */

export const SALES_WHATSAPP = '573128463555';

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
  const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

export function fallbackToWhatsapp(label: string, fields: Record<string, LeadField>) {
  openWhatsappWithMessage(buildLeadMessage(label, fields));
}
