/**
 * Blog posts — single source of truth.
 *
 * Cada post tiene metadata + body como array de bloques estructurados.
 * Esto permite renderizado consistente con Article schema y migración
 * futura a MDX sin reescribir contenido.
 *
 * Para agregar un post nuevo: copiar la estructura de un post existente,
 * cambiar slug, title, excerpt y bloques de body. El sitemap lo recoge
 * automáticamente.
 */

export type BlogCategory =
  | "Casos de éxito"
  | "Producto"
  | "Comparativas"
  | "Tecnología"
  | "Guías"
  | "Organización"
  | "Análisis";

export type ContentBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; content: string; author?: string }
  | { type: "callout"; variant: "info" | "tip" | "warning"; content: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "cta"; title: string; description: string; href: string; label: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  date: string;
  /** ISO date for sorting and Article schema datePublished */
  isoDate: string;
  /** ISO date for Article schema dateModified — opcional, default = isoDate */
  isoDateModified?: string;
  author: string;
  authorRole: string;
  /** LinkedIn u otra URL canónica del autor. Si se setea, schema usa Person con sameAs (E-E-A-T). */
  authorUrl?: string;
  /** Tailwind gradient classes for hero placeholder */
  heroGradient: string;
  /** Para Article schema og:image — debe ser absoluta o /logo.jpg por defecto */
  image?: string;
  body: ContentBlock[];
  /** Slugs de posts relacionados (max 3) */
  related?: string[];
  /**
   * Entidades sobre las que trata el artículo. Emitidas como Article.about
   * para que las IAs vinculen el post con conceptos canónicos.
   * Ej: ["gestión de academias deportivas", "software SaaS deportivo"]
   */
  about?: string[];
  /**
   * Marcas/productos/personas mencionadas. Emitidas como Article.mentions
   * para que las IAs asocien SportMaps con ese ecosistema.
   * Ej: ["Wompi", "WhatsApp Business", "Clupik"]
   */
  mentions?: string[];
  /**
   * Preguntas frecuentes específicas del post. Emiten FAQPage schema
   * adicional → ChatGPT/Gemini citan respuestas literales.
   */
  faqs?: Array<{ question: string; answer: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "sportmaps-vs-clupik-academias-colombia",
    title: "SportMaps vs Clupik: comparativa completa para academias en Colombia",
    excerpt:
      "Lado a lado: precio, app de marca propia, cobranza, integraciones y soporte local. Una guía honesta para decidir antes de firmar.",
    category: "Comparativas",
    readTime: "10 min",
    date: "18 Abr 2026",
    isoDate: "2026-04-18",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Si gestionas una academia deportiva en Colombia y estás evaluando software, probablemente Clupik y SportMaps están en tu shortlist. Las dos prometen reemplazar tu Excel + WhatsApp + carpeta de pagos. Esta es la comparativa honesta lado a lado, con precios reales del mercado colombiano.",
      },
      { type: "h2", content: "TL;DR" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si necesitas app de marca propia con costo bajo + cobranza integrada con Wompi + soporte en Colombia, SportMaps es ~3x más barato a igualdad de features. Si ya operás en España con Mercado Pago y no necesitás WhatsApp AI, Clupik sigue siendo válido — pero pagás por features que probablemente no uses.",
      },
      { type: "h2", content: "Comparativa lado a lado" },
      {
        type: "table",
        headers: ["Feature", "Clupik", "SportMaps Pro"],
        rows: [
          ["Plan mensual base", "$200.000/mes", "$159.000/mes"],
          ["App marca propia", "+$245.000/mes (add-on)", "Incluida"],
          ["Pasarela de pagos", "Mercado Pago (+$75.000/mes)", "Wompi incluida"],
          ["WhatsApp AI cobranza", "No disponible", "500 conversaciones/mes"],
          ["Soporte", "Email · 24-48h", "WhatsApp directo · <2h"],
          ["Integración contabilidad", "Add-on adicional", "API incluida"],
          ["Migración desde Excel", "Manual", "Asistida sin costo"],
          ["Costo total mes (todo)", "≈$520.000/mes", "$159.000/mes"],
        ],
      },
      { type: "h2", content: "Dónde gana Clupik" },
      {
        type: "ul",
        items: [
          "Madurez del producto en España: 10+ años de mercado",
          "Comunidad de academias en mercados hispanoparlantes específicos",
          "Marketplace propio de academias (si te interesa esa distribución)",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Pricing 3x más bajo a igualdad de features (Wompi + app + integraciones)",
          "WhatsApp AI: cobranza, recordatorios y agendamiento sin contratar más administrativos",
          "Soporte en Colombia con respuesta <2h (no en otra zona horaria)",
          "Equipo construido para Latam: integraciones con Wompi, ePayco, INDER",
          "Ecosistema más amplio: marketplace de marcas, mapa de eventos, descuentos cruzados",
        ],
      },
      { type: "h2", content: "El cálculo real para una academia de 200 alumnos" },
      {
        type: "p",
        content:
          "Tomemos una academia con 200 alumnos pagando $300.000/mes de matrícula promedio:",
      },
      {
        type: "table",
        headers: ["Concepto", "Sin software", "Con Clupik", "Con SportMaps Pro"],
        rows: [
          ["Costo software/año", "$0", "$6.240.000", "$1.908.000"],
          ["Mora típica (8% no cobra)", "$5.760.000", "$2.880.000", "$1.728.000"],
          ["Horas admin/año (cobranza)", "240h ≈ $3.600.000", "60h ≈ $900.000", "24h ≈ $360.000"],
          ["Total/año", "$9.360.000", "$10.020.000", "$3.996.000"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Aclaración honesta: con cualquier software bien implementado, el ahorro es real. La pregunta es cuánto del ahorro se queda en tu bolsillo vs cuánto se va al vendor.",
      },
      { type: "h2", content: "Migrar de Clupik a SportMaps" },
      {
        type: "p",
        content:
          "Si ya estás en Clupik y quieres mover, el equipo de SportMaps hace la migración sin costo en menos de 30 días. Exportamos tus alumnos, historial de pagos y agenda — vos solo aprobás el resultado.",
      },
      {
        type: "cta",
        title: "¿Listo para comparar en tu caso real?",
        description:
          "Habla con ventas y te armamos una demo con tus datos. Migración asistida incluida si vienes de Clupik.",
        href: "/planes",
        label: "Ver planes y precios",
      },
    ],
    related: [
      "5-claves-digitalizar-escuela-deportiva",
      "costo-real-gestionar-academia-excel",
      "cobranza-whatsapp-ai-sportmaps",
    ],
    about: [
      "software de gestión de academias deportivas",
      "comparativa SportMaps vs Clupik",
      "gestión de escuelas de fútbol en Colombia",
    ],
    mentions: [
      "Clupik",
      "SportMaps",
      "Wompi",
      "Mercado Pago",
      "WhatsApp Business",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia de precio real entre SportMaps y Clupik?",
        answer:
          "Sumando todos los add-ons necesarios para una academia mediana en Colombia (app de marca propia, pasarela de pagos y soporte), Clupik queda alrededor de $520.000/mes mientras que SportMaps Pro cuesta $159.000/mes con esos features incluidos. La diferencia es ~3x.",
      },
      {
        question: "¿SportMaps tiene app de marca propia incluida?",
        answer:
          "Sí. El plan Pro incluye la app con tu logo, colores y nombre publicada en App Store y Google Play sin costo adicional. En Clupik la app de marca propia es un add-on de $245.000/mes aparte.",
      },
      {
        question: "¿Qué pasarela de pago usa SportMaps en Colombia?",
        answer:
          "SportMaps está integrado nativamente con Wompi, la pasarela de Bancolombia. No paga comisión adicional por la integración, solo las tarifas de Wompi. Clupik usa Mercado Pago en Colombia y cobra un add-on adicional por la integración.",
      },
      {
        question: "¿Cuánto demora migrar de Clupik a SportMaps?",
        answer:
          "Menos de 30 días. El equipo de SportMaps hace la migración sin costo: exporta alumnos, historial de pagos y agenda de Clupik, los carga en SportMaps y solo necesitás aprobar el resultado antes del cutover.",
      },
      {
        question: "¿Cuál es la mejor app para administrar una escuela de fútbol mediana en Colombia?",
        answer:
          "Para academias de 100 a 500 alumnos en Colombia, SportMaps es la opción más completa por precio: incluye app de marca propia, cobranza con Wompi, WhatsApp AI para recordatorios y mora, y soporte en español con respuesta menor a 2 horas por WhatsApp directo.",
      },
    ],
  },
  {
    slug: "academia-champions-redujo-no-shows",
    title: "Caso de éxito: cómo Academia Champions redujo no-shows del 30% al 8%",
    excerpt:
      "El experimento que cambió la operación de una academia de 180 alumnos: WhatsApp AI, recordatorios automáticos y cobranza en línea. Los números, el setup y los aprendizajes.",
    category: "Casos de éxito",
    readTime: "9 min",
    date: "24 Abr 2026",
    isoDate: "2026-04-24",
    author: "Equipo SportMaps",
    authorRole: "Customer Success",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Academia Champions es una escuela de fútbol base en Bogotá con 180 alumnos entre 7 y 17 años. En diciembre de 2025 tenían un problema clásico: 30% de los alumnos faltaba a las sesiones y 22% pagaba con 15+ días de atraso. Su Excel de cobranza pesaba 8MB y solo entendía el director.",
      },
      { type: "h2", content: "El problema en números" },
      {
        type: "table",
        headers: ["Métrica", "Antes (Dic 2025)", "Después (Mar 2026)"],
        rows: [
          ["No-shows mensuales", "54 alumnos/mes", "14 alumnos/mes"],
          ["Mora >15 días", "40 familias", "9 familias"],
          ["Horas admin/semana", "12 h", "2.5 h"],
          ["NPS familias", "32", "67"],
        ],
      },
      { type: "h2", content: "Lo que cambió" },
      {
        type: "ol",
        items: [
          "Activaron WhatsApp AI para confirmar asistencia 24h antes de cada sesión",
          "Migración del Excel a SportMaps Pro (3 días, sin pérdida de histórico)",
          "Cobranza automática 5 días antes con link Wompi en el mismo mensaje",
          "App para padres con check-in QR y notificación de inicio/fin de sesión",
        ],
      },
      {
        type: "quote",
        content:
          "Lo que más me sorprendió no fue el ahorro de horas administrativas. Fue que las familias empezaron a percibirnos como más profesionales. Subimos las mensualidades 15% en febrero y no perdimos un solo alumno.",
        author: "Director de Academia Champions",
      },
      { type: "h2", content: "El setup específico que usaron" },
      {
        type: "ul",
        items: [
          "Plan: Escuela Pro ($159.000/mes anual)",
          "WhatsApp AI: 500 conversaciones/mes incluidas",
          "Integración Wompi para pagos",
          "App de marca propia (incluida en el plan)",
        ],
      },
      { type: "h2", content: "Lo que NO funcionó al principio" },
      {
        type: "p",
        content:
          "Honestidad: las primeras 2 semanas los padres no respondían al WhatsApp AI porque pensaban que era spam. Tuvieron que cambiar el mensaje inicial a algo más personal y avisar previamente por el grupo de WhatsApp del director. Lección: la tecnología necesita un onboarding humano.",
      },
      {
        type: "cta",
        title: "¿Tu academia tiene problemas similares?",
        description:
          "Hablemos. Te armamos un setup específico para tu tamaño y deporte.",
        href: "/planes",
        label: "Ver Escuela Pro",
      },
    ],
    related: [
      "cobranza-whatsapp-ai-sportmaps",
      "sportmaps-vs-clupik-academias-colombia",
      "5-claves-digitalizar-escuela-deportiva",
    ],
  },
  {
    slug: "pricing-v3-academias",
    title: "Por qué subimos los precios y qué significa para tu academia",
    excerpt:
      "Transparencia total sobre el cambio a pricing v3.0: qué se mantiene gratis, qué se incluye en cada tier y por qué 13% de descuento anual es más sostenible que 20%.",
    category: "Producto",
    readTime: "6 min",
    date: "22 Abr 2026",
    isoDate: "2026-04-22",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "En abril de 2026 ajustamos los precios de SportMaps. Sabemos que los cambios de pricing generan dudas, así que aquí va la explicación completa: qué cambia, por qué y qué pasa con tu cuenta actual.",
      },
      { type: "h2", content: "Lo que cambió" },
      {
        type: "ul",
        items: [
          "Free Start: nuevo tier gratis hasta 20 alumnos (antes 10)",
          "Escuela Pro: $159.000/mes (antes $99.000/mes) — incluye WhatsApp AI",
          "Escuela Elite: $349.000/mes con 800 alumnos y 4.000 conversaciones AI",
          "Descuento anual: 13% (antes 20%) para que el negocio sea sostenible largo plazo",
        ],
      },
      { type: "h2", content: "Por qué" },
      {
        type: "p",
        content:
          "Cuando lanzamos el pricing original, no incluíamos WhatsApp AI (lanzado en Q1 2026). Esa feature cambia la economía: lo que antes hacías a mano (cobranza, recordatorios, agendamiento) ahora lo hace IA. El valor que entregamos pasó de 'software de gestión' a 'asistente operativo 24/7'. El precio refleja eso.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si ya eres cliente, tu precio se mantiene por 12 meses (grandfathering). Después renovás al pricing actual con 15% de descuento de fidelidad.",
      },
      { type: "h2", content: "Cuándo NO subir de tier todavía" },
      {
        type: "p",
        content:
          "Si tu academia tiene menos de 50 alumnos y no manejás cobranza online, probablemente Free Start o Escuela Start ($69.000/mes) te sirven. No necesitás WhatsApp AI hasta que pasas las 100 horas/mes en operación.",
      },
      {
        type: "cta",
        title: "Compará tu plan actual con el nuevo",
        description: "En la página de planes ves el detalle de cada tier.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: ["sportmaps-vs-clupik-academias-colombia", "cobranza-whatsapp-ai-sportmaps"],
  },
  {
    slug: "cobranza-whatsapp-ai-sportmaps",
    title: "Cómo funciona la cobranza por WhatsApp con IA en SportMaps",
    excerpt:
      "Desde el primer recordatorio hasta el comprobante de pago: el flujo completo del WhatsApp AI que reduce mora 30% sin contratar más administrativos.",
    category: "Tecnología",
    readTime: "7 min",
    date: "15 Abr 2026",
    isoDate: "2026-04-15",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "WhatsApp AI es la feature que más conversaciones genera en demos. Aquí va el flujo técnico exacto, sin marketing speak.",
      },
      { type: "h2", content: "El flujo de cobranza en 4 pasos" },
      {
        type: "ol",
        items: [
          "Día -5 antes del vencimiento: recordatorio amable con link de pago Wompi",
          "Día -1: confirmación + opciones (pagar ahora, pedir extensión, hablar con humano)",
          "Día +3 de mora: escalamiento con tono firme pero no acusatorio + plan de pago propuesto",
          "Día +10: handoff a humano del staff con contexto completo de la conversación",
        ],
      },
      { type: "h2", content: "Qué hace bien la IA (y qué no)" },
      {
        type: "ul",
        items: [
          "✅ Recordar fechas y montos exactos",
          "✅ Responder dudas frecuentes (cuándo es la próxima clase, dónde queda la sede)",
          "✅ Generar links de pago al instante",
          "✅ Escalar al humano cuando detecta frustración o casos complejos",
          "❌ Negociar planes de pago no estándar (eso lo hace el director)",
          "❌ Responder reclamos serios o conflictos (escalamiento automático)",
        ],
      },
      {
        type: "cta",
        title: "Ver WhatsApp AI en acción",
        description: "Pide una demo y te mostramos el flujo con datos reales.",
        href: "/planes",
        label: "Solicitar demo",
      },
    ],
    related: ["academia-champions-redujo-no-shows", "pricing-v3-academias"],
  },
  {
    slug: "5-claves-digitalizar-escuela-deportiva",
    title: "5 Claves para digitalizar tu escuela deportiva en 2026",
    excerpt:
      "Guía práctica para implementar tecnología en tu academia y mejorar la experiencia de estudiantes y padres.",
    category: "Guías",
    readTime: "5 min",
    date: "25 Dic 2025",
    isoDate: "2025-12-25",
    author: "Equipo SportMaps",
    authorRole: "Customer Success",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Digitalizar una escuela deportiva no es comprar un software. Es repensar cómo cobras, cómo te comunicas y cómo entregás valor. Estas son las 5 cosas que mueven la aguja.",
      },
      { type: "h2", content: "1. Centraliza pagos en una sola pasarela" },
      {
        type: "p",
        content:
          "Si tenés 4 padres pagando por transferencia y 6 por Nequi y 2 por efectivo, tu Excel es un infierno. Unificá en Wompi o similar: link único, conciliación automática.",
      },
      { type: "h2", content: "2. Reemplazá el grupo de WhatsApp por una app" },
      {
        type: "p",
        content:
          "Los grupos de 50 padres son anti-comunicación: nadie lee, todos opinan. Una app con notificaciones segmentadas (solo la categoría sub-12, solo padres de pago atrasado) tiene 10x mejor engagement.",
      },
      { type: "h2", content: "3. Recordatorios automáticos > recordatorios humanos" },
      {
        type: "p",
        content:
          "Pedirle al asistente que mande WhatsApp uno por uno es caro y poco confiable. Un sistema que mande 200 recordatorios a la misma hora cuesta lo mismo que 20.",
      },
      { type: "h2", content: "4. Métricas semanales, no trimestrales" },
      {
        type: "p",
        content:
          "Si solo mirás los números cuando 'algo se siente raro', ya perdiste 3 meses. Dashboards en tiempo real (asistencia, mora, NPS) son tu sistema de alerta temprana.",
      },
      { type: "h2", content: "5. Empezá pequeño, escalá rápido" },
      {
        type: "p",
        content:
          "No digitalices todo en 30 días. Empezá con el dolor más grande (probablemente cobranza), gana la confianza del equipo, después vas con asistencia, después con app de padres. El cambio organizacional importa más que el software.",
      },
      {
        type: "cta",
        title: "¿Lista para arrancar?",
        description: "Free Start es gratis hasta 20 alumnos. Sin tarjeta.",
        href: "/planes",
        label: "Empezar gratis",
      },
    ],
    related: ["academia-champions-redujo-no-shows", "costo-real-gestionar-academia-excel"],
  },
  {
    slug: "ia-revolucionando-entrenamiento",
    title: "Cómo la IA está revolucionando el entrenamiento deportivo",
    excerpt:
      "Descubre cómo la inteligencia artificial puede optimizar planes de entrenamiento y análisis de rendimiento.",
    category: "Tecnología",
    readTime: "6 min",
    date: "22 Dic 2025",
    isoDate: "2025-12-22",
    author: "Equipo SportMaps",
    authorRole: "Investigación",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "La IA en deporte es más que análisis de video de atletas de élite. Para el 95% de academias y coaches en Latam, la IA mueve la aguja en otros lados: comunicación, planificación y retención.",
      },
      { type: "h2", content: "Dónde sí está moviendo la aguja en 2026" },
      {
        type: "ul",
        items: [
          "Comunicación: WhatsApp AI para cobranza, recordatorios, FAQ",
          "Planificación: rutinas adaptativas según asistencia y progreso",
          "Análisis: detectar atletas en riesgo de abandono antes de que se vayan",
          "Marketing: matching automático entre marcas y atletas según perfil",
        ],
      },
      { type: "h2", content: "Dónde NO ha movido la aguja todavía" },
      {
        type: "ul",
        items: [
          "Análisis de técnica con video — sigue siendo caro y requiere mucho training data",
          "Predicción de lesiones — promesa que aún no se cumple en deporte amateur",
          "Reemplazar al coach — la IA asiste, no reemplaza juicio humano experto",
        ],
      },
      {
        type: "cta",
        title: "Probá WhatsApp AI gratis",
        description: "El primer uso real de IA en tu operación: cobranza inteligente.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: ["cobranza-whatsapp-ai-sportmaps"],
  },
  {
    slug: "gestion-torneos-mejores-practicas",
    title: "Gestión de torneos: mejores prácticas para 2026",
    excerpt:
      "Todo lo que necesitas saber para organizar competencias exitosas con herramientas digitales.",
    category: "Organización",
    readTime: "7 min",
    date: "18 Dic 2025",
    isoDate: "2025-12-18",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Organizar un torneo deportivo en Colombia en 2026 sigue siendo un infierno operativo: inscripciones por WhatsApp, pagos por transferencia sin conciliar, planillas en Excel, boletería con tickets impresos. Hay mejor manera.",
      },
      { type: "h2", content: "Las 6 fases de un torneo bien organizado" },
      {
        type: "ol",
        items: [
          "Pre-anuncio: página pública con fechas, categorías y precios desde día 1",
          "Inscripciones: link único, formulario corto, pago integrado, documentos online",
          "Conciliación: pagos automáticos cruzados con inscripciones, sin Excel manual",
          "Boletería: QR único por atleta, validación en puerta sin tickets físicos",
          "Día del evento: check-in QR, comunicación masiva por WhatsApp",
          "Post-torneo: certificados digitales automáticos, encuesta NPS",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Regla del 30%: si tu torneo necesita más del 30% de tu tiempo en tareas administrativas, no estás organizando deporte, estás haciendo papelería.",
      },
      {
        type: "cta",
        title: "Ver módulo de Organizadores",
        description: "Cotización a medida según volumen de eventos.",
        href: "/planes",
        label: "Solicitar cotización",
      },
    ],
    related: [],
  },
  {
    slug: "metricas-clave-academias",
    title: "Métricas clave para medir el éxito de tu academia",
    excerpt:
      "Los indicadores más importantes que todo director deportivo debe monitorear.",
    category: "Análisis",
    readTime: "4 min",
    date: "15 Dic 2025",
    isoDate: "2025-12-15",
    author: "Equipo SportMaps",
    authorRole: "Análisis",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una academia bien gestionada tiene un dashboard que cabe en 5 números. Si necesitás más, perdiste foco.",
      },
      { type: "h2", content: "Los 5 KPIs que importan" },
      {
        type: "ol",
        items: [
          "Churn mensual: % de alumnos que se van cada mes (meta <3%)",
          "Mora >15 días: % de mensualidades sin pagar (meta <5%)",
          "Asistencia promedio: % de sesiones a las que asisten los alumnos inscritos (meta >85%)",
          "NPS familias: qué tan probable es que recomienden tu academia (meta >50)",
          "LTV/CAC: cuánto vale un alumno vs cuánto cuesta conseguirlo (meta >5:1)",
        ],
      },
      {
        type: "p",
        content:
          "Cualquier métrica más allá de estas 5 es ruido. El dashboard de SportMaps te muestra exactamente estos 5 sin que tengas que armarlo.",
      },
      {
        type: "cta",
        title: "Ver dashboard en acción",
        description: "Demo personalizada con datos similares a los tuyos.",
        href: "/planes",
        label: "Pedir demo",
      },
    ],
    related: ["academia-champions-redujo-no-shows"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[] = []): BlogPost[] {
  return slugs.map(getPostBySlug).filter((p): p is BlogPost => !!p);
}
