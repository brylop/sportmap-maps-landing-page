import type { BlogPost } from "../blog-posts";

export const familias2Posts: BlogPost[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. A qué edad empezar cada deporte
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "a-que-edad-empezar-cada-deporte",
    title: "¿A qué edad empezar cada deporte? Tabla de iniciación y especialización en 10 deportes",
    excerpt:
      "Antes de los 6 años, juego; desde los 6, deporte organizado sencillo; y un solo deporte en serio, no antes de los 15 o 16. Tabla por deporte con lo que dicen la Academia Americana de Pediatría, la OMS, el COI y las federaciones.",
    category: "Para familias",
    readTime: "9 min",
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
          "La regla general es esta: antes de los 6 años, lo que conviene es jugar (correr, saltar, lanzar, rodar, flotar), no competir; hacia los 6 años la mayoría de los niños ya tiene las habilidades motrices para un deporte organizado sencillo; y dedicarse a un solo deporte de forma intensiva conviene aplazarlo hasta los 15 o 16 años. Eso es lo que recomienda la Academia Americana de Pediatría (AAP). La excepción hacia abajo es la natación, que puede empezar desde el primer año de vida como familiarización con el agua. La excepción hacia arriba son unos pocos deportes de madurez temprana, como la gimnasia rítmica.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Piensa en tres etapas y no en una edad mágica: de 2 a 5 años, juego y habilidades básicas; de 6 a 9, deporte organizado con reglas adaptadas y sin obsesión por el marcador; de 10 a 12, deportes con táctica y trabajo en equipo. La especialización en un solo deporte llega después, hacia los 15 o 16. Probar varios deportes de niño no retrasa a nadie: en la mayoría de disciplinas es el camino que más se asocia con llegar lejos.",
      },
      { type: "h2", content: "¿Qué dicen las fuentes médicas y deportivas?" },
      {
        type: "table",
        headers: ["Fuente", "Qué recomienda"],
        rows: [
          ["AAP, «Is Your Child Ready for Sports?» (HealthyChildren.org, actualizado en junio de 2024)", "De 2 a 5 años la mayoría no tiene las habilidades motrices para el deporte organizado: mejor juego activo, instrucciones cortas y nada de competencia. A los 6 años la mayoría ya puede con deportes organizados sencillos. De 10 a 12 ya manejan estrategia y trabajo en equipo."],
          ["AAP, informe clínico «Sports Specialization and Intensive Training in Young Athletes» (Pediatrics, 2016)", "Aplazar la especialización en un solo deporte hasta los 15 o 16 años para reducir lesiones por sobreuso; practicar varios deportes al menos hasta la pubertad; uno o dos días de descanso a la semana."],
          ["AAP, «Too Much, Too Soon» (HealthyChildren.org, actualizado en julio de 2024)", "Esperar hasta cerca de los 6 años para el deporte organizado; no entrenar más horas a la semana que la edad del niño; dos a tres meses al año lejos de su deporte principal, que se pueden repartir en bloques de un mes."],
          ["OMS, directrices de actividad física", "De 1 a 4 años: al menos 180 minutos diarios de actividad de cualquier intensidad. De 5 a 17 años: en promedio 60 minutos diarios de actividad moderada a vigorosa, y al menos tres días a la semana con actividad vigorosa y de fortalecimiento de músculos y huesos."],
          ["Comité Olímpico Internacional, declaración de consenso sobre desarrollo deportivo juvenil (British Journal of Sports Medicine, 2015)", "Defiende un desarrollo variado, diversificado y equilibrado, con la salud, la seguridad y la diversión en el centro, y advierte sobre la especialización intensiva temprana."],
        ],
      },
      {
        type: "p",
        content:
          "Un detalle importante de la OMS: los 60 minutos diarios no tienen que ser de entrenamiento. Caminar al colegio, el recreo y jugar en el parque también cuentan. La escuela deportiva es una parte de esa hora, no toda.",
      },
      { type: "h2", content: "Tabla por deporte: iniciación lúdica y especialización" },
      {
        type: "table",
        headers: ["Deporte", "Iniciación lúdica", "Competencia formal y especialización", "Respaldo"],
        rows: [
          ["Fútbol", "Desde los 6 años, con cancha pequeña, pocos jugadores y rotación de posiciones", "Dedicación exclusiva, no antes de los 15 o 16. El primer mundial de la FIFA es el Sub-17", "AAP (el fútbol aparece entre los deportes adecuados de 6 a 9 años); FIFA"],
          ["Natación", "Familiarización con el agua desde el primer año; hacia los 4 la mayoría ya está lista para clases; a los 5 o 6 suelen dominar el crol", "En Colombia la Federación de Natación arma grupos de competencia desde los 7 años. Entrenamiento intensivo, mejor después de la pubertad", "AAP, «Swim Lessons» (actualizado en mayo de 2026); Fecna, Instructivo 2026"],
          ["Gimnasia", "Rollos y equilibrios como juego de 2 a 5; clases formales desde los 6", "Es de los pocos deportes de especialización temprana (la AAP nombra la rítmica). Aun así, la FIG no deja competir en mayores antes de los 16 años en artística femenina ni de los 18 en masculina", "AAP 2016; FIG, Reglamento Técnico, art. 5.2"],
          ["Patinaje", "Equilibrio y deslizamiento como juego; grupos organizados desde los 6, siempre con casco y protecciones", "En velocidad, la Federación Colombiana de Patinaje tiene una categoría de transición a los 11, 12 y 13 años, antes de las categorías mayores", "Regla general de la AAP; Fedepatin, resoluciones de velocidad 2026"],
          ["Voleibol", "De 6 a 9 solo en versión adaptada (balón liviano, red baja); el juego completo se entiende mejor de 10 a 12", "El primer mundial de la FIVB es el U17", "AAP (lo clasifica como difícil de 6 a 9 si no se modifica); FIVB"],
          ["Baloncesto", "De 6 a 9 en formato mini (aro bajo, balón pequeño); juego completo de 10 a 12", "El minibaloncesto de la FIBA es para niños de 12 años o menos; el primer mundial es el U17", "AAP; FIBA, reglas de minibaloncesto"],
          ["Tenis", "Desde los 6 años, con raqueta corta y pelota lenta", "La ITF obliga desde 2012 a que las competencias de 10 años o menos se jueguen con pelotas lentas (roja, naranja o verde) y cancha reducida", "AAP (adecuado de 6 a 9); ITF, programa Tennis10s"],
          ["Artes marciales", "Desde los 6 años, con énfasis en técnica, respeto y control", "El mundial de cadetes de World Taekwondo es para 12 a 14 años; en judo, la categoría cadete de la IJF va de 15 a 17", "AAP (adecuadas de 6 a 9); World Taekwondo; IJF"],
          ["Atletismo", "Correr, saltar y lanzar como juego desde los 4 años", "Kids' Athletics de World Athletics cubre de 4 a 14 años; las categorías mundiales empiezan en sub-18 y sub-20", "World Athletics"],
          ["Porrismo", "Coreografía, saltos y acrobacia básica de piso desde los 6; las elevaciones exigen entrenador formado", "En el all star de la USASF, la división más pequeña (Tiny) era en 2025-26 para nacidos entre 2018 y 2020", "AAP (regla general); USASF, tabla de edades 2025-26"],
        ],
      },
      {
        type: "p",
        content:
          "Cómo leer la tabla: la columna de iniciación viene de la guía general de la AAP, que no fija una edad distinta para cada deporte sino etapas de desarrollo. La columna de competencia usa las categorías que cada federación publica, que cambian con los años. Para el patinaje y el porrismo no encontramos una recomendación pediátrica específica, así que aplicamos la regla general. Y la excepción de la AAP sobre deportes de madurez temprana habla de gimnasia rítmica, patinaje artístico sobre hielo y clavados; no la extiendas por tu cuenta a otros deportes.",
      },
      { type: "h2", content: "¿Qué significa «iniciación lúdica» en la práctica?" },
      {
        type: "ul",
        items: [
          "De 2 a 5 años: el equilibrio, la atención y la capacidad de seguir un objeto con la vista todavía están madurando. Sirven las actividades de correr, nadar, dar botes y lanzar y atrapar. La AAP pide instrucciones cortas, mucho tiempo de juego, nada de competencia y que el adulto participe.",
          "De 6 a 9 años: ya hay habilidades motrices básicas, pero la coordinación ojo-mano y la idea de táctica siguen en construcción. Funcionan canchas y balones más pequeños, partidos cortos, menos jugadores por equipo, rotar posiciones y llevar poco el marcador.",
          "De 10 a 12 años: la mayoría ya puede con deportes que piden estrategia y trabajo en equipo. Según la AAP, la mayoría de los niños prefiere jugar más en un equipo que pierde que jugar menos en uno que gana.",
        ],
      },
      { type: "h2", content: "¿Cuándo conviene especializarse en un solo deporte?" },
      {
        type: "p",
        content:
          "En la mayoría de deportes, tarde. El informe clínico de la AAP de 2016 concluye que diversificar temprano y especializarse después es la ruta que más se asocia con llegar al alto nivel, y recomienda aplazar la dedicación exclusiva hasta los 15 o 16 años. El consenso del COI de 2015 va en la misma línea: un programa variado y equilibrado, centrado en la salud y la diversión, es la mejor base para un éxito deportivo que dure.",
      },
      {
        type: "p",
        content:
          "Esto no significa que tu hijo no pueda querer mucho un deporte a los 9 años. Significa que, aunque tenga un favorito, le conviene seguir moviéndose de otras formas, descansar uno o dos días a la semana y tener semanas del año sin ese deporte. La AAP da una regla fácil de recordar: que no entrene más horas a la semana que los años que tiene.",
      },
      { type: "h2", content: "¿Empezar tarde es un problema?" },
      {
        type: "p",
        content:
          "Casi nunca. La encuesta de Project Play (Aspen Institute, 2019) encontró que los niños empiezan un deporte, en promedio, cerca de los 8 años. La AAP advierte además que en la pubertad los niños maduran a ritmos muy distintos: el que crece antes es temporalmente más alto y fuerte, y eso no quiere decir que tenga más talento; el que madura después no debe verse como alguien sin condiciones. Para ellos suelen servir deportes donde el tamaño pesa menos, como los de raqueta, la natación o las artes marciales.",
      },
      { type: "h2", content: "¿Cómo saber si tu hijo está listo?" },
      {
        type: "ol",
        items: [
          "Sigue instrucciones sencillas de un adulto que no eres tú.",
          "Aguanta una actividad de 30 a 45 minutos sin frustrarse del todo.",
          "Tiene las habilidades básicas que pide el deporte: correr, saltar, lanzar, atrapar o flotar.",
          "Pregunta por ir. Si hay que arrastrarlo cada semana, todavía no es el momento o no es ese deporte.",
          "La escuela tiene un grupo de su edad, no uno donde quede mezclado con niños tres años mayores.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Esta guía es informativa y no reemplaza la consulta médica. Antes de inscribir a tu hijo, y sobre todo si tiene asma, una condición cardíaca, una lesión previa o nació prematuro, consulta al pediatra. La AAP recomienda una valoración médica antes de empezar cualquier deporte organizado.",
      },
      { type: "h2", content: "Errores frecuentes al elegir la edad" },
      {
        type: "ul",
        items: [
          "Inscribirlo en competencia a los 4 años porque «se le ve el talento». A esa edad lo que se ve es maduración, no talento.",
          "Medir el progreso por partidos ganados antes de los 10 años.",
          "Entrenar el mismo deporte los doce meses del año, sin semanas de descanso.",
          "Compararlo con el compañero que ya dio el estirón.",
          "Creer que si no empezó a los 5 «ya se le pasó el tren».",
        ],
      },
      { type: "h2", content: "Cómo se ve esto del lado de la familia" },
      {
        type: "p",
        content:
          "Si la escuela de tu hijo trabaja con SportMaps (que opera solo en Colombia), los grupos se arman por año de nacimiento, así que queda con niños de su edad. Tú pagas la mensualidad desde el celular, llevas su carnet digital con código QR y recibes un informe mensual con la asistencia y lo que anotó el entrenador. Nada de eso decide a qué edad empezar, pero sí te deja ver si está yendo, si lo disfruta y cómo avanza.",
      },
      {
        type: "cta",
        title: "¿Diriges una escuela con grupos por edad?",
        description:
          "Categorías por año de nacimiento, asistencia desde el celular, carnets digitales e informe mensual para las familias. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "categorias-por-edad-segun-el-deporte-olimpico",
      "como-acompanar-a-tu-hijo-deportista-sin-presionarlo",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
    ],
    about: [
      "edad de iniciación deportiva",
      "especialización deportiva temprana",
      "deporte formativo infantil",
      "actividad física en niños",
    ],
    mentions: [
      "Academia Americana de Pediatría",
      "Organización Mundial de la Salud",
      "Comité Olímpico Internacional",
      "Aspen Institute Project Play",
      "FIFA",
      "FIVB",
      "FIBA",
      "ITF",
      "FIG",
      "World Athletics",
      "World Taekwondo",
      "Federación Colombiana de Natación",
      "Federación Colombiana de Patinaje",
      "USASF",
    ],
    faqs: [
      {
        question: "¿A qué edad puede un niño empezar un deporte organizado?",
        answer:
          "Según la Academia Americana de Pediatría, hacia los 6 años la mayoría de los niños ya tiene las habilidades motrices para deportes organizados sencillos. Antes de esa edad conviene el juego activo: correr, nadar, dar botes, lanzar y atrapar, sin competencia.",
      },
      {
        question: "¿A qué edad se debe especializar un niño en un solo deporte?",
        answer:
          "La Academia Americana de Pediatría recomienda aplazar la especialización en un solo deporte hasta los 15 o 16 años y practicar varios al menos hasta la pubertad, para reducir lesiones por sobreuso, estrés y agotamiento. La excepción son unos pocos deportes de madurez temprana, como la gimnasia rítmica, el patinaje artístico sobre hielo y los clavados.",
      },
      {
        question: "¿Desde qué edad puede un niño tomar clases de natación?",
        answer:
          "La Academia Americana de Pediatría indica que muchas familias pueden empezar desde el primer año de vida y que hacia los 4 años la mayoría de los niños está lista para clases. A los 5 o 6 años la mayoría de los que toman clases ya domina el crol.",
      },
      {
        question: "¿Cuántas horas a la semana puede entrenar un niño?",
        answer:
          "La regla práctica de la Academia Americana de Pediatría es no entrenar más horas a la semana que la edad del niño, con uno o dos días de descanso semanal y dos a tres meses al año lejos de su deporte principal.",
      },
      {
        question: "¿Cuánta actividad física necesita un niño según la OMS?",
        answer:
          "De 5 a 17 años, en promedio 60 minutos diarios de actividad moderada a vigorosa, con al menos tres días a la semana de actividad vigorosa y de fortalecimiento. De 1 a 4 años, al menos 180 minutos diarios de actividad de cualquier intensidad.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Cómo elegir academia de natación para niños
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "como-elegir-academia-de-natacion-para-ninos",
    title: "Cómo elegir una academia de natación para niños: seguridad, profesores y la Ley 1209",
    excerpt:
      "Salvavidas además del profesor, grupos pequeños, agua templada, piscina con cerramiento y profundidad marcada. Qué exige la Ley 1209 de 2008 en Colombia, qué recomienda la Academia Americana de Pediatría y qué preguntar en la primera visita.",
    category: "Para familias",
    readTime: "9 min",
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
          "Para elegir una academia de natación para tu hijo revisa cinco cosas, en este orden: que haya un salvavidas certificado vigilando además del profesor que dicta la clase; que el grupo sea pequeño y a los menores de 4 años siempre los tenga un adulto al alcance del brazo; que el agua esté templada si el niño es pequeño; que los profesores tengan formación en enseñanza de natación y en primeros auxilios; y que la piscina cumpla la Ley 1209 de 2008, la norma colombiana de seguridad en piscinas. Y una sexta que lo resume todo: que te dejen ver una clase antes de pagar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Una buena academia te muestra la piscina sin afán, te dice cuántos niños hay por profesor, tiene salvavidas en el borde y no te promete que tu hijo quedará «a prueba de ahogamiento». Las clases enseñan a nadar; no reemplazan la vigilancia de un adulto.",
      },
      { type: "h2", content: "¿A qué edad puede empezar?" },
      {
        type: "p",
        content:
          "La Academia Americana de Pediatría (AAP) dice que muchas familias pueden empezar clases desde el primer año de vida, según qué tan listo esté cada niño, y que hacia los 4 años la mayoría ya está preparada si todavía no ha empezado. A los 5 o 6 años, la mayoría de los niños que toman clases domina el crol. La misma AAP aclara que no hay evidencia de que las clases para bebés menores de un año reduzcan el riesgo de ahogamiento.",
      },
      {
        type: "p",
        content:
          "En Colombia la oferta pública suele arrancar un poco después: los cursos gratuitos de natación del Distrito en Bogotá, en el Complejo Acuático Simón Bolívar, se anunciaron en 2026 para niños de 5 a 13 años.",
      },
      { type: "h2", content: "¿Qué exige la Ley 1209 de 2008 a una piscina?" },
      {
        type: "p",
        content:
          "La Ley 1209 de 2008 fija las normas de seguridad en piscinas de uso colectivo en Colombia. Está reglamentada por el Decreto 554 de 2015, hoy compilado en el Decreto 780 de 2016, y su control le corresponde a cada municipio. Esto es lo que puedes comprobar tú mismo en una visita:",
      },
      {
        type: "table",
        headers: ["Qué mirar", "Qué dice la ley", "Artículo"],
        rows: [
          ["Cerramiento", "Barreras que impiden el acceso directo a la piscina, con entrada controlada por puerta, torniquete u otro medio", "Art. 5 y 11"],
          ["Alarma de agua", "Detector de inmersión o alarma con sonido superior a 80 decibeles, para cuando la piscina no está en servicio", "Art. 6 y 14"],
          ["Profundidad marcada", "Profundidad máxima indicada en letra grande y colores vistosos; mínima, intermedia y máxima señaladas con baldosas de otro color; sin cambios bruscos de nivel", "Art. 11 y 13"],
          ["Elementos de rescate", "Al menos dos flotadores circulares con cuerda y un bastón con gancho en el área", "Art. 11"],
          ["Botiquín y teléfono", "Botiquín de primeros auxilios y teléfono de emergencia en servicio las 24 horas", "Art. 11"],
          ["Drenajes", "Cubiertas antiatrapamiento, sistema que libera el vacío de la bomba y un botón de parada manual visible y señalizado; las piscinas nuevas, con al menos dos drenajes", "Art. 12"],
          ["Salvavidas", "Mínimo una persona de rescate por cada piscina, capacitada en reanimación cardiopulmonar y certificada", "Art. 14"],
          ["Menores de 12 años", "No pueden entrar sin un adulto. Los inscritos en una escuela de natación sí pueden hacerlo bajo la vigilancia de un profesor o instructor", "Art. 11 y 14"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Ley 1209 de 2008 (Diario Oficial 47.050 del 14 de julio de 2008). El artículo 16 prevé multas desde 50 salarios mínimos y cierre temporal para quien incumpla. Este resumen es informativo: para un caso concreto consulta el texto vigente en el Gestor Normativo de Función Pública o pregunta en la secretaría de salud de tu municipio.",
      },
      { type: "h2", content: "¿Quién vigila: el profesor o el salvavidas?" },
      {
        type: "p",
        content:
          "Los dos, y no son la misma persona. El profesor está dentro del agua o en el borde pendiente de la técnica de cuatro o cinco niños; no puede a la vez barrer con la vista toda la piscina. Por eso la AAP recomienda buscar programas con salvavidas de turno que tengan certificación vigente en reanimación cardiopulmonar y primeros auxilios, y la Ley 1209 exige al menos una persona de rescate por piscina.",
      },
      {
        type: "p",
        content:
          "Para los menores de 4 años, la AAP pide además supervisión al tacto: un adulto dentro del agua, a un brazo de distancia, todo el tiempo, también durante la clase. Si la academia ofrece clases de bebés sin acompañante en el agua, pregunta cómo garantizan eso.",
      },
      { type: "h2", content: "¿Qué temperatura y qué profundidad debe tener la piscina?" },
      {
        type: "ul",
        items: [
          "Temperatura: para niños de 3 años o menos, la AAP recomienda agua climatizada entre 87 y 94 grados Fahrenheit, es decir, entre 30,5 y 34,5 °C aproximadamente. Los niños pequeños pierden calor rápido y un niño con frío no aprende. En ciudades frías como Bogotá, pregunta la temperatura del agua y la del recinto.",
          "Profundidad: no encontramos una norma colombiana que fije una profundidad para la enseñanza. Lo que sí exige la ley es que esté marcada y que no haya cambios bruscos. Comprueba que tu hijo pueda apoyarse (de pie, en una plataforma o en un escalón) en la zona donde va a trabajar su grupo.",
          "Limpieza: el agua debe verse transparente hasta el fondo y la academia debe poder decirte cada cuánto mide el cloro y el pH. La AAP también recomienda vestidos de baño ajustados en las piernas para los más pequeños.",
          "Pisos y bordes: antideslizantes y sin baldosas rotas. Camina tú mismo el recorrido del vestier a la piscina.",
        ],
      },
      { type: "h2", content: "¿Cuántos niños por profesor?" },
      {
        type: "p",
        content:
          "No encontramos una norma colombiana que fije un número máximo de niños por profesor, y la AAP tampoco da una cifra: recomienda preguntar cuánta atención individual recibe cada niño. Como referencia externa, el plan modelo de seguridad acuática del Departamento de Salud Pública de Georgia (Estados Unidos), basado en recomendaciones de la asociación de escuelas de natación de ese país y de la YMCA, sugiere un profesor por cada seis niños menores de 6 años y uno por cada ocho de 6 a 17. Tómalo como orientación, no como regla: con principiantes de 4 o 5 años, mientras más pequeño el grupo, mejor.",
      },
      { type: "h2", content: "¿Qué certificaciones pedir?" },
      {
        type: "ul",
        items: [
          "Del profesor: formación en enseñanza de la natación (carrera o curso en deporte, o certificación de un programa reconocido de aprendizaje) y curso vigente de primeros auxilios y reanimación.",
          "Del salvavidas: certificado de salvamento acuático y reanimación cardiopulmonar, como pide el artículo 14 de la Ley 1209.",
          "De la piscina: el concepto sanitario o la certificación de cumplimiento de normas de seguridad que expide la autoridad municipal.",
          "Del programa: niveles escritos, con lo que el niño debe lograr en cada uno. La AAP habla de competencia acuática: volver a la superficie, desplazarse al menos 25 yardas (unos 23 metros) y salir del agua por sus propios medios.",
        ],
      },
      { type: "h2", content: "Preguntas para la primera visita" },
      {
        type: "ol",
        items: [
          "¿Puedo ver una clase completa del grupo donde quedaría mi hijo?",
          "¿Cuántos niños hay por profesor en ese nivel?",
          "¿Hay salvavidas en el borde durante las clases, además del profesor?",
          "¿A qué temperatura está el agua?",
          "¿Qué formación tienen los profesores y cuándo renovaron primeros auxilios?",
          "¿Cómo son los niveles y cada cuánto me cuentan cómo va?",
          "¿Qué pasa si falta a una clase: se repone?",
          "¿Qué incluye el precio y qué se paga aparte (gorro, gafas, carnet, matrícula)?",
          "¿Quién recibe y entrega a los niños, y quién los acompaña en el vestier?",
          "¿Cuál es el protocolo si un niño se siente mal o hay un accidente?",
        ],
      },
      { type: "h2", content: "¿Cuánto cuesta un curso de natación?" },
      {
        type: "p",
        content:
          "Depende sobre todo de quién lo ofrece. Estas son las tarifas de cursos de natación que publicó Blu Radio el 1 de marzo de 2026 para cajas de compensación; no distinguen entre niños y adultos y el artículo no precisa cuántas clases incluye cada valor, así que úsalas solo como orden de magnitud:",
      },
      {
        type: "table",
        headers: ["Caja de compensación", "Categoría A", "Categoría B", "Categoría C", "Categoría D o no afiliado"],
        rows: [
          ["Colsubsidio", "$43.800", "$46.750", "$87.350", "$108.300 (D)"],
          ["Cafam", "$59.000", "$70.500", "$94.500", "$111.800 (D)"],
          ["Comfama", "Desde $34.400", "Desde $51.500", "Desde $100.600", "Desde $110.400 (D)"],
          ["Compensar", "$86.900 a $256.100", "$114.400 a $297.600", "$143.900 a $374.400", "$235.500 a $575.400 (no afiliado)"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Blu Radio, «Cursos de natación para niños y adultos: tarifas en Compensar, Cafam y más cajas», 1 de marzo de 2026. En Compensar el valor cambia según sede, intensidad, horario y nivel. No encontramos tarifas públicas comparables de academias privadas, que suelen informar el precio por WhatsApp; pídelo por escrito y confirma siempre el valor vigente con cada entidad.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Ninguna clase vuelve a un niño inmune al ahogamiento. La AAP insiste en que las clases son una capa de protección entre varias: vigilancia constante de un adulto, cerramiento de la piscina y chaleco salvavidas en aguas abiertas. Desconfía de la academia que te prometa lo contrario.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Este artículo es informativo y no reemplaza la consulta médica. Antes de inscribir a tu hijo, consulta al pediatra, sobre todo si tiene otitis frecuentes, asma, dermatitis, epilepsia o alguna condición que requiera cuidados en el agua, y cuéntaselo a la academia por escrito.",
      },
      { type: "h2", content: "Cómo se ve una academia organizada del lado de la familia" },
      {
        type: "p",
        content:
          "La seguridad en el agua no la da ningún programa de computador. Lo que sí puedes notar en una academia que usa una plataforma como SportMaps (que opera solo en Colombia) es el orden alrededor de la clase: la ficha médica y los contactos de emergencia de tu hijo quedan registrados, pagas la mensualidad desde el celular con PSE, Nequi o tarjeta, llevas su carnet digital con código QR y recibes un informe mensual con la asistencia. Si la academia ni siquiera sabe cuántas clases tomó tu hijo este mes, es una señal sobre cómo maneja lo demás.",
      },
      {
        type: "cta",
        title: "¿Tienes una academia de natación?",
        description:
          "Fichas médicas, grupos por nivel y edad, asistencia con QR, cobros con Wompi y Mercado Pago e informe mensual para las familias. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "a-que-edad-empezar-cada-deporte",
      "cuanto-cuesta-tener-un-hijo-en-una-escuela-deportiva-en-colombia",
      "carnet-digital-deportista",
    ],
    about: [
      "academias de natación para niños",
      "seguridad en piscinas en Colombia",
      "Ley 1209 de 2008",
      "prevención del ahogamiento infantil",
    ],
    mentions: [
      "Academia Americana de Pediatría",
      "Ley 1209 de 2008",
      "Decreto 554 de 2015",
      "IDRD",
      "Compensar",
      "Cafam",
      "Colsubsidio",
      "Comfama",
      "Blu Radio",
    ],
    faqs: [
      {
        question: "¿Qué ley regula la seguridad de las piscinas en Colombia?",
        answer:
          "La Ley 1209 de 2008, reglamentada por el Decreto 554 de 2015 (compilado en el Decreto 780 de 2016). Exige cerramiento, alarma de agua, profundidad marcada, flotadores y bastón de rescate, botiquín, teléfono de emergencia, drenajes con cubierta antiatrapamiento y al menos una persona de rescate certificada por piscina.",
      },
      {
        question: "¿Un niño menor de 12 años puede entrar solo a una piscina en Colombia?",
        answer:
          "No. La Ley 1209 de 2008 prohíbe el acceso de menores de 12 años sin la compañía de un adulto. La misma ley permite que los niños inscritos en escuelas de natación entren bajo la vigilancia de un profesor o instructor.",
      },
      {
        question: "¿A qué temperatura debe estar el agua para clases de natación de niños pequeños?",
        answer:
          "Para niños de 3 años o menos, la Academia Americana de Pediatría recomienda agua climatizada entre 87 y 94 grados Fahrenheit, que equivalen aproximadamente a entre 30,5 y 34,5 grados Celsius.",
      },
      {
        question: "¿Cuántos niños debe haber por profesor en una clase de natación?",
        answer:
          "No encontramos una norma colombiana que lo fije. Como referencia, el plan modelo de seguridad acuática del Departamento de Salud Pública de Georgia (Estados Unidos) sugiere un profesor por cada seis niños menores de 6 años y uno por cada ocho de 6 a 17. Para menores de 4 años, la Academia Americana de Pediatría pide un adulto a un brazo de distancia todo el tiempo.",
      },
      {
        question: "¿Cuánto cuesta un curso de natación en una caja de compensación?",
        answer:
          "Según las tarifas publicadas por Blu Radio el 1 de marzo de 2026, desde $43.800 (Colsubsidio, categoría A) o $59.000 (Cafam, categoría A) hasta $575.400 para no afiliados en Compensar, según caja, categoría, sede e intensidad. Confirma el valor vigente con cada entidad.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Cuánto cuesta tener un hijo en una escuela deportiva
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "cuanto-cuesta-tener-un-hijo-en-una-escuela-deportiva-en-colombia",
    title: "¿Cuánto cuesta tener un hijo en una escuela deportiva en Colombia? Desglose completo 2026",
    excerpt:
      "La mensualidad es solo una parte. Inscripción, uniforme, implementos, torneos, transporte y póliza: qué se paga, cuándo, qué cifras están publicadas y cómo armar el presupuesto del año antes de firmar.",
    category: "Para familias",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Tener un hijo en una escuela deportiva privada de una ciudad grande de Colombia cuesta, solo en matrícula, uniforme y mensualidades, entre $1.700.000 y $2.400.000 al año si tomamos como base los precios que publican las escuelas de fútbol: mensualidades de $150.000 a $200.000 y matrículas desde $100.000. A eso se le suman implementos, torneos, transporte y, a veces, la póliza, que casi nunca vienen incluidos. En una caja de compensación el costo baja mucho para los afiliados, y los programas de las alcaldías son gratuitos. Las cifras varían por ciudad, deporte y escuela: úsalas como referencia y pide siempre el valor por escrito.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Compara el costo del año, no el del mes. Dos escuelas con mensualidades parecidas pueden diferir en $700.000 al año por la matrícula, por cobrar 10 o 12 meses y por lo que incluye el uniforme. Antes de inscribir, pide la lista completa de cobros: inscripción, mensualidad, uniforme, póliza, torneos y vacaciones.",
      },
      { type: "h2", content: "¿Cuáles son los siete rubros que vas a pagar?" },
      {
        type: "table",
        headers: ["Rubro", "Cuándo se paga", "Referencia publicada", "Qué preguntar"],
        rows: [
          ["Inscripción o matrícula", "Una vez al año", "$100.000 en una escuela privada del norte de Bogotá (2026); $300.000 a $470.000 en escuelas de clubes profesionales (2023)", "¿Se cobra cada año? ¿Incluye uniforme o póliza?"],
          ["Mensualidad", "Cada mes, 10 o 12 veces al año", "$150.000 (2 días por semana) a $200.000 (4 días) en escuela privada de fútbol; $160.000 a $315.000 en clubes profesionales (2023)", "¿Cuántos meses se cobran? ¿Diciembre y enero se pagan?"],
          ["Uniforme", "Al entrar y cuando el niño crece", "$90.000 en la misma escuela de Bogotá; $400.000 de indumentaria en una escuela de club profesional (2023)", "¿Qué prendas trae? ¿Es obligatorio comprarlo ahí?"],
          ["Implementos", "Al entrar y según desgaste", "Sin tarifa única: depende del deporte", "¿Qué debo comprar yo y qué pone la escuela?"],
          ["Torneos y festivales", "Por evento", "Sin cifra pública comparable; casi nunca van en la mensualidad", "¿Cuántos torneos hay al año y cuánto costó cada uno el año pasado?"],
          ["Transporte", "Cada entrenamiento", "Depende de tu ciudad y de la distancia", "¿Hay sede más cerca? ¿Hay ruta?"],
          ["Póliza de accidentes", "Una vez al año", "Sin cifra pública comparable; a veces va dentro de la matrícula", "¿Está incluida? ¿Qué cubre y con qué aseguradora?"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente de las cifras: precios públicos recopilados en nuestra guía «¿Cuánto cobra una escuela de fútbol en Colombia en 2026?» (escueladefutbolsanpablo.com, consultado el 14 de octubre de 2026; Las2orillas, 23 de octubre de 2023, para Atlético Nacional, Millonarios y Santa Fe). Los valores de 2023 son los últimos que encontramos publicados; hoy probablemente son más altos.",
      },
      { type: "h2", content: "¿Cuánto es la mensualidad según el tipo de escuela?" },
      {
        type: "p",
        content:
          "El precio depende más de quién está detrás de la escuela que de la ciudad. Estos son los cuatro escalones, con los datos que sí están publicados:",
      },
      {
        type: "table",
        headers: ["Tipo de escuela", "Mensualidad publicada", "Año del dato"],
        rows: [
          ["Programas públicos (IDRD en Bogotá: Escuelas de Mi Barrio y escuelas deportivas)", "Gratis, para niños y jóvenes de 6 a 17 años", "2026"],
          ["Caja de compensación, afiliado categoría A (Comfacauca, fútbol)", "$14.200 a $36.700", "2026"],
          ["Caja de compensación, tarifa particular (Comfacauca, fútbol)", "$79.600 a $206.800", "2026"],
          ["Escuela privada de barrio o sector (fútbol, Bogotá)", "$150.000 a $200.000", "2026"],
          ["Escuela privada (fútbol, Cali, promedio reportado)", "$155.000", "2024"],
          ["Escuela de club profesional (fútbol)", "$160.000 a $315.000", "2023"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: bogota.gov.co (IDRD); comfacauca.com, tarifas Esfoder 2026; informe anual 2024 de la Escuela Carlos Sarmiento Lora; Las2orillas, 23 de octubre de 2023. Si tu familia está afiliada a una caja de compensación con escuela deportiva, casi siempre es la opción más barata con entrenador formado.",
      },
      { type: "h2", content: "¿Cambia mucho el costo según el deporte?" },
      {
        type: "p",
        content:
          "Sí, pero no tanto por la mensualidad como por lo que hay que comprar y por el escenario. Solo encontramos precios publicados y comparables para fútbol y para natación; para los demás deportes preferimos decirte qué rubro suele pesar, sin inventar una cifra.",
      },
      {
        type: "table",
        headers: ["Deporte", "Qué pesa además de la mensualidad", "Cifra publicada que encontramos"],
        rows: [
          ["Fútbol", "Guayos, canilleras, uniforme de competencia e inscripciones a torneos", "Mensualidad de $150.000 a $200.000 en escuela privada de Bogotá (2026)"],
          ["Natación", "Gorro, gafas y vestido de baño; la piscina climatizada encarece la clase", "Cursos en cajas de compensación desde $43.800 (Colsubsidio, categoría A) hasta $575.400 (Compensar, no afiliado), según Blu Radio, 1 de marzo de 2026"],
          ["Gimnasia", "Trusa o uniforme, y las horas de gimnasio especializado", "No encontramos tarifas públicas comparables"],
          ["Patinaje", "Los patines, el casco y las protecciones son la compra grande; pregunta si la escuela presta o alquila para empezar", "No encontramos tarifas públicas comparables"],
          ["Voleibol", "Rodilleras, tenis de cancha y uniforme; torneos de fin de semana", "No encontramos tarifas públicas comparables"],
          ["Baloncesto", "Tenis de cancha y uniforme; inscripciones a torneos", "No encontramos tarifas públicas comparables"],
          ["Tenis", "Raqueta de la talla del niño y pelotas; el alquiler de cancha pesa en la tarifa", "No encontramos tarifas públicas comparables"],
          ["Artes marciales", "Uniforme, protecciones y los exámenes de cambio de cinturón, que suelen cobrarse aparte", "No encontramos tarifas públicas comparables"],
          ["Atletismo", "Tenis para correr; zapatillas de clavos más adelante", "No encontramos tarifas públicas comparables"],
          ["Porrismo", "Uniforme de competencia e inscripciones a campeonatos", "No encontramos tarifas públicas comparables"],
        ],
      },
      { type: "h2", content: "¿En qué se va la plata, según los estudios?" },
      {
        type: "p",
        content:
          "No hay una encuesta colombiana sobre el gasto de las familias en deporte formativo. La referencia más citada es de Estados Unidos: la encuesta de Project Play (Aspen Institute, 2019) encontró que las familias gastaban en promedio 693 dólares al año por niño y por deporte, y que el rubro más alto no era la inscripción sino los viajes (196 dólares), seguidos del equipamiento (144), las clases privadas (134) y las inscripciones (125). Los montos no se pueden trasladar a Colombia, pero el patrón sí sirve de alerta: lo que desordena el presupuesto son los torneos fuera de la ciudad y los implementos, no la mensualidad.",
      },
      { type: "h2", content: "¿Cómo armar el presupuesto del año?" },
      {
        type: "ol",
        items: [
          "Pide por escrito la lista completa de cobros del año, con fechas.",
          "Multiplica la mensualidad por los meses que realmente se cobran (10 o 12).",
          "Suma matrícula, uniforme y póliza si no vienen incluidos.",
          "Pregunta cuántos torneos hubo el año pasado y cuánto costó cada uno, con transporte.",
          "Calcula el transporte: valor de ida y vuelta por el número de entrenamientos del año.",
          "Deja un colchón para reponer implementos: los niños crecen y los guayos no.",
          "Divide el total entre 12 para saber cuánto te pesa de verdad cada mes.",
        ],
      },
      {
        type: "table",
        headers: ["Concepto (ejemplo ilustrativo)", "Escuela A", "Escuela B"],
        rows: [
          ["Matrícula anual", "$100.000", "$350.000 (incluye uniforme y póliza)"],
          ["Uniforme", "$90.000", "Incluido"],
          ["Mensualidad", "$150.000 × 10 meses", "$170.000 × 12 meses"],
          ["Subtotal del año", "$1.690.000", "$2.390.000"],
          ["Equivalente mensual (subtotal ÷ 12)", "Cerca de $141.000", "Cerca de $199.000"],
          ["Torneos, transporte, implementos y póliza", "Por sumar", "Torneos, transporte e implementos por sumar"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: ejemplo ilustrativo construido con valores del rango publicado; no corresponde a dos escuelas reales. Para el transporte, la cuenta es simple: si cada ida y vuelta te cuesta $8.000 y tu hijo entrena dos veces por semana durante 40 semanas, son $640.000 al año (cifra de ejemplo, cámbiala por la tuya). Es un rubro que casi nadie suma y que puede pesar tanto como cuatro mensualidades.",
      },
      { type: "h2", content: "¿Cuánto pesa frente al salario mínimo?" },
      {
        type: "p",
        content:
          "El salario mínimo de 2026 es de $1.750.905 mensuales, más $249.095 de auxilio de transporte. Una mensualidad de $150.000 equivale al 8,6 % de un salario mínimo, y una de $200.000, al 11,4 %. Con dos hijos y sin descuento, la cuenta se duplica: 17,1 % y 22,8 %. Por eso el descuento por hermanos y la tarifa de caja de compensación no son detalles menores.",
      },
      { type: "h2", content: "¿Cómo bajar el costo sin bajar la calidad?" },
      {
        type: "ul",
        items: [
          "Revisa primero tu caja de compensación: la tarifa de afiliado puede ser varias veces menor que la particular.",
          "Mira la oferta pública de tu ciudad. En Bogotá, las escuelas del IDRD son gratuitas, con cupos y horarios limitados.",
          "Pregunta por descuento por hermanos y por pago anticipado, y qué pasa con la plata si el niño se retira a mitad de año.",
          "No compres todo el primer mes: para empezar basta lo básico. El implemento de competencia llega cuando el niño ya decidió que se queda.",
          "Pregunta si la escuela tiene banco de uniformes o intercambio entre familias.",
          "Elige menos días por semana al principio. Dos días bien aprovechados le sirven más a un niño de 7 años que cuatro a regañadientes.",
          "Averigua qué torneos son obligatorios y cuáles opcionales.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Todas las cifras de este artículo son referencias con fecha, no tarifas vigentes. Pocas escuelas publican sus precios y cambian cada año. Antes de inscribir, pide el valor actual por escrito y guarda el mensaje o el contrato.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Sobre la póliza: pregunta si tu hijo queda cubierto por una póliza de accidentes durante entrenamientos y partidos, qué cubre y a qué clínica debes ir. Si la escuela no tiene, revisa qué atención te da la EPS o el seguro estudiantil del colegio antes del primer entrenamiento, no después de la primera caída.",
      },
      { type: "h2", content: "Cómo se ve el cobro del lado de la familia" },
      {
        type: "p",
        content:
          "Buena parte del desorden con la plata no es el monto sino no saber qué se debe ni qué se pagó. En las escuelas que trabajan con SportMaps (que opera solo en Colombia), pagas la mensualidad desde el celular con PSE, Nequi o tarjeta, o envías la foto de la transferencia y el asistente de WhatsApp lee el comprobante para que la escuela lo apruebe. Recibes recordatorios antes del vencimiento, tu hijo tiene carnet digital y cada mes te llega un informe con su asistencia. No hace que el deporte cueste menos, pero sí que sepas en qué va la cuenta.",
      },
      {
        type: "cta",
        title: "¿Tu escuela todavía cobra por chat y capturas?",
        description:
          "Enlace de pago con Wompi y Mercado Pago, comprobantes leídos por IA en WhatsApp y recordatorios automáticos. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes de SportMaps",
      },
    ],
    related: [
      "cuanto-cobra-una-escuela-de-futbol-en-colombia-2026",
      "como-pagar-mensualidad-escuela-deportiva-desde-el-celular",
      "como-elegir-academia-de-natacion-para-ninos",
    ],
    about: [
      "costo de las escuelas deportivas en Colombia",
      "mensualidad de escuelas de formación deportiva",
      "presupuesto familiar para deporte infantil",
      "cajas de compensación familiar",
    ],
    mentions: [
      "IDRD",
      "Comfacauca",
      "Compensar",
      "Colsubsidio",
      "Aspen Institute Project Play",
      "Atlético Nacional",
      "Millonarios",
      "Independiente Santa Fe",
      "Wompi",
      "Mercado Pago",
      "Nequi",
      "PSE",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta al año tener un hijo en una escuela de fútbol privada en Colombia?",
        answer:
          "Con los precios publicados en 2026 (mensualidad de $150.000 a $200.000, matrícula desde $100.000 y uniforme de $90.000), un ejemplo ilustrativo da entre $1.690.000 y $2.390.000 al año solo en matrícula, uniforme y mensualidades. Torneos, transporte, implementos y póliza se suman aparte.",
      },
      {
        question: "¿Qué gastos no incluye la mensualidad de una escuela deportiva?",
        answer:
          "Casi nunca incluye el uniforme de competencia, los implementos personales, la póliza de accidentes, la inscripción a torneos externos ni los viajes. Muchas escuelas cobran además una matrícula anual y un curso de vacaciones aparte.",
      },
      {
        question: "¿Cuál es la opción más barata para que un niño haga deporte en Colombia?",
        answer:
          "Los programas públicos de las alcaldías, como las escuelas del IDRD en Bogotá, son gratuitos. Después vienen las cajas de compensación para afiliados de categoría A: en Comfacauca, por ejemplo, la mensualidad de fútbol va de $14.200 a $36.700 en 2026.",
      },
      {
        question: "¿Cuánto representa la mensualidad frente al salario mínimo de 2026?",
        answer:
          "Una mensualidad de $150.000 equivale al 8,6 % del salario mínimo de 2026 ($1.750.905) y una de $200.000, al 11,4 %. Con dos hijos sin descuento por hermanos, el peso sube a 17,1 % y 22,8 %.",
      },
      {
        question: "¿La póliza de accidentes está incluida en la escuela deportiva?",
        answer:
          "Depende de la escuela. Algunas la incluyen en la matrícula, sobre todo las de clubes profesionales, y otras la cobran aparte o no la tienen. Pregunta antes de inscribir qué cubre, con qué aseguradora y a qué clínica debes acudir.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Cómo acompañar a tu hijo deportista sin presionarlo
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "como-acompanar-a-tu-hijo-deportista-sin-presionarlo",
    title: "Cómo acompañar a tu hijo deportista sin presionarlo: tribuna, camino a casa y señales de agotamiento",
    excerpt:
      "Animar sin dirigir, hablar del esfuerzo y no del marcador, dejarle la táctica al entrenador y reconocer a tiempo el agotamiento. Una guía para papás y acudientes con respaldo de la Academia Americana de Pediatría, Project Play, UNICEF y el COI.",
    category: "Para familias",
    readTime: "9 min",
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
          "Acompañar a tu hijo deportista sin presionarlo se resume en cuatro hábitos: en la tribuna, anima y no des instrucciones; después del partido, habla del esfuerzo y de cómo se sintió, no del marcador; deja la táctica al entrenador y conversa con él en privado; y aprende a reconocer las señales de agotamiento antes de que tu hijo te diga que no quiere volver. La Academia Americana de Pediatría (AAP) lo plantea así: el éxito en el deporte infantil se mide por la participación y el esfuerzo, no por el resultado.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Tu papel no es ser el segundo entrenador sino el adulto que hace que valga la pena volver el sábado siguiente. Celebra el esfuerzo, pregunta más de lo que opinas, respeta al entrenador y al árbitro delante de tu hijo y vigila el descanso. Si el deporte deja de ser divertido, lo más probable es que lo deje.",
      },
      { type: "h2", content: "¿Por qué importa tanto lo que haces tú?" },
      {
        type: "p",
        content:
          "Porque la presión de los adultos es una de las razones por las que los niños se retiran. La encuesta de Project Play (Aspen Institute, 2019) encontró que el niño promedio deja un deporte hacia los 11 años y que el motivo más frecuente, con 36 %, es que perdió el interés o dejó de disfrutarlo. La revisión de Crane y Temple (2015), que analizó 43 estudios, ubicó la presión de padres y entrenadores entre los factores de abandono, por encima del costo o los horarios.",
      },
      {
        type: "p",
        content:
          "La AAP lo recoge en su informe clínico de 2024 sobre lesiones por sobreuso, sobreentrenamiento y agotamiento. Uno de sus autores, el doctor Joel Brenner, advierte que algunos jóvenes sienten presión de padres, entrenadores y otras personas para medir el éxito solo por el rendimiento. UNICEF, en sus Principios sobre los derechos de los niños en el deporte (2018), dedica el décimo a las familias: apoyar el crecimiento sano de los hijos a través del deporte, como sus primeros protectores.",
      },
      { type: "h2", content: "¿Cómo comportarte en la tribuna?" },
      {
        type: "table",
        headers: ["Haz esto", "Evita esto"],
        rows: [
          ["Anima a todo el equipo, no solo a tu hijo", "Gritar instrucciones («¡pásala!», «¡sube!»): el niño no puede oír a dos entrenadores a la vez"],
          ["Aplaude el esfuerzo y las buenas jugadas de los dos equipos", "Discutir con el árbitro o juez, por más clara que te parezca la falta"],
          ["Quédate tranquilo cuando se equivoque", "Hacer gestos de decepción: los ve aunque creas que no"],
          ["Deja que el entrenador decida quién juega y dónde", "Reclamar minutos a gritos desde la baranda"],
          ["Saluda a las otras familias, también a las del rival", "Criticar a otros niños, en voz alta o en el grupo de WhatsApp"],
          ["Guarda el celular un rato y mira el partido", "Grabar cada jugada para analizarla en la casa"],
        ],
      },
      {
        type: "p",
        content:
          "La Carta de Derechos de los Niños en el Deporte de Project Play (2021) incluye el derecho a ser tratados con dignidad, en ambientes que promuevan el juego limpio y el respeto por rivales, jueces y el deporte mismo. La tribuna hace parte de ese ambiente. Y hay un dato de la AAP que conviene recordar cuando provoque reclamar: la mayoría de los niños prefiere jugar más en un equipo que pierde que jugar menos en uno que gana.",
      },
      { type: "h2", content: "¿Qué decir después del partido?" },
      {
        type: "p",
        content:
          "El trayecto a la casa es el momento en que más fácil se daña un buen sábado. Tu hijo ya sabe si jugó bien o mal; lo que necesita saber es que tu cariño no depende de eso. La AAP recomienda celebrar el esfuerzo y no el resultado, y buscar maneras de valorar todo lo que hace, no solo lo que logra. Project Play sugiere algo todavía más sencillo: preguntarle qué quiere él de su deporte.",
      },
      {
        type: "table",
        headers: ["En vez de…", "Prueba con…"],
        rows: [
          ["«¿Por qué no pateaste al arco?»", "«¿Qué fue lo que más te gustó hoy?»"],
          ["«Perdieron por culpa del arquero»", "«Vi que corriste hasta el final»"],
          ["«El profe no sabe, te puso mal»", "«¿Qué les dijo el profe al terminar?»"],
          ["«Si hubieras entrenado más…»", "«¿Hay algo que quieras practicar esta semana?»"],
          ["El análisis completo, jugada por jugada", "«¿Qué quieres comer?» y dejar que él saque el tema"],
          ["«¿Ganaron?», como primera pregunta", "«¿Cómo te fue? ¿La pasaste bien?»"],
        ],
      },
      {
        type: "p",
        content:
          "Una regla práctica: si quieres hacerle una corrección, espera a que él pregunte o déjala para el día siguiente. Y si perdió y está bravo o triste, no hace falta arreglarlo; basta con acompañarlo.",
      },
      { type: "h2", content: "¿Cómo llevar la relación con el entrenador?" },
      {
        type: "ul",
        items: [
          "Al principio de la temporada, pregunta cómo trabaja: objetivos del grupo, criterio para repartir minutos y canal para hablar con él.",
          "Cuéntale lo que necesita saber: lesiones, alergias, medicamentos, una mala semana en el colegio o en la casa.",
          "No le hables del partido en caliente. Espera un día y pide un espacio corto, lejos de los niños.",
          "Habla de tu hijo, no de los hijos de los demás.",
          "No lo contradigas delante de tu hijo. Si no estás de acuerdo, dilo en privado.",
          "No des indicaciones técnicas distintas en la casa: lo confunden.",
          "Agradece. Casi nadie lo hace.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Respetar al entrenador no es callar ante el maltrato. Si algo te inquieta de la relación de tu hijo con el entrenador u otro adulto de la escuela, o si tu hijo te cuenta que lo humillan, lo gritan o lo tocan de forma indebida, actúa de inmediato: habla con la dirección de la escuela y busca orientación. La AAP pide a las familias hablar apenas vean o escuchen algo que sugiera abuso.",
      },
      { type: "h2", content: "¿Cuáles son las señales de agotamiento?" },
      {
        type: "p",
        content:
          "El agotamiento (burnout) aparece cuando el estrés del deporte supera por mucho tiempo al descanso y al disfrute. La AAP señala como factores de riesgo el exceso de entrenamiento, la agenda sobrecargada, jugar en varios equipos a la vez y entrenar todo el año, y da una alerta clara: que el niño ya no tenga tiempo de juego libre ni de otras actividades. Estas son las señales que describe:",
      },
      {
        type: "ul",
        items: [
          "Ya no se divierte ni siente que logra algo en el entrenamiento o en el partido.",
          "Pierde el entusiasmo o empieza a evitar algo que antes le encantaba.",
          "Cansancio físico o mental que no se quita con una noche de sueño.",
          "Duerme mal o cambia de ánimo sin razón aparente.",
          "Dolores que persisten o empeoran.",
          "En las niñas y adolescentes, ausencia de la menstruación.",
          "Cambios en la relación con la comida, sobre todo en deportes donde se habla mucho del peso o del cuerpo.",
        ],
      },
      {
        type: "table",
        headers: ["Para prevenirlo", "Recomendación de la AAP"],
        rows: [
          ["Descanso semanal", "Uno o dos días libres a la semana"],
          ["Descanso anual", "Dos a tres meses al año lejos de su deporte principal, repartibles en bloques de un mes"],
          ["Carga", "No entrenar más horas a la semana que la edad del niño"],
          ["Variedad", "Practicar más de un deporte antes de la pubertad"],
          ["Lo básico", "Dormir bien y comer bien, con hierro, calcio y vitamina D suficientes"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: AAP, «Too Much, Too Soon: Overtraining Can Keep Young Athletes Off the Field» (HealthyChildren.org, actualizado en julio de 2024) e informe clínico «Overuse Injuries, Overtraining, and Burnout in Young Athletes» (Pediatrics, 2024). El consenso del Comité Olímpico Internacional sobre desarrollo deportivo juvenil (2015) coincide: un desarrollo variado y equilibrado, con la salud y la diversión en el centro, es la mejor base para que un deportista dure.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Este artículo es informativo y no reemplaza la consulta médica. Si tu hijo tiene dolor que no cede, cansancio persistente, cambios fuertes de ánimo o del sueño, o señales de problemas con la alimentación, consulta al pediatra. Si hace falta, él te orientará hacia medicina del deporte o salud mental.",
      },
      { type: "h2", content: "¿Y si de verdad tiene talento?" },
      {
        type: "p",
        content:
          "Entonces con más razón hay que cuidarlo. La AAP sugiere darle a los hijos una visión equilibrada de sus metas. En Estados Unidos, de donde son sus cifras, solo entre el 3 % y el 11 % de los deportistas de bachillerato llega a competir en la universidad y cerca del 1 % recibe una beca deportiva. No tenemos el dato equivalente para Colombia, pero la lógica es la misma: muy pocos vivirán del deporte, y casi todos pueden ganar salud, amigos y disciplina si no se queman en el camino. Apóyalo en serio, y deja que el sueño sea de él.",
      },
      { type: "h2", content: "Los ocho derechos que conviene tener presentes" },
      {
        type: "p",
        content:
          "La Carta de Derechos de los Niños en el Deporte de Project Play resume qué debería garantizar cualquier escuela, y sirve de lista de chequeo para una familia:",
      },
      {
        type: "ol",
        items: [
          "A practicar deporte.",
          "A ambientes seguros y sanos, sin abuso, novatadas ni violencia.",
          "A líderes de programa calificados.",
          "A un juego adecuado para su etapa de desarrollo.",
          "A participar en la planeación y el desarrollo de sus actividades.",
          "A una oportunidad igual de crecer como persona.",
          "A ser tratado con dignidad.",
          "A divertirse.",
        ],
      },
      { type: "h2", content: "Cómo ayuda tener información y no solo impresiones" },
      {
        type: "p",
        content:
          "Mucha presión nace de no saber cómo va el niño: uno llena el vacío con el marcador del sábado. En las escuelas que trabajan con SportMaps (que opera solo en Colombia), la familia recibe un informe mensual con la asistencia, la nota del entrenador, lo que mejoró y en qué se va a trabajar, sin compararlo con sus compañeros. Además pagas la mensualidad desde el celular y llevas su carnet digital. No reemplaza la conversación con el entrenador ni con tu hijo, pero te da algo mejor de qué hablar que los goles.",
      },
      {
        type: "cta",
        title: "¿Tu escuela quiere contarles más a las familias?",
        description:
          "Informe mensual del deportista con asistencia y nota del entrenador, carnets digitales y pagos desde el celular. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "por-que-se-retiran-los-ninos-del-deporte",
      "informe-mensual-del-deportista-para-padres",
      "a-que-edad-empezar-cada-deporte",
    ],
    about: [
      "padres en el deporte formativo",
      "presión deportiva en niños",
      "agotamiento y sobreentrenamiento en deportistas jóvenes",
      "derechos de los niños en el deporte",
    ],
    mentions: [
      "Academia Americana de Pediatría",
      "Aspen Institute Project Play",
      "UNICEF",
      "Comité Olímpico Internacional",
      "Joel Brenner",
      "Crane y Temple",
    ],
    faqs: [
      {
        question: "¿Qué debo decirle a mi hijo después de un partido?",
        answer:
          "Habla del esfuerzo y de cómo se sintió, no del marcador. La Academia Americana de Pediatría recomienda celebrar el esfuerzo y no el resultado. Preguntas como «¿qué fue lo que más te gustó hoy?» funcionan mejor que el análisis de las jugadas; las correcciones pueden esperar a que él pregunte.",
      },
      {
        question: "¿Cómo debe comportarse un papá en la tribuna?",
        answer:
          "Animando a todo el equipo, sin dar instrucciones técnicas, sin discutir con el árbitro y sin criticar a otros niños. El niño no puede atender a dos entrenadores a la vez, y la presión de los adultos es uno de los factores de retiro que identifican los estudios.",
      },
      {
        question: "¿Cuáles son las señales de agotamiento en un niño deportista?",
        answer:
          "Según la Academia Americana de Pediatría: pérdida de la diversión y del entusiasmo, cansancio físico o mental persistente, problemas de sueño, cambios de ánimo, dolores que no ceden y, en las niñas, ausencia de la menstruación. Una alerta clara es que ya no tenga tiempo de juego libre.",
      },
      {
        question: "¿Cuánto descanso necesita un niño que entrena un deporte?",
        answer:
          "La Academia Americana de Pediatría recomienda uno o dos días libres a la semana, dos a tres meses al año lejos de su deporte principal (repartibles en bloques de un mes) y no entrenar más horas a la semana que la edad del niño.",
      },
      {
        question: "¿Cómo hablar con el entrenador de mi hijo?",
        answer:
          "En privado, con un día de distancia del partido y sobre tu hijo, no sobre los demás niños. Pregunta al inicio de la temporada cómo reparte los minutos y por qué canal prefiere que le escribas. Si lo que ves sugiere maltrato o abuso, acude de inmediato a la dirección de la escuela.",
      },
    ],
  },
];
