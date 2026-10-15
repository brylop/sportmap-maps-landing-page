import type { BlogPost } from "../blog-posts";

const AUTOR_CEO = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
};

const EQUIPO = {
  author: "Equipo SportMaps",
  authorRole: "Producto",
};

export const cobrosPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 1. Cómo cobrar mensualidades
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "como-cobrar-mensualidades-escuela-deportiva",
    title: "Cómo cobrar las mensualidades de una escuela deportiva sin perseguir a nadie",
    excerpt:
      "Guía paso a paso para montar un sistema de cobro de mensualidades que funcione solo: fecha de corte, canales de pago, recordatorios, registro de pagos manuales y qué hacer con quien no paga.",
    category: "Cobros y pagos",
    readTime: "8 min",
    date: "16 Sep 2026",
    isoDate: "2026-09-16",
    ...AUTOR_CEO,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para cobrar las mensualidades de una escuela deportiva sin perseguir a nadie necesitas cuatro cosas: una fecha de corte fija y conocida por todos, un cobro generado automáticamente para cada atleta al inicio del periodo, un enlace de pago que la familia pueda abrir desde el celular (PSE, Nequi, tarjeta) y recordatorios que salgan solos antes y después del vencimiento. Lo que se paga por transferencia o en efectivo se registra con su comprobante en el mismo sistema, para que haya una sola lista de quién debe y quién está al día.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El cobro se vuelve predecible cuando deja de depender de la memoria del director. Define una regla (fecha de corte, valor, recargo si lo hay), deja que el sistema genere los cobros y mande los recordatorios, y concentra tu tiempo solo en los casos que de verdad necesitan una conversación.",
      },
      { type: "h2", content: "Por qué el cobro manual se rompe al pasar de 40 alumnos" },
      {
        type: "p",
        content:
          "Con 15 o 20 alumnos, el cuaderno o el Excel aguantan: conoces a cada familia, sabes quién paga el 5 y quién el 15. El problema aparece cuando la escuela crece. Cada pago llega por un canal distinto (transferencia a Bancolombia, Nequi, efectivo en la cancha, un comprobante en el grupo de WhatsApp), y conciliar todo eso a fin de mes se vuelve una tarea de horas. Además, recordarle a alguien que debe es incómodo, así que se pospone, y la deuda crece.",
      },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: una escuela de 80 alumnos con mensualidad de $150.000 mueve $12.000.000 al mes. Si el 10 % paga tarde y nadie lo nota hasta el día 25, son $1.200.000 que la escuela financia sin querer, mes tras mes. No es un problema de que la gente no quiera pagar; casi siempre es un problema de fricción y de seguimiento.",
      },
      { type: "h2", content: "Paso a paso: el sistema de cobro que funciona solo" },
      {
        type: "ol",
        items: [
          "Define la fecha de corte y el periodo. Lo más común en Colombia es cobrar mes anticipado con pago del 1 al 5 o del 1 al 10. Escríbelo en el reglamento y en el formulario de inscripción.",
          "Separa la inscripción de la mensualidad. La inscripción se cobra una sola vez al entrar; la mensualidad se repite cada periodo. Mezclarlas genera cobros dobles y discusiones.",
          "Asigna un valor por atleta, no por grupo. Hermanos con descuento, becados o atletas con dos categorías necesitan su propio valor. Si el valor sale de una tabla genérica, alguien terminará pagando de más o de menos.",
          "Genera los cobros automáticamente al inicio de cada periodo. Cada atleta activo debe tener un cobro pendiente con su valor y su fecha de vencimiento, sin que nadie lo cree a mano.",
          "Ofrece un enlace de pago. Una pasarela como Wompi o Mercado Pago permite pagar con PSE, Nequi o tarjeta en dos minutos desde el celular, y el pago queda marcado solo.",
          "Programa recordatorios. Uno antes del vencimiento, uno el día del vencimiento y uno unos días después. Por correo y por WhatsApp, con el enlace de pago dentro del mensaje.",
          "Registra los pagos manuales el mismo día. Efectivo y transferencias directas se registran con el comprobante adjunto, para que el estado de cuenta de la familia esté siempre al día.",
          "Revisa una sola lista. Al día 10 (o el que definas) revisas quién sigue pendiente y decides caso por caso: llamada, acuerdo de pago o recargo si tu reglamento lo contempla.",
        ],
      },
      { type: "h2", content: "Canales de pago: qué ofrecer y cuánto cuesta cada uno" },
      {
        type: "p",
        content:
          "No hay un canal perfecto. Lo sensato es ofrecer dos o tres y saber cuánto te cuesta cada uno en dinero y en tiempo administrativo.",
      },
      {
        type: "table",
        headers: ["Canal", "Costo para la escuela", "Tiempo administrativo", "Cuándo conviene"],
        rows: [
          ["Efectivo en la sede", "$0 de comisión", "Alto: contar, guardar, registrar, llevar al banco", "Familias sin bancarizar o pagos puntuales"],
          ["Transferencia directa / Nequi", "$0 de comisión en la mayoría de cuentas", "Medio-alto: hay que verificar cada comprobante contra el extracto", "Familias que ya pagan así y lo prefieren"],
          ["Enlace de pasarela (Wompi, Mercado Pago)", "Comisión por transacción según la tarifa pública de la pasarela", "Bajo: el pago se marca solo", "La opción por defecto para la mayoría"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Tarifas públicas consultadas en oct 2026: Wompi publica 2,65 % + $700 + IVA por transacción exitosa en su plan Avanzado; Mercado Pago Colombia publica 3,29 % + IVA para dinero al instante en Link de pago. Revisa siempre la página oficial antes de decidir, porque cambian. Lo comparamos en detalle en nuestra guía Wompi vs Mercado Pago.",
      },
      { type: "h2", content: "Cómo redactar los recordatorios de cobro" },
      {
        type: "p",
        content:
          "Un buen recordatorio es corto, amable y accionable. Debe decir de quién es el cobro, qué periodo cubre, cuánto es, cuándo vence y cómo pagar en un clic. Nada de mensajes en mayúsculas ni de listas de morosos en el grupo: eso daña la relación con las familias y, en el caso de menores, expone datos que no deberías exponer.",
      },
      {
        type: "ul",
        items: [
          "Antes del vencimiento (3 a 5 días): «Hola, Laura. Te recordamos la mensualidad de octubre de Samuel por $150.000. Puedes pagarla aquí: [enlace]. Vence el 5 de octubre.»",
          "El día del vencimiento: el mismo mensaje, más corto, con el enlace.",
          "Después del vencimiento (3 a 7 días): «Hola, Laura. Vemos pendiente la mensualidad de octubre de Samuel. Si ya pagaste, responde este mensaje con el comprobante y lo validamos.»",
          "Siempre: un canal para responder. Muchas «deudas» son pagos hechos por transferencia que nadie registró.",
        ],
      },
      { type: "h2", content: "Qué hacer con quien no paga" },
      {
        type: "p",
        content:
          "Aquí está el error más caro: cancelar automáticamente la inscripción del atleta por mora. Un niño que deja de entrenar por un retraso de 10 días es un alumno que probablemente no vuelve, y una familia que habla mal de la escuela. La mora se gestiona con reglas claras y con conversación, no con un botón que expulsa.",
      },
      {
        type: "ul",
        items: [
          "Recargo por mora: solo si está en tu reglamento y lo comunicaste al inscribir. Que sea un valor fijo y razonable, no un castigo.",
          "Acuerdo de pago: para quien atraviesa un mal mes, dividir la deuda en dos pagos suele recuperar más que presionar.",
          "Conversación directa: a partir del segundo mes sin pagar, una llamada del director vale más que diez mensajes automáticos.",
          "Decisión de baja: la toma una persona, con contexto, nunca un proceso automático.",
        ],
      },
      { type: "h2", content: "Cuándo NO necesitas software para cobrar" },
      {
        type: "p",
        content:
          "Si tienes menos de 20 alumnos, todos pagan en efectivo y conoces a cada familia, una hoja de cálculo bien llevada puede ser suficiente. El software empieza a pagarse solo cuando el tiempo que gastas conciliando y recordando supera unas pocas horas al mes, o cuando tienes más de una sede o más de un entrenador recibiendo dinero.",
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps cada atleta tiene su valor de mensualidad y la inscripción se cobra aparte, una sola vez. Los cobros del periodo se generan automáticamente, cada familia recibe su enlace de pago por WhatsApp o correo, y los recordatorios salen solos. Las pasarelas Wompi y Mercado Pago vienen integradas en todos los planes, la plata va directo a la cuenta de la escuela y SportMaps no cobra comisión por la integración: solo aplica la tarifa de la pasarela.",
      },
      {
        type: "p",
        content:
          "Cuando una familia paga por transferencia y manda el comprobante por WhatsApp, el asistente con IA lo lee en segundos, extrae monto y referencia, lo cruza contra el cobro pendiente y lo deja listo para que la escuela lo apruebe con un toque. Cada escuela conecta su propio número de WhatsApp con Meta mediante el registro integrado. Los pagos en efectivo se registran a mano con su soporte. El recargo por mora es opcional y lo define cada escuela; la mora no cancela automáticamente al atleta. El plan Free Start ($0) cubre hasta 20 alumnos, y Escuela Start cuesta $69.000 al mes para hasta 50.",
      },
      {
        type: "cta",
        title: "Deja de perseguir pagos",
        description:
          "Mira qué plan se ajusta al tamaño de tu escuela. Pasarelas y WhatsApp IA vienen incluidos en todos, también en el gratuito.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    faqs: [
      {
        question: "¿Cuál es la mejor fecha para cobrar la mensualidad de una escuela deportiva?",
        answer:
          "La más usada en Colombia es mes anticipado con pago entre el 1 y el 5, o entre el 1 y el 10, porque coincide con las fechas de pago de nómina de muchas familias. Lo importante es que sea fija, que esté en el reglamento y que los recordatorios salgan siempre con la misma lógica.",
      },
      {
        question: "¿Cómo cobro la mensualidad de mi escuela de fútbol por Nequi o PSE?",
        answer:
          "Con una pasarela como Wompi o Mercado Pago generas un enlace de pago que la familia abre desde el celular y paga con PSE, tarjeta o, en el caso de Wompi, también con Nequi. El pago queda registrado automáticamente. La pasarela cobra una comisión por transacción según su tarifa pública.",
      },
      {
        question: "¿Es legal cobrar recargo por mora en una escuela deportiva?",
        answer:
          "Es una práctica común siempre que esté en el reglamento o contrato que la familia aceptó al inscribirse y que el valor sea razonable. Si tienes dudas sobre el monto o la forma, consúltalo con un abogado o con tu contador antes de aplicarlo.",
      },
      {
        question: "¿Debo sacar a un niño de la escuela si no paga la mensualidad?",
        answer:
          "No de forma automática. Lo recomendable es tener una secuencia: recordatorio, conversación, acuerdo de pago y, solo después, una decisión tomada por una persona con contexto. Sacar a un atleta por un retraso corto suele costar más de lo que se recupera.",
      },
      {
        question: "¿Qué hago con los pagos en efectivo si uso un sistema digital?",
        answer:
          "Regístralos el mismo día en el sistema como pago manual, con el recibo o una foto como soporte. Así el estado de cuenta de la familia queda al día y no le llegan recordatorios por algo que ya pagó.",
      },
    ],
    about: [
      "cobro de mensualidades",
      "escuelas deportivas en Colombia",
      "gestión de cartera",
      "pasarelas de pago",
    ],
    mentions: ["Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Bancolombia"],
    related: [
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "inscripcion-vs-mensualidad-escuela-deportiva",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. Wompi vs Mercado Pago
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "wompi-vs-mercado-pago-escuelas-deportivas",
    title: "Wompi vs Mercado Pago para escuelas deportivas: tarifas, medios de pago y cuál elegir",
    excerpt:
      "Comparativa con las tarifas públicas de octubre de 2026: cuánto te queda de una mensualidad de $150.000 con cada pasarela, qué medios de pago acepta cada una y cuándo conviene cada opción.",
    category: "Cobros y pagos",
    readTime: "8 min",
    date: "23 Sep 2026",
    isoDate: "2026-09-23",
    isoDateModified: "2026-10-14",
    ...AUTOR_CEO,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Para una escuela deportiva en Colombia, Wompi suele salir más económica que Mercado Pago con dinero al instante: su tarifa pública es 2,65 % + $700 + IVA por transacción exitosa y acepta Nequi y botón Bancolombia, que es como pagan muchas familias. Mercado Pago cobra 3,29 % + IVA si quieres el dinero al instante, pero baja a 2,99 % o 2,79 % + IVA si aceptas esperar 7 o 14 días, y conviene si tus familias ya usan su billetera. Tarifas consultadas en las páginas oficiales en octubre de 2026.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si la mayoría de tus familias paga con Nequi, PSE o Bancolombia y necesitas el dinero rápido para pagar entrenadores y canchas, empieza con Wompi. Si muchas familias tienen saldo en Mercado Pago o puedes esperar 14 días por el dinero, Mercado Pago es competitivo. No tienes que elegir solo una: puedes ofrecer las dos.",
      },
      { type: "h2", content: "Tarifas públicas lado a lado (consultado oct 2026)" },
      {
        type: "table",
        headers: ["Concepto", "Wompi (plan Avanzado)", "Mercado Pago Colombia (Link de pago)"],
        rows: [
          ["Comisión estándar", "2,65 % + $700 + IVA por transacción exitosa", "3,29 % + IVA con dinero al instante"],
          ["Si aceptas esperar el dinero", "No aplica (una sola tarifa)", "2,99 % + IVA a 7 días; 2,79 % + IVA a 14 días"],
          ["Pagos con código QR", "Tarifa especial de 1 % por transacción exitosa", "Consulta la tarifa vigente en su página"],
          ["Cómo se cobra", "Por transacción exitosa", "Se debita cuando la venta queda acreditada; la página indica «No hay costos fijos»"],
          ["Plan sin comisión de la pasarela", "Plan Gateway: solo pagas la tarifa negociada con el banco", "No aplica"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "La página de Link de pago de Mercado Pago Colombia dice «No hay costos fijos», pero en sus tarjetas de tarifas también aparece un valor de «+ $800» junto a cada porcentaje. Antes de decidir, confirma con Mercado Pago si ese cargo fijo aplica a tu cuenta. Fuentes: wompi.com/es/co/planes-tarifas y mercadopago.com.co/herramientas-para-vender/link-de-pago, consultadas en octubre de 2026.",
      },
      { type: "h2", content: "Cuánto te queda de una mensualidad de $150.000" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo con las tarifas publicadas, IVA del 19 % sobre la comisión y valores redondeados. No incluye retenciones en la fuente ni de ICA que la pasarela pueda practicar según tu régimen tributario; eso lo revisa tu contador.",
      },
      {
        type: "table",
        headers: ["Pasarela y modalidad", "Comisión + IVA", "Recibe la escuela"],
        rows: [
          ["Wompi (2,65 % + $700 + IVA)", "≈ $5.563", "≈ $144.437"],
          ["Mercado Pago al instante (3,29 % + IVA)", "≈ $5.873", "≈ $144.127"],
          ["Mercado Pago a 14 días (2,79 % + IVA)", "≈ $4.980", "≈ $145.020"],
          ["Mercado Pago al instante, si aplica el cargo de $800", "≈ $6.825", "≈ $143.175"],
        ],
      },
      {
        type: "p",
        content:
          "En una escuela de 80 alumnos que pagan todos por pasarela, la diferencia entre la opción más barata y la más cara de esta tabla es del orden de $150.000 al mes. No es despreciable, pero tampoco es lo que más pesa: pesa más que las familias paguen a tiempo y que tú no gastes horas verificando transferencias.",
      },
      { type: "h2", content: "Medios de pago: lo que de verdad usan las familias" },
      {
        type: "ul",
        items: [
          "Wompi es de Bancolombia y acepta tarjetas débito y crédito, PSE, Nequi, botón Bancolombia y pago con QR. Para una familia que ya tiene Nequi o Bancolombia, el pago se hace en segundos.",
          "Mercado Pago acepta tarjetas, PSE y el saldo de la cuenta de Mercado Pago. Es cómodo para quien ya compra en Mercado Libre y tiene dinero en su billetera.",
          "Las dos generan enlaces de pago que se pueden mandar por WhatsApp o correo, y las dos permiten cobrar desde el celular.",
        ],
      },
      { type: "h2", content: "Cuándo conviene cada una" },
      {
        type: "table",
        headers: ["Situación de tu escuela", "Opción sugerida", "Por qué"],
        rows: [
          ["Necesitas el dinero ya para pagar nómina y canchas", "Wompi", "Una sola tarifa, sin elegir plazo de liberación del dinero"],
          ["Muchas familias pagan con Nequi", "Wompi", "Nequi es un medio de pago nativo de Wompi"],
          ["Familias con saldo en Mercado Pago", "Mercado Pago", "Pagan con su billetera sin sacar la tarjeta"],
          ["Puedes esperar 14 días por el dinero", "Mercado Pago a 14 días", "Es la tarifa porcentual más baja de las dos"],
          ["Manejas volumen alto y quieres negociar con el banco", "Wompi plan Gateway", "Wompi no cobra comisión; pagas la tarifa negociada con el banco"],
          ["Muchos pagos presenciales en la sede", "QR de la pasarela", "El QR de Wompi tiene tarifa especial de 1 %"],
        ],
      },
      { type: "h2", content: "Cómo abrir la cuenta: lo que te van a pedir" },
      {
        type: "ol",
        items: [
          "Documento de identidad del representante legal o de la persona natural titular.",
          "RUT actualizado y, si eres persona jurídica, certificado de existencia y representación legal (Cámara de Comercio) o el documento equivalente de tu club.",
          "Certificación de la cuenta bancaria a donde llegará el dinero, a nombre del mismo titular.",
          "Datos del negocio: actividad, sitio web o redes, y descripción de lo que cobras (mensualidades de formación deportiva).",
          "Una vez aprobada, obtienes las llaves de integración (públicas y privadas) que conectas a tu software o usas para crear enlaces de pago.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Los requisitos exactos los define cada pasarela y pueden cambiar. Si tu escuela es un club con reconocimiento deportivo, ten a mano también la resolución de reconocimiento por si la piden.",
      },
      { type: "h2", content: "Lo que ninguna pasarela te resuelve sola" },
      {
        type: "p",
        content:
          "Una pasarela cobra, pero no sabe quién debe. Si usas solo el enlace genérico de Wompi o Mercado Pago, sigues teniendo que cruzar a mano cada pago con cada atleta, mandar los recordatorios y registrar lo que llega por transferencia o en efectivo. Ese es el trabajo que se come las horas, y es donde un software de gestión deportiva aporta más que la diferencia de tarifas.",
      },
      { type: "h2", content: "Errores comunes al empezar a cobrar con pasarela" },
      {
        type: "ul",
        items: [
          "Abrir la cuenta a nombre de una persona y recibir el dinero de la escuela. Si la escuela es persona jurídica, la cuenta de la pasarela y la cuenta bancaria deben estar a nombre de la escuela; mezclar dinero personal y de la escuela complica la contabilidad y los impuestos.",
          "Mandar un enlace genérico sin valor ni concepto. La familia escribe el monto a mano, se equivoca, y luego hay que identificar a quién corresponde cada pago.",
          "No avisar a las familias del cambio. Si siempre pagaron por transferencia, anuncia el nuevo medio con un mensaje claro y deja la transferencia como alternativa durante un par de meses.",
          "Olvidar las devoluciones. Si cobras de más o una familia se retira, la devolución se hace desde el panel de la pasarela; ten claro quién puede hacerla y deja registro.",
          "Ignorar los contracargos. Un pago con tarjeta puede ser desconocido por el titular ante su banco. Guarda la evidencia del servicio (inscripción, asistencia) por si la pasarela te la pide.",
        ],
      },
      { type: "h2", content: "¿Trasladar la comisión a las familias?" },
      {
        type: "p",
        content:
          "Algunas escuelas suman un recargo por pago en línea para cubrir la comisión. Es una decisión de cada escuela: puede tener sentido si la mayoría paga por transferencia y el pago en línea es una comodidad extra. La alternativa es absorber la comisión y verla como el costo de cobrar a tiempo y sin conciliar a mano. Antes de decidir, haz la cuenta: con las tarifas de la tabla anterior, la comisión de una mensualidad de $150.000 está entre unos $5.000 y $7.000, y una sola hora de trabajo administrativo suele costar más que eso.",
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "SportMaps trae Wompi y Mercado Pago integrados en todos los planes, incluido Free Start. Conectas la cuenta de tu escuela y cada cobro sale con su enlace de pago; cuando la familia paga, el cobro se marca solo. La plata va directo a la cuenta de la escuela y SportMaps no cobra comisión por la integración: solo aplica la tarifa de la pasarela que elijas. Los recordatorios automáticos por correo y WhatsApp llevan el enlace dentro, y los pagos por transferencia o en efectivo se registran como pago manual con su comprobante.",
      },
      {
        type: "cta",
        title: "Conecta tu pasarela sin pagar de más",
        description:
          "Wompi y Mercado Pago integrados en todos los planes, sin comisión extra de SportMaps.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cobra Wompi por transacción en Colombia?",
        answer:
          "Según su página oficial, consultada en octubre de 2026, el plan Avanzado cobra 2,65 % + $700 + IVA por transacción exitosa, con una tarifa especial de 1 % para pagos con código QR. También existe el plan Gateway, en el que Wompi no cobra comisión y solo pagas la tarifa negociada con el banco.",
      },
      {
        question: "¿Cuánto cobra Mercado Pago por un link de pago en Colombia?",
        answer:
          "Según su página oficial, consultada en octubre de 2026, cobra 3,29 % + IVA si quieres el dinero al instante, 2,99 % + IVA si lo recibes a 7 días y 2,79 % + IVA a 14 días. La página dice que no hay costos fijos, aunque en las tarjetas de tarifas aparece un valor de $800, así que conviene confirmarlo.",
      },
      {
        question: "¿Qué pasarela es mejor para cobrar mensualidades de una escuela de fútbol?",
        answer:
          "Depende de cómo pagan tus familias y de cuándo necesitas el dinero. Wompi suele salir más barata con dinero inmediato y acepta Nequi y Bancolombia; Mercado Pago es competitiva si puedes esperar 14 días o si tus familias usan su billetera. Puedes ofrecer las dos.",
      },
      {
        question: "¿Puedo recibir pagos con Nequi en mi escuela deportiva?",
        answer:
          "Sí. Puedes recibir transferencias directas a una cuenta Nequi sin comisión, pero tendrás que verificarlas a mano. Si quieres que el pago se registre solo, Wompi acepta Nequi como medio de pago dentro de su enlace de pago.",
      },
      {
        question: "¿Necesito RUT para abrir Wompi o Mercado Pago como escuela?",
        answer:
          "Las pasarelas piden documentación del titular y de la cuenta bancaria, y normalmente el RUT. Si eres persona jurídica, también te pedirán el certificado de existencia y representación legal. Revisa los requisitos vigentes en la página de cada una.",
      },
    ],
    about: [
      "pasarelas de pago en Colombia",
      "comisiones de pago en línea",
      "cobro de mensualidades",
      "escuelas deportivas",
    ],
    mentions: ["Wompi", "Mercado Pago", "Bancolombia", "Nequi", "PSE", "Mercado Libre"],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "cobranza-whatsapp-ai-sportmaps",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. Reducir la mora
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "reducir-mora-escuela-deportiva-sin-perder-alumnos",
    title: "Cómo reducir la mora de una escuela deportiva sin perder alumnos",
    excerpt:
      "La mora casi nunca es mala fe: es fricción y falta de seguimiento. Una secuencia concreta de recordatorios, recargos y conversaciones para cobrar más sin expulsar a nadie.",
    category: "Cobros y pagos",
    readTime: "8 min",
    date: "30 Sep 2026",
    isoDate: "2026-09-30",
    ...AUTOR_CEO,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "La forma más efectiva de reducir la mora en una escuela deportiva es quitar fricción antes del vencimiento, no castigar después: recordatorios automáticos con el enlace de pago dentro, una fecha de corte fija, un recargo moderado solo si está en el reglamento, y una conversación personal a partir del segundo periodo atrasado. Cancelar automáticamente al atleta por mora es la peor herramienta: recupera poco dinero y casi siempre pierde al alumno.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa a quien olvidó pagar (la mayoría) de quien no puede pagar (pocos) y de quien no quiere pagar (muy pocos). A los primeros los resuelve un recordatorio con enlace; a los segundos, un acuerdo; a los terceros, una decisión del director. Nunca un proceso automático que da de baja.",
      },
      { type: "h2", content: "Por qué las familias se atrasan" },
      {
        type: "table",
        headers: ["Causa", "Cómo se ve", "Qué la resuelve"],
        rows: [
          ["Olvido", "Paga apenas le recuerdan", "Recordatorio automático con enlace de pago"],
          ["Fricción para pagar", "«Mándame otra vez el número de cuenta»", "Enlace de pasarela: PSE, Nequi, tarjeta en dos minutos"],
          ["Pagó, pero nadie lo registró", "Mandó el comprobante al grupo y se perdió", "Un solo canal para comprobantes y registro el mismo día"],
          ["Flujo de caja", "Paga, pero el 20 en vez del 5", "Fecha de corte acorde a la nómina o acuerdo de fecha"],
          ["Dificultad real", "Dos o más meses sin pagar", "Conversación y acuerdo de pago"],
          ["Desinterés", "El atleta dejó de venir y nadie avisó", "Seguimiento de asistencia y confirmación de retiro"],
        ],
      },
      {
        type: "p",
        content:
          "Fíjate que la mayoría de las causas se resuelven con proceso, no con presión. Antes de pensar en recargos, revisa si pagarte es fácil: si la familia tiene que pedir el número de cuenta, transferir, tomar captura y mandarla a un grupo, cada paso es una oportunidad para que se le olvide.",
      },
      { type: "h2", content: "La secuencia de cobro en 6 pasos" },
      {
        type: "ol",
        items: [
          "Día -5: recordatorio amable con valor, periodo y enlace de pago. Por WhatsApp y correo.",
          "Día 0 (vencimiento): recordatorio corto con el enlace.",
          "Día +3 a +5: mensaje que pregunta si ya pagó y pide el comprobante si fue por transferencia. Muchas «moras» se resuelven aquí: el pago existía.",
          "Día +10: si aplica, se suma el recargo por mora que establece el reglamento, y se avisa con claridad.",
          "Segundo periodo vencido: llamada o mensaje personal del director o del coordinador. Se ofrece acuerdo de pago.",
          "Tercer periodo vencido: reunión y decisión. Puede ser un acuerdo, una pausa o el retiro, pero la decide una persona con contexto.",
        ],
      },
      { type: "h2", content: "El recargo por mora: úsalo con cuidado" },
      {
        type: "p",
        content:
          "Un recargo funciona cuando es conocido de antemano, es razonable y se aplica parejo. Funciona mal cuando aparece por sorpresa o cuando es tan alto que la familia siente que es un castigo. Algunas reglas prácticas:",
      },
      {
        type: "ul",
        items: [
          "Escríbelo en el reglamento y en el formulario de inscripción. Si no estaba, no lo apliques retroactivamente.",
          "Prefiere un valor fijo y fácil de entender a un porcentaje diario.",
          "Deja un margen: aplicarlo el día 1 de atraso genera más reclamos que pagos.",
          "Ten una política para excepciones (calamidad, hermanos, becados) y quién puede aprobarlas.",
          "Si tienes dudas sobre topes o legalidad del cobro, consúltalo con un abogado o tu contador.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Nunca publiques listas de deudores en los grupos de WhatsApp de la escuela. Además de dañar la relación con las familias, en el caso de menores de edad estás exponiendo datos personales, algo que la Ley 1581 de 2012 de protección de datos protege.",
      },
      { type: "h2", content: "Por qué la mora no debería cancelar al atleta" },
      {
        type: "p",
        content:
          "Muchos sistemas ofrecen «bloquear» o dar de baja al atleta automáticamente cuando acumula deuda. Parece eficiente, pero tiene tres problemas. Primero, el niño no es el deudor: sacarlo del entrenamiento castiga a quien no decide. Segundo, un atleta dado de baja deja de generar cobros, así que la deuda vieja se vuelve más difícil de recuperar. Tercero, la familia que se va molesta no vuelve y lo cuenta.",
      },
      {
        type: "p",
        content:
          "Lo que sí funciona es tener visibilidad: saber en tiempo real quién está al día, quién debe un periodo y quién debe dos o más, para dedicar las conversaciones a ese último grupo. El sistema hace el trabajo repetitivo; las decisiones difíciles las toma una persona.",
      },
      { type: "h2", content: "Indicadores que vale la pena mirar cada mes" },
      {
        type: "table",
        headers: ["Indicador", "Cómo se calcula", "Para qué sirve"],
        rows: [
          ["Recaudo a tiempo", "Pagos recibidos antes del vencimiento / cobros del periodo", "Mide si los recordatorios funcionan"],
          ["Cartera vencida", "Suma de cobros vencidos sin pagar", "Cuánto dinero está financiando la escuela"],
          ["Atletas con 2+ periodos vencidos", "Conteo", "Lista de llamadas del mes"],
          ["Pagos sin registrar", "Comprobantes recibidos sin conciliar", "Detecta «moras» que en realidad ya se pagaron"],
        ],
      },
      { type: "h2", content: "Cuándo SÍ conviene pausar o retirar" },
      {
        type: "p",
        content:
          "Hay casos en que lo honesto es pausar: una familia que avisa que no podrá pagar en vacaciones, un atleta lesionado varias semanas o alguien que ya no viene. Para eso sirve una pausa explícita o un retiro registrado, que detiene los cobros futuros de forma ordenada. La diferencia es que es una decisión consciente, comunicada a la familia, y no un efecto secundario de la mora.",
      },
      { type: "h2", content: "Cómo plantear un acuerdo de pago" },
      {
        type: "p",
        content:
          "Un acuerdo de pago recupera dinero y conserva al alumno, siempre que sea concreto. Un «paga cuando puedas» no es un acuerdo: es una deuda sin fecha. Lo que funciona:",
      },
      {
        type: "ol",
        items: [
          "Conversación privada, nunca en el grupo. Pregunta primero qué pasó; muchas veces la respuesta cambia la decisión.",
          "Propón cuotas con fecha: por ejemplo, la deuda de dos meses dividida en dos pagos los días 15 de los meses siguientes, además de la mensualidad corriente.",
          "Deja el acuerdo por escrito, aunque sea un mensaje con las fechas y los valores que la familia confirma.",
          "Programa los cobros del acuerdo como cobros normales, con su enlace y su recordatorio, para que no dependan de la memoria de nadie.",
          "Si la familia cumple, dilo. Un mensaje de agradecimiento cuesta poco y refuerza la relación.",
        ],
      },
      { type: "h2", content: "Plantillas de mensaje por etapa" },
      {
        type: "table",
        headers: ["Etapa", "Tono", "Mensaje de ejemplo"],
        rows: [
          ["Antes de vencer", "Informativo", "«Hola, Andrés. La mensualidad de noviembre de Sofía es de $140.000 y vence el 5. Puedes pagarla aquí: [enlace].»"],
          ["Recién vencido", "Amable, con salida", "«Hola, Andrés. Vemos pendiente la mensualidad de noviembre. Si ya pagaste, envíanos el comprobante por aquí y lo validamos.»"],
          ["Un periodo vencido", "Claro, sin presión", "«Hola, Andrés. Sofía tiene pendiente noviembre por $140.000. ¿Te ayudamos con algo para ponerte al día?»"],
          ["Dos o más periodos", "Personal", "Llamada o mensaje del director proponiendo una conversación y un acuerdo."],
        ],
      },
      { type: "h2", content: "La mora se previene desde la inscripción" },
      {
        type: "ul",
        items: [
          "Pide desde el primer día el celular y el correo del acudiente que paga, no solo los del atleta. Sin un contacto correcto, ningún recordatorio llega.",
          "Haz que la familia acepte el reglamento con la fecha de corte y la política de mora antes del primer cobro.",
          "Ofrece al menos un medio de pago en línea desde el inicio: es más fácil arrancar así que cambiar la costumbre después.",
          "Cobra el primer mes al inscribir. Quien empieza debiendo tiende a seguir debiendo.",
          "Avisa con anticipación los cambios de valor: un aumento comunicado con un mes de antelación genera muchos menos atrasos que uno que aparece en el cobro.",
        ],
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "SportMaps envía recordatorios de cobro automáticos por correo y WhatsApp (3 días antes, el día del vencimiento y a los 3, 10 y 20 días) con un enlace corto de pago que la familia abre sin iniciar sesión y paga por Wompi o Mercado Pago. El recargo por mora es opcional: lo activa y lo define cada escuela. La mora no cancela automáticamente al atleta: el retiro es siempre una decisión de la escuela. Cuando una familia responde con el comprobante por WhatsApp, el asistente con IA lo lee en segundos, lo cruza contra el cobro pendiente y lo deja listo para que la escuela lo apruebe con un toque; los pagos en efectivo se registran como pago manual. El WhatsApp IA viene incluido sin costo en todos los planes; solo pagas a Meta si superas las 1.000 conversaciones de servicio gratuitas al mes.",
      },
      {
        type: "cta",
        title: "Cobra más sin perder alumnos",
        description:
          "Calcula cuánto tiempo y dinero te está costando la mora hoy.",
        href: "/calculadora",
        label: "Usar la calculadora",
      },
    ],
    faqs: [
      {
        question: "¿Cómo cobrar a los papás que no pagan la mensualidad de la escuela deportiva?",
        answer:
          "Empieza por recordatorios automáticos con un enlace de pago, porque la mayoría de atrasos son olvido o fricción. Si la deuda llega a dos periodos, habla directamente con la familia y ofrece un acuerdo de pago. La decisión de retirar al atleta debe tomarla una persona, no un proceso automático.",
      },
      {
        question: "¿Cuánto se puede cobrar de recargo por mora en una escuela deportiva?",
        answer:
          "No hay una cifra única para escuelas deportivas; lo usual es un valor fijo moderado que esté en el reglamento aceptado al inscribirse. Para definir topes y la forma de aplicarlo, consulta con tu contador o un abogado.",
      },
      {
        question: "¿Se puede publicar la lista de deudores en el grupo de WhatsApp?",
        answer:
          "No es recomendable. Expone datos personales de las familias y, en el caso de menores, va en contra del espíritu de la Ley 1581 de 2012 de protección de datos. Los recordatorios deben ser individuales.",
      },
      {
        question: "¿Qué porcentaje de mora es normal en una escuela deportiva?",
        answer:
          "No existe una estadística pública confiable para escuelas deportivas en Colombia. Lo útil es medir tu propio recaudo a tiempo cada mes y ver si mejora cuando cambias la fecha de corte o los recordatorios.",
      },
      {
        question: "¿Debo suspender los entrenamientos de un niño que debe la mensualidad?",
        answer:
          "Como regla general, no de forma automática: el niño no es quien decide el pago y suspenderlo suele terminar en un retiro definitivo. Si la deuda se prolonga, conversa con la familia y acuerden una solución: un plan de pago, una pausa o el retiro.",
      },
    ],
    about: [
      "cartera morosa",
      "recargo por mora",
      "retención de alumnos",
      "escuelas deportivas en Colombia",
    ],
    mentions: ["WhatsApp", "Wompi", "Mercado Pago", "Meta"],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "recordatorios-de-pago-por-whatsapp-automaticos",
      "cobranza-whatsapp-ai-sportmaps",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  // 4. Inscripción vs mensualidad
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "inscripcion-vs-mensualidad-escuela-deportiva",
    title: "Inscripción vs mensualidad en una escuela deportiva: qué incluye cada cobro y cómo no cobrar doble",
    excerpt:
      "La inscripción se paga una vez; la mensualidad, cada periodo. Qué debe cubrir cada una, cómo cobrar el primer mes si el atleta entra a mitad de mes y los errores que terminan en cobros dobles.",
    category: "Cobros y pagos",
    readTime: "8 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    ...EQUIPO,
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "La inscripción es un cobro único que se paga al entrar a la escuela (o una vez por temporada, si así lo defines) y cubre costos de arranque como ficha, seguro, carnet o kit; la mensualidad es un cobro recurrente que paga el servicio de entrenamiento de cada periodo. Son dos cobros distintos y deben gestionarse por separado: si se fusionan, la familia no entiende qué paga, y tu sistema termina cobrando la inscripción cada mes o saltándose el primer mes.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Inscripción: una vez, al entrar o por temporada. Mensualidad: cada periodo, con su propio valor por atleta. Define por escrito qué incluye cada una, cobra el primer mes con una regla clara (completo o proporcional) y nunca mezcles los dos conceptos en un mismo cobro.",
      },
      { type: "h2", content: "Qué cubre cada cobro" },
      {
        type: "table",
        headers: ["", "Inscripción", "Mensualidad"],
        rows: [
          ["Frecuencia", "Una vez (al ingresar o por temporada)", "Cada periodo (mes, bimestre, trimestre)"],
          ["Qué suele cubrir", "Apertura de ficha, seguro o póliza, carnet, kit o uniforme de entrada, evaluación inicial", "Entrenamientos del periodo, uso de canchas e implementos, honorarios de entrenadores"],
          ["Quién la paga", "Todo atleta nuevo; los antiguos solo si es por temporada", "Todo atleta activo"],
          ["Se repite si el atleta se retira y vuelve", "Depende de tu reglamento (defínelo)", "Sí, desde el periodo en que regresa"],
          ["Admite descuentos", "Promociones de temporada, referidos", "Hermanos, becas, pago anticipado"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Los uniformes y kits adicionales no son ni inscripción ni mensualidad: son ventas. Si los metes en la inscripción, deja claro qué incluye; si se compran aparte, mejor que vayan por una tienda o catálogo con su propio cobro.",
      },
      { type: "h2", content: "Cinco errores que generan cobros dobles o perdidos" },
      {
        type: "ol",
        items: [
          "Cobrar la inscripción como si fuera mensualidad. La familia recibe un cobro de «inscripción» cada mes y nadie sabe por qué.",
          "Saltarse el primer mes. El atleta paga la inscripción el día 20, el sistema arranca la mensualidad el mes siguiente, y los entrenamientos de esos 10 días nunca se cobran (o se cobran después, por sorpresa).",
          "Cobrar el mes siguiente en vez del actual. Un error de configuración del periodo hace que quien entra en octubre reciba un cobro de noviembre, y en octubre entrene gratis.",
          "Generar la mensualidad dos veces. Pasa cuando el cobro se crea por dos caminos (a mano y automáticamente) o cuando el atleta está en dos categorías y cada una genera su propia mensualidad sin que la escuela lo haya decidido.",
          "No distinguir quién paga. Si el cobro no queda asociado al acudiente correcto, el recordatorio le llega a quien no es o no le llega a nadie.",
        ],
      },
      { type: "h2", content: "El primer mes: completo o proporcional" },
      {
        type: "p",
        content:
          "Es la pregunta más frecuente al configurar los cobros. No hay respuesta correcta universal, pero sí debe haber una regla escrita. Estas son las opciones más comunes:",
      },
      {
        type: "table",
        headers: ["Regla", "Cómo funciona", "Ventaja", "Desventaja"],
        rows: [
          ["Mes completo", "Quien entra en cualquier día paga el mes entero", "Simple de explicar y de operar", "Se siente injusto si entra el día 25"],
          ["Proporcional", "Paga solo los días o sesiones restantes", "Justo para la familia", "Más cálculos; requiere una regla clara de redondeo"],
          ["Corte a mitad de mes", "Antes del 15 paga completo; después, medio mes o arranca el siguiente", "Equilibrio entre justicia y simplicidad", "Hay que comunicar bien la fecha de corte"],
          ["Arranca el mes siguiente", "Los días restantes van incluidos en la inscripción", "Muy simple", "Regalas entrenamientos si alguien entra el día 2"],
        ],
      },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo con corte a mitad de mes: mensualidad de $140.000. Un atleta que entra el 8 de octubre paga inscripción más los $140.000 de octubre. Uno que entra el 22 paga inscripción más $70.000 de octubre, y desde noviembre paga la mensualidad completa.",
      },
      { type: "h2", content: "Cómo configurar los cobros paso a paso" },
      {
        type: "ol",
        items: [
          "Escribe en el reglamento qué incluye la inscripción y si es única o por temporada.",
          "Define el valor de la mensualidad por plan o por categoría, y permite ajustarlo por atleta (hermanos, becados).",
          "Define la regla del primer mes (completo, proporcional o corte a mitad de mes).",
          "Al inscribir, genera un cobro de inscripción y el cobro de mensualidad del periodo en curso según tu regla. Son dos cobros separados, cada uno con su concepto.",
          "Desde el siguiente periodo, solo se generan mensualidades, una por atleta activo.",
          "Si un atleta está en dos categorías, decide explícitamente si paga una o dos mensualidades. Que no lo decida el sistema por defecto.",
          "Revisa el primer ciclo completo con dos o tres atletas de prueba antes de activarlo para toda la escuela.",
        ],
      },
      { type: "h2", content: "¿Y la matrícula anual?" },
      {
        type: "p",
        content:
          "Algunas escuelas cobran una «matrícula» al inicio de cada año aunque el atleta ya esté inscrito, para cubrir el seguro anual o la renovación del carnet. Es válido, pero llámala igual siempre y comunícala desde la inscripción. Lo que genera reclamos no es el cobro, sino la sorpresa.",
      },
      { type: "h2", content: "Cuándo NO conviene cobrar inscripción" },
      {
        type: "p",
        content:
          "En vacacionales, cursos cortos o clases de prueba, una inscripción alta frena la decisión. Ahí suele funcionar mejor un precio único por el curso. También hay escuelas que eliminan la inscripción en temporadas de baja demanda para atraer alumnos; si lo haces, que sea una promoción con fecha de fin.",
      },
      { type: "h2", content: "Cómo comunicar la estructura de cobros a las familias" },
      {
        type: "p",
        content:
          "La mayoría de los reclamos por cobros nacen de una expectativa distinta, no de un error. Una familia que sabe desde el primer día cuánto paga al entrar, cuánto cada mes y qué pasa si se atrasa, rara vez discute un cobro. Estas son las piezas mínimas que deberías entregar al inscribir:",
      },
      {
        type: "ul",
        items: [
          "Una tabla con el valor de la inscripción, la mensualidad por categoría o plan y qué incluye cada una.",
          "La fecha de corte de la mensualidad y la regla del primer mes.",
          "Los medios de pago disponibles y el canal oficial para mandar comprobantes.",
          "La política de mora, si existe, y la de retiro: cómo se avisa y desde cuándo dejan de llegar cobros.",
          "Los descuentos vigentes (hermanos, pago anticipado) y sus condiciones.",
        ],
      },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo del costo anual que puedes mostrarle a una familia: inscripción de $120.000 más 11 mensualidades de $140.000 (febrero a diciembre) suman $1.660.000 en el año. Ponerlo así, en una sola cifra, ayuda a la familia a planear y evita la sensación de que «siempre hay un cobro nuevo».",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Usa siempre los mismos nombres para cada concepto en el reglamento, en los recordatorios y en el comprobante de pago. Si en un lugar dice «matrícula», en otro «inscripción» y en otro «afiliación», la familia va a pensar que son tres cobros distintos.",
      },
      { type: "h2", content: "Retiros, pausas y reingresos" },
      {
        type: "p",
        content:
          "El otro momento donde inscripción y mensualidad se confunden es la salida. Si un atleta se retira, lo correcto es registrar el retiro con fecha para que dejen de generarse mensualidades desde el periodo siguiente; los cobros ya vencidos siguen siendo deuda y se gestionan aparte. Si la familia pide una pausa (vacaciones, lesión), conviene registrarla como pausa con fecha de regreso, no como retiro, para que al volver no se le cobre otra inscripción. Y si alguien se retira y vuelve meses después, tu reglamento debe decir si paga inscripción de nuevo. Cualquiera de las dos opciones es válida; lo que no funciona es decidirlo caso por caso según quién pregunte.",
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps la inscripción se cobra una sola vez y la mensualidad se cobra cada periodo, como dos conceptos separados. Cada atleta tiene su valor de mensualidad, los cobros del periodo se generan automáticamente y cada uno queda asociado a su acudiente, que recibe el enlace de pago por WhatsApp o correo. La inscripción puede hacerse por enlace o por QR, con la ficha del atleta y los acudientes vinculados desde el inicio. Si vendes uniformes o kits, puedes usar un catálogo de artículos que se suma al cobro de la mensualidad, o la tienda en línea de la escuela, que es un adicional ($49.000 al mes, incluida en el plan Elite).",
      },
      {
        type: "cta",
        title: "Ordena tus cobros desde la inscripción",
        description:
          "Inscripción por enlace o QR, mensualidades automáticas y pasarelas integradas en todos los planes.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre inscripción y mensualidad en una escuela de fútbol?",
        answer:
          "La inscripción se paga una sola vez al entrar (o una vez por temporada) y cubre costos de arranque como ficha, seguro o kit. La mensualidad se paga cada periodo y cubre los entrenamientos. Son cobros distintos y conviene manejarlos por separado.",
      },
      {
        question: "¿Si mi hijo entra a mitad de mes, debo pagar el mes completo?",
        answer:
          "Depende del reglamento de la escuela. Algunas cobran el mes completo, otras cobran proporcional y otras usan un corte a mitad de mes. Pregunta la regla antes de inscribir para evitar sorpresas.",
      },
      {
        question: "¿Qué debe incluir la inscripción de una escuela deportiva?",
        answer:
          "Lo habitual es apertura de ficha, seguro o póliza, carnet y, a veces, un kit o uniforme de entrada. Lo importante es que la escuela lo deje por escrito para que la familia sepa qué está pagando.",
      },
      {
        question: "¿Hay que pagar inscripción cada año en una escuela deportiva?",
        answer:
          "Solo si la escuela la define por temporada o cobra una matrícula anual, por ejemplo para renovar el seguro. Si la inscripción es única, no se vuelve a cobrar mientras el atleta siga activo.",
      },
      {
        question: "¿Si mi hijo está en dos categorías paga dos mensualidades?",
        answer:
          "Depende de la escuela: algunas cobran una mensualidad por categoría y otras una sola con un valor ajustado. Lo correcto es que la escuela lo decida y lo comunique, no que el sistema genere dos cobros por defecto.",
      },
    ],
    about: [
      "inscripción deportiva",
      "mensualidad de escuela deportiva",
      "estructura de cobros",
      "escuelas de formación deportiva",
    ],
    mentions: ["WhatsApp", "Wompi", "Mercado Pago"],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "paz-y-salvo-escuela-deportiva",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 5. Conciliar transferencias y comprobantes
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "conciliar-transferencias-comprobantes-escuela-deportiva",
    title: "Cómo conciliar transferencias y comprobantes de pago en una escuela deportiva",
    excerpt:
      "Método paso a paso para cruzar los comprobantes que mandan las familias contra el extracto bancario, detectar comprobantes repetidos o de otra cuenta y cerrar el mes sin pagos huérfanos.",
    category: "Cobros y pagos",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    ...EQUIPO,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Conciliar las transferencias de una escuela deportiva es cruzar tres fuentes: los cobros pendientes (quién debe qué), los comprobantes que mandan las familias y el extracto bancario (lo que de verdad llegó). Un pago se da por conciliado solo cuando coinciden monto, fecha, referencia y cuenta destino, y cuando esa referencia no se había usado antes. Hacerlo cada semana, con un solo canal para recibir comprobantes, evita el cierre de mes de horas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Un comprobante no es un pago: es una afirmación de que hubo un pago. Lo que confirma el dinero es el extracto. Recibe los comprobantes por un solo canal, valida cuatro datos (monto, fecha, referencia y cuenta destino) y marca la referencia como usada para que nadie la pueda presentar dos veces.",
      },
      { type: "h2", content: "Por qué la conciliación se vuelve un problema" },
      {
        type: "ul",
        items: [
          "Los comprobantes llegan por todas partes: el grupo de la categoría, el chat del entrenador, el correo, una foto impresa.",
          "Muchas familias pagan el mismo valor el mismo día, así que el extracto muestra veinte consignaciones de $150.000 sin nombre.",
          "Un mismo comprobante puede reenviarse dos veces (por error o no), y si nadie lleva registro de referencias, se acredita dos veces.",
          "Algunas familias transfieren a la cuenta personal del entrenador o a una cuenta vieja de la escuela.",
          "El efectivo recibido en la cancha no aparece en ningún extracto hasta que alguien lo consigna.",
        ],
      },
      { type: "h2", content: "Los cuatro datos que debes validar en cada comprobante" },
      {
        type: "table",
        headers: ["Dato", "Qué revisar", "Señal de alerta"],
        rows: [
          ["Monto", "Que coincida con el cobro pendiente (o explique un abono)", "Valor distinto sin explicación"],
          ["Fecha", "Que sea reciente y posterior al cobro", "Comprobante de hace meses o de un periodo ya pagado"],
          ["Referencia o número de aprobación", "Que exista en el extracto y no se haya usado antes", "Referencia repetida en otro pago"],
          ["Cuenta destino", "Que sea una cuenta de la escuela", "Cuenta de un tercero, cuenta enmascarada que no coincide o cuenta antigua"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Una captura de pantalla se puede editar. Por eso la validación final siempre es contra el extracto o la notificación del banco, no contra la imagen. Si un comprobante no aparece en el extracto, el pago no está confirmado, por convincente que se vea.",
      },
      { type: "h2", content: "El método semanal en 7 pasos" },
      {
        type: "ol",
        items: [
          "Un solo canal de recepción. Define dónde se mandan los comprobantes (un número de WhatsApp de la escuela o un formulario) y comunícalo. Pide que no se envíen al grupo ni al entrenador.",
          "Registro inmediato. Cada comprobante se asocia al atleta y al cobro que paga, con su monto, fecha y referencia.",
          "Descarga el extracto de la semana desde la banca empresarial, en Excel o CSV si tu banco lo permite.",
          "Cruza por referencia primero. Es el dato más único. Si coincide referencia y monto, el pago queda conciliado.",
          "Cruza por monto y fecha lo que quede, con cuidado: con muchas familias pagando lo mismo el mismo día, este cruce solo sirve como pista, no como prueba.",
          "Revisa los pendientes en ambos sentidos: comprobantes sin movimiento en el extracto (pide aclaración) y movimientos del extracto sin comprobante (pagos huérfanos: busca a quién pertenecen).",
          "Registra el efectivo con su soporte y su consignación, para que también quede en el extracto.",
        ],
      },
      { type: "h2", content: "Pagos huérfanos: qué hacer con ellos" },
      {
        type: "p",
        content:
          "Un pago huérfano es dinero que llegó y nadie sabe de quién es. Es más común de lo que parece cuando las familias pagan por transferencia sin referencia. Antes de cerrar el mes, revisa los huérfanos y pregunta por el canal oficial: «Recibimos una transferencia de $150.000 el 3 de octubre a las 7:42 p. m. desde una cuenta terminada en 1234; ¿es tuya?». Nunca asignes un huérfano a ojo al primer deudor que tenga ese monto.",
      },
      { type: "h2", content: "Cómo reducir la conciliación a casi cero" },
      {
        type: "table",
        headers: ["Medida", "Efecto"],
        rows: [
          ["Mover a las familias al enlace de pasarela (Wompi, Mercado Pago)", "El pago llega con el cobro identificado; no hay que conciliarlo a mano"],
          ["Un único canal para comprobantes", "Se acaba la búsqueda en grupos y chats personales"],
          ["Lectura automática del comprobante", "Monto, fecha, referencia y destino se extraen sin digitar; una persona solo aprueba"],
          ["Bloqueo de referencias repetidas", "Un mismo comprobante no puede acreditar dos pagos"],
          ["Cuentas de la escuela registradas", "Se detectan transferencias a cuentas que no son de la escuela"],
        ],
      },
      { type: "h2", content: "Cuándo una hoja de cálculo es suficiente" },
      {
        type: "p",
        content:
          "Si recibes menos de 30 transferencias al mes, una hoja con columnas de atleta, periodo, monto, fecha, referencia y estado, más una revisión semanal del extracto, funciona bien. La regla de oro es la misma: la referencia se anota y no se acepta dos veces. Cuando el volumen sube o hay varias personas recibiendo comprobantes, la hoja deja de ser confiable porque nadie sabe cuál es la versión buena.",
      },
      { type: "h2", content: "Plantilla mínima de registro" },
      {
        type: "p",
        content:
          "Si todavía concilias en una hoja de cálculo, estas son las columnas mínimas. Con ellas puedes responder en segundos si un pago existe, a qué cobro corresponde y si la referencia ya se usó.",
      },
      {
        type: "table",
        headers: ["Columna", "Ejemplo", "Para qué sirve"],
        rows: [
          ["Atleta y acudiente", "Samuel Pérez / Laura Gómez", "Saber a quién se acredita"],
          ["Periodo o concepto", "Mensualidad octubre", "Evitar acreditar dos veces el mismo periodo"],
          ["Monto", "$150.000", "Cruce con el cobro y el extracto"],
          ["Fecha y hora del pago", "03/10 7:42 p. m.", "Cruce con el extracto"],
          ["Referencia", "Número de aprobación del banco", "Detectar comprobantes repetidos"],
          ["Cuenta destino", "Ahorros terminada en 1234", "Detectar pagos a cuentas ajenas"],
          ["Estado", "Conciliado / pendiente / en revisión", "Saber qué falta antes del cierre"],
        ],
      },
      { type: "h2", content: "Quién hace qué" },
      {
        type: "p",
        content:
          "La conciliación falla cuando todos reciben plata y nadie es responsable. Define roles: los entrenadores no reciben dinero ni comprobantes (los redirigen al canal oficial), una persona de administración concilia cada semana, y el director revisa solo los casos en revisión y los pagos huérfanos. Si alguien recibe efectivo, lo registra el mismo día con su recibo y lo consigna en un plazo definido.",
      },
      { type: "h2", content: "Señales de que un comprobante no es lo que parece" },
      {
        type: "ul",
        items: [
          "La referencia no aparece en el extracto aunque haya pasado más de un día hábil.",
          "La misma referencia ya se usó para otro atleta u otro periodo.",
          "La cuenta destino no es de la escuela o, si viene enmascarada, los dígitos visibles no coinciden con los de tu cuenta.",
          "Tipografías o alineaciones distintas a las del banco, o un monto que parece sobrepuesto.",
          "La fecha es anterior al cobro que dice pagar.",
        ],
      },
      {
        type: "p",
        content:
          "Ninguna de estas señales prueba mala fe: muchas veces es un error de la familia, que mandó el comprobante equivocado o pagó a una cuenta vieja. Por eso la respuesta siempre es pedir aclaración con amabilidad y no acreditar hasta tenerla.",
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps las familias mandan el comprobante al WhatsApp de la escuela y el asistente con IA lo lee en segundos: extrae monto, fecha, referencia y cuenta destino, lo cruza contra el cobro pendiente del atleta y lo deja listo para que la escuela lo apruebe con un toque. Si la referencia ya se usó o la cuenta destino no es de la escuela, lo señala para que la escuela lo revise antes de acreditar nada. Cada escuela conecta su propio número de WhatsApp con Meta mediante el registro integrado. Los pagos por pasarela (Wompi o Mercado Pago) se marcan solos, y los pagos en efectivo se registran como pago manual con su soporte. El WhatsApp IA está incluido sin costo en todos los planes, también en Free Start.",
      },
      {
        type: "cta",
        title: "Que los comprobantes se concilien solos",
        description:
          "WhatsApp IA para leer comprobantes y pasarelas integradas, incluidos en todos los planes.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    faqs: [
      {
        question: "¿Cómo verifico que un comprobante de transferencia es real?",
        answer:
          "Búscalo en el extracto o en las notificaciones de tu banco por referencia y monto. Una captura de pantalla se puede editar, así que el pago solo está confirmado cuando aparece en tu cuenta. Revisa también que la cuenta destino sea la de la escuela.",
      },
      {
        question: "¿Qué hago si dos familias mandan el mismo comprobante?",
        answer:
          "Acredita solo el primero que coincida con el extracto y pide aclaración al segundo. Para evitarlo, lleva registro de cada referencia usada y no aceptes una referencia que ya está registrada.",
      },
      {
        question: "¿Cómo identifico una transferencia que llegó sin nombre ni referencia?",
        answer:
          "Anota fecha, hora, monto y los últimos dígitos de la cuenta de origen, y pregunta por el canal oficial de la escuela quién la hizo. No la asignes al primer deudor con ese monto, porque podrías acreditarla a la familia equivocada.",
      },
      {
        question: "¿Cada cuánto debo conciliar los pagos de mi escuela deportiva?",
        answer:
          "Al menos una vez por semana. Conciliar solo a fin de mes acumula dudas difíciles de resolver y hace que lleguen recordatorios de cobro a familias que ya pagaron.",
      },
      {
        question: "¿Se pueden leer los comprobantes de pago automáticamente?",
        answer:
          "Sí. Hay herramientas con inteligencia artificial que leen la imagen o el PDF del comprobante y extraen monto, fecha, referencia y cuenta destino. En SportMaps eso lo hace el asistente de WhatsApp IA, incluido en todos los planes: lee el comprobante, lo cruza con el cobro y lo deja listo para que la escuela lo apruebe.",
      },
    ],
    about: [
      "conciliación bancaria",
      "comprobantes de pago",
      "transferencias bancarias",
      "escuelas deportivas en Colombia",
    ],
    mentions: ["WhatsApp", "Wompi", "Mercado Pago", "Nequi", "Bancolombia"],
    related: [
      "leer-comprobantes-de-pago-con-ia",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "como-cobrar-mensualidades-escuela-deportiva",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 6. Facturación electrónica DIAN
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "facturacion-electronica-escuelas-deportivas-dian",
    title: "Facturación electrónica para escuelas deportivas: quién está obligado ante la DIAN y cómo empezar",
    excerpt:
      "Qué escuelas y clubes deben emitir factura electrónica, qué necesitas antes de emitir la primera, qué datos pedirles a las familias y cómo automatizar la factura de cada mensualidad pagada.",
    category: "Cobros y pagos",
    readTime: "8 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    ...AUTOR_CEO,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela o club deportivo que funciona como persona jurídica (SAS, fundación, corporación o club con reconocimiento deportivo) en general está obligada a facturar electrónicamente ante la DIAN cada venta de servicios, incluidas las mensualidades. Las personas naturales que no son responsables de IVA y cumplen las condiciones del artículo 616-2 del Estatuto Tributario no están obligadas. Para empezar necesitas RUT actualizado, habilitarte como facturador en la DIAN, una resolución de numeración y un software o proveedor tecnológico que emita y valide cada factura. Confirma tu caso concreto con tu contador.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tu escuela es persona jurídica, asume que debes facturar y verifícalo con tu contador. Lo difícil no es emitir la factura sino tener los datos de cada pagador (documento, nombre, correo) en el momento del pago. Si los pides desde la inscripción, la factura de cada mensualidad puede salir sola.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Este artículo es orientativo y no reemplaza la asesoría de un contador público. Las obligaciones tributarias dependen de tu forma jurídica, tu régimen (incluido el régimen tributario especial de las entidades sin ánimo de lucro) y de las resoluciones vigentes de la DIAN.",
      },
      { type: "h2", content: "¿Mi escuela está obligada a facturar electrónicamente?" },
      {
        type: "table",
        headers: ["Tipo de escuela", "Regla general", "Qué verificar con tu contador"],
        rows: [
          ["SAS u otra sociedad comercial", "Obligada a facturar electrónicamente", "Si los servicios están gravados con IVA o excluidos"],
          ["Club deportivo, corporación o fundación (sin ánimo de lucro)", "En general obligada a facturar", "Régimen tributario especial y tratamiento de las mensualidades"],
          ["Persona natural responsable de IVA", "Obligada a facturar", "Desde cuándo y con qué rangos"],
          ["Persona natural no responsable de IVA", "No obligada (art. 616-2 del Estatuto Tributario)", "Que cumpla todos los topes de ingresos y demás condiciones vigentes"],
        ],
      },
      {
        type: "p",
        content:
          "Aunque no estés obligado, muchas familias piden factura (por ejemplo, para soportar gastos ante su empresa) y algunas empresas o cajas de compensación solo pagan contra factura. Facturar también ordena tu contabilidad, porque cada ingreso queda soportado.",
      },
      { type: "h2", content: "Qué es una factura electrónica válida" },
      {
        type: "ul",
        items: [
          "Se genera en formato XML con el estándar que define la DIAN y se acompaña de una representación gráfica (normalmente un PDF) para el cliente.",
          "Tiene un CUFE (código único de factura electrónica) que la identifica.",
          "Se valida previamente por la DIAN: la factura solo existe cuando la DIAN la acepta.",
          "Usa un número dentro del rango que te autorizó la DIAN en tu resolución de numeración.",
          "No se borra ni se edita: si hay un error o una devolución, se corrige con una nota crédito.",
          "La norma vigente que desarrolla el sistema de factura electrónica es la Resolución 000165 de 2023 de la DIAN, con sus modificaciones.",
        ],
      },
      { type: "h2", content: "Cómo empezar: paso a paso" },
      {
        type: "ol",
        items: [
          "Actualiza el RUT con la responsabilidad de facturador electrónico y la actividad económica correcta.",
          "Elige cómo vas a facturar: la solución gratuita que ofrece la DIAN (funcional para volúmenes bajos y emisión manual) o un proveedor tecnológico autorizado que permita automatizar.",
          "Habilítate en el portal de la DIAN como facturador electrónico y supera el set de pruebas con el software o proveedor elegido.",
          "Solicita la resolución de numeración (prefijo y rango de facturas) y asóciala a tu software.",
          "Configura los productos o servicios: mensualidad, inscripción, uniformes, con su tratamiento de IVA definido por tu contador.",
          "Pide los datos de facturación a las familias: tipo y número de documento (o NIT), nombre o razón social y correo.",
          "Emite, revisa que la DIAN acepte las primeras facturas y define quién corrige con nota crédito si algo sale mal.",
        ],
      },
      { type: "h2", content: "Los datos que debes pedir a cada pagador" },
      {
        type: "table",
        headers: ["Dato", "Obligatorio", "Comentario"],
        rows: [
          ["Tipo de documento (CC, CE, NIT, pasaporte)", "Sí", "Si la factura va a nombre de la empresa del papá, es NIT"],
          ["Número de documento", "Sí", "Es el error más común: un dígito mal digitado y la factura sale a nombre de otra persona"],
          ["Nombre completo o razón social", "Sí", "El del acudiente que paga, no el del niño"],
          ["Correo electrónico", "Recomendado", "Para enviar la factura y el XML"],
          ["Dirección y municipio", "Según tu proveedor", "Algunos los exigen; otros usan los del emisor por defecto"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "La factura va a nombre de quien paga, no del atleta. Un menor de edad no es el comprador: el comprador es su acudiente. Pide los datos al inscribir y ofrece a la familia indicar si quiere la factura a nombre propio o de su empresa.",
      },
      { type: "h2", content: "Errores comunes de las escuelas al facturar" },
      {
        type: "ul",
        items: [
          "Facturar a fin de mes todo junto: se pierden pagos y se mezclan periodos. Lo ideal es factura por cada pago confirmado.",
          "Emitir sin datos del pagador y luego tener que anular con nota crédito.",
          "Facturar el valor de la mensualidad y no el valor realmente pagado (por ejemplo, con descuento de hermanos).",
          "Olvidar que las ventas de uniformes y kits también se facturan.",
          "No darle acceso al contador: termina pidiendo un Excel de lo facturado cada mes.",
        ],
      },
      { type: "h2", content: "Cuánto cuesta facturar" },
      {
        type: "p",
        content:
          "La DIAN ofrece una solución gratuita, pero exige emitir cada factura a mano en su portal, lo que no escala con decenas de mensualidades al mes. Los proveedores tecnológicos cobran normalmente por paquetes de documentos. Compara el precio por factura y si el proveedor se integra con tu sistema de cobros, porque el costo real es el tiempo de digitar cada factura.",
      },
      { type: "h2", content: "Factura por cada pago o una al mes" },
      {
        type: "table",
        headers: ["Modalidad", "Ventaja", "Riesgo"],
        rows: [
          ["Una factura por cada pago confirmado", "Cada ingreso queda soportado el mismo día; fácil de conciliar", "Más documentos emitidos, así que importa el precio por factura"],
          ["Una factura mensual consolidada por familia", "Menos documentos", "Si la familia paga en dos momentos o paga tarde, la factura no coincide con lo recibido"],
          ["Facturar solo a quien la pide", "Menos documentos y menos datos que recoger", "Confirma con tu contador si tu régimen lo permite; puede no ser válido para tu escuela"],
        ],
      },
      { type: "h2", content: "Qué revisar al elegir proveedor de facturación" },
      {
        type: "ul",
        items: [
          "Que esté autorizado por la DIAN como proveedor tecnológico o que use la solución de la DIAN.",
          "Precio por factura en el volumen real de tu escuela (mensualidades × alumnos × 12, más tienda e inscripciones).",
          "Integración con tu sistema de cobros: si no se integra, alguien tiene que digitar cada factura.",
          "Notas crédito: que sean fáciles de emitir cuando hay devoluciones o errores.",
          "Acceso para tu contador y descarga de los XML y PDF.",
          "Soporte en español y tiempos de respuesta cuando la DIAN rechaza una factura.",
        ],
      },
      { type: "h2", content: "Calendario sugerido para el primer mes" },
      {
        type: "ol",
        items: [
          "Semana 1: reunión con tu contador para definir obligación, régimen y tratamiento de IVA de cada concepto. Actualización del RUT si hace falta.",
          "Semana 2: elección de proveedor, habilitación en la DIAN y set de pruebas.",
          "Semana 3: resolución de numeración y configuración de los conceptos en el software. Campaña a las familias para completar sus datos de facturación.",
          "Semana 4: primeras facturas reales con pocos pagos, revisión con el contador y, si todo cuadra, activar la emisión para toda la escuela.",
        ],
      },
      { type: "h2", content: "Cómo lo resuelve SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps la integración de facturación electrónica DIAN es gratis en todos los planes: solo pagas el paquete según la cantidad de facturas que emitas, más barato que contratar un proveedor tradicional por separado. Cuando un pago se confirma, por pasarela o como pago manual, la factura se puede emitir con los datos del acudiente que paga. El contador de la escuela puede tener su propio acceso, de solo lectura, para revisar el estado de las facturas sin pedirte reportes. Si además quieres llevar ingresos, egresos y cierre de mes dentro de SportMaps, el módulo de contabilidad es un adicional (incluido en el plan Elite).",
      },
      {
        type: "cta",
        title: "Factura cada mensualidad sin digitarla",
        description:
          "Integración DIAN gratis en todos los planes; solo pagas el paquete de facturas que uses.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    faqs: [
      {
        question: "¿Una escuela deportiva está obligada a emitir factura electrónica?",
        answer:
          "Si funciona como persona jurídica (SAS, club, corporación o fundación), en general sí. Las personas naturales no responsables de IVA que cumplen las condiciones del artículo 616-2 del Estatuto Tributario no están obligadas. Confirma tu caso con un contador.",
      },
      {
        question: "¿Los clubes deportivos sin ánimo de lucro deben facturar?",
        answer:
          "En general, las entidades sin ánimo de lucro también deben expedir factura electrónica por los servicios que venden. El tratamiento tributario de las mensualidades depende de su régimen, así que la configuración debe revisarla su contador.",
      },
      {
        question: "¿A nombre de quién se hace la factura de la mensualidad de mi hijo?",
        answer:
          "A nombre de quien paga: el padre, la madre o el acudiente, o su empresa si así lo pide. El menor de edad no es el comprador. Por eso la escuela necesita el documento y el nombre del pagador.",
      },
      {
        question: "¿Cómo se anula una factura electrónica mal hecha?",
        answer:
          "Una factura electrónica validada por la DIAN no se borra. Si tiene un error o hubo una devolución, se emite una nota crédito que la anula total o parcialmente y, si corresponde, una factura nueva con los datos correctos.",
      },
      {
        question: "¿La DIAN tiene un software gratis para facturar?",
        answer:
          "Sí, la DIAN ofrece una solución gratuita de facturación electrónica. Sirve para volúmenes bajos, pero cada factura se emite a mano en su portal; para facturar decenas de mensualidades al mes conviene un proveedor integrado con tu sistema de cobros.",
      },
    ],
    about: [
      "facturación electrónica",
      "DIAN",
      "obligaciones tributarias de clubes deportivos",
      "escuelas deportivas en Colombia",
    ],
    mentions: ["DIAN", "Wompi", "Mercado Pago"],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "cuanto-cuesta-software-escuela-deportiva-2026",
    ],
  },
];
