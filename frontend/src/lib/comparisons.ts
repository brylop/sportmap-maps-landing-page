/**
 * Comparison pages — single source of truth for /comparar/[competidor]
 *
 * Cada comparación captura BOFU intent ("alternativa a X", "X vs Y").
 * Diseñadas para honestidad intelectual: decimos dónde gana cada uno.
 * Eso construye confianza y aumenta conversión.
 */

export interface ComparisonFeature {
  feature: string;
  competitor: string;
  sportmaps: string;
  /** Si true, marca como ventaja clara de SportMaps */
  sportmapsAdvantage?: boolean;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface Comparison {
  slug: string;
  competitorName: string;
  competitorLogo?: string;
  /** Una frase para el hero */
  tagline: string;
  /** Resumen ejecutivo: "Si X, elige A. Si Y, elige B." */
  tldr: {
    chooseCompetitor: string;
    chooseSportMaps: string;
  };
  /** Tabla principal de features lado a lado */
  features: ComparisonFeature[];
  /** Honestidad: dónde gana el competidor */
  competitorWins: string[];
  /** Donde gana SportMaps */
  sportmapsWins: string[];
  /** Comparación de costo total con números reales */
  costExample: {
    scenarioLabel: string;
    rows: { concept: string; competitorCost: string; sportmapsCost: string }[];
    competitorTotal: string;
    sportmapsTotal: string;
  };
  /** FAQ específicas de esta comparación */
  faqs: ComparisonFAQ[];
  /** SEO meta description override */
  metaDescription: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "clupik",
    competitorName: "Clupik",
    tagline:
      "Si estás evaluando Clupik para tu academia en Colombia, esta es la comparación honesta con SportMaps. Precios reales, features lado a lado y dónde gana cada uno.",
    tldr: {
      chooseCompetitor:
        "Si operás en España con Mercado Pago, ya tenés el equipo entrenado en Clupik y no necesitás WhatsApp AI, Clupik sigue siendo válido.",
      chooseSportMaps:
        "Si operás en Colombia, querés Wompi integrado, app de marca propia incluida y WhatsApp AI para cobranza, SportMaps es ~3x más barato a igualdad de features.",
    },
    features: [
      {
        feature: "Plan mensual base",
        competitor: "$200.000/mes",
        sportmaps: "$159.000/mes",
        sportmapsAdvantage: true,
      },
      {
        feature: "App de marca propia",
        competitor: "+$245.000/mes",
        sportmaps: "Incluida",
        sportmapsAdvantage: true,
      },
      {
        feature: "Pasarela de pagos",
        competitor: "Mercado Pago (+$75.000/mes)",
        sportmaps: "Wompi (incluida)",
        sportmapsAdvantage: true,
      },
      {
        feature: "WhatsApp AI para cobranza",
        competitor: "No disponible",
        sportmaps: "500 conversaciones/mes",
        sportmapsAdvantage: true,
      },
      {
        feature: "Recordatorios automáticos",
        competitor: "Email + SMS",
        sportmaps: "WhatsApp con IA conversacional",
        sportmapsAdvantage: true,
      },
      {
        feature: "Soporte",
        competitor: "Email · 24-48h respuesta",
        sportmaps: "WhatsApp directo · <2h en horario hábil",
        sportmapsAdvantage: true,
      },
      {
        feature: "Integración contabilidad",
        competitor: "Add-on adicional",
        sportmaps: "API incluida",
        sportmapsAdvantage: true,
      },
      {
        feature: "Migración desde Excel",
        competitor: "Self-service",
        sportmaps: "Asistida sin costo",
        sportmapsAdvantage: true,
      },
      {
        feature: "Maketplace propio",
        competitor: "Solo Clupik",
        sportmaps: "Ecosistema abierto (marcas, eventos, descuentos)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Comunidad y madurez",
        competitor: "10+ años de mercado",
        sportmaps: "3 años, crecimiento acelerado en Latam",
      },
    ],
    competitorWins: [
      "Madurez del producto: 10+ años en el mercado europeo y latam",
      "Comunidad establecida en mercados hispanoparlantes específicos",
      "Marketplace propio de academias (si te interesa esa distribución)",
      "Integraciones con servicios europeos específicos",
    ],
    sportmapsWins: [
      "Pricing 3x más bajo a igualdad real de features",
      "WhatsApp AI: la única plataforma deportiva con IA conversacional en cobranza",
      "Soporte en Colombia con respuesta <2h, no en otra zona horaria",
      "Integraciones nativas con Wompi, ePayco y bancos colombianos",
      "App de marca propia incluida (Clupik la cobra aparte como add-on)",
      "Migración asistida sin costo desde Clupik o Excel",
      "Ecosistema más amplio: mapa de eventos, marketplace de marcas, descuentos cruzados entre roles",
    ],
    costExample: {
      scenarioLabel: "Academia de 200 alumnos en Bogotá, mensualidad promedio $300.000",
      rows: [
        {
          concept: "Plan base anual",
          competitorCost: "$2.400.000",
          sportmapsCost: "$1.908.000",
        },
        {
          concept: "App marca propia",
          competitorCost: "$2.940.000",
          sportmapsCost: "Incluida",
        },
        {
          concept: "Pasarela pagos",
          competitorCost: "$900.000",
          sportmapsCost: "Incluida",
        },
        {
          concept: "WhatsApp AI",
          competitorCost: "No disponible",
          sportmapsCost: "Incluido (500 msg/mes)",
        },
        {
          concept: "Integración contabilidad",
          competitorCost: "$600.000",
          sportmapsCost: "API incluida",
        },
      ],
      competitorTotal: "$6.840.000/año",
      sportmapsTotal: "$1.908.000/año",
    },
    faqs: [
      {
        question: "¿Puedo migrar de Clupik a SportMaps sin perder datos?",
        answer:
          "Sí. El equipo de migración de SportMaps exporta alumnos, historial de pagos y agenda en menos de 30 días, sin costo. Vos solo aprobás el resultado antes de cortar el otro sistema.",
      },
      {
        question: "¿Por qué SportMaps cuesta menos siendo más completo?",
        answer:
          "Tres razones: (1) infraestructura más moderna y eficiente; (2) construido en Latam para Latam, sin overhead de adaptación; (3) modelo de negocio diferente, con revenue de ecosistema (marketplace, sponsorships) que subsidia el SaaS.",
      },
      {
        question: "¿Funciona WhatsApp AI con números de Colombia?",
        answer:
          "Sí, está construido nativamente para WhatsApp Business API en Latam. Acepta números colombianos sin trámites adicionales.",
      },
      {
        question: "¿Y si mi academia ya está en Clupik hace años?",
        answer:
          "Entendible. Te ofrecemos prueba 30 días sin compromiso, manteniendo Clupik activo en paralelo. Si SportMaps no te convence, no migrás. Si sí, hacemos la migración en otros 30 días y cancelás Clupik.",
      },
    ],
    metaDescription:
      "SportMaps vs Clupik: comparativa completa para academias deportivas en Colombia. Precios reales, features lado a lado y migración asistida sin costo.",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
