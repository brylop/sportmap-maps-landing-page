import type { BlogPost, ContentBlock } from "../blog-posts";

const AUTHOR = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
};

/** Tabla de planes vigente (COP/mes), compartida por los posts de este cluster. */
const PLANES: ContentBlock = {
  type: "table",
  headers: ["Plan", "Mensual", "Pago anual (por mes)", "Alumnos"],
  rows: [
    ["Free Start", "$0", "—", "20"],
    ["Escuela Start", "$69.000", "$59.000", "50"],
    ["Escuela Crecimiento", "$99.000", "$89.000", "120"],
    ["Escuela Pro", "$159.000", "$139.000", "300"],
    ["Escuela Elite", "$349.000", "$299.000", "800"],
    ["Custom", "desde $750.000", "—", "Ilimitados"],
  ],
};

const INCLUIDO: ContentBlock = {
  type: "p",
  content:
    "Todos los planes, incluido el gratis, traen el asistente de WhatsApp IA (solo le pagas a Meta si superas las 1.000 conversaciones de servicio gratis al mes), Wompi y Mercado Pago integrados sin comisión de SportMaps, entrenadores y staff ilimitados con roles, la página pública de la escuela con botón de inscripción y la integración de facturación electrónica DIAN, donde solo pagas el paquete según la cantidad de facturas. Torneos, tienda en línea y contabilidad con cierre de mes son adicionales (incluidos en Elite).",
};

