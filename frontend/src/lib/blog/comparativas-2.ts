import type { BlogPost } from "../blog-posts";

/**
 * Cluster «comparativas-2» (fondo de embudo, segunda tanda).
 *
 * Regla de verdad: de los competidores solo se cita lo que ellos publican,
 * con la fuente y la fecha de consulta (14 oct 2026). Si un precio no se pudo
 * confirmar, se dice así y no se pone cifra. Precios de SportMaps = brief
 * 2026-10-14 con las correcciones de verdad del censo del repo.
 */
export const comparativas2Posts: BlogPost[] = [
  // ── SportMaps vs GOLAPP ────────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-golapp",
    title: "SportMaps vs GOLAPP (2026): precios en pesos por tamaño de escuela y qué incluye cada uno",
    excerpt:
      "GOLAPP y SportMaps son dos softwares colombianos para escuelas deportivas con precios públicos en pesos. Comparamos tramo por tramo, con la tabla de GOLAPP consultada el 14 de octubre de 2026, y decimos en qué tamaños GOLAPP sale más barato.",
    category: "Comparativas",
    readTime: "8 min",
    date: "11 Oct 2026",
    isoDate: "2026-10-11",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "SportMaps y GOLAPP sirven para administrar una escuela deportiva en Colombia, pero cobran distinto y cubren cosas distintas. Con precios consultados el 14 de octubre de 2026: GOLAPP arranca en $150.000 al mes para hasta 200 deportistas y sube a $220.000 (400) y $320.000 (700 o más). SportMaps tiene un plan gratis hasta 20 alumnos y planes desde $69.000 (50 alumnos) hasta $349.000 (800), y en todos incluye WhatsApp con IA, Wompi y Mercado Pago y la integración de facturación electrónica. Para escuelas de hasta 300 alumnos SportMaps cuesta igual o menos; entre 301 y 400 alumnos, GOLAPP es más barato.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tu escuela tiene menos de 200 alumnos, SportMaps te sale más barato y trae cobro en línea y WhatsApp con IA. Si tienes entre 301 y 400 alumnos y solo necesitas inscripciones, asistencia y registro de pagos, el plan Estándar de GOLAPP ($220.000) cuesta menos que el plan de SportMaps que cubre ese tamaño ($349.000).",
      },
      { type: "h2", content: "Qué publica GOLAPP en su página" },
      {
        type: "p",
        content:
          "GOLAPP dice en su sitio que nació en Medellín en 2018. Está enfocado en escuelas de fútbol base y publica tres planes con descuento por pago semestral y anual. El límite de cada plan está en la fila «Cantidad de deportistas / inscripciones por año», así que vale la pena preguntarles cómo cuentan a un alumno que se retira y otro que entra en su lugar.",
      },
      {
        type: "table",
        headers: ["Plan GOLAPP", "Mensual", "Semestral", "Anual", "Deportistas / inscripciones por año"],
        rows: [
          ["Básico", "$150.000", "$810.000", "$1.440.000 (≈ $120.000/mes)", "200"],
          ["Estándar", "$220.000", "$1.188.000", "$2.112.000 (≈ $176.000/mes)", "400"],
          ["Premium", "$320.000", "$1.728.000", "$3.072.000 (≈ $256.000/mes)", "700+"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: precios públicos de golapp.com.co, consultados el 14 oct 2026. Según la misma página, el plan Básico incluye gestión de deportistas, inscripciones, grupos de entrenamiento, control de asistencia, registro básico de pagos y portal de acudientes limitado. Estándar suma reportes administrativos, gestión avanzada de pagos, control por grupos y categorías, portal para acudientes y deportistas y notificaciones básicas. Premium suma evaluaciones deportivas, reportes avanzados y varios roles administrativos. El control de competencias aparece como módulo general y los avisos de mensualidad atrasada se envían por correo electrónico. La página no menciona pasarela de pagos en línea ni facturación electrónica.",
      },
      { type: "h2", content: "Precios de SportMaps (14 de octubre de 2026)" },
      {
        type: "table",
        headers: ["Plan SportMaps", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: [
          ["Free Start", "$0", "—", "Hasta 20"],
          ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
          ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
          ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
          ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
          ["Custom", "Desde $750.000", "—", "Ilimitados"],
        ],
      },
      {
        type: "p",
        content:
          "En todos los planes, incluido el gratis, vienen: el asistente de WhatsApp con IA (lee el comprobante que manda la familia, lo cruza con el cobro y lo deja listo para que la escuela lo apruebe con un toque), Wompi y Mercado Pago integrados (PSE, Nequi, tarjetas, botón Bancolombia), la integración de facturación electrónica DIAN sin costo (pagas solo el paquete de facturas que uses), entrenadores y staff ilimitados y la página pública de la escuela con botón de inscripción.",
      },
      { type: "h2", content: "Tramo por tramo: quién cuesta menos" },
      {
        type: "table",
        headers: ["Tamaño de tu escuela", "GOLAPP (mensual)", "SportMaps (mensual)", "Más barato"],
        rows: [
          ["Hasta 20 alumnos", "$150.000 (Básico)", "$0 (Free Start)", "SportMaps"],
          ["21 a 50 alumnos", "$150.000 (Básico)", "$69.000 (Start)", "SportMaps"],
          ["51 a 120 alumnos", "$150.000 (Básico)", "$99.000 (Crecimiento)", "SportMaps"],
          ["121 a 200 alumnos", "$150.000 (Básico)", "$159.000 (Pro)", "GOLAPP, por $9.000"],
          ["201 a 300 alumnos", "$220.000 (Estándar)", "$159.000 (Pro)", "SportMaps"],
          ["301 a 400 alumnos", "$220.000 (Estándar)", "$349.000 (Elite)", "GOLAPP"],
          ["401 a 700 alumnos", "$320.000 (Premium)", "$349.000 (Elite)", "GOLAPP, por $29.000"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Comparación de precio de lista mensual. Con pago anual, GOLAPP Básico queda en ≈ $120.000 al mes y SportMaps Pro en $139.000. El precio de lista no incluye las comisiones de la pasarela, el paquete de facturas electrónicas ni la herramienta que uses para cobrar si el software no la trae.",
      },
      { type: "h2", content: "Lo que cambia más allá del precio" },
      {
        type: "table",
        headers: ["Tema", "GOLAPP (según su página)", "SportMaps"],
        rows: [
          ["Cobro en línea (PSE, Nequi, tarjeta)", "No lo menciona; registra pagos", "Wompi y Mercado Pago en todos los planes"],
          ["Recordatorios de cobro", "Por correo electrónico", "Por WhatsApp y correo, con enlace de pago sin iniciar sesión"],
          ["Lectura de comprobantes de transferencia", "No lo menciona", "IA que lee monto y referencia y lo deja listo para aprobar"],
          ["Facturación electrónica DIAN", "No la menciona", "Integración sin costo; pagas el paquete de facturas"],
          ["Portal para acudientes", "Sí (limitado en Básico)", "Sí, con app instalable en el celular y avisos push"],
          ["Evaluaciones deportivas", "Solo completas en Premium", "Evaluaciones físicas y métricas para entrenadores"],
          ["Competencias", "Módulo de control de competencias", "Partidos; torneos como adicional ($49.000, incluido en Elite)"],
          ["Herramientas del entrenador", "No las detalla", "Pizarra táctica de fútbol y planificación por mesociclos"],
          ["Plan gratis", "No", "Free Start hasta 20 alumnos"],
        ],
      },
      { type: "h2", content: "Dónde gana GOLAPP" },
      {
        type: "ul",
        items: [
          "Precio en escuelas medianas y grandes: entre 301 y 400 alumnos su plan Estándar ($220.000) cuesta bastante menos que el plan de SportMaps que cubre ese tamaño (Elite, $349.000). Entre 401 y 700 también es un poco más barato.",
          "Foco en fútbol base desde 2018: si tu escuela es solo de fútbol y quieres una herramienta construida alrededor de ese deporte, GOLAPP lleva años en eso.",
          "Simplicidad: tres planes, sin adicionales que sumar. Lo que ves en la tabla es lo que pagas por el software.",
          "Competencias como módulo en todos sus planes. En SportMaps los torneos son un adicional, salvo en Elite.",
          "Clientes visibles en su propio sitio, algo que siempre ayuda a pedir referencias antes de contratar.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Escuelas pequeñas: gratis hasta 20 alumnos y $69.000 hasta 50. Para una escuela que arranca, la diferencia frente a $150.000 es grande.",
          "Cobrar, no solo registrar: las familias pagan por PSE, Nequi o tarjeta desde un enlace, y la plata llega directo a la cuenta de la escuela. SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela.",
          "Comprobantes de transferencia: el asistente de WhatsApp los lee y los cruza con el cobro, y tú solo apruebas. Es la tarea que más horas quita a una escuela que cobra por transferencia.",
          "Recordatorios por WhatsApp, que es donde las familias sí leen: salen 3 días antes, el día del vencimiento y a los 3, 10 y 20 días, con enlace de pago.",
          "Facturación electrónica DIAN con integración sin costo, y el contador con acceso de solo lectura para revisar las facturas.",
          "Para las familias: carnet digital con QR, informe mensual del atleta y avisos del calendario con notificación push.",
        ],
      },
      { type: "h2", content: "Cómo decidir en 5 pasos" },
      {
        type: "ol",
        items: [
          "Cuenta tus alumnos activos hoy y los que esperas en 12 meses. Ubica los dos números en la tabla de tramos.",
          "Pregunta a GOLAPP cómo cuenta las «inscripciones por año»: si un alumno se va y entra otro, ¿suma dos?",
          "Anota cómo te pagan hoy las familias. Si más de la mitad paga por transferencia o Nequi, el costo real está en conciliar comprobantes, no en el plan.",
          "Revisa si estás obligado a facturar electrónicamente. Si lo estás y el software no lo trae, suma el costo del proveedor aparte y el tiempo de digitar dos veces.",
          "Prueba los dos con datos reales de un mes: un grupo, sus cobros y su asistencia. Decide con eso, no con la tabla.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Los precios de terceros cambian. Antes de firmar, pide a cada proveedor una cotización escrita para tu número real de alumnos, con todo lo que vas a necesitar encendido.",
      },
      {
        type: "cta",
        title: "Mira los planes de SportMaps",
        description:
          "Precios públicos en pesos, plan gratis hasta 20 alumnos y WhatsApp con IA incluido en todos los planes.",
        href: "/planes",
        label: "Ver planes y precios",
      },
    ],
    related: [
      "software-escuelas-de-futbol-colombia",
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "mejor-software-gestion-deportiva-colombia-2026",
    ],
    about: [
      "software para escuelas de fútbol en Colombia",
      "comparativa SportMaps vs GOLAPP",
      "precios de software deportivo en pesos colombianos",
    ],
    mentions: ["SportMaps", "GOLAPP", "Wompi", "Mercado Pago", "WhatsApp", "DIAN", "Nequi", "PSE"],
    faqs: [
      {
        question: "¿Cuánto cuesta GOLAPP en 2026?",
        answer:
          "Según su página, consultada el 14 de octubre de 2026: Básico $150.000 al mes (200 deportistas o inscripciones por año), Estándar $220.000 (400) y Premium $320.000 (700 o más). Con pago anual baja a ≈ $120.000, $176.000 y $256.000 al mes.",
      },
      {
        question: "¿Qué es más barato para una escuela de fútbol de 100 niños, GOLAPP o SportMaps?",
        answer:
          "SportMaps. Para hasta 120 alumnos el plan Escuela Crecimiento cuesta $99.000 al mes, y el plan más pequeño de GOLAPP cuesta $150.000. Además, SportMaps incluye cobro en línea con Wompi y Mercado Pago y WhatsApp con IA en ese plan.",
      },
      {
        question: "¿GOLAPP cobra en línea por PSE o Nequi?",
        answer:
          "Su página, consultada el 14 de octubre de 2026, habla de registro y gestión de pagos, pero no menciona una pasarela de pagos en línea. Pregúntales directamente si las familias pueden pagar por PSE, Nequi o tarjeta desde la plataforma.",
      },
      {
        question: "¿GOLAPP manda recordatorios de pago por WhatsApp?",
        answer:
          "Según su sitio, los avisos de mensualidad atrasada se envían por correo electrónico. SportMaps los envía por WhatsApp y por correo, con un enlace para pagar sin iniciar sesión.",
      },
      {
        question: "¿Cuándo conviene más GOLAPP que SportMaps?",
        answer:
          "Cuando tu escuela tiene entre 301 y 400 alumnos y solo necesitas inscripciones, asistencia y registro de pagos: su plan Estándar cuesta $220.000 y el plan de SportMaps para ese tamaño, $349.000. También si quieres una herramienta simple, solo de fútbol, sin adicionales.",
      },
    ],
  },

  // ── SportMaps vs QueFluya ──────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-quefluya",
    title: "SportMaps vs QueFluya: qué conviene a tu academia y qué preguntar antes de elegir",
    excerpt:
      "QueFluya es una herramienta de gestión para academias de varias disciplinas; SportMaps es un software hecho para escuelas deportivas. Comparamos el enfoque de cada uno, lo que pudimos verificar y lo que no, y te dejamos las preguntas para pedir una cotización comparable.",
    category: "Comparativas",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Si tu academia es solo deportiva, con niños, acudientes, categorías por edad y mensualidades, SportMaps está construido para ese caso y publica sus precios: gratis hasta 20 alumnos y desde $69.000 al mes hasta 50, con WhatsApp con IA, Wompi, Mercado Pago y la integración de facturación electrónica en todos los planes. QueFluya es una herramienta de gestión pensada para academias de varias disciplinas (baile, música y deporte), simple de usar. El 14 de octubre de 2026 su sitio no cargó, así que no pudimos confirmar sus precios vigentes: pídeles la cotización por escrito antes de comparar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si manejas una academia que mezcla baile, música y deporte y solo necesitas cobrar, marcar asistencia y llevar caja, una herramienta multidisciplina como QueFluya puede bastar. Si tu negocio es una escuela deportiva formativa y quieres cobro en línea, lectura de comprobantes y facturación electrónica en el mismo lugar, SportMaps está hecho para eso.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Transparencia sobre las fuentes: en agosto de 2026 revisamos el sitio público de QueFluya. El 14 de octubre de 2026 intentamos verificarlo de nuevo y el sitio no respondió (error de conexión segura). Por eso este artículo no publica cifras de QueFluya: un precio que no pudimos confirmar hoy no debería decidir tu compra.",
      },
      { type: "h2", content: "Dos enfoques distintos" },
      {
        type: "p",
        content:
          "La pregunta de fondo no es cuál software es mejor, sino si tu academia se parece más a un centro de clases de varias disciplinas o a una escuela deportiva formativa. Cambia lo que necesitas del software.",
      },
      {
        type: "table",
        headers: ["Necesidad", "Academia multidisciplina (baile, música, idiomas, deporte)", "Escuela deportiva formativa"],
        rows: [
          ["Quién paga", "El alumno o su familia, por clase o por paquete", "El acudiente, inscripción una vez y luego mensualidad"],
          ["Cómo se agrupan los alumnos", "Por curso o nivel", "Por categoría de edad y equipo"],
          ["Qué pide la familia", "Horario y recibo", "Recibo, paz y salvo, carnet, calendario de partidos, informe del niño"],
          ["Qué pide el entrenador", "Lista de clase", "Asistencia, planificación, evaluaciones, alineaciones"],
          ["Riesgo principal", "Cupos vacíos", "Mora y conciliación de transferencias"],
        ],
      },
      {
        type: "p",
        content:
          "Una herramienta multidisciplina resuelve bien la primera columna. Si tu realidad es la segunda, revisa con lupa si el software maneja acudientes vinculados a cada atleta, categorías por año de nacimiento y la diferencia entre inscripción y mensualidad.",
      },
      { type: "h2", content: "Qué incluye SportMaps (precios del 14 de octubre de 2026)" },
      {
        type: "table",
        headers: ["Plan", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: [
          ["Free Start", "$0", "—", "Hasta 20"],
          ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
          ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
          ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
          ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
        ],
      },
      {
        type: "ul",
        items: [
          "Cobros: inscripción (una sola vez) más mensualidad, cobros automáticos por periodo, recargo por mora opcional que define la escuela y descuento por hermanos. La mora no cancela automáticamente al atleta.",
          "WhatsApp con IA gratis: lee el comprobante de transferencia, lo cruza con el cobro y lo deja listo para aprobar con un toque. También responde a prospectos que preguntan precios y les agenda la clase de cortesía. La escuela conecta su propio número con Meta.",
          "Wompi y Mercado Pago: PSE, Nequi, tarjetas y botón Bancolombia. La plata va directo a la cuenta de la escuela, sin comisión de SportMaps.",
          "Facturación electrónica DIAN: integración sin costo; pagas solo el paquete de facturas. El contador entra con acceso de solo lectura.",
          "Para las familias: carnet digital con QR, avisos del calendario, informe mensual del atleta y app instalable en el celular.",
          "Para el entrenador: asistencia por QR, pizarra táctica (hoy para fútbol), planificación por mesociclos y evaluaciones físicas.",
        ],
      },
      { type: "h2", content: "Dónde gana QueFluya" },
      {
        type: "ul",
        items: [
          "Academias mixtas: si en la misma sede tienes baile, música y fútbol, una herramienta pensada para varias disciplinas te evita forzar las clases de música en un molde de categorías deportivas.",
          "Simplicidad: según su información pública, hace pocas cosas y las hace fáciles. Si tu equipo no quiere aprender un sistema con muchos módulos, eso pesa.",
          "Menos módulos que configurar: si nunca vas a facturar electrónicamente, ni a usar pizarra táctica, ni carnets, esas funciones de SportMaps no te suman nada.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Construido para la escuela deportiva: acudientes vinculados, categorías por edad, equipos, multi-sede y la regla de inscripción una vez y mensualidad después.",
          "Precios publicados en pesos y un plan gratis permanente hasta 20 alumnos, sin tarjeta.",
          "La conciliación resuelta: el asistente de WhatsApp lee los comprobantes y los cruza con el cobro. Es lo que más tiempo quita en una escuela que cobra por transferencia.",
          "Facturación electrónica DIAN integrada, sin contratar otro proveedor y digitar dos veces.",
          "Herramientas deportivas que una herramienta multidisciplina no suele traer: pizarra táctica de fútbol, mesociclos, evaluaciones, partidos y control de acceso con torniquetes ZKTeco como adicional.",
        ],
      },
      { type: "h2", content: "Las 8 preguntas para pedir una cotización comparable" },
      {
        type: "ol",
        items: [
          "¿Cuánto cuesta al mes para mi número de alumnos activos, y cómo cuentan un alumno inactivo?",
          "¿El precio cambia según el número de administradores o entrenadores? En SportMaps el staff es ilimitado.",
          "¿Las familias pueden pagar en línea por PSE y Nequi? ¿Con qué pasarela y quién cobra la comisión?",
          "¿Qué pasa con las transferencias? ¿Alguien tiene que revisar cada comprobante a mano?",
          "¿Los recordatorios salen por WhatsApp o solo por correo? ¿Tienen costo por mensaje?",
          "¿Incluye facturación electrónica DIAN o hay que contratarla aparte?",
          "¿Puedo vincular a cada niño con su acudiente y manejar hermanos con descuento?",
          "¿Cómo exporto mis datos si me voy? Pide el formato antes de firmar.",
        ],
      },
      {
        type: "p",
        content:
          "Con esas respuestas por escrito puedes poner a QueFluya, SportMaps y cualquier otro proveedor en la misma tabla. Si quieres el detalle de los costos que no aparecen en el plan (pasarela, facturas, mensajes), lo explicamos en nuestra guía de cuánto cuesta un software para escuela deportiva.",
      },
      { type: "h2", content: "Dónde se va el tiempo: un ejemplo" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: una academia de 60 alumnos con mensualidad de $120.000, donde 35 familias pagan por transferencia o Nequi y mandan la foto del comprobante por WhatsApp. Si revisar cada comprobante, buscar al alumno y marcar el pago toma 3 minutos, son casi 2 horas al mes solo en eso, sin contar los mensajes a quienes no han pagado ni los comprobantes que llegan borrosos o repetidos.",
      },
      {
        type: "table",
        headers: ["Tarea mensual (ejemplo de 60 alumnos)", "A mano", "Con un software que lee comprobantes"],
        rows: [
          ["Revisar 35 comprobantes de transferencia", "≈ 105 minutos", "Aprobar con un toque los que ya vienen cruzados"],
          ["Recordar a quienes no han pagado", "Mensaje uno por uno", "Recordatorios automáticos con enlace de pago"],
          ["Saber quién está a paz y salvo", "Revisar la hoja de cálculo", "Estado de cuenta por alumno al día"],
          ["Emitir factura electrónica", "Digitar en otro sistema", "Desde el mismo cobro"],
        ],
      },
      {
        type: "p",
        content:
          "Ese es el criterio que más pesa en una escuela que cobra por transferencia, y el que conviene preguntar a cualquier proveedor: ¿quién lee el comprobante? Si la respuesta es «tú», el ahorro del plan barato se va en horas.",
      },
      { type: "h2", content: "Señales de que necesitas un software deportivo y no uno general" },
      {
        type: "ul",
        items: [
          "Tienes hermanos inscritos y das descuento por el segundo hijo.",
          "Cobras inscripción una vez al año y mensualidad todos los meses, y te confundes cuál falta.",
          "Los papás te piden carnet, paz y salvo o el informe de cómo va su hijo.",
          "Tus entrenadores manejan categorías por año de nacimiento y planifican por ciclos.",
          "Tienes más de una sede o piensas abrirla.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No elijas por el precio del plan de entrada. Dos herramientas con la misma cuota mensual pueden costar muy distinto cuando sumas la pasarela, el proveedor de facturación y las horas de conciliar transferencias.",
      },
      {
        type: "cta",
        title: "Compara con los planes de SportMaps",
        description: "Precios públicos, plan gratis hasta 20 alumnos y todo lo de cobros incluido en cada plan.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "inscripcion-vs-mensualidad-escuela-deportiva",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
    ],
    about: [
      "software para academias deportivas en Colombia",
      "comparativa SportMaps vs QueFluya",
      "gestión de cobros de academias",
    ],
    mentions: ["SportMaps", "QueFluya", "Wompi", "Mercado Pago", "WhatsApp", "Meta", "DIAN", "ZKTeco"],
    faqs: [
      {
        question: "¿Cuánto cuesta QueFluya?",
        answer:
          "No pudimos confirmarlo: el 14 de octubre de 2026 su sitio no cargó. Pide la cotización por escrito para tu número de alumnos y pregunta si el precio cambia según la cantidad de administradores.",
      },
      {
        question: "¿Qué diferencia hay entre QueFluya y SportMaps?",
        answer:
          "QueFluya es una herramienta de gestión para academias de varias disciplinas, como baile, música y deporte. SportMaps está hecho para escuelas deportivas formativas: acudientes, categorías por edad, inscripción más mensualidad, WhatsApp con IA que lee comprobantes y facturación electrónica integrada.",
      },
      {
        question: "¿Qué software sirve para una academia de baile y fútbol al mismo tiempo?",
        answer:
          "Si la mayoría de tus alumnos son de disciplinas no deportivas, una herramienta multidisciplina puede encajar mejor. Si el grueso son niños en categorías deportivas con mensualidad, SportMaps maneja las sedes y grupos que necesites, y las clases de baile pueden ir como un grupo más.",
      },
      {
        question: "¿SportMaps incluye la facturación electrónica?",
        answer:
          "Sí. La integración con la DIAN no tiene costo en ningún plan; la escuela paga solo el paquete según la cantidad de facturas que emita. El contador puede entrar a revisar el estado de las facturas.",
      },
    ],
  },

  // ── SportMaps vs Athleos ───────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-athleos",
    title: "SportMaps vs Athleos: comparativa para escuelas deportivas en Colombia (2026)",
    excerpt:
      "Athleos y SportMaps resuelven lo mismo en el núcleo: alumnos, cobros a las familias, pagos en línea y asistencia. Comparamos lo que cada uno publica (consultado el 14 de octubre de 2026), dónde es fuerte Athleos y qué preguntar sobre precio y facturación.",
    category: "Comparativas",
    readTime: "7 min",
    date: "5 Oct 2026",
    isoDate: "2026-10-05",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Athleos y SportMaps son softwares para escuelas deportivas que se parecen en lo esencial: registran alumnos y acudientes, programan cobros, dejan pagar en línea y toman asistencia desde el celular. La diferencia práctica, según lo que cada uno publica el 14 de octubre de 2026: Athleos dice tener más de 500 escuelas activas, cobra según el número de alumnos activos sin mostrar montos y destaca el cumplimiento de la Ley 2300 de 2023 de cobranza; SportMaps publica sus precios (gratis hasta 20 alumnos, $69.000 hasta 50) y suma en todos los planes WhatsApp con IA que lee comprobantes y la integración de facturación electrónica DIAN.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si quieres una herramienta con tracción declarada y un compromiso explícito de cobranza responsable, Athleos es una opción seria: pide la cotización. Si quieres saber el precio antes de hablar con ventas, que el asistente de WhatsApp te deje los comprobantes listos para aprobar y facturar electrónicamente desde el mismo sistema, compara con SportMaps.",
      },
      { type: "h2", content: "Qué publica Athleos" },
      {
        type: "p",
        content:
          "Datos tomados de su sitio (athleos-frontend.vercel.app), consultado el 14 oct 2026. Se presenta como software de gestión integral para escuelas deportivas, clubes y academias.",
      },
      {
        type: "table",
        headers: ["Tema", "Lo que dice Athleos"],
        rows: [
          ["Tracción", "«+500 escuelas activas»"],
          ["Precio", "Mensual según el número de alumnos activos, sin compromiso mínimo; no publica montos"],
          ["Prueba", "14 días gratis sin tarjeta de crédito"],
          ["Alumnos", "Estudiantes y acudientes, categorías e historial en un perfil"],
          ["Cobros", "Planes de pago por frecuencia, facturas en la fecha programada, recordatorios y conciliación"],
          ["Pagos en línea", "Los padres pagan desde el celular con tarjeta, PSE o transferencia"],
          ["Asistencia", "El entrenador la toma desde el celular, con reportes por clase y alumno"],
          ["Comunicación", "Mensajes por correo y WhatsApp a toda la escuela, a una clase o individuales"],
          ["Cobranza responsable", "Dice cumplir la Ley 2300 de 2023: avisos solo en días hábiles y sábados en horario definido, nada en domingos ni festivos, máximo tres contactos de cobro por acudiente a la semana"],
          ["Facturación electrónica DIAN", "No la menciona; habla de «facturas» del cobro"],
        ],
      },
      { type: "h2", content: "Qué publica SportMaps (14 de octubre de 2026)" },
      {
        type: "table",
        headers: ["Plan", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: [
          ["Free Start", "$0", "—", "Hasta 20"],
          ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
          ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
          ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
          ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
          ["Custom", "Desde $750.000", "—", "Ilimitados"],
        ],
      },
      {
        type: "p",
        content:
          "En todos los planes, incluido el gratis: WhatsApp con IA (lee el comprobante, lo cruza con el cobro y lo deja listo para aprobar), Wompi y Mercado Pago (PSE, Nequi, tarjetas, botón Bancolombia) con la plata directo a la escuela, integración de facturación electrónica DIAN sin costo, staff ilimitado con roles (coach, admin, recepción, contador) y página pública de la escuela con botón de inscripción.",
      },
      { type: "h2", content: "Lado a lado" },
      {
        type: "table",
        headers: ["Tema", "Athleos (según su sitio)", "SportMaps"],
        rows: [
          ["Precio público", "No; depende de alumnos activos", "Sí, desde $0"],
          ["Prueba", "14 días sin tarjeta", "Plan gratis permanente hasta 20 alumnos"],
          ["Pago en línea de las familias", "Tarjeta, PSE, transferencia", "PSE, Nequi, tarjeta, botón Bancolombia, billetera Mercado Pago"],
          ["Transferencias", "Conciliación", "IA lee el comprobante y lo deja listo para aprobar"],
          ["Recordatorios", "Antes del vencimiento; WhatsApp y correo para comunicación", "WhatsApp y correo en días -3, 0, +3, +10 y +20, con enlace de pago"],
          ["Facturación electrónica DIAN", "No la menciona", "Integración sin costo"],
          ["Atención a prospectos", "No lo menciona", "El bot responde precios y agenda clase de cortesía"],
          ["Carnet digital con QR", "No lo menciona", "Sí, en lote y en PDF por equipo"],
          ["Control de acceso", "No lo menciona", "Torniquetes ZKTeco con bloqueo por mora (adicional)"],
          ["Herramientas del entrenador", "Asistencia y reportes", "Asistencia, pizarra táctica de fútbol, mesociclos, evaluaciones"],
        ],
      },
      { type: "h2", content: "Dónde gana Athleos" },
      {
        type: "ul",
        items: [
          "Tracción declarada: más de 500 escuelas activas según su sitio. Es una señal de que el producto ya está probado en muchas operaciones reales.",
          "Cobranza responsable explícita: publica sus reglas de contacto (horarios, nada en domingos ni festivos, tope de tres contactos de cobro a la semana) y el derecho del acudiente a pedir que no lo contacten. Es un compromiso claro y verificable.",
          "Precio por alumno activo sin compromiso mínimo: si tu escuela sube y baja mucho de tamaño durante el año, pagar por activos puede acomodarse mejor que un plan por tramo.",
          "Producto enfocado en el núcleo de la escuela, sin módulos que tal vez no vayas a usar.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Sabes el precio antes de hablar con alguien, y si tienes 20 alumnos o menos, no pagas.",
          "El trabajo con las transferencias: el asistente de WhatsApp lee monto y referencia del comprobante y lo cruza con el cobro; la escuela solo aprueba.",
          "Facturación electrónica DIAN dentro del mismo sistema, sin costo de integración y con acceso de solo lectura para el contador.",
          "Más canales de pago: además de PSE y tarjeta, Nequi, botón Bancolombia y billetera de Mercado Pago.",
          "Lo deportivo y lo de las familias: carnets con QR, informe mensual del atleta, avisos del calendario, historia clínica deportiva para fisioterapeutas con consentimiento del acudiente, pizarra táctica de fútbol y planificación por mesociclos.",
        ],
      },
      { type: "h2", content: "Sobre la Ley 2300 de 2023" },
      {
        type: "p",
        content:
          "La Ley 2300 de 2023 regula cómo y cuándo se puede contactar a una persona para cobrarle: limita horarios, días y frecuencia, y le da al deudor el derecho a elegir los canales. Si tu escuela cobra mensualidades, aplica el sentido común de la ley con cualquier software: avisos espaciados, en horario hábil y con un tono amable. En SportMaps los recordatorios automáticos salen en fechas fijas (3 días antes, el día del vencimiento y a los 3, 10 y 20 días), no a diario, y la escuela decide si activa el recargo por mora. Si tienes dudas sobre tu caso, consúltalo con tu abogado.",
      },
      { type: "h2", content: "Precio por alumno activo vs plan por tramo" },
      {
        type: "p",
        content:
          "Athleos cobra según el número de alumnos activos; SportMaps cobra por tramo (hasta 20, 50, 120, 300 u 800 alumnos). Ninguno de los dos modelos es mejor en abstracto: depende de cómo se mueve tu escuela durante el año.",
      },
      {
        type: "table",
        headers: ["Tu situación", "Modelo que suele favorecerte", "Por qué"],
        rows: [
          ["Escuela que sube mucho en temporada y baja en vacaciones", "Por alumno activo", "Pagas menos los meses flojos"],
          ["Escuela estable, cerca del tope de un tramo", "Por tramo", "Sabes cuánto pagas cada mes y puedes pagar anual con descuento"],
          ["Escuela que está creciendo rápido", "Depende del precio por alumno", "Pide la tabla completa y proyecta 12 meses"],
          ["Escuela pequeña (menos de 20 alumnos)", "Por tramo, si hay plan gratis", "En SportMaps ese tramo cuesta $0"],
        ],
      },
      {
        type: "p",
        content:
          "Para comparar de verdad, pide a Athleos el precio por alumno y multiplícalo por tus alumnos activos mes a mes del último año. Pon al lado el plan de SportMaps que cubre tu pico. La diferencia anual es la que importa, no la de un mes.",
      },
      { type: "h2", content: "Cómo comparar con una cotización" },
      {
        type: "ol",
        items: [
          "Pide a Athleos el valor mensual exacto para tu número de alumnos activos y cómo se calcula si el número cambia a mitad de mes.",
          "Pregunta qué pasarela usan, qué tarifa cobra y si la plata llega directo a tu cuenta.",
          "Pregunta si la factura que genera el sistema es factura electrónica validada por la DIAN o un recibo de cobro.",
          "Pon esa cifra al lado del plan de SportMaps de tu tramo y suma, en los dos, la pasarela y el paquete de facturas.",
          "Prueba ambos un mes con un grupo real antes de migrar todo.",
        ],
      },
      {
        type: "cta",
        title: "Calcula cuánto te cuesta cobrar hoy",
        description: "Pon tus alumnos y tu mensualidad y mira el costo total con SportMaps.",
        href: "/calculadora",
        label: "Abrir la calculadora",
      },
    ],
    related: [
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
      "facturacion-electronica-escuelas-deportivas-dian",
      "mejor-software-gestion-deportiva-colombia-2026",
    ],
    about: [
      "software de gestión de escuelas deportivas",
      "comparativa SportMaps vs Athleos",
      "cobranza responsable Ley 2300 de 2023",
    ],
    mentions: ["SportMaps", "Athleos", "Wompi", "Mercado Pago", "WhatsApp", "DIAN", "PSE", "Nequi", "ZKTeco"],
    faqs: [
      {
        question: "¿Cuánto cuesta Athleos?",
        answer:
          "No publica montos. Según su sitio, consultado el 14 de octubre de 2026, el precio mensual depende del número de alumnos activos, sin compromiso mínimo, y ofrece 14 días de prueba sin tarjeta. Pide la cotización para tu número de alumnos.",
      },
      {
        question: "¿Athleos tiene facturación electrónica DIAN?",
        answer:
          "Su sitio habla de facturas generadas en la fecha programada, pero no menciona facturación electrónica validada por la DIAN. Pregúntales si emiten factura electrónica o un recibo de cobro. SportMaps trae la integración con la DIAN sin costo.",
      },
      {
        question: "¿Athleos o SportMaps para una escuela de 40 niños?",
        answer:
          "Con 40 alumnos, SportMaps Escuela Start cuesta $69.000 al mes ($59.000 en pago anual) con WhatsApp con IA y pasarelas incluidas. Athleos no publica su precio, así que pide su cotización para 40 alumnos activos y compáralas.",
      },
      {
        question: "¿Qué es la Ley 2300 y cómo afecta el cobro de mensualidades?",
        answer:
          "Es la ley de 2023 que limita los horarios, días y frecuencia de los contactos de cobranza en Colombia. Para una escuela, la práctica sana es recordar con avisos espaciados y en horario hábil; ante dudas sobre si aplica a tu caso, consulta a un abogado.",
      },
    ],
  },

  // ── SportMaps vs AgendaPro ─────────────────────────────────────────────────
  {
    slug: "sportmaps-vs-agendapro",
    title: "SportMaps vs AgendaPro para escuelas deportivas: precios en Colombia y cuándo conviene cada uno",
    excerpt:
      "AgendaPro es un software de agenda para negocios de servicios (belleza, salud, deporte) con precios públicos en Colombia; SportMaps es un software para escuelas deportivas. Comparamos planes y adicionales consultados el 14 de octubre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "1 Oct 2026",
    isoDate: "2026-10-01",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "AgendaPro conviene si tu negocio vive de citas o clases con cupo (un estudio, un box, un centro de bienestar) y cobras por profesional; SportMaps conviene si tienes una escuela deportiva con niños, acudientes y mensualidad. En precios de Colombia consultados el 14 de octubre de 2026, AgendaPro va de $29.900 (1 profesional) a $510.000 al mes, y cobra aparte la facturación electrónica (desde $90.000 al mes) y los recordatorios por WhatsApp (desde $10.000 por 50 mensajes). SportMaps va de $0 a $349.000 según el número de alumnos e incluye en todos los planes WhatsApp con IA, Wompi, Mercado Pago y la integración de facturación electrónica.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "La pregunta clave es qué mide tu negocio: si es agenda de profesionales, AgendaPro cobra por eso y es muy completo. Si es una escuela con alumnos que pagan mensualidad, SportMaps cobra por alumnos y ya trae lo que una escuela necesita para cobrar, sin adicionales.",
      },
      { type: "h2", content: "Precios de AgendaPro en Colombia" },
      {
        type: "table",
        headers: ["Plan AgendaPro", "Mensual", "Profesionales", "Lo que suma"],
        rows: [
          ["Individual", "$29.900", "1", "Citas y clases en línea ilimitadas, CRM, recordatorios automáticos, 500 correos de marketing, 50 recordatorios de WhatsApp de regalo"],
          ["Básico", "$99.000", "2 a 20", "1.000 correos de marketing, inventario, comisiones"],
          ["Premium", "$150.000", "2 a 20", "2.000 correos, encuestas, fichas personalizables, gift cards, presupuestos, sitio de reservas con URL propia"],
          ["Pro", "$510.000", "2 a 20", "5.000 correos, API, soporte personalizado, Google Analytics y Meta Pixel"],
        ],
      },
      {
        type: "table",
        headers: ["Adicional de AgendaPro", "Precio publicado"],
        rows: [
          ["Facturación electrónica", "Desde $90.000/mes"],
          ["Recordatorios por WhatsApp", "Desde $10.000/mes por 50 mensajes"],
          ["Videoconsultas", "Desde $45.600/mes (2.500 minutos)"],
          ["Charly, asistente de marketing", "Desde $228.000/mes"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: precios públicos de agendapro.com/co/planes, consultados el 14 oct 2026. La página ofrece 20 % de descuento en pago anual.",
      },
      { type: "h2", content: "Precios de SportMaps (14 de octubre de 2026)" },
      {
        type: "table",
        headers: ["Plan", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: [
          ["Free Start", "$0", "—", "Hasta 20"],
          ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
          ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
          ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
          ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
        ],
      },
      { type: "h2", content: "Ejemplo: escuela de 100 alumnos y 5 entrenadores que factura electrónicamente" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo con precios de lista mensuales. La escuela necesita agenda de entrenamientos, cobro a las familias, recordatorios por WhatsApp y factura electrónica.",
      },
      {
        type: "table",
        headers: ["Concepto", "AgendaPro", "SportMaps"],
        rows: [
          ["Plan", "$99.000 (Básico, 5 profesionales)", "$99.000 (Crecimiento, 120 alumnos)"],
          ["Facturación electrónica", "Desde $90.000", "Integración $0 + paquete de facturas que uses"],
          ["Recordatorios por WhatsApp para 100 familias", "Desde $10.000 por cada 50 mensajes", "Incluidos; solo pagas a Meta si te excedes de las 1.000 conversaciones de servicio gratis al mes"],
          ["Lectura de comprobantes de transferencia", "No publicada", "Incluida"],
          ["Total del software antes de pasarela", "Desde $199.000 + mensajes extra", "$99.000 + paquete de facturas"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si tu escuela tiene muchos alumnos y muy pocos entrenadores, el modelo por profesional de AgendaPro puede salir barato en el plan. Haz el cálculo con tus números: a cada lado súmale la pasarela de pagos y el costo real de la facturación electrónica.",
      },
      { type: "h2", content: "Lo que cambia más allá del precio" },
      {
        type: "table",
        headers: ["Tema", "AgendaPro", "SportMaps"],
        rows: [
          ["Para qué fue hecho", "Agenda de negocios de servicios: belleza, salud, bienestar, deporte", "Escuelas y academias deportivas"],
          ["Cómo cobra el software", "Por número de profesionales", "Por número de alumnos; staff ilimitado"],
          ["Acudientes y menores de edad", "Ficha de cliente", "Acudientes vinculados a cada atleta, hermanos con descuento"],
          ["Categorías por edad y equipos", "No es su modelo", "Sí"],
          ["Inscripción una vez + mensualidad", "No es su modelo", "Sí, con cobros automáticos por periodo"],
          ["Marketing por correo, gift cards, inventario", "Sí", "No es el foco; tienda de la escuela como adicional"],
          ["Carnet con QR, informe mensual del atleta", "No", "Sí"],
        ],
      },
      { type: "h2", content: "Dónde gana AgendaPro" },
      {
        type: "ul",
        items: [
          "Agenda de citas y clases con cupo muy madura: reservas en línea ilimitadas, recordatorios, sitio de reservas con tu URL y presencia en su marketplace.",
          "Herramientas de venta y marketing que SportMaps no tiene: miles de correos de marketing al mes, gift cards, encuestas de satisfacción, presupuestos y un asistente de marketing.",
          "Inventario y comisiones para el equipo, útiles si vendes productos y pagas por sesión dictada.",
          "Precio de entrada muy bajo para un profesional independiente: $29.900 al mes.",
          "API e integraciones con Google Analytics y Meta Pixel en el plan Pro.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Modelo de escuela: acudientes, categorías por edad, equipos, inscripción una vez y mensualidad después, recargo por mora opcional y sin cancelar al atleta por atrasarse.",
          "Sin adicionales para cobrar: WhatsApp con IA, Wompi, Mercado Pago y la integración de facturación electrónica vienen en todos los planes, incluido el gratis.",
          "Staff ilimitado: sumar un entrenador no sube el precio.",
          "Para las familias: carnet digital con QR, informe mensual del atleta, avisos del calendario y app instalable.",
          "Para los entrenadores: asistencia por QR, pizarra táctica de fútbol, planificación por mesociclos y evaluaciones físicas.",
        ],
      },
      { type: "h2", content: "Por qué el modelo de cobro del software importa" },
      {
        type: "p",
        content:
          "AgendaPro cobra por profesionales; SportMaps, por alumnos. Eso refleja para qué fue hecho cada uno. En un centro de bienestar, el negocio crece cuando sumas profesionales que atienden citas. En una escuela deportiva, el negocio crece cuando sumas niños a los grupos que ya tienes: un entrenador puede llevar 20 o 25 alumnos por grupo y varios grupos al día.",
      },
      {
        type: "p",
        content:
          "Por eso, en una escuela, sumar un entrenador no debería subir el precio del software, y en SportMaps no lo hace: el staff es ilimitado en todos los planes. En cambio, si tu escuela crece en alumnos, en SportMaps subes de tramo; en AgendaPro sigues en el mismo plan mientras no pases de 20 profesionales. Si tienes muchos alumnos y pocos entrenadores, haz la cuenta con cuidado: el plan de AgendaPro puede salirte barato, y lo que pesa son los adicionales.",
      },
      { type: "h2", content: "Un mes de cobro, paso a paso" },
      {
        type: "p",
        content:
          "Así se ve el cobro de una mensualidad en SportMaps: el día 1 el sistema genera el cobro de cada alumno según su plan y le aplica el descuento por hermanos si corresponde. Tres días antes del vencimiento sale el recordatorio por WhatsApp y correo con un enlace corto; la familia paga por PSE, Nequi o tarjeta sin iniciar sesión, o transfiere y manda la foto del comprobante al WhatsApp de la escuela. El asistente lee el comprobante y lo deja listo para aprobar. Quien no ha pagado recibe avisos el día del vencimiento y a los 3, 10 y 20 días. Al cierre, el estado de cuenta de cada familia está al día sin abrir una hoja de cálculo.",
      },
      {
        type: "p",
        content:
          "En una herramienta de agenda, el mismo mes se arma con ventas o cobros por cliente, recordatorios que se compran por paquete y la conciliación de transferencias a cargo de la escuela. Se puede hacer; la pregunta es cuántas horas te cuesta.",
      },
      { type: "h2", content: "Si ya usas AgendaPro en tu escuela" },
      {
        type: "ol",
        items: [
          "Revisa cuántos adicionales pagas hoy (facturación, recordatorios de WhatsApp) y súmalos al plan.",
          "Mira cuánto tiempo se va en registrar a mano los pagos por transferencia.",
          "Exporta tus clientes con nombre, teléfono y correo, y anota a qué grupo pertenece cada niño y quién es su acudiente.",
          "Prueba SportMaps con un grupo durante un mes de cobro antes de mover a todos.",
        ],
      },
      { type: "h2", content: "Cómo decidir" },
      {
        type: "ol",
        items: [
          "Escribe qué vendes: ¿clases con cupo que el cliente agenda, o un programa mensual al que el niño va siempre en el mismo horario?",
          "Si es lo primero, prueba AgendaPro. Si es lo segundo, prueba SportMaps.",
          "Suma en cada uno lo que necesitas encendido: facturación, WhatsApp y pasarela.",
          "Revisa quién va a usar el sistema: si son papás de niños, prueba el flujo de pago desde el celular de uno de ellos.",
        ],
      },
      {
        type: "cta",
        title: "Ve qué incluye cada plan de SportMaps",
        description: "WhatsApp con IA, Wompi, Mercado Pago y facturación electrónica en todos los planes.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "facturacion-electronica-escuelas-deportivas-dian",
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
      "cuanto-cuesta-software-escuela-deportiva-2026",
    ],
    about: [
      "software para escuelas deportivas",
      "comparativa SportMaps vs AgendaPro",
      "facturación electrónica para academias en Colombia",
    ],
    mentions: ["SportMaps", "AgendaPro", "Wompi", "Mercado Pago", "WhatsApp", "Meta", "DIAN", "Google Analytics"],
    faqs: [
      {
        question: "¿Cuánto cuesta AgendaPro en Colombia?",
        answer:
          "Según su página, consultada el 14 de octubre de 2026: Individual $29.900 al mes (1 profesional), Básico $99.000, Premium $150.000 y Pro $510.000 (de 2 a 20 profesionales). Con pago anual hay 20 % de descuento.",
      },
      {
        question: "¿AgendaPro incluye facturación electrónica?",
        answer:
          "La ofrece como adicional desde $90.000 al mes, sobre el plan. En SportMaps la integración con la DIAN no tiene costo en ningún plan y la escuela paga solo el paquete de facturas que use.",
      },
      {
        question: "¿Sirve AgendaPro para una escuela de fútbol?",
        answer:
          "Sirve para agendar entrenamientos y cobrar, pero no está hecho para el modelo de escuela: acudientes vinculados, categorías por edad e inscripción más mensualidad. Si tu escuela vive de mensualidades de niños, un software deportivo te ahorra adaptar el sistema.",
      },
      {
        question: "¿Cuánto cuestan los recordatorios por WhatsApp en AgendaPro y en SportMaps?",
        answer:
          "AgendaPro los vende desde $10.000 al mes por 50 mensajes (el plan Individual trae 50 de regalo). En SportMaps vienen incluidos; WhatsApp da 1.000 conversaciones de servicio gratis al mes por número y solo si te excedes, Meta cobra la diferencia directo a la escuela.",
      },
      {
        question: "¿Cuál es más barato para un gimnasio o estudio de clases?",
        answer:
          "Para un negocio de clases con cupo y pocos profesionales, AgendaPro suele encajar mejor y su plan Individual cuesta $29.900. SportMaps está pensado para escuelas con alumnos que pagan mensualidad.",
      },
    ],
  },

  // ── Alternativas a Controla.Club ───────────────────────────────────────────
  {
    slug: "alternativas-a-controla-club-colombia",
    title: "Alternativas a Controla.Club en Colombia (2026): opciones reales según tu tipo de negocio",
    excerpt:
      "Controla.Club sirve a gimnasios, academias y canchas. Si buscas otra opción, la correcta depende de qué negocio tienes: escuela formativa, gimnasio con acceso, centro de clases con agenda o cancha sintética. Opciones con precios públicos consultados el 14 de octubre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "28 Sep 2026",
    isoDate: "2026-09-28",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Las alternativas a Controla.Club en Colombia dependen de tu negocio. Para una escuela deportiva formativa con niños y mensualidades, las opciones con precio público son SportMaps (gratis hasta 20 alumnos; $69.000 al mes hasta 50) y GOLAPP (desde $150.000 al mes hasta 200 deportistas); Athleos también atiende escuelas, pero no publica montos. Para un centro de clases con agenda por profesional, AgendaPro (desde $29.900). Para clubes, ligas y federaciones con competiciones, Clupik. Controla.Club, por su parte, publica un plan de entrada de $99.000 al mes hasta 50 alumnos y es fuerte en control de acceso tipo gimnasio.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Antes de cambiar, define qué te duele de verdad: el precio, el cobro, el control de acceso o la falta de herramientas deportivas. Cada alternativa resuelve una de esas cosas mejor que las demás; ninguna las resuelve todas.",
      },
      { type: "h2", content: "Qué publica Controla.Club" },
      {
        type: "p",
        content:
          "Según su archivo público controla.club/llms-faq.txt, consultado el 14 oct 2026: plan inicial desde $99.000 COP al mes hasta 50 alumnos con Wompi y PSE incluidos, plan Pro de $199.000 hasta 300 alumnos, plan Enterprise a medida y 7 días de prueba sin tarjeta. Dice integrar Wompi, PSE, Nequi, Daviplata y Mercado Pago, y declara presencia en Colombia y otros países de la región, con varias monedas. Para canchas tiene un producto aparte, Controla Cancha, desde $149.000 al mes. En otro documento suyo (llms-full.txt) los planes medianos aparecen como «Custom», así que pide cotización escrita.",
      },
      { type: "h2", content: "Las alternativas, una por una" },
      {
        type: "table",
        headers: ["Opción", "Precio publicado (mensual)", "Fuerte en", "Ten en cuenta", "Fuente"],
        rows: [
          ["SportMaps", "$0 (20 alumnos) · $69.000 (50) · $99.000 (120) · $159.000 (300) · $349.000 (800)", "Escuelas formativas: cobro con WhatsApp IA, Wompi y Mercado Pago, facturación DIAN, herramientas del entrenador", "App instalable desde el navegador, no app nativa en tiendas; control de acceso ZKTeco como adicional", "sportmaps.co/planes, 14 oct 2026"],
          ["GOLAPP", "$150.000 (200) · $220.000 (400) · $320.000 (700+)", "Escuelas de fútbol base que necesitan lo esencial", "No menciona pasarela en línea ni facturación electrónica; avisos de mora por correo", "golapp.com.co, 14 oct 2026"],
          ["Athleos", "No publica montos; cobra por alumno activo", "Escuelas deportivas; cobranza responsable (Ley 2300) explícita; +500 escuelas declaradas", "No menciona facturación electrónica DIAN", "Su sitio, 14 oct 2026"],
          ["AgendaPro", "$29.900 (1 profesional) · $99.000 · $150.000 · $510.000", "Centros de clases con cupo, estudios, bienestar", "Facturación electrónica desde +$90.000 y WhatsApp desde +$10.000 por 50 mensajes", "agendapro.com/co/planes, 14 oct 2026"],
          ["Clupik", "Gratis (50 deportistas) · Pro $200.000–$220.000 · Élite $470.000–$520.000", "Clubes, ligas y federaciones con competiciones, web y tienda", "Cargos aparte por app personalizada y pasarela", "clupik.com/precios, 8 oct 2026"],
        ],
      },
      { type: "h2", content: "Elige según tu tipo de negocio" },
      { type: "h3", content: "Escuela o academia formativa (niños, acudientes, mensualidad)" },
      {
        type: "p",
        content:
          "Aquí lo que importa es cobrar bien: inscripción una vez, mensualidad, comprobantes de transferencia, recordatorios y paz y salvo. SportMaps está construido para eso y trae en todos los planes el asistente de WhatsApp que lee los comprobantes y los deja listos para aprobar, las pasarelas y la integración de facturación electrónica. GOLAPP es una opción simple si tu escuela es de fútbol y no necesitas cobrar en línea. Athleos es otra opción seria si prefieres pagar por alumno activo.",
      },
      { type: "h3", content: "Gimnasio, box o centro con torniquete" },
      {
        type: "p",
        content:
          "Si tu negocio gira alrededor de la entrada (membresías, paquetes de sesiones, bloqueo al moroso en la puerta), Controla.Club fue pensado para eso y puede que no necesites cambiar. Si aun así buscas alternativa, SportMaps ofrece control de acceso con torniquetes y biométricos ZKTeco con bloqueo por mora como adicional, pero su núcleo es la escuela, no el gimnasio.",
      },
      { type: "h3", content: "Centro de clases con agenda (yoga, pilates, entrenamiento personal)" },
      {
        type: "p",
        content:
          "Si tus clientes reservan clases con cupo y pagas por profesional, AgendaPro es una alternativa horizontal muy completa, con agenda, marketing y gift cards. Suma los adicionales que vas a usar (facturación y WhatsApp) antes de comparar.",
      },
      { type: "h3", content: "Club con competiciones, liga o federación" },
      {
        type: "p",
        content:
          "Si tu operación principal es organizar competiciones entre varios clubes, Clupik tiene más recorrido en ese mundo. SportMaps maneja partidos y torneos de la escuela (los torneos son un adicional de $49.000, incluido en Elite), pero no es un sistema de federaciones.",
      },
      { type: "h3", content: "Cancha sintética que vive de reservas" },
      {
        type: "p",
        content:
          "Controla Cancha es un producto dedicado y ya opera. Lo comparamos con lo que SportMaps ofrece hoy en reservas, y con lo que viene en noviembre de 2026, en nuestra comparativa Controla Cancha vs SportMaps.",
      },
      { type: "h2", content: "Dónde gana Controla.Club" },
      {
        type: "ul",
        items: [
          "Control de acceso como núcleo del producto: membresías, paquetes de sesiones y validación por QR y biométricos.",
          "Funciones que SportMaps no tiene: red social entre clubes (Social Controla), gamificación con puntos y prospección saliente por WhatsApp.",
          "Varias monedas y presencia declarada en varios países, útil si operas fuera de Colombia.",
          "Un producto separado para canchas, ya en marcha.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps frente a Controla.Club" },
      {
        type: "ul",
        items: [
          "Plan gratis permanente hasta 20 alumnos y $69.000 al mes hasta 50, frente a $99.000 de su plan inicial.",
          "WhatsApp con IA, Wompi, Mercado Pago y la integración de facturación electrónica en todos los planes.",
          "Pensado para la escuela formativa: acudientes, categorías por edad, inscripción más mensualidad y la mora que no cancela al atleta.",
          "Herramientas del entrenador: pizarra táctica de fútbol, mesociclos y evaluaciones físicas.",
        ],
      },
      { type: "h2", content: "Qué preguntar en la demo de cualquier alternativa" },
      {
        type: "ul",
        items: [
          "¿Cuál es el precio exacto para mi número de alumnos, por escrito, y qué pasa si me paso del tope a mitad de mes?",
          "¿Qué pasarela usan, quién cobra la comisión y la plata llega directo a mi cuenta?",
          "Si una familia me transfiere, ¿quién revisa el comprobante: yo o el sistema?",
          "¿Los recordatorios salen por WhatsApp? ¿Hay costo por mensaje o por paquete?",
          "¿Emiten factura electrónica validada por la DIAN o un recibo de cobro?",
          "¿Cuántos usuarios de staff incluye el plan? ¿Cobran por entrenador?",
          "¿Cómo exporto mis datos si me voy, y en qué formato?",
        ],
      },
      {
        type: "p",
        content:
          "Haz las mismas preguntas a todos y pon las respuestas en una tabla. Lo que no te respondan por escrito, cuéntalo como «no». Y pide probar con tus datos: un grupo real, un mes de cobro real. Una demo con datos de ejemplo siempre se ve bien; tu escuela, con sus hermanos, becas y pagos atrasados, es la prueba que importa.",
      },
      { type: "h2", content: "Cómo migrar sin perder información" },
      {
        type: "ol",
        items: [
          "Exporta tu lista de alumnos o miembros con documento, fecha de nacimiento, acudiente y teléfono.",
          "Exporta el historial de pagos del año y el estado de cuenta de cada familia al día del corte.",
          "Elige una fecha de corte al inicio de un periodo de cobro, no a mitad de mes.",
          "Carga primero un grupo piloto y cobra un mes con el sistema nuevo mientras el anterior sigue activo.",
          "Avisa a las familias por escrito: el nuevo enlace de pago, el número de WhatsApp y qué cambia para ellas.",
          "Cancela el sistema anterior solo cuando el primer cobro completo haya cerrado sin diferencias.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Los precios de todos los proveedores cambian. Las cifras de esta página tienen fecha de consulta; confírmalas antes de firmar y pide siempre la cotización escrita para tu número real de alumnos.",
      },
      {
        type: "cta",
        title: "Compara SportMaps con Controla.Club punto por punto",
        description: "La comparativa completa, con precios verificados de ambos lados.",
        href: "/comparar/controla-club",
        label: "Ver la comparación",
      },
    ],
    related: [
      "sportmaps-vs-controla-club",
      "alternativas-a-clupik-colombia",
      "mejor-software-gestion-deportiva-colombia-2026",
    ],
    about: [
      "alternativas a Controla.Club",
      "software de gestión deportiva en Colombia",
      "software para gimnasios y escuelas deportivas",
    ],
    mentions: ["Controla.Club", "Controla Cancha", "SportMaps", "GOLAPP", "Athleos", "AgendaPro", "Clupik", "Wompi", "Mercado Pago", "ZKTeco"],
    faqs: [
      {
        question: "¿Cuál es la mejor alternativa a Controla.Club para una escuela de fútbol?",
        answer:
          "Para una escuela formativa con niños y mensualidades, SportMaps y GOLAPP publican precios en pesos. SportMaps es gratis hasta 20 alumnos y cuesta $69.000 al mes hasta 50, con WhatsApp con IA y pasarelas incluidas; GOLAPP arranca en $150.000 al mes hasta 200 deportistas.",
      },
      {
        question: "¿Cuánto cuesta Controla.Club?",
        answer:
          "Su archivo público llms-faq.txt, consultado el 14 de octubre de 2026, dice que el plan inicial cuesta desde $99.000 al mes hasta 50 alumnos y el plan Pro $199.000 hasta 300, con 7 días de prueba sin tarjeta. Otro documento suyo muestra planes medianos como «Custom», así que pide cotización escrita.",
      },
      {
        question: "¿Hay alguna alternativa gratis a Controla.Club?",
        answer:
          "SportMaps tiene un plan gratis permanente, Free Start, hasta 20 alumnos, con WhatsApp con IA y pasarelas incluidas. Clupik publica un plan gratis hasta 50 deportistas con funciones limitadas.",
      },
      {
        question: "¿Qué alternativa a Controla.Club sirve para un gimnasio?",
        answer:
          "Si tu negocio es un gimnasio con control de acceso, Controla.Club está pensado para eso. Si buscas otra opción con agenda de clases, AgendaPro es horizontal y muy completa. SportMaps ofrece torniquetes ZKTeco como adicional, pero su foco es la escuela deportiva.",
      },
      {
        question: "¿Puedo migrar de Controla.Club sin perder el historial de pagos?",
        answer:
          "Sí, si exportas antes del corte la lista de alumnos con acudientes y el historial de pagos del año. Lo recomendable es correr un mes en paralelo con un grupo piloto y cancelar el sistema anterior solo cuando el primer cobro cierre sin diferencias.",
      },
    ],
  },

  // ── SportMaps vs SportEasy, TeamSnap y 360Player ───────────────────────────
  {
    slug: "sportmaps-vs-sporteasy-teamsnap-360player",
    title: "SportEasy, TeamSnap o 360Player en Colombia: qué les falta para una escuela deportiva y cuándo sirven",
    excerpt:
      "SportEasy, TeamSnap y 360Player son apps internacionales para equipos y clubes. Explicamos qué hacen bien, qué publican de precios (consultado el 14 de octubre de 2026) y qué no resuelven para Colombia: PSE, Nequi, pesos y facturación electrónica DIAN.",
    category: "Comparativas",
    readTime: "8 min",
    date: "24 Sep 2026",
    isoDate: "2026-09-24",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "SportEasy, TeamSnap y 360Player son buenas apps internacionales para organizar equipos: calendario, convocatorias, mensajes, estadísticas y, en el caso de 360Player, desarrollo del jugador con video. Para una escuela deportiva en Colombia el límite está en el cobro: ninguna de las tres publica pagos con PSE o Nequi, precios en pesos ni facturación electrónica DIAN, y los precios que muestran están en euros o dólares. Si tu escuela vive de mensualidades de niños pagadas por transferencia o PSE, un software local como SportMaps resuelve esa parte; si solo necesitas coordinar un equipo, cualquiera de las tres puede servirte.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Usa una app internacional si tu necesidad es organizar al equipo y no cobrar. Si necesitas cobrar mensualidades en pesos, conciliar transferencias y facturar a la DIAN, esas apps te obligan a llevar el cobro por fuera, en Excel y WhatsApp.",
      },
      { type: "h2", content: "Qué es cada una" },
      {
        type: "table",
        headers: ["App", "Origen y escala (según su sitio)", "Precio publicado", "Fuente"],
        rows: [
          ["SportEasy", "Empresa francesa (SportEasy SAS). Dice tener 20.000 clubes activos y 4.500.000 usuarios; sitio en español, francés, inglés y otros idiomas", "Equipo: Básica gratis hasta 30 miembros; Premium 9,99 € al mes o 69 € al año. Club: de 0,33 € a 0,48 € por miembro al mes", "sporteasy.net, consultado el 14 oct 2026"],
          ["TeamSnap", "Empresa de Estados Unidos; producto para equipos, clubes y ligas", "Equipos: «$0 to start», con mejora paga sin precio visible. Clubes y ligas: precio a la medida", "teamsnap.com/pricing, consultado el 14 oct 2026"],
          ["360Player", "Empresa sueca; gestión de club y desarrollo deportivo (video, estadísticas, entrenamientos)", "No publica precios: depende del número de miembros y de los módulos; hay que hablar con ventas", "360player.com/pricing, consultado el 14 oct 2026"],
        ],
      },
      { type: "h2", content: "Lo que les falta para Colombia" },
      {
        type: "table",
        headers: ["Necesidad de una escuela en Colombia", "SportEasy", "TeamSnap", "360Player", "SportMaps"],
        rows: [
          ["Precio en pesos colombianos", "No (euros)", "No (dólares)", "No publica", "Sí"],
          ["Pago con PSE y Nequi", "No lo publica", "No lo publica", "No lo publica", "Sí, con Wompi y Mercado Pago"],
          ["Leer comprobantes de transferencia", "No lo publica", "No lo publica", "No lo publica", "Sí, con IA, listo para aprobar"],
          ["Facturación electrónica DIAN", "No lo publica", "No lo publica", "No lo publica", "Integración sin costo"],
          ["Recordatorios de cobro por WhatsApp", "No lo publica", "No lo publica", "No lo publica", "Sí, con enlace de pago"],
          ["Idioma del sitio", "Español disponible", "Inglés", "Inglés (ayuda en inglés y sueco)", "Español, soporte desde Colombia"],
        ],
      },
      { type: "h3", content: "El caso de los pagos en línea" },
      {
        type: "p",
        content:
          "TeamSnap procesa los pagos con Stripe, según su propio centro de ayuda. La página de Stripe con los países donde una empresa puede abrir cuenta (stripe.com/global, consultada el 14 oct 2026) incluye a Brasil y México, pero no a Colombia. En la práctica, una escuela constituida en Colombia no tiene cómo recibir pagos por esa vía en su cuenta bancaria local. SportEasy lista «cuotas y cobros del club» como función y 360Player dice automatizar pagos, pero ninguno publica que acepte PSE, Nequi o botón Bancolombia, que es como paga buena parte de las familias en Colombia.",
      },
      { type: "h3", content: "El caso de la facturación" },
      {
        type: "p",
        content:
          "Si tu escuela está obligada a facturar electrónicamente, la factura tiene que pasar por la validación de la DIAN. Ninguna de las tres apps lo ofrece, así que tendrías que contratar un proveedor aparte y digitar cada pago dos veces. En SportMaps la integración no tiene costo y pagas solo el paquete según la cantidad de facturas.",
      },
      { type: "h2", content: "Dónde ganan SportEasy, TeamSnap y 360Player" },
      {
        type: "ul",
        items: [
          "Gestión del equipo muy madura: calendario, convocatorias con confirmación de asistencia, mensajes y documentos compartidos.",
          "Apps nativas en App Store y Google Play. SportMaps es una app instalable desde el navegador (PWA), sin app en las tiendas.",
          "Estadísticas de partido y de jugador, incluidas estadísticas en vivo en SportEasy.",
          "360Player: desarrollo del jugador con video, biblioteca de entrenamientos para compartir y soporte de muchos deportes (fútbol, baloncesto, voleibol, balonmano, tenis, pádel, rugby y otros).",
          "TeamSnap: transmisión en vivo gratis y una base de usuarios enorme en Norteamérica.",
          "Escala: si tu club también tiene equipos en Europa o Estados Unidos, una herramienta global puede unificarlos.",
          "SportEasy tiene un plan gratis hasta 30 miembros por equipo y un Premium económico si solo quieres coordinar.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "El cobro completo en pesos: inscripción una vez, mensualidad, recargo por mora opcional, descuento por hermanos y paz y salvo.",
          "Wompi y Mercado Pago en todos los planes: PSE, Nequi, tarjetas y botón Bancolombia. La plata va directo a la cuenta de la escuela.",
          "WhatsApp con IA gratis: lee el comprobante, lo cruza con el cobro y lo deja listo para aprobar; también responde a prospectos y agenda la clase de cortesía.",
          "Facturación electrónica DIAN integrada, con acceso de solo lectura para el contador.",
          "Precios públicos en pesos: gratis hasta 20 alumnos, $69.000 hasta 50, $99.000 hasta 120, $159.000 hasta 300 y $349.000 hasta 800.",
          "Soporte en español desde Colombia por WhatsApp.",
        ],
      },
      { type: "h2", content: "Qué pasa cuando el cobro va por fuera" },
      {
        type: "p",
        content:
          "Muchas escuelas en Colombia usan una app internacional para el equipo y cobran por fuera: transferencias al Nequi del director, una hoja de cálculo y mensajes de WhatsApp a quien no ha pagado. Funciona mientras la escuela es pequeña. Con 50 o más familias aparecen tres problemas:",
      },
      {
        type: "ul",
        items: [
          "Nadie sabe con certeza quién está al día: la lista de la app no coincide con la hoja de pagos.",
          "Los comprobantes se pierden en el chat y hay que buscarlos cuando una familia dice que ya pagó.",
          "No hay factura ni recibo formal, y la plata entra a una cuenta personal, lo que complica la contabilidad de la escuela.",
        ],
      },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: una escuela de 80 alumnos con mensualidad de $130.000 mueve $10.400.000 al mes. Si ese dinero se concilia a mano con comprobantes sueltos, un error de 3 o 4 pagos no detectados al mes ya cuesta más que un plan de software. Y el error va en las dos direcciones: también está la familia que sí pagó y recibe un cobro de más, que es la forma más rápida de perder su confianza.",
      },
      { type: "h2", content: "¿Se pueden usar juntas?" },
      {
        type: "p",
        content:
          "Sí, y para algunos clubes tiene sentido: el entrenador usa una app internacional para convocatorias y estadísticas, y la administración usa un software local para inscripciones, cobros y facturas. El costo es tener dos sistemas y dos listas de jugadores que mantener al día. Antes de hacerlo, revisa si el software local ya cubre lo que el entrenador usa: en SportMaps hay asistencia por QR, pizarra táctica (hoy para fútbol), planificación por mesociclos, evaluaciones físicas y partidos.",
      },
      { type: "h2", content: "Cómo decidir" },
      {
        type: "ol",
        items: [
          "Escribe quién paga y cómo. Si las familias pagan mensualidad por transferencia, PSE o Nequi, necesitas un sistema que cobre en Colombia.",
          "Revisa si estás obligado a facturar electrónicamente. Si sí, descarta lo que no se integre con la DIAN o suma el costo de un proveedor aparte.",
          "Si tu necesidad es solo coordinar un equipo, prueba el plan gratis de SportEasy o el de equipos de TeamSnap.",
          "Si necesitas las dos cosas, decide si vale la pena mantener dos sistemas o si uno local cubre lo del entrenador.",
        ],
      },
      {
        type: "cta",
        title: "Cobra en pesos, con PSE y Nequi",
        description: "SportMaps trae Wompi, Mercado Pago, WhatsApp con IA y facturación electrónica en todos los planes.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "mejor-software-gestion-deportiva-colombia-2026",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "facturacion-electronica-escuelas-deportivas-dian",
    ],
    about: [
      "apps internacionales de gestión de equipos deportivos",
      "comparativa SportEasy TeamSnap 360Player SportMaps",
      "pagos en línea para escuelas deportivas en Colombia",
    ],
    mentions: ["SportEasy", "TeamSnap", "360Player", "SportMaps", "Stripe", "Wompi", "Mercado Pago", "PSE", "Nequi", "DIAN"],
    faqs: [
      {
        question: "¿SportEasy funciona en Colombia?",
        answer:
          "La app está en español y se puede usar desde Colombia para organizar equipos. Sus precios están en euros y no publica pagos con PSE o Nequi ni facturación electrónica DIAN, así que el cobro de mensualidades tendría que ir por fuera.",
      },
      {
        question: "¿Cuánto cuesta SportEasy?",
        answer:
          "Según su sitio, consultado el 14 de octubre de 2026: para un equipo, plan Básico gratis hasta 30 miembros y Premium a 9,99 € al mes o 69 € al año. Para clubes, entre 0,33 € y 0,48 € por miembro al mes.",
      },
      {
        question: "¿Puedo cobrar con TeamSnap desde Colombia?",
        answer:
          "TeamSnap procesa pagos con Stripe, y Colombia no aparece en la lista de países donde Stripe abre cuentas a empresas (consultada el 14 de octubre de 2026). Por eso una escuela colombiana no tiene cómo recibir pagos por esa vía en su cuenta local.",
      },
      {
        question: "¿Cuánto cuesta 360Player?",
        answer:
          "No publica precios. Su página dice que el valor depende del número de miembros y de los módulos que uses, y pide hablar con ventas.",
      },
      {
        question: "¿Qué app de gestión deportiva acepta PSE y Nequi?",
        answer:
          "SportMaps integra Wompi y Mercado Pago en todos sus planes, con PSE, Nequi, tarjetas y botón Bancolombia, y la plata llega directo a la cuenta de la escuela. SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela.",
      },
    ],
  },

  // ── Controla Cancha vs SportMaps (reservas) ────────────────────────────────
  {
    slug: "controla-cancha-vs-sportmaps-reservas",
    title: "Controla Cancha vs SportMaps para reservas de canchas: qué existe hoy y qué llega en noviembre",
    excerpt:
      "Controla Cancha ya opera reservas de canchas por WhatsApp con planes desde $149.000 al mes. SportMaps tiene hoy reservas básicas dentro de la plataforma y lanza SportMaps Canchas en noviembre de 2026. Comparación honesta con precios consultados el 14 de octubre de 2026.",
    category: "Comparativas",
    readTime: "8 min",
    date: "14 Oct 2026",
    isoDate: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Si hoy necesitas que tu cancha sintética reciba reservas y pagos por WhatsApp, Controla Cancha ya está operando: cuesta $149.000 al mes hasta 2 canchas, $249.000 de 3 a 5 y $399.000 desde 6, sin comisión por reserva (consultado el 14 oct 2026). SportMaps hoy tiene reservas básicas dentro de la plataforma: publicar tus canchas y recibir solicitudes por un enlace. El producto dedicado, SportMaps Canchas, lanza en noviembre de 2026 con planes anunciados de $0, $99.000 y $199.000 al mes. Si tienes una escuela y canchas a la vez, vale la pena esperar o probar SportMaps; si solo alquilas canchas y lo necesitas ya, Controla Cancha está disponible hoy.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Controla Cancha gana en lo que existe hoy. SportMaps gana si ya tienes una escuela en SportMaps o si quieres cobro en línea con PSE y Nequi en la misma cuenta. Lo que todavía no está en vivo en SportMaps lo marcamos como «lanzamiento nov-2026».",
      },
      { type: "h2", content: "Precios de Controla Cancha" },
      {
        type: "table",
        headers: ["Plan", "Canchas", "Mensual", "Reservas atendidas con IA al mes", "Validación de comprobantes"],
        rows: [
          ["Partido", "Hasta 2", "$149.000", "Ninguna; tú confirmas a mano", "Manual"],
          ["Torneo", "De 3 a 5", "$249.000", "400", "Con IA"],
          ["Estadio", "6 o más, multisede", "$399.000", "1.000", "Con IA"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: precios públicos de cancha.controla.club, consultados el 14 oct 2026. Según la misma página: el plan Partido incluye agenda y enlace de reserva, recordatorios de reserva y de pago por WhatsApp, tienda, caja, clientes, roles y mapa de la sede; Torneo suma el agendamiento automático por WhatsApp con IA y la validación de comprobantes con IA; Estadio suma la vista de todas las sedes y acompañamiento para cargarlas. Los clientes pagan por transferencia a la cuenta de la sede, Nequi, Daviplata o efectivo en recepción, y el dinero no pasa por Controla Cancha. No cobra comisión por reserva ni exige contrato.",
      },
      { type: "h2", content: "Qué tiene SportMaps hoy en reservas" },
      {
        type: "ul",
        items: [
          "Publicar las canchas o instalaciones de tu sede y recibir solicitudes de reserva por un enlace.",
          "Todo en la misma cuenta de la escuela: tus alumnos, tus cobros y tus instalaciones.",
          "Lo que ya opera hoy para las escuelas y servirá para las canchas: Wompi y Mercado Pago (PSE, Nequi, tarjetas), y el asistente de WhatsApp que lee comprobantes de transferencia y los deja listos para aprobar.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Lo que SportMaps no tiene hoy en reservas: bot que agende solo por WhatsApp, lista de espera, pago dividido entre jugadores ni precios distintos para socios y público. Varias de esas funciones están anunciadas para SportMaps Canchas (lanzamiento nov-2026); no las cuentes como disponibles hasta que estén en vivo.",
      },
      { type: "h2", content: "Qué anuncia SportMaps Canchas (lanzamiento nov-2026)" },
      {
        type: "table",
        headers: ["Plan anunciado", "Mensual", "Canchas", "Qué incluye según sportmaps.co/canchas"],
        rows: [
          ["Gratis", "$0", "Hasta 2", "Página pública de reservas, agenda única sin dobles reservas, transferencia con aprobación manual y efectivo; sin bot de WhatsApp"],
          ["Canchas Pro", "$99.000", "Hasta 5", "Bot de WhatsApp sin tope de reservas, comprobantes leídos con IA, cobro en línea con Wompi y Mercado Pago"],
          ["Canchas Club", "$199.000", "Ilimitadas, multisede", "Varias sedes en una cuenta, reportes, caja por sede, roles para recepción y contador"],
        ],
      },
      {
        type: "p",
        content:
          "Sin comisión por reserva, ni al club ni al jugador. Los primeros 50 clubes que se anoten tienen 3 meses de Canchas Pro gratis. El piloto arranca con un club real en noviembre de 2026 y el lanzamiento público es ese mismo mes.",
      },
      { type: "h2", content: "Costo por tamaño de sede" },
      {
        type: "table",
        headers: ["Tu sede", "Controla Cancha (hoy)", "SportMaps Canchas (anunciado, nov-2026)"],
        rows: [
          ["1 a 2 canchas", "$149.000 (Partido, sin IA)", "$0 (Gratis, sin bot)"],
          ["1 a 2 canchas con bot de WhatsApp", "$249.000 (Torneo es el primer plan con IA)", "$99.000 (Canchas Pro)"],
          ["3 a 5 canchas", "$249.000, 400 reservas con IA al mes", "$99.000, sin tope de reservas"],
          ["6 o más, varias sedes", "$399.000, 1.000 reservas con IA al mes", "$199.000 (Canchas Club)"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "La columna de SportMaps compara precios anunciados de un producto que todavía no está en vivo. Compara con lo que necesitas hoy: si tu sede no puede esperar a noviembre, la comparación real es Controla Cancha contra tu cuaderno y tu WhatsApp.",
      },
      { type: "h2", content: "Dónde gana Controla Cancha" },
      {
        type: "ul",
        items: [
          "Ya está operando: puedes conectarlo esta semana. SportMaps Canchas lanza en noviembre de 2026.",
          "Producto dedicado a canchas, con recordatorios de reserva y de pago por WhatsApp desde el plan más pequeño.",
          "Tienda, caja y clientes incluidos desde el plan Partido.",
          "Acepta Daviplata además de Nequi y transferencia, y el dinero llega directo a la sede.",
          "Vista multisede y acompañamiento para cargar tus sedes en el plan Estadio.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Escuela y canchas en la misma cuenta: si tienes academia, tus alumnos, sus cobros y tus instalaciones viven en un solo lugar.",
          "Cobro en línea con Wompi y Mercado Pago (PSE, Nequi, tarjetas) que ya opera hoy para las escuelas; Controla Cancha cobra por transferencia, billeteras o efectivo.",
          "El asistente de WhatsApp sobre la API oficial de WhatsApp Business que ya lee comprobantes de mensualidades.",
          "Precios anunciados más bajos en cada tramo y sin tope de reservas desde Canchas Pro (lanzamiento nov-2026).",
        ],
      },
      { type: "h2", content: "Si tienes escuela y canchas" },
      {
        type: "p",
        content:
          "Es el caso más común en los clubes de fútbol sintético: de lunes a viernes por la tarde la cancha es de la escuela, y las noches y los fines de semana se alquila. Con dos sistemas separados, las horas de clase hay que bloquearlas a mano en el de reservas, los papás de la escuela que alquilan para un partido aparecen como clientes nuevos y la caja de la escuela y la de las canchas no se cruzan.",
      },
      {
        type: "p",
        content:
          "Controla.Club y Controla Cancha son productos separados de la misma empresa. En SportMaps, la escuela y las instalaciones están en la misma cuenta, y SportMaps Canchas (lanzamiento nov-2026) anuncia precio de socio para tus alumnos y el bloqueo de la cancha en las horas de clase. Si este es tu caso, pregunta por el combo Academia + Canchas.",
      },
      { type: "h2", content: "Qué hacer mientras llega noviembre" },
      {
        type: "ol",
        items: [
          "Si ya tienes escuela en SportMaps, publica tus canchas hoy y recibe solicitudes por enlace.",
          "Anota cuántas reservas recibes al mes y por qué canal. Te sirve para elegir plan, aquí o en Controla Cancha.",
          "Si no puedes esperar, prueba Controla Cancha: no exige contrato, así que puedes cambiar después.",
          "Si quieres SportMaps Canchas, apártate entre los primeros 50 clubes para los 3 meses de Canchas Pro gratis.",
        ],
      },
      {
        type: "p",
        content:
          "Una advertencia que vale para cualquier proveedor: no armes tu decisión sobre funciones anunciadas. Elige con lo que puedes probar hoy y vuelve a comparar cuando lo anunciado esté en vivo.",
      },
      { type: "h2", content: "Qué preguntar antes de elegir un sistema de reservas" },
      {
        type: "ol",
        items: [
          "¿Qué pasa si dos personas piden la misma hora al mismo tiempo, una por WhatsApp y otra en la web?",
          "¿El bot usa la API oficial de WhatsApp Business o una sesión conectada a tu celular?",
          "¿Cuánto tiempo queda apartada una hora mientras llega el comprobante, y quién la libera?",
          "¿Hay tope de reservas atendidas por el bot? ¿Qué pasa al llegar al tope?",
          "¿La plata llega directo a tu cuenta? ¿Quién cobra comisión y cuánto?",
          "¿Cómo se maneja la cancelación y la devolución, y el jugador lo ve antes de pagar?",
        ],
      },
      {
        type: "cta",
        title: "Compara SportMaps con Controla.Club",
        description: "La comparativa completa con la otra mitad de la empresa: gestión de clubes y escuelas.",
        href: "/comparar/controla-club",
        label: "Ver la comparación",
      },
    ],
    related: [
      "sportmaps-vs-controla-club",
      "alternativas-a-controla-club-colombia",
      "leer-comprobantes-de-pago-con-ia",
    ],
    about: [
      "software de reservas de canchas sintéticas",
      "comparativa Controla Cancha vs SportMaps",
      "reservas por WhatsApp en Colombia",
    ],
    mentions: ["Controla Cancha", "Controla.Club", "SportMaps", "WhatsApp", "Wompi", "Mercado Pago", "Nequi", "Daviplata"],
    faqs: [
      {
        question: "¿Cuánto cuesta Controla Cancha?",
        answer:
          "Según su página, consultada el 14 de octubre de 2026: Partido $149.000 al mes hasta 2 canchas sin IA, Torneo $249.000 de 3 a 5 canchas con 400 reservas con IA al mes, y Estadio $399.000 desde 6 canchas con 1.000 reservas con IA. No cobra comisión por reserva.",
      },
      {
        question: "¿SportMaps tiene reservas de canchas?",
        answer:
          "Hoy tiene reservas básicas: publicar tus canchas o instalaciones y recibir solicitudes por un enlace. El producto dedicado, SportMaps Canchas, con bot de WhatsApp y cobro en línea, lanza en noviembre de 2026.",
      },
      {
        question: "¿Cuánto va a costar SportMaps Canchas?",
        answer:
          "Los planes anunciados son Gratis ($0, hasta 2 canchas, sin bot), Canchas Pro ($99.000, hasta 5, con bot sin tope) y Canchas Club ($199.000, ilimitadas y multisede), sin comisión por reserva. Los primeros 50 clubes tienen 3 meses de Canchas Pro gratis.",
      },
      {
        question: "¿Controla Cancha cobra en línea con PSE?",
        answer:
          "Según su página, los clientes pagan por transferencia a la cuenta de la sede, Nequi, Daviplata o efectivo, y el plan Torneo valida los comprobantes con IA. No menciona una pasarela con PSE o tarjeta.",
      },
      {
        question: "¿Qué me conviene si tengo escuela de fútbol y canchas?",
        answer:
          "Tener las dos cosas en una sola cuenta te evita duplicar clientes y cobros. SportMaps ya maneja la escuela y tiene reservas básicas; si necesitas el bot de reservas hoy mismo, Controla Cancha está disponible y SportMaps Canchas llega en noviembre de 2026.",
      },
    ],
  },

  // ── Mejor app para cobrar mensualidades ────────────────────────────────────
  {
    slug: "mejor-app-para-cobrar-mensualidades-colombia",
    title: "¿Cuál es la mejor app para cobrar mensualidades en Colombia? Opciones, costos y cuándo usar cada una",
    excerpt:
      "Para cobrar mensualidades en Colombia hay tres caminos: transferencia o Nequi con Excel, un link de pago de Wompi o Mercado Pago, o un software que cobra y lleva la cuenta de cada alumno. Comparamos costos con tarifas públicas y te decimos cuándo conviene cada uno.",
    category: "Comparativas",
    readTime: "8 min",
    date: "18 Sep 2026",
    isoDate: "2026-09-18",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "La mejor app para cobrar mensualidades en Colombia es la que hace tres cosas a la vez: deja pagar por PSE, Nequi y tarjeta, sabe qué alumno pagó qué mes y recuerda sola a quien no ha pagado. Un link de pago de Wompi o Mercado Pago resuelve lo primero; Excel con transferencias no resuelve ninguna sin trabajo manual. Para una escuela deportiva o una academia con mensualidad, un software como SportMaps une las tres: cobra con Wompi y Mercado Pago, lleva el estado de cuenta de cada familia y envía recordatorios por WhatsApp y correo, desde $0 hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Con menos de 15 alumnos, transferencia y una lista bien llevada pueden bastar. Desde ahí, el costo real no es la comisión de la pasarela sino las horas de revisar comprobantes y perseguir pagos: elige una herramienta que cruce cada pago con su cobro.",
      },
      { type: "h2", content: "Los tres caminos para cobrar" },
      {
        type: "table",
        headers: ["Camino", "Cuánto cuesta", "Qué resuelve", "Qué no resuelve"],
        rows: [
          ["Transferencia o Nequi + Excel", "$0 en comisiones", "Recibir la plata", "Saber quién pagó qué mes sin revisar comprobante por comprobante; recordatorios; facturas"],
          ["Link de pago (Wompi o Mercado Pago)", "Comisión por transacción, sin mensualidad", "Pago con PSE, Nequi y tarjeta", "Estado de cuenta por alumno, recordatorios automáticos, transferencias que llegan por fuera"],
          ["Software de cobro para escuelas", "Plan mensual + comisión de la pasarela", "Cobro, estado de cuenta por alumno, recordatorios, conciliación", "Requiere cargar a los alumnos y acostumbrar a las familias"],
        ],
      },
      { type: "h2", content: "Lo que cobran las pasarelas" },
      {
        type: "table",
        headers: ["Pasarela", "Tarifa publicada", "Notas"],
        rows: [
          ["Wompi (plan Avanzado)", "2,65 % + $700 + IVA por transacción exitosa", "Tarifa especial de 1 % en pagos con código QR"],
          ["Mercado Pago (link de pago)", "3,29 % + IVA con dinero al instante", "2,99 % + IVA a 7 días; 2,79 % + IVA a 14 días"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: páginas oficiales de Wompi y Mercado Pago Colombia consultadas en octubre de 2026; el detalle y el cálculo con IVA están en nuestra guía Wompi vs Mercado Pago. Las tarifas cambian: confírmalas antes de elegir. Ejemplo ilustrativo: en una mensualidad de $150.000 pagada por Wompi, la comisión con IVA queda alrededor de $5.560.",
      },
      { type: "h2", content: "Software para cobrar mensualidades de escuelas en Colombia" },
      {
        type: "table",
        headers: ["Software", "Precio publicado", "Cobro en línea", "Recordatorios", "Facturación DIAN", "Fuente"],
        rows: [
          ["SportMaps", "$0 (20 alumnos) a $349.000 (800)", "Wompi y Mercado Pago en todos los planes", "WhatsApp y correo, con enlace de pago", "Integración sin costo", "sportmaps.co/planes, 14 oct 2026"],
          ["GOLAPP", "$150.000 (200) a $320.000 (700+)", "No lo menciona", "Por correo", "No la menciona", "golapp.com.co, 14 oct 2026"],
          ["Athleos", "No publica montos", "Tarjeta, PSE, transferencia", "Antes del vencimiento", "No la menciona", "Su sitio, 14 oct 2026"],
          ["Controla.Club", "Desde $99.000 (50 alumnos)", "Wompi, PSE, Nequi, Daviplata, Mercado Pago (según su sitio)", "Por WhatsApp", "No la confirma en llms-faq.txt", "controla.club/llms-faq.txt, 14 oct 2026"],
          ["AgendaPro", "$29.900 a $510.000 (por profesionales)", "No lo detalla en su página de planes", "WhatsApp desde +$10.000 por 50 mensajes", "Adicional desde $90.000", "agendapro.com/co/planes, 14 oct 2026"],
        ],
      },
      { type: "h2", content: "Los 6 criterios para elegir" },
      {
        type: "ol",
        items: [
          "Medios de pago que usan tus familias: PSE, Nequi y botón Bancolombia cubren a la mayoría. Si la app solo acepta tarjeta, vas a seguir recibiendo transferencias.",
          "Qué pasa con las transferencias: alguien tiene que leer cada comprobante y marcar el pago. Busca que la app lo haga por ti o al menos lo deje listo para aprobar.",
          "Estado de cuenta por alumno: qué meses debe cada niño, cuánto y desde cuándo, sin abrir Excel.",
          "Recordatorios por el canal que se lee: en Colombia es WhatsApp. Revisa si los mensajes tienen costo por paquete.",
          "Facturación electrónica: si estás obligado, que la factura salga del mismo pago, sin digitar dos veces.",
          "Precio total: plan + comisión de la pasarela + facturas + mensajes. Compara ese número, no el plan.",
        ],
      },
      { type: "h2", content: "Cuándo NO necesitas una app" },
      {
        type: "ul",
        items: [
          "Tienes menos de 15 alumnos, todos pagan por la misma vía y tú mismo recibes cada pago.",
          "Cobras una sola vez (un curso vacacional, por ejemplo) y no hay mensualidad que perseguir.",
          "Nadie te pide factura electrónica y no estás obligado a emitirla.",
        ],
      },
      {
        type: "p",
        content:
          "En esos casos, una buena lista con fechas y un link de pago de la pasarela te alcanzan. El problema empieza cuando hay 40, 80 o 200 familias y cada una paga distinto.",
      },
      { type: "h2", content: "Dónde ganan las otras opciones" },
      {
        type: "ul",
        items: [
          "Transferencia directa: cero comisión. Para una escuela muy pequeña, nada es más barato.",
          "Link de pago solo: cero mensualidad y en minutos lo tienes funcionando.",
          "GOLAPP: simple y con precio claro si tu escuela es de fútbol y no necesitas cobrar en línea.",
          "Athleos: compromiso explícito de cobranza responsable bajo la Ley 2300 de 2023.",
          "AgendaPro: si cobras clases con cupo por profesional, su modelo encaja mejor.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Cobra y concilia: las familias pagan por PSE, Nequi o tarjeta, y si transfieren, el asistente de WhatsApp lee el comprobante, lo cruza con el cobro y lo deja listo para que lo apruebes con un toque.",
          "Recordatorios automáticos por WhatsApp y correo: 3 días antes, el día del vencimiento y a los 3, 10 y 20 días, con un enlace corto para pagar sin iniciar sesión.",
          "Inscripción una vez y mensualidad después, cobros automáticos por periodo, descuento por hermanos y recargo por mora opcional que define la escuela. La mora no cancela al atleta.",
          "Pagos en efectivo o transferencia registrados a mano, con su comprobante, en el mismo estado de cuenta.",
          "Facturación electrónica DIAN con integración sin costo.",
          "Gratis hasta 20 alumnos. SportMaps no cobra comisión por la integración de pagos; solo aplican las tarifas de la pasarela, y la plata llega directo a la cuenta de la escuela.",
        ],
      },
      { type: "h2", content: "Errores comunes al cobrar mensualidades" },
      {
        type: "ul",
        items: [
          "Recibir la plata en una cuenta personal: complica la contabilidad y la facturación. Abre la pasarela a nombre de la escuela.",
          "Mezclar inscripción y mensualidad en un solo cobro: después no sabes qué pagó cada familia. Son dos cobros distintos.",
          "Recordar solo cuando ya hay mora: el recordatorio más efectivo es el de antes del vencimiento.",
          "Cancelar al niño por atrasarse: pierdes al alumno y la deuda. Mejor un recargo por mora claro y una conversación.",
          "No dejar todo por escrito: fecha de pago, recargo, descuentos y qué pasa en vacaciones van en el reglamento que firma el acudiente.",
        ],
      },
      {
        type: "p",
        content:
          "Ninguna app corrige una política de cobro confusa. Primero define las reglas (cuándo se paga, cuánto, qué pasa si no), escríbelas y compártelas; después elige la herramienta que las aplique sin que tengas que estar encima.",
      },
      { type: "h2", content: "Cómo empezar a cobrar con una app en una semana" },
      {
        type: "ol",
        items: [
          "Día 1: crea la cuenta de la pasarela (Wompi o Mercado Pago) a nombre de la escuela, con su cuenta bancaria.",
          "Día 2: carga a los alumnos con su acudiente y teléfono. Empieza por un grupo.",
          "Día 3: define la inscripción y la mensualidad, la fecha de vencimiento y si habrá recargo por mora.",
          "Día 4: conecta el número de WhatsApp de la escuela y prueba un pago contigo mismo.",
          "Día 5: avisa a las familias del grupo piloto cómo van a pagar desde ahora.",
          "Días 6 y 7: revisa los primeros pagos, ajusta y suma el resto de grupos.",
        ],
      },
      {
        type: "cta",
        title: "Calcula cuánto te cuesta cobrar",
        description: "Pon tus alumnos y tu mensualidad y mira el costo total con pasarela incluida.",
        href: "/calculadora",
        label: "Abrir la calculadora",
      },
    ],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "recordatorios-de-pago-por-whatsapp-automaticos",
    ],
    about: [
      "apps para cobrar mensualidades en Colombia",
      "cobro de mensualidades de escuelas deportivas",
      "pasarelas de pago en Colombia",
    ],
    mentions: ["SportMaps", "Wompi", "Mercado Pago", "Nequi", "PSE", "Bancolombia", "WhatsApp", "GOLAPP", "Athleos", "Controla.Club", "AgendaPro", "DIAN"],
    faqs: [
      {
        question: "¿Cuál es la mejor app para cobrar mensualidades de una escuela deportiva?",
        answer:
          "La que deja pagar por PSE, Nequi y tarjeta, lleva el estado de cuenta de cada alumno y envía recordatorios sola. SportMaps hace las tres cosas con Wompi y Mercado Pago, recordatorios por WhatsApp y correo, y es gratis hasta 20 alumnos.",
      },
      {
        question: "¿Cuánto cobra Wompi por cada pago?",
        answer:
          "Según su página oficial, consultada en octubre de 2026, el plan Avanzado cobra 2,65 % + $700 + IVA por transacción exitosa, con tarifa especial de 1 % en pagos con código QR. Confírmalo en su página antes de elegir, porque las tarifas cambian.",
      },
      {
        question: "¿Puedo cobrar mensualidades por Nequi automáticamente?",
        answer:
          "Sí, con una pasarela como Wompi o Mercado Pago la familia paga con Nequi desde un enlace y el pago queda registrado. Si te transfieren directo a tu Nequi, necesitas revisar el comprobante; en SportMaps el asistente de WhatsApp lo lee y lo deja listo para aprobar.",
      },
      {
        question: "¿Es mejor link de pago o un software para cobrar mensualidades?",
        answer:
          "El link de pago sirve para recibir la plata, pero no sabe qué alumno debe qué mes ni recuerda a quien no pagó. Con más de 15 o 20 familias, un software que cruce cada pago con su cobro ahorra horas cada mes.",
      },
      {
        question: "¿Existe una app gratis para cobrar mensualidades?",
        answer:
          "SportMaps tiene un plan gratis permanente hasta 20 alumnos con Wompi, Mercado Pago y WhatsApp con IA incluidos; solo pagas la comisión de la pasarela en cada pago en línea. Los pagos por transferencia directa no tienen comisión.",
      },
    ],
  },
];
