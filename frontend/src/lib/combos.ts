/**
 * Combos multi-rol — single source of truth.
 *
 * Cada combo agrupa 2-3 módulos del catálogo de SportMaps con precio fijo
 * (no porcentaje) menor a la suma individual, para incentivar adopción
 * cruzada.
 *
 * Reglas de actualización:
 * - normalPrice debe coincidir con la suma de los tiers Pro de cada módulo
 *   en RolePricingSection.tsx (monthlyPrice, NO el anual).
 * - comboPrice es decisión de margen comercial — editable.
 * - Si cambias precios en RolePricingSection, recalcula normalPrice aquí.
 */

export interface Combo {
  id: string;
  name: string;
  emoji: string;
  /** Módulos incluidos, en orden visual */
  modules: string[];
  /** Frase de uso de una línea */
  pitch: string;
  /** Descripción larga para sales pitch */
  description: string;
  /** Suma del precio Pro mensual de cada módulo (para tachado) */
  normalPrice: number;
  /** Precio fijo del combo (decisión de margen) */
  comboPrice: number;
  /** Badge opcional (ej. "MÁS POPULAR") — solo uno por sección */
  badge?: string;
  /** Frase ancla de costo-oportunidad para combos enterprise */
  anchor?: string;
}

// 2026-10-14: se retiraron los combos armados con SKUs que no se pueden comprar
// (Marketplace Pro, Organizador Pro, Federación Pro, Servicio Pro / Clínica).
// Los que quedan suman SOLO precios publicados: Escuela Pro ($159.000), adicional
// Torneos ($49.000), adicional Tienda escolar ($49.000) y Wellness Pro ($59.000).
// Sin descuento inventado: comboPrice = normalPrice hasta que el negocio decida uno.
export const combos: Combo[] = [
  {
    id: "academia-tienda",
    name: "Academia + Tienda",
    emoji: "🏫🎽",
    modules: ["Escuela Pro", "Adicional Tienda escolar"],
    pitch: "Vende los uniformes y kits de tu escuela con tu propia pasarela",
    description:
      "Para academias que quieren monetizar más allá de la matrícula mensual.",
    normalPrice: 208000,
    comboPrice: 208000,
  },
  {
    id: "escuela-eventos",
    name: "Escuela Eventos",
    emoji: "🏫🏆",
    modules: ["Escuela Pro", "Adicional Torneos"],
    pitch: "Ligas y copas con fixture, goleadores, tabla pública e inscripción con cobro",
    description:
      "Para academias que organizan torneos internos o con otras escuelas.",
    normalPrice: 208000,
    comboPrice: 208000,
  },
  {
    id: "academia-salud",
    name: "Academia Salud Deportiva",
    emoji: "🏫❤️",
    modules: ["Escuela Pro", "Wellness Pro"],
    pitch: "El fisio de tu escuela, con agenda e historia clínica",
    description:
      "Ideal para deportes de alto impacto físico donde la salud es central.",
    normalPrice: 218000,
    comboPrice: 218000,
  },
  {
    id: "academia-360",
    name: "Academia 360°",
    emoji: "🏫🎽🏆",
    modules: ["Escuela Pro", "Adicional Tienda escolar", "Adicional Torneos"],
    pitch: "Alumnos + tienda + torneos propios",
    description:
      "Para academias que quieren tener la tienda y los torneos en la misma plataforma.",
    normalPrice: 257000,
    comboPrice: 257000,
  },
];

export function formatPriceCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function getUtmSource(): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get("utm_source");
}

/**
 * Construye un mensaje WhatsApp pre-armado que califica al lead antes
 * de la primera interacción humana. Incluye UTM source automáticamente
 * si está disponible en la URL.
 */
export function buildComboWhatsAppMessage(combo: Combo): string {
  const utmSource = getUtmSource();
  const lines = [
    "Hola SportMaps! 👋",
    "",
    `Quiero info del COMBO: ${combo.name}`,
    "",
    "📋 Mis datos:",
    `• Módulos: ${combo.modules.join(" + ")}`,
    `• Precio referencial: ${formatPriceCOP(combo.comboPrice)}/mes`,
    "• Tamaño aproximado: ___ (alumnos / clientes / eventos)",
    utmSource
      ? `• ¿Cómo nos conociste?: ${utmSource}`
      : "• ¿Cómo nos conociste?: ___",
    "",
    "¿Cómo seguimos?",
  ];
  return lines.join("\n");
}

// ============================================================================
// Wizard / ComboFinder helpers (Fase 3)
// ============================================================================

export interface WizardContext {
  /** Etiqueta humana del rol (ej. "Escuela / Academia deportiva") */
  roleLabel: string;
  /** Etiqueta humana de la necesidad (ej. "Vender uniformes / productos") */
  needLabel: string;
  /** Etiqueta humana del tamaño (ej. "50 - 300 alumnos") */
  sizeLabel: string;
}

/**
 * Versión enriquecida del WhatsApp message que incluye las respuestas
 * del wizard de 3 pasos. Reemplaza los campos "___" de la versión
 * estática por las respuestas reales del usuario.
 */
export function buildComboWhatsAppMessageWithContext(
  combo: Combo,
  ctx: WizardContext
): string {
  const utmSource = getUtmSource();
  const lines = [
    "Hola SportMaps! 👋",
    "",
    `Quiero info del COMBO: ${combo.name}`,
    "",
    "📋 Mis datos:",
    `• Tipo: ${ctx.roleLabel}`,
    `• Necesidad: ${ctx.needLabel}`,
    `• Tamaño aproximado: ${ctx.sizeLabel}`,
    `• Módulos: ${combo.modules.join(" + ")}`,
    `• Precio referencial: ${formatPriceCOP(combo.comboPrice)}/mes`,
    utmSource ? `• ¿Cómo nos conociste?: ${utmSource}` : null,
    "",
    "¿Cómo seguimos?",
  ].filter((l): l is string => l !== null);
  return lines.join("\n");
}

/**
 * Mensaje WhatsApp para recomendación de plan individual (no combo).
 */
export function buildIndividualPlanWhatsAppMessage(
  planName: string,
  ctx: WizardContext
): string {
  const utmSource = getUtmSource();
  const lines = [
    "Hola SportMaps! 👋",
    "",
    `Quiero info del plan: ${planName}`,
    "",
    "📋 Mis datos:",
    `• Tipo: ${ctx.roleLabel}`,
    `• Necesidad: ${ctx.needLabel}`,
    `• Tamaño aproximado: ${ctx.sizeLabel}`,
    utmSource ? `• ¿Cómo nos conociste?: ${utmSource}` : null,
    "",
    "¿Cómo seguimos?",
  ].filter((l): l is string => l !== null);
  return lines.join("\n");
}
