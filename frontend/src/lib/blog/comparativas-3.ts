import type { BlogPost } from "../blog-posts";

/**
 * Cluster «comparativas-3» (fondo de embudo, tercera tanda) + guía de migración.
 *
 * Regla de verdad: de los competidores solo se cita lo que ellos publican en
 * su sitio, consultado en noviembre de 2026 (cuotaq.com y cuotaq.com/co,
 * deporteapp.com y su llms.txt, www.driblin.com). Si un precio no se pudo
 * confirmar, se dice así y no se pone cifra. Datos de SportMaps = public/llms-full.txt.
 */

type Faq = { question: string; answer: string };

/** Las preguntas frecuentes van en el cuerpo (h3 + p) y también en `faqs` (FAQPage). */
const faqBlocks = (faqs: Faq[]): BlogPost["body"] =>
  faqs.flatMap((f): BlogPost["body"] => [
    { type: "h3", content: f.question },
    { type: "p", content: f.answer },
  ]);

const PLANES_SPORTMAPS: string[][] = [
  ["Free Start", "$0", "—", "Hasta 20"],
  ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
  ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
  ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
  ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
  ["Custom", "Desde $750.000", "—", "Ilimitados"],
];

// ── Preguntas frecuentes ─────────────────────────────────────────────────────

const faqsCuotaq: Faq[] = [
  {
    question: "¿Cuánto cuesta CuotaQ en Colombia?",
    answer:
      "Según su página para Colombia, consultada en noviembre de 2026, el plan Profesional cuesta desde $120.000 COP al mes, con el primer mes gratis y sin tarjeta, y el plan Instituciones se cotiza a medida según la cantidad de socios. La palabra «desde» importa: pídeles la cifra exacta para tu número de socios.",
  },
  {
    question: "¿CuotaQ o SportMaps para una escuela de 80 niños?",
    answer:
      "Por precio de lista, SportMaps: el plan Escuela Crecimiento cubre hasta 120 alumnos por $99.000 al mes, y el plan Profesional de CuotaQ arranca en $120.000. Además, SportMaps incluye la operación deportiva (categorías, asistencia de entrenamiento, entrenadores ilimitados) y la integración de facturación electrónica DIAN.",
  },
  {
    question: "¿CuotaQ tiene facturación electrónica DIAN?",
    answer:
      "Su sitio, consultado en noviembre de 2026, habla de recibos enviados por WhatsApp, pero no menciona facturación electrónica validada por la DIAN. Si tu escuela está obligada a facturar, pregúntales cómo se resuelve. En SportMaps la integración no tiene costo y pagas solo el paquete de facturas que uses.",
  },
  {
    question: "¿Con qué medios de pago trabaja cada uno en Colombia?",
    answer:
      "CuotaQ publica PSE, Efecty, tarjeta de crédito o débito y Mercado Pago, y aclara que el socio no necesita cuenta de Mercado Pago para pagar. SportMaps integra Wompi y Mercado Pago (PSE, Nequi, tarjeta y billetera) en todos los planes, y además recibe efectivo y transferencias, con comprobantes que lee Mapi, su asistente de WhatsApp con IA.",
  },
  {
    question: "¿CuotaQ sirve para tomar asistencia de entrenamientos?",
    answer:
      "Su sitio describe carné digital con QR y control de accesos a la sede, pero no menciona asistencia por grupo o por entrenamiento. Si necesitas que el entrenador pase lista por categoría, confírmalo con ellos antes de contratar. En SportMaps los entrenadores tienen app con check-in por QR.",
  },
];

const faqsDeporteapp: Faq[] = [
  {
    question: "¿Cuánto cuesta DeporteApp?",
    answer:
      "No pudimos confirmarlo. Su sitio tiene una página de planes y ofrece 30 días gratis sin tarjeta, pero en nuestra consulta de noviembre de 2026 no encontramos cifras legibles ni la moneda en que cobra. Revisa su página de planes o pídeles la cotización por escrito, en pesos colombianos, para tu número de atletas.",
  },
  {
    question: "¿DeporteApp funciona en Colombia?",
    answer:
      "Su sitio se presenta como plataforma para academias de Latinoamérica y España y muestra el testimonio de una escuela de fútbol de Colombia. Pregúntales qué medios de pago colombianos manejan y cómo es el soporte en tu horario.",
  },
  {
    question: "¿DeporteApp tiene facturación electrónica DIAN?",
    answer:
      "Su sitio, consultado en noviembre de 2026, menciona recibos digitales y contabilidad multimoneda, pero no facturación electrónica validada por la DIAN. En SportMaps la integración viene en todos los planes sin costo; pagas solo el paquete de facturas.",
  },
  {
    question: "¿Cuál sirve mejor para una liga o federación con varios clubes?",
    answer:
      "DeporteApp publica un módulo de Federación con torneos, jornadas, posiciones, sanciones y actas de partido. En SportMaps los torneos y ligas están en piloto: inscripción de equipos, delegaciones y cobro, sin generación masiva de cruces y calendarios. Si tu necesidad principal es administrar una liga multi-club hoy, DeporteApp tiene más construido.",
  },
  {
    question: "¿Los dos usan WhatsApp?",
    answer:
      "Sí, de forma distinta. DeporteApp describe WhatsApp integrado para convocatorias, confirmaciones y notificaciones. En SportMaps, Mapi es un asistente con IA que además lee los comprobantes de pago que mandan las familias, los deja listos para aprobar y atiende a los prospectos que preguntan precios.",
  },
];

const faqsDriblin: Faq[] = [
  {
    question: "¿Cuánto cuesta Driblin?",
    answer:
      "No publica precios. Su sitio, consultado en noviembre de 2026, invita a «organizar tu club gratis» y a solicitar un demo, pero no muestra planes ni cifras ni detalla qué incluye la opción gratuita. Pide la cotización por escrito.",
  },
  {
    question: "¿Driblin opera en Colombia?",
    answer:
      "Su sitio lista Venezuela y Colombia como países de contacto. El teléfono que publica tiene indicativo de Venezuela (+58), así que conviene preguntar cómo es el soporte y la facturación para un club colombiano.",
  },
  {
    question: "¿Driblin sirve para cobrar mensualidades?",
    answer:
      "Su sitio no lo menciona. Su propuesta financiera es la «autogestión»: tienda online, eventos digitales, rifas, quinielas y referidos. Si tu ingreso principal son las mensualidades, pregúntales cómo se registran y se cobran. En SportMaps el cobro de mensualidades con Wompi, Mercado Pago, efectivo y transferencia es el centro del producto.",
  },
  {
    question: "¿SportMaps tiene scouting?",
    answer:
      "No. SportMaps tiene el Atleta ID (perfil del deportista con carnet, QR y registro de logros) y un directorio para que las familias encuentren escuelas, pero no un módulo para exponer jugadores ante ojeadores. Si eso es lo que buscas, Driblin lo ofrece con su Gestor de Scout.",
  },
  {
    question: "¿Se pueden usar los dos al tiempo?",
    answer:
      "Sí, no se pisan. Un club puede llevar alumnos, cobros, asistencia y facturación en SportMaps y usar Driblin para rifas, visibilidad de jugadores o competiciones. Lo que conviene evitar es tener la lista de jugadores en dos sitios sin decidir cuál es la que manda.",
  },
];

