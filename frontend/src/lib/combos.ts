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

export const combos: Combo[] = [
  {
    id: "academia-tienda",
    name: "Academia + Tienda",
    emoji: "🏫🎽",
    modules: ["Escuela Pro", "Marketplace Pro"],
    pitch: "Vende uniformes y equipamiento propio sin caos",
    description:
      "Para academias que quieren monetizar más allá de la matrícula mensual.",
    normalPrice: 358000,
    comboPrice: 299000,
  },
  {
    id: "coach-tienda",
    name: "Coach con Tienda Propia",
    emoji: "🏃🎽",
    modules: ["Coach Pro", "Marketplace Pro"],
    pitch: "Marca personal con programas digitales + merchandising propio",
    description:
      "Para entrenadores que quieren construir un negocio escalable con productos.",
    normalPrice: 298000,
    comboPrice: 249000,
  },
  {
    id: "escuela-eventos",
    name: "Escuela Eventos",
    emoji: "🏫🏆",
    modules: ["Escuela Pro", "Organizador Pro"],
    pitch: "Organiza torneos y festivales propios para tus alumnos",
    description:
      "Para academias que organizan competencias internas o externas con regularidad.",
    normalPrice: 408000,
    comboPrice: 339000,
    badge: "MÁS POPULAR",
  },
  {
    id: "academia-salud",
    name: "Academia Salud Deportiva",
    emoji: "🏫❤️",
    modules: ["Escuela Pro", "Wellness Pro"],
    pitch: "Fisio o psicólogo deportivo integrado en tu academia",
    description:
      "Ideal para porrismo, gimnasia y deportes de alto impacto físico donde la salud es central.",
    normalPrice: 308000,
    comboPrice: 259000,
  },
  {
    id: "clinica-deportiva",
    name: "Clínica Deportiva",
    emoji: "❤️🔧",
    modules: ["Wellness Pro", "Servicio Pro"],
    pitch: "Centro de salud deportiva con servicios complementarios",
    description:
      "Para centros que ofrecen terapia, nutrición y servicios profesionales bajo una marca.",
    normalPrice: 258000,
    comboPrice: 219000,
  },
  {
    id: "federacion-completa",
    name: "Federación Completa",
    emoji: "🏆🏆",
    modules: ["Federación Pro", "Organizador Pro"],
    pitch: "Federación + circuito de torneos propios en una sola plataforma",
    description: "Para ligas que ya operan un calendario competitivo anual.",
    normalPrice: 798000,
    comboPrice: 669000,
    anchor: "Equivale a 2 asistentes administrativos full-time",
  },
  {
    id: "academia-360",
    name: "Academia 360°",
    emoji: "🏫🎽🏆",
    modules: ["Escuela Pro", "Marketplace Pro", "Organizador Pro"],
    pitch: "Academia premium: alumnos + tienda + eventos propios",
    description:
      "Modelo full-stack para academias que quieren maximizar revenue por alumno.",
    normalPrice: 607000,
    comboPrice: 449000,
    anchor: "Equivale a 1.3 asistentes administrativos full-time",
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
    `• Precio referencial: ${formatPriceCOP(combo.comboPrice)}/mes (valor normal ${formatPriceCOP(
      combo.normalPrice
    )})`,
    "• Tamaño aproximado: ___ (alumnos / clientes / eventos)",
    utmSource
      ? `• ¿Cómo nos conociste?: ${utmSource}`
      : "• ¿Cómo nos conociste?: ___",
    "",
    "¿Cómo seguimos?",
  ];
  return lines.join("\n");
}