export const ciudades2Posts: BlogPost[] = [
  // ───────────────────────────── CARTAGENA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-cartagena",
    title: "Software para escuelas deportivas en Cartagena: reconocimiento ante el IDER, escenarios y cobros",
    excerpt:
      "Qué hace el IDER con los clubes de Cartagena, qué escenarios quedaron de los Centroamericanos de 2006, cómo competir con la oferta gratuita del Distrito y cómo cobrar mensualidades sin perseguir comprobantes.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "16 Sep 2026",
    isoDate: "2026-09-16",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Una escuela o club deportivo en Cartagena tiene dos tareas distintas: estar en regla ante el IDER (Instituto Distrital de Deporte y Recreación), que es quien otorga y renueva el reconocimiento deportivo de los clubes del Distrito, y llevar una operación diaria ordenada: inscripciones, mensualidades, asistencia y comunicación con los papás. El trámite ante el IDER es gratuito y lo haces tú; un software como SportMaps se encarga de lo segundo y te deja la información lista cuando el IDER, una liga o una convocatoria de apoyos te la pide. Puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "En Cartagena el reconocimiento deportivo de clubes se tramita ante el IDER y, según el propio instituto, la expedición, la renovación y la asesoría son gratuitas. Tener el reconocimiento vigente es requisito para varios incentivos del IDER. SportMaps no tramita nada por ti, pero mantiene al día la lista de deportistas, acudientes, entrenadores, sedes y pagos que esos trámites piden.",
      },
      { type: "h2", content: "El IDER y el reconocimiento deportivo de tu club" },
      {
        type: "p",
        content:
          "El marco nacional (Ley 181 de 1995 y Decreto Ley 1228 de 1995) ya lo explicamos en la guía de Bogotá; lo que cambia en cada ciudad es la entidad y su manera de operar. En Cartagena la entidad es el IDER. Su página de reconocimiento deportivo publica modelos de carta de solicitud, acta de constitución, estatutos y compromiso deportivo, y remite a la Resolución 231 de 2011 de Coldeportes para los requisitos de un club convencional y de entidades no deportivas que quieran conformar uno. Como esa página es antigua, confirma con el instituto la versión vigente antes de radicar.",
      },
      {
        type: "table",
        headers: ["Dato", "Cartagena", "Fuente"],
        rows: [
          ["Entidad que otorga el reconocimiento", "IDER (Instituto Distrital de Deporte y Recreación)", "ider.gov.co, sección Reconocimiento deportivo"],
          ["Costo del trámite y la asesoría", "Gratuito", "ider.gov.co"],
          ["Vigencia del reconocimiento", "Cinco años (regla nacional, Ley 962 de 2005, art. 72)", "Ley 962 de 2005"],
          ["Escuelas de Iniciación y Formación Deportiva del IDER", "Más de 55 núcleos en las tres localidades, 26 deportes, niños y jóvenes de 6 a 17 años", "El Universal, notas de 2024 y agosto de 2026"],
          ["Inversión en escenarios", "Licitación de cerca de $3.600 millones para rehabilitar 15 escenarios, incluido el estadio Jaime Morón", "El Universal, julio de 2023"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: páginas del IDER y notas de El Universal citadas en cada fila, consultadas el 14 oct 2026. Un dato práctico: los comunicados de la Alcaldía sobre incentivos del IDER exigen que el organismo tenga reconocimiento deportivo y órgano administrativo vigentes. Si tu reconocimiento se vence, te quedas por fuera de esas convocatorias aunque tus deportistas sean buenos.",
      },
      { type: "h2", content: "Los escenarios: el legado de los Centroamericanos de 2006" },
      {
        type: "p",
        content:
          "Cartagena fue sede de los XX Juegos Centroamericanos y del Caribe en 2006. Buena parte de los escenarios que hoy usan las escuelas se crearon o remodelaron para ese evento, sobre todo en la Unidad Deportiva Fidel Mendoza Carrasquilla: el estadio de fútbol Jaime Morón, el estadio de béisbol Once de Noviembre, el Parque de Atletismo Campo Elías Gutiérrez, el Complejo Acuático Jaime González Johnson, el estadio de sóftbol Argemiro Bermúdez y el Coliseo de Deportes de Combate (El Universal). La misma prensa local ha documentado problemas de mantenimiento, como la pista atlética que en 2012 solo servía en 100 metros.",
      },
      {
        type: "p",
        content:
          "Para tu operación eso significa dos cosas. Primero, los escenarios públicos se cierran por obras o eventos, y cuando pasa tienes que avisar a todas las familias en minutos. Segundo, muchas escuelas terminan entrenando en canchas de barrio o en colegios, con grupos repartidos por la ciudad. En SportMaps manejas varias sedes, cada una con sus grupos, horarios y entrenadores, y los avisos de calendario llegan a los papás dentro de la app y como notificación push.",
      },
      { type: "h2", content: "Competir con la oferta gratuita del Distrito" },
      {
        type: "p",
        content:
          "El programa insignia del IDER son las Escuelas de Iniciación y Formación Deportiva, gratuitas. Según El Universal, más de 20.000 niños han pasado por ellas. Una escuela privada no le gana a eso por precio. Le gana por continuidad (el mismo entrenador todo el año), por grupos más pequeños y por el servicio a la familia. Esto último es donde un sistema se nota:",
      },
      {
        type: "ul",
        items: [
          "Informe mensual del atleta que les llega a los papás por correo y notificación push, con asistencia y observaciones del entrenador.",
          "Carné digital con QR para cada deportista; puedes generarlos en lote y descargar un PDF por equipo.",
          "Clase de prueba que el papá puede agendar sin llamarte, y descuento por hermanos configurado una sola vez.",
          "Recordatorios de cobro claros con enlace de pago, en vez de mensajes incómodos en el grupo.",
        ],
      },
      { type: "h2", content: "Cobrar mensualidades en Cartagena sin perseguir a nadie" },
      {
        type: "p",
        content:
          "Las familias pagan por Nequi, transferencia Bancolombia, PSE, tarjeta y efectivo. El problema no es el medio, es conciliar. SportMaps genera la inscripción (una sola vez) y la mensualidad de cada atleta por periodo, y envía recordatorios por WhatsApp y correo tres días antes, el día del vencimiento y a los 3, 10 y 20 días, con un enlace corto que el papá abre sin iniciar sesión.",
      },
      {
        type: "table",
        headers: ["Cómo paga la familia", "Qué pasa en SportMaps", "Costo para la escuela"],
        rows: [
          ["Enlace de pago (PSE, Nequi, tarjeta, Bancolombia, billetera Mercado Pago)", "Wompi o Mercado Pago integrados; el pago se marca contra el cobro", "Solo la tarifa de la pasarela; SportMaps no cobra comisión"],
          ["Transferencia y comprobante por WhatsApp", "El asistente lee el comprobante en segundos, lo cruza con el cobro y lo deja listo para aprobar con un toque", "Gratis hasta 1.000 conversaciones de servicio al mes; el excedente lo cobra Meta"],
          ["Efectivo en la cancha", "Registro de pago manual con comprobante", "$0"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El recargo por mora es opcional y lo define tu escuela. La mora no cancela automáticamente al atleta: tú decides qué hacer con cada caso. Si usas torniquetes ZKTeco en sede propia (adicional), puedes bloquear el acceso por mora.",
      },
      { type: "h2", content: "Cómo arrancar en una semana" },
      {
        type: "ol",
        items: [
          "Crea la escuela y tus sedes: cada cancha, colegio o escenario donde entrenas.",
          "Define categorías por edad y equipos con su horario y entrenador.",
          "Comparte el enlace o el QR de inscripción para que los papás llenen la ficha y queden vinculados como acudientes.",
          "Configura inscripción, mensualidad y, si quieres, descuento por hermanos; conecta Wompi o Mercado Pago a tu cuenta.",
          "Conecta tu número de WhatsApp con Meta (registro integrado); el número sigue siendo tuyo.",
          "Pide a los entrenadores instalar la app en el celular y tomar asistencia desde la primera sesión.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo, no un cliente real: una escuela de fútbol con 45 niños repartidos en dos canchas de barrio cabe en Escuela Start ($69.000 al mes, o $59.000 al mes pagando el año). Si en temporada pasa de 50, sube a Escuela Crecimiento ($99.000, hasta 120 alumnos). Con 45 familias que escriben unas tres veces al mes por WhatsApp para mandar comprobantes o preguntar horarios, son unas 135 conversaciones, muy lejos de las 1.000 gratis que da Meta, así que el costo de WhatsApp sería $0.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tienes un solo grupo pequeño y todos pagan en efectivo en la cancha, un cuaderno alcanza. El plan gratis te sirve para probar sin compromiso.",
          "Si tu urgencia es renovar el reconocimiento ante el IDER, resuelve primero el trámite: el software ordena la operación, no reemplaza los documentos legales.",
          "Si nadie en tu escuela puede dedicar dos o tres horas la primera semana a cargar atletas y cobros, espera a tener ese tiempo.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en Cartagena, en orden",
        description:
          "Empieza gratis con hasta 20 alumnos, con WhatsApp IA y pasarelas incluidas. Soporte por WhatsApp desde Colombia.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-deportivas-barranquilla",
      "reconocimiento-deportivo-club-paso-a-paso",
      "leer-comprobantes-de-pago-con-ia",
    ],
    about: [
      "escuelas deportivas en Cartagena",
      "reconocimiento deportivo ante el IDER",
      "Juegos Centroamericanos y del Caribe 2006",
      "software de gestión deportiva",
    ],
    mentions: ["IDER", "Unidad Deportiva Fidel Mendoza Carrasquilla", "Wompi", "Mercado Pago", "Nequi", "PSE", "Bancolombia", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Dónde se tramita el reconocimiento deportivo de un club en Cartagena?",
        answer:
          "Ante el IDER, el Instituto Distrital de Deporte y Recreación de Cartagena. Según su página, la expedición, la renovación y la asesoría son gratuitas, y publica modelos de solicitud, acta de constitución y estatutos. Confirma la versión vigente de los requisitos antes de radicar.",
      },
      {
        question: "¿Cuánto dura el reconocimiento deportivo en Cartagena?",
        answer:
          "Cinco años desde que queda en firme el acto que lo otorga, igual que en el resto del país (Ley 962 de 2005, art. 72). Conviene renovarlo antes de que venza, porque varios incentivos del IDER exigen tenerlo vigente.",
      },
      {
        question: "¿Qué software usan las escuelas deportivas en Cartagena para cobrar mensualidades?",
        answer:
          "Muchas siguen con Excel y WhatsApp. SportMaps genera los cobros por periodo, envía enlaces de pago por PSE, Nequi o tarjeta con Wompi o Mercado Pago y lee con IA los comprobantes que mandan los papás, dejándolos listos para aprobar. Hay un plan gratis hasta 20 alumnos.",
      },
      {
        question: "¿Las escuelas del IDER son gratis?",
        answer:
          "Sí. Las Escuelas de Iniciación y Formación Deportiva del IDER son gratuitas y, según El Universal, funcionan en más de 55 núcleos de las tres localidades. Una escuela privada compite ofreciendo continuidad, grupos pequeños y mejor seguimiento a la familia.",
      },
      {
        question: "¿Cuánto cuesta un software para una escuela deportiva en Cartagena?",
        answer:
          "En SportMaps hay un plan gratis hasta 20 alumnos y planes desde $69.000 al mes (50 alumnos) hasta $349.000 (800 alumnos). WhatsApp IA, pasarelas y staff ilimitado vienen en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── SANTA MARTA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-santa-marta",
    title: "Software para escuelas deportivas en Santa Marta: INRED, escenarios de los Bolivarianos 2017 y cobros",
    excerpt:
      "Qué entidad maneja el deporte en Santa Marta, qué dejaron los Juegos Bolivarianos de 2017, cómo convivir con las Escuelas Populares del Deporte y cómo organizar cobros y asistencia de tu escuela.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "19 Sep 2026",
    isoDate: "2026-09-19",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En Santa Marta el ente deportivo del Distrito es el INRED (Instituto Distrital de Recreación y Deportes), que administra programas como las Escuelas Populares del Deporte y el mantenimiento de escenarios; muchos de esos escenarios son herencia de los Juegos Bolivarianos de 2017. Una escuela privada necesita dos cosas: tener su situación legal clara ante el ente deportivo y una operación diaria ordenada. Un software como SportMaps cubre lo segundo —inscripciones, mensualidades, asistencia, avisos a familias— y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Ojo con el nombre: en Santa Marta es INRED, no un «Inder». La ciudad tiene escenarios de nivel internacional por los Bolivarianos 2017, pero también una oferta pública gratuita para niños de 6 a 14 años. Una escuela privada se diferencia por seguimiento y servicio a la familia, y ahí un sistema de gestión ahorra horas cada semana.",
      },
      { type: "h2", content: "Lo que dejaron los Juegos Bolivarianos 2017" },
      {
        type: "p",
        content:
          "Santa Marta fue sede de los XVIII Juegos Bolivarianos en noviembre de 2017. La Alcaldía presenta los escenarios construidos como el legado de esos Juegos, y sus comunicados mencionan el coliseo mayor «Del Cambio», el coliseo menor «Buen Vivir», el complejo de raquetas «La Libertad» y el Complejo Acuático. El Estadio Sierra Nevada, con capacidad para 16.162 personas, fue la sede del fútbol y desde 2018 es la casa del Unión Magdalena.",
      },
      {
        type: "table",
        headers: ["Escenario o dato", "Detalle", "Fuente"],
        rows: [
          ["Estadio Sierra Nevada", "16.162 espectadores; sede del fútbol en 2017; casa del Unión Magdalena desde 2018", "Wikipedia, Estadio Sierra Nevada"],
          ["Avance de obras a días de los Juegos (oct. 2017)", "Complejo acuático 90 %, coliseo mayor 92 %, coliseo menor 96 %, estadio de fútbol 74 %, estadio de atletismo 80 %", "La República, oct. 2017"],
          ["Coliseos «Del Cambio» y «Buen Vivir», complejo de raquetas «La Libertad»", "Usados después como sedes de eventos universitarios y escolares", "santamarta.gov.co"],
          ["Escuelas Populares del Deporte (INRED)", "Gratuitas, niños y jóvenes de 7 a 14 años; atletismo, baloncesto, boxeo, fútbol, karate, taekwondo, voleibol, entre otras", "santamarta.gov.co"],
          ["Mantenimiento de escenarios 2025", "El INRED inició en mayo de 2025 una estrategia de recuperación, empezando por el Polideportivo de la 19", "Opinión Caribe, mayo de 2025"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: las indicadas en cada fila, consultadas el 14 oct 2026. Varias son de 2017 a 2025; el estado de cada escenario cambia con cada administración, así que confirma disponibilidad y horarios directamente con el INRED antes de comprometer un grupo.",
      },
      { type: "h2", content: "Reconocimiento deportivo y trámites" },
      {
        type: "p",
        content:
          "Si tu escuela es un club que quiere competir en el sistema de ligas, necesitas reconocimiento deportivo. Las reglas nacionales (Decreto Ley 1228 de 1995) las explicamos en nuestra guía paso a paso; en Santa Marta la puerta de entrada es el INRED. No encontramos en línea un instructivo vigente con plazos del INRED, así que la recomendación es pedir la lista de documentos directamente en el instituto. Lo que sí vas a necesitar, sea cual sea el formato, es información que debería salir de tu sistema:",
      },
      {
        type: "ul",
        items: [
          "Listado de deportistas con documento, fecha de nacimiento, categoría y acudiente.",
          "Entrenadores y directivos con su rol.",
          "Sede y horario de cada grupo.",
          "Historial de asistencia y de pagos.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada atleta tiene su ficha con acudientes vinculados, los entrenadores y administrativos se crean sin límite en todos los planes con su rol (coach, admin, recepción, contador) y la asistencia y los pagos quedan por fecha. Exportar la lista para un trámite deja de ser una tarde de trabajo.",
      },
      { type: "h2", content: "Calor, playa y horarios partidos" },
      {
        type: "p",
        content:
          "En Santa Marta casi nadie entrena al mediodía. Lo normal son dos franjas, temprano y al final de la tarde, y en deportes de playa (voleibol playa, fútbol playa) la cancha es la arena y cambia según la marea de turistas en temporada. Eso pide un calendario flexible: si mueves un grupo de franja o de playa, todas las familias de ese grupo deben enterarse a la vez. En SportMaps cada grupo tiene su horario y sede, y un aviso de calendario les llega a los papás dentro de la app y como notificación push.",
      },
      {
        type: "p",
        content:
          "Para tomar asistencia en la playa o en un parque, sin torniquete posible, el entrenador lo hace desde el celular: manual o escaneando el carné digital con QR. Los torniquetes y biométricos ZKTeco (adicional) tienen sentido cuando tienes sede propia, y ahí sí puedes bloquear el ingreso por mora si así lo decides.",
      },
      { type: "h2", content: "Cobrar mensualidades en Santa Marta" },
      {
        type: "p",
        content:
          "Las familias samarias pagan con Nequi, transferencia y efectivo, y cada vez más por PSE. SportMaps te deja cobrar la inscripción una sola vez y la mensualidad por periodo, con recordatorios automáticos por WhatsApp y correo (tres días antes, el día del vencimiento y a los 3, 10 y 20 días) que incluyen un enlace corto de pago que el papá abre sin iniciar sesión.",
      },
      {
        type: "ol",
        items: [
          "El papá paga por enlace (Wompi o Mercado Pago: PSE, Nequi, tarjeta) y el cobro queda marcado como pagado.",
          "O transfiere y manda el comprobante por WhatsApp: el asistente lo lee en segundos, lo cruza con el cobro y lo deja listo para que tú lo apruebes con un toque.",
          "O paga en efectivo: lo registras como pago manual con su comprobante.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "WhatsApp IA viene gratis en todos los planes. Meta da 1.000 conversaciones de servicio gratis al mes por número; solo si te excedes, Meta cobra el excedente directo a la tarjeta de tu escuela. Cada escuela conecta su propio número con el registro integrado de Meta.",
      },
      {
        type: "h2",
        content: "Lo que ve la familia",
      },
      {
        type: "p",
        content: "Al papá no le interesa el software; le interesa saber si su hijo fue a entrenar, cuánto debe y cuándo es el próximo partido. En SportMaps eso se resuelve sin descargar nada de una tienda de apps: la app se instala en el celular desde el navegador y llegan notificaciones push.",
      },
      {
        type: "ul",
        items: [
          "Calendario del grupo con avisos cuando cambia la franja o la playa de entrenamiento.",
          "Estado de cuenta con el enlace para pagar por PSE, Nequi o tarjeta.",
          "Informe mensual del atleta con asistencia y observaciones del entrenador.",
          "Carné digital con QR para entrar a entrenamientos y eventos.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "table",
        headers: [
          "Escuela de ejemplo",
          "Alumnos",
          "Plan sugerido",
          "Costo mensual",
        ],
        rows: [
          ["Voleibol playa, un grupo", "18", "Free Start", "$0"],
          ["Fútbol formativo, tres categorías", "70", "Escuela Crecimiento", "$99.000 ($89.000 pagando el año)"],
          ["Club multideporte con dos sedes", "250", "Escuela Pro", "$159.000 ($139.000 pagando el año)"],
        ],
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo: los nombres y tamaños son hipotéticos, para ubicar tu caso. Los precios son los públicos de SportMaps a octubre de 2026.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu escuela funciona solo en temporada de vacaciones con turistas que pagan una vez, quizá te sirve más un enlace de pago suelto que un sistema completo.",
          "Si tienes un solo grupo y cobras en efectivo, empieza por el plan gratis antes de pagar nada.",
          "Si no tienes claro todavía si serás club o escuela de formación, resuélvelo primero con el INRED: cambia qué documentos necesitas.",
        ],
      },
      {
        type: "cta",
        title: "Ordena tu escuela en Santa Marta",
        description:
          "Inscripción por enlace o QR, cobros con recordatorios y asistencia desde el celular. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "software-escuelas-deportivas-cartagena",
      "recordatorios-de-pago-por-whatsapp-automaticos",
      "control-de-asistencia-con-qr-y-torniquetes",
    ],
    about: [
      "escuelas deportivas en Santa Marta",
      "INRED Santa Marta",
      "Juegos Bolivarianos 2017",
      "software de gestión deportiva",
    ],
    mentions: ["INRED", "Estadio Sierra Nevada", "Unión Magdalena", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Cuál es el instituto de deporte de Santa Marta?",
        answer:
          "Es el INRED, Instituto Distrital de Recreación y Deportes de Santa Marta. Ejecuta programas como las Escuelas Populares del Deporte y el mantenimiento de escenarios del Distrito.",
      },
      {
        question: "¿Qué escenarios dejaron los Juegos Bolivarianos 2017 en Santa Marta?",
        answer:
          "Entre otros, el Estadio Sierra Nevada (16.162 espectadores), el coliseo mayor «Del Cambio», el coliseo menor «Buen Vivir», el complejo de raquetas «La Libertad» y un complejo acuático. Su estado y disponibilidad dependen de la administración de turno, así que conviene confirmarlos con el INRED.",
      },
      {
        question: "¿Las escuelas deportivas del Distrito en Santa Marta son gratis?",
        answer:
          "Sí. Las Escuelas Populares del Deporte del INRED son gratuitas para niños y jóvenes de 7 a 14 años, según la Alcaldía. Una escuela privada compite con continuidad, grupos pequeños y mejor seguimiento a cada familia.",
      },
      {
        question: "¿Cómo cobro mensualidades de mi escuela deportiva en Santa Marta sin perseguir a los papás?",
        answer:
          "Con cobros automáticos por periodo y recordatorios por WhatsApp y correo con enlace de pago. En SportMaps el papá paga por PSE, Nequi o tarjeta, o manda el comprobante por WhatsApp y el asistente lo deja listo para que lo apruebes.",
      },
      {
        question: "¿Cuánto cuesta SportMaps para una escuela en Santa Marta?",
        answer:
          "Hay un plan gratis hasta 20 alumnos y planes pagos desde $69.000 al mes. Los precios son los mismos en todo el país y WhatsApp IA y pasarelas vienen en todos los planes.",
      },
    ],
  },
  // ───────────────────────────── VILLAVICENCIO ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-villavicencio",
    title: "Software para escuelas deportivas en Villavicencio: IMDER, categorización de clubes y cobros",
    excerpt:
      "Cómo funciona la categorización de clubes del IMDER Villavicencio, qué escenarios quedaron de los Juegos Nacionales de 1985 y del complejo La Reliquia, y cómo tener los papeles y los cobros al día.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "23 Sep 2026",
    isoDate: "2026-09-23",
    ...AUTHOR,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "En Villavicencio el reconocimiento deportivo de clubes es un trámite del IMDER (Instituto Municipal de Deporte y Recreación), y desde 2026 el instituto además clasifica a los clubes en cuatro categorías según qué tan al día tengan sus documentos; de esa categoría depende el acceso a escenarios, implementación y otros apoyos. Por eso, en Villavicencio, tener la información de tu club ordenada ya no es solo comodidad: es plata y horas de cancha. Un software como SportMaps te mantiene al día la lista de deportistas, entrenadores, asistencia y pagos, y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El IMDER categoriza a los clubes en cuatro niveles según el cumplimiento documental, y la categoría define el acceso a escenarios e implementación. Si tus listados, tus actas y tu operación están en orden, subes de categoría. SportMaps no tramita nada ante el IMDER, pero te deja exportar en minutos lo que te piden.",
      },
      { type: "h2", content: "La categorización de clubes del IMDER (2026)" },
      {
        type: "p",
        content:
          "El 23 de febrero de 2026 la Alcaldía de Villavicencio anunció que los clubes deportivos serían clasificados según su cumplimiento para acceder a apoyos del IMDER. El instituto socializó el proceso el 20 de febrero y recibió documentos entre el 23 de febrero y el 6 de abril de 2026. Esa ventana ya cerró, pero la lógica va a repetirse: cuanto mejor documentado esté tu club, mejor categoría y más apoyos.",
      },
      {
        type: "table",
        headers: ["Dato", "Villavicencio", "Fuente"],
        rows: [
          ["Entidad", "IMDER Villavicencio (Instituto Municipal de Deporte y Recreación)", "villavicencio.gov.co; imdervillavicencio.gov.co"],
          ["Reconocimiento deportivo", "Acto que vincula clubes, ligas y asociaciones al Sistema Nacional del Deporte; vigencia de cinco años", "imdervillavicencio.gov.co, glosario y trámites"],
          ["Categorización de clubes 2026", "Cuatro categorías según cumplimiento; recepción de documentos del 23 feb. al 6 abr. 2026", "villavicencio.gov.co (23 feb. 2026); imdervillavicencio.gov.co"],
          ["Qué define la categoría", "Acceso a uso de escenarios, implementación deportiva y otros beneficios", "villavicencio.gov.co"],
          ["Complejo La Reliquia (comuna 10)", "Inversión cercana a $9.687 millones y 13 meses de obra; fútbol, baloncesto, voleibol, voleibol playa, gimnasia, taekwondo y boxeo", "RTVC y Radio Nacional, 2023"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: Alcaldía de Villavicencio, sitio del IMDER y notas de RTVC y Radio Nacional, consultadas el 14 oct 2026. El marco nacional del reconocimiento (Decreto Ley 1228 de 1995) lo explicamos en la guía de reconocimiento deportivo paso a paso.",
      },
      { type: "h2", content: "Escenarios: del legado de 1985 a La Reliquia" },
      {
        type: "p",
        content:
          "Villavicencio fue sede de los XII Juegos Nacionales en 1985. Según El Tiempo, de esa época vienen el estadio Macal, los coliseos Los Conquistadores y La Grama, la piscina Olímpica, el diamante de sóftbol y la Villa Olímpica, que el diario describe como la mayor inversión en escenarios deportivos que se ha hecho en el Meta. En 2023 se sumó el complejo La Reliquia, el más grande de la ciudad según la Alcaldía.",
      },
      {
        type: "p",
        content:
          "Con escenarios públicos compartidos, tu escuela depende de la programación del IMDER: si te asignan una franja distinta o cierran un coliseo, tienes que avisar a todos los papás de ese grupo. Con SportMaps cada grupo tiene sede, horario y entrenador, y los avisos de calendario les llegan a las familias dentro de la app y como notificación push. Si tienes grupos en varios escenarios, manejas todo como multi-sede.",
      },
      { type: "h2", content: "Lo que el IMDER (y cualquier convocatoria) te va a pedir" },
      {
        type: "ul",
        items: [
          "Listado de deportistas con documento, fecha de nacimiento, categoría y acudiente.",
          "Directivos y entrenadores con su rol.",
          "Actas y estatutos vigentes (esto sí vive fuera del software: guárdalos en una carpeta compartida).",
          "Evidencia de actividad: asistencia por sesión, grupos y horarios.",
          "Historial de pagos si postulas a un apoyo que exige demostrar sostenibilidad.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps la asistencia queda registrada por fecha y grupo (manual, por QR o con torniquetes ZKTeco si tienes sede propia, como adicional), las fichas de atletas tienen acudientes vinculados y los entrenadores y administrativos son ilimitados en todos los planes.",
      },
      { type: "h2", content: "Cobros en Villavicencio" },
      {
        type: "p",
        content:
          "El calor llanero y las lluvias de mitad de año cambian la asistencia, pero no deberían cambiar el flujo de caja. Lo que más tiempo le quita a un director no es cobrar, es confirmar quién pagó. SportMaps genera inscripción (una vez) y mensualidad por periodo, y manda recordatorios por WhatsApp y correo en los días -3, 0, +3, +10 y +20 con un enlace corto de pago que no exige iniciar sesión.",
      },
      {
        type: "table",
        headers: ["Situación", "Sin sistema", "Con SportMaps"],
        rows: [
          ["Papá transfiere por Nequi y manda captura", "Revisar la captura contra la lista a mano", "El asistente de WhatsApp la lee, la cruza con el cobro y la deja lista para aprobar"],
          ["Papá quiere pagar con PSE o tarjeta", "Pasarle un número de cuenta", "Enlace de pago Wompi o Mercado Pago; la plata va directo a tu cuenta"],
          ["Familia con dos hijos", "Calcular el descuento cada mes", "Descuento por hermanos configurado una vez"],
          ["Atleta atrasado", "Mensaje incómodo en el grupo", "Recordatorio automático; recargo por mora solo si tu escuela lo activa"],
        ],
      },
      { type: "h2", content: "Cómo arrancar" },
      {
        type: "ol",
        items: [
          "Crea la escuela y registra cada escenario donde entrenas como sede.",
          "Define categorías por edad y equipos.",
          "Comparte el enlace o QR de inscripción con los papás.",
          "Configura inscripción y mensualidad y conecta tu pasarela.",
          "Conecta tu WhatsApp con el registro integrado de Meta.",
          "Pide a los entrenadores tomar asistencia desde el celular desde la primera semana: eso es lo que después demuestra actividad ante el IMDER.",
        ],
      },
      {
        type: "h2",
        content: "Para los entrenadores",
      },
      {
        type: "p",
        content: "La categorización del IMDER mira papeles, pero lo que retiene a los deportistas es el trabajo en la cancha. En SportMaps los entrenadores planifican la temporada por mesociclos y sesiones, registran evaluaciones físicas y métricas de rendimiento y llevan el registro de partidos. En fútbol, la pizarra táctica 2D les deja armar jugadas, alineaciones y ejercicios y guardarlos en una biblioteca. Todo queda ligado al atleta, así que el informe mensual que reciben los papás sale de datos reales y no de memoria.",
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo, no un cliente real: un club de baloncesto con 130 deportistas en dos coliseos ya supera el tope de Escuela Crecimiento (120), así que le corresponde Escuela Pro: $159.000 al mes o $139.000 pagando el año. Si 130 familias escriben unas cuatro veces al mes por WhatsApp, son unas 520 conversaciones, por debajo de las 1.000 gratis de Meta. El costo de WhatsApp sería $0 y las pasarelas solo cobran su propia tarifa por transacción.",
      },
      {
        type: "callout",
        variant: "info",
        content: "Si tu club recibe apoyos del IMDER o de la Gobernación, conviene separar ingresos y egresos. El módulo de contabilidad con cierre de mes es un adicional (incluido en Elite); para empezar, el historial de pagos y comprobantes de todos los planes suele bastar.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu club todavía no tiene estatutos ni actas, empieza por ahí: ningún software te sube de categoría sin esos documentos.",
          "Si tienes menos de 20 deportistas y cobras en efectivo, un cuaderno funciona; el plan gratis te sirve para probar.",
          "Si no tienes quién cargue los datos la primera semana, espera a tener ese tiempo.",
        ],
      },
      {
        type: "cta",
        title: "Llega a la próxima categorización con todo en orden",
        description:
          "Fichas, asistencia y pagos en un solo lugar. Empieza gratis con hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "reconocimiento-deportivo-club-paso-a-paso",
      "como-cobrar-mensualidades-escuela-deportiva",
      "software-escuelas-deportivas-bogota",
    ],
    about: [
      "escuelas y clubes deportivos en Villavicencio",
      "IMDER Villavicencio",
      "categorización de clubes deportivos",
      "software de gestión deportiva",
    ],
    mentions: ["IMDER Villavicencio", "Complejo La Reliquia", "Estadio Macal", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Quién da el reconocimiento deportivo a los clubes en Villavicencio?",
        answer:
          "El IMDER, Instituto Municipal de Deporte y Recreación de Villavicencio. El reconocimiento vincula al club con el Sistema Nacional del Deporte y tiene una vigencia de cinco años. Los requisitos están en la sección de trámites del sitio del IMDER.",
      },
      {
        question: "¿Qué es la categorización de clubes del IMDER Villavicencio?",
        answer:
          "Es un proceso de 2026 en el que el IMDER ubica a cada club en una de cuatro categorías según el cumplimiento de sus documentos. La categoría determina el acceso a escenarios, implementación y otros apoyos. La recepción de documentos de 2026 fue del 23 de febrero al 6 de abril.",
      },
      {
        question: "¿Qué escenarios deportivos hay en Villavicencio para escuelas?",
        answer:
          "Entre los principales están el estadio Macal, los coliseos Los Conquistadores y La Grama, la piscina Olímpica y la Villa Olímpica, herencia de los Juegos Nacionales de 1985, y el complejo La Reliquia en la comuna 10, inaugurado en 2023. El acceso se gestiona con el IMDER.",
      },
      {
        question: "¿Cómo demuestro que mi club está activo ante el IMDER?",
        answer:
          "Con registros de actividad: listado de deportistas, grupos y horarios, y asistencia por sesión. Si tomas asistencia desde el celular en un sistema como SportMaps, ese historial queda guardado por fecha y lo puedes exportar.",
      },
      {
        question: "¿Cuánto cuesta un software para un club deportivo en Villavicencio?",
        answer:
          "SportMaps tiene un plan gratis hasta 20 alumnos y planes desde $69.000 al mes. WhatsApp IA, pasarelas de pago y staff ilimitado vienen en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── IBAGUÉ ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-ibague",
    title: "Software para escuelas y clubes deportivos en Ibagué: IMDRI, reconocimiento vencido y cobros",
    excerpt:
      "El IMDRI asesora gratis a los clubes de Ibagué y ha advertido que muchos tienen el reconocimiento vencido. Qué piden, qué escenarios hay después de los Juegos Nacionales 2015 y cómo ordenar la operación.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "26 Sep 2026",
    isoDate: "2026-09-26",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "En Ibagué el reconocimiento deportivo de clubes lo otorga y renueva el IMDRI (Instituto Municipal para el Deporte y la Recreación de Ibagué), con reglas propias adoptadas en la Resolución 0119 de 2017, y el instituto asesora gratis a los clubes en lo administrativo, técnico y financiero. El problema histórico de la ciudad no es crear clubes sino mantenerlos al día: en 2017 el municipio reportó 310 clubes, con más del 60 % del reconocimiento vencido. Un software como SportMaps no renueva nada por ti, pero mantiene la información que esos trámites piden, y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tienes un club en Ibagué, revisa hoy la fecha de vencimiento de tu reconocimiento: dura cinco años y, sin él, no puedes participar en eventos oficiales. El IMDRI publica los modelos de documentos y asesora gratis. Lo que más tarda es reconstruir listados de deportistas y directivos; eso es lo que un sistema te deja listo.",
      },
      { type: "h2", content: "El reconocimiento deportivo ante el IMDRI" },
      {
        type: "p",
        content:
          "El marco nacional (Decreto Ley 1228 de 1995) lo cubrimos en la guía de reconocimiento paso a paso. Lo particular de Ibagué es que el municipio tiene reglamento propio: la Resolución 0119 del 12 de junio de 2017 adopta el reglamento para otorgar el reconocimiento deportivo a los clubes de Ibagué. En la página de clubes del IMDRI están los modelos que vas a necesitar.",
      },
      {
        type: "table",
        headers: ["Documento que publica el IMDRI", "Para qué sirve", "Lo que tu sistema debería darte"],
        rows: [
          ["Listado de deportistas y directivos", "Demostrar quién conforma el club", "Exportación de fichas con documento, fecha de nacimiento y categoría"],
          ["Modelo de estatutos", "Reglas internas del club", "— (documento legal, vive fuera del software)"],
          ["Acta de reunión del órgano administrativo y de distribución de cargos", "Quién dirige el club", "Roles de staff actualizados"],
          ["Acta de compromiso deportivo", "Compromiso con la práctica deportiva", "—"],
          ["Plan de desarrollo deportivo", "Qué va a hacer el club", "Grupos, horarios, planificación de entrenamientos"],
          ["Requisitos del órgano de control y comisión disciplinaria", "Gobierno del club", "—"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: página «Requisitos para conformar un club deportivo» de imdri.gov.co y nota de la Alcaldía de Ibagué del 6 de septiembre de 2017 (310 clubes, más del 60 % con reconocimiento vencido, Resolución 0119 de 2017), consultadas el 14 oct 2026. La cifra de clubes es de 2017; pide al IMDRI el dato actualizado. Según el instituto, los documentos se envían por correo y el reconocimiento tiene vigencia de cinco años.",
      },
      {
        type: "p",
        content:
          "El IMDRI funciona en el Parque Deportivo, a la salida hacia el aeropuerto Perales, y además del reconocimiento recibe solicitudes de actualización del periodo estatutario de ligas y clubes. Si tu club cambió de presidente o de junta, esa actualización es la que te deja seguir inscribiendo deportistas en torneos oficiales. Un consejo práctico: arma una carpeta compartida con estatutos, actas y la resolución vigente, y deja en SportMaps lo que cambia todos los meses (deportistas, acudientes, staff y asistencia). Así, cuando el IMDRI abra convocatoria de actualización, solo exportas el listado y adjuntas los documentos.",
      },
      { type: "h2", content: "Escenarios después de los Juegos Nacionales 2015" },
      {
        type: "p",
        content:
          "Ibagué y el Tolima fueron sede de los Juegos Nacionales de 2015, y la historia de sus escenarios es conocida: a un mes de las justas cinco disciplinas tuvieron que cambiar de sede por obras sin terminar (Noticias RCN), y la Contraloría emitió fallos fiscales por los escenarios inconclusos (El Tiempo, Semana). En 2017 Coldeportes anunció que la pista de patinaje, el coliseo de atletismo del Parque Deportivo, la piscina olímpica y el coliseo de la Unidad Deportiva de la calle 42 estarían listos en 2018 (El Espectador). Un estudio de la Universidad de Ibagué señaló que los más afectados fueron los deportistas de ligas, que perdieron espacios de entrenamiento.",
      },
      {
        type: "p",
        content:
          "Para una escuela eso se traduce en algo concreto: los horarios en escenarios públicos son escasos y cambian. Si tu grupo pasa del Parque Deportivo a una cancha de barrio, todas las familias tienen que enterarse a tiempo. En SportMaps cada grupo tiene sede y horario, y los avisos de calendario llegan a los papás dentro de la app y como notificación push. Si manejas grupos en varios lugares, todo queda como multi-sede.",
      },
      { type: "h2", content: "Cobrar mensualidades en Ibagué" },
      {
        type: "p",
        content:
          "SportMaps genera la inscripción (una sola vez) y la mensualidad por periodo para cada atleta, y envía recordatorios automáticos por WhatsApp y correo tres días antes, el día del vencimiento y a los 3, 10 y 20 días, con un enlace corto que el papá abre sin iniciar sesión.",
      },
      {
        type: "ul",
        items: [
          "Pagos en línea con Wompi o Mercado Pago (PSE, Nequi, tarjetas, Bancolombia): la plata va directo a la cuenta de tu escuela y SportMaps no cobra comisión.",
          "Transferencias: el papá manda el comprobante por WhatsApp, el asistente lo lee, lo cruza con el cobro y lo deja listo para que lo apruebes con un toque.",
          "Efectivo: registro de pago manual con comprobante.",
          "Recargo por mora opcional, definido por la escuela; la mora no cancela al atleta automáticamente.",
        ],
      },
      { type: "h2", content: "Para entrenadores y familias" },
      {
        type: "p",
        content:
          "Los entrenadores toman asistencia desde el celular (manual o con el carné digital QR del atleta), registran evaluaciones físicas y planifican mesociclos y sesiones. Si entrenas fútbol, la pizarra táctica 2D te deja armar jugadas, alineaciones y ejercicios. Las familias reciben cada mes el informe del atleta por correo y notificación push, y pueden pagar desde el celular en un minuto.",
      },
      { type: "h2", content: "Cómo arrancar" },
      {
        type: "ol",
        items: [
          "Revisa la vigencia de tu reconocimiento ante el IMDRI y, si venció, pide la asesoría gratuita.",
          "Crea la escuela en SportMaps, tus sedes, categorías y equipos.",
          "Comparte el enlace o QR de inscripción para que los papás llenen la ficha.",
          "Configura cobros y conecta tu pasarela y tu WhatsApp.",
          "Exporta el listado de deportistas y directivos cuando el IMDRI te lo pida.",
        ],
      },
      {
        type: "h2",
        content: "Errores comunes al renovar el reconocimiento",
      },
      {
        type: "ul",
        items: [
          "Dejar vencer el periodo estatutario de los directivos: el acta de elección deja de servir y hay que convocar asamblea antes de renovar.",
          "Presentar un listado de deportistas desactualizado, con niños que ya se retiraron o sin documento.",
          "No tener a la mano quién es el acudiente de cada menor.",
          "Enterarse del vencimiento cuando una liga pide el reconocimiento para inscribir en un torneo.",
        ],
      },
      {
        type: "p",
        content: "Los tres primeros los resuelves con información viva: si los papás llenan la ficha con el enlace o el QR de inscripción y el staff se mantiene actualizado en el sistema, el listado sale en minutos. El cuarto es de calendario: anota la fecha de vencimiento en el calendario de la escuela con un recordatorio a seis meses.",
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "table",
        headers: [
          "Club de ejemplo",
          "Deportistas",
          "Plan sugerido",
          "Costo mensual",
        ],
        rows: [
          ["Patinaje, un grupo", "20", "Free Start", "$0"],
          ["Fútbol, cuatro categorías", "95", "Escuela Crecimiento", "$99.000 ($89.000 pagando el año)"],
          ["Natación con dos piscinas", "180", "Escuela Pro", "$159.000 ($139.000 pagando el año)"],
        ],
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo: clubes hipotéticos para ubicar tu caso, con precios públicos de SportMaps a octubre de 2026.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu club es de un solo equipo de amigos sin cobros, no necesitas un sistema de cobranza.",
          "Si tu urgencia es el reconocimiento vencido, primero la asesoría del IMDRI; después ordenas la operación.",
          "Si nadie va a usar el sistema en la cancha, la información no va a estar al día. Asegura que al menos un entrenador tome asistencia.",
        ],
      },
      {
        type: "cta",
        title: "Que el reconocimiento no se te vuelva a vencer por falta de papeles",
        description:
          "Fichas, staff, asistencia y cobros en un solo lugar. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "reconocimiento-deportivo-club-paso-a-paso",
      "software-escuelas-deportivas-eje-cafetero",
      "planificacion-entrenamiento-mesociclos-escuela",
    ],
    about: [
      "clubes deportivos en Ibagué",
      "IMDRI Ibagué",
      "reconocimiento deportivo de clubes",
      "Juegos Nacionales 2015",
    ],
    mentions: ["IMDRI", "Coldeportes", "Contraloría General de la República", "Wompi", "Mercado Pago", "Nequi", "PSE", "Bancolombia", "WhatsApp", "Meta"],
    faqs: [
      {
        question: "¿Qué norma regula el reconocimiento deportivo de clubes en Ibagué?",
        answer:
          "Además del Decreto Ley 1228 de 1995, Ibagué tiene la Resolución 0119 del 12 de junio de 2017 del IMDRI, que adopta el reglamento para otorgar el reconocimiento a los clubes del municipio. El IMDRI publica en su sitio los modelos de documentos.",
      },
      {
        question: "¿Cuánto dura el reconocimiento deportivo de un club en Ibagué?",
        answer:
          "Cinco años. Pasado ese tiempo hay que renovarlo; en 2017 el municipio reportó que más del 60 % de sus 310 clubes tenía el reconocimiento vencido.",
      },
      {
        question: "¿El IMDRI cobra por asesorar a los clubes?",
        answer:
          "No. Según la Alcaldía de Ibagué, el IMDRI asesora de forma gratuita a los clubes del municipio en lo administrativo, técnico y financiero.",
      },
      {
        question: "¿Qué software sirve para un club deportivo en Ibagué?",
        answer:
          "Uno que lleve fichas de deportistas con acudientes, staff con roles, asistencia y cobros. SportMaps hace todo eso, con cobros por PSE, Nequi o tarjeta y lectura de comprobantes por WhatsApp, y tiene un plan gratis hasta 20 alumnos.",
      },
      {
        question: "¿Cuánto cuesta SportMaps para un club de Ibagué?",
        answer:
          "Gratis hasta 20 alumnos y desde $69.000 al mes para 50 alumnos. El plan Escuela Pro, de $159.000 al mes, cubre hasta 300 deportistas.",
      },
    ],
  },

  // ───────────────────────────── CÚCUTA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-cucuta",
    title: "Software para escuelas deportivas en Cúcuta: IMRD, escenarios y cobros sin enredos",
    excerpt:
      "Qué hace el IMRD con las escuelas y clubes de Cúcuta, cuántos niños atiende la oferta pública, qué escenarios hay y cómo cobrar mensualidades y tomar asistencia sin Excel.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "30 Sep 2026",
    isoDate: "2026-09-30",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En Cúcuta el ente deportivo municipal es el IMRD (Instituto Municipal para la Recreación y el Deporte): da asistencia técnica a clubes en el reconocimiento deportivo y la actualización de datos, mantiene escenarios y opera escuelas deportivas gratuitas. Una escuela privada necesita tener su situación clara ante el IMRD y, sobre todo, una operación diaria que no dependa de cuadernos y grupos de WhatsApp. Un software como SportMaps ordena inscripciones, mensualidades, asistencia y comunicación con las familias, y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "En 2024 el IMRD reportó 3.418 niños y jóvenes en sus escuelas deportivas y 65 organismos deportivos asistidos. Si tu escuela es privada, compites con esa oferta por servicio, no por precio. Y si eres club, el IMRD te asesora en el reconocimiento: llega con tus listados al día.",
      },
      { type: "h2", content: "El IMRD en cifras" },
      {
        type: "table",
        headers: ["Indicador (2024)", "Meta", "Resultado", "Fuente"],
        rows: [
          ["Niños, niñas y jóvenes inscritos en escuelas deportivas", "3.000", "3.418", "IMRD, informe de rendición de cuentas 2024"],
          ["Organismos deportivos asistidos técnicamente", "63", "65", "IMRD, informe de rendición de cuentas 2024"],
          ["Infraestructuras deportivas mantenidas y adecuadas", "20", "20", "IMRD, informe de rendición de cuentas 2024"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Informe de rendición de cuentas, gestión institucional 2024 del IMRD Cúcuta (corte al 23 de diciembre de 2024), publicado en imrd-cucuta.gov.co y consultado el 14 oct 2026. El mismo informe lista asistencias técnicas a clubes en trámites de otorgamiento, renovación y actualización del reconocimiento, y en esa lista las disciplinas que más se repiten son fútbol, patinaje, sóftbol y voleibol.",
      },
      { type: "h2", content: "Reconocimiento: el municipal y el del Ministerio" },
      {
        type: "p",
        content:
          "Hay una confusión frecuente en Cúcuta porque el caso más sonado de reconocimiento deportivo fue el del Cúcuta Deportivo, al que el Ministerio del Deporte le suspendió el reconocimiento. Ese es otro nivel: los clubes profesionales tienen el reconocimiento del Ministerio. Una escuela o club aficionado del municipio tramita el suyo ante el ente local, que en Cúcuta es el IMRD. Las reglas nacionales del Decreto Ley 1228 de 1995 las explicamos en la guía paso a paso.",
      },
      {
        type: "p",
        content:
          "Lo que el IMRD o una liga te va a pedir casi siempre: listado de deportistas con documento y acudiente, directivos y entrenadores, sede y horario de entrenamiento, y actas al día. En SportMaps las fichas de atletas tienen acudientes vinculados, los entrenadores y administrativos son ilimitados con su rol y la asistencia queda por fecha. Las actas y estatutos sí viven fuera del software.",
      },
      { type: "h2", content: "Escenarios: estadio, coliseos y patinódromo" },
      {
        type: "p",
        content:
          "Los escenarios que más se nombran en Cúcuta son el Estadio General Santander (dentro funciona el gimnasio de Indenorte, al que el IMRD le hizo mantenimiento en 2025, según la Alcaldía), el Coliseo Menor Eustorgio Colmenares y el Coliseo Toto Hernández, que la Gobernación renovó a través de Indenorte con una inversión de $5.000 millones (Gobernación de Norte de Santander, 2026). Para el patinaje, el patinadero Enrique Lara Hernández ha recibido válidas nacionales de interclubes (El Universal, 2014).",
      },
      {
        type: "p",
        content:
          "Antes de escoger escenario, vale la pena preguntar al IMRD y a Indenorte qué franjas quedan libres y qué piden para asignarlas: casi siempre te piden demostrar que el grupo existe, con un listado de deportistas y su horario. Ojo con un detalle: unos escenarios son del municipio (IMRD) y otros del departamento (Indenorte). Si tu grupo usa ambos, tienes dos interlocutores y dos calendarios de cierres. En SportMaps registras cada escenario como sede y, cuando alguno cierra, mandas un aviso de calendario a las familias de ese grupo, que les llega dentro de la app y como notificación push.",
      },
      { type: "h2", content: "Atender a los papás que preguntan" },
      {
        type: "p",
        content:
          "Una escuela que crece recibe todos los días los mismos mensajes: cuánto vale, qué horarios hay, si se puede hacer una clase de prueba. El asistente de WhatsApp de SportMaps también atiende a esos prospectos: responde precios con la información que tú configuras y agenda la clase de cortesía. Tú ves la cita en el sistema y decides el seguimiento. La página pública de la escuela, con cuatro diseños y botón de inscripción, completa el circuito: el papá ve la escuela, agenda la prueba y, si se queda, se inscribe con el mismo enlace.",
      },
      { type: "h2", content: "Calor y horarios" },
      {
        type: "p",
        content:
          "En Cúcuta hace calor buena parte del año, y muchas escuelas lo resuelven con entrenamientos temprano o al final de la tarde. Eso pide grupos con horarios bien definidos y asistencia rápida: el entrenador la toma desde el celular, manual o escaneando el carné digital con QR. Si tienes sede propia, los torniquetes ZKTeco (adicional) registran el ingreso solo y pueden bloquearlo por mora si así lo decides.",
      },
      { type: "h2", content: "Cobrar mensualidades en Cúcuta" },
      {
        type: "ol",
        items: [
          "Configura la inscripción (se cobra una vez) y la mensualidad por periodo.",
          "Activa los recordatorios automáticos por WhatsApp y correo: tres días antes, el día del vencimiento y a los 3, 10 y 20 días, con enlace corto de pago sin iniciar sesión.",
          "Conecta Wompi o Mercado Pago para recibir PSE, Nequi y tarjetas directo en tu cuenta, sin comisión de SportMaps.",
          "Conecta tu número de WhatsApp con Meta para que el asistente lea los comprobantes de transferencia y te los deje listos para aprobar.",
          "Registra los pagos en efectivo como pago manual con comprobante.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El recargo por mora es opcional y lo decide tu escuela. La mora no cancela automáticamente al atleta. WhatsApp IA es gratis en todos los planes; solo pagas a Meta si superas las 1.000 conversaciones de servicio gratis al mes.",
      },
      {
        type: "h2",
        content: "Para entrenadores y familias",
      },
      {
        type: "p",
        content: "Los entrenadores planifican mesociclos y sesiones, registran evaluaciones físicas y, si dirigen fútbol, usan la pizarra táctica 2D para jugadas y alineaciones. Las familias reciben cada mes el informe del atleta por correo y notificación push, ven el calendario del grupo y pagan desde el celular. Si la escuela trabaja con fisioterapeutas, pueden llevar la historia clínica deportiva con el consentimiento del acudiente.",
      },
      {
        type: "h2",
        content: "Cómo arrancar en una semana",
      },
      {
        type: "ol",
        items: [
          "Crea la escuela y registra como sede cada escenario donde entrenas, sea del IMRD o de Indenorte.",
          "Define categorías por edad y equipos con su horario y entrenador.",
          "Comparte el enlace o el QR de inscripción y publica la página de tu escuela con botón de inscripción.",
          "Configura cobros, pasarela y WhatsApp.",
          "Genera los carnés digitales en lote, un PDF por equipo, y pide a los entrenadores tomar asistencia desde la primera sesión.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo, no un cliente real: una escuela de patinaje con 60 deportistas necesita Escuela Crecimiento ($99.000 al mes, o $89.000 pagando el año). Si sus 60 familias escriben unas tres veces al mes por WhatsApp, son unas 180 conversaciones, por debajo de las 1.000 gratis de Meta, así que WhatsApp no le costaría nada.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si casi todas tus familias pagan en efectivo y no usan WhatsApp para comprobantes, el ahorro de tiempo es menor; empieza con el plan gratis y mide.",
          "Si tu escuela tiene un solo grupo de menos de 20 niños, un cuaderno puede bastar.",
          "Si tu prioridad es el reconocimiento, resuelve primero con el IMRD.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en Cúcuta, sin cuadernos",
        description:
          "Inscripción por QR, cobros con recordatorios y asistencia desde el celular. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-deportivas-bucaramanga",
      "reconocimiento-deportivo-club-paso-a-paso",
      "recordatorios-de-pago-por-whatsapp-automaticos",
    ],
    about: [
      "escuelas deportivas en Cúcuta",
      "IMRD Cúcuta",
      "reconocimiento deportivo de clubes",
      "software de gestión deportiva",
    ],
    mentions: ["IMRD Cúcuta", "Indenorte", "Ministerio del Deporte", "Cúcuta Deportivo", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Qué es el IMRD de Cúcuta?",
        answer:
          "Es el Instituto Municipal para la Recreación y el Deporte de Cúcuta. Opera escuelas deportivas gratuitas, mantiene escenarios y da asistencia técnica a clubes en trámites como el reconocimiento deportivo. En 2024 reportó 3.418 inscritos en sus escuelas.",
      },
      {
        question: "¿Dónde tramita el reconocimiento deportivo un club aficionado de Cúcuta?",
        answer:
          "Ante el ente deportivo municipal, el IMRD, que asesora a los clubes en el otorgamiento, la renovación y la actualización de datos. El reconocimiento de los clubes profesionales, como el Cúcuta Deportivo, es del Ministerio del Deporte.",
      },
      {
        question: "¿Qué escenarios deportivos hay en Cúcuta para escuelas?",
        answer:
          "Entre los más usados están el Estadio General Santander, el Coliseo Menor Eustorgio Colmenares, el Coliseo Toto Hernández (renovado por Indenorte) y el patinadero Enrique Lara Hernández. Unos dependen del municipio y otros del departamento.",
      },
      {
        question: "¿Cómo cobro la mensualidad de mi escuela deportiva en Cúcuta?",
        answer:
          "Con cobros automáticos por periodo y recordatorios con enlace de pago por WhatsApp y correo. En SportMaps los papás pagan por PSE, Nequi o tarjeta con Wompi o Mercado Pago, o mandan el comprobante por WhatsApp para que lo apruebes.",
      },
      {
        question: "¿Cuánto cuesta SportMaps en Cúcuta?",
        answer:
          "Igual que en todo el país: gratis hasta 20 alumnos y desde $69.000 al mes. Las pasarelas y el WhatsApp IA vienen incluidos.",
      },
    ],
  },
  // ───────────────────────────── PASTO ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-pasto",
    title: "Software para escuelas deportivas en Pasto: Pasto Deporte, escenarios en recuperación y cobros",
    excerpt:
      "Qué es Pasto Deporte, qué escenarios están en obra en 2026, por qué el caso del Deportivo Pasto no aplica a tu club y cómo organizar inscripciones, mensualidades y asistencia.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En Pasto el ente deportivo municipal es el Instituto Municipal para la Recreación y el Deporte, conocido como Pasto Deporte. Opera escuelas deportivas gratuitas para niños y jóvenes de 6 a 17 años, organiza la fase municipal de los Juegos Intercolegiados y administra escenarios como el Coliseo Sergio Antonio Ruano. Una escuela o club privado necesita, además de estar en regla, una operación diaria ordenada; un software como SportMaps lleva inscripciones, mensualidades, asistencia y comunicación con las familias, y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Pasto vive en 2026 un momento de obras: la Gobernación anunció más de $5.000 millones para recuperar escenarios y el Coliseo Sergio Antonio Ruano está en revisión estructural. Si tu escuela depende de escenarios públicos, vas a tener cambios de sede; necesitas avisar a las familias rápido y tener los grupos bien organizados.",
      },
      { type: "h2", content: "Escenarios de Pasto: lo que está en obra" },
      {
        type: "p",
        content:
          "En agosto de 2026 el gobernador de Nariño anunció inversiones para recuperar escenarios de Pasto que llevaban años deteriorados. Al mismo tiempo, en el Concejo se discutió el estado de la UDRA, la piscina semiolímpica de Aranda y los coliseos Sergio Antonio Ruano y de los Barrios Surorientales.",
      },
      {
        type: "table",
        headers: ["Escenario", "Inversión anunciada", "Fuente"],
        rows: [
          ["Bolera departamental", "Cerca de $2.800 millones", "Gobernación de Nariño, informe del 23 ago. 2026"],
          ["Piscina de Aranda", "Más de $1.000 millones", "Gobernación de Nariño, informe del 23 ago. 2026"],
          ["Pista de patinaje", "Cerca de $850 millones", "Gobernación de Nariño, informe del 23 ago. 2026"],
          ["Coliseo de los Barrios Surorientales", "Cerca de $800 millones", "Gobernación de Nariño, informe del 23 ago. 2026"],
          ["Pista de BMX", "Cerca de $500 millones", "Gobernación de Nariño, informe del 23 ago. 2026"],
          ["Coliseo Sergio Antonio Ruano", "Consultoría para decidir si se refuerza o se construye uno nuevo", "Concejo de Pasto, boletín de marzo de 2026; Radio Nacional"],
          ["Estadio Departamental Libertad", "Proyecto para techar todas las tribunas hacia 2027 (capacidad cercana a 20.000)", "Valora Analitik"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: informe de la Gobernación de Nariño del 23 de agosto de 2026, boletín del Concejo de Pasto de marzo de 2026 y notas de Radio Nacional y Valora Analitik, consultadas el 14 oct 2026. Los montos son anuncios; la ejecución puede cambiar.",
      },
      {
        type: "p",
        content:
          "Para tu escuela esto quiere decir que un grupo puede pasar de un coliseo a otro con poca anticipación. En SportMaps cada grupo tiene sede, horario y entrenador; cuando cambias de escenario, mandas un aviso de calendario a las familias de ese grupo y les llega dentro de la app y como notificación push. Si entrenas en varios sitios, manejas todo como multi-sede.",
      },
      { type: "h2", content: "Lo que el caso del Deportivo Pasto no significa para tu club" },
      {
        type: "p",
        content:
          "En noviembre de 2024 el Ministerio del Deporte suspendió el reconocimiento deportivo del Deportivo Pasto por incumplimientos laborales y de seguridad social (Noticias RCN). Ese reconocimiento es del nivel profesional y lo da el Ministerio. Una escuela o club aficionado tramita el suyo ante el ente deportivo municipal, según el Decreto Ley 1228 de 1995, que explicamos en la guía de reconocimiento paso a paso. No encontramos en línea un instructivo vigente de Pasto Deporte para este trámite, así que pide la lista de documentos directamente en el instituto.",
      },
      {
        type: "p",
        content:
          "La lección sí aplica a cualquier tamaño: el reconocimiento se cae por papeles y obligaciones al día, no por resultados deportivos. Tener listados de deportistas, staff y pagos ordenados es lo que te deja responder rápido a cualquier requerimiento.",
      },
      {
        type: "p",
        content:
          "Lo mismo pasa con los entrenadores: si les pagas por prestación de servicios, guarda quién dirigió cada grupo y cuántas sesiones dio. En SportMaps la asistencia queda registrada por grupo y fecha, y cada grupo tiene su entrenador asignado, así que a fin de mes tienes la base para contar las sesiones sin reconstruirlo de memoria. Los coaches, administradores, recepción y contador son ilimitados en todos los planes, cada uno con su rol y permisos.",
      },
      { type: "h2", content: "La oferta pública que compite contigo" },
      {
        type: "p",
        content:
          "Pasto Deporte opera escuelas deportivas gratuitas para niños y jóvenes de 6 a 17 años, con inscripción en el Coliseo Sergio Antonio Ruano, y en 2024 abrió escuelas de gimnasia y tenis de mesa. En 2025 la fase municipal de los Juegos Intercolegiados reunió a 5.429 estudiantes de 50 instituciones educativas (Alcaldía de Pasto). Una escuela privada no compite con eso por precio, sino por continuidad, grupos pequeños y seguimiento:",
      },
      {
        type: "ul",
        items: [
          "Informe mensual del atleta para los papás, por correo y notificación push.",
          "Carné digital con QR para cada deportista, generado en lote con PDF por equipo.",
          "Clase de prueba que el papá puede agendar sin llamarte.",
          "Para fisioterapeutas vinculados, historia clínica deportiva con consentimiento del acudiente.",
        ],
      },
      { type: "h2", content: "Cobrar mensualidades en Pasto" },
      {
        type: "p",
        content:
          "SportMaps genera la inscripción (una vez) y la mensualidad por periodo. Los recordatorios salen por WhatsApp y correo tres días antes, el día del vencimiento y a los 3, 10 y 20 días, con un enlace corto que el papá abre sin iniciar sesión.",
      },
      {
        type: "table",
        headers: ["Cómo paga la familia", "Qué pasa en SportMaps"],
        rows: [
          ["PSE, Nequi, tarjeta o Bancolombia por enlace", "Wompi o Mercado Pago integrados; la plata llega a tu cuenta sin comisión de SportMaps"],
          ["Transferencia con comprobante por WhatsApp", "El asistente lee el comprobante, lo cruza con el cobro y lo deja listo para aprobar"],
          ["Efectivo", "Pago manual registrado con comprobante"],
          ["Atraso", "Recordatorio automático; recargo por mora solo si tu escuela lo activa; la mora no cancela al atleta"],
        ],
      },
      { type: "h2", content: "Cómo arrancar" },
      {
        type: "ol",
        items: [
          "Crea la escuela y registra cada coliseo o cancha como sede.",
          "Define categorías por edad y equipos con su horario.",
          "Comparte el enlace o QR de inscripción.",
          "Configura cobros y conecta tu pasarela.",
          "Conecta tu número de WhatsApp con el registro integrado de Meta.",
          "Pide a los entrenadores tomar asistencia desde el celular.",
        ],
      },
      {
        type: "h2",
        content: "Lluvia, cancelaciones y reposición de clases",
      },
      {
        type: "p",
        content: "Cuando la lluvia cancela un entrenamiento al aire libre, el problema no es suspender: es que todas las familias se enteren a tiempo y que quede claro qué se repone. Un mensaje en el grupo de WhatsApp se pierde entre cien más; un aviso de calendario del grupo llega como notificación push y queda en la app. La asistencia registrada por sesión te deja ver después quién perdió qué clase.",
      },
      {
        type: "ul",
        items: [
          "Avisa la cancelación desde el calendario del grupo, no desde un chat.",
          "Si repones la sesión, créala en el calendario con su sede y hora.",
          "Toma asistencia en la sesión de reposición igual que en cualquier otra.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "table",
        headers: [
          "Escuela de ejemplo",
          "Alumnos",
          "Plan sugerido",
          "Costo mensual",
        ],
        rows: [
          ["Tenis de mesa, un grupo", "15", "Free Start", "$0"],
          ["Fútbol sala, tres categorías", "60", "Escuela Crecimiento", "$99.000 ($89.000 pagando el año)"],
          ["Club con natación y patinaje", "210", "Escuela Pro", "$159.000 ($139.000 pagando el año)"],
        ],
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo: escuelas hipotéticas, con precios públicos de SportMaps a octubre de 2026.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu escuela es pequeña y todo se paga en efectivo, el plan gratis basta para probar; no pagues antes de necesitarlo.",
          "Si tu club no tiene estatutos ni actas, empieza por los documentos.",
          "Si nadie va a tomar asistencia en la cancha, el sistema quedará incompleto.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en Pasto, lista para cualquier cambio de sede",
        description:
          "Grupos por sede, avisos a familias y cobros con recordatorios. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "software-escuelas-deportivas-cali",
      "reconocimiento-deportivo-club-paso-a-paso",
      "informe-mensual-del-deportista-para-padres",
    ],
    about: [
      "escuelas deportivas en Pasto",
      "Pasto Deporte",
      "escenarios deportivos de Nariño",
      "software de gestión deportiva",
    ],
    mentions: ["Pasto Deporte", "Gobernación de Nariño", "Ministerio del Deporte", "Deportivo Pasto", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta"],
    faqs: [
      {
        question: "¿Qué es Pasto Deporte?",
        answer:
          "Es el Instituto Municipal para la Recreación y el Deporte de Pasto. Opera escuelas deportivas gratuitas para niños y jóvenes de 6 a 17 años, organiza la fase municipal de los Juegos Intercolegiados y administra escenarios de la ciudad.",
      },
      {
        question: "¿Qué escenarios deportivos de Pasto se están recuperando en 2026?",
        answer:
          "Según la Gobernación de Nariño (agosto de 2026), la bolera departamental, la piscina de Aranda, la pista de patinaje, el coliseo de los Barrios Surorientales y la pista de BMX, con más de $5.000 millones en total. El Coliseo Sergio Antonio Ruano está en una consultoría estructural.",
      },
      {
        question: "¿El caso del Deportivo Pasto afecta el reconocimiento de mi club?",
        answer:
          "No. El reconocimiento del Deportivo Pasto es del nivel profesional y lo da el Ministerio del Deporte. Un club aficionado tramita el suyo ante el ente deportivo municipal.",
      },
      {
        question: "¿Cómo cobro mensualidades en una escuela deportiva de Pasto?",
        answer:
          "Con cobros automáticos por periodo y recordatorios por WhatsApp y correo con enlace de pago. En SportMaps los papás pagan por PSE, Nequi o tarjeta, o mandan el comprobante por WhatsApp para que lo apruebes con un toque.",
      },
      {
        question: "¿Cuánto cuesta SportMaps en Pasto?",
        answer:
          "Gratis hasta 20 alumnos y desde $69.000 al mes para 50 alumnos. WhatsApp IA, pasarelas y staff ilimitado vienen en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── NEIVA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-neiva",
    title: "Software para escuelas deportivas en Neiva: Secretaría de Deporte, escenarios y cobros",
    excerpt:
      "En Neiva el deporte municipal lo maneja una Secretaría, no un instituto. Qué hace, dónde pedir escenarios, qué pasa con el Plazas Alcid y cómo ordenar inscripciones, cobros y asistencia.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "7 Oct 2026",
    isoDate: "2026-10-07",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "En Neiva el ente deportivo del municipio es la Secretaría de Deporte y Recreación de la Alcaldía, con sede en el Coliseo Cubierto Álvaro Sánchez Silva, y no un instituto descentralizado como en otras ciudades. Su Observatorio del Deporte publica el directorio de escenarios y el servicio de préstamo. A nivel departamental está INDERHUILA. Para una escuela privada eso define con quién hablar; para el día a día, lo que necesitas es una operación ordenada de inscripciones, mensualidades y asistencia, y un software como SportMaps te la da desde el plan gratis de 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si buscas «Inder Neiva», lo que encuentras en la Alcaldía es la Secretaría de Deporte y Recreación. Para préstamo de escenarios, usa el Observatorio del Deporte de Neiva. Y si tu club compite, confirma con la Secretaría el trámite de reconocimiento vigente: su página no lo detalla.",
      },
      { type: "h2", content: "Quién es quién en el deporte de Neiva" },
      {
        type: "table",
        headers: ["Entidad", "Nivel", "Qué te sirve", "Fuente"],
        rows: [
          ["Secretaría de Deporte y Recreación", "Municipal", "Programas, eventos, Juegos Intercolegiados, apoyo a organismos deportivos", "alcaldianeiva.gov.co, página de la dependencia"],
          ["Observatorio del Deporte de Neiva", "Municipal", "Directorio de escenarios, préstamo de escenarios, informes de mantenimiento 2023–2025", "observatoriodeldeporteneiva.gov.co"],
          ["Coliseo Cubierto Álvaro Sánchez Silva", "Escenario municipal", "Sede de la Secretaría (Carrera 17 No. 19-40) y de eventos como torneos de lucha y rugby en silla de ruedas", "Observatorio del Deporte de Neiva"],
          ["INDERHUILA", "Departamental", "Cofinancia escenarios grandes; la Asamblea del Huila le aprobó $18.000 millones para recuperar el estadio", "Diario del Huila"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: sitio de la Alcaldía de Neiva, Observatorio del Deporte de Neiva y Diario del Huila, consultados el 14 oct 2026. Según la página de la dependencia, entre sus funciones están apoyar a los organismos deportivos de conformidad con la normatividad vigente y facilitar el acceso de niños, niñas y adolescentes a servicios deportivos.",
      },
      { type: "h2", content: "El estadio Guillermo Plazas Alcid y lo que enseña" },
      {
        type: "p",
        content:
          "En agosto de 2016 parte de una tribuna del estadio Guillermo Plazas Alcid, en remodelación, se desplomó y murieron obreros (Semana). Desde entonces el escenario ha tenido reparaciones parciales, cierres y restricciones para el fútbol profesional, y la Asamblea del Huila aprobó recursos para su recuperación integral a través de INDERHUILA, en cofinanciación con el municipio (Diario del Huila). Para una escuela de formación, la lección es práctica: los escenarios grandes de Neiva entran y salen de obra, así que tu programación tiene que poder moverse sin perder a las familias.",
      },
      {
        type: "p",
        content:
          "En SportMaps cada grupo tiene sede y horario. Si te cambian de escenario, mandas un aviso de calendario a las familias del grupo y les llega dentro de la app y como notificación push. Si entrenas en varios lugares, manejas todo como multi-sede, y el entrenador toma asistencia desde el celular, de forma manual o escaneando el carné digital con QR.",
      },
      { type: "h2", content: "Reconocimiento deportivo en Neiva" },
      {
        type: "p",
        content:
          "Las reglas nacionales del reconocimiento (Decreto Ley 1228 de 1995, vigencia de cinco años) las explicamos en la guía paso a paso. En Neiva no encontramos publicado un instructivo del trámite en la página de la Secretaría, así que lo responsable es preguntar allí la lista vigente antes de armar la carpeta. Sea cual sea el formato, te van a pedir lo mismo de siempre:",
      },
      {
        type: "ul",
        items: [
          "Listado de deportistas con documento, fecha de nacimiento y acudiente.",
          "Directivos y entrenadores con su rol.",
          "Escenario y horario de entrenamiento.",
          "Estatutos y actas (estos viven fuera del software).",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps las fichas de atletas tienen acudientes vinculados, el staff es ilimitado con roles (coach, admin, recepción, contador) y la asistencia queda guardada por fecha, así que exportar la parte operativa toma minutos.",
      },
      { type: "h2", content: "Cobrar mensualidades en Neiva" },
      {
        type: "ol",
        items: [
          "Configura la inscripción (se cobra una vez) y la mensualidad por periodo; si tienes hermanos, activa el descuento por hermanos.",
          "Activa los recordatorios por WhatsApp y correo: tres días antes, el día del vencimiento y a los 3, 10 y 20 días, con enlace corto de pago sin iniciar sesión.",
          "Conecta Wompi o Mercado Pago (PSE, Nequi, tarjetas): la plata va directo a tu cuenta y SportMaps no cobra comisión.",
          "Conecta tu número de WhatsApp con Meta para que el asistente lea los comprobantes de transferencia y te los deje listos para aprobar.",
          "Registra los pagos en efectivo como pago manual.",
        ],
      },
      {
        type: "h3",
        content: "Hermanos, becas y acuerdos de pago",
      },
      {
        type: "p",
        content:
          "Las familias con dos o tres hijos en la escuela son las que más se retiran cuando la cuenta crece. Configura el descuento por hermanos una vez y el sistema lo aplica en cada periodo. Si das becas parciales o pactas un monto especial con una familia, déjalo en la ficha del atleta para que el cobro salga bien sin que tengas que recordarlo cada mes. Y si una familia se atrasa, el registro de pago manual te deja marcar cobros vencidos a medida que pagan, uno por uno.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "El recargo por mora es una decisión de tu escuela, no del sistema, y la mora no cancela automáticamente al atleta. Antes de activarlo, deja la regla por escrito en el reglamento y avísales a las familias.",
      },
      { type: "h2", content: "Para entrenadores y familias" },
      {
        type: "p",
        content:
          "Los entrenadores planifican mesociclos y sesiones, registran evaluaciones físicas y, en fútbol, usan la pizarra táctica 2D para jugadas y alineaciones. Las familias reciben el informe mensual del atleta por correo y notificación push, ven el calendario y pagan desde el celular. La app se instala en el celular desde el navegador.",
      },
      {
        type: "h2",
        content: "Cómo arrancar en una semana",
      },
      {
        type: "ol",
        items: [
          "Crea la escuela y registra cada escenario donde entrenas como sede.",
          "Define categorías por edad y equipos con su horario y entrenador.",
          "Comparte el enlace o el QR de inscripción para que los papás llenen la ficha y queden vinculados como acudientes.",
          "Configura cobros, conecta tu pasarela y tu número de WhatsApp.",
          "Genera los carnés digitales en lote y pide a los entrenadores tomar asistencia desde la primera sesión.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo, no un cliente real: una escuela de fútbol con 110 niños en tres escenarios cabe en Escuela Crecimiento ($99.000 al mes, o $89.000 pagando el año, hasta 120 alumnos). Si crece a 150, pasa a Escuela Pro ($159.000). Con 110 familias que escriben unas tres veces al mes por WhatsApp, son unas 330 conversaciones, por debajo de las 1.000 gratis de Meta: WhatsApp le costaría $0.",
      },
      {
        type: "callout",
        variant: "tip",
        content: "Si tu escuela necesita facturar a empresas o a familias que piden factura electrónica, la integración DIAN viene en todos los planes y solo pagas el paquete según la cantidad de facturas. Tu contador puede tener acceso de solo lectura para revisar el estado de las facturas.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tienes un grupo pequeño que paga en efectivo, un cuaderno funciona; prueba el plan gratis antes de pagar.",
          "Si tu urgencia es un trámite ante la Secretaría, resuélvelo primero.",
          "Si nadie va a dedicar unas horas a configurar, espera a tener ese tiempo.",
        ],
      },
      {
        type: "cta",
        title: "Organiza tu escuela en Neiva",
        description:
          "Inscripciones, cobros y asistencia en un solo lugar. Empieza gratis con hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-deportivas-ibague",
      "como-cobrar-mensualidades-escuela-deportiva",
      "reglamento-interno-escuela-deportiva",
    ],
    about: [
      "escuelas deportivas en Neiva",
      "Secretaría de Deporte y Recreación de Neiva",
      "escenarios deportivos del Huila",
      "software de gestión deportiva",
    ],
    mentions: ["Alcaldía de Neiva", "Observatorio del Deporte de Neiva", "INDERHUILA", "Estadio Guillermo Plazas Alcid", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta"],
    faqs: [
      {
        question: "¿Existe el Inder Neiva?",
        answer:
          "En el sitio de la Alcaldía, el ente deportivo municipal de Neiva aparece como la Secretaría de Deporte y Recreación, con sede en el Coliseo Cubierto Álvaro Sánchez Silva. A nivel departamental existe INDERHUILA.",
      },
      {
        question: "¿Cómo pido prestado un escenario deportivo en Neiva?",
        answer:
          "El Observatorio del Deporte de Neiva publica el directorio de escenarios y un servicio de préstamo de escenarios. Confirma allí los requisitos y la disponibilidad para tu grupo.",
      },
      {
        question: "¿Qué pasó con el estadio Guillermo Plazas Alcid?",
        answer:
          "En agosto de 2016 colapsó parte de una tribuna durante una remodelación. Desde entonces ha tenido reparaciones parciales y restricciones, y la Asamblea del Huila aprobó recursos a INDERHUILA para su recuperación, en cofinanciación con el municipio.",
      },
      {
        question: "¿Qué software sirve para cobrar mensualidades en una escuela de Neiva?",
        answer:
          "Uno que genere cobros por periodo, mande recordatorios con enlace de pago y concilie comprobantes. SportMaps hace eso con Wompi o Mercado Pago y lectura de comprobantes por WhatsApp, y tiene un plan gratis hasta 20 alumnos.",
      },
      {
        question: "¿Cuánto cuesta SportMaps para una escuela en Neiva?",
        answer:
          "Gratis hasta 20 alumnos y desde $69.000 al mes para 50 alumnos. Los precios son iguales en todo el país.",
      },
    ],
  },

  // ───────────────────────────── MONTERÍA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-monteria",
    title: "Software para escuelas deportivas en Montería: IMDER, villas olímpicas, béisbol y cobros",
    excerpt:
      "Qué hace el IMDER Montería, qué ofrecen las Escuelas Deportivas para Todos, qué escenarios recibieron el Sudamericano Sub-17 y los Juegos Escolares de 2025, y cómo organizar tu escuela.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "11 Oct 2026",
    isoDate: "2026-10-11",
    ...AUTHOR,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "En Montería el deporte municipal lo maneja el IMDER (Instituto Municipal de Deporte y Recreación), que en 2024 lanzó las Escuelas Deportivas para Todos, gratuitas para niños y jóvenes hasta 17 años. La ciudad recibió en 2025 el Sudamericano Sub-17 de fútbol en el estadio Jaraguay y la inauguración de los Juegos Escolares Centroamericanos y del Caribe en el estadio 18 de Junio. Para una escuela privada el reto es diferenciarse de la oferta gratuita y tener la operación en orden; un software como SportMaps lleva inscripciones, cobros y asistencia, y puedes empezar gratis con hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Montería tiene escenarios nuevos y eventos internacionales recientes, y una oferta pública gratuita en ocho disciplinas. Las escuelas privadas compiten por continuidad, grupos pequeños y servicio a la familia. Confirma con el IMDER el trámite vigente de reconocimiento: la estructura deportiva del municipio ha cambiado varias veces en la última década.",
      },
      { type: "h2", content: "Escenarios y eventos recientes" },
      {
        type: "table",
        headers: ["Escenario o programa", "Dato", "Fuente"],
        rows: [
          ["Estadio Jaraguay", "12.000 espectadores; sede principal del Sudamericano Sub-17 (27 mar. – 12 abr. 2025)", "El Tiempo y La República, 2025"],
          ["Estadio 18 de Junio (béisbol)", "Inauguración de los VII Juegos Escolares Centroamericanos y del Caribe, Córdoba 2025", "RTVC, 2025"],
          ["Villa Olímpica de Occidente (margen izquierda)", "Convenio de cerca de $19.000 millones con el Ministerio del Deporte (2021); más del 80 % de avance en abril de 2023; boxeo, sóftbol, karate, fútbol y voleibol", "monteria.gov.co"],
          ["Villa Olímpica Norte", "Sede del lanzamiento de las Escuelas Deportivas para Todos y de la fase municipal de los Intercolegiados 2024", "monteria.gov.co, 2024"],
          ["Escuelas Deportivas para Todos (IMDER)", "Gratuitas, hasta 17 años con prioridad a menores de 10; dos sesiones semanales de dos horas; ajedrez, atletismo, baloncesto, boxeo, fútbol, fútbol sala, voleibol y balonmano", "monteria.gov.co, 14 ago. 2024"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de la tabla: Alcaldía de Montería (monteria.gov.co), El Tiempo, La República y RTVC, consultados el 14 oct 2026. Varias cifras son de 2023 y 2024; el estado de las obras puede haber cambiado.",
      },
      { type: "h2", content: "Béisbol, sóftbol y deportes de conjunto" },
      {
        type: "p",
        content:
          "Córdoba es tierra de béisbol, y Montería tiene escenario propio para ese deporte (el 18 de Junio) y una Villa Olímpica de Occidente pensada también para sóftbol. Las escuelas de béisbol y sóftbol tienen una particularidad operativa: categorías por edad muy marcadas, mucho material compartido (cascos, guantes, bates) y temporadas con torneos. En SportMaps defines categorías por edad y equipos, y si quieres manejar uniformes o kits, puedes sumar artículos al cobro de la mensualidad con el catálogo liviano, o usar la tienda en línea (adicional de $49.000 al mes, incluida en Elite). Para organizar torneos está el módulo de torneos (adicional de $49.000, incluido en Elite).",
      },
      { type: "h2", content: "Reconocimiento deportivo en Montería" },
      {
        type: "p",
        content:
          "Las reglas nacionales del reconocimiento (Decreto Ley 1228 de 1995) las explicamos en la guía paso a paso. En Montería conviene preguntar directamente en el IMDER: la prensa local registra que el municipio tuvo un instituto que desapareció, luego una Oficina de Recreación y Deportes que en 2018 se anunció como futura Secretaría (El Universal), y en 2024 la Alcaldía comunicaba sus programas a través del IMDER. Con tantos cambios, no te fíes de un instructivo viejo.",
      },
      {
        type: "p",
        content:
          "Lo que sí es estable es la información que te van a pedir: listado de deportistas con documento y acudiente, directivos y entrenadores, escenario y horario, y estatutos y actas. En SportMaps la parte operativa (fichas, staff con roles, asistencia por fecha) se exporta en minutos.",
      },
      { type: "h2", content: "Si tienes cancha propia" },
      {
        type: "p",
        content:
          "Algunas escuelas de Montería entrenan en canchas sintéticas o diamantes propios o arrendados, y en las horas libres los alquilan. SportMaps te deja publicar tus canchas e instalaciones y recibir solicitudes de reserva por enlace, que tú apruebas. No reemplaza un sistema de reservas con pago automático por hora ni maneja lista de espera; sirve para dejar de coordinar cada alquiler por chat y para que la ocupación de la cancha quede en el mismo sistema donde están tus grupos.",
      },
      {
        type: "p",
        content:
          "Lo mismo aplica a la página pública de la escuela: tienes cuatro diseños para elegir, un botón de inscripción y una dirección en el subdominio de sportmaps.co. Si ya tienes dominio propio, te ayudamos a conectarlo. Es lo que mandas cuando un papá pregunta por Facebook dónde entrenan y cuánto cuesta.",
      },
      { type: "h2", content: "Calor, horarios y asistencia" },
      {
        type: "p",
        content:
          "Con el calor de la sabana, las escuelas monterianas entrenan temprano o al caer la tarde, igual que el programa del IMDER, que funciona después de la jornada escolar. El entrenador toma asistencia desde el celular, de forma manual o escaneando el carné digital con QR. Si tienes sede propia, los torniquetes ZKTeco (adicional) registran el ingreso y pueden bloquearlo por mora si así lo decides.",
      },
      { type: "h2", content: "Cobrar mensualidades en Montería" },
      {
        type: "ul",
        items: [
          "Inscripción que se cobra una vez y mensualidad por periodo, generadas automáticamente.",
          "Recordatorios por WhatsApp y correo en los días -3, 0, +3, +10 y +20, con enlace corto de pago que no exige iniciar sesión.",
          "Pagos por PSE, Nequi, tarjetas y Bancolombia con Wompi o Mercado Pago, directo a tu cuenta y sin comisión de SportMaps.",
          "Comprobantes de transferencia leídos por el asistente de WhatsApp, cruzados con el cobro y listos para aprobar con un toque.",
          "Descuento por hermanos y recargo por mora opcional que define tu escuela; la mora no cancela al atleta.",
        ],
      },
      { type: "h2", content: "Cómo arrancar" },
      {
        type: "ol",
        items: [
          "Crea la escuela, tus sedes y categorías por edad.",
          "Comparte el enlace o QR de inscripción y publica tu página de escuela con botón de inscripción.",
          "Configura inscripción y mensualidad, y conecta la pasarela.",
          "Conecta tu WhatsApp con el registro integrado de Meta.",
          "Genera los carnés digitales en lote, un PDF por equipo.",
        ],
      },
      {
        type: "h2",
        content: "Lo que ve la familia",
      },
      {
        type: "p",
        content: "La familia quiere tres cosas: saber si su hijo fue, cuánto debe y cuándo es el próximo partido. En SportMaps eso llega al celular sin descargar nada de una tienda de apps: la app se instala desde el navegador y manda notificaciones push.",
      },
      {
        type: "ul",
        items: [
          "Calendario del equipo con avisos de partidos y cambios de escenario.",
          "Estado de cuenta con enlace de pago por PSE, Nequi o tarjeta.",
          "Informe mensual del atleta con asistencia y comentarios del entrenador.",
          "Carné digital con QR.",
        ],
      },
      {
        type: "h2",
        content: "Qué plan elegir (ejemplo ilustrativo)",
      },
      {
        type: "table",
        headers: [
          "Escuela de ejemplo",
          "Alumnos",
          "Plan sugerido",
          "Costo mensual",
        ],
        rows: [
          ["Ajedrez, un grupo", "16", "Free Start", "$0"],
          ["Béisbol, cuatro categorías", "85", "Escuela Crecimiento", "$99.000 ($89.000 pagando el año)"],
          ["Club multideporte con torneos y uniformes", "400", "Escuela Elite", "$349.000 ($299.000 pagando el año), torneos y tienda incluidos"],
        ],
      },
      {
        type: "p",
        content: "Ejemplo ilustrativo: escuelas hipotéticas para ubicar tu caso, con precios públicos de SportMaps a octubre de 2026.",
      },
      { type: "h2", content: "Cuánto cuesta" },
      PLANES,
      INCLUIDO,
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si solo organizas un torneo de fin de semana sin alumnos fijos, no necesitas un sistema de mensualidades.",
          "Si tienes un grupo pequeño que paga en efectivo, empieza con el plan gratis.",
          "Si tu club no tiene estatutos ni actas, resuelve primero los documentos con el IMDER.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en Montería, organizada",
        description:
          "Categorías, cobros, asistencia y carnés en un solo lugar. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-de-beisbol-y-softbol",
      "software-escuelas-deportivas-cartagena",
      "carnet-digital-deportista",
    ],
    about: [
      "escuelas deportivas en Montería",
      "IMDER Montería",
      "Sudamericano Sub-17 2025",
      "software de gestión deportiva",
    ],
    mentions: ["IMDER Montería", "Estadio Jaraguay", "Estadio 18 de Junio", "Ministerio del Deporte", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Cuál es el instituto de deportes de Montería?",
        answer:
          "Es el IMDER, Instituto Municipal de Deporte y Recreación de Montería. En 2024 lanzó las Escuelas Deportivas para Todos, gratuitas para niños y jóvenes hasta 17 años.",
      },
      {
        question: "¿Qué deportes ofrecen las escuelas gratuitas del IMDER en Montería?",
        answer:
          "Según la Alcaldía (agosto de 2024): ajedrez, atletismo, baloncesto, boxeo, fútbol, fútbol sala, voleibol y balonmano, con dos sesiones semanales de dos horas después de la jornada escolar.",
      },
      {
        question: "¿Qué eventos deportivos recibió Montería en 2025?",
        answer:
          "El Sudamericano Sub-17 de fútbol, con el estadio Jaraguay como sede principal, y la inauguración de los VII Juegos Escolares Centroamericanos y del Caribe en el estadio de béisbol 18 de Junio.",
      },
      {
        question: "¿Cómo cobro mensualidades en una escuela de béisbol en Montería?",
        answer:
          "Con cobros automáticos por periodo, recordatorios con enlace de pago y lectura de comprobantes por WhatsApp. En SportMaps también puedes sumar uniformes o kits al cobro de la mensualidad con el catálogo de artículos.",
      },
      {
        question: "¿Cuánto cuesta SportMaps en Montería?",
        answer:
          "Gratis hasta 20 alumnos y desde $69.000 al mes. Torneos y tienda en línea son adicionales de $49.000 al mes cada uno, incluidos en el plan Elite.",
      },
    ],
  },
];
