import { salesWhatsappLink } from "@/lib/whatsappFallback";

/**
 * Black Friday 2026: un solo lugar para la promo de la landing.
 *
 * El texto es el MISMO que el usuario aprobó para el correo a escuelas y para Mapi
 * (repo sportmaps-demo: `bff/scripts/campana-bf-escuelas.ts` y `CONFIG_COMERCIAL.promo`
 * en `bff/src/services/plataforma-wa-leads.service.ts`). Si cambia allá, se cambia acá.
 * No agregar condiciones que no estén en esa fuente (tarjeta, etc.). `aplicaA` lo confirmó el usuario el 2026-11-24
 * (el correo ya excluía a las escuelas con suscripción activa).
 *
 * Se apaga sola: después de `pedirHasta` ningún componente de la promo se muestra.
 * El prerender hornea el HTML con la barra; un deploy posterior al 30-nov la saca también del HTML.
 */
export const PROMO_BF = {
  id: "bf-2026",
  cupos: 20,
  aplicaA: "Para escuelas nuevas o en periodo de prueba.",
  gratisHasta: "31 de diciembre",
  pedirHastaTexto: "lunes 30 de noviembre",
  /** Último instante para pedir el cupo (hora Colombia). */
  pedirHasta: "2026-11-30T23:59:59-05:00",
  /** Escuela Start mensual, de `rolePricingConfigs` (RolePricingSection.tsx). No se importa de allá para no meter ese componente en el bundle del header. */
  precioDesdeEnero: 69000,
  /** Mismo mensaje que el botón del correo: Mapi ya responde con la promo cuando lo recibe. */
  mensajeWhatsapp: "Hola, quiero mi cupo Black Friday para mi escuela",
} as const;

export function promoBFActiva(ahora: number = Date.now()): boolean {
  return ahora <= Date.parse(PROMO_BF.pedirHasta);
}

export function enlaceCupoBF(): string {
  return salesWhatsappLink(PROMO_BF.mensajeWhatsapp);
}

export function pesosCOP(n: number): string {
  return `$${n.toLocaleString("es-CO").replace(/,/g, ".")}`;
}

/** Clic en cualquier CTA de la promo, para medir qué ubicación convierte. */
export function registrarClicPromoBF(ubicacion: string): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "promo_click", {
      event_category: "promo",
      event_label: `${PROMO_BF.id}_${ubicacion}`,
      promo: PROMO_BF.id,
      ubicacion,
    });
    window.dataLayer?.push({ event: "promo_click", promo: PROMO_BF.id, ubicacion });
  } catch {
    /* la analítica nunca bloquea el clic */
  }
}