const faqsMigracion: Faq[] = [
  {
    question: "¿Cuánto se demora cambiar de software en una escuela deportiva?",
    answer:
      "Depende del tamaño y de qué tan ordenados estén los datos. Como referencia, SportMaps estima menos de 30 días para una academia de hasta 500 alumnos, contando la limpieza de datos, la carga, la revisión y un periodo en paralelo. Una escuela pequeña con el Excel al día puede hacerlo en mucho menos.",
  },
  {
    question: "¿Cuál es el mejor momento del mes para cambiar?",
    answer:
      "Justo después del cierre: cuando ya recibiste la mayoría de los pagos del mes y todavía no has generado los cobros del siguiente. Así los saldos están quietos y las familias reciben su primer cobro ya en el sistema nuevo.",
  },
  {
    question: "¿Se pierde el historial de pagos al cambiar de sistema?",
    answer:
      "No, si lo exportas antes de cancelar el sistema anterior. Lo mínimo es llevar al sistema nuevo el saldo de cada alumno a la fecha de corte y guardar el historial completo en Excel y PDF como archivo de consulta. Cuánto historial se carga en el sistema nuevo se define con cada proveedor.",
  },
  {
    question: "¿Las familias tienen que hacer algo?",
    answer:
      "Poco, si lo preparas bien: avisarles con una o dos semanas, darles el enlace o los datos nuevos para pagar y pedirles que revisen su información de contacto. Lo que más confunde a las familias es recibir cobros por dos sitios, así que deja un solo canal de cobro desde el día del corte.",
  },
  {
    question: "¿SportMaps cobra por pasar los datos?",
    answer:
      "No. SportMaps acompaña sin costo a pasar los datos desde Excel en todos los planes, incluido el gratis. Tú exportas la información del sistema anterior a una hoja de cálculo y el equipo te ayuda a organizarla, cargarla y revisarla antes del cambio.",
  },
];

