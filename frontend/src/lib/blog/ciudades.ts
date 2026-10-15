import type { BlogPost } from "../blog-posts";

const AUTHOR = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
};

export const ciudadesPosts: BlogPost[] = [
  // ───────────────────────────── BOGOTÁ ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-bogota",
    title: "Software para escuelas deportivas en Bogotá: aval del IDRD, cobros y operación diaria",
    excerpt:
      "Qué le pide el IDRD a una escuela de formación o a un club en Bogotá, dónde entrenan las escuelas avaladas y cómo ordenar inscripciones, mensualidades y asistencia sin Excel.",
    category: "Por ciudad",
    readTime: "8 min",
    date: "18 Sep 2026",
    isoDate: "2026-09-18",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela deportiva en Bogotá necesita resolver dos frentes: estar en regla ante el IDRD (aval deportivo si es una escuela de formación que trabaja con niños y adolescentes, o reconocimiento deportivo si es un club) y tener una operación diaria que no dependa de un Excel y varios grupos de WhatsApp. Un software de gestión como SportMaps cubre el segundo frente —inscripciones, mensualidades, asistencia y comunicación con las familias— y te deja la información ordenada para el primero. Puedes empezar gratis con hasta 20 alumnos y pasar a un plan pago cuando crezcas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "En Bogotá el IDRD otorga el aval deportivo a escuelas de formación privadas que atienden niños de 4 a 17 años, y el reconocimiento deportivo a clubes. Ningún software te tramita el aval, pero sí te deja al día la lista de deportistas, acudientes, entrenadores, horarios y pagos que cualquier revisión te va a pedir. Con SportMaps eso vive en un solo lugar y los cobros entran por Nequi, PSE o tarjeta directo a tu cuenta.",
      },
      { type: "h2", content: "Aval deportivo vs. reconocimiento deportivo: qué le aplica a tu escuela" },
      {
        type: "p",
        content:
          "La confusión más común entre directores nuevos es pensar que «escuela» y «club» son lo mismo ante el Distrito. No lo son. El IDRD (Instituto Distrital de Recreación y Deporte) maneja dos figuras distintas, con requisitos y propósitos diferentes:",
      },
      {
        type: "table",
        headers: ["Figura", "Quién la otorga en Bogotá", "A quién aplica", "Dato clave"],
        rows: [
          [
            "Aval deportivo",
            "IDRD",
            "Escuelas de formación deportiva privadas que trabajan con niños, niñas y adolescentes de 4 a 17 años",
            "Autoriza a operar programas formativos, incluso en escenarios públicos. El IDRD indica que lo otorga por resolución motivada dentro de los 45 días hábiles siguientes a la radicación completa.",
          ],
          [
            "Reconocimiento deportivo",
            "IDRD (el Decreto 407 de 1996 le permite adoptar los requisitos del Decreto Ley 1228 de 1995)",
            "Clubes deportivos: entidades privadas sin ánimo de lucro",
            "Se concede por cinco años desde que queda en firme el acto (Ley 962 de 2005, art. 72). Es lo que te deja competir en el sistema de ligas y federaciones.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Los formatos y la lista de documentos cambian. Antes de radicar, revisa la página del trámite en idrd.gov.co o pide la asesoría virtual que ofrece el instituto. En 2026 el IDRD abrió una consulta ciudadana para mejorar este trámite, así que vale la pena confirmar la versión vigente.",
      },
      {
        type: "p",
        content:
          "El marco nacional detrás de todo esto es la Ley 181 de 1995 (ley del deporte), que pone a los entes municipales y distritales a cargo de fomentar la formación deportiva, y el Decreto Ley 1228 de 1995, que convirtió el reconocimiento deportivo en requisito para los clubes. En Bogotá ese ente es el IDRD.",
      },
      { type: "h2", content: "La información que siempre te van a pedir (y que debería salir de tu sistema)" },
      {
        type: "p",
        content:
          "Cada trámite tiene su lista oficial, pero en la práctica —aval, renovación, una convocatoria, una inspección en el parque o simplemente un papá que pregunta— la información de fondo es casi siempre la misma. Si la tienes regada entre cuadernos, fotos de WhatsApp y una hoja de cálculo, cada solicitud te cuesta una tarde. Lo que conviene tener listo para exportar:",
      },
      {
        type: "ul",
        items: [
          "Listado de deportistas con documento, fecha de nacimiento, categoría y acudiente responsable.",
          "Entrenadores y personal con su rol, sede y horario.",
          "Escenario donde entrena cada grupo (en Bogotá suele ser un parque o una unidad deportiva del Distrito).",
          "Registro de asistencia por sesión.",
          "Historial de pagos: qué se cobró, qué entró, por qué medio y con qué comprobante.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada atleta tiene su ficha con acudientes vinculados, categoría por edad y equipo; los entrenadores y administrativos se crean sin límite en todos los planes, cada uno con su rol y permisos; y la asistencia y los pagos quedan registrados por fecha. No reemplaza el formulario del IDRD, pero te ahorra reconstruir la información cada vez.",
      },
      { type: "h2", content: "Dónde entrenan las escuelas en Bogotá y qué implica para tu operación" },
      {
        type: "p",
        content:
          "En el listado de escuelas avaladas por el IDRD (corte de abril de 2026) que cargamos en el mapa de SportMaps, el fútbol y el patinaje de carreras son los deportes con más escuelas, seguidos por tenis de campo y natación. Los escenarios se repiten: Parque San Andrés, Parque El Tunal, Parque La Serena, Parque Timiza, la Unidad Deportiva El Salitre, el Velódromo Primera de Mayo o las piscinas del Parque El Virrey, entre muchos otros parques de barrio.",
      },
      {
        type: "p",
        content:
          "Eso tiene tres consecuencias prácticas que un software genérico no siempre contempla:",
      },
      {
        type: "ol",
        items: [
          "Varias sedes. Es normal que una escuela tenga un grupo en un parque del norte y otro en el sur. SportMaps maneja multi-sede: cada grupo, horario y entrenador queda asociado a su sede.",
          "Asistencia sin torniquete. En un parque público no instalas un control de acceso. Lo práctico es que el entrenador tome asistencia desde el celular, de forma manual o escaneando el carné digital con QR de cada atleta. Los torniquetes y biométricos ZKTeco (adicional) tienen sentido cuando tienes sede propia o coliseo.",
          "Cambios de último minuto. Si el IDRD cierra un escenario por evento o mantenimiento, necesitas avisar a todas las familias en minutos. El calendario y los avisos de SportMaps llegan dentro de la app y como notificación push.",
        ],
      },
      { type: "h2", content: "La competencia que nadie menciona: la oferta pública gratuita" },
      {
        type: "p",
        content:
          "El IDRD tiene programas propios como Escuelas de Mi Barrio, con cupos gratuitos para niños y jóvenes. Una escuela privada en Bogotá compite contra eso, y no gana por precio. Gana por continuidad, seguimiento y servicio a la familia. Ahí es donde un sistema se nota: el informe mensual del atleta que les llega a los papás por correo con enlace, el carné digital, los recordatorios de pago claros y la posibilidad de pagar desde el celular en un minuto.",
      },
      { type: "h2", content: "Cobrar en Bogotá: Nequi, PSE, tarjetas y transferencias" },
      {
        type: "p",
        content:
          "Las familias bogotanas pagan como pagan en el resto del país: Nequi, transferencia Bancolombia, PSE desde cualquier banco y, en menor medida, tarjeta o efectivo. El problema no es el medio; es conciliar. Cuando llegan 80 capturas de pantalla por WhatsApp el primer lunes del mes, alguien tiene que mirarlas una por una contra la lista.",
      },
      {
        type: "table",
        headers: ["Cómo paga la familia", "Qué hace SportMaps", "Costo para la escuela"],
        rows: [
          [
            "Enlace de pago (PSE, Nequi, tarjeta, botón Bancolombia, billetera Mercado Pago)",
            "Wompi o Mercado Pago integrados; el pago se marca solo contra el cobro",
            "Solo la tarifa de la pasarela. SportMaps no cobra comisión por la integración y la plata va directo a tu cuenta.",
          ],
          [
            "Transferencia o Nequi a tu cuenta, con captura por WhatsApp",
            "El asistente de WhatsApp IA lee el comprobante, extrae monto y referencia, lo cruza con el cobro y lo deja listo para que lo apruebes con un toque",
            "Gratis en todos los planes. Meta da 1.000 conversaciones de servicio al mes por número; solo si te excedes, Meta cobra directo a tu tarjeta (en Colombia, del orden de $3 por mensaje de servicio).",
          ],
          [
            "Efectivo en la cancha",
            "Registro de pago manual con comprobante",
            "$0",
          ],
        ],
      },
      {
        type: "p",
        content:
          "Los cobros se generan por periodo (inscripción una sola vez, mensualidad cada mes), con recordatorios automáticos por correo y WhatsApp. Si decides cobrar recargo por mora, lo defines tú; y un atleta en mora no queda cancelado automáticamente, porque esa decisión es de la escuela.",
      },
      { type: "h2", content: "Cómo arrancar en una semana" },
      {
        type: "ol",
        items: [
          "Crea la escuela y tus sedes (cada parque o unidad deportiva donde entrenas).",
          "Define categorías por edad y equipos, con su horario y entrenador.",
          "Comparte el enlace o el QR de inscripción para que los papás llenen la ficha del atleta y queden vinculados como acudientes.",
          "Configura inscripción y mensualidad, y conecta Wompi o Mercado Pago a tu propia cuenta.",
          "Conecta tu número de WhatsApp (sigue siendo tuyo, mediante el registro integrado de Meta) para que el asistente reciba comprobantes.",
          "Pide a los entrenadores instalar la app en el celular y tomar asistencia desde la primera sesión.",
        ],
      },
      { type: "h2", content: "Cuánto cuesta" },
      {
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
      },
      {
        type: "p",
        content:
          "Todos los planes, incluido el gratis, traen WhatsApp IA, pasarelas integradas, staff ilimitado, página pública de la escuela con botón de inscripción (si tienes dominio propio, te ayudamos a conectarlo) y la integración de facturación electrónica DIAN, donde solo pagas el paquete según la cantidad de facturas.",
      },
      { type: "h2", content: "Cuándo NO te conviene un software (todavía)" },
      {
        type: "ul",
        items: [
          "Si tienes un solo grupo de 10 niños y cobras en efectivo en la cancha, un cuaderno funciona. Aun así, el plan Free Start te sirve para probar sin pagar.",
          "Si no tienes a nadie que dedique dos o tres horas la primera semana a cargar atletas y configurar cobros, espera a tener ese tiempo: un sistema a medio configurar genera más confusión que el Excel.",
          "Si tu prioridad hoy es el aval del IDRD, resuelve primero el trámite. El software ordena la operación; no reemplaza los documentos legales.",
        ],
      },
      {
        type: "cta",
        title: "Organiza tu escuela en Bogotá desde hoy",
        description:
          "Empieza gratis con hasta 20 alumnos, con WhatsApp IA y pasarelas incluidas. Te acompañamos por WhatsApp desde Colombia.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "control-de-asistencia-con-qr-y-torniquetes",
      "mejor-software-gestion-deportiva-colombia-2026",
    ],
    about: [
      "escuelas de formación deportiva en Bogotá",
      "aval deportivo del IDRD",
      "reconocimiento deportivo de clubes",
      "software de gestión deportiva",
    ],
    mentions: ["IDRD", "Wompi", "Mercado Pago", "Nequi", "PSE", "Bancolombia", "WhatsApp", "Meta", "ZKTeco"],
    faqs: [
      {
        question: "¿Qué diferencia hay entre el aval del IDRD y el reconocimiento deportivo?",
        answer:
          "El aval deportivo lo otorga el IDRD a escuelas de formación privadas que trabajan con niños y adolescentes de 4 a 17 años. El reconocimiento deportivo es para clubes, entidades sin ánimo de lucro, y se concede por cinco años. Una escuela puede necesitar el aval sin ser club.",
      },
      {
        question: "¿Cuánto se demora el IDRD en dar el aval a una escuela de formación deportiva?",
        answer:
          "Según el IDRD, después de verificar los documentos, otorga el aval mediante resolución dentro de los 45 días hábiles siguientes a la radicación. Si falta algún documento el plazo se extiende, así que conviene radicar completo y confirmar los formatos vigentes en idrd.gov.co.",
      },
      {
        question: "¿Qué software usan las escuelas deportivas en Bogotá para cobrar mensualidades?",
        answer:
          "Muchas siguen con Excel y WhatsApp, y otras usan plataformas de gestión deportiva. SportMaps genera los cobros por periodo, envía enlaces de pago por PSE, Nequi o tarjeta vía Wompi o Mercado Pago, y lee con IA los comprobantes de transferencia que mandan los papás. Hay un plan gratis hasta 20 alumnos.",
      },
      {
        question: "¿Cómo tomo asistencia si mi escuela entrena en un parque del IDRD?",
        answer:
          "En un parque no puedes instalar torniquetes, así que lo práctico es tomar asistencia desde el celular del entrenador, de forma manual o escaneando el carné digital con QR de cada atleta. La asistencia queda registrada por fecha y grupo.",
      },
      {
        question: "¿Cuánto cuesta un software para una escuela deportiva en Bogotá?",
        answer:
          "En SportMaps hay un plan gratis hasta 20 alumnos y planes desde $69.000 al mes (Escuela Start, 50 alumnos) hasta $349.000 (Escuela Elite, 800 alumnos). Las pasarelas, el WhatsApp IA y el staff ilimitado vienen en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── MEDELLÍN ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-medellin",
    title: "Software para escuelas y clubes deportivos en Medellín: INDER, SIMÓN 2.0 y cobros sin enredos",
    excerpt:
      "Cómo se reconoce un club ante el INDER Medellín, qué aprender de las Escuelas Populares del Deporte y cómo organizar categorías, mensualidades y asistencia con un solo sistema.",
    category: "Por ciudad",
    readTime: "8 min",
    date: "23 Sep 2026",
    isoDate: "2026-09-23",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Para un club deportivo en Medellín, el punto de partida formal es el reconocimiento deportivo del INDER, que hoy se tramita de manera completamente digital por la plataforma SIMÓN 2.0. Para la operación diaria —inscribir atletas por categoría, cobrar mensualidades, tomar asistencia y mantener informadas a las familias— lo que necesitas es un software de gestión. SportMaps hace esa parte, con cobros por Nequi, PSE o tarjeta que llegan directo a la cuenta del club y un asistente de WhatsApp que lee los comprobantes, sin costo adicional.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El reconocimiento ante el INDER te mete en el Sistema Nacional del Deporte y abre la puerta a escenarios, asesorías y competencias con ligas. Un sistema como SportMaps no hace ese trámite, pero mantiene al día la base de atletas, entrenadores y pagos que el club necesita para operar y para responder cualquier requerimiento.",
      },
      { type: "h2", content: "El reconocimiento deportivo ante el INDER, paso a paso" },
      {
        type: "p",
        content:
          "El INDER (Instituto de Deportes y Recreación de Medellín) es el ente que reconoce a los clubes de la ciudad. Según la Alcaldía de Medellín, el trámite se hace por SIMÓN 2.0, para lo cual primero hay que pedir código y clave de acceso. A grandes rasgos:",
      },
      {
        type: "ol",
        items: [
          "Constituye el club como entidad sin ánimo de lucro, con acta de constitución y estatutos.",
          "Elige el órgano de administración y deja el acta de esa reunión.",
          "Solicita el código y la clave de acceso a SIMÓN 2.0.",
          "Carga los documentos en la plataforma y haz seguimiento a la respuesta.",
          "Una vez reconocido, registra la vigencia: el reconocimiento se concede por cinco años (Ley 962 de 2005, art. 72) y hay que renovarlo antes de que venza.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Base legal: el Decreto Ley 1228 de 1995 hizo del reconocimiento deportivo un requisito para clubes y demás organismos del nivel municipal. La lista exacta de documentos y formatos la publica el INDER; confírmala en inder.gov.co antes de cargar.",
      },
      {
        type: "p",
        content:
          "¿Para qué sirve en la práctica? La Alcaldía lo resume así: los clubes reconocidos pueden acceder a patrocinios, asesorías y escenarios deportivos, y sus deportistas pueden participar en eventos de ligas y federaciones. Si tu club quiere competir, el reconocimiento no es opcional.",
      },
      { type: "h2", content: "Lo que las Escuelas Populares del Deporte enseñan sobre organización" },
      {
        type: "p",
        content:
          "Medellín tiene uno de los programas públicos de formación deportiva más conocidos del país: las Escuelas Populares del Deporte (EPD) del INDER. Según la Alcaldía, en 2023 el programa contaba con unos 27.000 usuarios en 35 disciplinas, organizados en cuatro estrategias por edad:",
      },
      {
        type: "table",
        headers: ["Estrategia EPD", "Edades", "Equivalente en una escuela privada"],
        rows: [
          ["Iniciación al movimiento", "6 meses a 5 años", "Estimulación / baby sports"],
          ["Iniciación deportiva", "6 a 9 años", "Categorías infantiles"],
          ["Formación deportiva", "10 a 17 años", "Categorías formativas y prejuveniles"],
          ["Formación deportiva para adultos", "18 años en adelante", "Grupos de adultos o máster"],
        ],
      },
      {
        type: "p",
        content:
          "La lección para un club privado es que la estructura por edades no es un detalle: define horarios, entrenadores, precio y hasta qué escenario usas. En SportMaps las categorías por edad y los equipos se configuran una vez y cada atleta queda ubicado según su fecha de nacimiento. Si un niño juega en dos categorías, queda registrado en ambas, y tú decides si eso implica un cobro adicional o no.",
      },
      {
        type: "p",
        content:
          "También compites con esa oferta gratuita, igual que en Bogotá o Cali. Lo que justifica pagar una mensualidad privada es el seguimiento: evaluaciones físicas y métricas por atleta, informe mensual para los papás, planificación de entrenamiento y una comunicación ordenada.",
      },
      { type: "h2", content: "Escenarios y multi-sede en el Valle de Aburrá" },
      {
        type: "p",
        content:
          "Muchos clubes de Medellín entrenan en escenarios administrados por el INDER, empezando por la Unidad Deportiva Atanasio Girardot, y otros en canchas y coliseos de barrio o de municipios vecinos del área metropolitana. Para el sistema eso significa lo mismo: varias sedes, cada una con su horario, sus entrenadores y sus grupos. SportMaps maneja multi-sede de forma nativa, y si tu club tiene escenario propio puede publicar sus canchas y recibir solicitudes de reserva por enlace.",
      },
      { type: "h2", content: "Cobros: inscripción, mensualidad y comprobantes" },
      {
        type: "p",
        content:
          "Un error frecuente en clubes de la ciudad es mezclar la inscripción anual con la mensualidad en un solo cobro, o perder la cuenta de quién debe qué mes. Lo sano es separarlos: la inscripción se cobra una vez y la mensualidad se genera automáticamente cada periodo.",
      },
      {
        type: "table",
        headers: ["Necesidad del club", "Cómo se resuelve en SportMaps"],
        rows: [
          ["Cobrar a 150 familias cada mes", "Cobros automáticos por periodo, con enlace de pago por WhatsApp o correo"],
          ["Papás que pagan por Nequi o Bancolombia y mandan la captura", "WhatsApp IA lee el comprobante, extrae monto y referencia, lo cruza contra el cobro y lo deja listo para aprobar con un toque"],
          ["Pagos en línea con PSE o tarjeta", "Wompi o Mercado Pago integrados; la plata va directo a la cuenta del club, sin comisión de SportMaps"],
          ["Familias que se atrasan", "Recordatorios automáticos; recargo por mora opcional que define el club; el atleta no se cancela solo"],
          ["Pagos en efectivo en la cancha", "Registro de pago manual con comprobante"],
          ["El contador necesita facturas", "Integración con facturación electrónica DIAN gratis; solo pagas el paquete de facturas, y el contador puede tener acceso"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Sobre WhatsApp: SportMaps no cobra el asistente ni vende paquetes de conversaciones. Meta da 1.000 conversaciones de servicio gratis al mes por número; si las superas, Meta cobra el excedente directo a la tarjeta del club (en Colombia, del orden de $3 por mensaje de servicio). El número sigue siendo del club.",
      },
      { type: "h2", content: "Para los entrenadores" },
      {
        type: "p",
        content:
          "Un club en Medellín suele tener entrenadores por disciplina y por categoría. Todos entran sin costo extra, con su rol y permisos, y desde el celular tienen la pizarra táctica de fútbol (jugadas, alineaciones y ejercicios; la versión multideporte está en camino), la planificación por mesociclos y sesiones, las evaluaciones físicas, las métricas de rendimiento y el registro de partidos. Eso es lo que convierte el sistema en una herramienta de trabajo, no solo en una caja registradora.",
      },
      { type: "h2", content: "Lo que ve la familia" },
      {
        type: "p",
        content:
          "Un club no se sostiene solo con buenos entrenamientos; se sostiene con familias que renuevan cada mes. En Medellín, donde la oferta pública gratuita es amplia, la experiencia del acudiente es parte de lo que justifica la mensualidad. Esto es lo que recibe un papá o una mamá cuando el club usa SportMaps:",
      },
      {
        type: "ul",
        items: [
          "La app instalable en el celular (sin pasar por tiendas de aplicaciones), con notificaciones push.",
          "El cobro del mes con un enlace para pagar por PSE, Nequi o tarjeta en un minuto, o la opción de mandar el comprobante de transferencia por WhatsApp, que el asistente lee y deja listo para que el club lo apruebe.",
          "El carné digital del atleta con código QR.",
          "El calendario y los avisos del grupo: horarios, cambios de escenario, partidos.",
          "Un informe mensual del atleta por correo, con enlace, para ver asistencia y avances.",
        ],
      },
      {
        type: "p",
        content:
          "Si el club vende uniformes o kits, puede activar la tienda en línea, con cupones y compra sin necesidad de crear cuenta (es un adicional de $49.000 al mes, incluido en Escuela Elite); o, si no quiere una tienda completa, un catálogo pequeño de artículos que se suma al cobro de la mensualidad. Y si trabaja con un fisioterapeuta, ese profesional puede quedar vinculado a la escuela. Todo con soporte en español desde Colombia por WhatsApp.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Un ejemplo ilustrativo de cómo se ve el costo: un club de 100 atletas cabe en Escuela Crecimiento ($99.000 al mes, o $89.000 con pago anual). Si tuviera 200, pasaría a Escuela Pro ($159.000, o $139.000 anual). Hasta 20 atletas, el plan Free Start no cuesta nada.",
      },
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu club todavía no está constituido, empieza por el acta, los estatutos y el trámite en SIMÓN 2.0; el software puede esperar unas semanas.",
          "Si ya usas otro sistema que te funciona y tus familias pagan sin problema, migrar solo por migrar no tiene sentido. Compara con calma qué ganas.",
          "Si nadie en el club va a revisar los pagos ni a responder a las familias, ninguna herramienta lo hará por ti: la IA lee el comprobante y lo deja listo, pero la aprobación y las decisiones siguen siendo del club.",
        ],
      },
      {
        type: "cta",
        title: "Lleva tu club de Medellín a un solo sistema",
        description:
          "Categorías, cobros, asistencia y WhatsApp IA incluidos desde el plan gratis. Te ayudamos a migrar desde Excel.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "leer-comprobantes-de-pago-con-ia",
      "inscripcion-vs-mensualidad-escuela-deportiva",
    ],
    about: [
      "clubes deportivos en Medellín",
      "reconocimiento deportivo del INDER",
      "Escuelas Populares del Deporte",
      "software de gestión deportiva",
    ],
    mentions: ["INDER Medellín", "SIMÓN 2.0", "Wompi", "Mercado Pago", "Nequi", "Bancolombia", "PSE", "WhatsApp", "Meta", "DIAN"],
    faqs: [
      {
        question: "¿Cómo saco el reconocimiento deportivo de un club en Medellín?",
        answer:
          "Se tramita ante el INDER Medellín de forma digital por la plataforma SIMÓN 2.0, pidiendo primero código y clave de acceso. Se presentan documentos como el acta de constitución, los estatutos y el acta de reunión del órgano de administración. El reconocimiento dura cinco años y luego se renueva.",
      },
      {
        question: "¿Para qué sirve el reconocimiento deportivo del INDER?",
        answer:
          "Según la Alcaldía de Medellín, el club reconocido entra al Sistema Nacional del Deporte, puede acceder a patrocinios, asesorías y escenarios deportivos, y sus deportistas pueden participar en eventos de ligas y federaciones.",
      },
      {
        question: "¿Qué software sirve para un club deportivo en Medellín?",
        answer:
          "Necesitas uno que maneje categorías por edad, cobros recurrentes, pagos por Nequi y PSE y comunicación con familias. SportMaps incluye todo eso, más WhatsApp IA para leer comprobantes, sin costo en el plan gratis hasta 20 alumnos.",
      },
      {
        question: "¿Las Escuelas Populares del Deporte del INDER son gratis?",
        answer:
          "Son un programa público del INDER para quienes viven o estudian en Medellín, organizado por edades y con decenas de disciplinas. Los requisitos y cupos vigentes los publica el INDER; para inscribirse se contacta al gestor territorial de la comuna.",
      },
      {
        question: "¿Puedo cobrar inscripción y mensualidad por separado?",
        answer:
          "Sí, y es lo recomendable. En SportMaps la inscripción se cobra una sola vez y la mensualidad se genera automáticamente cada periodo, con recordatorios por correo y WhatsApp.",
      },
    ],
  },

  // ───────────────────────────── CALI ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-cali",
    title: "Software para escuelas deportivas en Cali: reconocimiento ante la Secretaría del Deporte, escenarios y cobros",
    excerpt:
      "Cómo funciona el reconocimiento deportivo en Cali, qué pasa cuando cierran un escenario como la Unidad Deportiva Alberto Galindo y cómo cobrar mensualidades sin perseguir a nadie.",
    category: "Por ciudad",
    readTime: "8 min",
    date: "29 Sep 2026",
    isoDate: "2026-09-29",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En Cali, los clubes deportivos tramitan su reconocimiento ante la Secretaría del Deporte y la Recreación de la Alcaldía, con un trámite propio para obtenerlo, otro para renovarlo y otro para disolver el club. Una vez en regla, el reto es operativo: escenarios compartidos que a veces cierran, muchas disciplinas y familias que pagan por Nequi o transferencia. Un software como SportMaps centraliza inscripciones, mensualidades, asistencia y avisos, y lee con IA los comprobantes de pago que llegan por WhatsApp, sin cobrarte por ese asistente.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Reconocimiento: Secretaría del Deporte y la Recreación de Cali, radicable en la sede, en varios CALI de comuna o en la sede electrónica de la Alcaldía. Operación: si entrenas en escenarios públicos, lo que más te va a servir es avisar rápido a las familias y llevar la asistencia desde el celular. Cobros: enlaces de pago con PSE y Nequi y conciliación automática de comprobantes.",
      },
      { type: "h2", content: "Reconocimiento deportivo en Cali: lo que dice la Alcaldía" },
      {
        type: "p",
        content:
          "La Secretaría del Deporte y la Recreación publica tres trámites relacionados con clubes: reconocimiento deportivo a clubes deportivos, clubes promotores y clubes pertenecientes a entidades no deportivas; su renovación; y la disolución. La ficha oficial cita como normas la Ley 49 de 1983 y la Resolución 0231 de 2011, además del marco nacional del Decreto Ley 1228 de 1995.",
      },
      {
        type: "table",
        headers: ["Aspecto", "Qué sabemos", "Fuente"],
        rows: [
          ["Quién lo otorga", "Secretaría del Deporte y la Recreación de Santiago de Cali", "cali.gov.co"],
          ["Tipos de club", "Clubes deportivos, clubes promotores y clubes de entidades no deportivas (empresas, colegios)", "cali.gov.co"],
          ["Dónde radicar", "Sede de la Secretaría, Ventanilla Única, CALI de varias comunas y sede electrónica", "cali.gov.co"],
          ["Requisitos y formulario", "En la ficha del trámite en gov.co", "cali.gov.co / gov.co"],
          ["Vigencia", "Cinco años desde que queda en firme el acto", "Ley 962 de 2005, art. 72"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "La dirección y los teléfonos de la Secretaría aparecen distintos en diferentes páginas oficiales. Antes de ir en persona, confirma el punto de atención en cali.gov.co o radica por la sede electrónica.",
      },
      {
        type: "p",
        content:
          "Un detalle útil para escuelas: si tu proyecto nace dentro de un colegio o una empresa, la figura de «club perteneciente a entidad no deportiva» existe precisamente para eso. Vale la pena preguntarlo antes de constituir una entidad nueva.",
      },
      { type: "h2", content: "Escenarios públicos: lo que pasa cuando cierran" },
      {
        type: "p",
        content:
          "Buena parte de las escuelas y clubes caleños entrenan en escenarios administrados por la Secretaría. La Unidad Deportiva Alberto Galindo, por ejemplo, reúne según la Alcaldía 14 escenarios, entre ellos velódromo, bolera, skate park, pista de BMX, patinódromo y muro de escalada; este último reabrió en mayo de 2026 y la Secretaría estimó que beneficia directamente a cerca de 11 clubes de escalada. En 2026 la Alcaldía también anunció una hoja de ruta de recuperación de escenarios con 53 ligas.",
      },
      {
        type: "p",
        content:
          "La otra cara: los escenarios cierran. En agosto de 2026 la Alcaldía comunicó el cierre de escenarios por un día completo para un evento, con suspensión de entrenamientos y competencias. Si tu escuela se entera tarde, terminas con 40 papás esperando en la puerta. Lo que te protege:",
      },
      {
        type: "ol",
        items: [
          "Tener a todas las familias en un canal oficial que no dependa de que lean un grupo de WhatsApp saturado. En SportMaps los avisos llegan dentro de la app y como notificación push.",
          "Publicar el cambio en el calendario del grupo afectado, no en un mensaje suelto que se pierde.",
          "Si reprogramas, que la asistencia de la sesión nueva quede registrada en la fecha real, para que el informe mensual del atleta no muestre faltas que no fueron.",
        ],
      },
      { type: "h2", content: "Muchas disciplinas, una sola administración" },
      {
        type: "p",
        content:
          "Cali es una ciudad multideporte, y no es raro que una misma organización tenga patinaje, fútbol y natación, cada uno con sus categorías y su precio. En SportMaps cada disciplina puede funcionar como un programa o sede con sus equipos, horarios y entrenadores, y los cobros se generan según el plan de cada atleta. Si una familia tiene dos hijos en disciplinas distintas, el acudiente ve todo desde la misma cuenta.",
      },
      {
        type: "p",
        content:
          "Para los entrenadores hay herramientas de trabajo de verdad: pizarra táctica para fútbol (la versión multideporte está en camino), planificación por mesociclos y sesiones, evaluaciones físicas y métricas de rendimiento. Entrenadores y staff son ilimitados en todos los planes.",
      },
      { type: "h2", content: "Cobrar mensualidades en Cali sin perseguir a nadie" },
      {
        type: "p",
        content:
          "La rutina que más tiempo le quita a un director es la del cobro: mandar el recordatorio, recibir la captura de Nequi, buscar a quién corresponde, marcarla en el Excel y responder «recibido». Así se ve cada paso con y sin sistema:",
      },
      {
        type: "table",
        headers: ["Paso", "Con Excel + WhatsApp", "Con SportMaps"],
        rows: [
          ["Generar el cobro del mes", "Copiar la lista y cambiar el mes a mano", "Automático por periodo"],
          ["Avisar a la familia", "Mensaje uno por uno o en el grupo", "Recordatorio automático por correo y WhatsApp con enlace de pago"],
          ["Recibir el pago en línea", "No hay; solo transferencias", "PSE, Nequi, tarjeta, botón Bancolombia o Mercado Pago, directo a tu cuenta"],
          ["Revisar la captura de una transferencia", "Mirarla y buscar en el extracto", "La IA extrae monto y referencia, la cruza contra el cobro y la deja lista para aprobar con un toque"],
          ["Familias atrasadas", "Lista mental", "Ves quién debe y qué mes; recargo por mora solo si tú lo activas"],
        ],
      },
      {
        type: "p",
        content:
          "El asistente de WhatsApp IA viene gratis en todos los planes. Meta da 1.000 conversaciones de servicio al mes por número sin costo; si te pasas, el excedente lo cobra Meta directo a tu tarjeta (en Colombia, del orden de $3 por mensaje de servicio). SportMaps no vende paquetes de conversaciones.",
      },
      { type: "h2", content: "Implementación en cinco pasos" },
      {
        type: "ol",
        items: [
          "Carga tus disciplinas, sedes y categorías por edad.",
          "Inscribe a los atletas con el enlace o QR de inscripción; los papás quedan vinculados como acudientes.",
          "Configura inscripción y mensualidad por programa, y conecta tu cuenta de Wompi o Mercado Pago.",
          "Conecta tu número de WhatsApp por el registro integrado de Meta.",
          "Activa la app (PWA) en el celular de los entrenadores para tomar asistencia y publicar avisos.",
        ],
      },
      { type: "h2", content: "Cuánto cuesta" },
      {
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
      },
      {
        type: "p",
        content:
          "Lo que no cambia entre planes: WhatsApp IA, pasarelas Wompi y Mercado Pago, entrenadores y staff ilimitados, pagos manuales con comprobante, página pública de la escuela con botón de inscripción e integración de facturación electrónica DIAN, donde solo pagas el paquete de facturas que uses. El plan lo define la cantidad de alumnos, no las funciones básicas de cobro.",
      },
      {
        type: "p",
        content:
          "Si tu escuela tiene una sede propia con varias canchas, también puedes publicar tus canchas y recibir solicitudes de reserva por enlace; y si organiza torneos, existe el adicional de torneos ($49.000 al mes, incluido en Escuela Elite). Para una escuela que solo entrena en escenarios de la Secretaría, lo normal es que no necesite ninguno de los dos.",
      },
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si casi todas tus familias pagan en efectivo y no quieren cambiar, el valor de las pasarelas baja; igual te sirve el registro de pagos manuales, pero no esperes milagros en la cobranza.",
          "Si tu club depende de una liga que exige su propia plataforma de inscripción de deportistas, SportMaps no la reemplaza: la complementa en la gestión interna.",
          "Si aún no tienes claro tu modelo de precios por disciplina, defínelo antes; el sistema aplica las reglas, no las inventa.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en Cali, en orden",
        description:
          "Prueba gratis con hasta 20 alumnos. Avisos, cobros y WhatsApp IA incluidos desde el primer día.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "recordatorios-de-pago-por-whatsapp-automaticos",
      "grupos-de-whatsapp-vs-app-escuela-deportiva",
      "excel-vs-software-escuela-deportiva",
    ],
    about: [
      "escuelas deportivas en Cali",
      "reconocimiento deportivo de clubes en Cali",
      "escenarios deportivos de Cali",
      "software de gestión deportiva",
    ],
    mentions: [
      "Secretaría del Deporte y la Recreación de Cali",
      "Unidad Deportiva Alberto Galindo",
      "Wompi",
      "Mercado Pago",
      "Nequi",
      "PSE",
      "Bancolombia",
      "WhatsApp",
      "Meta",
    ],
    faqs: [
      {
        question: "¿Dónde se tramita el reconocimiento deportivo de un club en Cali?",
        answer:
          "Ante la Secretaría del Deporte y la Recreación de la Alcaldía de Cali. Se puede radicar en su sede, en la Ventanilla Única, en los CALI de varias comunas o en la sede electrónica. Los requisitos y el formulario están en la ficha del trámite en gov.co.",
      },
      {
        question: "¿Cada cuánto se renueva el reconocimiento deportivo?",
        answer:
          "El reconocimiento deportivo se concede por cinco años desde que queda en firme el acto que lo otorga, según la Ley 962 de 2005. En Cali la renovación es un trámite aparte ante la misma Secretaría.",
      },
      {
        question: "¿Un colegio o una empresa puede tener un club deportivo reconocido en Cali?",
        answer:
          "Sí. La Secretaría del Deporte de Cali reconoce también clubes pertenecientes a entidades no deportivas, que es la figura para clubes de colegios o empresas. Conviene revisar sus requisitos antes de crear una entidad nueva.",
      },
      {
        question: "¿Cómo aviso a los papás si cierran el escenario donde entrenamos?",
        answer:
          "Lo más confiable es un canal oficial con notificación push, no solo el grupo de WhatsApp. En SportMaps publicas el aviso y el cambio en el calendario del grupo, y les llega a las familias en la app y como notificación al celular.",
      },
      {
        question: "¿Cuánto cuesta un software de gestión para una escuela deportiva en Cali?",
        answer:
          "SportMaps tiene un plan gratis hasta 20 alumnos y planes desde $69.000 al mes. Las pasarelas de pago, el WhatsApp IA y el staff ilimitado vienen incluidos en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── BARRANQUILLA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-barranquilla",
    title: "Software para escuelas y clubes deportivos en Barranquilla: reconocimiento, apoyos del Distrito y cobros",
    excerpt:
      "Por qué el reconocimiento deportivo vigente pesa tanto en Barranquilla, cómo se tramita ante la Secretaría Distrital de Recreación y Deportes y cómo ordenar la operación del club.",
    category: "Por ciudad",
    readTime: "8 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En Barranquilla, el reconocimiento deportivo lo tramitan los clubes ante la Secretaría Distrital de Recreación y Deportes, sin costo, y hay que actualizarlo cada cinco años. Tenerlo vigente no es un trámite decorativo: el Distrito lo ha usado como requisito para entregar implementos, capacitar entrenadores, asignar espacios en escenarios y participar en convocatorias como Team Barranquilla. Para la operación diaria, un software como SportMaps te deja al día atletas, entrenadores, pagos y asistencia, que es justo lo que te piden cuando llega una convocatoria.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Reconocimiento gratuito ante la Secretaría Distrital, vigencia de cinco años y peso real para acceder a apoyos del Distrito. El club que tiene su información organizada responde las convocatorias en horas, no en semanas. SportMaps ordena esa información y además cobra las mensualidades por Nequi, PSE o tarjeta directo a tu cuenta.",
      },
      { type: "h2", content: "Reconocimiento deportivo en Barranquilla" },
      {
        type: "p",
        content:
          "La Secretaría Distrital de Recreación y Deportes (que funciona en el Estadio Metropolitano) es la que otorga y renueva el reconocimiento de clubes deportivos, clubes promotores y clubes de entidades no deportivas. Lo que está documentado públicamente:",
      },
      {
        type: "table",
        headers: ["Tema", "Qué se sabe", "Fuente"],
        rows: [
          ["Costo", "El reconocimiento se puede obtener de forma gratuita", "El Heraldo, con información de la Secretaría"],
          ["Dónde", "Sección de trámites y servicios de barranquilla.gov.co", "Alcaldía de Barranquilla"],
          ["Vigencia", "Se actualiza cada cinco años", "Documento de gestión de la Secretaría; Ley 962 de 2005"],
          ["Para qué sirve", "Implementos deportivos, capacitación a entrenadores y espacios en escenarios para clubes con reconocimiento vigente", "El Heraldo, 2022"],
          ["Control", "La Gerencia de Control Interno evaluó en 2025 el trámite de reconocimiento y renovación", "barranquilla.gov.co"],
        ],
      },
      {
        type: "p",
        content:
          "En 2022, por ejemplo, la Secretaría entregó implementos a 138 clubes con reconocimiento vigente, según El Heraldo. Y en convocatorias del programa Team Barranquilla se ha exigido que el deportista esté afiliado a un club con reconocimiento vigente. Traducido: un club con el reconocimiento vencido se queda por fuera aunque tenga buenos deportistas.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Los requisitos documentales cambian. Antes de radicar o renovar, revisa la ficha vigente en barranquilla.gov.co o consulta en la Secretaría. Y anota la fecha de vencimiento de tu reconocimiento en un lugar donde no se pierda.",
      },
      { type: "h2", content: "Lo que te piden en una convocatoria (y cómo tenerlo listo)" },
      {
        type: "p",
        content:
          "Cada convocatoria tiene sus bases, pero casi todas piden demostrar que el club existe y opera: quiénes son los deportistas, en qué categoría, quién los entrena, con qué frecuencia entrenan y qué resultados tienen. Si eso vive en cuadernos y chats, cada convocatoria es una emergencia. Con un sistema:",
      },
      {
        type: "ul",
        items: [
          "Cada atleta tiene ficha con documento, fecha de nacimiento, categoría, equipo y acudientes.",
          "La asistencia queda registrada por sesión, manual o por QR con el carné digital del atleta.",
          "Las evaluaciones físicas, métricas de rendimiento y partidos quedan en el historial del deportista.",
          "Entrenadores y staff aparecen con su rol; no hay límite de usuarios en ningún plan.",
        ],
      },
      { type: "h2", content: "Escenarios, calor y horarios" },
      {
        type: "p",
        content:
          "Barranquilla quedó con un parque de escenarios importante tras los Juegos Centroamericanos y del Caribe de 2018, y muchos clubes entrenan en escenarios del Distrito o en canchas de barrio. Por el clima, es común que los grupos entrenen muy temprano o al final de la tarde, lo que concentra varios grupos en las mismas franjas. Dos recomendaciones prácticas:",
      },
      {
        type: "ol",
        items: [
          "Configura cada franja como un grupo con su sede, horario y entrenador, para que la asistencia y el cobro queden asociados al grupo correcto.",
          "Si tu club tiene cancha o instalación propia, publícala en SportMaps para recibir solicitudes de reserva por enlace en vez de por chat; y si quieres controlar el ingreso, el adicional de torniquetes y biométricos ZKTeco registra la entrada automáticamente.",
        ],
      },
      { type: "h2", content: "Cobrar en Barranquilla: Nequi, PSE, transferencias y efectivo" },
      {
        type: "p",
        content:
          "Como en el resto del país, las familias mezclan medios: Nequi, transferencia, PSE y efectivo en la cancha. Lo que SportMaps hace con cada uno:",
      },
      {
        type: "table",
        headers: ["Medio", "Cómo entra al sistema", "Lo que pagas"],
        rows: [
          ["PSE, Nequi, tarjeta, botón Bancolombia", "Enlace de pago con Wompi; se marca solo", "Tarifa de Wompi; sin comisión de SportMaps"],
          ["Mercado Pago (billetera, tarjetas)", "Enlace de pago con Mercado Pago; se marca solo", "Tarifa de Mercado Pago; sin comisión de SportMaps"],
          ["Transferencia o Nequi a tu cuenta + captura", "WhatsApp IA lee el comprobante, extrae monto y referencia, lo cruza y lo deja listo para aprobar", "Gratis; Meta solo cobra si superas 1.000 conversaciones de servicio al mes"],
          ["Efectivo", "Registro manual con comprobante", "$0"],
        ],
      },
      {
        type: "p",
        content:
          "Los cobros se generan solos cada periodo, con recordatorios automáticos. La política de mora la defines tú: puedes activar un recargo o no, y en ningún caso el sistema cancela al atleta por atrasarse; esa decisión es del club. Si además emites facturas, la integración con facturación electrónica DIAN es gratis y solo pagas el paquete de facturas.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Sobre la mora: en clubes donde la mensualidad compite con otros gastos del hogar, cancelar automáticamente a un niño por atrasarse suele costar más de lo que recupera. Por eso en SportMaps la mora nunca da de baja al atleta; el club decide caso por caso y puede ofrecer pagar el saldo con un enlace en cualquier momento.",
      },
      { type: "h2", content: "Pasos para empezar" },
      {
        type: "ol",
        items: [
          "Anota la fecha de vencimiento de tu reconocimiento deportivo en el calendario de la escuela.",
          "Crea tus sedes y franjas horarias como grupos, con categorías y entrenadores.",
          "Inscribe atletas con enlace o QR; los papás completan la ficha y quedan como acudientes.",
          "Configura inscripción y mensualidad y conecta Wompi o Mercado Pago a la cuenta del club.",
          "Conecta el WhatsApp del club con el registro integrado de Meta.",
          "Activa la página pública del club, con botón de inscripción, para que las familias nuevas encuentren horarios e inscripción.",
        ],
      },
      { type: "h2", content: "Cuánto cuesta y qué plan elegir" },
      {
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
      },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: un club con 70 deportistas repartidos en tres franjas cabe en Escuela Crecimiento. Si paga anual, el costo queda en $89.000 al mes. Con eso tiene cobros automáticos, pasarelas, WhatsApp IA y staff ilimitado. Lo que paga aparte son las tarifas de la pasarela por cada pago en línea y, solo si supera las 1.000 conversaciones de servicio gratis de Meta en el mes, el excedente que Meta le cobra directo.",
      },
      { type: "h2", content: "Lo que ve la familia" },
      {
        type: "p",
        content:
          "Para el acudiente, el cambio se nota desde el primer mes. Recibe el cobro con un enlace para pagar desde el celular, puede mandar la captura por WhatsApp y el asistente la lee al instante y la deja lista para que el club la apruebe con un toque, tiene el carné digital de su hijo con QR, ve el calendario y los avisos del grupo en la app instalable con notificaciones push, y recibe un informe mensual del atleta por correo. Si el club tiene la tienda en línea (adicional), puede comprar uniformes sin crear cuenta. Y si algo falla, el soporte de SportMaps atiende en español por WhatsApp desde Colombia.",
      },
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu club funciona como un grupo informal sin cobros fijos, primero formaliza: reconocimiento, precios y responsables.",
          "Si buscas que el software consiga patrocinios o apoyos del Distrito por ti, no lo hará. Te deja listo para aplicar; aplicar sigue siendo tarea del club.",
          "Si solo necesitas una lista de asistencia, el plan gratis basta y no tiene sentido pagar uno más grande.",
        ],
      },
      {
        type: "cta",
        title: "Tu club en Barranquilla, listo para la próxima convocatoria",
        description:
          "Atletas, entrenadores, asistencia y cobros en un solo sistema. Empieza gratis.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "carnet-digital-deportista",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
      "wompi-vs-mercado-pago-escuelas-deportivas",
    ],
    about: [
      "clubes deportivos en Barranquilla",
      "reconocimiento deportivo de clubes",
      "Secretaría Distrital de Recreación y Deportes de Barranquilla",
      "software de gestión deportiva",
    ],
    mentions: [
      "Secretaría Distrital de Recreación y Deportes de Barranquilla",
      "Team Barranquilla",
      "Estadio Metropolitano",
      "Wompi",
      "Mercado Pago",
      "Nequi",
      "PSE",
      "WhatsApp",
      "Meta",
      "ZKTeco",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el reconocimiento deportivo de un club en Barranquilla?",
        answer:
          "Según información de la Secretaría Distrital de Recreación y Deportes publicada por El Heraldo, el reconocimiento se tramita de forma gratuita. El trámite aparece en la sección de trámites y servicios de barranquilla.gov.co.",
      },
      {
        question: "¿Cada cuánto se renueva el reconocimiento deportivo en Barranquilla?",
        answer:
          "Cada cinco años. Es el plazo nacional fijado por la Ley 962 de 2005 y la Secretaría Distrital lo aplica. Conviene renovarlo antes del vencimiento para no quedar por fuera de apoyos y convocatorias.",
      },
      {
        question: "¿Para qué sirve tener el reconocimiento deportivo vigente en Barranquilla?",
        answer:
          "El Distrito lo ha usado como requisito para entregar implementos, capacitar entrenadores y asignar espacios en escenarios, y en convocatorias como Team Barranquilla se ha exigido estar afiliado a un club con reconocimiento vigente.",
      },
      {
        question: "¿Qué software usan los clubes deportivos en Barranquilla para cobrar?",
        answer:
          "Muchos todavía cobran con Excel y WhatsApp. SportMaps genera los cobros cada mes, envía enlaces de pago con Wompi o Mercado Pago y lee con IA los comprobantes de Nequi o transferencia. El plan gratis cubre hasta 20 alumnos.",
      },
      {
        question: "¿SportMaps cobra comisión sobre los pagos de las mensualidades?",
        answer:
          "No. La plata entra directo a la cuenta del club y solo aplica la tarifa de la pasarela que uses, Wompi o Mercado Pago. Los pagos en efectivo o transferencia se registran sin costo.",
      },
    ],
  },

  // ───────────────────────────── BUCARAMANGA ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-bucaramanga",
    title: "Software para escuelas deportivas en Bucaramanga y su área metropolitana: INDERBU, escenarios y cobros",
    excerpt:
      "Qué papel tiene el INDERBU, cómo pensar el reconocimiento deportivo de tu club, qué implica entrenar en escenarios compartidos y cómo manejar sedes en Floridablanca, Girón o Piedecuesta.",
    category: "Por ciudad",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    ...AUTHOR,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "En Bucaramanga, el ente deportivo municipal es el INDERBU (Instituto de la Juventud, el Deporte y la Recreación de Bucaramanga), y a nivel departamental está Indersantander. Una escuela o club de la ciudad necesita ponerse en regla con su reconocimiento deportivo y, en paralelo, resolver una operación que casi siempre abarca varios municipios del área metropolitana. SportMaps te ayuda en lo segundo: multi-sede, inscripciones por categoría, cobros por Nequi, PSE o tarjeta directo a tu cuenta y asistencia desde el celular, con un plan gratis hasta 20 alumnos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El reconocimiento deportivo de clubes se rige por el Decreto Ley 1228 de 1995 y dura cinco años; confirma con el INDERBU o la Alcaldía de Bucaramanga cómo radicarlo hoy. Si entrenas en escenarios públicos compartidos, tus horarios dependen de franjas asignadas: organízalos por grupo y sede en el sistema para que asistencia y cobros cuadren solos.",
      },
      { type: "h2", content: "INDERBU, Indersantander y el reconocimiento de tu club" },
      {
        type: "p",
        content:
          "El INDERBU es el instituto que ejecuta los programas de actividad física, deporte, recreación y juventud del municipio. Sus informes de gestión muestran líneas como el programa de Deporte Formativo y una Escuela Especial de Formación Deportiva con grupos permanentes para niños, jóvenes y adultos con discapacidad cognitiva, auditiva y visual. Indersantander, por su parte, es el instituto departamental y ha administrado escenarios grandes como el Estadio Alfonso López y el Coliseo Vicente Díaz Romero.",
      },
      {
        type: "p",
        content:
          "Sobre el reconocimiento deportivo: no encontramos publicada en línea una ficha actualizada del trámite para Bucaramanga, así que no vamos a inventarte requisitos. Lo que sí es nacional y aplica en todo el país:",
      },
      {
        type: "table",
        headers: ["Norma", "Qué establece"],
        rows: [
          ["Ley 181 de 1995", "Ley del deporte: pone a los entes municipales a fomentar la formación deportiva y cofinanciar centros de iniciación y formación"],
          ["Decreto Ley 1228 de 1995", "Hace del reconocimiento deportivo un requisito para clubes y organismos del nivel municipal"],
          ["Ley 962 de 2005, art. 72", "El reconocimiento se concede por cinco años desde que queda en firme el acto"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Antes de constituir o renovar, llama o escribe al INDERBU y pide la lista vigente de documentos. Si tus sedes están en otro municipio del área metropolitana, pregunta también allí: el reconocimiento lo da el ente del municipio donde está domiciliado el club.",
      },
      { type: "h2", content: "Entrenar en escenarios compartidos" },
      {
        type: "p",
        content:
          "Muchas escuelas de la ciudad usan escenarios públicos con franjas asignadas. Un ejemplo documentado por Vanguardia en 2022: el estadio de atletismo Luis Enrique Figueroa Rey abría al público solo en ciertas horas de la mañana y la noche, y el resto del día quedaba para deportistas de alto rendimiento y escuelas de formación. Ese mismo año se informó que los escenarios públicos se podían reservar en línea en el sitio del INDERBU.",
      },
      {
        type: "p",
        content:
          "También hay escenarios con problemas de mantenimiento: en 2022 Vanguardia reportó filtraciones en el techo del Coliseo Vicente Díaz Romero que obligaron a suspender partidos de un torneo nacional. Cuando el escenario falla, la escuela necesita avisar rápido y reprogramar sin perder el control.",
      },
      {
        type: "ol",
        items: [
          "Crea cada franja asignada como un grupo con su sede, horario y entrenador.",
          "Publica los cambios en el calendario del grupo; las familias reciben el aviso en la app y por notificación push.",
          "Toma asistencia desde el celular, manual o con el QR del carné digital, en la fecha real de la sesión.",
          "Si tienes instalación propia, publica tus canchas en SportMaps y recibe las solicitudes de reserva por enlace.",
        ],
      },
      { type: "h2", content: "Una escuela, cuatro municipios" },
      {
        type: "p",
        content:
          "Es habitual que una escuela de Bucaramanga tenga grupos en Floridablanca, Girón o Piedecuesta. Eso complica todo si se maneja en hojas separadas: precios distintos por sede, entrenadores que rotan y familias que cambian de grupo. En SportMaps la multi-sede es nativa: cada sede con sus grupos y entrenadores, cada atleta en su grupo y todos los cobros en un mismo lugar. Si además quieres llevar ingresos, egresos y cierre de mes de todas las sedes juntos, está el módulo de contabilidad (adicional, incluido en Escuela Elite).",
      },
      { type: "h2", content: "Cobros y comprobantes" },
      {
        type: "table",
        headers: ["Tarea", "Cómo la resuelve SportMaps", "Costo"],
        rows: [
          ["Mensualidad de cada atleta", "Cobro automático por periodo; inscripción aparte, una sola vez", "Incluido en el plan"],
          ["Pago en línea", "Wompi (PSE, Nequi, tarjetas, botón Bancolombia) o Mercado Pago, directo a tu cuenta", "Solo la tarifa de la pasarela"],
          ["Captura de una transferencia", "WhatsApp IA lee el comprobante, extrae monto y referencia, lo cruza y lo deja listo para aprobar", "Gratis; Meta cobra solo si superas 1.000 conversaciones de servicio al mes"],
          ["Recordatorios", "Automáticos por correo y WhatsApp", "Incluido"],
          ["Facturas", "Integración con facturación electrónica DIAN; el contador puede tener acceso", "Integración gratis; pagas el paquete de facturas"],
        ],
      },
      { type: "h2", content: "Para los entrenadores" },
      {
        type: "p",
        content:
          "Una escuela que rota entrenadores entre sedes necesita que la información del grupo viaje con el grupo, no con la libreta del entrenador. En SportMaps cada entrenador entra con su usuario (sin costo adicional, el staff es ilimitado en todos los planes) y desde el celular tiene:",
      },
      {
        type: "ul",
        items: [
          "La lista de su grupo y la toma de asistencia, manual o con el QR del carné digital.",
          "La pizarra táctica de fútbol, con jugadas, alineaciones y ejercicios (la versión para otros deportes está en camino).",
          "La planificación del entrenamiento por mesociclos y sesiones.",
          "Las evaluaciones físicas y las métricas de rendimiento de cada atleta.",
          "El registro de partidos.",
        ],
      },
      {
        type: "p",
        content:
          "Los permisos se definen por rol: un entrenador ve su grupo y su trabajo técnico; la administración ve los cobros; el contador puede ver las facturas en solo lectura. Así nadie tiene que compartir la contraseña del director para tomar asistencia.",
      },
      { type: "h2", content: "Lo que ve la familia" },
      {
        type: "p",
        content:
          "El acudiente instala la app en el celular, recibe el cobro con un enlace para pagar por PSE, Nequi o tarjeta, o manda la captura por WhatsApp para que el asistente la lea y la deje lista para aprobar. Tiene el carné digital de su hijo, el calendario del grupo con avisos push y un informe mensual del atleta por correo. Si la escuela tiene la tienda en línea (adicional), puede comprar el uniforme sin crear cuenta.",
      },
      { type: "h2", content: "Cómo arrancar en una semana" },
      {
        type: "ol",
        items: [
          "Crea la escuela y una sede por cada municipio o escenario donde entrenas.",
          "Configura categorías por edad y equipos, y asigna entrenador y franja a cada grupo.",
          "Comparte el enlace o el QR de inscripción para que los papás llenen la ficha del atleta y queden como acudientes.",
          "Define inscripción y mensualidad por grupo o sede, y conecta Wompi o Mercado Pago a la cuenta de la escuela.",
          "Conecta el WhatsApp de la escuela con el registro integrado de Meta; el número sigue siendo tuyo.",
          "Pide a los entrenadores instalar la app y tomar asistencia desde la primera sesión.",
          "Al cerrar el mes, revisa los cobros pendientes por sede; si tienes el módulo de contabilidad (adicional), haz ahí el cierre con ingresos y egresos.",
        ],
      },
      {
        type: "p",
        content:
          "Si tus pagos hoy llegan por varios canales —Nequi del director, cuenta de la escuela, efectivo con el entrenador—, la primera semana es el mejor momento para ordenarlos: una sola cuenta receptora conectada a la pasarela y los pagos en efectivo registrados con comprobante el mismo día.",
      },
      { type: "h2", content: "Qué plan elegir" },
      {
        type: "table",
        headers: ["Tamaño de la escuela", "Plan sugerido", "Precio mensual (anual por mes)"],
        rows: [
          ["Hasta 20 alumnos", "Free Start", "$0"],
          ["Hasta 50", "Escuela Start", "$69.000 ($59.000)"],
          ["Hasta 120", "Escuela Crecimiento", "$99.000 ($89.000)"],
          ["Hasta 300", "Escuela Pro", "$159.000 ($139.000)"],
          ["Hasta 800", "Escuela Elite", "$349.000 ($299.000)"],
        ],
      },
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si dependes de una sola franja en un escenario público y tienes pocos alumnos, un plan gratis y la asistencia básica son suficientes; no pagues por lo que no usas.",
          "Si tus sedes en otros municipios funcionan como negocios separados con dueños distintos, probablemente te conviene que cada una tenga su propia cuenta.",
          "Si aún no sabes ante qué ente tramitar tu reconocimiento, resuélvelo primero con el INDERBU.",
        ],
      },
      {
        type: "cta",
        title: "Organiza tus sedes en el área metropolitana",
        description:
          "Multi-sede, cobros y asistencia en un solo sistema. Usa la calculadora para ver qué plan te sale mejor.",
        href: "/calculadora",
        label: "Abrir la calculadora",
      },
    ],
    related: [
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "control-de-asistencia-con-qr-y-torniquetes",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
    ],
    about: [
      "escuelas deportivas en Bucaramanga",
      "INDERBU",
      "reconocimiento deportivo de clubes",
      "software de gestión deportiva",
    ],
    mentions: ["INDERBU", "Indersantander", "Coliseo Vicente Díaz Romero", "Wompi", "Mercado Pago", "Nequi", "PSE", "WhatsApp", "Meta", "DIAN"],
    faqs: [
      {
        question: "¿Qué entidad maneja el deporte en Bucaramanga?",
        answer:
          "El INDERBU, Instituto de la Juventud, el Deporte y la Recreación de Bucaramanga, es el ente municipal. A nivel departamental está Indersantander, que ha administrado escenarios como el Estadio Alfonso López y el Coliseo Vicente Díaz Romero.",
      },
      {
        question: "¿Cuánto dura el reconocimiento deportivo de un club?",
        answer:
          "Cinco años contados desde que queda en firme el acto que lo otorga, según la Ley 962 de 2005. Antes de que venza hay que pedir la renovación ante el ente deportivo del municipio donde está el club.",
      },
      {
        question: "¿Puedo manejar sedes en Bucaramanga, Floridablanca y Girón con el mismo software?",
        answer:
          "Sí. SportMaps es multi-sede: cada sede tiene sus grupos, horarios y entrenadores, y todo se ve en un solo panel, incluidos los ingresos de todas las sedes.",
      },
      {
        question: "¿Cómo cobro la mensualidad de la escuela por Nequi sin revisar capturas una por una?",
        answer:
          "Tienes dos caminos: enviar un enlace de pago con Wompi, que acepta Nequi y se marca solo, o dejar que el asistente de WhatsApp IA de SportMaps lea las capturas, extraiga monto y referencia, las cruce contra el cobro y te las deje listas para aprobar con un toque. Ambos vienen en todos los planes.",
      },
    ],
  },

  // ───────────────────────────── EJE CAFETERO ─────────────────────────────
  {
    slug: "software-escuelas-deportivas-eje-cafetero",
    title: "Software para escuelas deportivas en el Eje Cafetero: Pereira, Manizales y Armenia",
    excerpt:
      "Los entes deportivos de cada capital, por qué el reconocimiento vigente pesa en los estímulos a deportistas y cómo manejar una escuela con sedes en varias ciudades de la región.",
    category: "Por ciudad",
    readTime: "8 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "En el Eje Cafetero cada capital tiene su propio ente deportivo: en Pereira la Secretaría de Deporte y Recreación, en Manizales la Secretaría del Deporte y en Armenia el IMDERA (Instituto Municipal del Deporte y la Recreación de Armenia). Ante ellos se gestiona el reconocimiento deportivo de los clubes, que en la región no es un papel más: tanto Manizales como Armenia lo han exigido para postular deportistas a sus programas de estímulos. Para la operación diaria, SportMaps centraliza inscripciones, cobros, asistencia y comunicación con las familias, incluso si tu escuela tiene sedes en más de una ciudad.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Tres capitales, tres entes deportivos, un mismo marco nacional: reconocimiento deportivo por cinco años según el Decreto Ley 1228 de 1995 y la Ley 962 de 2005. En Manizales y Armenia el reconocimiento vigente ha sido requisito para los programas de estímulos a deportistas. Ten tu club al día y tu información lista para postular.",
      },
      { type: "h2", content: "Una región que ya hospedó unos Juegos Nacionales" },
      {
        type: "p",
        content:
          "Pereira, Manizales y Armenia fueron las sedes principales de los Juegos Nacionales 2023, celebrados en noviembre de ese año con el apoyo de Caldas, Risaralda y Quindío, y con el Valle del Cauca como aliado de la postulación. Eso dejó escenarios intervenidos y una red de ligas y clubes activos. Para una escuela formativa, significa que el camino de un niño hacia la competencia pasa casi siempre por un club reconocido y una liga departamental.",
      },
      { type: "h2", content: "Los entes deportivos de cada capital" },
      {
        type: "table",
        headers: ["Ciudad", "Ente deportivo", "Dato verificable reciente"],
        rows: [
          [
            "Pereira",
            "Secretaría de Deporte y Recreación de Pereira",
            "La Villa Olímpica es la centralidad deportiva de la ciudad y fue objeto de propuestas de intervención para los Juegos Nacionales 2023.",
          ],
          [
            "Manizales",
            "Secretaría del Deporte de Manizales",
            "Su programa Deportistas y Entrenadores Excelencia 2025 pidió reconocimiento deportivo vigente de club y liga, y certificado de afiliación a un club de Manizales. En 2026 la Alcaldía adjudicó la renovación de la cubierta del Estadio Palogrande por más de $6.177 millones.",
          ],
          [
            "Armenia",
            "IMDERA, Instituto Municipal del Deporte y la Recreación de Armenia",
            "Su convocatoria 2026 para postular a los mejores deportistas (Resolución 165 del 1 de julio de 2026) se dirigió a los organismos deportivos reconocidos por el instituto.",
          ],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No encontramos publicadas en línea las fichas actualizadas del trámite de reconocimiento de clubes en Pereira, Manizales ni Armenia. Pide la lista de requisitos directamente en la Secretaría o el instituto de tu ciudad antes de radicar, y anota la fecha de vencimiento de tu reconocimiento.",
      },
      { type: "h2", content: "Postular a un estímulo sin correr: qué tener listo" },
      {
        type: "p",
        content:
          "Las convocatorias de estímulos de la región piden, según cada caso, documentos como hoja de vida deportiva, certificaciones de logros, aval de la liga o federación, antecedentes disciplinarios, reconocimiento vigente del club y certificado de afiliación del deportista. Algunos de esos papeles los expide la liga, pero la base la tienes que tener tú:",
      },
      {
        type: "ul",
        items: [
          "Ficha de cada atleta con documento, fecha de nacimiento, categoría y acudiente.",
          "Historial de partidos, evaluaciones físicas y métricas de rendimiento por deportista.",
          "Registro de asistencia por sesión, que respalda la continuidad del proceso.",
          "Listado de entrenadores con su rol y grupo.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps todo eso vive en la ficha del atleta y en los módulos de entrenamiento. Cuando abren una convocatoria, el trabajo es revisar y exportar, no reconstruir.",
      },
      { type: "h2", content: "Una escuela, varias ciudades" },
      {
        type: "p",
        content:
          "Las tres capitales están cerca y muchas escuelas crecen abriendo grupos en la ciudad vecina o en municipios como Dosquebradas o Chinchiná. Eso trae tres problemas típicos: precios distintos por sede, entrenadores que se mueven entre ciudades y cuentas separadas que nadie consolida. Con SportMaps:",
      },
      {
        type: "ol",
        items: [
          "Creas cada sede con sus categorías, horarios y entrenadores.",
          "Defines la mensualidad de cada grupo; el sistema genera los cobros cada periodo.",
          "Los entrenadores toman asistencia desde el celular en la sede donde estén, de forma manual o con el QR del carné digital.",
          "Todos los cobros de todas las sedes se ven en un mismo lugar; con el módulo de contabilidad (adicional, incluido en Escuela Elite) también llevas ingresos, egresos y cierre de mes.",
          "Las familias reciben avisos y el calendario de su grupo en la app, con notificaciones push.",
        ],
      },
      { type: "h2", content: "Cobrar mensualidades en la región" },
      {
        type: "table",
        headers: ["Cómo paga la familia", "Qué pasa en SportMaps", "Costo para la escuela"],
        rows: [
          ["PSE, Nequi, tarjeta, botón Bancolombia (Wompi)", "Pago en línea que se marca solo contra el cobro", "Tarifa de Wompi; sin comisión de SportMaps"],
          ["Billetera o tarjeta (Mercado Pago)", "Pago en línea que se marca solo", "Tarifa de Mercado Pago; sin comisión de SportMaps"],
          ["Transferencia o Nequi con captura por WhatsApp", "La IA lee el comprobante, extrae monto y referencia, lo cruza y lo deja listo para aprobar", "Gratis; Meta da 1.000 conversaciones de servicio al mes por número y cobra solo el excedente (del orden de $3 por mensaje en Colombia)"],
          ["Efectivo", "Registro manual con comprobante", "$0"],
        ],
      },
      {
        type: "p",
        content:
          "La inscripción se cobra una vez y la mensualidad cada periodo, con recordatorios automáticos por correo y WhatsApp. Si quieres recargo por mora, lo activas y defines tú; el sistema nunca cancela a un atleta por atrasarse. Si emites facturas, la integración con facturación electrónica DIAN es gratis y solo pagas el paquete según la cantidad de facturas.",
      },
      { type: "h2", content: "Para los entrenadores y para las familias" },
      {
        type: "p",
        content:
          "Una escuela formativa que quiere llevar deportistas a ligas y convocatorias necesita registrar el proceso, no solo el resultado. Por eso, además de los cobros, SportMaps les da a los entrenadores herramientas de trabajo desde el celular, con staff ilimitado en todos los planes:",
      },
      {
        type: "ul",
        items: [
          "Pizarra táctica de fútbol con jugadas, alineaciones y ejercicios (multideporte en camino).",
          "Planificación por mesociclos y sesiones.",
          "Evaluaciones físicas y métricas de rendimiento por atleta.",
          "Registro de partidos.",
          "Asistencia manual o con QR, y control de acceso con torniquetes o biométricos ZKTeco como adicional si la escuela tiene sede propia.",
        ],
      },
      {
        type: "p",
        content:
          "Del lado de la familia, el acudiente tiene la app instalable con notificaciones push, el carné digital del atleta, el calendario del grupo, el cobro del mes con enlace de pago y un informe mensual del atleta por correo. Ese informe, con asistencia y avances, es lo que más ayuda a que un papá entienda por qué vale la pena seguir pagando el proceso formativo. Si la escuela vende uniformes, la tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite) permite cupones y compra sin cuenta.",
      },
      {
        type: "p",
        content:
          "Un consejo práctico para la región: si tus deportistas van a postular a estímulos municipales, revisa con la liga cómo certifica la afiliación y asegúrate de que el nombre y el documento del atleta coincidan exactamente con los de tu ficha. Un error de una letra en el documento es suficiente para que una postulación se devuelva.",
      },
      { type: "h2", content: "Precios" },
      {
        type: "p",
        content:
          "Free Start ($0, hasta 20 alumnos), Escuela Start ($69.000 al mes, 50 alumnos), Escuela Crecimiento ($99.000, 120), Escuela Pro ($159.000, 300) y Escuela Elite ($349.000, 800). Con pago anual bajan a $59.000, $89.000, $139.000 y $299.000 por mes. Todos incluyen WhatsApp IA, pasarelas, staff ilimitado y página web de la escuela.",
      },
      { type: "h2", content: "Cuándo NO conviene" },
      {
        type: "ul",
        items: [
          "Si tu escuela es pequeña y de una sola sede, no necesitas un plan grande: empieza en Free Start o Escuela Start.",
          "Si cada sede en otra ciudad tiene socios distintos que no quieren compartir información, es mejor que cada una tenga su cuenta.",
          "Si lo que buscas es que el software haga el trámite de reconocimiento o la postulación por ti, no lo hace: te deja la información lista para hacerlo rápido.",
        ],
      },
      {
        type: "cta",
        title: "Tu escuela en el Eje Cafetero, en un solo sistema",
        description:
          "Multi-sede, cobros con Nequi y PSE, WhatsApp IA y seguimiento de cada atleta. Empieza gratis.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "informe-mensual-del-deportista-para-padres",
      "como-cobrar-mensualidades-escuela-deportiva",
      "sportmaps-vs-controla-club",
    ],
    about: [
      "escuelas deportivas en el Eje Cafetero",
      "reconocimiento deportivo de clubes",
      "entes deportivos municipales de Pereira, Manizales y Armenia",
      "software de gestión deportiva",
    ],
    mentions: [
      "Secretaría de Deporte y Recreación de Pereira",
      "Secretaría del Deporte de Manizales",
      "IMDERA",
      "Juegos Nacionales 2023",
      "Estadio Palogrande",
      "Wompi",
      "Mercado Pago",
      "Nequi",
      "PSE",
      "WhatsApp",
    ],
    faqs: [
      {
        question: "¿Ante quién se tramita el reconocimiento deportivo de un club en Pereira, Manizales o Armenia?",
        answer:
          "Ante el ente deportivo del municipio donde está el club: la Secretaría de Deporte y Recreación en Pereira, la Secretaría del Deporte en Manizales y el IMDERA en Armenia. El reconocimiento dura cinco años y luego se renueva.",
      },
      {
        question: "¿Por qué es importante tener el reconocimiento deportivo vigente en el Eje Cafetero?",
        answer:
          "Porque los programas de estímulos lo han exigido: Manizales pidió reconocimiento vigente de club y liga en Deportistas Excelencia 2025, y el IMDERA dirigió su convocatoria 2026 a organismos reconocidos por el instituto. Sin él, tus deportistas pueden quedar por fuera.",
      },
      {
        question: "¿Puedo manejar una escuela con sedes en Pereira y Dosquebradas en el mismo software?",
        answer:
          "Sí. SportMaps es multi-sede: cada sede tiene sus grupos, horarios, entrenadores y precios, y todos los cobros se ven en un mismo lugar. El módulo de contabilidad con cierre de mes es un adicional, incluido en Escuela Elite.",
      },
      {
        question: "¿Cuánto cuesta un software para una escuela deportiva en el Eje Cafetero?",
        answer:
          "En SportMaps hay un plan gratis hasta 20 alumnos y planes pagos desde $69.000 al mes, o $59.000 con pago anual. Las pasarelas, el WhatsApp IA y el staff ilimitado vienen en todos los planes.",
      },
      {
        question: "¿El WhatsApp con IA de SportMaps tiene costo?",
        answer:
          "SportMaps no lo cobra. Meta da 1.000 conversaciones de servicio gratis al mes por número; si la escuela las supera, Meta cobra el excedente directo a su tarjeta, del orden de $3 por mensaje de servicio en Colombia.",
      },
    ],
  },
];
