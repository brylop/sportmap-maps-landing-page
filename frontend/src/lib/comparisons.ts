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
    /**
     * Frase de cierre bajo la tabla de costos. OBLIGATORIA y específica por
     * comparación: contra Clupik el ahorro es ~70%, pero contra rivales locales
     * con precio parejo (QueFluya, Athleos) el argumento NO es precio sino
     * capacidad incluida. No hardcodear un "+70%" genérico que mentiría.
     */
    savingsHighlight: string;
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
      savingsHighlight: "Ahorras +70% vs Clupik a igualdad de features",
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

  // ── QueFluya ──────────────────────────────────────────────────────────────
  // Competidor colombiano más directo por precio. Ojo: entra en $69k igual que
  // SportMaps Start → el argumento NO es "más barato", es "mismo precio, más
  // alcance + DIAN incluida". Ser honesto o se pierde credibilidad.
  {
    slug: "quefluya",
    competitorName: "QueFluya",
    tagline:
      "QueFluya es simple y barato para gestionar una academia. Esta es la comparación honesta con SportMaps: mismo precio de entrada, pero distinto alcance. Dónde gana cada uno, sin humo.",
    tldr: {
      chooseCompetitor:
        "Si solo necesitas cobrar mensualidades, marcar asistencia y llevar caja de UNA academia, sin facturación electrónica ni torneos, QueFluya es simple, barato y suficiente.",
      chooseSportMaps:
        "Si quieres facturación electrónica DIAN incluida, torneos con inscripciones y boletería, conexión con marcas y un ecosistema que va más allá de tu academia, SportMaps cuesta lo mismo en la entrada y hace mucho más.",
    },
    features: [
      { feature: "Plan de entrada", competitor: "$69.000/mes", sportmaps: "$69.000/mes (Start)", sportmapsAdvantage: false },
      { feature: "Cobro de mensualidad recurrente", competitor: "Sí (renovación automática)", sportmaps: "Sí (Wompi + MercadoPago)", sportmapsAdvantage: false },
      { feature: "Asistencia digital", competitor: "Sí", sportmaps: "Sí", sportmapsAdvantage: false },
      { feature: "Facturación electrónica DIAN", competitor: "No incluida", sportmaps: "Incluida (multi-PAC)", sportmapsAdvantage: true },
      { feature: "Torneos, inscripciones y boletería", competitor: "No", sportmaps: "Sí (con abonos y QR)", sportmapsAdvantage: true },
      { feature: "Conexión con marcas / patrocinios", competitor: "No", sportmaps: "Marketplace + SponsorMatch", sportmapsAdvantage: true },
      { feature: "Ecosistema entre escuelas", competitor: "Cerrado a tu academia", sportmaps: "Mapa, eventos y descuentos cruzados", sportmapsAdvantage: true },
      { feature: "App del atleta / perfil portable", competitor: "Portal del alumno", sportmaps: "Perfil deportivo portable + gratis", sportmapsAdvantage: true },
      { feature: "Precio 1er mes", competitor: "Gratis", sportmaps: "Gratis", sportmapsAdvantage: false },
    ],
    competitorWins: [
      "Simplicidad: hace pocas cosas y las hace fáciles, con curva de aprendizaje mínima",
      "Precio agresivo y muy claro, segmentado por número de administradores",
      "Multi-disciplina establecida (baile, música, deportes) con base de usuarios",
      "Suficiente si nunca vas a facturar electrónico ni organizar torneos",
    ],
    sportmapsWins: [
      "Facturación electrónica DIAN incluida — QueFluya no la trae; tocaría contratarla aparte (Alegra/Siigo)",
      "Torneos y eventos con inscripciones, abonos y boletería QR",
      "Conexión real con marcas: patrocinios y descuentos para tus familias",
      "Ecosistema abierto: tu academia aparece en el mapa deportivo, no aislada",
      "Cobro recurrente con pasarelas locales (Wompi + MercadoPago)",
      "Perfil del atleta portable y gratuito que suma a la comunidad",
    ],
    costExample: {
      scenarioLabel:
        "Academia que además necesita FACTURAR electrónicamente a las familias (obligación DIAN)",
      rows: [
        { concept: "Plan de gestión", competitorCost: "$89.000 (Pro)", sportmapsCost: "$159.000 (Pro)" },
        { concept: "Facturación electrónica DIAN", competitorCost: "Aparte: +$49.900 (Alegra)", sportmapsCost: "Incluida" },
        { concept: "Torneos / boletería", competitorCost: "No disponible", sportmapsCost: "Incluido" },
        { concept: "Doble digitación (cobré aquí, facturo allá)", competitorCost: "Sí (horas/mes)", sportmapsCost: "No (factura automática)" },
      ],
      competitorTotal: "$138.900/mes + trabajo manual",
      sportmapsTotal: "$159.000/mes todo incluido",
      savingsHighlight:
        "Mismo rango de precio — pero con DIAN y torneos incluidos y sin doble digitación",
    },
    faqs: [
      {
        question: "¿QueFluya factura electrónicamente a la DIAN?",
        answer:
          "Según su información pública, QueFluya gestiona cobros, recibos y caja, pero no incluye facturación electrónica DIAN. Para cumplir tendrías que contratar un proveedor aparte (Alegra, Siigo) y digitar dos veces. SportMaps la trae incluida y factura automáticamente cada cobro.",
      },
      {
        question: "¿Es SportMaps más caro que QueFluya?",
        answer:
          "En el plan de entrada, no: ambos arrancan en $69.000/mes y con primer mes gratis. La diferencia es lo que incluye cada peso: SportMaps agrega facturación DIAN, torneos, marcas y ecosistema que QueFluya no tiene.",
      },
      {
        question: "Ya uso QueFluya, ¿puedo migrar?",
        answer:
          "Sí. Migramos tu lista de alumnos, historial de pagos y horarios sin costo, y puedes mantener QueFluya en paralelo durante la prueba. Si SportMaps no te convence, no migras.",
      },
    ],
    metaDescription:
      "SportMaps vs QueFluya: comparación honesta para academias deportivas en Colombia. Mismo precio de entrada, pero SportMaps incluye facturación DIAN, torneos y marcas.",
  },

  // ── Athleos ───────────────────────────────────────────────────────────────
  // El clon local más avanzado (+500 escuelas, PSE, Ley 2300). Sin precio
  // público → la comparación es por capacidad, no por número.
  {
    slug: "athleos",
    competitorName: "Athleos",
    tagline:
      "Athleos y SportMaps se parecen mucho: escuela deportiva, cobros a las familias, asistencia y pagos locales. Aquí está la diferencia real, sin exagerar dónde ellos son fuertes.",
    tldr: {
      chooseCompetitor:
        "Si quieres una herramienta enfocada y probada solo en gestión de escuela (matrícula, cobros, asistencia) con cumplimiento de cobranza responsable, Athleos es una opción sólida y con tracción.",
      chooseSportMaps:
        "Si además de gestionar quieres facturar a la DIAN, organizar torneos, conectar con marcas y aparecer en un ecosistema deportivo más amplio, SportMaps cubre todo eso en una sola plataforma.",
    },
    features: [
      { feature: "Pago del padre desde la app (PSE/tarjeta)", competitor: "Sí", sportmaps: "Sí (Wompi + MercadoPago + PSE)", sportmapsAdvantage: false },
      { feature: "Facturación automática programada", competitor: "Sí (cobro)", sportmaps: "Sí + factura electrónica DIAN", sportmapsAdvantage: true },
      { feature: "Facturación electrónica DIAN", competitor: "No confirmada", sportmaps: "Incluida (multi-PAC)", sportmapsAdvantage: true },
      { feature: "Cobranza responsable (Ley 2300/2023)", competitor: "Sí (bandera explícita)", sportmaps: "Sí (WhatsApp con límites)", sportmapsAdvantage: false },
      { feature: "Multi-sede", competitor: "Sí", sportmaps: "Sí", sportmapsAdvantage: false },
      { feature: "Torneos / eventos / boletería", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Marcas / patrocinios / marketplace", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Ecosistema y mapa deportivo", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Tracción en Colombia", competitor: "+500 escuelas", sportmaps: "En crecimiento", sportmapsAdvantage: false },
    ],
    competitorWins: [
      "Tracción real: reclama +500 escuelas ya operando en Colombia",
      "Cumplimiento explícito de la Ley 2300/2023 de cobranza responsable",
      "Producto enfocado y maduro en el núcleo escuela (matrícula, cobros, asistencia)",
      "Pagos locales colombianos (PSE, tarjeta, transferencia) bien resueltos",
    ],
    sportmapsWins: [
      "Facturación electrónica DIAN incluida (Athleos no la confirma en su oferta)",
      "Torneos y eventos con inscripciones, abonos y boletería — no solo gestión de escuela",
      "Conexión con marcas y patrocinios para tus atletas y familias",
      "Ecosistema abierto: mapa, descubrimiento y descuentos entre roles",
      "Modelo multi-actor (escuela, entrenador, padre, atleta, organizador, tienda) en una sola plataforma",
    ],
    costExample: {
      scenarioLabel:
        "Qué incluye cada plataforma por tu mensualidad (Athleos no publica precios; comparación por capacidad)",
      rows: [
        { concept: "Gestión de escuela + cobros", competitorCost: "Sí", sportmapsCost: "Sí" },
        { concept: "Facturación electrónica DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "Torneos + boletería", competitorCost: "No", sportmapsCost: "Incluido" },
        { concept: "Marcas / marketplace / ecosistema", competitorCost: "No", sportmapsCost: "Incluido" },
      ],
      competitorTotal: "Gestión de escuela",
      sportmapsTotal: "Escuela + fiscal + torneos + ecosistema",
      savingsHighlight:
        "Misma base de gestión — SportMaps agrega DIAN, torneos y ecosistema en el mismo lugar",
    },
    faqs: [
      {
        question: "¿En qué se diferencia SportMaps de Athleos?",
        answer:
          "Athleos es fuerte en el núcleo de gestión de escuela (matrícula, cobros, asistencia) y cumplimiento de cobranza. SportMaps cubre eso y suma facturación electrónica DIAN incluida, torneos con boletería, conexión con marcas y un ecosistema deportivo más amplio.",
      },
      {
        question: "¿SportMaps también cumple la Ley 2300 de cobranza?",
        answer:
          "Sí. Los recordatorios y la cobranza por WhatsApp respetan los límites de contacto y horarios que exige la Ley 2300/2023, igual que Athleos lo promociona.",
      },
      {
        question: "¿Puedo migrar desde Athleos sin fricción?",
        answer:
          "Sí, con migración asistida sin costo de alumnos, pagos y horarios, y prueba en paralelo antes de decidir.",
      },
    ],
    metaDescription:
      "SportMaps vs Athleos: comparación honesta de plataformas de gestión de escuelas deportivas en Colombia. Ambas cobran a las familias; SportMaps añade DIAN, torneos y ecosistema.",
  },

  // ── CuotaQ ────────────────────────────────────────────────────────────────
  {
    slug: "cuotaq",
    competitorName: "CuotaQ",
    tagline:
      "CuotaQ es especialista en cobro de cuotas de clubes en varios países, incluida Colombia. SportMaps hace el cobro y además toda la operación deportiva. Comparación honesta.",
    tldr: {
      chooseCompetitor:
        "Si tu prioridad es puramente cobrar cuotas de socios con débito automático y control de acceso por QR, y ya operas como club social, CuotaQ es un especialista sólido y multi-país.",
      chooseSportMaps:
        "Si además del cobro quieres gestionar la escuela formativa completa (categorías, asistencia, entrenadores), facturar a la DIAN y organizar torneos, SportMaps integra todo el ciclo.",
    },
    features: [
      { feature: "Cobro recurrente automático", competitor: "Sí (MercadoPago + débito)", sportmaps: "Sí (Wompi + MercadoPago)", sportmapsAdvantage: false },
      { feature: "Carnet QR + control de acceso", competitor: "Sí", sportmaps: "Sí (carnet + acceso físico)", sportmapsAdvantage: false },
      { feature: "Recordatorios de mora (WhatsApp)", competitor: "Sí", sportmaps: "Sí (con IA)", sportmapsAdvantage: true },
      { feature: "Facturación electrónica DIAN", competitor: "No confirmada", sportmaps: "Incluida", sportmapsAdvantage: true },
      { feature: "Asistencia por categoría/entrenamiento", competitor: "Limitada", sportmaps: "Sí (escuela formativa)", sportmapsAdvantage: true },
      { feature: "Torneos, brackets y boletería", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Marcas / marketplace", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
    ],
    competitorWins: [
      "Especialista en cobro recurrente, muy pulido en morosidad y débito automático",
      "Multi-país con pasarelas locales por mercado (opera en Colombia)",
      "Carnet digital QR con control de acceso en portería",
      "Implementación rápida para clubes que solo quieren ordenar la cobranza",
    ],
    sportmapsWins: [
      "Gestión de escuela formativa completa: categorías por edad, asistencia a entrenamiento, entrenadores",
      "Facturación electrónica DIAN incluida",
      "Torneos con inscripciones, abonos y boletería QR",
      "Conexión con marcas y ecosistema deportivo abierto",
      "Un solo sistema para cobrar Y operar, no solo cobrar",
    ],
    costExample: {
      scenarioLabel: "Club-escuela que quiere cobrar Y gestionar la parte deportiva y fiscal",
      rows: [
        { concept: "Cobro de cuotas", competitorCost: "Sí", sportmapsCost: "Sí" },
        { concept: "Gestión deportiva (categorías/asistencia)", competitorCost: "Limitada", sportmapsCost: "Completa" },
        { concept: "Facturación DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "Torneos + boletería", competitorCost: "No", sportmapsCost: "Incluido" },
      ],
      competitorTotal: "Cobro de cuotas",
      sportmapsTotal: "Cobro + operación deportiva + fiscal",
      savingsHighlight:
        "CuotaQ cobra; SportMaps cobra y además opera toda la escuela y factura a la DIAN",
    },
    faqs: [
      {
        question: "¿CuotaQ gestiona la parte deportiva o solo cobra?",
        answer:
          "CuotaQ está enfocado en la cobranza de cuotas y el control de acceso. La gestión deportiva formativa (categorías por edad, asistencia a entrenamiento, torneos) es donde SportMaps agrega el resto del ciclo.",
      },
      {
        question: "¿Ambos funcionan con pasarelas colombianas?",
        answer:
          "Sí, ambos operan con medios de pago locales. SportMaps suma Wompi y MercadoPago, y factura electrónicamente a la DIAN de forma incluida.",
      },
    ],
    metaDescription:
      "SportMaps vs CuotaQ: comparación honesta. CuotaQ es especialista en cobro de cuotas; SportMaps añade gestión deportiva completa, facturación DIAN y torneos.",
  },

  // ── AgendaPro ─────────────────────────────────────────────────────────────
  // El único competidor con DIAN, pero como add-on de $90k y no es vertical
  // deportivo. La comparación de costo SÍ favorece a SportMaps aquí.
  {
    slug: "agendapro",
    competitorName: "AgendaPro",
    tagline:
      "AgendaPro es un 'todo en uno' horizontal (deporte, belleza, salud) con facturación DIAN como add-on. SportMaps es vertical deportivo con DIAN incluida. Comparación con números reales.",
    tldr: {
      chooseCompetitor:
        "Si manejas un negocio genérico de agendamiento (o varios rubros a la vez) y quieres una marca grande con POS físico y agenda flexible, AgendaPro es una opción horizontal potente.",
      chooseSportMaps:
        "Si tu negocio es una escuela o club deportivo, SportMaps entiende tu ADN (categorías, asistencia, torneos, padre-atleta), incluye la facturación DIAN sin add-on y sale más barato con todo prendido.",
    },
    features: [
      { feature: "Plan medio", competitor: "$150.000/mes (Premium)", sportmaps: "$159.000/mes (Pro)", sportmapsAdvantage: false },
      { feature: "Facturación electrónica DIAN", competitor: "Add-on desde +$90.000/mes", sportmaps: "Incluida", sportmapsAdvantage: true },
      { feature: "Vertical deportivo (categorías, asistencia)", competitor: "Genérico, no deportivo", sportmaps: "Nativo deportivo", sportmapsAdvantage: true },
      { feature: "Cobro de mensualidad recurrente", competitor: "Pagos/POS genéricos", sportmaps: "Mensualidad deportiva recurrente", sportmapsAdvantage: true },
      { feature: "Torneos, brackets y boletería", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Relación padre-atleta / menores", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "Marcas / patrocinios", competitor: "No", sportmaps: "Sí", sportmapsAdvantage: true },
      { feature: "POS físico / terminal", competitor: "Sí", sportmaps: "Enfoque digital", sportmapsAdvantage: false },
      { feature: "Presencia de marca", competitor: "Grande en LatAm", sportmaps: "Enfocada en deporte CO", sportmapsAdvantage: false },
    ],
    competitorWins: [
      "Marca consolidada y músculo comercial en toda LatAm",
      "Muy horizontal: sirve a cualquier negocio de citas (deporte, belleza, salud)",
      "POS físico / terminal bancaria integrada",
      "Facturación electrónica DIAN disponible (aunque como add-on aparte)",
      "Precios públicos y transparentes",
    ],
    sportmapsWins: [
      "Facturación DIAN incluida — no un add-on de +$90.000/mes",
      "Vertical deportivo real: categorías por edad, asistencia a entrenamiento, métricas",
      "Torneos con inscripciones, abonos y boletería QR",
      "Modelo padre-atleta pensado para menores de edad",
      "Conexión con marcas y ecosistema deportivo",
      "Sale más barato con todo lo deportivo + fiscal encendido",
    ],
    costExample: {
      scenarioLabel:
        "Escuela deportiva de 200 alumnos que necesita gestión + facturación DIAN",
      rows: [
        { concept: "Plan de gestión", competitorCost: "$150.000 (Premium)", sportmapsCost: "$159.000 (Pro)" },
        { concept: "Facturación electrónica DIAN", competitorCost: "+$90.000 (add-on)", sportmapsCost: "Incluida" },
        { concept: "Módulo deportivo (categorías/torneos)", competitorCost: "No disponible", sportmapsCost: "Incluido" },
      ],
      competitorTotal: "$240.000/mes (sin módulo deportivo)",
      sportmapsTotal: "$159.000/mes todo incluido",
      savingsHighlight:
        "Ahorras ~$81.000/mes (~34%) y encima obtienes el módulo deportivo y la DIAN incluidos",
    },
    faqs: [
      {
        question: "¿AgendaPro incluye la facturación DIAN?",
        answer:
          "AgendaPro ofrece facturación electrónica DIAN, pero como un add-on adicional desde ~$90.000/mes sobre el plan base. En SportMaps la facturación electrónica está incluida en el plan.",
      },
      {
        question: "¿Por qué elegir un vertical deportivo y no un 'todo en uno'?",
        answer:
          "AgendaPro es genérico: te da agenda y pagos, pero no entiende categorías por edad, asistencia a entrenamiento, torneos ni la relación padre-atleta. SportMaps está construido para el deporte, así que no tienes que 'forzar' tu escuela dentro de un molde de citas.",
      },
      {
        question: "¿Cuánto ahorro real hay?",
        answer:
          "Para una escuela que necesita facturar, AgendaPro Premium ($150k) + DIAN add-on ($90k) = $240k/mes sin módulo deportivo. SportMaps Pro cuesta $159k/mes con DIAN y módulo deportivo incluidos: ~34% menos y más completo.",
      },
    ],
    metaDescription:
      "SportMaps vs AgendaPro: comparación con números reales. AgendaPro cobra la DIAN como add-on de +$90k/mes; SportMaps la incluye y es vertical deportivo, ~34% más barato.",
  },

  // ── Controla.Club ────────────────────────────────────────────────────────
  // Competidor colombiano de mayor tracción declarada (500+ centros). Viene
  // del gimnasio/control de acceso, no de la escuela formativa infantil — esa
  // es la diferencia real, no el precio (Controla.Club no publica precios).
  {
    slug: "controla-club",
    competitorName: "Controla.Club",
    tagline:
      "Controla.Club y SportMaps persiguen lo mismo — que a tu club no se le escape ni un cobro — pero vienen de negocios distintos: ellos del gimnasio y el control de acceso, nosotros de la escuela deportiva formativa. Comparación honesta con precios verificados de ambos lados.",
    tldr: {
      chooseCompetitor:
        "Si administras un gimnasio o centro deportivo con control de acceso físico, membresías tipo gimnasio (mensual/ilimitada) y necesitas filtrar miembros por beca o 'acuerdo de pago', Controla.Club está construido específicamente para eso.",
      chooseSportMaps:
        "Si administras una escuela o academia formativa —categorías por edad, entrenadores, torneos, relación padre-atleta menor de edad— y además necesitas facturar electrónicamente a la DIAN y conectar con marcas, SportMaps es el vertical correcto para ese ciclo completo.",
    },
    features: [
      {
        feature: "Plan de entrada",
        competitor: "$99.000 COP/mes (hasta 50 miembros)",
        sportmaps: "$69.000 COP/mes (hasta 50 alumnos, plan Start)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Prueba gratis",
        competitor: "7 días, sin tarjeta",
        sportmaps: "Plan Free permanente hasta 20 alumnos, sin tarjeta",
        sportmapsAdvantage: true,
      },
      {
        feature: "Control de acceso físico (portería/torniquete)",
        competitor: "Sí — core del producto",
        sportmaps: "Carnet QR digital, sin torniquete físico dedicado",
        sportmapsAdvantage: false,
      },
      {
        feature: "Membresías tipo gimnasio (mensual/ilimitada)",
        competitor: "Sí",
        sportmaps: "Planes por categoría deportiva, no membresía genérica",
        sportmapsAdvantage: false,
      },
      {
        feature: "Filtro de miembros por beca / acuerdo de pago",
        competitor: "Sí — etiquetas nativas en el panel",
        sportmaps: "No disponible aún",
        sportmapsAdvantage: false,
      },
      {
        feature: "Gamificación (puntos, retención)",
        competitor: "Sí ('ClubPoints', +30% retención declarado)",
        sportmaps: "Limitada",
        sportmapsAdvantage: false,
      },
      {
        feature: "Prospección de leads nuevos con IA por WhatsApp",
        competitor: "Sí (outbound, declara 5x tasa de respuesta)",
        sportmaps: "No — WhatsApp AI está enfocado en cobranza y recordatorios, no en prospección",
        sportmapsAdvantage: false,
      },
      {
        feature: "Multi-moneda",
        competitor: "Sí",
        sportmaps: "COP nativo; sin multi-moneda aún",
        sportmapsAdvantage: false,
      },
      {
        feature: "Comunidad / red social entre clubes",
        competitor: "Sí ('Social Controla', foros y reputación entre usuarios)",
        sportmaps: "No disponible",
        sportmapsAdvantage: false,
      },
      {
        feature: "LMS (cursos y contenido formativo)",
        competitor: "Sí (declarado en su lista de features)",
        sportmaps: "No disponible",
        sportmapsAdvantage: false,
      },
      {
        feature: "Asistente de IA embebido en el panel",
        competitor: "Sí ('Controli', contextual al producto)",
        sportmaps: "Sí (WhatsApp AI, enfocado en cobranza y recordatorios)",
        sportmapsAdvantage: false,
      },
      {
        feature: "Sitio web público del club con subdominio propio",
        competitor: "Sí ('Página Web del Club', lanzada recientemente)",
        sportmaps: "Perfil en el Directorio Deportivo; sitio propio no incluido aún",
        sportmapsAdvantage: false,
      },
      {
        feature: "Categorías deportivas por edad / formación",
        competitor: "Enfoque gimnasio, no categorías infantiles",
        sportmaps: "Núcleo del producto",
        sportmapsAdvantage: true,
      },
      {
        feature: "Relación padre-atleta (menores de edad)",
        competitor: "No es el foco del producto",
        sportmaps: "Sí — perfiles, permisos y portal de padres",
        sportmapsAdvantage: true,
      },
      {
        feature: "Facturación electrónica DIAN",
        competitor: "No confirmada",
        sportmaps: "Incluida (multi-PAC)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Torneos, brackets y boletería",
        competitor: "No",
        sportmaps: "Sí, con inscripciones y abonos",
        sportmapsAdvantage: true,
      },
      {
        feature: "Directorio para que atletas nuevos encuentren un club",
        competitor: "Sí ('Directorio Deportivo')",
        sportmaps: "Sí — mapa geolocalizado, es la tesis central del producto",
        sportmapsAdvantage: true,
      },
      {
        feature: "Marcas, patrocinios y marketplace",
        competitor: "No",
        sportmaps: "Sí (marketplace + sponsors)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Multi-actor (escuela, coach, federación, organizador, tienda)",
        competitor: "Centrado en el club/gimnasio",
        sportmaps: "8 tipos de organización en una sola plataforma",
        sportmapsAdvantage: true,
      },
    ],
    competitorWins: [
      "Control de acceso físico maduro: pensado desde el día uno para portería/torniquete de gimnasio",
      "Filtros de excepción de cobro ya resueltos — becas y 'acuerdo de pago' como etiquetas nativas, sin que salgan como mora",
      "Sitio web público del club con subdominio propio ya lanzado como feature",
      "Gamificación (ClubPoints) y prospección de leads nuevos por WhatsApp con IA — SportMaps no tiene ninguna de las dos",
      "Comunidad/red social entre clubes ('Social Controla') y un LMS de contenido formativo — dos gaps reales que SportMaps no tiene",
      "Multi-moneda nativo, útil si ya opera en varios países a la vez",
      "Tracción declarada: +500 centros activos, presencia autodeclarada en Panamá, Ecuador y Perú además de Colombia",
    ],
    sportmapsWins: [
      "Construido para la escuela formativa, no el gimnasio: categorías por edad, entrenadores, asistencia a entrenamiento",
      "Relación padre-atleta pensada para menores de edad, con permisos y portal dedicado",
      "Facturación electrónica DIAN incluida, sin add-on aparte",
      "Torneos con inscripciones, abonos y boletería QR",
      "Ecosistema abierto: marcas, patrocinios y descuentos cruzados entre roles, no solo el club",
      "Multi-vertical real: la misma plataforma sirve a escuelas, entrenadores independientes, federaciones, organizadores de eventos y tiendas",
    ],
    costExample: {
      scenarioLabel:
        "Academia/club de hasta 50 miembros — comparación de su plan de entrada vs el nuestro, mismo rango de capacidad",
      rows: [
        { concept: "Plan mensual (hasta 50 miembros/alumnos)", competitorCost: "$99.000 COP", sportmapsCost: "$69.000 COP" },
        { concept: "Facturación electrónica DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "Torneos + boletería", competitorCost: "No", sportmapsCost: "Incluido" },
        { concept: "Categorías por edad / escuela formativa", competitorCost: "Limitada (enfoque gimnasio)", sportmapsCost: "Completa" },
        { concept: "Gamificación (ClubPoints) + prospección IA", competitorCost: "Incluida", sportmapsCost: "No disponible aún" },
      ],
      competitorTotal: "$1.188.000 COP/año",
      sportmapsTotal: "$828.000 COP/año",
      savingsHighlight:
        "Para la misma capacidad (50 miembros), SportMaps cuesta ~30% menos al año — pero Controla.Club suma gamificación y prospección IA que SportMaps no tiene; no es solo una decisión de precio",
    },
    faqs: [
      {
        question: "¿En qué se diferencia SportMaps de Controla.Club?",
        answer:
          "Controla.Club está construido principalmente para gimnasios y centros deportivos: control de acceso físico, membresías tipo gimnasio y filtros de beca/acuerdo de pago. SportMaps está construido para la escuela deportiva formativa: categorías por edad, relación padre-atleta, torneos y facturación electrónica DIAN incluida. Si administras un gimnasio, Controla.Club puede encajar mejor; si administras una academia con niños y adolescentes, SportMaps está pensado para ese ciclo completo.",
      },
      {
        question: "¿Controla.Club tiene facturación electrónica DIAN?",
        answer:
          "No está confirmado en su oferta pública. SportMaps la incluye en el plan, sin add-on aparte, con proveedores autorizados (multi-PAC).",
      },
      {
        question: "¿Cuál tiene mejor control de acceso físico en portería?",
        answer:
          "Siendo honestos, Controla.Club: nació para eso y es su fortaleza declarada. SportMaps resuelve el carnet digital QR, pero no un sistema de torniquete dedicado.",
      },
      {
        question: "¿SportMaps tiene un directorio como el 'Directorio Deportivo' de Controla.Club?",
        answer:
          "Sí — es la tesis central del producto, no una feature agregada: un mapa geolocalizado donde escuelas, entrenadores y eventos son descubribles públicamente, con padres, atletas y marcas conectados al mismo ecosistema.",
      },
      {
        question: "¿Puedo migrar de Controla.Club a SportMaps?",
        answer:
          "Sí, con migración asistida sin costo de alumnos o miembros, historial de pagos y horarios, y prueba en paralelo antes de decidir — igual que con cualquier otro competidor.",
      },
      {
        question: "¿Cuánto cuesta Controla.Club comparado con SportMaps?",
        answer:
          "El plan de entrada de Controla.Club cuesta $99.000 COP/mes para hasta 50 miembros. El plan Start de SportMaps cuesta $69.000 COP/mes para la misma capacidad (50 alumnos) — un ~30% menos al año. Controla.Club incluye en ese precio gamificación (ClubPoints) y prospección de leads con IA, que SportMaps no tiene; SportMaps incluye facturación electrónica DIAN y torneos, que Controla.Club no confirma. No es solo una decisión de precio, depende de qué features pesan más para tu operación.",
      },
      {
        question: "¿Los precios de SportMaps que aparecen en comparativas de terceros están actualizados?",
        answer:
          "Verificar siempre en sportmaps.co/planes, la fuente oficial. SportMaps actualiza pricing periódicamente (última revisión: v3.0, mayo 2026) y algunas comparativas de terceros circulan con planes o montos de versiones anteriores que ya no existen.",
      },
    ],
    metaDescription:
      "SportMaps vs Controla.Club: comparación honesta con precios verificados. Controla.Club cuesta $99.000/mes hasta 50 miembros; SportMaps $69.000/mes con la misma capacidad, DIAN y torneos incluidos.",
  },

  // ── GOLAPP ────────────────────────────────────────────────────────────────
  // Competidor colombiano real (Medellín, 2018), pricing público en COP.
  // Producto simple: cobros + asistencia + competencias, sin DIAN ni WhatsApp
  // AI confirmados. La comparación NO es de precio (el tramo chico es más
  // barato que el nuestro), es de qué incluye cada peso.
  {
    slug: "golapp",
    competitorName: "GOLAPP",
    tagline:
      "GOLAPP es un competidor colombiano real, nacido en Medellín, con clientes verificables en su sitio. Esta comparación honesta no es de quién cuesta menos — es de qué incluye cada peso.",
    tldr: {
      chooseCompetitor:
        "Si tu academia solo necesita inscripciones, asistencia y cobro con recordatorio por correo, sin facturar electrónicamente ni usar WhatsApp para la cobranza, GOLAPP es simple y su tramo más chico es más barato.",
      chooseSportMaps:
        "Si quieres facturación electrónica DIAN incluida, cobranza por WhatsApp con IA (no solo correo), y conexión con marcas, SportMaps cuesta un poco más en el tramo comparable pero incluye todo eso.",
    },
    features: [
      {
        feature: "Plan para hasta 200 deportistas",
        competitor: "$150.000 COP/mes (tope exacto en 200)",
        sportmaps: "$159.000 COP/mes (plan Pro, hasta 300 — con margen)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Recordatorios de cobro",
        competitor: "Por correo electrónico",
        sportmaps: "WhatsApp con IA conversacional",
        sportmapsAdvantage: true,
      },
      {
        feature: "Facturación electrónica DIAN",
        competitor: "No confirmada en su oferta pública",
        sportmaps: "Incluida (multi-PAC)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Gestión de competencias/torneos",
        competitor: "Sí",
        sportmaps: "Sí, con inscripciones y boletería QR",
        sportmapsAdvantage: false,
      },
      {
        feature: "Portal para acudientes",
        competitor: "Sí (portal web)",
        sportmaps: "Sí — app de marca propia publicada en stores",
        sportmapsAdvantage: true,
      },
      {
        feature: "Marcas, patrocinios y marketplace",
        competitor: "No",
        sportmaps: "Sí",
        sportmapsAdvantage: true,
      },
      {
        feature: "Asistencia digital",
        competitor: "Sí",
        sportmaps: "Sí, con check-in QR",
        sportmapsAdvantage: false,
      },
    ],
    competitorWins: [
      "Precio de entrada más bajo en el tramo chico (≤200 deportistas) si solo necesitas cobro y asistencia",
      "Producto colombiano simple, sin curva de aprendizaje",
      "Clientes reales verificables en su propio sitio (Soccercity, Escuela de Fútbol Felipe Echavarría, Club Deportivo Andrés García)",
    ],
    sportmapsWins: [
      "WhatsApp con IA para cobranza en vez de solo correo — mejor tasa de apertura y respuesta en Colombia",
      "Facturación electrónica DIAN incluida",
      "App de marca propia publicada en App Store y Google Play, no solo un portal web",
      "Marketplace de marcas y ecosistema de patrocinios",
      "Más capacidad de deportistas por un incremento pequeño de precio en el tramo comparable",
    ],
    costExample: {
      scenarioLabel:
        "Academia de hasta 200 deportistas — su plan más caro que cubre exactamente esa capacidad, contra nuestro plan Pro con margen de crecimiento",
      rows: [
        { concept: "Plan mensual (≤200 deportistas)", competitorCost: "$150.000 COP", sportmapsCost: "$159.000 COP (hasta 300)" },
        { concept: "Facturación electrónica DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "WhatsApp AI cobranza", competitorCost: "No (solo correo)", sportmapsCost: "Incluido (500 msg/mes)" },
        { concept: "Marcas / marketplace", competitorCost: "No", sportmapsCost: "Incluido" },
      ],
      competitorTotal: "$150.000 COP/mes, tope exacto en 200 deportistas",
      sportmapsTotal: "$159.000 COP/mes, hasta 300 deportistas + DIAN + WhatsApp AI",
      savingsHighlight:
        "Por $9.000 COP más al mes, SportMaps suma 100 cupos extra, facturación DIAN y cobranza por WhatsApp con IA que GOLAPP no tiene",
    },
    faqs: [
      {
        question: "¿GOLAPP tiene facturación electrónica DIAN?",
        answer:
          "No está confirmado en su oferta pública — su sitio no la menciona en ningún lugar. SportMaps la incluye en el plan, sin add-on aparte.",
      },
      {
        question: "¿GOLAPP envía recordatorios de pago por WhatsApp?",
        answer:
          "Según su sitio público, los recordatorios de cobro son por correo electrónico; WhatsApp aparece solo como canal de contacto comercial, no como notificación automática de mora. SportMaps gestiona recordatorios y mora directamente por WhatsApp con IA conversacional.",
      },
      {
        question: "¿Puedo migrar de GOLAPP a SportMaps?",
        answer:
          "Sí, con migración asistida sin costo de alumnos, historial de pagos y horarios, y prueba en paralelo antes de decidir.",
      },
    ],
    metaDescription:
      "SportMaps vs GOLAPP: comparación honesta para escuelas de fútbol en Colombia. GOLAPP es simple y económico en el tramo chico; SportMaps suma DIAN, WhatsApp AI y marketplace.",
  },

  // ── DeporteApp ───────────────────────────────────────────────────────────
  // El competidor más sofisticado en GEO/AEO de los investigados: publica su
  // propio llms.txt. Cobertura LatAm real (hreflang a 20 países + cliente
  // colombiano nombrado), pero sin pricing público ni DIAN confirmados.
  {
    slug: "deporteapp",
    competitorName: "DeporteApp",
    tagline:
      "DeporteApp es el competidor más sofisticado en SEO para IA que encontramos — publica su propio llms.txt y opera en varios países de LatAm, incluida Colombia. Comparación honesta, sin inventar precios que no publica.",
    tldr: {
      chooseCompetitor:
        "Si necesitas una plataforma que ya opera en varios países de LatAm a la vez, con manejo multi-moneda (incluye integración de tasa BCV para Venezuela) y un módulo de Federación para ligas multi-club, DeporteApp lo tiene construido.",
      chooseSportMaps:
        "Si eres una escuela en Colombia y quieres precios públicos desde el primer clic, facturación electrónica DIAN incluida y WhatsApp con IA conversacional para cobranza (no solo notificación), SportMaps está construido específicamente para eso.",
    },
    features: [
      {
        feature: "Precios públicos",
        competitor: "No — requiere agendar demo",
        sportmaps: "Sí, publicados en sportmaps.co/planes",
        sportmapsAdvantage: true,
      },
      {
        feature: "Facturación electrónica DIAN",
        competitor: "No confirmada",
        sportmaps: "Incluida (multi-PAC)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Notificaciones por WhatsApp",
        competitor: "Sí (confirmado)",
        sportmaps: "Sí — con IA conversacional, no solo notificación",
        sportmapsAdvantage: true,
      },
      {
        feature: "Módulo de Federación (torneos multi-club, posiciones, sanciones)",
        competitor: "Sí",
        sportmaps: "Torneos por escuela; sin federación multi-club dedicada",
        sportmapsAdvantage: false,
      },
      {
        feature: "Multi-moneda (incl. integración BCV para Venezuela)",
        competitor: "Sí",
        sportmaps: "No — COP nativo",
        sportmapsAdvantage: false,
      },
      {
        feature: "Presencia confirmada en Colombia",
        competitor: "Sí (cliente nombrado: Escuela de Fútbol Campeones)",
        sportmaps: "Sí — mercado principal",
        sportmapsAdvantage: false,
      },
      {
        feature: "Marcas, patrocinios y marketplace",
        competitor: "No confirmado",
        sportmaps: "Sí",
        sportmapsAdvantage: true,
      },
    ],
    competitorWins: [
      "Cobertura multi-país LatAm ya operativa y con clientes nombrados (Venezuela, México, Argentina, Chile, Colombia)",
      "Módulo de Federación para ligas y torneos multi-club, con posiciones y sanciones",
      "Integración de tasa de cambio BCV — resuelve un problema real para clubes que cobran en bolívares",
      "Estrategia GEO/AEO propia ya publicada (llms.txt) antes que la mayoría de competidores en español",
    ],
    sportmapsWins: [
      "Precios públicos y transparentes en COP — DeporteApp exige agendar una llamada para conocerlos",
      "Facturación electrónica DIAN incluida",
      "WhatsApp con IA conversacional para cobranza, no solo notificación",
      "Marketplace de marcas y ecosistema de patrocinios",
      "Enfoque específico en el mercado colombiano, con soporte y precios pensados para acá",
    ],
    costExample: {
      scenarioLabel:
        "DeporteApp no publica precios — comparación por lo que cada uno deja saber antes de hablar con ventas",
      rows: [
        { concept: "Precios públicos", competitorCost: "No — requiere demo", sportmapsCost: "Sí, desde $0 hasta $349.000 COP/mes" },
        { concept: "Facturación electrónica DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "Marcas / marketplace", competitorCost: "No confirmado", sportmapsCost: "Incluido" },
        { concept: "Módulo de Federación multi-club", competitorCost: "Sí", sportmapsCost: "No (torneos por escuela sí)" },
      ],
      competitorTotal: "Precios no públicos",
      sportmapsTotal: "Precios públicos, transparentes, desde $0",
      savingsHighlight:
        "No se puede comparar el monto porque DeporteApp no publica precios — pero que SportMaps sí lo haga ya es una ventaja para decidir sin agendar una llamada",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta DeporteApp?",
        answer:
          "No lo publica: hay que agendar una demo para conocer el precio. SportMaps publica todos sus planes y precios en sportmaps.co/planes, desde $0.",
      },
      {
        question: "¿DeporteApp tiene facturación electrónica DIAN?",
        answer:
          "No está confirmado en su oferta pública. SportMaps la incluye en el plan, sin add-on aparte, con proveedores autorizados (multi-PAC).",
      },
      {
        question: "¿DeporteApp opera en Colombia?",
        answer:
          "Sí, confirmado — nombra a 'Escuela de Fútbol Campeones' como cliente colombiano en su sitio, dentro de una cobertura declarada de más de 20 países de LatAm y España.",
      },
      {
        question: "¿Puedo migrar de DeporteApp a SportMaps?",
        answer:
          "Sí, con migración asistida sin costo de alumnos, historial de pagos y horarios, y prueba en paralelo antes de decidir.",
      },
    ],
    metaDescription:
      "SportMaps vs DeporteApp: comparación honesta. DeporteApp no publica precios y no confirma DIAN; SportMaps sí, con WhatsApp AI y marketplace incluidos.",
  },

  // ── Driblin ───────────────────────────────────────────────────────────────
  // Confirmado en Venezuela y Colombia (mismo teléfono de contacto). Ángulo
  // distinto al nuestro: scouting y monetización creativa del club, no
  // cobranza recurrente. La comparación es de enfoque, no de "quién gana".
  {
    slug: "driblin",
    competitorName: "Driblin",
    tagline:
      "Driblin viene del ángulo de torneos, scouting y monetización creativa del club — no de la cobranza recurrente mes a mes. Comparación honesta de dos enfoques distintos para la escuela de fútbol formativa.",
    tldr: {
      chooseCompetitor:
        "Si tu prioridad es organizar competencias, conectar a tus jugadores con ojeadores y monetizar el club con rifas, tienda online y eventos digitales, Driblin está construido para exactamente eso.",
      chooseSportMaps:
        "Si tu prioridad es el ciclo completo — cobro recurrente con Wompi, facturación electrónica DIAN, categorías por edad y torneos con boletería — SportMaps lo cubre todo en un solo lugar.",
    },
    features: [
      {
        feature: "Cobro recurrente de mensualidades",
        competitor: "No es el foco (self-management: tienda, rifas)",
        sportmaps: "Sí, con Wompi + WhatsApp AI",
        sportmapsAdvantage: true,
      },
      {
        feature: "Facturación electrónica DIAN",
        competitor: "No confirmada",
        sportmaps: "Incluida (multi-PAC)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Scouting (conectar con ojeadores)",
        competitor: "Sí (Scout Manager)",
        sportmaps: "No disponible",
        sportmapsAdvantage: false,
      },
      {
        feature: "Monetización creativa (rifas, tienda, eventos digitales)",
        competitor: "Sí (Sponsorship + Self-Management Manager)",
        sportmaps: "Marketplace de marcas (descuentos y productos, no rifas)",
        sportmapsAdvantage: false,
      },
      {
        feature: "Gestión de competencias/torneos",
        competitor: "Sí (Competitions Manager)",
        sportmaps: "Sí, con inscripciones y boletería QR",
        sportmapsAdvantage: false,
      },
      {
        feature: "Categorías deportivas por edad",
        competitor: "Enfoque en fútbol juvenil, sin detalle de categorías confirmado",
        sportmaps: "Núcleo del producto",
        sportmapsAdvantage: true,
      },
      {
        feature: "Precios públicos",
        competitor: "No confirmado",
        sportmaps: "Sí",
        sportmapsAdvantage: true,
      },
    ],
    competitorWins: [
      "Scout Manager: conecta jugadores con ojeadores, algo que SportMaps no tiene",
      "Enfoque en monetización creativa del club más allá de la mensualidad (rifas, tienda, eventos digitales)",
      "Presencia confirmada en Venezuela y Colombia, con el mismo canal de contacto en ambos países",
    ],
    sportmapsWins: [
      "Cobranza recurrente real con pasarela de pago (Wompi) — Driblin no lo tiene como foco",
      "Facturación electrónica DIAN incluida",
      "Categorías por edad como núcleo del producto, no un complemento",
      "Precios públicos y transparentes desde el sitio",
      "WhatsApp con IA para cobranza y recordatorios",
    ],
    costExample: {
      scenarioLabel: "Driblin no publica precios — comparación por enfoque, no por número",
      rows: [
        { concept: "Cobranza recurrente con pasarela de pago", competitorCost: "No es el foco", sportmapsCost: "Sí (Wompi + WhatsApp AI)" },
        { concept: "Facturación electrónica DIAN", competitorCost: "No confirmada", sportmapsCost: "Incluida" },
        { concept: "Scouting", competitorCost: "Sí", sportmapsCost: "No disponible" },
        { concept: "Monetización creativa (rifas/tienda/eventos)", competitorCost: "Sí", sportmapsCost: "Marketplace de marcas" },
      ],
      competitorTotal: "Torneos + scouting + monetización creativa",
      sportmapsTotal: "Cobranza + DIAN + categorías por edad + ecosistema de marcas",
      savingsHighlight:
        "No compiten por el mismo caso de uso: Driblin es fuerte en scouting y monetización creativa del club; SportMaps es fuerte en cobranza recurrente, DIAN y categorías por edad",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta Driblin?",
        answer:
          "No publica precios en su sitio — dice ser 'gratis para organizar' pero exige agendar una demo para conocer el resto de la oferta.",
      },
      {
        question: "¿Driblin tiene facturación electrónica DIAN?",
        answer:
          "No está confirmado en su oferta pública. SportMaps la incluye en el plan, sin add-on aparte.",
      },
      {
        question: "¿Driblin opera en Colombia?",
        answer: "Sí, confirmado — su sección de contacto lista Venezuela y Colombia con el mismo número de contacto.",
      },
      {
        question: "¿Puedo migrar de Driblin a SportMaps?",
        answer:
          "Sí, con migración asistida sin costo de alumnos, historial de pagos y horarios, y prueba en paralelo antes de decidir.",
      },
    ],
    metaDescription:
      "SportMaps vs Driblin: comparación honesta. Driblin es fuerte en scouting y monetización de club; SportMaps es fuerte en cobranza recurrente, DIAN y categorías por edad.",
  },
  // ── Canchas: Controla Cancha / Easycancha / Playtomic ─────────────────────
  // Datos del competidor: SOLO los verificados en el benchmark del 14-oct-2026
  // (repo de la app: docs/specs/reservas-canchas-plan-unificado-2026-10.md §10).
  // SportMaps Canchas NO está en vivo: lanzamiento nov-2026 (piloto 6-nov,
  // público 20-nov). Toda celda del lado SportMaps que describe el producto de
  // canchas lleva "(lanzamiento nov-2026)". Lo que ya existe hoy (Wompi/MP,
  // lectura de comprobantes con IA, bot oficial de WhatsApp, escuelas,
  // torneos, tienda) se dice en presente.
  {
    slug: "controla-cancha",
    competitorName: "Controla Cancha",
    tagline:
      "Controla Cancha es el producto de reservas de canchas de Controla.Club, ya en marcha en Colombia. SportMaps Canchas lanza en noviembre de 2026. Comparación honesta con los precios que ellos publican (verificado 14-oct-2026).",
    tldr: {
      chooseCompetitor:
        "Si necesitas reservas por WhatsApp hoy mismo, te basta con cobrar por transferencia o efectivo y valoras que el jugador reserve con el mínimo de pasos, Controla Cancha ya está operando y SportMaps Canchas todavía no.",
      chooseSportMaps:
        "Si quieres cobrar en línea con Wompi o Mercado Pago, un bot sobre la API oficial de WhatsApp sin tope de reservas, y tener escuela, canchas, torneos y tienda en la misma cuenta, SportMaps Canchas (lanzamiento nov-2026) cuesta menos en cada tramo.",
    },
    features: [
      {
        feature: "Estado del producto",
        competitor: "En marcha (términos del 11-oct-2026; una sede publicada en su directorio al 14-oct)",
        sportmaps: "Lanzamiento nov-2026 (piloto con un club el 6-nov)",
        sportmapsAdvantage: false,
      },
      {
        feature: "Reserva sin cuenta por WhatsApp y web",
        competitor: "Sí — con nombre y WhatsApp, sin código de verificación",
        sportmaps: "Sí, con número verificado por código (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Conexión de WhatsApp",
        competitor: "Sesión tipo WhatsApp Web sobre el número de la sede (no la API oficial de Meta)",
        sportmaps: "API oficial de WhatsApp Business (ya en uso hoy con escuelas)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Cobro",
        competitor: "Transferencia (foto del comprobante) o efectivo",
        sportmaps: "Wompi / Mercado Pago en línea (hoy en escuelas) + transferencia leída con IA + efectivo",
        sportmapsAdvantage: true,
      },
      {
        feature: "Comprobante de transferencia leído con IA",
        competitor: "Sí",
        sportmaps: "Sí (ya funciona hoy para mensualidades de escuelas)",
      },
      {
        feature: "Reservas atendidas por el bot con IA",
        competitor: "Con tope por plan: 400/mes (Torneo) o 1.000/mes (Estadio)",
        sportmaps: "Sin tope desde Canchas Pro (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Pago dividido entre jugadores",
        competitor: "No",
        sportmaps: "Sí (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Política de cancelación",
        competitor: "Texto libre",
        sportmaps: "Configurada en el sistema y visible antes de pagar (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Reglas y precios socio vs. público",
        competitor: "No",
        sportmaps: "Sí (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Garantía contra doble reserva simultánea",
        competitor: "No documentada públicamente",
        sportmaps: "La base de datos rechaza dos reservas en la misma cancha y hora (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Canchas combinadas, festivos, lista de espera",
        competitor: "Sí",
        sportmaps: "Sí (lanzamiento nov-2026)",
      },
      {
        feature: "Escuela, torneos y tienda",
        competitor: "Academia en otro producto (Controla.Club)",
        sportmaps: "En la misma cuenta (escuelas, torneos y tienda ya operan hoy)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Comisión por reserva",
        competitor: "Sin comisión",
        sportmaps: "Sin comisión, ni al club ni al jugador",
      },
    ],
    competitorWins: [
      "Ya está operando: SportMaps Canchas lanza en noviembre de 2026",
      "Muy poca fricción para el jugador: reserva con nombre y WhatsApp, sin cuenta",
      "Estados del comprobante visibles para el jugador y botón «Dar más tiempo» para el staff",
      "Canchas combinadas, festivos cobrados como domingo y lista de espera ya resueltos",
      "Página de cada sede indexable en buscadores, con directorio por ciudad",
    ],
    sportmapsWins: [
      "Cobro en línea con Wompi y Mercado Pago, con la plata directo al club (Controla Cancha solo transferencia o efectivo)",
      "Bot sobre la API oficial de WhatsApp Business, sin riesgo de bloqueo del número por usar una sesión no oficial",
      "Sin tope de reservas por WhatsApp desde Canchas Pro (Controla limita las reservas con IA por plan)",
      "Más barato en cada tramo: $0 / $99.000 / $199.000 frente a $149.000 / $249.000 / $399.000",
      "Escuela, canchas, torneos y tienda en una sola cuenta: precio de socio para alumnos y la cancha se bloquea con las clases",
      "Pago dividido, reglas socio/público y política de cancelación en el sistema (lanzamiento nov-2026)",
    ],
    costExample: {
      scenarioLabel:
        "Cancha sintética con 4 canchas y bot de WhatsApp (precios publicados, verificado 14-oct-2026)",
      rows: [
        { concept: "Plan mensual", competitorCost: "$249.000 (Torneo, 3–5 canchas)", sportmapsCost: "$99.000 (Canchas Pro, hasta 5)" },
        { concept: "Reservas atendidas con IA", competitorCost: "400 al mes", sportmapsCost: "Sin tope" },
        { concept: "Cobro en línea (PSE, Nequi, tarjeta)", competitorCost: "No disponible", sportmapsCost: "Wompi / Mercado Pago" },
        { concept: "Comisión por reserva", competitorCost: "Sin comisión", sportmapsCost: "Sin comisión" },
        { concept: "Disponible hoy", competitorCost: "Sí", sportmapsCost: "No — lanzamiento nov-2026" },
      ],
      competitorTotal: "$2.988.000/año",
      sportmapsTotal: "$1.188.000/año",
      savingsHighlight:
        "Con 3 a 5 canchas, Canchas Pro cuesta $150.000 menos al mes y no limita las reservas por WhatsApp. Los primeros 50 clubes tienen además 3 meses gratis. La diferencia: Controla Cancha ya opera y SportMaps Canchas lanza en noviembre de 2026.",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta Controla Cancha?",
        answer:
          "Según su página (verificado 14-oct-2026): Partido $149.000/mes hasta 2 canchas con aprobación humana; Torneo $249.000/mes de 3 a 5 canchas con IA y 400 reservas con IA al mes; Estadio $399.000/mes desde 6 canchas, multisede y 1.000 reservas con IA. No cobra comisión por reserva.",
      },
      {
        question: "¿Cuánto va a costar SportMaps Canchas?",
        answer:
          "Gratis hasta 2 canchas (sin bot), Canchas Pro $99.000/mes hasta 5 canchas con bot de WhatsApp sin tope, y Canchas Club $199.000/mes con canchas ilimitadas y multisede. Sin comisión por reserva. Lanza en noviembre de 2026 y los primeros 50 clubes tienen 3 meses de Canchas Pro gratis.",
      },
      {
        question: "¿SportMaps Canchas ya está disponible?",
        answer:
          "No todavía. El piloto con un club arranca en noviembre de 2026 y el lanzamiento público es ese mismo mes. Controla Cancha sí está operando hoy. Puedes anotarte a la lista de los primeros 50 en sportmaps.co/canchas.",
      },
      {
        question: "¿Qué diferencia hay en el WhatsApp de cada uno?",
        answer:
          "El bot de Controla Cancha usa una sesión tipo WhatsApp Web sobre el número de la sede, no la API oficial de Meta. SportMaps usa la API oficial de WhatsApp Business, que ya opera hoy con escuelas y que no expone el número a bloqueos por uso no oficial.",
      },
      {
        question: "¿Controla Cancha y Controla.Club son lo mismo?",
        answer:
          "Son productos separados de la misma empresa: Controla.Club para gestión de clubes y gimnasios, y Controla Cancha solo para reservas. En SportMaps, la escuela y las canchas van en la misma cuenta. La comparación con Controla.Club está en sportmaps.co/comparar/controla-club.",
      },
    ],
    metaDescription:
      "SportMaps Canchas vs Controla Cancha: comparación honesta (verificado 14-oct-2026). Controla cobra $149k–$399k con tope de reservas IA; SportMaps Canchas $0–$199k sin tope y con Wompi. Lanza nov-2026.",
  },

  {
    slug: "easycancha",
    competitorName: "Easycancha",
    tagline:
      "Easycancha es un marketplace de canchas nacido en Chile, con Colombia como segundo mercado y una red fuerte en pádel. SportMaps Canchas lanza en noviembre de 2026 con otro modelo: tu cancha con tu marca y sin cuota al jugador. Comparación honesta (verificado 14-oct-2026).",
    tldr: {
      chooseCompetitor:
        "Si tienes un club de pádel y lo que más te importa es que te encuentren jugadores que ya usan una app de reservas, la red de Easycancha es difícil de igualar y ya está operando.",
      chooseSportMaps:
        "Si tienes canchas sintéticas, un coliseo o una escuela, y quieres que tus jugadores reserven por WhatsApp con tu marca adelante, sin cuota de servicio al jugador y con la escuela en la misma cuenta, SportMaps Canchas (lanzamiento nov-2026) está pensado para eso.",
    },
    features: [
      {
        feature: "Estado del producto",
        competitor: "En marcha; Colombia es su segundo mercado",
        sportmaps: "Lanzamiento nov-2026",
        sportmapsAdvantage: false,
      },
      {
        feature: "Tipo de producto",
        competitor: "Marketplace: el jugador reserva en la app de Easycancha",
        sportmaps: "Software del club: reserva por WhatsApp y en la página de tu cancha, con tu marca (lanzamiento nov-2026)",
      },
      {
        feature: "Red de jugadores en pádel",
        competitor: "Dice estar en ~90 % de los clubes de pádel (Forbes, nov-2025)",
        sportmaps: "Sin red propia de pádel todavía",
        sportmapsAdvantage: false,
      },
      {
        feature: "Cuota al jugador",
        competitor: "Cuota de servicio por reserva (gratis con su suscripción Prime)",
        sportmaps: "Ninguna",
        sportmapsAdvantage: true,
      },
      {
        feature: "Precio para el club",
        competitor: "Mensualidad fija — monto no confirmado públicamente",
        sportmaps: "Público: $0 / $99.000 / $199.000 al mes",
        sportmapsAdvantage: true,
      },
      {
        feature: "Reserva por WhatsApp",
        competitor: "No confirmado",
        sportmaps: "Sí, con bot sobre la API oficial de Meta (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Transferencia leída con IA",
        competitor: "No confirmado",
        sportmaps: "Sí (ya funciona hoy en escuelas)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Escuela deportiva en la misma cuenta",
        competitor: "No",
        sportmaps: "Sí (escuelas, torneos y tienda ya operan hoy)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Partidos abiertos entre jugadores",
        competitor: "Sí",
        sportmaps: "No en el lanzamiento",
        sportmapsAdvantage: false,
      },
    ],
    competitorWins: [
      "Red de pádel: dice estar en cerca del 90 % de los clubes de pádel (Forbes, nov-2025)",
      "Ya opera en Colombia, su segundo mercado; SportMaps Canchas lanza en noviembre de 2026",
      "Trae jugadores nuevos al club desde su propia app (efecto marketplace)",
      "App muy bien calificada en App Store (4,9) y partidos abiertos entre jugadores",
    ],
    sportmapsWins: [
      "Sin cuota de servicio al jugador: el precio que ve es el que paga",
      "Tu marca adelante: el jugador reserva con tu club por WhatsApp, no en la app de un tercero",
      "Precios públicos para el club, desde $0",
      "Escuela, canchas, torneos y tienda en la misma cuenta: precio de socio para alumnos",
      "Identidad del jugador por teléfono verificado, no por correo",
    ],
    costExample: {
      scenarioLabel:
        "Easycancha no publica el monto de su mensualidad al club — comparación por modelo de cobro (verificado 14-oct-2026)",
      rows: [
        { concept: "Mensualidad del club", competitorCost: "No confirmado", sportmapsCost: "$0 / $99.000 / $199.000" },
        { concept: "Cuota al jugador por reserva", competitorCost: "Sí (gratis con Prime)", sportmapsCost: "No" },
        { concept: "Comisión por reserva al club", competitorCost: "No confirmado", sportmapsCost: "No" },
        { concept: "Disponible hoy", competitorCost: "Sí", sportmapsCost: "No — lanzamiento nov-2026" },
      ],
      competitorTotal: "Mensualidad no publicada + cuota al jugador",
      sportmapsTotal: "Precio público, sin cuota al jugador",
      savingsHighlight:
        "No se puede comparar el monto porque Easycancha no publica su mensualidad al club. La diferencia de modelo sí es clara: en SportMaps el jugador no paga cuota de servicio.",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta Easycancha para un club?",
        answer:
          "Cobra una mensualidad fija al club, pero el monto no está publicado (verificado 14-oct-2026). Al jugador le cobra una cuota de servicio por reserva, que es gratis si tiene su suscripción Prime.",
      },
      {
        question: "¿Easycancha opera en Colombia?",
        answer:
          "Sí. Es una empresa chilena y Colombia es su segundo mercado. Según Forbes (nov-2025), dice estar en cerca del 90 % de los clubes de pádel.",
      },
      {
        question: "¿SportMaps Canchas sirve para pádel?",
        answer:
          "Sí, pero arrancamos por fútbol sintético, coliseos y clubes que ya usan SportMaps. En pádel, Easycancha tiene una red muy fuerte; SportMaps Canchas lanza en noviembre de 2026 y entra al pádel después.",
      },
      {
        question: "¿Cuál es la diferencia de fondo entre los dos?",
        answer:
          "Easycancha es un marketplace: el jugador reserva en su app y paga una cuota de servicio. SportMaps Canchas es el software de tu cancha: el jugador reserva por WhatsApp o en tu página, con tu marca y sin cuota.",
      },
    ],
    metaDescription:
      "SportMaps Canchas vs Easycancha: comparación honesta (verificado 14-oct-2026). Easycancha es marketplace con cuota al jugador y red fuerte en pádel; SportMaps Canchas, sin cuota y por WhatsApp. Lanza nov-2026.",
  },

  {
    slug: "playtomic",
    competitorName: "Playtomic",
    tagline:
      "Playtomic es el marketplace global de pádel, con app para jugadores y un Manager para clubes, y tiene clubes en Colombia. SportMaps Canchas lanza en noviembre de 2026 con un enfoque local: WhatsApp, pagos colombianos y sin cuota al jugador. Comparación honesta (verificado 14-oct-2026).",
    tldr: {
      chooseCompetitor:
        "Si tu club es de pádel y quieres estar donde ya están millones de jugadores en el mundo, con partidos abiertos por nivel y un producto maduro, Playtomic es la referencia y ya está operando.",
      chooseSportMaps:
        "Si quieres que tus jugadores reserven por WhatsApp, paguen con PSE, Nequi o transferencia, sin cuota de servicio, y tener la escuela en la misma cuenta, SportMaps Canchas (lanzamiento nov-2026) está construido para Colombia.",
    },
    features: [
      {
        feature: "Estado del producto",
        competitor: "Maduro, global",
        sportmaps: "Lanzamiento nov-2026",
        sportmapsAdvantage: false,
      },
      {
        feature: "Base de jugadores",
        competitor: "Marketplace global de pádel",
        sportmaps: "Los jugadores de tu club, por WhatsApp",
        sportmapsAdvantage: false,
      },
      {
        feature: "Presencia en Colombia",
        competitor: "Clubes en Cali y otras ciudades (cuántos: no confirmado)",
        sportmaps: "SportMaps opera hoy en Colombia con escuelas; Canchas lanza nov-2026",
      },
      {
        feature: "Cuota al jugador",
        competitor: "Tarifa de servicio por reserva, no reembolsable",
        sportmaps: "Ninguna",
        sportmapsAdvantage: true,
      },
      {
        feature: "Precio para el club",
        competitor: "No publicado",
        sportmaps: "Público: $0 / $99.000 / $199.000 al mes",
        sportmapsAdvantage: true,
      },
      {
        feature: "Pago dividido entre jugadores",
        competitor: "Sí",
        sportmaps: "Sí, adaptado a Colombia, sin tarjeta guardada (lanzamiento nov-2026)",
      },
      {
        feature: "Partidos abiertos por nivel",
        competitor: "Sí",
        sportmaps: "No en el lanzamiento",
        sportmapsAdvantage: false,
      },
      {
        feature: "Reserva por WhatsApp",
        competitor: "No confirmado",
        sportmaps: "Sí, con bot sobre la API oficial de Meta (lanzamiento nov-2026)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Transferencia leída con IA y PSE/Nequi",
        competitor: "No confirmado",
        sportmaps: "Sí (Wompi y lectura de comprobantes ya funcionan hoy en escuelas)",
        sportmapsAdvantage: true,
      },
      {
        feature: "Escuela deportiva en la misma cuenta",
        competitor: "No",
        sportmaps: "Sí (escuelas, torneos y tienda ya operan hoy)",
        sportmapsAdvantage: true,
      },
    ],
    competitorWins: [
      "Base global de jugadores de pádel que ya usan la app: trae clientes nuevos al club",
      "Producto maduro, con partidos abiertos por nivel y pago dividido ya en marcha",
      "App muy bien calificada en tiendas (4,8–4,9)",
      "Ya opera con clubes en Colombia; SportMaps Canchas lanza en noviembre de 2026",
    ],
    sportmapsWins: [
      "Sin tarifa de servicio al jugador (en Playtomic es por reserva y no reembolsable)",
      "Precios públicos para el club, desde $0",
      "Reserva por WhatsApp, con tu marca adelante, sin que el jugador descargue otra app",
      "Pagos colombianos: Wompi, PSE, Nequi y transferencia leída con IA",
      "Un solo responsable de cara al jugador para cancelaciones y devoluciones, con la política visible antes de pagar",
      "Escuela, canchas, torneos y tienda en la misma cuenta",
    ],
    costExample: {
      scenarioLabel:
        "Playtomic no publica el precio de sus planes para clubes — comparación por modelo de cobro (verificado 14-oct-2026)",
      rows: [
        { concept: "Plan del club", competitorCost: "No publicado", sportmapsCost: "$0 / $99.000 / $199.000" },
        { concept: "Tarifa al jugador por reserva", competitorCost: "Sí, no reembolsable", sportmapsCost: "No" },
        { concept: "Comisión por reserva al club", competitorCost: "No confirmado", sportmapsCost: "No" },
        { concept: "Disponible hoy", competitorCost: "Sí", sportmapsCost: "No — lanzamiento nov-2026" },
      ],
      competitorTotal: "Plan no publicado + tarifa al jugador",
      sportmapsTotal: "Precio público, sin cuota al jugador",
      savingsHighlight:
        "No se puede comparar el monto porque Playtomic no publica sus planes para clubes. Lo que sí cambia: en SportMaps el jugador no paga tarifa de servicio y el club sabe el precio antes de hablar con ventas.",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta Playtomic para un club?",
        answer:
          "Los planes de Playtomic Manager para clubes no tienen precio publicado (verificado 14-oct-2026). Al jugador le cobra una tarifa de servicio por reserva, que no es reembolsable.",
      },
      {
        question: "¿Playtomic funciona en Colombia?",
        answer:
          "Sí, hay clubes en Cali y otras ciudades que lo usan. Cuántos son no está confirmado públicamente.",
      },
      {
        question: "¿Qué dicen los usuarios de Playtomic?",
        answer:
          "En las tiendas de apps tiene notas altas (4,8–4,9). En Trustpilot tiene 1,3 sobre 133 reseñas (consultado el 14-oct-2026), y la mayoría de las quejas son por reembolsos y soporte. Por eso en SportMaps Canchas la política de cancelación se muestra antes de pagar y hay un solo responsable de cara al jugador.",
      },
      {
        question: "¿SportMaps Canchas ya está disponible?",
        answer:
          "No todavía: lanza en noviembre de 2026. Los primeros 50 clubes que se anoten en sportmaps.co/canchas tienen 3 meses de Canchas Pro gratis.",
      },
    ],
    metaDescription:
      "SportMaps Canchas vs Playtomic: comparación honesta (verificado 14-oct-2026). Playtomic: red global de pádel y tarifa al jugador; SportMaps Canchas: WhatsApp, PSE/Nequi y sin cuota. Lanza nov-2026.",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