export const comparativas3Posts: BlogPost[] = [
  // ── SportMaps vs CuotaQ ────────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-cuotaq",
    title: "SportMaps vs CuotaQ (2026): cobro de cuotas o gestión completa de la escuela deportiva",
    excerpt:
      "CuotaQ es un software de cobro de cuotas y gestión de socios con versión para Colombia; SportMaps es un software para escuelas deportivas que cobra y además maneja la operación. Comparamos precios en pesos, medios de pago y funciones, con datos consultados en noviembre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "CuotaQ te sirve si lo que necesitas es cobrar cuotas a socios y controlar quién entra a la sede: es un software de cobro de cuotas y gestión de socios para clubes, ONG, colegios y asociaciones, con versión para Colombia y plan Profesional desde $120.000 COP al mes. SportMaps te sirve si manejas una escuela o academia deportiva con niños, acudientes, categorías y entrenadores: cobra las mensualidades y además lleva la operación deportiva, con plan gratis hasta 20 alumnos y planes desde $69.000 al mes. Datos consultados en noviembre de 2026; pueden cambiar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Club social o asociación que vive de la cuota de sus socios y quiere ordenar la cobranza: mira CuotaQ. Escuela deportiva formativa que además de cobrar necesita asistencia por grupo, entrenadores, informes a las familias y factura electrónica: mira SportMaps. Con menos de 120 alumnos, SportMaps cuesta menos por precio de lista.",
      },
      { type: "h2", content: "Qué publica CuotaQ" },
      {
        type: "p",
        content:
          "Esto es lo que dice su sitio (cuotaq.com y su página para Colombia), consultado en noviembre de 2026. Se presenta como software de cobro de cuotas y gestión de socios para clubes deportivos, ONG, colegios y asociaciones en Latinoamérica, con versiones específicas para Argentina, México y Colombia.",
      },
      {
        type: "table",
        headers: ["Tema", "Lo que dice CuotaQ"],
        rows: [
          ["Precio en Colombia", "Plan Profesional desde $120.000 COP al mes; plan Instituciones a medida según la cantidad de socios"],
          ["Prueba", "Primer mes gratis, sin tarjeta; también ofrece demo"],
          ["Puesta en marcha", "Migración y puesta en marcha sin costo"],
          ["Medios de pago en Colombia", "PSE, Efecty, tarjeta de crédito o débito y Mercado Pago; el socio no necesita cuenta de Mercado Pago"],
          ["Conciliación", "Automática de los pagos recibidos"],
          ["WhatsApp", "Recordatorios de cuota, enlace de pago, recibo y carné enviados por WhatsApp"],
          ["Carné y acceso", "Carné digital con QR y control de accesos para clubes"],
          ["Tracción declarada", "Más de 300 organizaciones, más de 100.000 socios y más de 500.000 cobranzas procesadas"],
          ["Asistencia a entrenamientos", "No la menciona"],
          ["Facturación electrónica DIAN", "No la menciona"],
        ],
      },
      { type: "h2", content: "Precios de SportMaps (noviembre de 2026)" },
      {
        type: "table",
        headers: ["Plan SportMaps", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: PLANES_SPORTMAPS,
      },
      {
        type: "p",
        content:
          "Todos los planes, también el gratis, incluyen: Mapi (el asistente de WhatsApp con IA), Wompi y Mercado Pago integrados, la integración de facturación electrónica DIAN sin costo (pagas solo el paquete según el volumen de facturas), entrenadores y staff ilimitados, la página pública de la escuela y soporte en español por WhatsApp. El uso de WhatsApp solo genera cobro de Meta si te excedes de los mensajes gratis del mes.",
      },
      { type: "h2", content: "Precio según el tamaño de tu escuela" },
      {
        type: "table",
        headers: ["Tamaño", "CuotaQ (según su sitio)", "SportMaps (mensual)", "Qué mirar"],
        rows: [
          ["Hasta 20 alumnos", "Desde $120.000", "$0 (Free Start)", "SportMaps no cobra en este tramo"],
          ["21 a 50", "Desde $120.000", "$69.000 (Start)", "SportMaps cuesta menos"],
          ["51 a 120", "Desde $120.000", "$99.000 (Crecimiento)", "SportMaps cuesta menos"],
          ["121 a 300", "Desde $120.000", "$159.000 (Pro)", "Depende de la cifra exacta que te cotice CuotaQ"],
          ["301 a 800", "Desde $120.000 o plan Instituciones a medida", "$349.000 (Elite)", "Pide la cotización de CuotaQ por escrito"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "CuotaQ publica un precio «desde» y no detalla en su página cuántos socios cubre esa cifra. No sabemos cómo sube con el tamaño, así que no lo estimamos: la comparación en los tramos grandes solo se puede hacer con su cotización. En ninguno de los dos casos el precio del software incluye las tarifas de la pasarela de pagos.",
      },
      { type: "h2", content: "Función por función" },
      {
        type: "table",
        headers: ["Función", "CuotaQ (según su sitio)", "SportMaps"],
        rows: [
          ["Cobro en línea", "PSE, Efecty, tarjeta, Mercado Pago", "Wompi y Mercado Pago: PSE, Nequi, tarjeta, billetera"],
          ["Efectivo y transferencia", "Efectivo por Efecty; conciliación automática", "Efectivo y transferencia; Mapi lee el comprobante y lo deja listo para aprobar"],
          ["Recordatorios de cobro", "Por WhatsApp, con enlace de pago y recibo", "Por WhatsApp y correo, con enlace de pago"],
          ["Asistente con IA en WhatsApp", "No lo menciona", "Mapi: lee comprobantes, responde dudas y atiende prospectos"],
          ["Carné digital con QR", "Sí, enviado por WhatsApp", "Sí, carnet digital"],
          ["Control de acceso", "Sí, para clubes", "Adicional: torniquetes y lectores ZKTeco con bloqueo por mora"],
          ["Asistencia por grupo o entrenamiento", "No la menciona", "App para entrenadores con check-in por QR"],
          ["Categorías por edad y entrenadores", "No es su foco", "Núcleo del producto; staff ilimitado"],
          ["Portal para padres", "No lo menciona", "Sí, con seguimiento del hijo e informe mensual"],
          ["Facturación electrónica DIAN", "No la menciona", "Integración sin costo; pagas el paquete de facturas"],
          ["Torneos", "No aparece como función", "En piloto: inscripción de equipos y cobro"],
          ["Tipos de organización", "Clubes, ONG, colegios, asociaciones", "Escuelas, academias y clubes deportivos"],
          ["Países", "Varios países de Latinoamérica", "Solo Colombia"],
          ["Plan gratis permanente", "No; primer mes gratis", "Sí, hasta 20 alumnos"],
        ],
      },
      { type: "h2", content: "Cuándo elegir CuotaQ" },
      {
        type: "ul",
        items: [
          "Tu organización es un club social, una asociación, una ONG o un colegio que cobra cuotas a socios, no una escuela con entrenamientos por categoría. CuotaQ está pensado para ese modelo de «socio que paga cuota».",
          "Muchas de tus familias pagan en efectivo en puntos de recaudo: CuotaQ publica Efecty entre sus medios de pago en Colombia, y SportMaps no lo tiene como canal integrado.",
          "Operas en más de un país o piensas hacerlo. CuotaQ tiene versiones para Argentina, México y Colombia; SportMaps hoy funciona solo en Colombia y en pesos.",
          "Quieres una herramienta enfocada en una sola cosa, la cobranza, sin módulos deportivos que no vas a usar.",
          "Valoras la tracción: más de 300 organizaciones y más de 500.000 cobranzas procesadas, según su sitio, son una señal de producto probado.",
          "Tienes varios cientos de socios y la cotización que te den resulta menor que el plan de SportMaps para ese tamaño.",
        ],
      },
      { type: "h2", content: "Cuándo elegir SportMaps" },
      {
        type: "ul",
        items: [
          "Tienes una escuela o academia deportiva: niños, acudientes, categorías por edad, grupos y entrenadores. SportMaps está construido alrededor de ese ciclo.",
          "Tienes menos de 120 alumnos: pagas $0, $69.000 o $99.000 al mes, por debajo del precio de entrada que publica CuotaQ.",
          "Muchas familias te pagan por transferencia y te mandan la foto del comprobante: Mapi lo lee (mediana de 42 segundos, según datos de la plataforma) y tú solo apruebas.",
          "Tienes que facturar electrónicamente: la integración con la DIAN viene en todos los planes y tu contador tiene acceso.",
          "Quieres que los entrenadores tomen asistencia desde el celular y que las familias reciban el informe mensual y el carnet digital en el mismo sistema donde pagan.",
          "Tienes sede con ingreso controlado: el adicional de torniquetes ZKTeco bloquea el acceso por mora de forma automática.",
        ],
      },
      { type: "h2", content: "Qué preguntarle a cada uno antes de decidir" },
      {
        type: "ol",
        items: [
          "A CuotaQ: ¿cuánto pago exactamente con mi número de socios y qué incluye el plan Profesional?",
          "A CuotaQ: ¿cómo manejo grupos, categorías y la lista de asistencia de cada entrenamiento?",
          "A CuotaQ: ¿cómo emito factura electrónica DIAN por los pagos que recibo?",
          "A los dos: ¿qué tarifa cobra la pasarela por PSE y por tarjeta, y la plata llega directo a mi cuenta?",
          "A los dos: ¿en qué formato me entregan mis datos si algún día me voy?",
          "A SportMaps: ¿qué adicionales necesito (por ejemplo, control de acceso) y cuánto cuestan?",
        ],
      },
      {
        type: "p",
        content:
          "Después, prueba los dos con datos reales. CuotaQ ofrece el primer mes gratis sin tarjeta y SportMaps tiene un plan gratis permanente hasta 20 alumnos: monta un grupo, genera sus cobros y mira cuántos pasos te toma cerrar el mes en cada uno.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Datos de CuotaQ tomados de su sitio público, consultado en noviembre de 2026. Los precios y funciones de terceros cambian: confírmalos con ellos antes de contratar.",
      },
      { type: "h2", content: "Preguntas frecuentes" },
      ...faqBlocks(faqsCuotaq),
      {
        type: "cta",
        title: "Comparación lado a lado: SportMaps vs CuotaQ",
        description:
          "La tabla completa, dónde gana cada uno y las preguntas más comunes, en una sola página.",
        href: "/comparar/cuotaq",
        label: "Ver la comparación",
      },
    ],
    related: [
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "mejor-software-gestion-deportiva-colombia-2026",
      "como-cambiar-de-software-en-una-escuela-deportiva-sin-perder-datos",
    ],
    about: [
      "software de cobro de cuotas para clubes en Colombia",
      "comparativa SportMaps vs CuotaQ",
      "gestión de escuelas deportivas",
    ],
    mentions: ["SportMaps", "CuotaQ", "Wompi", "Mercado Pago", "PSE", "Efecty", "Nequi", "WhatsApp", "DIAN", "ZKTeco"],
    faqs: faqsCuotaq,
  },

  // ── SportMaps vs DeporteApp ────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-deporteapp",
    title: "SportMaps vs DeporteApp (2026): cuál conviene a una academia deportiva en Colombia",
    excerpt:
      "DeporteApp es una plataforma para academias de Latinoamérica y España, con módulo de Federación y contabilidad multimoneda; SportMaps está hecho para escuelas en Colombia, con precios públicos en pesos. Comparamos función por función con datos consultados en noviembre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "DeporteApp te sirve si administras una liga o federación con varios clubes, o una academia que opera en más de un país o en más de una moneda: publica un módulo de Federación (torneos, jornadas, posiciones, sanciones y actas) y contabilidad multimoneda. SportMaps te sirve si tienes una escuela o academia en Colombia y quieres saber el precio en pesos antes de registrarte, cobrar con Wompi y Mercado Pago, que una IA lea los comprobantes que llegan por WhatsApp y facturar electrónicamente ante la DIAN. Datos consultados en noviembre de 2026; pueden cambiar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si lo tuyo es organizar competencia entre clubes o trabajas en varios países, DeporteApp tiene más construido. Si lo tuyo es una escuela colombiana que vive de las mensualidades, SportMaps trae resuelto lo local: pasarelas colombianas, DIAN y precios publicados desde $0.",
      },
      { type: "h2", content: "Qué publica DeporteApp" },
      {
        type: "p",
        content:
          "Esto es lo que dice su sitio (deporteapp.com) y el archivo llms.txt que publica para asistentes de IA, consultados en noviembre de 2026. Se presenta como software de gestión para clubes y academias deportivas de Latinoamérica y España.",
      },
      {
        type: "table",
        headers: ["Tema", "Lo que dice DeporteApp"],
        rows: [
          ["Qué gestiona", "Pagos, atletas, entrenamientos, convocatorias, contabilidad y comunicación con representantes"],
          ["Módulos que nombra", "Gestión de Atletas, Finanzas Inteligentes, Juegos en Vivo, WhatsApp Integrado, Reportes y Análisis, Calendario Unificado, Roles y Permisos"],
          ["Federación", "Módulo con torneos, jornadas, posiciones, sanciones y actas de partido"],
          ["Contabilidad", "Multimoneda, incluido BCV para Venezuela; abonos y recibos digitales"],
          ["WhatsApp", "Convocatorias automáticas, confirmaciones y notificaciones (WhatsApp y correo)"],
          ["Prueba", "30 días gratis, sin pago inicial y sin tarjeta de crédito; «cancela cuando quieras»"],
          ["Precios", "Tiene página de planes; en nuestra consulta no pudimos leer cifras"],
          ["Clientes que muestra", "Academias de Venezuela, México, Argentina y Chile, y una escuela de fútbol de Colombia"],
          ["Pasarelas de pago en línea", "No las menciona"],
          ["Facturación electrónica DIAN", "No la menciona"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Sobre el precio: DeporteApp tiene una página de planes y deja registrarse a probar sin hablar con ventas, pero al consultarla en noviembre de 2026 no pudimos leer montos ni la moneda. Por eso este artículo no pone cifras de DeporteApp ni las estima: míralas directamente en su sitio o pídelas por escrito.",
      },
      { type: "h2", content: "Precios de SportMaps (noviembre de 2026)" },
      {
        type: "table",
        headers: ["Plan SportMaps", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: PLANES_SPORTMAPS,
      },
      {
        type: "p",
        content:
          "Todos los planes, también el gratis, incluyen: Mapi (el asistente de WhatsApp con IA), Wompi y Mercado Pago integrados, la integración de facturación electrónica DIAN sin costo (pagas solo el paquete según el volumen de facturas), entrenadores y staff ilimitados, la página pública de la escuela y soporte en español por WhatsApp.",
      },
      { type: "h2", content: "Función por función" },
      {
        type: "table",
        headers: ["Función", "DeporteApp (según su sitio)", "SportMaps"],
        rows: [
          ["Precio visible antes de registrarte", "No pudimos confirmar cifras", "Sí, en pesos, desde $0"],
          ["Prueba", "30 días gratis sin tarjeta", "Plan gratis permanente hasta 20 alumnos"],
          ["Gestión de atletas y representantes", "Sí", "Sí: alumnos, acudientes, fichas médicas, carnets digitales"],
          ["Cobro en línea en Colombia", "No menciona pasarelas", "Wompi y Mercado Pago: PSE, Nequi, tarjeta, billetera"],
          ["Transferencias y comprobantes", "Abonos y recibos digitales", "Mapi lee el comprobante y lo deja listo para aprobar"],
          ["WhatsApp", "Convocatorias, confirmaciones y notificaciones", "Asistente con IA: comprobantes, recordatorios con enlace de pago, dudas y prospectos"],
          ["Facturación electrónica DIAN", "No la menciona", "Integración sin costo; pagas el paquete de facturas"],
          ["Asistencia", "Sí", "Sí, app para entrenadores con check-in por QR"],
          ["Partidos y estadísticas", "Juegos en vivo y estadísticas de jugadores", "No es el foco hoy"],
          ["Liga o federación multi-club", "Módulo de Federación con posiciones, sanciones y actas", "Torneos en piloto: inscripción de equipos y cobro; sin generación masiva de cruces"],
          ["Monedas", "Multimoneda, incluido BCV", "Solo pesos colombianos"],
          ["Países", "Latinoamérica y España", "Solo Colombia"],
          ["Control de acceso físico", "No lo menciona", "Adicional: torniquetes ZKTeco con bloqueo por mora"],
          ["Soporte", "No detalla canal ni tiempos", "WhatsApp directo en español, desde Colombia"],
        ],
      },
      { type: "h2", content: "Cuándo elegir DeporteApp" },
      {
        type: "ul",
        items: [
          "Administras una liga, asociación o federación con varios clubes y necesitas jornadas, tabla de posiciones, sanciones y actas de partido. Es su módulo más diferenciado, y en SportMaps los torneos todavía están en piloto.",
          "Tu academia tiene sedes en más de un país, o cobras en más de una moneda. DeporteApp declara contabilidad multimoneda; SportMaps trabaja solo en pesos colombianos.",
          "Operas en Venezuela o tienes relación con clubes de allá: la integración de la tasa BCV resuelve un problema real que SportMaps no atiende.",
          "Le das mucho peso al día de partido: convocatorias con confirmación por WhatsApp, juegos en vivo y estadísticas por jugador.",
          "Quieres probar un mes completo con todos tus atletas antes de pagar: publica 30 días gratis sin tarjeta, sin límite de alumnos declarado.",
          "Prefieres una plataforma con clientes visibles en varios países de la región.",
        ],
      },
      { type: "h2", content: "Cuándo elegir SportMaps" },
      {
        type: "ul",
        items: [
          "Tu escuela está en Colombia y quieres decidir con el precio a la vista: seis planes publicados en pesos, desde $0 hasta 20 alumnos.",
          "Necesitas cobrar en línea con medios colombianos (PSE, Nequi, tarjeta) y que la plata llegue directo a la cuenta de la escuela, sin costo adicional sobre las tarifas de cada pasarela.",
          "Buena parte de tus familias paga por transferencia y manda el comprobante por WhatsApp: Mapi lo lee y lo deja listo para que apruebes.",
          "Estás obligado a facturar electrónicamente: la integración con la DIAN está en todos los planes y el contador puede revisar el estado de las facturas.",
          "Quieres que WhatsApp también te ayude a vender: Mapi responde a quien escribe preguntando precios y agenda la clase de cortesía.",
          "Quieres soporte por WhatsApp en tu horario y acompañamiento sin costo para pasar tus datos desde Excel.",
        ],
      },
      { type: "h2", content: "La diferencia de fondo: región o país" },
      {
        type: "p",
        content:
          "Una plataforma hecha para muchos países tiene que resolver lo que cambia entre ellos: monedas, tasas de cambio, formatos de competencia. Una plataforma hecha para un solo país puede dedicarse a lo que solo existe ahí. En Colombia eso significa PSE y Nequi, comprobantes de transferencia que llegan por WhatsApp y la factura electrónica de la DIAN.",
      },
      {
        type: "p",
        content:
          "Ninguno de los dos enfoques es mejor en abstracto. Si tu operación cruza fronteras, lo local de SportMaps no te sirve de mucho. Si tu operación es una escuela de barrio o una academia con varias sedes en la misma ciudad, lo que más horas te quita es cobrar, conciliar y facturar, y ahí pesa que el software ya hable con las pasarelas y la DIAN.",
      },
      { type: "h2", content: "Cómo comparar si no tienes las dos cifras" },
      {
        type: "ol",
        items: [
          "Entra a la página de planes de DeporteApp y anota el plan que cubre tu número de atletas, el precio y la moneda. Si no lo ves claro, pídelo por escrito.",
          "Si el precio está en dólares, conviértelo a pesos con la tasa del día y recuerda que va a moverse mes a mes.",
          "Pregunta cómo pagan las familias en Colombia: ¿hay PSE o Nequi dentro de la plataforma, o registras los pagos a mano?",
          "Pregunta cómo resuelves la factura electrónica: ¿la emites en otro sistema y digitas dos veces?",
          "Pon al lado el plan de SportMaps de tu tramo y suma, en los dos, la pasarela y el costo de facturar.",
          "Prueba ambos con un grupo real durante un ciclo de cobro completo.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Datos de DeporteApp tomados de su sitio público y su llms.txt, consultados en noviembre de 2026. Los precios y funciones de terceros cambian: confírmalos con ellos antes de contratar.",
      },
      { type: "h2", content: "Preguntas frecuentes" },
      ...faqBlocks(faqsDeporteapp),
      {
        type: "cta",
        title: "Comparación lado a lado: SportMaps vs DeporteApp",
        description:
          "La tabla completa, dónde gana cada uno y las preguntas más comunes, en una sola página.",
        href: "/comparar/deporteapp",
        label: "Ver la comparación",
      },
    ],
    related: [
      "mejor-software-gestion-deportiva-colombia-2026",
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "sportmaps-vs-driblin",
    ],
    about: [
      "software para academias deportivas en Colombia",
      "comparativa SportMaps vs DeporteApp",
      "gestión de ligas y federaciones deportivas",
    ],
    mentions: ["SportMaps", "DeporteApp", "Wompi", "Mercado Pago", "PSE", "Nequi", "WhatsApp", "DIAN", "ZKTeco"],
    faqs: faqsDeporteapp,
  },

  // ── SportMaps vs Driblin ───────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-driblin",
    title: "SportMaps vs Driblin (2026): dos enfoques distintos para un club de fútbol formativo",
    excerpt:
      "Driblin es un software para clubes de fútbol centrado en competiciones, scouting, patrocinio y autogestión financiera (rifas, tienda, eventos); SportMaps se centra en cobrar mensualidades y operar la escuela. Comparamos lo que cada uno publica, con datos consultados en noviembre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Driblin te sirve si tu club de fútbol quiere organizar competiciones, darles visibilidad a sus jugadores ante ojeadores y conseguir ingresos distintos a la mensualidad, como rifas, quinielas, tienda en línea y patrocinios. SportMaps te sirve si tu problema del día a día es cobrar las mensualidades, saber quién debe, conciliar transferencias, tomar asistencia y facturar ante la DIAN, en fútbol o en cualquier otro deporte. Más que competir, resuelven partes distintas del club. Driblin no publica precios; SportMaps sí, desde $0. Datos consultados en noviembre de 2026; pueden cambiar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Pregúntate de dónde sale la plata de tu club. Si la mayor parte viene de las mensualidades de las familias, empieza por un software que las cobre bien. Si ya tienes eso resuelto y buscas nuevas fuentes de ingreso o vitrina para tus jugadores, Driblin apunta a eso.",
      },
      { type: "h2", content: "Qué publica Driblin" },
      {
        type: "p",
        content:
          "Esto es lo que dice su sitio (www.driblin.com), consultado en noviembre de 2026. Se presenta como software de gestión para clubes de fútbol y como «la única plataforma en Latinoamérica que combina gestión profesional con módulos de autogestión financiera». Organiza el producto en cinco gestores.",
      },
      {
        type: "table",
        headers: ["Módulo de Driblin", "Para qué sirve, según su sitio"],
        rows: [
          ["Gestor Mi Club", "Gestión centralizada de tareas, procesos y objetivos del club"],
          ["Gestor de Competiciones", "Crear torneos, inscribir equipos, llevar resultados y estadísticas"],
          ["Gestor de Patrocinio", "Ayuda para buscar apoyo público y privado"],
          ["Gestor de Scout", "Exposición de los jugadores a nivel nacional e internacional"],
          ["Gestor de Autogestión", "Tienda en línea, eventos digitales, rifas, quinielas y monetización con referidos"],
        ],
      },
      {
        type: "table",
        headers: ["Tema", "Lo que dice Driblin"],
        rows: [
          ["Precios", "No publica precios ni planes; invita a «organizar tu club gratis» y a solicitar un demo"],
          ["Países de contacto", "Venezuela y Colombia; el teléfono publicado tiene indicativo +58"],
          ["Formato", "Aplicación web"],
          ["Deporte", "Fútbol"],
          ["Cobro de mensualidades", "No lo menciona"],
          ["Facturación electrónica", "No la menciona"],
        ],
      },
      { type: "h2", content: "Precios de SportMaps (noviembre de 2026)" },
      {
        type: "table",
        headers: ["Plan SportMaps", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: PLANES_SPORTMAPS,
      },
      {
        type: "p",
        content:
          "Todos los planes, también el gratis, incluyen: Mapi (el asistente de WhatsApp con IA), Wompi y Mercado Pago integrados, la integración de facturación electrónica DIAN sin costo (pagas solo el paquete según el volumen de facturas), entrenadores y staff ilimitados, la página pública de la escuela y soporte en español por WhatsApp.",
      },
      { type: "h2", content: "Función por función" },
      {
        type: "table",
        headers: ["Función", "Driblin (según su sitio)", "SportMaps"],
        rows: [
          ["Precio público", "No publica precios", "Sí, en pesos, desde $0"],
          ["Opción gratis", "«Organiza tu club gratis», sin detalle de qué incluye", "Plan gratis permanente hasta 20 alumnos"],
          ["Cobro de mensualidades", "No lo menciona", "Wompi y Mercado Pago, efectivo y transferencia"],
          ["Comprobantes de transferencia", "No lo menciona", "Mapi los lee y los deja listos para aprobar"],
          ["Recordatorios de cobro", "No lo menciona", "Por WhatsApp y correo, con enlace de pago"],
          ["Facturación electrónica DIAN", "No la menciona", "Integración sin costo; pagas el paquete de facturas"],
          ["Scouting", "Gestor de Scout", "No disponible"],
          ["Rifas y quinielas", "Sí, en el Gestor de Autogestión", "No disponible"],
          ["Tienda en línea del club", "Sí", "Tiendas deportivas con catálogo, inventario y ventas en línea"],
          ["Patrocinio", "Gestor de Patrocinio", "Conexión con marcas y patrocinios"],
          ["Torneos", "Crear torneos, inscribir equipos, resultados y estadísticas", "En piloto: inscripción de equipos, delegaciones y cobro"],
          ["Asistencia", "No la menciona", "App para entrenadores con check-in por QR"],
          ["Portal para padres", "No lo menciona", "Sí, con seguimiento del hijo e informe mensual"],
          ["Deportes", "Fútbol", "Fútbol, voleibol, gimnasia, natación, tenis, artes marciales y otros"],
          ["Países", "Venezuela y Colombia", "Solo Colombia"],
        ],
      },
      { type: "h2", content: "Cuándo elegir Driblin" },
      {
        type: "ul",
        items: [
          "Quieres que tus jugadores tengan vitrina. El Gestor de Scout busca exponerlos a nivel nacional e internacional, y SportMaps no tiene nada equivalente.",
          "Las mensualidades no alcanzan y necesitas otras fuentes de ingreso: rifas, quinielas, eventos digitales, referidos. Driblin las trae como parte del producto; SportMaps no tiene rifas ni quinielas.",
          "Organizas torneos de fútbol y quieres crear la competición, inscribir equipos y publicar resultados y estadísticas ya, no en un piloto.",
          "Buscas ayuda para conseguir patrocinio público o privado y quieres una herramienta que te ordene esa gestión.",
          "Tu club es solo de fútbol y prefieres una plataforma pensada para ese deporte.",
          "Quieres empezar sin pagar: su sitio invita a organizar el club gratis. Confirma con ellos qué incluye esa opción y qué se cobra después.",
        ],
      },
      { type: "h2", content: "Cuándo elegir SportMaps" },
      {
        type: "ul",
        items: [
          "Tu ingreso principal son las mensualidades y hoy las persigues por WhatsApp y Excel. SportMaps integra Wompi y Mercado Pago en todos los planes y la plata llega directo a la cuenta de la escuela.",
          "Recibes muchas transferencias: Mapi lee cada comprobante que manda la familia y lo deja listo para aprobar.",
          "Tienes que facturar electrónicamente ante la DIAN y no quieres contratar otro sistema ni digitar dos veces.",
          "Quieres saber cuánto vas a pagar antes de hablar con alguien: los seis planes están publicados en pesos.",
          "Tu escuela tiene otros deportes además del fútbol, o piensas abrirlos.",
          "Quieres que las familias vean en un solo lugar los pagos, el carnet digital y el informe mensual de su hijo, y que los entrenadores tomen asistencia desde el celular.",
        ],
      },
      { type: "h2", content: "No son sustitutos: puedes necesitar los dos" },
      {
        type: "p",
        content:
          "La mayoría de las comparativas terminan con un ganador. Esta no, porque los dos productos atacan problemas distintos. El de SportMaps es la administración recurrente: cada mes hay que cobrarles a todas las familias, saber quién pagó, tomar lista y entregar cuentas. El de Driblin es el crecimiento deportivo y comercial del club: competir, mostrarse y encontrar plata por fuera de la cuota.",
      },
      {
        type: "table",
        headers: ["Si tu problema es…", "Mira primero"],
        rows: [
          ["«No sé quién me debe y pierdo horas revisando comprobantes»", "SportMaps"],
          ["«Me exigen factura electrónica»", "SportMaps"],
          ["«Los papás no saben cómo va su hijo ni cuándo vence el pago»", "SportMaps"],
          ["«Quiero que un ojeador vea a mis jugadores»", "Driblin"],
          ["«Necesito hacer una rifa o una quiniela para financiar un viaje»", "Driblin"],
          ["«Quiero montar un torneo de fútbol con resultados y estadísticas»", "Driblin; en SportMaps los torneos están en piloto"],
        ],
      },
      {
        type: "p",
        content:
          "Si usas los dos, define cuál es la fuente oficial de la lista de jugadores y de los pagos. Lo razonable es que la plata y los datos de las familias vivan en el sistema que cobra y factura, y que la otra herramienta se alimente de ahí.",
      },
      { type: "h2", content: "Qué preguntarle a Driblin antes de decidir" },
      {
        type: "ol",
        items: [
          "¿Qué incluye la opción gratis y cuánto cuestan los módulos de pago? Pide la cifra por escrito y en pesos colombianos.",
          "¿Cómo registro y cobro las mensualidades? ¿Las familias pueden pagar por PSE o Nequi?",
          "En las rifas y la tienda, ¿quién recibe la plata, en qué plazo y con qué comisión?",
          "¿Cómo funciona el scouting en la práctica: quién ve los perfiles y qué autorización firman los acudientes de los menores?",
          "¿El soporte atiende desde Colombia y en qué horario?",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Datos de Driblin tomados de su sitio público, consultado en noviembre de 2026. Las funciones y condiciones de terceros cambian: confírmalas con ellos antes de contratar. Si vas a hacer rifas o quinielas, revisa antes las reglas que aplican en tu municipio y departamento.",
      },
      { type: "h2", content: "Preguntas frecuentes" },
      ...faqBlocks(faqsDriblin),
      {
        type: "cta",
        title: "Comparación lado a lado: SportMaps vs Driblin",
        description:
          "La tabla completa, dónde gana cada uno y las preguntas más comunes, en una sola página.",
        href: "/comparar/driblin",
        label: "Ver la comparación",
      },
    ],
    related: [
      "mejor-software-gestion-deportiva-colombia-2026",
      "sportmaps-vs-golapp",
      "sportmaps-vs-deporteapp",
    ],
    about: [
      "software para clubes de fútbol en Colombia",
      "comparativa SportMaps vs Driblin",
      "scouting y monetización de clubes de fútbol formativo",
    ],
    mentions: ["SportMaps", "Driblin", "Wompi", "Mercado Pago", "PSE", "Nequi", "WhatsApp", "DIAN"],
    faqs: faqsDriblin,
  },

  // ── Guía de migración ──────────────────────────────────────────────────────
  {
    slug: "como-cambiar-de-software-en-una-escuela-deportiva-sin-perder-datos",
    title: "Cómo cambiar de software en una escuela deportiva sin perder datos: guía paso a paso",
    excerpt:
      "Qué exportar (alumnos, acudientes, saldos e historial de pagos), en qué momento del mes hacer el corte, cómo avisarles a las familias, cuánto dura el periodo en paralelo y una lista de chequeo para no dejar nada por fuera.",
    category: "Comparativas",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para cambiar de software en una escuela deportiva sin perder datos necesitas cuatro cosas: exportar a Excel todo lo que tienes en el sistema actual antes de cancelarlo (alumnos, acudientes, saldos e historial de pagos), fijar una fecha de corte justo después del cierre del mes, avisarles a las familias con una o dos semanas de anticipación y trabajar un ciclo de cobro en paralelo antes de apagar lo anterior. Esta guía sirve sin importar de qué sistema vengas ni a cuál vayas, también si vienes de Excel y WhatsApp.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "La regla que evita casi todos los problemas: no canceles el sistema anterior hasta que hayas cerrado un mes completo en el nuevo y las cifras cuadren. Un mes de dos suscripciones cuesta menos que reconstruir a mano los saldos de tus familias.",
      },
      { type: "h2", content: "Qué exportar antes de tocar nada" },
      {
        type: "p",
        content:
          "Exporta todo a hojas de cálculo (Excel o CSV) y guarda una copia que nadie vaya a modificar. Si tu sistema actual no deja exportar algún dato, pídeselo a su soporte por escrito: son los datos de tu escuela. Y si llevas la información en Excel, igual haz una copia con fecha antes de empezar a limpiarla.",
      },
      {
        type: "table",
        headers: ["Qué exportar", "Campos mínimos", "Por qué importa"],
        rows: [
          ["Alumnos", "Nombre completo, documento, fecha de nacimiento, grupo o categoría, sede, estado (activo o retirado), fecha de ingreso", "Es la base de todo; la fecha de nacimiento define la categoría"],
          ["Acudientes", "Nombre, documento, celular, correo y a qué alumno o alumnos está vinculado", "Es a quien le cobras y le escribes; los hermanos comparten acudiente"],
          ["Plan y tarifa de cada alumno", "Valor de la mensualidad, descuentos o becas, día de vencimiento", "Sin esto, el primer cobro en el sistema nuevo sale mal"],
          ["Saldos a la fecha de corte", "Cuánto debe o cuánto tiene a favor cada alumno, y de qué mes", "Es el dato más delicado: un saldo mal pasado es una discusión con una familia"],
          ["Historial de pagos", "Fecha, valor, concepto, mes que cubre, medio de pago y referencia", "Para responder reclamos y para tu contabilidad"],
          ["Facturas emitidas", "Número, fecha, cliente y valor; los PDF si los tienes", "Debes conservarlas aunque cambies de sistema"],
          ["Asistencia", "Por alumno y fecha, al menos del último periodo", "Útil si cobras por clases o entregas informes"],
          ["Fichas médicas y documentos", "Alergias, EPS, contacto de emergencia, autorizaciones firmadas", "Son datos sensibles de menores; trátalos con cuidado"],
          ["Grupos, horarios y entrenadores", "Nombre del grupo, días, hora, sede, entrenador a cargo", "Para armar la estructura antes de cargar alumnos"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Vas a mover datos personales de menores de edad y de sus acudientes. Comparte los archivos solo con quien los necesita, no los mandes por grupos de WhatsApp y bórralos de los computadores personales cuando termines. Si tienes dudas sobre tus obligaciones de protección de datos, consúltalo con tu asesor legal.",
      },
      { type: "h2", content: "Limpia los datos antes de pasarlos" },
      {
        type: "p",
        content:
          "Un cambio de sistema es la mejor ocasión para ordenar. Si pasas los datos como están, te llevas el desorden al sistema nuevo.",
      },
      {
        type: "ul",
        items: [
          "Marca a los retirados. Separa a los alumnos activos de los que ya no vienen; muchos planes de software se cobran por alumnos activos.",
          "Une los duplicados. El mismo niño escrito de dos formas, o el mismo acudiente con dos celulares.",
          "Completa los contactos. Un acudiente sin celular ni correo no va a recibir ningún aviso.",
          "Unifica los nombres de grupos y categorías: «Sub 10», «sub-10» y «Categoría 2016» deberían ser uno solo.",
          "Revisa las tarifas especiales: becas, acuerdos de pago y descuentos que solo están en la memoria de alguien.",
        ],
      },
      { type: "h2", content: "En qué momento del mes hacer el cambio" },
      {
        type: "p",
        content:
          "El mejor momento es justo después del cierre del mes: cuando ya entró la mayoría de los pagos y todavía no has generado los cobros del siguiente. Así los saldos están quietos y el primer cobro que reciben las familias ya sale del sistema nuevo.",
      },
      {
        type: "table",
        headers: ["Momento", "Qué pasa si cambias ahí", "Recomendación"],
        rows: [
          ["Después del cierre, antes de generar los cobros nuevos", "Saldos estables y un solo canal de cobro para el mes que empieza", "El momento ideal"],
          ["Mitad de mes, en plena cobranza", "Pagos que entran por el sistema viejo mientras cargas el nuevo; saldos que cambian cada día", "Evítalo"],
          ["Temporada de inscripciones o inicio de semestre", "Mucho alumno nuevo y poco tiempo del equipo", "Cambia antes de la temporada, no durante"],
          ["Vacaciones o temporada baja", "Menos movimiento y más tiempo para revisar", "Buen momento si coincide con un cierre de mes"],
        ],
      },
      {
        type: "p",
        content:
          "Ponle fecha y hora al corte y escríbelo: «los saldos se toman al 30 de noviembre a las 6:00 p. m.». Todo pago que entre después de esa hora se registra en el sistema nuevo.",
      },
      { type: "h2", content: "El periodo en paralelo" },
      {
        type: "p",
        content:
          "Trabajar en paralelo es mantener el sistema anterior encendido, solo para consulta, mientras operas en el nuevo. Lo recomendable es un ciclo de cobro completo: cuatro a seis semanas. Hay dos formas de hacerlo.",
      },
      {
        type: "ul",
        items: [
          "Por grupos: empiezas con una categoría o una sede, corriges lo que salga y luego pasas el resto. Conviene en escuelas grandes o con varias sedes.",
          "Todo de una vez: pasas a todos en el corte y dejas el sistema anterior solo para consultar el historial. Conviene en escuelas pequeñas, donde llevar dos sistemas al tiempo confunde más de lo que ayuda.",
        ],
      },
      {
        type: "p",
        content:
          "En cualquiera de los dos casos, durante el paralelo cobra por un solo sitio. Lo que se compara al final del mes es sencillo: número de alumnos activos, total cobrado, total recaudado y lista de quienes deben. Si las cuatro cifras cuadran con lo que esperabas, ya puedes apagar lo anterior.",
      },
      { type: "h2", content: "Cómo avisarles a las familias" },
      {
        type: "p",
        content:
          "Las familias no necesitan saber qué software usas, sino qué cambia para ellas: por dónde pagan, por dónde les llegan los avisos y a quién le escriben si algo no cuadra. Tres mensajes bastan.",
      },
      {
        type: "ol",
        items: [
          "Una o dos semanas antes: cuentas que desde tal fecha los cobros y recibos llegan por un canal nuevo y por qué les conviene (pagar en línea, ver su estado de cuenta, recibir recordatorios).",
          "El día del cambio: mandas el enlace o las instrucciones para pagar y les pides revisar que su celular y correo estén bien.",
          "Una semana después: recuerdas el canal nuevo a quienes siguen pagando por el anterior y resuelves dudas una por una.",
        ],
      },
      {
        type: "quote",
        content:
          "Hola, familia. Desde el 1 de diciembre los cobros de la mensualidad y los recibos te van a llegar por nuestro nuevo sistema. Tu saldo y tus pagos anteriores ya están cargados. Solo te pedimos revisar que tu celular y tu correo estén actualizados. Si ves algo que no cuadra, escríbenos a este mismo número y lo corregimos.",
        author: "Ejemplo de mensaje de aviso",
      },
      {
        type: "p",
        content:
          "Si cambian la cuenta bancaria o los datos de pago, dilo de forma explícita y desde los canales oficiales de la escuela: las familias desconfían, con razón, de un mensaje que pide consignar a una cuenta distinta.",
      },
      { type: "h2", content: "Lista de chequeo" },
      {
        type: "ol",
        items: [
          "Definiste la fecha y la hora de corte, justo después de un cierre de mes.",
          "Exportaste alumnos, acudientes, tarifas, saldos, historial de pagos, facturas y asistencia.",
          "Guardaste una copia intacta de cada archivo, con fecha.",
          "Marcaste retirados, uniste duplicados y completaste celulares y correos.",
          "Creaste en el sistema nuevo las sedes, los grupos, los horarios y los entrenadores.",
          "Cargaste alumnos y acudientes, y revisaste que los hermanos quedaran con el mismo acudiente.",
          "Cargaste el saldo de cada alumno a la fecha de corte y revisaste una muestra de 10 a 20 familias contra el sistema anterior.",
          "Configuraste los medios de pago e hiciste un pago de prueba con tu propio celular.",
          "Si facturas electrónicamente, confirmaste con tu contador la numeración y desde qué fecha se factura en el sistema nuevo.",
          "Capacitaste a quien cobra y a los entrenadores que toman asistencia.",
          "Enviaste el primer aviso a las familias.",
          "Cerraste un mes completo en el sistema nuevo y las cifras cuadraron.",
          "Descargaste el historial completo del sistema anterior en Excel y PDF.",
          "Solo entonces cancelaste la suscripción anterior.",
        ],
      },
      { type: "h2", content: "Errores comunes" },
      {
        type: "ul",
        items: [
          "Cancelar el sistema anterior el mismo día del cambio y perder el acceso al historial.",
          "Pasar los saldos «de memoria» o desde una versión vieja del Excel.",
          "Dejar que las familias sigan pagando por los dos canales durante semanas.",
          "Cambiar en mitad de la cobranza del mes.",
          "No hacer un pago de prueba antes de mandar el enlace a todas las familias.",
          "Que una sola persona sepa cómo funciona el sistema nuevo.",
        ],
      },
      { type: "h2", content: "Cómo acompaña SportMaps el cambio" },
      {
        type: "p",
        content:
          "Si el sistema al que vas es SportMaps, el equipo te acompaña sin costo a pasar los datos desde Excel, en todos los planes. El camino es el de esta guía: exportas tu información a hojas de cálculo, te ayudamos a organizarla y cargarla, y tú revisas y apruebas antes del corte. No prometemos importadores automáticos desde plataformas específicas: el punto de partida siempre es un Excel bien armado. Como referencia, el cambio completo toma menos de 30 días para una academia de hasta 500 alumnos, y el soporte es por WhatsApp, en español.",
      },
      {
        type: "p",
        content:
          "Si quieres probar antes de mover a todos, el plan Free Start es gratis hasta 20 alumnos: sirve para montar un grupo real, generar sus cobros y ver cómo se cierra un mes.",
      },
      { type: "h2", content: "Preguntas frecuentes" },
      ...faqBlocks(faqsMigracion),
      {
        type: "cta",
        title: "Pasa tu escuela a SportMaps con acompañamiento",
        description:
          "Te ayudamos sin costo a pasar tus datos desde Excel. Plan gratis hasta 20 alumnos y precios públicos en pesos.",
        href: "/planes",
        label: "Ver planes y precios",
      },
    ],
    related: [
      "excel-vs-software-escuela-deportiva",
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "mejor-software-gestion-deportiva-colombia-2026",
    ],
    about: [
      "migración de software en escuelas deportivas",
      "exportar datos de alumnos y pagos",
      "cambio de sistema de gestión deportiva",
    ],
    mentions: ["SportMaps", "Excel", "WhatsApp", "DIAN"],
    faqs: faqsMigracion,
  },
];
