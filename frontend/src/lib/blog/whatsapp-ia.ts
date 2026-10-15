import type { BlogPost } from "../blog-posts";

/**
 * Cluster WhatsApp IA.
 * Tarifas de Meta consultadas el 14 de octubre de 2026 en la hoja oficial de
 * tarifas en COP (vigente desde el 1 de octubre de 2026) y en
 * https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
 */
export const whatsappIaPosts: BlogPost[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. WhatsApp IA gratis: cuánto cobra Meta
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
    title: "WhatsApp IA gratis para escuelas deportivas: cuánto cobra Meta de verdad en 2026",
    excerpt:
      "SportMaps no cobra el asistente de WhatsApp en ningún plan. Lo único que se paga es la tarifa de Meta por mensaje: en Colombia, unos $3 por mensaje de servicio. Te mostramos la tabla oficial y cuánto le sale a una escuela real.",
    category: "WhatsApp IA",
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
          "El asistente de WhatsApp con IA de SportMaps es gratis en todos los planes, incluido Free Start: SportMaps no cobra por el bot ni vende paquetes de conversaciones. Lo único que existe como costo es la tarifa que Meta, dueña de WhatsApp, cobra por cada mensaje que envía tu número. En Colombia, según la hoja oficial de tarifas en pesos vigente desde el 1 de octubre de 2026, un mensaje de servicio o de utilidad cuesta $2,95 y uno de marketing $46,02. Para una escuela de 80 alumnos eso suele quedar por debajo de $3.000 al mes, y lo cobra Meta directo a la tarjeta de la escuela.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "SportMaps no cobra el WhatsApp IA. Meta cobra por mensaje enviado: unos $3 por mensaje de servicio o de utilidad en Colombia y unos $46 por mensaje de marketing. Si usas el bot para cobrar, responder y atender prospectos, y casi nunca mandas publicidad, la cuenta mensual es de miles de pesos, no de cientos de miles.",
      },
      { type: "h2", content: "Qué es gratis y qué no, sin letra pequeña" },
      {
        type: "p",
        content:
          "Conviene separar tres cosas que en el mercado se suelen mezclar: el software que conversa (la IA), el número de WhatsApp y los mensajes que Meta factura. En SportMaps la IA y la integración no tienen costo. El número es de tu escuela: lo conectas con Meta mediante el registro integrado y queda a nombre de tu negocio, no del nuestro. Y los mensajes los factura Meta según su tabla pública.",
      },
      {
        type: "table",
        headers: ["Concepto", "Quién lo cobra", "Cuánto"],
        rows: [
          ["Asistente con IA (lee comprobantes, responde, agenda cortesías)", "Nadie", "$0 en todos los planes de SportMaps"],
          ["Integración con WhatsApp Business Platform", "Nadie", "$0"],
          ["Número de WhatsApp de la escuela", "Es tuyo", "El que ya tienes o una línea nueva"],
          ["Mensajes de servicio y de utilidad", "Meta", "$2,9455 por mensaje en Colombia"],
          ["Mensajes de autenticación", "Meta", "$2,9455 por mensaje en Colombia"],
          ["Mensajes de marketing", "Meta", "$46,0227 por mensaje en Colombia"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Fuente: hoja de tarifas en COP publicada por Meta para WhatsApp Business Platform, «Cost per message in COP, effective October 1, 2026», y la documentación de precios en developers.facebook.com. Consulta hecha el 14 de octubre de 2026. Meta puede cambiar las tarifas el primer día de cada trimestre, así que revisa la tabla vigente antes de presupuestar.",
      },
      { type: "h2", content: "Cómo cobra Meta hoy: por mensaje, no por conversación" },
      {
        type: "p",
        content:
          "Desde el 1 de julio de 2025 Meta cobra por cada mensaje entregado, no por conversación de 24 horas como antes. Cada mensaje cae en una categoría, y la categoría define el precio:",
      },
      {
        type: "ul",
        items: [
          "Marketing: promociones, invitaciones a eventos abiertos, campañas. Es la más cara.",
          "Utilidad: mensajes ligados a algo que la familia ya tiene con la escuela, como un recordatorio de cobro, la confirmación de un pago o un cambio de horario.",
          "Autenticación: códigos de verificación de un solo uso.",
          "Servicio: las respuestas libres (sin plantilla) dentro de la ventana de 24 horas que se abre cada vez que la familia te escribe.",
        ],
      },
      {
        type: "p",
        content:
          "El cambio que más importa para una escuela llegó el 1 de octubre de 2026: Meta empezó a cobrar los mensajes de servicio, que no se cobraban desde noviembre de 2024, y también los mensajes de utilidad enviados dentro de la ventana de 24 horas, que eran gratis desde julio de 2025. Para los mensajes de servicio no hay descuentos por volumen; para utilidad y autenticación sí existen escalones de volumen mensuales.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Si leíste que WhatsApp regala 1.000 conversaciones al mes, esa regla era del modelo viejo por conversación. En la documentación vigente de Meta no aparece ninguna cuota mensual gratuita de mensajes de servicio. Lo que sí sigue gratis es la ventana de 72 horas que se abre cuando alguien te escribe desde un anuncio de clic a WhatsApp o desde el botón de una página de Facebook.",
      },
      { type: "h3", content: "Qué no te cobra Meta" },
      {
        type: "ul",
        items: [
          "Los mensajes que te mandan las familias: se cobra lo que envía la escuela, no lo que recibe.",
          "Los mensajes dentro de la ventana de 72 horas de un anuncio de clic a WhatsApp o del botón de Facebook.",
          "Nada por tener el número conectado si no envías mensajes.",
        ],
      },
      { type: "h2", content: "Cuánto le sale a una escuela: un cálculo con números" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo, no un cliente real: una escuela de 80 alumnos que usa el bot para cobrar, recibir comprobantes y atender a quienes preguntan por inscripciones. Contamos solo los mensajes que envía la escuela.",
      },
      {
        type: "table",
        headers: ["Uso en el mes", "Mensajes enviados", "Categoría", "Costo aprox. (COP)"],
        rows: [
          ["Recordatorios de cobro (80 familias, promedio 2 avisos)", "160", "Utilidad", "$471"],
          ["Respuestas a comprobantes (80 pagos, 2 mensajes cada uno)", "160", "Servicio", "$471"],
          ["Preguntas de familias: horarios, saldo, enlace de pago", "150", "Servicio", "$442"],
          ["Prospectos: precios y clase de cortesía (25 personas, 6 mensajes)", "150", "Servicio", "$442"],
          ["Total sin marketing", "620", "", "≈ $1.826"],
          ["Una campaña de marketing a 200 contactos", "200", "Marketing", "≈ $9.205"],
        ],
      },
      {
        type: "p",
        content:
          "La conclusión práctica: el costo de WhatsApp para operar una escuela está en el orden de un par de miles de pesos al mes. Lo que dispara la cuenta es el marketing masivo, que cuesta unas 15 veces más por mensaje. Si quieres anunciar un campamento a toda tu base de datos, puede salir más barato hacerlo por correo o con un aviso en la app, y reservar WhatsApp para lo transaccional.",
      },
      { type: "h2", content: "Por qué SportMaps no cobra el asistente" },
      {
        type: "p",
        content:
          "La mayoría de herramientas de WhatsApp para negocios cobran una mensualidad por el bot o venden paquetes de conversaciones con un margen sobre la tarifa de Meta. Nosotros decidimos no hacerlo por una razón simple: el bot es la puerta de entrada al cobro. Si el asistente lee el comprobante y deja el pago listo para aprobar, la escuela cobra más rápido y usa más la plataforma, y ahí es donde SportMaps gana con sus planes. Cobrar el bot aparte haría que las escuelas pequeñas no lo activaran, y son justamente las que más horas pierden revisando capturas.",
      },
      {
        type: "p",
        content:
          "Por eso la factura de Meta llega directo a la escuela, con su tarjeta, sin intermediarios ni recargos de SportMaps. Tú ves en el administrador de WhatsApp de Meta exactamente cuántos mensajes enviaste y cuánto pagaste.",
      },
      { type: "h2", content: "Qué hace el asistente por ese costo" },
      {
        type: "ul",
        items: [
          "Lee en segundos el comprobante que manda la familia (monto, fecha, referencia, cuenta destino), lo cruza contra el cobro y lo deja listo para que la escuela lo apruebe con un toque.",
          "Responde a la familia cuánto debe y le manda el enlace corto de pago, sin que tenga que iniciar sesión.",
          "Envía los recordatorios de cobro en los días -3, 0, +3, +10 y +20 respecto al vencimiento, por WhatsApp o por correo.",
          "Atiende prospectos: responde precios y horarios, sugiere el grupo según la edad y agenda la clase de cortesía.",
          "Pasa la conversación a una persona de la escuela cuando no sabe qué responder.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "El asistente no aprueba pagos por su cuenta. Lee, cruza y deja el comprobante listo; la decisión final la toma la escuela. Así un comprobante dudoso nunca se aplica solo.",
      },
      { type: "h2", content: "Pasos para activarlo" },
      {
        type: "ol",
        items: [
          "Elige el número que usará la escuela. Lo ideal es un número de la escuela, no el celular personal de la directora.",
          "Conecta ese número con Meta desde SportMaps mediante el registro integrado (Embedded Signup). Meta pide verificar el negocio y el nombre que se mostrará.",
          "Registra un método de pago en el administrador de WhatsApp de Meta. Ahí es donde Meta cobra los mensajes.",
          "Carga en SportMaps las cuentas o llaves donde recibes pagos, para que el bot pueda cruzar la cuenta destino de cada comprobante.",
          "Activa los recordatorios de cobro y pide a las familias que acepten recibir mensajes de la escuela por WhatsApp.",
        ],
      },
      { type: "h2", content: "Cuándo no te conviene" },
      {
        type: "p",
        content:
          "Si tu escuela tiene menos de 15 alumnos, cobras todo en efectivo en la cancha y nadie te manda capturas, el bot te ahorra poco. Tampoco es para quien quiere usar WhatsApp como canal de publicidad masiva: ahí el costo de Meta sí pesa y la herramienta correcta es otra. Y si no estás dispuesto a pasar la verificación de negocio de Meta, todavía no podrás conectar tu número.",
      },
      {
        type: "cta",
        title: "Activa WhatsApp IA sin pagar por el bot",
        description:
          "Está incluido en todos los planes, también en Free Start. Solo pagas a Meta los mensajes que envías.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "whatsapp-business-api-escuelas-deportivas",
      "recordatorios-de-pago-por-whatsapp-automaticos",
      "cuanto-cuesta-software-escuela-deportiva-2026",
    ],
    about: [
      "WhatsApp Business Platform",
      "precios de mensajes de WhatsApp en Colombia",
      "cobranza en escuelas deportivas",
      "asistentes conversacionales con IA",
    ],
    mentions: ["Meta", "WhatsApp Business Platform", "WhatsApp", "Facebook", "SportMaps"],
    faqs: [
      {
        question: "¿Cuánto cobra WhatsApp por mensaje en Colombia en 2026?",
        answer:
          "Según la hoja oficial de Meta en pesos, vigente desde el 1 de octubre de 2026, un mensaje de servicio, de utilidad o de autenticación cuesta $2,9455 y uno de marketing $46,0227. En dólares son USD 0,0008 y USD 0,0125. Meta puede actualizar las tarifas el primer día de cada trimestre.",
      },
      {
        question: "¿El WhatsApp con IA de SportMaps tiene costo?",
        answer:
          "No. SportMaps no cobra el asistente ni vende paquetes de conversaciones, en ningún plan, incluido Free Start. Lo único que paga la escuela son los mensajes que Meta factura directo a su tarjeta.",
      },
      {
        question: "¿Sigue habiendo 1.000 conversaciones gratis en WhatsApp Business?",
        answer:
          "Esa regla pertenecía al modelo viejo de cobro por conversación. Desde julio de 2025 Meta cobra por mensaje y desde el 1 de octubre de 2026 también cobra los mensajes de servicio; en su documentación vigente no aparece una cuota mensual gratuita. Lo que sigue gratis son los mensajes dentro de la ventana de 72 horas de un anuncio de clic a WhatsApp.",
      },
      {
        question: "¿Cuánto paga al mes una escuela de 80 alumnos por WhatsApp?",
        answer:
          "Con un uso normal de cobros, comprobantes, preguntas y prospectos, unos 600 mensajes al mes, la cuenta con Meta ronda los $1.800 a $2.000. Es un ejemplo ilustrativo: si además envías campañas de marketing, cada mensaje de ese tipo cuesta unos $46.",
      },
      {
        question: "¿Los mensajes que me mandan los papás se cobran?",
        answer:
          "No. Meta cobra los mensajes que envía el número de la escuela, no los que recibe. Si un papá te escribe diez veces y tú respondes dos, pagas dos mensajes.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Recordatorios de pago automáticos
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "recordatorios-de-pago-por-whatsapp-automaticos",
    title: "Recordatorios de pago por WhatsApp automáticos: cuándo enviarlos y qué decir",
    excerpt:
      "La cadencia que usa SportMaps (días -3, 0, +3, +10 y +20), los textos que funcionan, qué dice la Ley 2300 sobre la cobranza y cuánto cuesta cada aviso con la tarifa de Meta.",
    category: "WhatsApp IA",
    readTime: "8 min",
    date: "2 Oct 2026",
    isoDate: "2026-10-02",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un recordatorio de pago por WhatsApp funciona cuando llega en el momento justo, dice cuánto y para quién, y trae el enlace para pagar sin iniciar sesión. En SportMaps los recordatorios salen solos en cinco momentos respecto a la fecha de vencimiento: 3 días antes, el día del vencimiento, y 3, 10 y 20 días después. Salen por WhatsApp a las familias que aceptaron recibir mensajes y por correo a las demás, siempre en días hábiles a las 8:00 a. m. y nunca más de un mensaje de cobro por familia al día.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Automatiza cinco avisos (-3, 0, +3, +10, +20), con el nombre del atleta, el monto y un enlace corto de pago. Usa un tono amable al inicio y directo después del día 10. Cada aviso por WhatsApp le cuesta a la escuela unos $3 de tarifa de Meta; el correo no tiene costo por mensaje.",
      },
      { type: "h2", content: "Por qué automatizar y no mandarlos a mano" },
      {
        type: "p",
        content:
          "Mandar recordatorios a mano tiene tres problemas. El primero es el tiempo: escribir uno por uno a 80 familias se come una tarde. El segundo es la inconsistencia: a unos les escribes el día 2 y a otros el 9, y eso genera la sensación de trato desigual. El tercero es emocional: cobrarle a un papá que conoces desde hace años incomoda, y cuando incomoda, se pospone. Un recordatorio automático quita a la persona de en medio. No es la directora cobrando, es el sistema recordando.",
      },
      { type: "h2", content: "La cadencia: cuándo sale cada aviso" },
      {
        type: "table",
        headers: ["Día respecto al vencimiento", "Aviso", "Tono", "Canal"],
        rows: [
          ["-3", "Recordatorio previo", "Informativo: se acerca la fecha", "WhatsApp o correo"],
          ["-1", "Mañana vence", "Informativo", "Solo WhatsApp"],
          ["0", "Vence hoy", "Informativo, con enlace", "WhatsApp o correo"],
          ["+3", "Pendiente suave", "Amable: puede ser un olvido", "WhatsApp o correo"],
          ["+10", "Pendiente directo", "Directo: indica los días de vencido", "WhatsApp o correo"],
          ["+20", "Aviso final", "Firme y respetuoso", "WhatsApp o correo"],
        ],
      },
      {
        type: "p",
        content:
          "Después del día 23 no sale ningún aviso adicional por esta vía. Esa deuda queda en el estado de cuenta mensual de la familia. Así, si activas los recordatorios en una escuela con deudas viejas, no se dispara una avalancha de últimos avisos el primer día.",
      },
      { type: "h3", content: "Por qué días hábiles y a las 8:00 a. m." },
      {
        type: "p",
        content:
          "La Ley 2300 de 2023 regula horarios y frecuencia de los contactos de cobranza en Colombia. Discutir si aplica o no a la mensualidad de una escuela deportiva es un tema para tu abogado; nosotros la tomamos como estándar mínimo. Por eso los avisos salen solo en días hábiles, a las 8:00 a. m. hora de Bogotá, y cada familia recibe como máximo un mensaje de cobro al día. Si un escalón cae en domingo o festivo, sale el siguiente día hábil, siempre que el texto siga siendo cierto: un «vence hoy» no se manda el lunes.",
      },
      { type: "h2", content: "Qué debe decir un buen recordatorio" },
      {
        type: "ol",
        items: [
          "A quién: el nombre del atleta. Si la familia tiene dos hijos con cobros en el mismo momento, va un solo mensaje con los dos nombres y el total.",
          "Qué: el concepto (mensualidad de octubre, inscripción) y el monto exacto en pesos.",
          "Cuándo: la fecha de vencimiento o los días que lleva vencido.",
          "Cómo pagar: un enlace corto que abre el cobro y permite pagar sin iniciar sesión, o los datos para transferir y la indicación de mandar el comprobante por el mismo chat.",
          "Salida humana: a quién escribir si hay un error o si necesita un acuerdo.",
        ],
      },
      {
        type: "quote",
        content:
          "Hola, María. Te recordamos que la mensualidad de octubre de Samuel ($120.000) vence el 5 de octubre. Puedes pagar aquí: [enlace]. Si ya pagaste, envíanos el comprobante por este chat.",
        author: "Ejemplo de texto de recordatorio previo",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Los recordatorios por WhatsApp usan plantillas de mensaje que Meta revisa y aprueba antes de que puedas enviarlas, en la categoría de utilidad. Un texto con tono promocional dentro de un recordatorio puede hacer que Meta lo reclasifique como marketing, que cuesta unas 15 veces más.",
      },
      { type: "h2", content: "WhatsApp o correo: cada familia por un solo canal" },
      {
        type: "p",
        content:
          "Para mandar plantillas por WhatsApp, Meta exige que la persona haya aceptado recibir mensajes de tu negocio. Por eso SportMaps manda el recordatorio por WhatsApp solo a las familias con ese consentimiento, y por correo a las que no lo tienen. Nunca por los dos canales a la vez: duplicar el mismo cobro por dos vías se siente como acoso, no como recordatorio.",
      },
      {
        type: "table",
        headers: ["", "WhatsApp", "Correo"],
        rows: [
          ["Tasa de lectura esperada", "Alta: la familia vive en WhatsApp", "Menor: se pierde entre promociones"],
          ["Requisito", "Consentimiento de la familia y plantilla aprobada por Meta", "Correo válido de la familia"],
          ["Costo por aviso", "≈ $2,95 (tarifa de utilidad de Meta en Colombia)", "Sin costo por mensaje para la escuela"],
          ["Respuesta", "La familia puede responder o mandar el comprobante ahí mismo", "Normalmente nadie responde"],
        ],
      },
      { type: "h2", content: "Cuánto cuestan los recordatorios con la tarifa de Meta" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: una escuela de 100 alumnos. Supón que 60 familias pagan después del primer aviso, 25 después del día 0, 10 después del día 3 y 5 llegan hasta el día 10. Eso da unos 60 + 50 + 30 + 20 = 160 mensajes de utilidad en el mes, más los avisos de -1 por WhatsApp. Redondeando a 250 mensajes, a $2,9455 cada uno, la cuenta con Meta es de unos $736 al mes. SportMaps no cobra nada por enviarlos.",
      },
      { type: "h2", content: "Errores comunes que vale la pena evitar" },
      {
        type: "ul",
        items: [
          "Mandar el recordatorio desde el celular personal de la directora: la familia responde a cualquier hora y la conversación se vuelve personal.",
          "Escribir en el grupo de WhatsApp quién debe: expone a las familias frente a las demás y puede chocar con la protección de datos.",
          "No incluir el monto: obliga a la familia a preguntar y retrasa el pago.",
          "Amenazar con sacar al niño del equipo. En SportMaps la mora no cancela la inscripción automáticamente; el recargo por mora es opcional y lo define la escuela.",
          "Seguir mandando avisos a quien ya pagó: cuando el pago se aprueba, el cobro deja de estar pendiente y la cadena se detiene.",
        ],
      },
      { type: "h2", content: "Cómo se configura en SportMaps" },
      {
        type: "ol",
        items: [
          "Conecta el número de WhatsApp de la escuela con Meta (registro integrado).",
          "Revisa que cada atleta tenga su cobro con fecha de vencimiento y monto.",
          "Activa los recordatorios de cobro por WhatsApp y, si quieres respaldo, los de correo.",
          "Pide a las familias que acepten mensajes por WhatsApp desde la invitación o desde la app.",
          "Revisa en el panel los comprobantes que llegan como respuesta y apruébalos.",
        ],
      },
      { type: "h2", content: "Cuándo no conviene automatizar" },
      {
        type: "p",
        content:
          "Si tu escuela negocia cada pago de forma individual, con descuentos que cambian mes a mes y sin fechas de vencimiento claras, un recordatorio automático va a decir montos equivocados. Primero ordena los cobros (inscripción una vez, mensualidad fija, fecha de vencimiento), y después automatiza. Un recordatorio con un monto errado hace más daño que no mandar ninguno.",
      },
      {
        type: "cta",
        title: "Recordatorios que salen solos",
        description:
          "Cadencia -3, 0, +3, +10 y +20 por WhatsApp y correo, con enlace corto de pago. Incluido en todos los planes.",
        href: "/escuelas",
        label: "Ver cómo funciona",
      },
    ],
    related: [
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
      "leer-comprobantes-de-pago-con-ia",
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
    ],
    about: [
      "recordatorios de pago",
      "cobranza de mensualidades",
      "WhatsApp Business Platform",
      "Ley 2300 de 2023",
    ],
    mentions: ["WhatsApp", "Meta", "SportMaps"],
    faqs: [
      {
        question: "¿Cuántos días antes recordar el pago de la mensualidad?",
        answer:
          "Tres días antes es un buen primer aviso: da tiempo de pagar sin sentirse presionado. SportMaps envía además un aviso el día del vencimiento y luego a los 3, 10 y 20 días si el cobro sigue pendiente.",
      },
      {
        question: "¿Cómo mandar recordatorios de pago por WhatsApp automáticamente?",
        answer:
          "Necesitas conectar el número de la escuela a WhatsApp Business Platform de Meta, tener plantillas de mensaje aprobadas y el consentimiento de cada familia. En SportMaps eso queda integrado: los avisos salen solos según la fecha de vencimiento de cada cobro.",
      },
      {
        question: "¿Cuánto cuesta enviar un recordatorio de pago por WhatsApp?",
        answer:
          "Un recordatorio de cobro es un mensaje de utilidad, y en Colombia Meta lo cobra a $2,9455 desde el 1 de octubre de 2026. SportMaps no agrega ningún cobro por el envío.",
      },
      {
        question: "¿Es legal enviar recordatorios de cobro por WhatsApp?",
        answer:
          "Sí, con reglas. La Ley 2300 de 2023 limita horarios y frecuencia de la cobranza, y la Ley 1581 protege los datos personales. SportMaps envía solo en días hábiles a las 8:00 a. m., máximo un mensaje de cobro por familia al día y solo a quien aceptó recibir mensajes.",
      },
      {
        question: "¿Qué pasa si la familia ya pagó y le llega el recordatorio?",
        answer:
          "Cuando la escuela aprueba el pago, el cobro deja de estar pendiente y no salen más avisos. Si el pago se hizo pero el comprobante no se ha enviado, la familia puede mandarlo por el mismo chat y queda listo para que la escuela lo apruebe.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Leer comprobantes con IA
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "leer-comprobantes-de-pago-con-ia",
    title: "Leer comprobantes de pago con IA: cómo funciona y qué revisa antes de aprobar",
    excerpt:
      "Qué extrae la IA de una captura de Nequi, Bancolombia o Daviplata, los diez controles que corre antes de dejar un pago listo para aprobar y por qué la decisión final sigue siendo de la escuela.",
    category: "WhatsApp IA",
    readTime: "8 min",
    date: "24 Sep 2026",
    isoDate: "2026-09-24",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Leer un comprobante de pago con IA significa que un modelo extrae de la captura el monto, la fecha, la referencia y la cuenta destino, y que después un conjunto de reglas fijas compara esos datos con el cobro y con las cuentas de la escuela. En SportMaps la IA solo extrae; las reglas deciden si el comprobante queda en verde (listo para aprobar con un toque), en amarillo (necesita que alguien lo mire) o en rojo (hay algo imposible, como un comprobante ya usado). La escuela siempre da la aprobación final.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "La IA lee la captura en segundos; las reglas revisan cuenta destino, monto, fecha, referencia repetida, imagen repetida y señales de manipulación. El resultado es un semáforo con los motivos a la vista. Nada se aprueba a ciegas: la escuela confirma.",
      },
      { type: "h2", content: "El problema que resuelve" },
      {
        type: "p",
        content:
          "En Colombia la mayoría de las mensualidades de escuelas deportivas se pagan por transferencia: Nequi, Bancolombia, Daviplata, llaves Bre-B. La familia paga y manda una captura. Alguien en la escuela tiene que abrir cada imagen, buscar el monto, confirmar que el dinero llegó a la cuenta correcta, encontrar al atleta y marcar el pago. Con 100 alumnos son 100 capturas al mes, muchas recortadas, borrosas o repetidas. Ese trabajo es justo el que la IA hace bien: leer rápido y no cansarse.",
      },
      { type: "h2", content: "Qué extrae la IA de cada captura" },
      {
        type: "table",
        headers: ["Dato", "Para qué sirve", "Ejemplo"],
        rows: [
          ["Monto", "Compararlo con el valor del cobro", "$120.000"],
          ["Fecha", "Verificar que el pago sea reciente y no futuro", "3 de octubre de 2026"],
          ["Referencia", "Detectar si el mismo comprobante ya se usó", "M01914211"],
          ["Cuenta o llave destino", "Confirmar que el dinero fue a la escuela", "Llave Bre-B o celular Nequi"],
          ["Tipo de documento", "Saber si es un comprobante o una lista de movimientos", "Comprobante individual"],
        ],
      },
      { type: "h2", content: "Los controles que corren antes de dejarlo listo" },
      {
        type: "p",
        content:
          "Todos los controles se evalúan siempre, sin cortar en el primero que falla, para que quien revisa vea el cuadro completo. El resultado final es el peor nivel encontrado.",
      },
      {
        type: "table",
        headers: ["Control", "Qué revisa", "Si falla"],
        rows: [
          ["¿Es un comprobante?", "Que la imagen sea un soporte de pago", "Rojo"],
          ["¿Es una lista de movimientos?", "Que no sea un extracto con varias transacciones", "Rojo"],
          ["Campos legibles", "Que se lean los datos clave", "Amarillo: se pide una captura completa"],
          ["Cuenta destino", "Que el dinero haya ido a una cuenta registrada de la escuela", "Amarillo o rojo según el caso"],
          ["Monto", "Que coincida con el valor esperado del cobro", "Amarillo"],
          ["Fecha", "Que no sea futura ni más vieja que la ventana permitida (5 días por defecto)", "Rojo si es futura; amarillo si es vieja"],
          ["Referencia repetida", "Que la referencia no se haya usado antes en la escuela", "Rojo"],
          ["Imagen repetida", "Que la misma imagen no se haya subido antes", "Rojo"],
          ["Forma de la referencia", "Que la referencia no esté cortada o sea implausible", "Amarillo"],
          ["Posible manipulación", "Texto que no corresponde a un comprobante bancario", "Amarillo: revisión manual obligatoria"],
        ],
      },
      { type: "h3", content: "Cuando la cuenta destino no coincide" },
      {
        type: "p",
        content:
          "Es el control más importante, porque es donde está el fraude más común: una captura real de un pago hecho a otra persona. Si el destino no aparece entre las cuentas registradas de la escuela, el comprobante se marca con el motivo «cuenta destino no coincide». Hay un matiz: si el dinero sí fue a la escuela, pero a una llave que ella reserva para otro concepto (por ejemplo, una cuenta solo para inscripciones), el caso queda en amarillo y no en rojo. Rechazarlo haría que la familia pagara dos veces por un error de canal.",
      },
      { type: "h3", content: "Cuando el comprobante ya se usó" },
      {
        type: "p",
        content:
          "La IA normaliza la referencia (mayúsculas, sin espacios ni guiones) y la compara con todas las que ya se registraron en la escuela. Además calcula una huella de la imagen. Si la referencia o la imagen se repiten, el comprobante queda en rojo con el mensaje «este comprobante ya fue utilizado». Es la defensa contra el mismo pago aplicado a dos meses o a dos hermanos.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Calibramos las formas de referencia con comprobantes reales de bancos colombianos. Una lección: el banco que dice la captura no es confiable, porque una transferencia rotulada «Bancolombia» puede traer una referencia de Nequi o de Bre-B. Por eso una referencia con forma desconocida ya no se considera sospechosa; solo se marca la que está cortada o es demasiado corta para ser real.",
      },
      { type: "h2", content: "Qué ve la escuela" },
      {
        type: "ol",
        items: [
          "La familia manda la captura por WhatsApp o la sube en la app.",
          "En segundos, la IA lee los datos y las reglas producen el semáforo con sus motivos.",
          "El asistente responde a la familia que recibió el comprobante.",
          "En el panel, la escuela ve el comprobante, los datos leídos y el motivo de cada alerta.",
          "Si está en verde, aprueba con un toque. Si está en amarillo o rojo, revisa el motivo y decide.",
          "Al aprobarse, el cobro queda pagado y se detienen los recordatorios.",
        ],
      },
      { type: "h2", content: "Lo que la IA no hace" },
      {
        type: "ul",
        items: [
          "No aprueba pagos por su cuenta: la aprobación automática está apagada y la decisión es de la escuela.",
          "No consulta tu cuenta bancaria. Verifica que el comprobante sea coherente, no que el dinero haya entrado; para eso está la conciliación con tu extracto.",
          "No obedece instrucciones escritas dentro de la imagen. Si un comprobante trae texto dirigido al sistema, se marca como posible manipulación.",
          "No reemplaza a una pasarela. Si quieres confirmación bancaria automática, el pago por Wompi o Mercado Pago llega confirmado por la pasarela y no necesita comprobante.",
        ],
      },
      { type: "h2", content: "IA de comprobantes contra revisar a mano" },
      {
        type: "table",
        headers: ["", "A mano", "Con IA en SportMaps"],
        rows: [
          ["Tiempo por comprobante", "Minutos: abrir, leer, buscar al atleta, marcar", "Segundos para leer; un toque para aprobar"],
          ["Comprobante repetido", "Depende de la memoria de quien revisa", "Detectado por referencia y por imagen"],
          ["Cuenta destino equivocada", "Fácil de pasar por alto", "Se compara contra las cuentas registradas"],
          ["Trazabilidad", "Capturas sueltas en el chat", "Cada pago con su comprobante y sus motivos"],
          ["Decisión final", "La persona", "La persona"],
        ],
      },
      { type: "h2", content: "Cómo empezar" },
      {
        type: "ol",
        items: [
          "Registra en SportMaps todas las cuentas y llaves donde recibes pagos, y marca las que son solo para un concepto.",
          "Revisa que los cobros tengan el monto correcto: es lo que la IA usa para comparar.",
          "Conecta el número de WhatsApp de la escuela con Meta para recibir comprobantes por chat.",
          "Durante las primeras semanas, mira los amarillos con calma: te van a mostrar cuentas que olvidaste registrar.",
        ],
      },
      {
        type: "cta",
        title: "Deja de revisar capturas una por una",
        description:
          "La lectura de comprobantes con IA está incluida en todos los planes, también en Free Start.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "validacion-de-pagos-con-ia-en-segundos-whatsapp",
      "recordatorios-de-pago-por-whatsapp-automaticos",
    ],
    about: [
      "reconocimiento de comprobantes de pago",
      "inteligencia artificial aplicada a cobranza",
      "prevención de fraude en transferencias",
      "escuelas deportivas",
    ],
    mentions: ["Nequi", "Bancolombia", "Daviplata", "Davivienda", "Bre-B", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cómo validar un comprobante de Nequi o Bancolombia sin abrir la app del banco?",
        answer:
          "Revisa que el destino sea tu cuenta, que el monto y la fecha coincidan y que la referencia no se haya usado antes. SportMaps hace esa revisión con IA en segundos y te deja el comprobante listo para aprobar; aun así, la conciliación contra tu extracto es la única prueba de que el dinero entró.",
      },
      {
        question: "¿La IA aprueba los pagos sola?",
        answer:
          "No. La IA lee y las reglas marcan el comprobante en verde, amarillo o rojo con sus motivos. La escuela aprueba con un toque; ningún pago se aplica sin esa confirmación.",
      },
      {
        question: "¿Cómo detectar un comprobante de pago falso?",
        answer:
          "Las señales más comunes son una cuenta destino que no es la tuya, una referencia o imagen que ya se usó, una fecha futura o un monto que no cuadra. SportMaps revisa esas señales en cada comprobante y además marca el texto que no corresponde a un soporte bancario.",
      },
      {
        question: "¿Qué pasa si la captura está borrosa o cortada?",
        answer:
          "El comprobante queda en amarillo con el motivo de campos ilegibles o de cuenta destino ausente, y se le pide a la familia una captura completa donde se vean el monto y la cuenta a la que envió el dinero.",
      },
      {
        question: "¿Leer comprobantes con IA tiene costo en SportMaps?",
        answer:
          "No tiene costo en ningún plan. Si el comprobante llega por WhatsApp, la escuela solo paga a Meta la tarifa de los mensajes que envía su número, unos $3 por mensaje en Colombia.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Grupos de WhatsApp vs app
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "grupos-de-whatsapp-vs-app-escuela-deportiva",
    title: "Grupos de WhatsApp vs. app para tu escuela deportiva: qué usar para cada cosa",
    excerpt:
      "Los grupos son buenos para la conversación del equipo y malos para cobrar, inscribir y guardar datos de menores. Una guía para repartir el trabajo sin pedirle a nadie que abandone WhatsApp.",
    category: "Guías",
    readTime: "7 min",
    date: "17 Sep 2026",
    isoDate: "2026-09-17",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "No tienes que elegir entre grupos de WhatsApp y una app: lo que funciona es usar cada uno para lo que hace bien. Los grupos sirven para la conversación del equipo y los avisos rápidos del entrenador. Una plataforma como SportMaps sirve para lo que necesita registro y privacidad: inscripciones, cobros, comprobantes, asistencia, datos de los menores. Y el canal 1 a 1 de WhatsApp con un asistente une los dos mundos, porque la familia sigue en WhatsApp y la escuela tiene orden.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Deja en el grupo la logística del equipo. Saca del grupo todo lo que tenga que ver con plata, documentos y datos personales. Para eso usa el WhatsApp 1 a 1 de la escuela conectado a una plataforma, no el chat colectivo.",
      },
      { type: "h2", content: "Lo que el grupo hace bien" },
      {
        type: "ul",
        items: [
          "Todo el mundo ya lo tiene instalado y lo revisa varias veces al día.",
          "Sirve para avisos rápidos: «hoy entrenamos en la cancha 2», «llevar camiseta blanca».",
          "Crea comunidad: las fotos del partido, las felicitaciones, la coordinación para el transporte.",
          "No cuesta nada y no requiere enseñar a nadie.",
        ],
      },
      { type: "h2", content: "Dónde el grupo se rompe" },
      {
        type: "p",
        content:
          "El grupo falla cuando se le pide algo para lo que no fue diseñado. Estos son los problemas más comunes en escuelas deportivas:",
      },
      {
        type: "ul",
        items: [
          "Cobros: no hay forma de saber quién pagó sin revisar capturas una por una, y las capturas se pierden entre stickers y audios.",
          "Privacidad: en un grupo normal todos ven el número de todos. Publicar quién debe o compartir documentos de un menor expone a las familias.",
          "Información enterrada: el horario de la próxima semana queda debajo de 200 mensajes y la mitad de los papás no lo ve.",
          "Dependencia de una persona: si quien administra el grupo se va, se va con la historia.",
          "Sin registro: no queda constancia de asistencia, pagos ni autorizaciones.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Las escuelas manejan datos de menores de edad, que la Ley 1581 de 2012 trata con especial cuidado. Pedir la foto del documento de identidad o la EPS por el grupo, o publicar listas de deudores, es una práctica que conviene abandonar.",
      },
      { type: "h2", content: "Qué va en cada lugar" },
      {
        type: "table",
        headers: ["Tarea", "Grupo de WhatsApp", "WhatsApp 1 a 1 con asistente", "Plataforma (SportMaps)"],
        rows: [
          ["Aviso rápido de cancha u horario", "Sí", "No hace falta", "Además, aviso en calendario para familias"],
          ["Cobro de mensualidad", "No", "Recordatorio con enlace corto de pago", "Cobro con monto, vencimiento y estado"],
          ["Recibir comprobante", "No", "La familia lo manda y la IA lo lee", "Queda listo para aprobar"],
          ["Inscripción de un nuevo atleta", "No", "El asistente manda el enlace de inscripción", "Ficha del atleta y acudientes"],
          ["Preguntas de prospectos", "No", "Responde precios y agenda clase de cortesía", "Registro del prospecto"],
          ["Asistencia", "No", "No", "Manual, por QR o con torniquetes (adicional)"],
          ["Fotos y celebraciones", "Sí", "No", "Opcional"],
          ["Informe del deportista", "No", "No", "Informe mensual por correo y notificación"],
        ],
      },
      { type: "h2", content: "Por qué no pedirle a nadie que deje WhatsApp" },
      {
        type: "p",
        content:
          "Muchas plataformas intentan reemplazar WhatsApp con un chat propio dentro de su app. En la práctica, las familias no lo abren: la notificación de WhatsApp gana siempre. Por eso en SportMaps el canal principal con la familia sigue siendo WhatsApp, pero el 1 a 1 de la escuela, no el grupo. El asistente con IA responde ahí, manda los recordatorios, recibe los comprobantes y atiende a quien pregunta por inscripciones. La app queda para lo que necesita una pantalla: ver el estado de cuenta, el carnet digital del atleta o el calendario.",
      },
      { type: "h2", content: "Cómo hacer la transición en cuatro semanas" },
      {
        type: "ol",
        items: [
          "Semana 1: conecta el número de la escuela a WhatsApp Business Platform y carga a los atletas con sus acudientes en la plataforma.",
          "Semana 2: anuncia en el grupo que los pagos y comprobantes ya no se mandan ahí, sino al número de la escuela. Fija ese mensaje.",
          "Semana 3: activa los recordatorios de cobro automáticos y el enlace corto de pago.",
          "Semana 4: deja el grupo solo para logística del equipo. Si alguien manda una captura de pago al grupo, respóndele con el número de la escuela.",
        ],
      },
      { type: "h2", content: "Cuándo el grupo es suficiente" },
      {
        type: "p",
        content:
          "Si entrenas a un solo equipo de 12 niños, cobras en efectivo y conoces a todos los papás, un grupo y una libreta pueden bastar. El punto de quiebre suele aparecer cuando hay más de un grupo de edad, más de un entrenador o pagos por transferencia: ahí el tiempo que se pierde buscando capturas supera lo que cuesta ordenar el proceso. Recuerda que el plan Free Start de SportMaps es gratis hasta 20 alumnos e incluye el asistente de WhatsApp.",
      },
      { type: "h2", content: "Reglas de convivencia para el grupo que se queda" },
      {
        type: "ul",
        items: [
          "Solo administradores pueden cambiar la descripción y fijar mensajes.",
          "Nada de cobros, deudas ni documentos en el grupo.",
          "Horario para mensajes del entrenador, por ejemplo de 6:00 a. m. a 8:00 p. m.",
          "Los cambios de horario se publican también en el calendario de la escuela, para que no dependan de que alguien lea el chat.",
        ],
      },
      {
        type: "cta",
        title: "Ordena los cobros sin sacar a nadie de WhatsApp",
        description:
          "Empieza gratis hasta 20 alumnos con el asistente de WhatsApp incluido.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "validacion-de-pagos-con-ia-en-segundos-whatsapp",
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "excel-vs-software-escuela-deportiva",
    ],
    about: [
      "comunicación con familias en escuelas deportivas",
      "grupos de WhatsApp",
      "protección de datos de menores",
      "software de gestión deportiva",
    ],
    mentions: ["WhatsApp", "Meta", "SportMaps"],
    faqs: [
      {
        question: "¿Es mejor un grupo de WhatsApp o una app para la escuela de fútbol de mi hijo?",
        answer:
          "Para avisos rápidos del equipo, el grupo funciona. Para pagos, inscripciones y datos del niño, es mejor una plataforma con registro y privacidad. Lo ideal es combinar los dos y sacar del grupo todo lo que tenga que ver con plata y documentos.",
      },
      {
        question: "¿Se pueden cobrar las mensualidades por el grupo de WhatsApp?",
        answer:
          "Se puede, pero es mala idea: las capturas se pierden, no hay registro de quién pagó y publicar deudas expone a las familias. Es mejor cobrar por mensaje individual con un enlace de pago y recibir el comprobante por el chat 1 a 1 de la escuela.",
      },
      {
        question: "¿Es legal pedir documentos de los niños por WhatsApp?",
        answer:
          "La Ley 1581 de 2012 exige autorización y cuidado especial con los datos de menores. Pedirlos por un grupo donde todos ven todo es una mala práctica; es mejor que el acudiente los cargue en la ficha del atleta, con acceso restringido.",
      },
      {
        question: "¿Las familias tienen que descargar otra app?",
        answer:
          "No para lo básico. Con SportMaps la familia recibe recordatorios, paga con el enlace y manda el comprobante por WhatsApp. La app instalable es opcional, para ver estado de cuenta, calendario o carnet digital.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. WhatsApp Business API para escuelas
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "whatsapp-business-api-escuelas-deportivas",
    title: "WhatsApp Business API para escuelas deportivas: guía práctica 2026",
    excerpt:
      "Diferencias entre la app WhatsApp Business y la plataforma de Meta, qué es la ventana de 24 horas, cómo se aprueban las plantillas, qué pide la verificación y cómo conectar el número de tu escuela.",
    category: "WhatsApp IA",
    readTime: "8 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "WhatsApp Business API, que Meta hoy llama WhatsApp Business Platform, es la versión de WhatsApp que permite a un software enviar y recibir mensajes desde el número de tu escuela: recordatorios automáticos, respuestas de un asistente con IA, lectura de comprobantes. A diferencia de la app WhatsApp Business del celular, requiere conectar el número a Meta, verificar el negocio, usar plantillas aprobadas para escribir primero y pagar a Meta por mensaje enviado. En SportMaps esa conexión se hace con el registro integrado de Meta y el número queda a nombre de la escuela.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "La app WhatsApp Business sirve para atender a mano desde un celular. La plataforma sirve para automatizar. Para usarla necesitas un número, la verificación de tu negocio en Meta, plantillas aprobadas y un método de pago para los mensajes. SportMaps pone el software y el asistente sin costo.",
      },
      { type: "h2", content: "App WhatsApp Business vs. WhatsApp Business Platform" },
      {
        type: "table",
        headers: ["", "App WhatsApp Business", "WhatsApp Business Platform"],
        rows: [
          ["Para qué sirve", "Atender a mano desde el celular", "Conectar un software: automatizar y atender en equipo"],
          ["Costo de Meta", "Gratis", "Por mensaje enviado según categoría y país"],
          ["Automatización", "Mensajes de bienvenida y respuestas rápidas básicas", "Recordatorios, asistentes con IA, integraciones"],
          ["Escribir primero a un cliente", "Libre, a mano", "Solo con plantillas aprobadas por Meta"],
          ["Varias personas atendiendo", "Limitado a dispositivos vinculados", "Desde un panel, sin depender de un celular"],
          ["Verificación del negocio", "No obligatoria", "Requerida por Meta"],
        ],
      },
      { type: "h2", content: "Conceptos que debes conocer" },
      { type: "h3", content: "La ventana de atención de 24 horas" },
      {
        type: "p",
        content:
          "Cada vez que una familia le escribe a la escuela, se abre una ventana de 24 horas. Dentro de esa ventana puedes responder con mensajes libres, que Meta llama de servicio. Fuera de ella, solo puedes escribir con una plantilla aprobada. Por eso un recordatorio de cobro que sale el día -3 siempre es una plantilla: la familia no ha escrito antes.",
      },
      { type: "h3", content: "Plantillas y sus categorías" },
      {
        type: "p",
        content:
          "Una plantilla es un mensaje con estructura fija y espacios variables (nombre, monto, fecha) que Meta revisa antes de que puedas usarlo. Cada plantilla queda en una categoría: utilidad (algo que la familia ya tiene contigo, como un cobro), marketing (promociones) o autenticación (códigos). La categoría define el precio, así que escribir un recordatorio sin tono promocional importa.",
      },
      { type: "h3", content: "Consentimiento" },
      {
        type: "p",
        content:
          "Meta exige que la persona haya aceptado recibir mensajes de tu negocio antes de enviarle plantillas. En SportMaps solo se mandan recordatorios por WhatsApp a las familias que dieron ese consentimiento; a las demás les llegan por correo.",
      },
      { type: "h3", content: "Límites de envío y calidad" },
      {
        type: "p",
        content:
          "Meta limita cuántas personas distintas puedes contactar con plantillas en un periodo de 24 horas, y ese límite crece a medida que el número se usa bien. Si muchas familias bloquean o reportan tus mensajes, la calidad del número baja. La mejor forma de cuidarla es mandar solo lo que la familia espera recibir.",
      },
      { type: "h2", content: "Lo que cobra Meta en Colombia" },
      {
        type: "table",
        headers: ["Categoría", "Precio por mensaje (COP)", "Precio por mensaje (USD)"],
        rows: [
          ["Marketing", "$46,0227", "0,0125"],
          ["Utilidad", "$2,9455", "0,0008"],
          ["Autenticación", "$2,9455", "0,0008"],
          ["Servicio", "$2,9455", "0,0008"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Tarifas de la hoja oficial de Meta vigente desde el 1 de octubre de 2026, consultada el 14 de octubre de 2026. Desde esa fecha Meta cobra también los mensajes de servicio y las plantillas de utilidad enviadas dentro de la ventana de 24 horas. Sigue siendo gratis lo que se envía dentro de la ventana de 72 horas de un anuncio de clic a WhatsApp. La facturación en pesos colombianos está disponible desde abril de 2026 para cuentas creadas con esa moneda.",
      },
      { type: "h2", content: "Cómo conectar el número de tu escuela" },
      {
        type: "ol",
        items: [
          "Define qué número será el oficial de la escuela. Si hoy es el celular personal de alguien, considera que el número quedará asociado al negocio.",
          "Ten a mano los datos legales del negocio para la verificación de Meta (nombre, documentos y sitio web o página de la escuela).",
          "Desde SportMaps inicia el registro integrado de Meta: inicias sesión con Facebook, eliges o creas el portafolio del negocio y registras el número.",
          "Define el nombre visible del número. Meta lo revisa antes de aprobarlo.",
          "Agrega un método de pago en el administrador de WhatsApp de Meta para los mensajes.",
          "Aprueba las plantillas de recordatorio de cobro y activa el asistente.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Antes de conectar un número que hoy usas en tu celular, revisa con calma las opciones que Meta te muestra en el registro. Meta ofrece seguir usando la app WhatsApp Business en el mismo número en algunos casos, pero las condiciones las pone Meta y pueden cambiar; no lo des por hecho sin verlo en tu propio registro.",
      },
      { type: "h2", content: "Qué hace SportMaps encima de la plataforma" },
      {
        type: "ul",
        items: [
          "Identifica a la familia por el número de teléfono registrado en la ficha del acudiente, para responder con sus datos y no con información genérica.",
          "Lee los comprobantes con IA, los cruza con el cobro y los deja listos para que la escuela los apruebe con un toque.",
          "Envía los recordatorios de cobro en los días -3, 0, +3, +10 y +20 con enlace corto de pago, y respeta días hábiles y un mensaje de cobro por familia al día.",
          "Atiende prospectos: responde precios y horarios, manda el enlace de inscripción y agenda la clase de cortesía.",
          "Pasa la conversación a una persona de la escuela cuando hace falta.",
        ],
      },
      { type: "h2", content: "Errores que conviene evitar" },
      {
        type: "ul",
        items: [
          "Conectar el celular personal de la directora sin pensar en qué pasa con sus chats personales.",
          "Escribir plantillas de cobro con frases promocionales, que pueden terminar clasificadas como marketing.",
          "Mandar campañas masivas desde el número de cobros: si te bloquean, afecta la calidad del número que usas para cobrar.",
          "Contratar a un intermediario que cobra paquetes de conversaciones con margen, cuando la tarifa de Meta por mensaje es pública.",
        ],
      },
      {
        type: "cta",
        title: "Conecta tu número sin pagar por el software",
        description:
          "SportMaps incluye la integración con WhatsApp Business Platform y el asistente con IA en todos los planes.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
      "recordatorios-de-pago-por-whatsapp-automaticos",
      "cobranza-whatsapp-ai-sportmaps",
    ],
    about: [
      "WhatsApp Business Platform",
      "WhatsApp Cloud API",
      "plantillas de mensajes de WhatsApp",
      "automatización de cobros",
    ],
    mentions: ["Meta", "WhatsApp Business", "WhatsApp Business Platform", "Facebook", "SportMaps"],
    faqs: [
      {
        question: "¿Qué diferencia hay entre WhatsApp Business y WhatsApp Business API?",
        answer:
          "La app WhatsApp Business es para atender a mano desde un celular y es gratis. La API, hoy WhatsApp Business Platform, permite conectar un software para automatizar mensajes; requiere verificación del negocio, plantillas aprobadas y pagar a Meta por mensaje enviado.",
      },
      {
        question: "¿Cuánto cuesta WhatsApp Business API en Colombia?",
        answer:
          "Desde el 1 de octubre de 2026 Meta cobra en Colombia $2,9455 por mensaje de servicio, utilidad o autenticación y $46,0227 por mensaje de marketing. El software que lo usa puede cobrar aparte; SportMaps no cobra el asistente.",
      },
      {
        question: "¿Qué es la ventana de 24 horas de WhatsApp?",
        answer:
          "Es el periodo que se abre cada vez que un cliente le escribe a tu negocio. Dentro de esas 24 horas puedes responder con mensajes libres; fuera de ella solo puedes escribir con plantillas aprobadas por Meta.",
      },
      {
        question: "¿Puedo usar el mismo número de WhatsApp de mi escuela?",
        answer:
          "Sí, puedes conectar el número que ya usa la escuela mediante el registro integrado de Meta. Antes de hacerlo, revisa en el registro qué opciones te da Meta para seguir usando ese número en la app del celular.",
      },
      {
        question: "¿Necesito verificar mi negocio en Meta para usar el bot?",
        answer:
          "Sí. Meta exige verificar el negocio para operar en WhatsApp Business Platform y revisa el nombre visible del número. Ten a mano los datos legales de la escuela antes de empezar.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Validación de pagos con IA en segundos (pedido del CEO)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "validacion-de-pagos-con-ia-en-segundos-whatsapp",
    title: "Validación de pagos con IA en segundos por WhatsApp, sin cambiar de plataforma",
    excerpt:
      "El asistente lee el comprobante en segundos y lo deja listo para aprobar con un toque. Tus familias siguen en WhatsApp; SportMaps entra como complemento. Cómo se reparten el trabajo y qué pasa cuando la IA duda.",
    category: "WhatsApp IA",
    readTime: "7 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Validar un comprobante de pago con IA toma segundos, no horas. Cuando una familia manda la captura por WhatsApp, el asistente de SportMaps lee el monto, la fecha, la referencia y la cuenta destino, lo cruza contra el cobro de ese atleta, le responde a la familia y deja el pago listo para que la escuela lo apruebe con un toque. En las escuelas que lo usan, el tiempo de revisión de cobros baja más de un 70 %. Y nadie tiene que cambiar de plataforma: las familias siguen en WhatsApp.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "No le pidas a tus familias que se muden a otra app. Ellas ya viven en WhatsApp; SportMaps se conecta a tu número y hace el trabajo pesado: lee comprobantes, manda recordatorios, responde a prospectos e inscribe. La escuela solo aprueba. Está incluido gratis en todos los planes.",
      },
      { type: "h2", content: "De horas a segundos: qué pasa con cada comprobante" },
      {
        type: "ol",
        items: [
          "La familia paga por Nequi, Bancolombia, Daviplata o una llave Bre-B y manda la captura al WhatsApp de la escuela.",
          "El asistente identifica a la familia por su número de teléfono y busca los cobros pendientes de sus hijos.",
          "La IA lee la captura: monto, fecha, referencia y cuenta destino.",
          "Las reglas comparan esos datos con el cobro y con las cuentas registradas de la escuela, y revisan si la referencia o la imagen ya se usaron.",
          "El asistente le confirma a la familia que recibió el comprobante.",
          "En el panel, el pago aparece listo para aprobar, con los datos leídos y cualquier alerta a la vista. La escuela lo aprueba con un toque.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El asistente no aprueba pagos por su cuenta: la aprobación automática está apagada. La IA hace en segundos el trabajo de leer y cruzar; la decisión sigue siendo de la escuela.",
      },
      { type: "h2", content: "Por qué el tiempo de revisión baja más de un 70 %" },
      {
        type: "p",
        content:
          "Es lo que vemos en las escuelas que lo usan, y el cálculo es fácil de reproducir con tus propios números. Ejemplo ilustrativo, no un cliente real: una escuela que recibe 150 comprobantes al mes.",
      },
      {
        type: "table",
        headers: ["Paso por comprobante", "A mano", "Con el asistente"],
        rows: [
          ["Encontrar la captura en el chat y abrirla", "1 min", "0: llega sola al panel"],
          ["Leer monto, fecha, referencia y cuenta", "1 min", "Segundos, lo hace la IA"],
          ["Buscar al atleta y su cobro", "1,5 min", "0: lo identifica por el teléfono"],
          ["Revisar que no sea un comprobante repetido", "1 min", "0: lo compara contra todos los anteriores"],
          ["Marcar el pago y responder a la familia", "1,5 min", "Un toque para aprobar; la respuesta sale sola"],
          ["Total por comprobante", "≈ 6 min", "≈ 1 min, incluyendo mirar las alertas"],
          ["Total al mes (150 comprobantes)", "≈ 15 horas", "≈ 2,5 horas"],
        ],
      },
      {
        type: "p",
        content:
          "En ese ejemplo, la revisión pasa de unas 15 horas a unas 2,5 horas al mes: una reducción cercana al 83 %. Aunque dupliques el tiempo con el asistente para revisar con calma los casos dudosos, sigues por encima del 70 %. Cambia los minutos por los tuyos; si hoy alguien en tu escuela pasa una tarde por semana con capturas, el número se parece.",
      },
      { type: "h2", content: "No cambies de plataforma: usa la que tus familias ya tienen" },
      {
        type: "p",
        content:
          "Muchas herramientas piden que las familias descarguen una app nueva, creen una cuenta y aprendan otro chat. La mayoría no lo hace, y la escuela termina con dos canales a medias. Nuestra tesis es la contraria: no reinventamos la rueda, la usamos a tu favor. WhatsApp ya está en el celular de todas tus familias y lo abren decenas de veces al día. SportMaps se conecta a tu número y trabaja por detrás.",
      },
      {
        type: "p",
        content:
          "Todo es todo: cobros, comprobantes, recordatorios, inscripciones y avisos, desde el mismo WhatsApp. La familia recibe el recordatorio con un enlace corto de pago, paga sin iniciar sesión o manda el comprobante, pregunta su saldo y recibe la respuesta, todo en la misma conversación. Quien pregunta por inscripciones recibe precios, horarios y el grupo sugerido según la edad, y puede agendar la clase de cortesía ahí mismo.",
      },
      { type: "h2", content: "WhatsApp + plataforma: cómo se reparten el trabajo" },
      {
        type: "table",
        headers: ["Tarea", "WhatsApp (donde está la familia)", "SportMaps (donde está el orden)"],
        rows: [
          ["Recordar el pago", "Llega el aviso los días -3, 0, +3, +10 y +20 con enlace corto", "Calcula quién debe, cuánto y desde cuándo"],
          ["Pagar", "La familia paga con el enlace o transfiere", "Wompi o Mercado Pago confirman; el dinero va a la cuenta de la escuela"],
          ["Mandar el comprobante", "La familia envía la captura al chat", "La IA la lee y la cruza con el cobro"],
          ["Aprobar", "La familia recibe la confirmación", "La escuela aprueba con un toque y los recordatorios se detienen"],
          ["Atender prospectos", "Pregunta precios y agenda la clase de cortesía", "Registra al prospecto y la cortesía agendada"],
          ["Inscribir", "Recibe el enlace de inscripción", "Crea la ficha del atleta y vincula al acudiente"],
          ["Casos raros", "Una persona de la escuela responde", "El asistente le pasa la conversación con el contexto"],
        ],
      },
      { type: "h2", content: "Qué pasa cuando la IA duda" },
      {
        type: "p",
        content:
          "Un sistema que aprueba a ciegas es peor que uno lento. Por eso cada comprobante pasa por controles fijos y, cuando algo no cuadra, queda marcado con el motivo para que una persona lo revise.",
      },
      {
        type: "ul",
        items: [
          "Cuenta destino que no coincide: el dinero fue a una cuenta que la escuela no tiene registrada. Queda marcado para revisión. Si fue a una cuenta de la escuela reservada para otro concepto, también se marca, pero sin rechazarlo, para que la familia no pague dos veces.",
          "Comprobante repetido: si la referencia ya se usó en la escuela o la misma imagen ya se subió, se marca como «ya utilizado». Es la defensa contra aplicar un pago a dos meses o a dos hermanos.",
          "Monto distinto al cobro: se marca para que la escuela vea si fue un abono, un error o un pago de otro concepto.",
          "Fecha futura o muy vieja: una fecha futura se marca como imposible; una más vieja que la ventana permitida (5 días por defecto) se marca para revisión.",
          "Captura ilegible o sin cuenta destino visible: se pide una captura completa.",
          "Texto extraño dentro de la imagen, como instrucciones dirigidas al sistema: se marca como posible manipulación y va a revisión manual obligatoria.",
        ],
      },
      { type: "h2", content: "Gratis en todos los planes" },
      {
        type: "p",
        content:
          "SportMaps no cobra el asistente ni vende paquetes de conversaciones, en ningún plan, incluido Free Start hasta 20 alumnos. Cada escuela conecta su propio número con Meta. Lo único que se paga es la tarifa de Meta por los mensajes que envía tu número, directo a tu tarjeta: en Colombia, desde el 1 de octubre de 2026, unos $3 por mensaje de servicio o de utilidad (consulta del 14 de octubre de 2026). Para una escuela mediana eso suele ser un par de miles de pesos al mes.",
      },
      { type: "h2", content: "Cuándo no te va a cambiar la vida" },
      {
        type: "p",
        content:
          "Si casi todas tus familias pagan con tarjeta o PSE por la pasarela, no hay comprobantes que leer: la pasarela ya confirma el pago. Y si cobras en efectivo en la cancha, el asistente te sirve para recordar y para registrar, pero el ahorro de tiempo será menor. Donde más rinde es en escuelas que reciben transferencias y capturas por WhatsApp todos los meses.",
      },
      {
        type: "cta",
        title: "Valida pagos en segundos desde tu mismo WhatsApp",
        description:
          "Asistente con IA incluido en todos los planes. Tus familias no tienen que cambiar de app.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "leer-comprobantes-de-pago-con-ia",
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
    ],
    about: [
      "validación de pagos con inteligencia artificial",
      "cobranza por WhatsApp",
      "comprobantes de transferencia",
      "escuelas deportivas en Colombia",
    ],
    mentions: ["WhatsApp", "Meta", "Nequi", "Bancolombia", "Daviplata", "Bre-B", "Wompi", "Mercado Pago"],
    faqs: [
      {
        question: "¿Cuánto tarda la IA en validar un comprobante de pago?",
        answer:
          "Segundos. El asistente lee el monto, la fecha, la referencia y la cuenta destino, los cruza con el cobro y deja el pago listo para que la escuela lo apruebe con un toque.",
      },
      {
        question: "¿Tengo que dejar de usar WhatsApp para usar SportMaps?",
        answer:
          "No. SportMaps se conecta al número de WhatsApp de tu escuela y trabaja por detrás. Las familias siguen escribiendo, pagando y mandando comprobantes por WhatsApp.",
      },
      {
        question: "¿La IA puede aprobar un comprobante falso?",
        answer:
          "La IA no aprueba nada: la aprobación automática está apagada y la escuela confirma cada pago. Además, los comprobantes con cuenta destino distinta, referencia o imagen repetida, fecha imposible o texto extraño quedan marcados con su motivo antes de que alguien los vea.",
      },
      {
        question: "¿Cuánto tiempo ahorra validar pagos con IA?",
        answer:
          "En las escuelas que lo usan, el tiempo de revisión de cobros baja más de un 70 %. Como ejemplo ilustrativo, 150 comprobantes al mes pasan de unas 15 horas de revisión manual a unas 2,5 horas.",
      },
      {
        question: "¿Cuánto cuesta el bot de WhatsApp para validar pagos?",
        answer:
          "SportMaps no lo cobra en ningún plan. La escuela solo paga a Meta los mensajes que envía su número, unos $3 por mensaje de servicio o de utilidad en Colombia desde el 1 de octubre de 2026.",
      },
    ],
  },
];
