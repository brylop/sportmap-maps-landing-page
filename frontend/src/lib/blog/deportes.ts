import type { BlogPost } from "../blog-posts";

export const deportesPosts: BlogPost[] = [
  {
    slug: "software-escuelas-de-futbol-colombia",
    title: "Software para escuelas de fútbol en Colombia: qué necesita de verdad una escuela formativa",
    excerpt:
      "Categorías por año de nacimiento, convocatorias, partidos de fin de semana, mensualidades y papás en WhatsApp. Qué debe resolver un software para una escuela de fútbol colombiana y cómo lo hace SportMaps.",
    category: "Por deporte",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Un software para una escuela de fútbol en Colombia tiene que resolver cuatro cosas del día a día: armar las categorías por año de nacimiento (sub-8, sub-10, sub-12…) y moverlas cada temporada, cobrar la inscripción y la mensualidad sin perseguir a cada papá, controlar quién vino a entrenar y darle al entrenador herramientas para planear sesiones y partidos. Si una herramienta solo hace una de esas cosas, vas a seguir con Excel y grupos de WhatsApp para las demás.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Busca un software que agrupe atletas por año de nacimiento y equipo, que cobre por período con recordatorios automáticos y que le dé al profe pizarra táctica, asistencia y evaluaciones. SportMaps hace las tres cosas y el asistente de WhatsApp que lee comprobantes viene gratis en todos los planes, incluido el Free Start de hasta 20 alumnos.",
      },
      { type: "h2", content: "Cómo se organiza el fútbol formativo en Colombia" },
      {
        type: "p",
        content:
          "El fútbol aficionado en Colombia lo dirige Difútbol (División Aficionada del Fútbol Colombiano), que agrupa a las ligas departamentales; las ligas, a su vez, afilian a los clubes. Una escuela de barrio puede no estar afiliada a ninguna liga y aun así jugar torneos privados, festivales y torneos de fin de semana. Esa diferencia importa porque cambia lo que tienes que registrar: un club afiliado necesita documentos de identidad, fichas y carnés al día para inscribir jugadores en los torneos oficiales.",
      },
      {
        type: "p",
        content:
          "La regla que casi todos usan es agrupar por año de nacimiento, no por edad cumplida. Un niño nacido en 2016 juega en la misma categoría todo el año aunque cumpla años en diciembre. Cada torneo publica en su convocatoria qué años entran en cada categoría, y eso se corre una vez por temporada. Además, en las categorías pequeñas muchas ligas y torneos no juegan fútbol 11 sino formatos reducidos (fútbol 7, 8 o 9) en canchas más cortas, y eso cambia cuántos jugadores necesitas por equipo.",
      },
      {
        type: "table",
        headers: ["Lo que pasa en la cancha", "Lo que tiene que hacer el software"],
        rows: [
          ["Categorías por año de nacimiento que cambian cada temporada", "Agrupar atletas por categoría y equipo, y moverlos cuando arranca el año"],
          ["Un niño entrena con su categoría y a veces juega con la de arriba", "Permitir que un atleta pertenezca a más de un equipo o categoría"],
          ["Torneos oficiales que piden documento y ficha", "Ficha del atleta con documento, fecha de nacimiento, acudiente y datos médicos"],
          ["Partidos el fin de semana con convocatoria", "Calendario y avisos para las familias, con notificación al celular"],
          ["Papás que pagan por transferencia y mandan foto del comprobante", "Lectura del comprobante y cruce contra el cobro pendiente, listo para aprobar"],
        ],
      },
      { type: "h2", content: "Los cobros en una escuela de fútbol" },
      {
        type: "p",
        content:
          "La estructura más común en Colombia es una inscripción que se paga una vez al año (muchas veces incluye uniforme o seguro) y una mensualidad. Mezclar las dos en un solo cobro es el error que más enreda la contabilidad: el papá que entra en marzo no debe pagar otra vez la inscripción en abril, y el que se retira no debe recibir más cobros.",
      },
      {
        type: "ul",
        items: [
          "Inscripción: un cobro único al entrar o al renovar la temporada.",
          "Mensualidad: un cobro por período, generado automáticamente para cada atleta activo.",
          "Recargo por mora: opcional; lo decide la escuela. En SportMaps la mora no da de baja al jugador automáticamente, así que no pierdes un alumno por un retraso de una semana.",
          "Torneos y uniformes: cobros aparte, con un cobro puntual, con el catálogo de artículos que se suma a la mensualidad o con la tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite).",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps las familias pagan con Wompi o Mercado Pago (PSE, Nequi, tarjeta, botón Bancolombia, billetera de Mercado Pago) y la plata llega directo a la cuenta de la escuela. SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela. Si el papá prefiere transferir y mandar la foto del comprobante por WhatsApp, el asistente de IA lee el monto y la referencia en segundos, lo cruza contra el cobro pendiente y lo deja listo para que la escuela lo apruebe con un toque. Ese asistente es gratis (cada escuela conecta su propio número con Meta): Meta da 1.000 conversaciones de servicio al mes por número y, si te pasas, el excedente lo cobra Meta directo a tu tarjeta.",
      },
      { type: "h2", content: "Lo que necesita el entrenador de fútbol" },
      {
        type: "p",
        content:
          "Al profe no le sirve un software que solo sirve para cobrar. Lo que usa todos los días es la lista de su equipo, la asistencia y algo para explicar jugadas. En SportMaps tiene:",
      },
      {
        type: "ul",
        items: [
          "Pizarra táctica de fútbol (2D) para dibujar jugadas, alineaciones y ejercicios, con biblioteca de ejercicios, que puede mostrar en el celular o en un televisor antes del partido.",
          "Planificación por mesociclos y sesiones, para no improvisar el entrenamiento del martes.",
          "Evaluaciones con la lista de métricas que defina la escuela: escala de 1 a 5 o de 1 a 10, sí/no, o un número con unidad (por ejemplo, segundos en un test de velocidad).",
          "Registro de partidos, para llevar quién jugó y cómo le fue.",
          "Asistencia manual o por QR desde el celular, en segundos.",
        ],
      },
      {
        type: "h3",
        content: "Qué métricas sirven de verdad en categorías formativas",
      },
      {
        type: "p",
        content:
          "En sub-8 a sub-12 tiene poco sentido medir goles. Lo útil es un puñado de cosas que el profe pueda calificar rápido después de la sesión y que a los papás les digan algo:",
      },
      {
        type: "table",
        headers: ["Métrica", "Cómo medirla", "Para qué sirve"],
        rows: [
          ["Asistencia del mes", "Automática, desde la toma de asistencia", "Es el primer indicador de que un niño se va a retirar"],
          ["Control del balón", "Escala de 1 a 5 por el profe", "Muestra progreso técnico mes a mes"],
          ["Precisión de pase", "Escala de 1 a 5 o ejercicio con número de aciertos", "Fácil de explicar al papá"],
          ["Velocidad", "Test de 20 o 30 metros, en segundos", "Dato objetivo, comparable cada trimestre"],
          ["Actitud y esfuerzo", "Escala de 1 a 5", "Lo que más valoran las familias en edades formativas"],
        ],
      },
      {
        type: "p",
        content:
          "Esas calificaciones alimentan el informe mensual del atleta, que les llega a los papás por correo con un enlace. Es la diferencia entre un papá que siente que paga una mensualidad y uno que ve que su hijo avanza.",
      },
      { type: "h2", content: "Paso a paso: pasar tu escuela de fútbol a SportMaps" },
      {
        type: "ol",
        items: [
          "Crea la escuela y tus sedes (si entrenas en dos canchas distintas, cada una es una sede).",
          "Crea las categorías por año de nacimiento y los equipos dentro de cada una.",
          "Configura la inscripción y la mensualidad, y decide si quieres recargo por mora.",
          "Comparte el enlace o el QR de inscripción en el grupo de papás; cada familia llena la ficha del niño.",
          "Asigna los entrenadores a sus equipos (los entrenadores y el staff son ilimitados en todos los planes).",
          "Conecta Wompi o Mercado Pago y el número de WhatsApp de la escuela.",
          "Empieza a tomar asistencia por QR y a cargar las evaluaciones del mes.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo NO te conviene todavía: si tienes menos de 15 niños, cobras en efectivo en la cancha y no juegas torneos, un cuaderno puede bastar. Aun así, el plan Free Start ($0, hasta 20 alumnos) te deja probar sin pagar.",
      },
      { type: "h2", content: "El fin de semana: convocatorias, partidos y papás" },
      {
        type: "p",
        content:
          "El sábado es donde una escuela de fútbol se gana o se pierde a las familias. La convocatoria que sale el jueves por la noche en un grupo de 200 mensajes, el papá que no sabe a qué cancha ir y el niño que no fue convocado tres semanas seguidas sin que nadie le explique son motivos de retiro más frecuentes que el precio de la mensualidad.",
      },
      {
        type: "ul",
        items: [
          "Publica el partido en el calendario con hora, cancha y dirección: la familia recibe el aviso en la app y la notificación en el celular, sin perderse en el grupo.",
          "Registra el partido y quién jugó: al final del semestre puedes revisar si los minutos se repartieron de forma razonable en categorías formativas.",
          "Usa la asistencia a entrenamientos como criterio de convocatoria y díselo a los papás desde el inicio; así la decisión no parece personal.",
          "Deja en la pizarra la jugada de balón parado que van a usar, para repasarla en el calentamiento.",
        ],
      },
      { type: "h2", content: "Qué plan elegir según el tamaño de tu escuela" },
      {
        type: "table",
        headers: ["Tamaño", "Plan sugerido", "Precio mensual", "Precio anual (por mes)"],
        rows: [
          ["Hasta 20 niños", "Free Start", "$0", "—"],
          ["Hasta 50 niños", "Escuela Start", "$69.000", "$59.000"],
          ["Hasta 120 niños", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Hasta 300 niños", "Escuela Pro", "$159.000", "$139.000"],
          ["Hasta 800 niños", "Escuela Elite", "$349.000", "$299.000"],
        ],
      },
      {
        type: "p",
        content:
          "Todos incluyen WhatsApp IA, pasarelas, entrenadores ilimitados y página web de la escuela. La facturación electrónica DIAN tiene la integración gratis y solo pagas el paquete de facturas que uses.",
      },
      {
        type: "cta",
        title: "Arma tu escuela de fútbol en SportMaps",
        description:
          "Categorías, cobros, asistencia y pizarra táctica en un solo lugar. Empieza gratis con hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
      "pizarra-tactica-digital-para-entrenadores",
    ],
    about: [
      "escuelas de fútbol formativo",
      "software de gestión deportiva",
      "categorías por año de nacimiento",
      "cobro de mensualidades",
    ],
    mentions: ["Difútbol", "Wompi", "Mercado Pago", "WhatsApp", "Meta", "Nequi", "Bancolombia", "DIAN"],
    faqs: [
      {
        question: "¿Cuál es el mejor software para una escuela de fútbol en Colombia?",
        answer:
          "El que maneje categorías por año de nacimiento, cobre inscripción y mensualidad por separado con pasarelas colombianas (PSE, Nequi) y le dé al entrenador asistencia, evaluaciones y pizarra táctica. SportMaps cubre esas tres áreas y tiene un plan gratis hasta 20 alumnos para probarlo.",
      },
      {
        question: "¿Cómo se organizan las categorías en una escuela de fútbol?",
        answer:
          "Por año de nacimiento, no por edad cumplida. Cada torneo o liga publica en su convocatoria qué años entran en cada categoría, y eso cambia cada temporada. Por eso conviene un software que te deje mover a los atletas de categoría al empezar el año.",
      },
      {
        question: "¿Cuánto cuesta un software para escuela de fútbol?",
        answer:
          "En SportMaps va de $0 (Free Start, hasta 20 alumnos) a $349.000 al mes (Escuela Elite, hasta 800 alumnos), con descuento si pagas anual. Una escuela de 100 niños queda en Escuela Crecimiento: $99.000 al mes o $89.000 al mes pagando anual.",
      },
      {
        question: "¿Se puede cobrar la mensualidad de la escuela de fútbol por Nequi o PSE?",
        answer:
          "Sí. SportMaps integra Wompi y Mercado Pago, que aceptan PSE, Nequi, tarjetas y botón Bancolombia. La plata llega directo a la cuenta de la escuela y SportMaps no cobra comisión por la integración.",
      },
      {
        question: "¿Qué pasa si un papá se atrasa con la mensualidad?",
        answer:
          "El sistema le manda recordatorios automáticos por correo y WhatsApp, y la escuela decide si aplica un recargo por mora. El atleta no se da de baja automáticamente por estar atrasado; esa decisión la toma la escuela.",
      },
    ],
  },
  {
    slug: "software-clubes-de-voleibol",
    title: "Software para clubes de voleibol: categorías, rotaciones y cobros en un solo lugar",
    excerpt:
      "Qué necesita un club de voleibol en Colombia: ramas femenina y masculina, categorías por edad, estadísticas de saque y recepción, torneos y mensualidades. Guía práctica y cómo lo cubre SportMaps.",
    category: "Por deporte",
    readTime: "6 min",
    date: "2 Oct 2026",
    isoDate: "2026-10-02",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un club de voleibol necesita un software que maneje equipos por categoría y rama (femenina y masculina, a veces mixta), que permita llevar estadísticas propias del voleibol como saque, recepción y ataque, y que cobre mensualidades y torneos sin depender de una hoja de cálculo. El voleibol tiene particularidades que un sistema genérico no entiende: dos alturas de red, rotaciones, líbero y una temporada marcada por torneos interligas e intercolegiados.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Organiza tu club por categoría y rama, lleva estadísticas simples de saque y recepción con métricas propias y cobra mensualidad e inscripción a torneos por separado. SportMaps tiene evaluaciones configurables, asistencia por QR, planificación por mesociclos y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el voleibol en Colombia" },
      {
        type: "p",
        content:
          "El voleibol federado lo rige la Federación Colombiana de Voleibol, con ligas departamentales que afilian clubes. Las categorías van por edad (infantil, menores, juvenil, mayores, con nombres que cambian según el reglamento de cada campeonato) y casi siempre separadas por rama. A eso se suman los Juegos Intercolegiados, que son la vitrina principal para muchos clubes que trabajan con colegios, y el voleibol playa, que tiene su propio calendario.",
      },
      {
        type: "p",
        content:
          "Un detalle operativo que no existe en otros deportes: la altura de la red. En adultos es de 2,43 m para hombres y 2,24 m para mujeres, y en las categorías pequeñas se baja (minivoleibol). Si compartes coliseo con otros grupos, el horario no es solo una cancha: es una cancha con la red a cierta altura, y eso define qué categorías pueden entrenar seguidas.",
      },
      {
        type: "table",
        headers: ["Particularidad del voleibol", "Cómo se resuelve en el software"],
        rows: [
          ["Ramas femenina, masculina y mixta", "Equipos separados dentro de cada categoría"],
          ["Jugadoras que entrenan en dos categorías", "Un atleta puede pertenecer a más de un equipo"],
          ["Turnos de coliseo compartido", "Horario de cada grupo publicado en el calendario de las familias"],
          ["Torneos intercolegiados e interligas", "Calendario con avisos a las familias y cobro puntual de inscripción"],
          ["Estadísticas por fundamento", "Métricas propias en las evaluaciones (número de aciertos, escala o porcentaje)"],
        ],
      },
      { type: "h2", content: "Qué estadísticas sirven en un club formativo de voleibol" },
      {
        type: "p",
        content:
          "Los clubes de alto nivel usan software de estadística en vivo, punto a punto. Un club formativo no necesita eso: necesita unas pocas métricas que el entrenador pueda registrar en una sesión de control y comparar mes a mes. Una forma práctica es calificar la recepción con la escala clásica de 0 a 3 (0 = error, 3 = pase perfecto para el armador) y contar aciertos en series de saque.",
      },
      {
        type: "table",
        headers: ["Fundamento", "Cómo registrarlo", "Qué te dice"],
        rows: [
          ["Saque", "Saques dentro de 10 intentos", "Consistencia; el error de saque regala puntos"],
          ["Recepción", "Promedio en escala 0 a 3", "Si el equipo puede construir ataque"],
          ["Ataque", "Remates efectivos sobre intentos", "Eficacia de las atacantes"],
          ["Salto vertical", "Centímetros, con test de alcance", "Progreso físico por trimestre"],
          ["Asistencia", "Automática desde la toma de lista", "Compromiso y riesgo de deserción"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela define su propia lista de métricas con la escala que quiera (1 a 5, 1 a 10, sí/no o un número con unidad). Así puedes crear «Saques dentro de 10» como número y «Recepción» como escala, y el informe mensual que les llega a los papás muestra la evolución.",
      },
      { type: "h2", content: "Rotaciones y pizarra: lo que hay hoy" },
      {
        type: "p",
        content:
          "Explicar rotaciones en un tablero de borrador funciona hasta que tienes que repetirlo a tres categorías: la rotación en recepción, la penetración del armador, la cobertura del ataque. Siendo honestos, la pizarra táctica de SportMaps hoy es solo de fútbol; la versión con cancha de voleibol está en camino. Mientras tanto, lo que sí puedes guardar en la plataforma son las sesiones de entrenamiento de cada mesociclo, con los ejercicios de rotación que trabajas en cada bloque.",
      },
      { type: "h2", content: "Cómo cobrar en un club de voleibol" },
      {
        type: "ul",
        items: [
          "Mensualidad por jugadora, generada automáticamente cada período.",
          "Inscripción anual, cobrada una sola vez.",
          "Inscripción a torneos y viajes como cobro puntual, separado de la mensualidad.",
          "Uniformes de juego y de entrenamiento con el catálogo de artículos (se suma al cobro de la mensualidad) o con la tienda en línea, que es un adicional.",
        ],
      },
      {
        type: "p",
        content:
          "Los viajes a torneos son el gasto que más desordena a un club: se recoge plata por partes, en efectivo y por transferencia. Registrar cada abono como pago manual con su comprobante, o dejar que el asistente de WhatsApp lea la foto de la transferencia y la deje cruzada contra el cobro, lista para aprobar, evita la tarde entera de cuadrar cuentas antes de salir.",
      },
      { type: "h2", content: "Planificar la temporada de voleibol" },
      {
        type: "p",
        content:
          "Un club formativo de voleibol vive alrededor de pocos torneos fuertes al año: el intercolegiado, el torneo de liga y algún interclubes. Si el entrenamiento de marzo es igual al de septiembre, el equipo llega al torneo importante sin pico de forma. La planificación por mesociclos ayuda a ordenar el año en bloques con un objetivo cada uno:",
      },
      {
        type: "table",
        headers: ["Bloque", "Foco del entrenamiento", "Qué medir al cerrar el bloque"],
        rows: [
          ["Base", "Fundamentos: toque de dedos, antebrazo, saque bajo o tenis", "Saques dentro de 10, recepción en escala 0 a 3"],
          ["Construcción", "Sistema de juego (por ejemplo 4-2 o 6-2 según la edad), rotaciones", "Errores de rotación por set de control"],
          ["Precompetencia", "Juego real, situaciones de presión, saque táctico", "Eficacia de ataque y de saque"],
          ["Competencia", "Ajustes por rival, descanso y recuperación", "Asistencia y estado físico antes de viajar"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps el entrenador arma los mesociclos y las sesiones de cada bloque, y los papás ven en el calendario las fechas de torneos y entrenamientos extra. Esa visibilidad reduce la pregunta de siempre en el grupo: «¿mañana hay entreno?».",
      },
      { type: "h2", content: "Errores comunes al administrar un club de voleibol" },
      {
        type: "ul",
        items: [
          "Mezclar el cobro del viaje con la mensualidad: al final nadie sabe quién debe qué.",
          "Medir solo en partidos: con dos o tres partidos al mes, los datos llegan tarde. Una sesión de control mensual da más información.",
          "No separar a las jugadoras que entrenan en dos categorías: terminan contadas dos veces o cobradas dos veces.",
          "Depender de una sola persona para saber qué horario de coliseo tiene cada grupo.",
        ],
      },
      { type: "h2", content: "Paso a paso para montar tu club" },
      {
        type: "ol",
        items: [
          "Crea las categorías y, dentro de cada una, un equipo por rama.",
          "Define la mensualidad y la inscripción anual.",
          "Carga las métricas que vas a evaluar (saque, recepción, ataque, salto).",
          "Comparte el enlace de inscripción; cada familia llena la ficha de la jugadora.",
          "Publica el horario de cada grupo en el calendario para que las familias sepan cuándo y dónde entrena su hija.",
          "Arma el primer mesociclo con las sesiones de fundamentos de cada categoría.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si tu club tiene una sola categoría de 15 jugadoras y entrena en el coliseo del colegio, el plan Free Start ($0, hasta 20 alumnos) te alcanza. Con 60 jugadoras pasas a Escuela Crecimiento ($99.000 al mes, hasta 120 alumnos).",
      },
      { type: "h2", content: "Checklist: qué pedirle a un software para voleibol" },
      {
        type: "ul",
        items: [
          "Que un mismo atleta pueda estar en dos equipos (su categoría y la de arriba) sin duplicar la ficha.",
          "Que las métricas sean tuyas: no todos los clubes miden la recepción igual, y el software no debería imponerte un formato.",
          "Que la planificación de sesiones y mesociclos sirva para cualquier deporte, no solo para fútbol.",
          "Que los cobros puntuales (viajes, torneos) vayan separados de la mensualidad.",
          "Que las familias puedan pagar por PSE y Nequi y que la plata llegue a la cuenta del club, no a la de un intermediario.",
          "Que el plan gratis o de entrada permita probar con una categoría completa antes de migrar todo el club.",
        ],
      },
      {
        type: "p",
        content:
          "SportMaps cumple esos seis puntos. Si estás comparando opciones, calcula el costo real del año: el plan del software, las tarifas de la pasarela por cada pago y el tiempo que hoy se te va cuadrando transferencias a mano. Ese último suele ser el más caro y el que nadie anota.",
      },
      {
        type: "cta",
        title: "Lleva tu club de voleibol a SportMaps",
        description:
          "Categorías por rama, métricas propias, planificación de temporada y cobros con WhatsApp IA incluido.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "metricas-clave-academias",
      "planificacion-entrenamiento-mesociclos-escuela",
      "gestion-torneos-mejores-practicas",
    ],
    about: [
      "clubes de voleibol",
      "estadísticas de voleibol",
      "software de gestión deportiva",
      "categorías deportivas por edad",
    ],
    mentions: ["Federación Colombiana de Voleibol", "Juegos Intercolegiados", "WhatsApp", "Wompi", "Mercado Pago"],
    faqs: [
      {
        question: "¿Qué software sirve para administrar un club de voleibol?",
        answer:
          "Uno que maneje equipos por categoría y rama, cobre mensualidades y torneos por separado y permita registrar estadísticas propias del voleibol. SportMaps lo hace e incluye planificación por mesociclos y evaluaciones con tus propias métricas.",
      },
      {
        question: "¿Cómo llevar estadísticas de voleibol en categorías infantiles?",
        answer:
          "Con pocas métricas fáciles de registrar: saques dentro de 10 intentos, recepción en escala de 0 a 3 y remates efectivos. Lo importante es medirlas igual cada mes para comparar el progreso.",
      },
      {
        question: "¿A qué altura va la red de voleibol?",
        answer:
          "En adultos, 2,43 m para hombres y 2,24 m para mujeres. En categorías pequeñas y minivoleibol se usa una red más baja según el reglamento del torneo.",
      },
      {
        question: "¿Cómo cobrar los viajes a torneos de un club de voleibol?",
        answer:
          "Como un cobro aparte de la mensualidad, registrando cada abono con su comprobante. En SportMaps los pagos manuales quedan con soporte y el asistente de WhatsApp puede leer las transferencias que mandan las familias.",
      },
    ],
  },
  {
    slug: "software-academias-de-natacion",
    title: "Software para academias de natación: cupos por carril, niveles y paquetes de clases",
    excerpt:
      "Una academia de natación no se administra como una escuela de fútbol: cupos por carril, niveles de aprendizaje, reposición de clases y paquetes. Qué debe resolver el software y cómo lo hace SportMaps.",
    category: "Por deporte",
    readTime: "6 min",
    date: "26 Sep 2026",
    isoDate: "2026-09-26",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Una academia de natación necesita un software que controle cuántos alumnos caben en cada carril y horario, que agrupe por nivel de aprendizaje y no solo por edad, que cobre tanto mensualidades como paquetes de clases y que registre asistencia para saber qué clases se consumieron. El cuello de botella de una academia de natación no es la cantidad de inscritos: es el agua disponible. Una piscina tiene un número fijo de carriles y cada carril aguanta un número limitado de nadadores por nivel.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Organiza por nivel y horario, limita los cupos por clase, vende mensualidad o bolsas de clases que se descuentan con la asistencia y lleva los tiempos de cada nadador como métrica. SportMaps cubre cupos, planes por sesiones, asistencia por QR, evaluaciones con tiempos y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Lo que hace distinta a una academia de natación" },
      {
        type: "p",
        content:
          "En natación conviven dos mundos en la misma piscina: la enseñanza (bebés, niños que aprenden a flotar, adultos que nunca aprendieron) y la natación de carreras, que compite en torneos de liga y en campeonatos de la Federación Colombiana de Natación (Fecna). Para carreras, Fecna agrupa a los nadadores por la edad que cumplen al 31 de diciembre del año de la competencia; para enseñanza, lo que manda es el nivel, no la edad. Un niño de 9 años que no flota no puede ir en el carril de uno de 7 que ya nada crol.",
      },
      {
        type: "table",
        headers: ["Particularidad", "Por qué importa", "Qué necesitas en el software"],
        rows: [
          ["Cupos por carril", "Más nadadores por carril baja la calidad y sube el riesgo", "Capacidad máxima por clase u horario"],
          ["Niveles de aprendizaje", "La edad no dice qué sabe hacer el alumno", "Grupos por nivel y cambio de nivel con historial"],
          ["Piscina alquilada por horas", "Pagas el carril aunque nadie venga", "Ver la ocupación real de cada horario"],
          ["Clases perdidas por enfermedad", "Los papás piden reponer", "Planes por número de sesiones que se descuentan solo cuando el alumno asiste"],
          ["Natación de carreras", "Tiempos por prueba y estilo", "Métricas numéricas en segundos por nadador"],
        ],
      },
      { type: "h2", content: "Niveles de aprendizaje: cómo estructurarlos" },
      {
        type: "p",
        content:
          "No existe un estándar nacional obligatorio de niveles para escuelas de natación; cada academia define el suyo. Lo importante es que cada nivel tenga un criterio de salida observable, para que el instructor sepa cuándo promover al alumno y el papá entienda por qué su hijo sigue donde está. Un ejemplo de estructura que muchas academias usan, con sus propios nombres:",
      },
      {
        type: "ol",
        items: [
          "Adaptación al medio acuático: entrar sin miedo, sumergir la cara, soplar burbujas.",
          "Flotación y desplazamiento: flotar de frente y de espalda sin ayuda, patada con tabla.",
          "Crol y espalda básicos: recorrer el ancho o el largo de la piscina con respiración.",
          "Técnica de los cuatro estilos: introducir pecho y mariposa, virajes y salidas.",
          "Prequipo o perfeccionamiento: series con reloj, preparación para competir.",
          "Equipo de competencia: entrenamiento por volumen y participación en torneos.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada nivel puede ser un equipo o una categoría con su horario y su instructor, y el alumno se mueve de grupo cuando aprueba el criterio de salida. Las evaluaciones admiten «sí/no» para criterios como «flota de espalda sin ayuda» y números con unidad para tiempos.",
      },
      { type: "h2", content: "Cómo cobrar: mensualidad, paquetes o por clase" },
      {
        type: "table",
        headers: ["Modelo", "Cuándo conviene", "El riesgo"],
        rows: [
          ["Mensualidad fija", "Equipos de competencia y grupos con horario estable", "El papá siente que paga clases que no usó"],
          ["Paquete de clases (ej. 8 o 12 sesiones)", "Enseñanza de niños y adultos con horarios variables", "Hay que controlar el saldo de clases de cada alumno"],
          ["Clase suelta", "Adultos ocasionales o clase de prueba", "Ingreso impredecible"],
        ],
      },
      {
        type: "p",
        content:
          "SportMaps maneja planes por número de sesiones: cada asistencia o reserva confirmada descuenta una clase del saldo, cancelar una reserva la devuelve y el instructor ve el saldo del alumno al tomar lista. Que el alumno no tenga saldo nunca impide registrar que vino; el sistema lo muestra para que la escuela decida. Así la reposición de una clase perdida deja de ser una negociación en la recepción.",
      },
      {
        type: "p",
        content:
          "Los pagos entran por Wompi o Mercado Pago (PSE, Nequi, tarjeta) directo a la cuenta de la academia, sin comisión de SportMaps por la integración. Si la familia transfiere y manda la foto del comprobante por WhatsApp, el asistente de IA lo lee, lo cruza contra el cobro y lo deja listo para que la escuela lo apruebe con un toque; es gratis en todos los planes.",
      },
      { type: "h2", content: "Métricas que le sirven al entrenador de natación" },
      {
        type: "ul",
        items: [
          "Tiempo por prueba y estilo (50 m libre, 100 m espalda…), en segundos, registrado en controles periódicos.",
          "Frecuencia de brazada o brazadas por largo, para trabajar eficiencia.",
          "Criterios técnicos de nivel (sí/no): viraje de crol, salida desde el bloque, respiración bilateral.",
          "Asistencia, que en natación es el mejor predictor de progreso.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Ojo con la piscina: anota siempre si el tiempo se tomó en piscina de 25 m (semiolímpica) o de 50 m (olímpica). Los tiempos no son comparables entre las dos, y mezclarlos hace ver retrocesos que no existen.",
      },
      { type: "h2", content: "Asistencia y acceso a la piscina" },
      {
        type: "p",
        content:
          "En natación la asistencia también es seguridad: el instructor necesita saber cuántos niños entraron al agua. La asistencia por QR (el alumno muestra su carnet digital y el instructor lo escanea) toma segundos. Si la academia controla el ingreso al complejo, SportMaps tiene como adicional el control de acceso con torniquetes y lectores biométricos ZKTeco.",
      },
      { type: "h2", content: "Bebés, niños, adultos y equipo: cuatro negocios en la misma piscina" },
      {
        type: "p",
        content:
          "Cada público tiene un patrón distinto de horario, pago y comunicación. Tratarlos igual es la razón por la que muchas academias sienten que la piscina está llena y la caja no cuadra.",
      },
      {
        type: "table",
        headers: ["Público", "Horario típico", "Quién recibe los avisos", "Cobro que mejor funciona"],
        rows: [
          ["Bebés con acudiente en el agua", "Mañanas entre semana y sábado", "El acudiente", "Paquete de sesiones"],
          ["Niños en aprendizaje", "Tarde después del colegio", "Los papás", "Mensualidad o paquete"],
          ["Adultos", "Madrugada y noche", "El mismo alumno", "Paquete de sesiones con vigencia"],
          ["Equipo de competencia", "Doble jornada en algunas etapas", "Papás y deportista", "Mensualidad + torneos aparte"],
        ],
      },
      { type: "h2", content: "Errores frecuentes en academias de natación" },
      {
        type: "ul",
        items: [
          "Vender más cupos de los que caben en el carril porque «casi nunca vienen todos»: el día que vienen todos, la clase no funciona.",
          "Promover de nivel por edad o por presión del papá, sin criterio de salida.",
          "Paquetes sin fecha de vencimiento: se acumulan clases que la academia ya no puede atender.",
          "Comparar tiempos de piscinas distintas.",
          "No saber cuántos niños hay en el agua en un momento dado.",
        ],
      },
      { type: "h2", content: "Paso a paso para montar tu academia" },
      {
        type: "ol",
        items: [
          "Crea una sede por piscina y define tus niveles como grupos con horario e instructor.",
          "Fija el cupo máximo de cada horario según los carriles que tienes.",
          "Crea los planes: mensualidad para equipos y paquetes de sesiones para enseñanza.",
          "Comparte el enlace de inscripción; la ficha guarda acudiente y datos médicos.",
          "Entrega carnets digitales con QR y toma asistencia desde el celular.",
          "Registra tiempos y criterios de nivel; el informe mensual le llega a cada familia.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: una academia con 90 alumnos entre enseñanza y equipo queda en Escuela Crecimiento ($99.000 al mes o $89.000 al mes pagando anual), con instructores ilimitados.",
      },
      {
        type: "p",
        content:
          "Una última recomendación: antes de migrar toda la academia, carga un solo horario completo (por ejemplo, la franja de 4:00 p. m. de los martes y jueves) con sus niveles, cupos y alumnos. En una o dos semanas vas a ver si los cupos y los paquetes quedaron bien configurados, y el resto de horarios se monta copiando esa estructura.",
      },
      {
        type: "cta",
        title: "Organiza tu academia de natación",
        description:
          "Cupos por horario, paquetes de clases, carnets con QR y tiempos por nadador. Empieza gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "control-de-asistencia-con-qr-y-torniquetes",
      "carnet-digital-deportista",
      "como-cobrar-mensualidades-escuela-deportiva",
    ],
    about: [
      "academias de natación",
      "clases de natación por niveles",
      "paquetes de clases",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Natación", "Fecna", "ZKTeco", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cómo organizar los grupos en una academia de natación?",
        answer:
          "Por nivel de aprendizaje y horario, no solo por edad. Cada nivel debe tener un criterio de salida observable (por ejemplo, flotar de espalda sin ayuda) y un cupo máximo según los carriles disponibles.",
      },
      {
        question: "¿Es mejor cobrar mensualidad o paquete de clases en natación?",
        answer:
          "La mensualidad funciona para equipos de competencia con horario fijo; los paquetes de clases funcionan mejor para enseñanza, porque el alumno solo consume las clases a las que asiste. Muchas academias usan los dos modelos a la vez.",
      },
      {
        question: "¿Cómo manejar la reposición de clases de natación?",
        answer:
          "Con planes por número de sesiones que se descuentan solo cuando el alumno asiste o confirma una reserva. En SportMaps cancelar una reserva devuelve la clase al saldo, así no hay que negociar cada reposición.",
      },
      {
        question: "¿Cómo se definen las categorías en natación de carreras en Colombia?",
        answer:
          "Fecna clasifica a los nadadores por la edad que cumplen al 31 de diciembre del año de la competencia, agrupados por año de nacimiento. Los rangos exactos los publica cada convocatoria e instructivo de la federación.",
      },
      {
        question: "¿Qué software sirve para una escuela de natación en Colombia?",
        answer:
          "Uno que controle cupos por horario, maneje niveles y paquetes de clases y registre asistencia y tiempos. SportMaps lo hace, acepta pagos por PSE y Nequi y tiene un plan gratis hasta 20 alumnos.",
      },
    ],
  },
  {
    slug: "software-escuelas-de-baloncesto",
    title: "Software para escuelas de baloncesto: del minibaloncesto al equipo juvenil",
    excerpt:
      "Minibaloncesto, categorías por edad, estadísticas de juego, planificación y mensualidades. Lo que necesita una escuela de baloncesto en Colombia y cómo lo resuelve SportMaps.",
    category: "Por deporte",
    readTime: "6 min",
    date: "19 Sep 2026",
    isoDate: "2026-09-19",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela de baloncesto necesita un software que separe el minibaloncesto de las categorías mayores, que le permita al entrenador dibujar sistemas en una cancha de baloncesto y llevar estadísticas básicas de juego, y que cobre mensualidades y torneos sin perseguir a los papás. El baloncesto tiene algo que otros deportes no: la cancha y el balón cambian con la edad, y la estadística individual (puntos, rebotes, asistencias, pérdidas) es parte de la cultura del deporte desde pequeños.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa minibaloncesto y categorías mayores, mide pocas cosas pero siempre igual (tiro, rebote, pérdidas, asistencia a entrenar) y cobra por período con recordatorios automáticos. SportMaps trae evaluaciones configurables, registro de partidos, planificación por mesociclos y WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el baloncesto formativo" },
      {
        type: "p",
        content:
          "El baloncesto federado en Colombia depende de la Federación Colombiana de Baloncesto y de sus ligas departamentales, que organizan los torneos por categorías de edad. En la base está el minibaloncesto, con reglas adaptadas de FIBA: aro a 2,60 m en vez de 3,05 m y balón talla 5. De ahí en adelante, las categorías juveniles usan aro reglamentario, balón talla 6 para la rama femenina y talla 7 para la masculina. A eso se suma el 3x3, que muchas escuelas usan como formato de competencia interna porque necesita media cancha y pocos jugadores.",
      },
      {
        type: "table",
        headers: ["Etapa", "Aro", "Balón", "Qué priorizar"],
        rows: [
          ["Minibaloncesto", "2,60 m", "Talla 5", "Coordinación, bote con ambas manos, juego reducido"],
          ["Categorías juveniles femeninas", "3,05 m", "Talla 6", "Fundamentos, defensa individual, lectura de juego"],
          ["Categorías juveniles masculinas", "3,05 m", "Talla 7", "Fundamentos, sistemas simples, preparación física"],
          ["3x3", "3,05 m", "Balón oficial de 3x3", "Toma de decisiones rápida, juego en espacio reducido"],
        ],
      },
      {
        type: "p",
        content:
          "Esto tiene un efecto práctico en la operación: si compartes coliseo, los grupos de minibaloncesto necesitan aros regulables o tableros aparte, y eso define en qué horarios pueden entrenar. Deja el horario y la cancha de cada grupo en el calendario, así las familias y los entrenadores saben dónde les toca.",
      },
      { type: "h2", content: "Estadísticas que sirven en una escuela" },
      {
        type: "p",
        content:
          "Un box score completo en cada partido de sub-12 es más trabajo que información. Lo útil es una lista corta, siempre medida igual, que permita ver el progreso:",
      },
      {
        type: "table",
        headers: ["Métrica", "Cómo registrarla", "Qué te dice"],
        rows: [
          ["Tiros libres", "Encestados sobre 10 intentos en entrenamiento", "Mecánica de tiro, sin defensa que la distorsione"],
          ["Tiro de media distancia", "Encestados sobre 10 desde puntos fijos", "Progreso técnico mes a mes"],
          ["Rebotes y pérdidas por partido", "Conteo en el registro de partidos", "Esfuerzo y cuidado del balón"],
          ["Manejo con mano débil", "Escala de 1 a 5", "El fundamento que más se descuida en formativas"],
          ["Asistencia a entrenar", "Automática", "Compromiso y riesgo de retiro"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps las métricas las define la escuela: escala de 1 a 5 o 1 a 10, sí/no o número con unidad. Las evaluaciones alimentan el informe mensual que reciben los papás por correo, y el registro de partidos guarda quién jugó en cada fecha.",
      },
      { type: "h2", content: "¿Y la pizarra táctica de baloncesto?" },
      {
        type: "p",
        content:
          "El baloncesto se enseña con sistemas: un pick and roll, una salida de presión, una zona 2-3. Hoy la pizarra táctica de SportMaps es solo de fútbol; la versión multideporte, con cancha de baloncesto, está en camino y no te la vamos a vender como si ya existiera. Si la pizarra es lo que más necesitas, tenlo en cuenta al decidir. Lo que sí tienes hoy es la planificación de sesiones y mesociclos, donde cada sesión queda escrita con sus ejercicios.",
      },
      { type: "h2", content: "Cómo cobrar en una escuela de baloncesto" },
      {
        type: "ul",
        items: [
          "Inscripción una vez al año y mensualidad por período, como cobros separados.",
          "Torneos de liga y festivales como cobros puntuales.",
          "Uniforme reversible y de juego con el catálogo de artículos o con la tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite), que acepta compra sin cuenta.",
          "Recargo por mora opcional; el atraso no da de baja al jugador automáticamente.",
        ],
      },
      {
        type: "p",
        content:
          "Las familias pagan por PSE, Nequi o tarjeta con Wompi o Mercado Pago, directo a la cuenta de la escuela, y reciben recordatorios automáticos por correo y WhatsApp. Si pagan por transferencia, el asistente de WhatsApp lee el comprobante, lo cruza contra el cobro y lo deja listo para que la escuela lo apruebe con un toque; es gratis en todos los planes.",
      },
      { type: "h2", content: "Minutos de juego y retención en categorías formativas" },
      {
        type: "p",
        content:
          "En baloncesto juegan cinco y el banco puede tener siete u ocho. El niño que pasa tres partidos seguidos sin entrar es el que la familia retira a fin de mes, aunque el entrenamiento sea bueno. Muchos torneos de minibaloncesto tienen reglas que obligan a rotar a todos los jugadores; en categorías juveniles esa regla desaparece y la decisión queda en el entrenador.",
      },
      {
        type: "ul",
        items: [
          "Registra en cada partido quién jugó. Al cerrar el mes, revisa quién no ha entrado y por qué.",
          "Explica a las familias desde la inscripción el criterio de minutos (asistencia, actitud, nivel), por escrito.",
          "Organiza partidos internos 3x3 en el entrenamiento: todos juegan y tocan balón.",
          "Usa el informe mensual para mostrar el progreso técnico del niño que juega menos: el papá ve que su hijo avanza aunque no sea titular.",
        ],
      },
      { type: "h2", content: "Planificación de la temporada" },
      {
        type: "p",
        content:
          "La planificación por mesociclos y sesiones de SportMaps sirve para repartir el año: fundamentos individuales al inicio, conceptos colectivos (bloqueo directo, ayudas defensivas) en la mitad y preparación específica antes del torneo de liga. Cada sesión queda guardada, así un entrenador nuevo puede tomar el grupo sin empezar de cero.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea minibaloncesto y las categorías juveniles, con un equipo por rama.",
          "Asigna a cada grupo su horario y su cancha, y publícalos en el calendario.",
          "Configura inscripción y mensualidad.",
          "Carga tus métricas de tiro, manejo y juego.",
          "Comparte el enlace o QR de inscripción con las familias.",
          "Escribe en la planificación las sesiones de las primeras cuatro semanas.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no lo necesitas: si das clases a un solo grupo de 12 niños en el colegio y el colegio cobra por ti, el software te sobra para cobrar. Puede servirte solo para asistencia y evaluaciones, y para eso alcanza el plan Free Start ($0, hasta 20 alumnos).",
      },
      { type: "h2", content: "Checklist: qué pedirle a un software para baloncesto" },
      {
        type: "ul",
        items: [
          "Planificación de sesiones y mesociclos que no esté pensada solo para fútbol.",
          "Registro de partidos con la lista de quién jugó, para revisar el reparto de minutos.",
          "Métricas configurables: tiros sobre intentos como número, manejo como escala.",
          "Calendario por grupo, con avisos a las familias cuando cambia un horario.",
          "Grupos separados por rama y categoría, con un atleta en más de un equipo si sube a jugar con los grandes.",
          "Cobros por período con recordatorios automáticos y pagos por PSE y Nequi.",
          "Entrenadores y asistentes sin costo por usuario, porque en baloncesto es común tener un asistente por categoría.",
        ],
      },
      {
        type: "p",
        content:
          "Si vienes de llevar todo en Excel, empieza por los equipos y la asistencia; los cobros y las métricas los conectas en la segunda semana, cuando el equipo de entrenadores ya está usando la plataforma a diario.",
      },
      {
        type: "p",
        content:
          "Un consejo para la primera temporada: no intentes medir todo desde el primer mes. Escoge tres métricas por categoría, mídelas igual durante un trimestre y solo entonces agrega más. Un sistema simple que se usa vale más que uno completo que nadie llena. Y si tu escuela también tiene grupos de otros deportes en el mismo coliseo, todos quedan en la misma cuenta de la escuela.",
      },
      {
        type: "cta",
        title: "Monta tu escuela de baloncesto en SportMaps",
        description:
          "Métricas propias, registro de partidos, planificación y cobros con WhatsApp IA incluido.",
        href: "/entrenadores",
        label: "Ver herramientas para entrenadores",
      },
    ],
    related: [
      "metricas-clave-academias",
      "planificacion-entrenamiento-mesociclos-escuela",
      "control-de-asistencia-con-qr-y-torniquetes",
    ],
    about: [
      "escuelas de baloncesto",
      "minibaloncesto",
      "estadísticas de baloncesto",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Baloncesto", "FIBA", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿A qué altura va el aro en minibaloncesto?",
        answer:
          "A 2,60 m, frente a los 3,05 m del aro reglamentario, y se juega con balón talla 5. Así los niños pueden tirar con buena mecánica en vez de lanzar con todo el cuerpo.",
      },
      {
        question: "¿Qué estadísticas llevar en una escuela de baloncesto infantil?",
        answer:
          "Pocas y siempre medidas igual: tiros libres encestados sobre 10, tiro de media distancia, rebotes y pérdidas por partido y manejo con la mano débil. Más que el número absoluto, importa ver la evolución mes a mes.",
      },
      {
        question: "¿SportMaps tiene pizarra táctica de baloncesto?",
        answer:
          "Todavía no. Hoy la pizarra táctica de SportMaps es solo de fútbol y la versión multideporte está en camino. Para baloncesto ya puedes usar la planificación de sesiones, las evaluaciones, el registro de partidos y los cobros.",
      },
      {
        question: "¿Cuánto cuesta un software para escuela de baloncesto?",
        answer:
          "En SportMaps hay plan gratis hasta 20 alumnos; luego Escuela Start a $69.000 al mes (50 alumnos) y Escuela Crecimiento a $99.000 al mes (120 alumnos), con descuento pagando anual. Todos incluyen WhatsApp IA y entrenadores ilimitados.",
      },
    ],
  },
  {
    slug: "software-clubes-de-patinaje",
    title: "Software para clubes de patinaje: niveles, categorías, pruebas y cobros",
    excerpt:
      "Del niño que aprende a frenar al patinador que compite en carreras: cómo organizar niveles, categorías y tiempos por prueba en un club de patinaje en Colombia, y qué debe hacer el software.",
    category: "Por deporte",
    readTime: "6 min",
    date: "15 Sep 2026",
    isoDate: "2026-09-15",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Un club de patinaje necesita un software que maneje dos ejes a la vez: el nivel técnico del patinador (iniciación, intermedio, competencia) y la categoría por edad en la que compite, además de registrar tiempos por prueba y cobrar mensualidades, festivales y uniformes. En Colombia el patinaje de carreras es un deporte con mucha base infantil y un calendario lleno de festivales y paradas, así que el club que no tiene ordenados sus datos pierde horas en cada inscripción a una competencia.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa niveles de enseñanza de categorías de competencia, registra tiempos por prueba siempre en la misma pista y cobra festivales aparte de la mensualidad. SportMaps maneja grupos por nivel, multi-categoría, métricas numéricas en segundos, carnets con QR y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el patinaje en Colombia" },
      {
        type: "p",
        content:
          "El patinaje lo rige la Federación Colombiana de Patinaje (Fedepatín), que agrupa varias modalidades con reglamentos propios: carreras (la más practicada), artístico y hockey, entre otras. Cada modalidad tiene sus categorías y no se mezclan: en artístico, por ejemplo, Fedepatín maneja niveles y categorías técnicas distintas a las de carreras, y en hockey hay categorías de iniciación y novatos para escuelas.",
      },
      {
        type: "p",
        content:
          "En carreras, las categorías van por edad con nombres como mini, infantil, transición, prejuvenil, juvenil y mayores, y en muchos eventos existen categorías de novatos separadas de los deportistas federados. Los rangos exactos de edad cambian según el reglamento y la convocatoria de cada festival o parada, así que no los copies de un año a otro: revisa siempre la resolución vigente de la liga o de Fedepatín.",
      },
      {
        type: "table",
        headers: ["Eje", "Qué define", "Ejemplo"],
        rows: [
          ["Nivel de enseñanza", "Qué sabe hacer el patinador", "Iniciación: equilibrio y frenado; intermedio: cruces y curvas; competencia: técnica de carrera"],
          ["Categoría de competencia", "Contra quién compite", "Mini, infantil, prejuvenil… según el reglamento vigente"],
          ["Condición", "En qué eventos puede participar", "Novato o federado"],
          ["Modalidad", "Qué reglamento aplica", "Carreras, artístico o hockey"],
        ],
      },
      {
        type: "p",
        content:
          "Un mismo niño puede estar en nivel intermedio, categoría infantil y condición novato. Si el software solo permite un grupo por atleta, terminas duplicando registros. SportMaps permite que un atleta pertenezca a más de una categoría o equipo, y cada grupo tiene su horario y su entrenador.",
      },
      { type: "h2", content: "Pruebas y métricas que sirven al entrenador" },
      {
        type: "p",
        content:
          "El patinaje de carreras se mide en segundos, lo que lo hace ideal para seguimiento objetivo. Las pruebas cambian según pista o ruta: contrarreloj y velocidad en distancias cortas, pruebas de fondo por puntos o eliminación, y maratón. Para una escuela, lo útil es elegir unas pocas pruebas de control y repetirlas en las mismas condiciones.",
      },
      {
        type: "table",
        headers: ["Métrica", "Cómo registrarla", "Qué te dice"],
        rows: [
          ["Contrarreloj en distancia corta", "Segundos, en la misma pista", "Velocidad y técnica de salida"],
          ["Vueltas a ritmo controlado", "Tiempo por vuelta", "Resistencia y regularidad"],
          ["Técnica de curva (cruces)", "Escala de 1 a 5", "El salto entre nivel intermedio y competencia"],
          ["Frenado y control", "Sí/no por técnica (en T, en cuña…)", "Seguridad: requisito para pasar de iniciación"],
          ["Asistencia", "Automática", "Constancia, clave antes de un festival"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Anota siempre en qué pista o ruta se tomó el tiempo y en qué condiciones (piso mojado, viento). Un tiempo en pista peraltada no se compara con uno en ruta, y el papá va a ver un retroceso que no existe.",
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela define sus métricas (número con unidad, escala o sí/no) y el informe mensual le muestra a la familia cómo evolucionan los tiempos. Para un deporte donde el progreso se mide en décimas, ese informe vale más que cualquier mensaje en el grupo.",
      },
      { type: "h2", content: "Cómo cobrar en un club de patinaje" },
      {
        type: "ul",
        items: [
          "Mensualidad por patinador, con cobro automático por período.",
          "Inscripción anual, cobrada una sola vez.",
          "Festivales y paradas: cobro puntual por evento, porque no todos los patinadores van a todos.",
          "Uniforme, licras y protecciones con el catálogo de artículos, que se suma al cobro de la mensualidad, o con la tienda en línea si la activas como adicional.",
          "Licencia o carné de la liga, si el club la tramita por los deportistas.",
        ],
      },
      {
        type: "p",
        content:
          "Los pagos llegan por Wompi o Mercado Pago (PSE, Nequi, tarjeta) directo a la cuenta del club, sin comisión de SportMaps por la integración. Cuando una familia transfiere y manda la foto por WhatsApp, el asistente de IA lee el comprobante, lo cruza contra el cobro y lo deja listo para que la escuela lo apruebe con un toque; es gratis en todos los planes.",
      },
      { type: "h2", content: "Seguridad y equipo: lo que debe estar en la ficha" },
      {
        type: "p",
        content:
          "El patinaje tiene caídas por naturaleza, y en ruta se entrena muchas veces en vías o parques compartidos. Por eso la ficha de cada patinador no puede ser solo nombre y teléfono:",
      },
      {
        type: "ul",
        items: [
          "Acudiente con teléfono de contacto y datos médicos relevantes (alergias, condiciones previas).",
          "Talla de patín y de protecciones, para saber cuándo un niño ya necesita cambiar de bota.",
          "Uso obligatorio de casco y protecciones como requisito para entrar a la sesión, comunicado por escrito.",
          "Autorización de los papás para entrenamientos fuera de la pista habitual.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps la ficha del atleta guarda acudientes vinculados y datos médicos, y los avisos de cambio de sede (por ejemplo, el entrenamiento se pasa a la ruta del parque) llegan a las familias por la app con notificación al celular.",
      },
      { type: "h2", content: "Planificar hacia las competencias" },
      {
        type: "p",
        content:
          "Un calendario con varias paradas y festivales al año invita a competir siempre y entrenar poco. Con la planificación por mesociclos el entrenador decide qué competencias son de preparación y cuáles son el objetivo, y orienta los bloques: técnica y base aeróbica al inicio, velocidad y salidas cerca del objetivo, descarga antes de competir.",
      },
      { type: "h2", content: "Antes de cada festival: la lista que te ahorra la tarde" },
      {
        type: "ol",
        items: [
          "Filtra los patinadores por categoría y condición (novato o federado) según la convocatoria.",
          "Revisa quién está al día con el cobro del festival.",
          "Verifica que la ficha tenga documento, fecha de nacimiento y datos del acudiente.",
          "Publica el evento en el calendario: las familias reciben el aviso en la app y por notificación al celular.",
          "Entrega el carnet digital con QR para el control de asistencia del día.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: un club de 45 patinadores entre iniciación y competencia queda en Escuela Start ($69.000 al mes o $59.000 al mes pagando anual). Con hasta 20 patinadores, el plan Free Start es gratis.",
      },
      { type: "h2", content: "Checklist: qué pedirle a un software para patinaje" },
      {
        type: "ul",
        items: [
          "Que un patinador pueda tener nivel de enseñanza y categoría de competencia a la vez.",
          "Métricas numéricas en segundos, con fecha, para comparar tiempos de control.",
          "Cobros puntuales por festival, separados de la mensualidad.",
          "Ficha con acudiente y datos médicos, porque en patinaje las caídas son parte del deporte.",
          "Avisos con notificación al celular para cambios de sede o de horario.",
          "Catálogo de artículos o tienda (adicional) para uniformes y protecciones.",
        ],
      },
      {
        type: "p",
        content:
          "Si tu club combina carreras y artístico, trata cada modalidad como una sección con sus propios grupos, entrenadores y métricas: en artístico se evalúan elementos y presentación, no tiempos, y mezclar las dos listas de métricas confunde a todos.",
      },
      {
        type: "p",
        content:
          "Y una advertencia honesta: ningún software te va a decir en qué categoría compite cada niño en el próximo festival. Eso lo define la convocatoria vigente. Lo que sí hace es dejarte filtrar en un minuto a los patinadores por año de nacimiento y condición para cruzarlos contra esa convocatoria.",
      },
      {
        type: "cta",
        title: "Ordena tu club de patinaje",
        description:
          "Niveles, categorías, tiempos por prueba y cobros de festivales en un solo lugar.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "carnet-digital-deportista",
      "metricas-clave-academias",
      "inscripcion-vs-mensualidad-escuela-deportiva",
    ],
    about: [
      "clubes de patinaje",
      "patinaje de carreras",
      "categorías de patinaje",
      "software de gestión deportiva",
    ],
    mentions: ["Fedepatín", "Federación Colombiana de Patinaje", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuáles son las categorías del patinaje de carreras en Colombia?",
        answer:
          "Van por edad, con nombres como mini, infantil, transición, prejuvenil, juvenil y mayores, y en muchos eventos se separan novatos de federados. Los rangos exactos los fija cada reglamento y convocatoria, así que hay que revisar la resolución vigente de la liga o de Fedepatín.",
      },
      {
        question: "¿Cómo organizar los niveles en una escuela de patinaje?",
        answer:
          "Con criterios técnicos observables: iniciación termina cuando el niño se equilibra y frena con seguridad; intermedio, cuando domina cruces y curvas; competencia, cuando tiene técnica de carrera. El nivel es independiente de la categoría por edad.",
      },
      {
        question: "¿Cómo cobrar los festivales de patinaje a los papás?",
        answer:
          "Como un cobro puntual por evento, separado de la mensualidad, porque no todos los patinadores participan en todos. Así sabes antes de inscribir quién está al día.",
      },
      {
        question: "¿Qué métricas debe llevar un entrenador de patinaje?",
        answer:
          "Tiempos en pruebas de control repetidas en la misma pista, tiempo por vuelta a ritmo controlado, técnica de curva y frenado, y asistencia. Siempre anotando en qué pista y condiciones se midió.",
      },
    ],
  },
  {
    slug: "software-academias-de-tenis-y-padel",
    title: "Software para academias de tenis y pádel: reservas de cancha, clases y paquetes",
    excerpt:
      "En tenis y pádel la cancha es el inventario: reservas por hora, clases grupales y particulares, bolsas de clases y cancelaciones. Cómo ordenar una academia y qué debe hacer el software.",
    category: "Por deporte",
    readTime: "6 min",
    date: "11 Oct 2026",
    isoDate: "2026-10-11",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una academia de tenis o de pádel necesita un software que maneje la cancha como inventario: canchas publicadas con las solicitudes de reserva en un solo lugar, clases grupales con cupo, clases particulares con el profesor, paquetes de clases que se descuentan al asistir y cancelaciones que devuelven la clase. A diferencia del fútbol, aquí el ingreso no depende solo de cuántos alumnos tienes, sino de cuántas horas de cancha logras ocupar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa tres productos: alquiler de cancha, clases grupales y clases particulares. Vende paquetes de clases con una regla clara de cancelación. SportMaps te deja publicar tus canchas y recibir solicitudes de reserva por enlace, y tiene planes por número de sesiones que se descuentan con la asistencia o la reserva, y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Lo que tienen de particular el tenis y el pádel" },
      {
        type: "p",
        content:
          "En tenis, la formación infantil suele seguir la progresión de pelotas de la ITF (programa Tennis Play and Stay): pelota roja en cancha reducida para los más pequeños, luego naranja, luego verde y por último la pelota amarilla en cancha completa. En lo competitivo, la Federación Colombiana de Tenis organiza el ranking juvenil por categorías de edad. El pádel, en cambio, se juega siempre en dobles en una cancha de 20 x 10 metros con paredes, lo que lo hace muy social: muchos alumnos son adultos que llegan en parejas o en grupos de cuatro.",
      },
      {
        type: "table",
        headers: ["", "Tenis", "Pádel"],
        rows: [
          ["Formato de clase típico", "Grupal por nivel de pelota o particular", "Grupos de 4 o clase particular"],
          ["Perfil del alumno", "Mucho niño y juvenil, más adultos recreativos", "Mayoría adulta, muchos principiantes"],
          ["Progresión", "Pelota roja, naranja, verde y amarilla", "Niveles por golpes: derecha, revés, volea, bandeja, salida de pared"],
          ["Competencia", "Ranking juvenil por categorías de edad", "Torneos de club y circuitos por categorías de nivel"],
          ["Lo que más se vende", "Mensualidad de escuela + clases particulares", "Paquetes de clases + alquiler de cancha"],
        ],
      },
      { type: "h2", content: "La cancha como inventario: reservas" },
      {
        type: "p",
        content:
          "Una cancha de tenis o de pádel tiene un número fijo de horas al día, y las de la noche (con luz) valen más. Si las reservas viven en un cuaderno o en el WhatsApp del administrador, aparecen los cruces, las canchas apartadas que nadie usa y los profesores que llegan y no tienen dónde dar la clase. Con SportMaps publicas tus canchas y recibes las solicitudes de reserva por un enlace, todas en un mismo lugar en vez de repartidas en chats, y la academia confirma cada una.",
      },
      {
        type: "ul",
        items: [
          "Bloquea primero las franjas fijas de la escuela (clases grupales de la semana).",
          "Después abre las franjas libres para clases particulares y alquiler.",
          "Revisa qué franjas casi nunca piden: si las mañanas entre semana están vacías, ahí va un paquete más barato para adultos.",
        ],
      },
      { type: "h2", content: "Cómo cobrar: paquetes, mensualidad y clase suelta" },
      {
        type: "table",
        headers: ["Producto", "Modelo de cobro", "Regla que conviene dejar escrita"],
        rows: [
          ["Escuela infantil de tenis", "Mensualidad", "Las clases perdidas no se reponen salvo incapacidad"],
          ["Clases grupales de adultos", "Paquete de sesiones (ej. 8 clases)", "Vigencia del paquete y aviso mínimo para cancelar"],
          ["Clase particular", "Paquete o clase suelta", "Cancelación con anticipación; si no, se descuenta"],
          ["Alquiler de cancha", "Por hora", "Precio distinto con luz"],
        ],
      },
      {
        type: "p",
        content:
          "SportMaps maneja planes por número de sesiones: cuando el alumno reserva una clase se descuenta del saldo, si cancela la reserva se le devuelve y si no llega, la clase se pierde. El profesor ve el saldo al tomar la asistencia, y que el alumno no tenga saldo nunca impide registrar que vino: el sistema lo marca para que la academia decida. Para las familias de la escuela infantil, la mensualidad se genera automáticamente cada período con recordatorios por correo y WhatsApp.",
      },
      {
        type: "p",
        content:
          "Los pagos entran por Wompi o Mercado Pago (PSE, Nequi, tarjeta) directo a la cuenta de la academia, sin comisión de SportMaps por la integración. El adulto que transfiere y manda el comprobante por WhatsApp no tiene que esperar a que alguien revise el banco: el asistente de IA lo lee, lo cruza contra el cobro y lo deja listo para que la escuela lo apruebe con un toque. Ese asistente es gratis en todos los planes.",
      },
      { type: "h2", content: "Qué evaluar en tenis y pádel" },
      {
        type: "ul",
        items: [
          "Tenis infantil: criterio de paso de pelota (sí/no): sostiene un peloteo de 10 golpes en cancha naranja, saca por encima de la cabeza.",
          "Consistencia: golpes seguidos sin error en un ejercicio fijo, como número.",
          "Saque: primeros saques dentro sobre 10 intentos.",
          "Pádel: dominio de golpes clave (bandeja, salida de pared, volea) en escala de 1 a 5.",
          "Asistencia: en adultos, el que deja de venir dos semanas es el que no renueva el paquete.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada academia arma su lista de métricas con la escala que prefiera, y el informe mensual le llega al alumno o a sus papás por correo con un enlace.",
      },
      { type: "h2", content: "Clase de prueba y adultos principiantes" },
      {
        type: "p",
        content:
          "En pádel sobre todo, buena parte de los alumnos llega por una clase de prueba con amigos. La conversión depende de lo que pase en las 48 horas siguientes: si nadie le escribe para ofrecerle un paquete, el alumno vuelve a alquilar cancha por su cuenta o se va a otro club. Conviene tener un proceso simple:",
      },
      {
        type: "ol",
        items: [
          "Agenda la clase de prueba con nombre y teléfono del interesado (en SportMaps la clase de cortesía es agendable, y el asistente de WhatsApp puede responder precios y agendarla).",
          "Al terminar, el profesor anota el nivel en que lo ubicaría.",
          "Al día siguiente, la academia le envía la oferta del paquete de su nivel con el enlace de pago.",
          "Si paga, queda inscrito con su saldo de clases.",
        ],
      },
      { type: "h2", content: "El profesor y su agenda" },
      {
        type: "p",
        content:
          "En tenis y pádel el profesor suele dar clases grupales de la academia y particulares propias en la misma cancha. Si eso no se ordena, aparecen discusiones por canchas y por plata. Lo sano es que todas las clases que usan cancha de la academia pasen por las reservas, que el precio de la particular sea claro (cuánto es de la academia y cuánto del profesor) y que el profesor vea en su celular su lista del día con el saldo de clases de cada alumno.",
      },
      { type: "h2", content: "Paso a paso para montar tu academia" },
      {
        type: "ol",
        items: [
          "Publica tus canchas y comparte el enlace de solicitudes de reserva.",
          "Crea los grupos: niveles de pelota para tenis infantil, niveles de juego para pádel.",
          "Crea los planes: mensualidad para la escuela y paquetes de sesiones para adultos y particulares.",
          "Asigna los profesores (son ilimitados en todos los planes) a sus grupos.",
          "Comparte el enlace de inscripción y conecta la pasarela de pagos.",
          "Toma asistencia por QR para que el saldo de clases sea exacto.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no te conviene: si eres un profesor independiente con cinco alumnos particulares y no administras canchas, una agenda en el celular puede bastar. Si quieres probar, el plan Free Start ($0, hasta 20 alumnos) no te cuesta nada.",
      },
      { type: "h2", content: "Checklist: qué pedirle a un software para tenis y pádel" },
      {
        type: "ul",
        items: [
          "Canchas publicadas con solicitudes de reserva por enlace, centralizadas en un solo lugar.",
          "Planes por número de sesiones que se descuenten al reservar o al asistir, y que devuelvan la clase al cancelar.",
          "Mensualidad automática para la escuela infantil.",
          "Pagos por PSE, Nequi y tarjeta directo a la cuenta de la academia.",
          "Profesores ilimitados, cada uno con su lista del día en el celular.",
          "Recordatorios por WhatsApp y correo para paquetes que se agotan o vencen.",
        ],
      },
      {
        type: "p",
        content:
          "Si tu academia también alquila canchas a personas que no son alumnos, separa ese ingreso del de la escuela desde el principio. En el cierre de mes vas a querer saber cuánto deja cada línea: escuela infantil, clases de adultos, particulares y alquiler, porque cada una tiene un costo de cancha y de profesor distinto.",
      },
      {
        type: "cta",
        title: "Ordena las canchas y las clases de tu academia",
        description:
          "Canchas publicadas con solicitudes por enlace, paquetes de clases y cobros con WhatsApp IA incluido.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "como-cobrar-mensualidades-escuela-deportiva",
      "control-de-asistencia-con-qr-y-torniquetes",
      "wompi-vs-mercado-pago-escuelas-deportivas",
    ],
    about: [
      "academias de tenis",
      "academias de pádel",
      "reservas de canchas",
      "paquetes de clases",
    ],
    mentions: ["ITF", "Tennis Play and Stay", "Federación Colombiana de Tenis", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Qué software sirve para una academia de tenis o pádel?",
        answer:
          "Uno que centralice las solicitudes de reserva de canchas, las clases grupales con cupo, las clases particulares y los paquetes que se descuenten al asistir. SportMaps permite publicar canchas y recibir solicitudes por enlace, maneja paquetes de sesiones y cobra por PSE, Nequi y tarjeta.",
      },
      {
        question: "¿Cómo cobrar las clases de pádel: por clase o por paquete?",
        answer:
          "El paquete (por ejemplo, 8 clases con una vigencia definida) da más estabilidad que la clase suelta y fideliza al alumno. Lo clave es dejar escrita la regla de cancelación: con cuánta anticipación se puede cancelar sin perder la clase.",
      },
      {
        question: "¿Qué es la pelota roja, naranja y verde en tenis?",
        answer:
          "Es la progresión de la ITF para enseñar tenis a niños: pelotas más lentas y canchas más pequeñas al principio, hasta llegar a la pelota amarilla en cancha completa. Sirve como sistema de niveles para la escuela infantil.",
      },
      {
        question: "¿Cómo evitar cruces en las reservas de canchas?",
        answer:
          "Centralizando las solicitudes en un solo lugar: primero se apartan las clases fijas y luego se aceptan alquileres en las franjas libres. En SportMaps publicas tus canchas y recibes las solicitudes por un enlace, y la academia confirma cada una.",
      },
      {
        question: "¿Qué pasa si un alumno cancela una clase reservada?",
        answer:
          "En SportMaps, cancelar la reserva devuelve la clase al saldo del paquete; si el alumno no llega sin cancelar, la clase se descuenta. La academia define la regla de anticipación que comunica a sus alumnos.",
      },
    ],
  },
  {
    slug: "software-artes-marciales-taekwondo-karate",
    title: "Software para academias de artes marciales: taekwondo, karate, grados y exámenes",
    excerpt:
      "Cinturones, grados, exámenes de ascenso, combate por peso y formas. Lo que necesita una academia de taekwondo o karate en Colombia para ordenar alumnos, cobros y progreso, y cómo lo cubre SportMaps.",
    category: "Por deporte",
    readTime: "6 min",
    date: "5 Oct 2026",
    isoDate: "2026-10-05",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Una academia de artes marciales necesita un software que siga el grado de cada alumno (cinturón), controle los requisitos para el examen de ascenso (tiempo en el grado, asistencia, formas aprendidas), cobre la mensualidad y los derechos de examen por separado, y registre datos de competencia como el peso para las divisiones de combate. En taekwondo y karate el grado es el corazón de la relación con el alumno: es lo que lo motiva a seguir y lo que más preguntan los papás.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Agrupa por edad y grado, deja escritos los requisitos de cada examen, mide la asistencia porque es requisito, y cobra el examen como un cobro aparte. SportMaps maneja grupos, evaluaciones con criterios sí/no, asistencia por QR, carnets digitales y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Grados y cinturones: cómo funcionan" },
      {
        type: "p",
        content:
          "En taekwondo, los grados de color se llaman gup y van del 10.º (cinturón blanco) al 1.º, antes del cinturón negro. Los grados de cinturón negro son los dan, que certifica el Kukkiwon en Corea; los menores de 15 años reciben el grado poom (cinturón rojo y negro), que se convierte en dan al cumplir la edad. La secuencia exacta de colores entre blanco y negro varía según la escuela.",
      },
      {
        type: "p",
        content:
          "En karate el sistema es parecido pero con otros nombres: los grados de color son kyu (cuentan hacia atrás hasta el 1.er kyu) y los de cinturón negro son dan. Los colores y los requisitos dependen del estilo (Shotokan, Goju-ryu, Shito-ryu…) y de la organización a la que pertenece la academia.",
      },
      {
        type: "table",
        headers: ["", "Taekwondo", "Karate"],
        rows: [
          ["Grados de color", "Gup (10.º a 1.º)", "Kyu (cuenta regresiva hasta 1.er kyu)"],
          ["Cinturón negro", "Dan; poom para menores de 15", "Dan"],
          ["Quién certifica el negro", "Kukkiwon", "Depende del estilo y la organización"],
          ["Formas", "Poomsae (Taegeuk, Koryo…)", "Kata"],
          ["Combate", "Kyorugi, por edad y peso", "Kumite, por edad y peso"],
          ["Federación en Colombia", "Federación Colombiana de Taekwondo", "Federación Colombiana de Karate"],
        ],
      },
      { type: "h2", content: "El examen de ascenso, paso a paso" },
      {
        type: "p",
        content:
          "El examen es el momento de más tensión administrativa en una academia: hay que saber quién cumple requisitos, quién pagó el derecho de examen, quién necesita cinturón y certificado nuevo. Un proceso ordenado se ve así:",
      },
      {
        type: "ol",
        items: [
          "Define los requisitos de cada grado: tiempo mínimo en el grado actual, asistencia mínima, formas (poomsae o kata), técnicas y, si aplica, combate o rompimiento.",
          "Un mes antes, revisa la asistencia de cada alumno contra el requisito.",
          "Evalúa en clase cada requisito técnico como sí/no (domina Taegeuk 3, sí o no).",
          "Publica la fecha en el calendario: las familias reciben el aviso en la app y por notificación al celular.",
          "Genera el cobro del derecho de examen solo para quienes cumplen requisitos.",
          "Después del examen, actualiza el grupo o la categoría del alumno y deja la nota en su ficha.",
        ],
      },
      {
        type: "p",
        content:
          "SportMaps no hace el examen por ti, pero sí te da lo que necesitas para prepararlo: asistencia exacta por QR, evaluaciones con criterios sí/no por técnica o forma, grupos por grado y cobros puntuales separados de la mensualidad.",
      },
      { type: "h2", content: "Competencia: peso y categorías" },
      {
        type: "p",
        content:
          "En combate, tanto en taekwondo como en karate, se compite por categoría de edad (en taekwondo, por ejemplo, infantil, cadete y junior) y por división de peso, y los cinturones de color compiten separados de los negros. Las divisiones exactas las fija cada reglamento y convocatoria. Para el entrenador, eso convierte el peso en un dato que hay que registrar con fecha: si un alumno está en el límite de una división, se nota antes del pesaje oficial y no el día del torneo.",
      },
      {
        type: "table",
        headers: ["Métrica", "Cómo registrarla", "Para qué sirve"],
        rows: [
          ["Peso", "Kilos, con fecha", "Saber en qué división compite y si está cerca del límite"],
          ["Formas dominadas", "Sí/no por poomsae o kata", "Requisito de examen y criterio de competencia en formas"],
          ["Flexibilidad", "Escala de 1 a 5 o centímetros", "Patadas altas sin lesión"],
          ["Combate", "Escala de 1 a 5 por el instructor", "Distancia, contraataque, control"],
          ["Asistencia", "Automática", "Requisito de examen y alerta de abandono"],
        ],
      },
      { type: "h2", content: "Cómo cobrar en una academia de artes marciales" },
      {
        type: "ul",
        items: [
          "Matrícula o inscripción una vez, que muchas veces incluye el dobok o el karategi.",
          "Mensualidad por período, con recordatorios automáticos.",
          "Derecho de examen como cobro puntual, solo a quien presenta.",
          "Torneos y protecciones (peto, casco, protectores) aparte, con el catálogo de artículos o la tienda en línea (adicional).",
          "Descuento por hermanos para la familia que entrena junta.",
        ],
      },
      {
        type: "p",
        content:
          "Los pagos llegan por Wompi o Mercado Pago (PSE, Nequi, tarjeta) directo a la cuenta de la academia, sin comisión de SportMaps por la integración. El asistente de WhatsApp lee los comprobantes de transferencia que mandan los papás, los cruza contra el cobro y los deja listos para que la academia los apruebe con un toque; es gratis en todos los planes. Y como la mora no da de baja automáticamente, un alumno atrasado no pierde su historial de grado.",
      },
      { type: "h2", content: "Grupos: por edad, por grado o por los dos" },
      {
        type: "p",
        content:
          "Una academia pequeña suele tener una sola clase con blancos y avanzados juntos. Cuando crece, aparecen tres formas de dividir, cada una con sus pros:",
      },
      {
        type: "table",
        headers: ["División", "Ventaja", "Desventaja"],
        rows: [
          ["Por edad (infantil, juvenil, adultos)", "El trato y la intensidad se ajustan a la edad", "Mezcla grados muy distintos en la misma clase"],
          ["Por grado (principiantes, intermedios, avanzados)", "La técnica de la clase sirve a todos", "Junta niños con adultos"],
          ["Por edad y grado", "Lo más ordenado", "Exige más horarios e instructores"],
          ["Grupo de competencia aparte", "Prepara combate y formas con intensidad", "Requiere selección y compromiso extra de la familia"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada grupo tiene su horario e instructor, y un alumno puede estar en su clase regular y en el grupo de competencia a la vez. Los instructores y asistentes son ilimitados en todos los planes, así que abrir un grupo más no sube la factura del software.",
      },
      { type: "h2", content: "Lo que más se le escapa a una academia" },
      {
        type: "ul",
        items: [
          "El alumno que deja de venir dos semanas antes del examen y se entera tarde de que no cumple asistencia.",
          "Certificados y cinturones pedidos sin haber cobrado el examen.",
          "Pesos desactualizados al inscribir un torneo.",
          "Papás que no saben qué le falta a su hijo para el siguiente grado: el informe mensual con las formas y técnicas aprobadas resuelve esa conversación.",
        ],
      },
      { type: "h2", content: "El carnet digital" },
      {
        type: "p",
        content:
          "Muchas academias entregan un carné con el grado del alumno. El carnet digital de SportMaps lleva QR, vive en el celular y sirve para tomar la asistencia en segundos al entrar al dojang o al dojo. Si la academia controla el ingreso, existe como adicional el control de acceso con torniquetes o lectores biométricos ZKTeco.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: una academia con 70 alumnos entre niños y adultos queda en Escuela Crecimiento ($99.000 al mes o $89.000 al mes pagando anual), con instructores ilimitados y WhatsApp IA incluido.",
      },
      {
        type: "p",
        content:
          "Un último punto: muchas academias de artes marciales son el proyecto de un solo maestro que enseña, cobra y administra. Si ese es tu caso, empieza por lo que más tiempo te quita (casi siempre, perseguir pagos y revisar comprobantes de transferencia) y deja la parte de evaluaciones para cuando la operación ya esté andando. El plan Free Start te deja hacerlo sin pagar mientras tengas hasta 20 alumnos.",
      },
      {
        type: "cta",
        title: "Ordena grados, exámenes y cobros de tu academia",
        description:
          "Asistencia por QR, evaluaciones por técnica, cobros de examen separados y carnets digitales.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "carnet-digital-deportista",
      "control-de-asistencia-con-qr-y-torniquetes",
      "informe-mensual-del-deportista-para-padres",
    ],
    about: [
      "academias de taekwondo",
      "academias de karate",
      "exámenes de grado en artes marciales",
      "software de gestión deportiva",
    ],
    mentions: [
      "Kukkiwon",
      "World Taekwondo",
      "Federación Colombiana de Taekwondo",
      "Federación Colombiana de Karate",
      "ZKTeco",
      "Wompi",
      "Mercado Pago",
    ],
    faqs: [
      {
        question: "¿Cuáles son los grados del taekwondo?",
        answer:
          "Los grados de color se llaman gup y van del 10.º (cinturón blanco) al 1.º; luego vienen los grados dan de cinturón negro, certificados por el Kukkiwon. Los menores de 15 años reciben grado poom, que se convierte en dan al cumplir la edad.",
      },
      {
        question: "¿Qué diferencia hay entre kyu y dan en karate?",
        answer:
          "Kyu son los grados de color, que cuentan hacia atrás hasta el 1.er kyu, y dan son los grados de cinturón negro. Los colores y requisitos cambian según el estilo y la organización de la academia.",
      },
      {
        question: "¿Cómo organizar los exámenes de cinturón en una academia?",
        answer:
          "Con requisitos escritos por grado (tiempo, asistencia, formas y técnicas), una revisión de asistencia un mes antes y el cobro del examen solo para quienes cumplen. Un software con asistencia exacta y evaluaciones sí/no por técnica simplifica la revisión.",
      },
      {
        question: "¿Cómo cobrar el examen de grado sin mezclarlo con la mensualidad?",
        answer:
          "Como un cobro puntual, generado solo para los alumnos que presentan. En SportMaps los cobros puntuales van aparte de la mensualidad y se pagan por PSE, Nequi o tarjeta.",
      },
      {
        question: "¿Qué software sirve para una academia de taekwondo o karate en Colombia?",
        answer:
          "Uno que lleve asistencia exacta, grupos por grado, evaluaciones por técnica y cobros separados de mensualidad y examen. SportMaps lo hace e incluye carnets digitales con QR; tiene plan gratis hasta 20 alumnos.",
      },
    ],
  },
  {
    slug: "software-escuelas-de-gimnasia",
    title: "Software para escuelas de gimnasia: niveles, evaluaciones y rotación por aparatos",
    excerpt:
      "Gimnasia artística, rítmica o trampolín: niveles con elementos que se aprueban uno a uno, rotación por aparatos, seguridad y cobros por frecuencia semanal. Qué debe resolver el software y cómo lo hace SportMaps.",
    category: "Por deporte",
    readTime: "6 min",
    date: "29 Sep 2026",
    isoDate: "2026-09-29",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela de gimnasia necesita un software que organice a las alumnas y alumnos por nivel técnico, que permita evaluar elemento por elemento (rueda, parada de manos, rondada) para decidir quién sube de nivel, que controle cupos por grupo porque los aparatos y los entrenadores son limitados, y que cobre según la frecuencia semanal. En gimnasia el progreso no se mide en goles ni en segundos: se mide en elementos dominados con buena ejecución, y eso exige evaluaciones finas y frecuentes.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Define niveles con una lista de elementos que se aprueban con sí/no, evalúa cada mes, limita cupos por grupo y cobra por frecuencia (2 o 3 veces por semana). SportMaps tiene evaluaciones configurables, informe mensual para los papás, profesionales de salud vinculados y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza la gimnasia" },
      {
        type: "p",
        content:
          "La gimnasia competitiva en Colombia depende de la Federación Colombiana de Gimnasia y de sus ligas, que siguen las modalidades de la Federación Internacional de Gimnasia (FIG): artística femenina y masculina, rítmica, trampolín, aeróbica, acrobática y parkour, además de la Gimnasia para Todos, que es la gimnasia recreativa. Muchas escuelas trabajan con programas por niveles de iniciación y desarrollo antes de llevar a sus deportistas a las categorías de competencia; los nombres y requisitos de esos niveles cambian según la liga y el programa que siga cada escuela.",
      },
      {
        type: "p",
        content:
          "En competencia, el código de puntuación de la FIG separa dos notas: la nota D (dificultad: qué elementos hace la gimnasta) y la nota E (ejecución: qué tan bien los hace, partiendo de 10 y restando por errores). Esa lógica sirve también para evaluar en la escuela: una cosa es si la niña ya hace el elemento y otra si lo hace limpio.",
      },
      {
        type: "table",
        headers: ["Modalidad", "Qué se evalúa", "Particularidad operativa"],
        rows: [
          ["Artística femenina", "Salto, barras asimétricas, viga y suelo", "Rotación por cuatro aparatos con un entrenador por estación"],
          ["Artística masculina", "Suelo, arzones, anillas, salto, paralelas y barra fija", "Seis aparatos; más espacio y más equipo"],
          ["Rítmica", "Manos libres y aparatos (cuerda, aro, pelota, mazas, cinta)", "Música, vestuario y coreografía por rutina"],
          ["Trampolín", "Series de saltos con dificultad y ejecución", "Seguridad: un saltador a la vez y spotter"],
          ["Gimnasia para Todos", "Habilidades básicas, coordinación", "Grupos grandes, enfoque recreativo"],
        ],
      },
      { type: "h2", content: "Niveles: evaluar elemento por elemento" },
      {
        type: "p",
        content:
          "La forma más clara de manejar niveles es una lista de elementos por nivel, cada uno con criterio sí/no, más una calificación de ejecución. Cuando la alumna tiene todos los elementos del nivel en sí y la ejecución en un mínimo que defina la escuela, sube. Un ejemplo ilustrativo para artística de iniciación:",
      },
      {
        type: "table",
        headers: ["Elemento", "Tipo de evaluación", "Ejemplo de criterio"],
        rows: [
          ["Rollo adelante y atrás", "Sí/no + ejecución 1 a 5", "Sin apoyar la cabeza, termina de pie"],
          ["Parada de manos", "Sí/no + segundos sostenida", "Brazos extendidos, cuerpo alineado"],
          ["Rueda", "Sí/no + ejecución 1 a 5", "Piernas rectas, línea recta en el piso"],
          ["Split (abertura)", "Centímetros al piso o sí/no", "Ambas piernas"],
          ["Fuerza", "Número de repeticiones (dominadas, elevaciones)", "Comparado mes a mes"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela crea su propia lista de métricas con la escala que necesite (sí/no, 1 a 5, 1 a 10 o número con unidad). Lo que se evalúa cada mes aparece en el informe mensual que reciben los papás por correo con un enlace, y eso responde la pregunta más repetida en gimnasia: «¿por qué mi hija no ha subido de nivel?».",
      },
      { type: "h2", content: "Cupos, rotación y seguridad" },
      {
        type: "p",
        content:
          "Un grupo de gimnasia no crece como uno de fútbol: cada aparato necesita un entrenador cerca y las colchonetas son limitadas. Por eso conviene fijar un cupo máximo por grupo y por horario, y dividir al grupo en estaciones que rotan. En la ficha de cada atleta deben quedar los datos médicos y el contacto del acudiente, y si la escuela trabaja con fisioterapia, SportMaps permite vincular profesionales de salud al seguimiento del atleta.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No subas a una alumna de nivel solo porque ya hace el elemento una vez. Exige que lo repita con buena ejecución en dos evaluaciones seguidas: en gimnasia, un elemento mal consolidado en el nivel bajo es la puerta a una lesión en el nivel alto.",
      },
      { type: "h2", content: "Recreativa y competitiva: dos ritmos distintos" },
      {
        type: "p",
        content:
          "La mayoría de las escuelas tiene una base grande de gimnasia recreativa y un grupo más pequeño de competencia que entrena más horas. Los dos necesitan cosas diferentes del software:",
      },
      {
        type: "table",
        headers: ["", "Gimnasia recreativa", "Grupo de competencia"],
        rows: [
          ["Frecuencia", "1 a 3 veces por semana", "Varias sesiones semanales de más duración"],
          ["Evaluación", "Elementos del nivel, cada mes", "Rutinas completas con dificultad y ejecución"],
          ["Lo que más preguntan los papás", "Cuándo sube de nivel", "Cuándo es la próxima competencia y qué cuesta"],
          ["Riesgo principal", "Aburrirse y retirarse", "Sobrecarga y lesiones"],
          ["Herramienta clave", "Informe mensual", "Planificación por mesociclos y seguimiento de salud"],
        ],
      },
      {
        type: "p",
        content:
          "Para el grupo de competencia, la planificación por mesociclos y sesiones de SportMaps ayuda a dosificar la carga hacia la competencia objetivo, y el vínculo con fisioterapia deja registro cuando una gimnasta vuelve de una molestia.",
      },
      { type: "h2", content: "Cómo cobrar en una escuela de gimnasia" },
      {
        type: "ul",
        items: [
          "Mensualidad según frecuencia: un plan para 2 días por semana y otro para 3, porque el uso del espacio es distinto.",
          "Inscripción anual una sola vez.",
          "Competencias y festivales como cobros puntuales.",
          "Leotardo o maillot, licras y uniforme de presentación con el catálogo de artículos o la tienda en línea (adicional).",
          "Vestuario y montaje de rutina en rítmica como cobro aparte, si la escuela lo gestiona.",
        ],
      },
      {
        type: "p",
        content:
          "Las familias pagan por Wompi o Mercado Pago (PSE, Nequi, tarjeta) directo a la cuenta de la escuela, sin comisión de SportMaps por la integración, y reciben recordatorios automáticos por correo y WhatsApp. El asistente de IA lee los comprobantes de transferencia, los cruza contra el cobro y los deja listos para aprobar con un toque; es gratis en todos los planes, incluido Free Start.",
      },
      { type: "h2", content: "Paso a paso para montar tu escuela" },
      {
        type: "ol",
        items: [
          "Crea los niveles como grupos, con horario, entrenador y cupo máximo.",
          "Carga la lista de elementos de cada nivel como métricas sí/no y de ejecución.",
          "Crea los planes por frecuencia semanal y la inscripción anual.",
          "Comparte el enlace de inscripción; la ficha guarda acudiente y datos médicos.",
          "Toma asistencia por QR y evalúa los elementos una vez al mes.",
          "Usa el informe mensual para explicar a cada familia en qué va su hija o hijo.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: una escuela con 140 gimnastas en varios niveles queda en Escuela Pro ($159.000 al mes o $139.000 al mes pagando anual, hasta 300 alumnos). Con hasta 50, Escuela Start ($69.000 al mes).",
      },
      { type: "h2", content: "Checklist: qué pedirle a un software para gimnasia" },
      {
        type: "ul",
        items: [
          "Evaluaciones con criterios sí/no por elemento y calificación de ejecución por separado.",
          "Cupos máximos por grupo y horario.",
          "Informe mensual para las familias con lo que ya aprobó y lo que le falta.",
          "Planes por frecuencia semanal (2 o 3 días) sin crear cobros a mano.",
          "Ficha con datos médicos y acudientes, y vínculo con fisioterapia si la escuela trabaja con un profesional de salud.",
          "Catálogo de artículos o tienda en línea (adicional) para leotardos, licras y uniformes de presentación.",
        ],
      },
      {
        type: "p",
        content:
          "Si hoy llevas los niveles en una hoja de cálculo, no la botes: úsala para cargar la lista de elementos de cada nivel como métricas en la plataforma. Es el trabajo de una tarde y, a partir de ahí, cada evaluación queda en el historial de la gimnasta y en el informe de su familia.",
      },
      {
        type: "cta",
        title: "Organiza niveles y evaluaciones de tu escuela de gimnasia",
        description:
          "Elementos por nivel, informe mensual para las familias, cupos por grupo y cobros con WhatsApp IA incluido.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "informe-mensual-del-deportista-para-padres",
      "metricas-clave-academias",
      "como-cobrar-mensualidades-escuela-deportiva",
    ],
    about: [
      "escuelas de gimnasia",
      "gimnasia artística",
      "evaluación por niveles",
      "software de gestión deportiva",
    ],
    mentions: [
      "Federación Colombiana de Gimnasia",
      "Federación Internacional de Gimnasia",
      "FIG",
      "Wompi",
      "Mercado Pago",
      "WhatsApp",
    ],
    faqs: [
      {
        question: "¿Cómo se organizan los niveles en una escuela de gimnasia?",
        answer:
          "Con una lista de elementos por nivel que se aprueban uno a uno, más una calificación de ejecución. Los nombres y requisitos dependen de la liga y del programa de cada escuela, pero el criterio de subir debe ser claro y estar escrito.",
      },
      {
        question: "¿Qué son la nota D y la nota E en gimnasia?",
        answer:
          "En el código de puntuación de la FIG, la nota D mide la dificultad de los elementos que hace el gimnasta y la nota E mide la ejecución, partiendo de 10 y restando por errores. La nota final suma las dos.",
      },
      {
        question: "¿Cómo explicarles a los papás por qué su hija no sube de nivel?",
        answer:
          "Mostrando la lista de elementos del nivel y cuáles ya aprobó. Un informe mensual con esa lista evita la conversación incómoda en la puerta del gimnasio y le da a la familia una meta concreta.",
      },
      {
        question: "¿Cómo cobrar en una escuela de gimnasia?",
        answer:
          "Lo más común es mensualidad según la frecuencia semanal (2 o 3 días), inscripción anual y cobros puntuales para competencias y uniformes. En SportMaps cada uno va como cobro separado y se paga por PSE, Nequi o tarjeta.",
      },
      {
        question: "¿Cuántas alumnas debe tener un grupo de gimnasia?",
        answer:
          "Depende de los aparatos y de cuántos entrenadores hay para supervisar cada estación; no hay una cifra única. Lo importante es fijar un cupo máximo por grupo y horario y no superarlo por presión de inscripciones.",
      },
    ],
  },
];
