import type { BlogPost } from "../blog-posts";

export const deportes2Posts: BlogPost[] = [
  {
    slug: "software-escuelas-de-futbol-sala-futsal",
    title: "Software para escuelas de fútbol sala y futsal en Colombia: coliseo, categorías y cobros",
    excerpt:
      "Futsal FIFA o microfútbol AMF, categorías sub-13 a sub-21 de Difútbol, horarios de coliseo que se pagan por hora y planteles de 12. Qué necesita una escuela de fútbol sala y cómo se organiza en SportMaps.",
    category: "Por deporte",
    readTime: "8 min",
    date: "11 Oct 2026",
    isoDate: "2026-10-11",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Una escuela de fútbol sala en Colombia necesita un software que entienda tres cosas que no tiene el fútbol de cancha grande: entrena en coliseos que se alquilan por hora (cada turno cuesta y no se puede desperdiciar), maneja planteles pequeños de 10 a 14 jugadores por equipo con rotación constante, y convive con dos reglamentos distintos, el futsal de la FIFA y el microfútbol o fútbol de salón de la AMF. Lo demás, cobrar mensualidades, tomar asistencia y avisar a las familias, es igual que en cualquier escuela, pero con menos margen de error porque el grupo es chico y cada alumno que se va pesa más.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Define primero si tu escuela juega futsal FIFA, microfútbol AMF o ambos, porque cambia el torneo y el reglamento. Luego organiza grupos por año de nacimiento con cupos ajustados al turno de coliseo y cobra mensualidad e inscripción por separado. SportMaps cubre cobros, asistencia y avisos, con el asistente de WhatsApp gratis en todos los planes.",
      },
      { type: "h2", content: "Futsal y microfútbol: dos deportes con el mismo apodo" },
      {
        type: "p",
        content:
          "En Colombia se le dice \"micro\" a casi todo lo que se juega en un coliseo con cinco por lado, pero institucionalmente hay dos caminos. El futsal reconocido por la FIFA lo organiza la Federación Colombiana de Fútbol (FCF), que maneja la liga profesional; el fútbol de salón, con balón más pesado y reglas propias, lo rige la Asociación Mundial de Futsal (AMF) y en Colombia lo representa Fecolfutsal. Colombia ganó en casa el Mundial AMF de 2011, con sedes en Bello, Bogotá, Bucaramanga y Villavicencio, venciendo 8-2 a Paraguay en la final.",
      },
      {
        type: "p",
        content:
          "Para una escuela formativa la diferencia es práctica: el balón, el reglamento de faltas y los torneos a los que puedes inscribir a tus equipos no son los mismos. Los Juegos Intercolegiados, de hecho, tienen las dos modalidades por separado: en la final nacional de 2026 aparecen fútbol de salón, fútbol sala y minifútbol sala como deportes distintos.",
      },
      {
        type: "table",
        headers: ["Dato", "Detalle", "Fuente"],
        rows: [
          ["Liga profesional de futsal (FIFA)", "Liga BetPlay Futsal 2026, organizada por la FCF: 32 clubes en 4 grupos de 8, del 8 de mayo al 6 de diciembre; el campeón va a la Copa Libertadores de Futsal 2027", "FCF, reseñado en Wikipedia \"Liga Colombiana de Fútbol Sala 2026\""],
          ["Fútbol de salón (AMF)", "Colombia, campeona del Mundial AMF 2011 en casa (8-2 a Paraguay en la final)", "Wikipedia, \"2011 AMF Futsal Men's World Cup\""],
          ["Categorías aficionadas Difútbol 2026", "Futsal y futplaya masculino y femenino: sub-13, sub-15, sub-17, sub-21 y libre; eventos desde el 1 de julio de 2026", "Difútbol, Reglamento Interclubes 2026"],
          ["Escolar", "Final nacional de Intercolegiados 2026 en Bogotá, del 13 al 30 de noviembre, con fútbol de salón, fútbol sala y minifútbol sala", "Alcaldía de Bogotá, boletín de 2026"],
        ],
      },
      { type: "h2", content: "Cómo se arman las categorías en una escuela de fútbol sala" },
      {
        type: "p",
        content:
          "Difútbol (la División Aficionada del Fútbol Colombiano) agrupa por año de nacimiento con la fórmula \"sub-N\". En su reglamento 2026, por ejemplo, la sub-13 de fútbol admite jugadores nacidos a partir del 1 de enero de 2013 y la sub-15 a partir del 1 de enero de 2011. Para futsal, la misma resolución fija las categorías sub-13, sub-15, sub-17, sub-21 y libre; los años exactos de cada torneo salen en su convocatoria, así que revísala cada temporada antes de mover a los niños de grupo.",
      },
      {
        type: "p",
        content:
          "Dentro de la escuela conviene ir un paso más fino que la liga. Un turno de coliseo de una hora no da para 30 niños: en fútbol sala, con cancha más chica y cinco por lado, un grupo de 12 a 16 es el techo razonable para que todos toquen balón. Por eso muchas escuelas tienen dos grupos por categoría (por ejemplo, sub-11 A y sub-11 B) en turnos distintos.",
      },
      {
        type: "ul",
        items: [
          "Crea la categoría por años de nacimiento (sub-9, sub-11, sub-13…) y dentro de ella los equipos o grupos según el turno de coliseo.",
          "Si un niño entrena con su grupo y además juega torneo con la categoría de arriba, déjalo en los dos equipos en vez de duplicar su ficha.",
          "Separa las ramas femenina y masculina desde sub-13 si vas a inscribir equipos en torneos de Difútbol, que las maneja por separado.",
          "Marca en la ficha si el niño juega futsal FIFA, fútbol de salón o ambos, para saber a quién inscribir en cada torneo.",
        ],
      },
      { type: "h2", content: "El problema de fondo: el coliseo cuesta por hora" },
      {
        type: "p",
        content:
          "La escuela de fútbol en cancha abierta muchas veces usa un espacio público o un convenio con un colegio. El fútbol sala casi siempre paga coliseo, y ese costo fijo se paga aunque vengan cinco niños. Ahí la asistencia deja de ser un trámite: si un grupo baja de diez asistentes promedio, el turno empieza a perder plata.",
      },
      {
        type: "table",
        headers: ["Ejemplo ilustrativo", "Grupo con 14 inscritos", "Grupo con 8 inscritos"],
        rows: [
          ["Mensualidad por niño", "$120.000", "$120.000"],
          ["Ingreso mensual del grupo", "$1.680.000", "$960.000"],
          ["Coliseo: 3 horas por semana a $80.000 la hora (12 h/mes)", "$960.000", "$960.000"],
          ["Queda para entrenador y operación", "$720.000", "$0"],
        ],
      },
      {
        type: "p",
        content:
          "Las cifras de la tabla son un ejemplo para hacer la cuenta, no tarifas de mercado: pon las tuyas. La lección sí es general: en fútbol sala el tamaño del grupo define si el turno es viable, y eso solo lo ves si tienes la asistencia y los pagos de cada grupo en el mismo lugar.",
      },
      {
        type: "p",
        content:
          "En SportMaps la asistencia se toma desde el celular del profe, a mano o escaneando el QR del carné digital de cada niño, y queda asociada al equipo. Si además tienes instalaciones propias, el módulo de reservas te deja publicar tus canchas y recibir solicitudes por enlace, útil para alquilar el coliseo en las horas que tu escuela no lo usa.",
      },
      { type: "h2", content: "Cobros: mensualidad, inscripción y torneos" },
      {
        type: "p",
        content:
          "La estructura habitual es la misma de cualquier escuela, con un matiz: los torneos de fútbol sala suelen ser cortos y frecuentes (festivales de un fin de semana, interclubes por fechas), así que se acumulan cobros pequeños de inscripción a torneo. Si los mezclas con la mensualidad, el papá no entiende qué está pagando.",
      },
      {
        type: "ul",
        items: [
          "Inscripción a la escuela: un cobro único al entrar o al renovar la temporada.",
          "Mensualidad: generada automáticamente por período para cada niño activo, con recordatorios por correo y WhatsApp y enlace de pago que se abre sin iniciar sesión.",
          "Torneos: un cobro puntual por torneo, solo a los convocados.",
          "Uniforme y balón: catálogo de artículos que se suma al cobro de la mensualidad, o tienda en línea si quieres vender con cupones (adicional de $49.000 al mes, incluida en Escuela Elite).",
          "Hermanos: el descuento por hermanos se configura una vez y se aplica solo.",
        ],
      },
      {
        type: "p",
        content:
          "Las familias pagan con Wompi o Mercado Pago (PSE, Nequi, tarjeta, Bancolombia) y el dinero llega a la cuenta de la escuela. Si prefieren transferir y mandar foto del comprobante por WhatsApp, el asistente lee monto y referencia, lo cruza con el cobro pendiente y lo deja listo para que apruebes con un toque. La mora no da de baja al niño: tú decides si aplicas recargo.",
      },
      { type: "h2", content: "Lo que el entrenador de fútbol sala usa en la semana" },
      {
        type: "ul",
        items: [
          "Lista del grupo y asistencia por QR en el celular antes de que suene el pito.",
          "Planificación por mesociclos y sesiones: en un deporte de rotación constante ayuda a repartir carga entre semanas de torneo y semanas de base.",
          "Evaluaciones con métricas propias: por ejemplo, conducción en espacio reducido (1 a 5), pase con pierna no dominante (1 a 5), test de 20 metros en segundos.",
          "Registro de partidos para ver quién jugó y cuánto, algo sensible en planteles cortos.",
          "Pizarra táctica: hoy es de fútbol (2D, con jugadas, alineaciones, ejercicios y biblioteca). Sirve para explicar movimientos con cinco jugadores, pero la cancha que dibuja es la de fútbol; una cancha específica de futsal está en camino.",
        ],
      },
      { type: "h2", content: "Paso a paso para montar tu escuela de fútbol sala" },
      {
        type: "ol",
        items: [
          "Decide la modalidad (futsal FIFA, microfútbol AMF o ambas) y en qué torneos vas a participar este año.",
          "Crea la escuela y una sede por cada coliseo donde entrenas.",
          "Crea las categorías por año de nacimiento y los grupos según los turnos de coliseo, con cupo máximo.",
          "Configura inscripción, mensualidad y, si aplica, descuento por hermanos.",
          "Comparte el QR o el enlace de inscripción con las familias; cada una llena la ficha del niño y queda vinculada como acudiente.",
          "Asigna profes a sus grupos (los entrenadores y el staff no tienen límite en ningún plan).",
          "Conecta Wompi o Mercado Pago y el número de WhatsApp de la escuela con Meta.",
          "Revisa cada mes la asistencia promedio por grupo antes de renovar el alquiler del coliseo.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no lo necesitas todavía: si tienes un solo grupo de 10 niños, el coliseo te lo presta el colegio y cobras en efectivo, una lista en papel funciona. El plan Free Start ($0, hasta 20 alumnos) existe justamente para cuando quieras dar el paso sin pagar.",
      },
      { type: "h2", content: "Qué plan te sirve" },
      {
        type: "table",
        headers: ["Escuela de fútbol sala", "Plan", "Mensual", "Pagando anual (por mes)"],
        rows: [
          ["1 coliseo, 1 o 2 grupos (hasta 20 niños)", "Free Start", "$0", "—"],
          ["3 o 4 grupos (hasta 50 niños)", "Escuela Start", "$69.000", "$59.000"],
          ["Varias categorías y ramas (hasta 120)", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Dos o más coliseos (hasta 300)", "Escuela Pro", "$159.000", "$139.000"],
        ],
      },
      {
        type: "cta",
        title: "Organiza tu escuela de fútbol sala",
        description:
          "Grupos por turno de coliseo, cobros con PSE y Nequi, asistencia por QR y avisos a las familias. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "software-escuelas-de-futbol-colombia",
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "control-de-asistencia-con-qr-y-torniquetes",
    ],
    about: [
      "fútbol sala y futsal",
      "microfútbol AMF",
      "escuelas deportivas formativas",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Fútbol", "Difútbol", "Fecolfutsal", "AMF", "Liga BetPlay Futsal", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre futsal y microfútbol en Colombia?",
        answer:
          "El futsal es la modalidad reconocida por la FIFA y en Colombia la organiza la Federación Colombiana de Fútbol, con la Liga BetPlay Futsal. El microfútbol o fútbol de salón se juega con reglas y balón de la AMF y lo representa Fecolfutsal. Los Intercolegiados tienen las dos como deportes separados.",
      },
      {
        question: "¿Qué categorías tiene el futsal aficionado en Colombia?",
        answer:
          "En el reglamento interclubes 2026 de Difútbol, el futsal masculino y femenino tiene categorías sub-13, sub-15, sub-17, sub-21 y libre. Se agrupa por año de nacimiento, y los años exactos salen en la convocatoria de cada torneo.",
      },
      {
        question: "¿Cuántos niños debe tener un grupo de fútbol sala?",
        answer:
          "Con cinco por lado y una cancha pequeña, entre 12 y 16 niños por turno permite que todos jueguen. Por encima de eso conviene abrir un segundo grupo en otro horario, siempre que el alquiler del coliseo lo justifique.",
      },
      {
        question: "¿SportMaps tiene pizarra táctica para futsal?",
        answer:
          "Hoy la pizarra táctica de SportMaps es de fútbol en 2D, con jugadas, alineaciones, ejercicios y biblioteca. Se puede usar para explicar movimientos de cinco jugadores, pero la cancha específica de futsal todavía está en camino.",
      },
      {
        question: "¿Cómo cobro la mensualidad de una escuela de microfútbol?",
        answer:
          "Con cobros automáticos por período y un enlace de pago que la familia abre desde WhatsApp o correo, pagando por PSE, Nequi o tarjeta con Wompi o Mercado Pago. Si el papá transfiere, el asistente de WhatsApp lee el comprobante y lo deja listo para que la escuela lo apruebe.",
      },
    ],
  },
  {
    slug: "software-clubes-de-atletismo",
    title: "Software para clubes de atletismo: marcas, categorías sub-18 y sub-20 y cobros",
    excerpt:
      "Cómo organizar un club de atletismo en Colombia: categorías de World Athletics por edad al 31 de diciembre, nacionales sub-18 y sub-23 de la Federación Colombiana de Atletismo, registro de marcas y mensualidades.",
    category: "Por deporte",
    readTime: "7 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Un club de atletismo necesita un software que guarde marcas, no goles: segundos en 100 metros, metros en salto largo, minutos en 3.000. Además tiene que agrupar a los atletas por la categoría oficial de su año de nacimiento (sub-16, sub-18, sub-20, sub-23), separar velocistas, fondistas, saltadores y lanzadores, que entrenan cosas distintas en la misma pista, y cobrar mensualidades e inscripciones a competencias sin hojas de cálculo. Si la herramienta solo sirve para cobrar, el entrenador va a seguir con su cuaderno de marcas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Organiza el club por categoría oficial y por grupo de pruebas, registra las marcas como métricas con unidad (segundos, metros) y separa la mensualidad de las inscripciones a competencias. SportMaps hace las tres cosas y suma asistencia por QR, informe mensual para las familias y WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el atletismo en Colombia" },
      {
        type: "p",
        content:
          "La entidad rectora es la Federación Colombiana de Atletismo, que reúne a las ligas departamentales; los clubes se afilian a su liga para poder inscribir atletas en los campeonatos nacionales. Las categorías juveniles siguen la norma de World Athletics: la edad que cuenta es la que el atleta tiene al 31 de diciembre del año de la competencia. Así, un sub-18 es quien tiene 16 o 17 años a esa fecha, y un sub-20 quien tiene 18 o 19. Eso evita que un atleta cambie de categoría en mitad de la temporada.",
      },
      {
        type: "table",
        headers: ["Categoría", "Edad al 31 de diciembre del año de competencia", "Nota"],
        rows: [
          ["Sub-16", "14 y 15 años", "Usada en campeonatos nacionales y regionales juveniles"],
          ["Sub-18", "16 y 17 años", "Categoría oficial de World Athletics (U18)"],
          ["Sub-20", "18 y 19 años", "Categoría oficial de World Athletics (U20)"],
          ["Sub-23", "20 a 22 años", "Usada en campeonatos nacionales y sudamericanos"],
          ["Mayores", "Sin límite superior", "Categoría absoluta"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: World Athletics, Reglas Técnicas (definición de U18 y U20 por edad al 31 de diciembre); las bandas sub-16 y sub-23 se usan en convocatorias nacionales y regionales. Confirma siempre los años de nacimiento en la circular de cada campeonato.",
      },
      { type: "h3", content: "Los eventos que marcan la temporada" },
      {
        type: "ul",
        items: [
          "Campeonato Nacional Sub-18: en 2025 se corrió del 27 al 29 de junio en la pista del Centro de Alto Rendimiento de Bogotá, tras trasladarse desde Montería (circular 013 de la Federación). Reunió a más de 300 atletas y fue clasificatorio al Iberoamericano de la categoría en Asunción.",
          "Campeonato Nacional Sub-23: en 2025, del 25 al 27 de julio en el estadio Pedro Grajales de Cali, como evaluativo para los Panamericanos Junior y los Bolivarianos.",
          "Juegos Intercolegiados: el atletismo está entre los deportes individuales de la final nacional de 2026, en Bogotá del 13 al 30 de noviembre.",
          "Juegos Nacionales 2027: Córdoba y Sucre son la sede de los XXIII Juegos Nacionales y Paranacionales, una meta concreta para los atletas que hoy están en sub-18.",
        ],
      },
      {
        type: "p",
        content:
          "Fuentes: Running Colombia (circular 013, junio de 2025), Alcaldía de Bogotá (Nacional Sub-18, julio de 2025), Alcaldía de Bogotá (Intercolegiados 2026) y Radio Nacional de Colombia (sede de los Juegos Nacionales 2027). Cali, además, fue sede del Mundial Sub-20 de World Athletics en 2022.",
      },
      { type: "h2", content: "Lo que hace distinto a un club de atletismo" },
      {
        type: "p",
        content:
          "En la misma pista, a la misma hora, el velocista hace salidas de taco, el fondista hace series de 400 y el lanzador está en el foso de bala. Son grupos de entrenamiento distintos con un mismo pago. Por eso conviene que el software te deje cruzar dos dimensiones: la categoría oficial (para competir) y el grupo de pruebas (para entrenar).",
      },
      {
        type: "table",
        headers: ["Grupo de pruebas", "Marcas que conviene registrar", "Unidad"],
        rows: [
          ["Velocidad", "60 m, 100 m, 200 m; tiempo de reacción si lo mides", "Segundos"],
          ["Medio fondo y fondo", "800 m, 1.500 m, 3.000 m; test de 12 minutos", "Minutos y segundos / metros"],
          ["Saltos", "Largo, triple, alto, pértiga", "Metros"],
          ["Lanzamientos", "Bala, disco, jabalina (con el peso del implemento de la categoría)", "Metros"],
          ["Vallas y pruebas combinadas", "Tiempo por prueba y puntaje total", "Segundos / puntos"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela define su lista de métricas para las evaluaciones: puede ser una escala de 1 a 5, un sí/no o un número con unidad. Para atletismo lo natural es usar número con unidad (\"100 m, segundos\") y registrarlo después de cada test o competencia. Esas marcas alimentan el informe mensual del atleta que reciben los papás por correo y notificación.",
      },
      { type: "h2", content: "Cobros en un club de atletismo" },
      {
        type: "p",
        content:
          "El atletismo tiene un costo que muchos papás no esperan: inscripciones a competencias, transporte a otros departamentos y, en lanzamientos y saltos, implementos. Separar esos cobros evita la discusión de \"por qué este mes pagué más\".",
      },
      {
        type: "ul",
        items: [
          "Mensualidad automática por período para cada atleta activo, con recordatorios por correo y WhatsApp antes y después del vencimiento.",
          "Inscripción al club una sola vez, separada de la mensualidad.",
          "Cobros puntuales por competencia, solo para los convocados.",
          "Uniforme de competencia o spikes por catálogo de artículos sumado a la mensualidad, sin montar una tienda completa.",
          "Pagos manuales en efectivo o transferencia registrados con su comprobante, para los papás que pagan en la pista.",
        ],
      },
      { type: "h2", content: "Errores comunes al administrar un club de atletismo" },
      {
        type: "ul",
        items: [
          "Clasificar por edad cumplida y no por la regla del 31 de diciembre: el atleta termina inscrito en una categoría que la convocatoria no acepta.",
          "Guardar las marcas en el chat del grupo: a los seis meses nadie sabe cuál fue el mejor tiempo del año ni en qué fecha se hizo.",
          "Cobrar la competencia dentro de la mensualidad: el papá del atleta que no viaja siente que paga por los demás.",
          "Mezclar marcas de entrenamiento con marcas de competencia: conviene anotarlas como métricas distintas (\"100 m entrenamiento\" y \"100 m competencia\"), porque el cronometraje manual y el electrónico no son comparables.",
          "No medir la asistencia por grupo de pruebas: un grupo de fondo que se vacía en temporada de lluvias es una señal temprana de retiro.",
        ],
      },
      {
        type: "p",
        content:
          "Un detalle propio del atletismo: muchos atletas buenos llegan desde el colegio y no desde una escuela. Si trabajas con Intercolegiados, el enlace o QR de inscripción te sirve para captar a los que se destacan en la fase local sin tener que llenar formularios en papel, y la ficha queda lista con documento y datos médicos para cuando haya que inscribirlos en un campeonato de liga.",
      },
      {
        type: "p",
        content:
          "Para los atletas que ya compiten fuera del departamento, el calendario del club es la herramienta de comunicación más importante: publica la competencia con fecha, ciudad y hora de salida del bus, y la familia recibe el aviso en la app y en el celular. Así el entrenador no tiene que repetir la misma información en tres grupos de WhatsApp distintos.",
      },
      { type: "h2", content: "Paso a paso para pasar tu club a SportMaps" },
      {
        type: "ol",
        items: [
          "Crea el club y una sede por pista o estadio donde entrenas.",
          "Crea las categorías por año de nacimiento según la regla del 31 de diciembre.",
          "Crea los grupos de entrenamiento por pruebas (velocidad, fondo, saltos, lanzamientos) y asigna a cada entrenador.",
          "Carga la lista de métricas con su unidad: 100 m en segundos, salto largo en metros, etc.",
          "Configura mensualidad, inscripción y cobros de competencia.",
          "Comparte el enlace de inscripción para que cada familia llene la ficha con documento y datos médicos.",
          "Toma asistencia por QR al llegar a la pista y registra marcas después de cada test.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Para los atletas de 18 años o más, que ya no tienen acudiente, la ficha y los cobros quedan a nombre del propio atleta. En menores, el acudiente vinculado es quien recibe avisos y paga.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no te conviene: si eres un entrenador con 8 atletas que pagan en efectivo y llevas las marcas en una hoja que funciona, no te compliques. El plan Free Start ($0, hasta 20 alumnos) queda ahí para cuando crezcas.",
      },
      { type: "h2", content: "Planes" },
      {
        type: "table",
        headers: ["Club", "Plan", "Mensual", "Anual (por mes)"],
        rows: [
          ["Hasta 20 atletas", "Free Start", "$0", "—"],
          ["Hasta 50 atletas", "Escuela Start", "$69.000", "$59.000"],
          ["Hasta 120 atletas", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Hasta 300 atletas", "Escuela Pro", "$159.000", "$139.000"],
        ],
      },
      {
        type: "cta",
        title: "Lleva las marcas y los cobros de tu club en un solo lugar",
        description:
          "Categorías oficiales, grupos por pruebas, marcas con unidad e informe mensual para las familias. Empieza gratis.",
        href: "/entrenadores",
        label: "Ver SportMaps para entrenadores",
      },
    ],
    related: [
      "informe-mensual-del-deportista-para-padres",
      "planificacion-entrenamiento-mesociclos-escuela",
      "metricas-clave-academias",
    ],
    about: [
      "clubes de atletismo",
      "categorías juveniles de atletismo",
      "registro de marcas deportivas",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Atletismo", "World Athletics", "Juegos Intercolegiados", "Juegos Nacionales", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cómo se calcula la categoría de un atleta en Colombia?",
        answer:
          "Por la edad que tendrá al 31 de diciembre del año de la competencia, como define World Athletics. Un sub-18 tiene 16 o 17 años a esa fecha y un sub-20, 18 o 19. Así nadie cambia de categoría en mitad de la temporada.",
      },
      {
        question: "¿Cuándo es el Campeonato Nacional Sub-18 de atletismo?",
        answer:
          "Lo fija cada año la Federación Colombiana de Atletismo por circular. En 2025 se corrió del 27 al 29 de junio en el Centro de Alto Rendimiento de Bogotá y fue clasificatorio al Iberoamericano de la categoría.",
      },
      {
        question: "¿Qué software sirve para registrar marcas de atletismo?",
        answer:
          "Uno que permita métricas numéricas con unidad (segundos, metros) por atleta y fecha, y que muestre la evolución. En SportMaps cada club define sus métricas y las marcas llegan al informe mensual de las familias.",
      },
      {
        question: "¿Cuánto cuesta un software para un club de atletismo?",
        answer:
          "En SportMaps es gratis hasta 20 atletas y luego va de $69.000 a $159.000 al mes según el tamaño, con descuento pagando anual. Las pasarelas, el WhatsApp IA y los entrenadores ilimitados vienen en todos los planes.",
      },
    ],
  },
  {
    slug: "software-clubes-de-ciclismo",
    title: "Software para clubes y escuelas de ciclismo en Colombia: salidas, categorías y cobros",
    excerpt:
      "Prejuvenil, juvenil y sub-23 de la Federación Colombiana de Ciclismo, la Vuelta del Porvenir, salidas en carretera con menores y cobros de mensualidad. Guía para escuelas de ciclismo y cómo se organizan en SportMaps.",
    category: "Por deporte",
    readTime: "8 min",
    date: "26 Sep 2026",
    isoDate: "2026-09-26",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela o club de ciclismo en Colombia necesita un software que le ayude con lo que más le preocupa: saber quién salió a la carretera, con qué autorización del acudiente y a qué hora volvió. Después vienen las categorías por año de nacimiento que define la Federación Colombiana de Ciclismo (preinfantil, infantil, prejuvenil, juvenil, sub-23), las distintas modalidades (ruta, pista, BMX, MTB) y los cobros de mensualidad, inscripciones a válidas y dotación. Un sistema genérico de gimnasio no entiende ninguna de esas tres cosas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Agrupa a tus ciclistas por categoría oficial y modalidad, toma asistencia en el punto de encuentro de cada salida y ten a mano la ficha médica y el acudiente de cada menor. Cobra la mensualidad aparte de las válidas y la dotación. SportMaps cubre fichas, asistencia por QR, avisos a familias y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el ciclismo en Colombia" },
      {
        type: "p",
        content:
          "La Federación Colombiana de Ciclismo (FCC) rige el ciclismo de ruta, pista, BMX Racing, BMX Freestyle, MTB y paraciclismo, con ligas departamentales que afilian a los clubes. Su calendario nacional 2026 incluye la Vuelta a Colombia y la Vuelta a Colombia Femenina, la Vuelta de la Juventud, la Vuelta del Porvenir, el Tour Femenino, el Clásico RCN y los campeonatos nacionales de cada modalidad, con categorías prejuvenil, juvenil, sub-23 y élite en damas y varones.",
      },
      {
        type: "table",
        headers: ["Categoría", "Edades", "Comentario"],
        rows: [
          ["Preinfantil", "11 y 12 años", "Iniciación; recorridos cortos y circuitos cerrados"],
          ["Infantil", "13 y 14 años", "Primeras válidas regionales"],
          ["Prejuvenil", "15 y 16 años", "Nacionales de ruta y pista prejuvenil"],
          ["Juvenil", "17 y 18 años", "Categoría de la Vuelta del Porvenir; se toma el año de nacimiento, como define la UCI"],
          ["Sub-23 y élite", "19 a 22 años / mayores", "Vuelta de la Juventud, nacionales y Vuelta a Colombia"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Federación Colombiana de Ciclismo, normativa técnica (preinfantil a juvenil) y publicaciones del Campeonato Nacional Prejuvenil y Juvenil 2025; calendario nacional 2026. Las categorías por debajo de prejuvenil pueden variar según la liga y la modalidad, así que revisa la normativa vigente de tu liga.",
      },
      { type: "h3", content: "La Vuelta del Porvenir: la vitrina del ciclismo juvenil" },
      {
        type: "p",
        content:
          "La Vuelta del Porvenir es la carrera por etapas para juveniles de 17 y 18 años que organiza la FCC junto con el Tour Femenino. La edición 41 se corrió en Florencia, Caquetá, del 22 al 26 de octubre de 2025, con 191 ciclistas juveniles inscritos de 34 equipos. La edición 42 se corre en el Valle del Cauca del 4 al 8 de noviembre de 2026. Fuente: Federación Colombiana de Ciclismo, boletines de 2025 y 2026.",
      },
      { type: "h2", content: "La salida en carretera es un tema de responsabilidad" },
      {
        type: "p",
        content:
          "A diferencia de un deporte de cancha, el ciclismo de ruta saca a menores a vías con tráfico. Eso convierte varias tareas administrativas en tareas de seguridad: tener el teléfono del acudiente a mano, saber el tipo de sangre y las alergias, y poder demostrar quién iba en la salida.",
      },
      {
        type: "table",
        headers: ["Riesgo en la salida", "Lo que debes tener listo", "Cómo se hace en SportMaps"],
        rows: [
          ["Accidente en vía", "Ficha médica, EPS y contacto de emergencia de cada ciclista", "Ficha del atleta con datos médicos y acudiente vinculado"],
          ["No saber quién salió", "Lista de quiénes partieron del punto de encuentro", "Asistencia por QR del carné digital, al salir"],
          ["Cambio de ruta u hora por lluvia", "Aviso a todas las familias a la vez", "Avisos del calendario a las familias en la app y por notificación"],
          ["Lesión que requiere seguimiento", "Historia clínica deportiva", "Fisioterapeuta vinculado, con consentimiento del acudiente"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Un software no reemplaza la póliza ni el protocolo de seguridad vial del club. Si sacas menores a la carretera, define por escrito número de acompañantes, carro de apoyo, uso obligatorio de casco y rutas permitidas, y comunícalo a las familias desde la inscripción.",
      },
      { type: "h2", content: "Qué métricas llevar en una escuela de ciclismo" },
      {
        type: "p",
        content:
          "No todas las escuelas tienen potenciómetros. Lo bueno es que el seguimiento útil en categorías formativas se puede hacer con un cronómetro y una ruta fija:",
      },
      {
        type: "ul",
        items: [
          "Contrarreloj en un tramo fijo (por ejemplo, el mismo ascenso cada mes), en minutos y segundos.",
          "Kilómetros de la salida larga de la semana.",
          "Técnica en grupo: rodar a rueda, relevos, curvas (escala de 1 a 5).",
          "Mecánica básica: despinchar, ajustar frenos (sí/no).",
          "Potencia o frecuencia cardiaca solo si el ciclista tiene el equipo; no lo exijas en categorías pequeñas.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela crea sus métricas como escala, sí/no o número con unidad, y la planificación por mesociclos ayuda a ordenar la temporada alrededor de las válidas y los nacionales. Los papás ven el progreso en el informe mensual del atleta.",
      },
      { type: "h2", content: "No es lo mismo una escuela de ruta que una de BMX" },
      {
        type: "p",
        content:
          "La federación agrupa seis modalidades, y cada una cambia la operación de la escuela. Antes de configurar el software, define cuáles ofreces, porque de eso dependen las sedes, los horarios y lo que debes cobrar aparte.",
      },
      {
        type: "table",
        headers: ["Modalidad", "Dónde se entrena", "Lo que cambia en la administración"],
        rows: [
          ["Ruta", "Vías y puntos de encuentro", "Autorizaciones del acudiente, carro de apoyo, horarios que dependen del clima"],
          ["Pista", "Velódromo", "Turnos de pista asignados por la liga o el ente local; bicicleta de piñón fijo"],
          ["BMX Racing", "Pista de BMX", "Niños desde edades tempranas; grupos pequeños por edad y nivel"],
          ["MTB (XCO, XCC, XCM, DHI)", "Senderos y circuitos", "Desplazamientos fuera de la ciudad; más mantenimiento de bicicleta"],
          ["BMX Freestyle", "Parques y rampas", "Énfasis en técnica; evaluaciones por truco dominado (sí/no)"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada modalidad puede ser un equipo dentro de la categoría y cada lugar de entrenamiento una sede. Si un ciclista hace ruta entre semana y pista el sábado, queda en los dos equipos con una sola ficha y un solo cobro de mensualidad. La asistencia se toma por equipo, así que sabes cuántos van realmente al velódromo antes de pedir más turnos de pista.",
      },
      {
        type: "p",
        content:
          "Un tema que suele quedar en el aire es la bicicleta del club. Si la escuela presta bicicletas o cascos a los que empiezan, anota en la ficha del ciclista qué implemento tiene asignado y cobra el depósito o el alquiler como un cobro puntual. Así, cuando el niño se retira o cambia de categoría, sabes qué tiene que devolver.",
      },
      { type: "h2", content: "Cobros: mensualidad, válidas y dotación" },
      {
        type: "ul",
        items: [
          "Mensualidad por período, con recordatorios automáticos y enlace de pago que se abre sin iniciar sesión.",
          "Inscripciones a válidas y nacionales como cobros puntuales para los convocados.",
          "Uniforme del club, casco o repuestos por catálogo de artículos sumado a la mensualidad; si vendes mucho, tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite).",
          "Descuento por hermanos, frecuente en familias ciclistas.",
          "Pagos por Wompi o Mercado Pago (PSE, Nequi, tarjeta) y comprobantes de transferencia leídos por el asistente de WhatsApp, listos para que apruebes.",
        ],
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea el club y tus sedes (por ejemplo, el velódromo y el punto de encuentro de ruta).",
          "Crea categorías por año de nacimiento y equipos por modalidad (ruta, pista, BMX, MTB).",
          "Abre la inscripción por enlace o QR y pide datos médicos completos en la ficha.",
          "Configura mensualidad, inscripción y cobros de válidas.",
          "Publica las salidas en el calendario para que las familias reciban el aviso.",
          "Toma asistencia al salir y registra las métricas del mes.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si tu club es de adultos (ciclistas recreativos o máster), funciona igual: cada ciclista es su propio pagador y recibe los recordatorios directamente.",
      },
      { type: "h2", content: "Planes" },
      {
        type: "table",
        headers: ["Tamaño", "Plan", "Mensual", "Anual (por mes)"],
        rows: [
          ["Hasta 20 ciclistas", "Free Start", "$0", "—"],
          ["Hasta 50", "Escuela Start", "$69.000", "$59.000"],
          ["Hasta 120", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Hasta 300", "Escuela Pro", "$159.000", "$139.000"],
        ],
      },
      {
        type: "cta",
        title: "Tu escuela de ciclismo, ordenada",
        description:
          "Fichas médicas, asistencia en el punto de encuentro, avisos de salida a las familias y cobros con PSE y Nequi. Gratis hasta 20 ciclistas.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "carnet-digital-deportista",
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "planificacion-entrenamiento-mesociclos-escuela",
    ],
    about: [
      "escuelas de ciclismo",
      "categorías de ciclismo en Colombia",
      "seguridad de menores en deporte",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Ciclismo", "UCI", "Vuelta del Porvenir", "Vuelta a Colombia", "Clásico RCN", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuáles son las categorías del ciclismo en Colombia?",
        answer:
          "La Federación Colombiana de Ciclismo usa preinfantil (11-12 años), infantil (13-14), prejuvenil (15-16), juvenil (17-18), sub-23 y élite. Se cuenta por año de nacimiento, como define la UCI. Las categorías más pequeñas pueden variar por liga y modalidad.",
      },
      {
        question: "¿Qué es la Vuelta del Porvenir?",
        answer:
          "Es la carrera por etapas para ciclistas juveniles de 17 y 18 años que organiza la Federación Colombiana de Ciclismo junto con el Tour Femenino. La edición 2025 fue en Florencia, Caquetá, y la de 2026 se corre en el Valle del Cauca del 4 al 8 de noviembre.",
      },
      {
        question: "¿Qué datos debe pedir una escuela de ciclismo al inscribir a un menor?",
        answer:
          "Documento, fecha de nacimiento, EPS, tipo de sangre, alergias, contacto de emergencia y autorización del acudiente para salidas en vía. En SportMaps quedan en la ficha del atleta y el acudiente queda vinculado para recibir avisos.",
      },
      {
        question: "¿Cómo tomo asistencia en una salida de ruta?",
        answer:
          "En el punto de encuentro, escaneando el QR del carné digital de cada ciclista desde el celular del entrenador. Así queda registrado quién salió, algo clave si pasa algo en la vía.",
      },
      {
        question: "¿Se puede cobrar la mensualidad de un club de ciclismo por Nequi?",
        answer:
          "Sí. SportMaps integra Wompi y Mercado Pago, que aceptan Nequi, PSE y tarjetas, y la plata llega a la cuenta del club. SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela.",
      },
    ],
  },
  {
    slug: "software-escuelas-de-porrismo-cheerleading",
    title: "Software para escuelas de porrismo y cheerleading: divisiones, niveles y cobros",
    excerpt:
      "Tiny, Mini, Youth, Junior, Senior y Open; Novice, Prep, Elite e International; crossovers entre equipos y uniformes costosos. Cómo organizar un club de porrismo en Colombia con las divisiones 2026 de Fedecolcheer.",
    category: "Por deporte",
    readTime: "8 min",
    date: "20 Sep 2026",
    isoDate: "2026-09-20",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Una escuela de porrismo necesita un software que maneje equipos armados por división de edad y por nivel de habilidad al mismo tiempo, que permita que una deportista esté en dos equipos (el famoso crossover) sin duplicar su ficha ni su cobro, y que ordene los gastos grandes de la temporada: uniformes, inscripciones a campeonatos y viajes. En Colombia, además, las divisiones las fija cada temporada la Federación Colombiana de Porrismo (Fedecolcheer), y cambian: en 2026 la división Senior tuvo un cambio de edad.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Arma tus equipos con la tabla de divisiones de la temporada (año de nacimiento + nivel), registra los crossovers como pertenencia a dos equipos y separa mensualidad, competencias y uniforme en cobros distintos. SportMaps te da fichas, asistencia, avisos a familias y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el porrismo en Colombia" },
      {
        type: "p",
        content:
          "Fedecolcheer rige el porrismo federado y, con base en el reglamento internacional IASF 2025-2028, publica cada temporada el documento de divisiones para All Stars, colegial, universitario e interligas. Para 2026 el All Star se divide en cuatro segmentos según el compromiso y la etapa del equipo: Novice (iniciación, sin ítems de dificultad, rutina de 1 minuto 30 segundos), Prep (formativo o recreativo), Elite (competitivo) e International (equipos consolidados desde nivel 5, con los criterios de los eventos internacionales).",
      },
      {
        type: "table",
        headers: ["División All Star 2026", "Nacidos en", "Observación"],
        rows: [
          ["Tiny", "2019 a 2021", "Solo niveles de iniciación"],
          ["Mini", "2017 a 2021", ""],
          ["Youth", "2013 a 2018", "Femenino o mixto desde nivel 1 Elite"],
          ["Junior", "2009 a 2014", ""],
          ["Senior", "2007 a 2012", "En 2026 se permiten máximo 2 deportistas un año por debajo, por el cambio de edad"],
          ["Open", "Hasta 2011", "Niveles altos; Open Medium mixto hasta 8 hombres, Open Large desde 9"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Federación Colombiana de Porrismo, \"Divisiones All-Stars, Colegial, Universitario e Interligas 2026\", versión 2 del 25 de junio de 2026, publicado por la Liga Bogotana de Porrismo. Los equipos All Star son de 8 a 30 deportistas en la mayoría de divisiones. En la división colegial, la categoría no se define por año de nacimiento sino por grado escolar (por ejemplo, Mini hasta cuarto de primaria).",
      },
      { type: "h3", content: "Interligas y competencias internacionales" },
      {
        type: "p",
        content:
          "La división Interligas, la cúspide del porrismo en cada liga, tiene sus propias edades: Youth Median para 11 a 13 años, Junior Advanced para 14 a 17, y Senior Elite y Premier desde los 15. En lo internacional, Colombia ganó oro en Youth Coed Median (equipos mixtos de 12 a 14 años) y plata en Junior Coed Advanced en el Mundial ICU de abril de 2026 en Orlando (fuente: Forbes Colombia). En Bogotá, el II Campeonato Distrital 2026 reunió cerca de 1.800 deportistas de clubes, colegios y universidades como preparación para los Interligas 2026 y los Juegos Nacionales 2027 (fuente: Alcaldía de Bogotá).",
      },
      { type: "h2", content: "El crossover: el dolor de cabeza administrativo del cheer" },
      {
        type: "p",
        content:
          "Una deportista de 2012 puede estar en un Junior nivel 2 y en un Senior nivel 3 del mismo club, siempre que cumpla el año de nacimiento de cada división y las reglas de crossover del nivel. En un Excel eso termina en dos filas, dos cobros y un papá que pregunta por qué le llegó doble. Lo correcto es una sola ficha que pertenece a dos equipos, con un solo cobro de mensualidad y, si aplica, un cobro adicional por la segunda competencia.",
      },
      {
        type: "ul",
        items: [
          "Crea cada equipo con su división y nivel (por ejemplo, \"Youth Prep N1\", \"Senior Elite N3\").",
          "Agrega a la deportista a los dos equipos; su asistencia y sus avisos llegan por los dos.",
          "Antes de cada campeonato, revisa contra la tabla de la temporada que cada integrante cumple el año de nacimiento.",
          "Para el equipo colegial, guarda el grado escolar en la ficha, porque ahí manda el grado y no la edad.",
        ],
      },
      { type: "h2", content: "Lo que cuesta una temporada de porrismo" },
      {
        type: "p",
        content:
          "Los cobros del porrismo son de los más altos del deporte formativo por el uniforme, los moños, el maquillaje de competencia y los viajes. Dividirlos bien es la diferencia entre una temporada tranquila y un grupo de WhatsApp de papás molestos.",
      },
      {
        type: "table",
        headers: ["Concepto", "Frecuencia", "Cómo cobrarlo en SportMaps"],
        rows: [
          ["Inscripción al club", "Una vez por temporada", "Cobro de inscripción, separado de la mensualidad"],
          ["Mensualidad", "Cada mes", "Cobro automático por período con recordatorios"],
          ["Uniforme y moño de competencia", "Una vez por temporada", "Catálogo de artículos que se suma al cobro del mes, o tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite)"],
          ["Inscripción a campeonatos", "Por evento", "Cobro puntual a los equipos que compiten"],
          ["Coreografía o clínica externa", "Ocasional", "Cobro puntual"],
        ],
      },
      {
        type: "p",
        content:
          "Las familias pagan por PSE, Nequi o tarjeta con Wompi o Mercado Pago, y el dinero llega a la cuenta del club. Si pagan por transferencia, el asistente de WhatsApp lee el comprobante y lo deja listo para aprobar. Con el descuento por hermanos configurado, las familias con dos porristas no tienen que pedirlo cada mes.",
      },
      { type: "h2", content: "Qué decirles a las familias desde la inscripción" },
      {
        type: "p",
        content:
          "La mayoría de conflictos en un club de porrismo no son deportivos sino de expectativas: la familia no sabía que habría viajes, que el uniforme se paga aparte o que su hija podía quedar en un nivel más bajo que su amiga. Dejar eso por escrito al inscribir ahorra meses de discusiones.",
      },
      {
        type: "ul",
        items: [
          "En qué división y nivel queda la deportista, y que la división la define el año de nacimiento según la tabla de la federación.",
          "Cuáles son los costos de la temporada además de la mensualidad: uniforme, moño, campeonatos y viajes, con fechas aproximadas de cobro.",
          "Que los cambios de nivel dependen de habilidades evaluadas, no de la antigüedad.",
          "Qué pasa si falta a los ensayos previos a un campeonato: en un deporte de rutina grupal, una ausencia cambia la coreografía de todo el equipo.",
          "Cuál es la política de crossover del club y si tiene costo adicional.",
        ],
      },
      {
        type: "p",
        content:
          "Ese mensaje puede ir en la página pública de la escuela, que tiene botón de inscripción, y en los avisos del calendario cada vez que se acerca un campeonato. Las familias reciben el aviso en la app y en el celular, sin depender de que alguien lea el grupo de WhatsApp a tiempo.",
      },
      { type: "h2", content: "Seguridad: evaluar habilidades antes de subir de nivel" },
      {
        type: "p",
        content:
          "En porrismo subir a una deportista de nivel antes de tiempo es un riesgo físico, no solo deportivo. Por eso conviene llevar una lista de habilidades por nivel y marcar cuáles domina cada una. En SportMaps las evaluaciones admiten métricas sí/no (\"round off - back handspring sin ayuda\"), escalas de 1 a 5 (\"base en extensión\") o números (\"segundos sosteniendo una liberty\"). Si el club trabaja con fisioterapeuta, puede llevar la historia clínica deportiva con consentimiento del acudiente.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Descarga la tabla de divisiones vigente de la federación o de tu liga (cambia cada temporada).",
          "Crea los equipos por división y nivel.",
          "Abre la inscripción por enlace o QR; pide fecha de nacimiento y, para colegial, grado escolar.",
          "Asigna crossovers agregando a cada deportista a sus dos equipos.",
          "Configura mensualidad, inscripción y los cobros de uniforme y campeonatos.",
          "Publica ensayos extra y campeonatos en el calendario para que lleguen a las familias.",
          "Evalúa habilidades cada mes y decide cambios de nivel con datos.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no te conviene: un grupo recreativo de colegio que no compite y no cobra aparte probablemente no necesita un software. Si cobras mensualidad a más de 20 familias, sí.",
      },
      {
        type: "cta",
        title: "Ordena tu club de porrismo",
        description:
          "Equipos por división y nivel, crossovers sin doble cobro, uniformes y campeonatos separados de la mensualidad. Gratis hasta 20 deportistas.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-de-gimnasia",
      "tienda-online-escuela-deportiva-uniformes",
      "descuento-por-hermanos-y-becas-escuela-deportiva",
    ],
    about: [
      "porrismo y cheerleading",
      "divisiones All Star",
      "clubes deportivos formativos",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Porrismo", "Fedecolcheer", "Liga Bogotana de Porrismo", "IASF", "ICU", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuáles son las divisiones de porrismo en Colombia en 2026?",
        answer:
          "En All Star, por año de nacimiento: Tiny (2019-2021), Mini (2017-2021), Youth (2013-2018), Junior (2009-2014), Senior (2007-2012) y Open (hasta 2011). Además, cada equipo compite en un segmento: Novice, Prep, Elite o International. Lo publica Fedecolcheer cada temporada.",
      },
      {
        question: "¿Qué es un crossover en porrismo?",
        answer:
          "Es cuando una deportista compite en dos equipos del mismo club, por ejemplo un Junior y un Senior, siempre que cumpla el año de nacimiento de cada división y las reglas del nivel. En el software debe ser una sola ficha en dos equipos, no dos atletas.",
      },
      {
        question: "¿Cómo cobro el uniforme de porrismo sin hacer un cobro aparte?",
        answer:
          "En SportMaps puedes usar el catálogo de artículos para que el uniforme se sume al cobro de la mensualidad de ese mes. Si vendes muchos artículos, la tienda en línea es un adicional de $49.000 al mes, incluida en Escuela Elite.",
      },
      {
        question: "¿Qué federación rige el porrismo en Colombia?",
        answer:
          "La Federación Colombiana de Porrismo, conocida como Fedecolcheer, con ligas departamentales como la Liga Bogotana de Porrismo. Basa sus reglas en el reglamento internacional IASF 2025-2028.",
      },
    ],
  },
  {
    slug: "software-academias-de-danza",
    title: "Software para academias de danza: grupos por estilo y nivel, muestras y mensualidades",
    excerpt:
      "Ballet, urbano, salsa o folclor: cómo organizar una academia de danza en Colombia, qué pasó con el concurso del Festival Mundial de Salsa de Cali 2026, cómo cobrar vestuario de muestra y qué no hace un software deportivo.",
    category: "Por deporte",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Una academia de danza necesita un software que organice a sus alumnos por estilo y nivel (no por equipo), que cobre mensualidades y paquetes sin perseguir a nadie, que lleve la asistencia de cada clase y que ordene la temporada alrededor de la muestra o el festival: ensayos extra, vestuario y avisos a las familias. A diferencia de un club deportivo, una academia de danza en Colombia no depende de una federación para operar; vive más cerca del sector cultural, y eso cambia qué eventos marcan el año.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Crea un grupo por estilo y nivel, con su horario y cupo; cobra la mensualidad aparte del vestuario y la muestra; y usa el calendario para los ensayos extra. SportMaps sirve bien para la parte de alumnos, cobros y asistencia, pero no vende boletería para el público de tu muestra.",
      },
      { type: "h2", content: "La danza en Colombia: más cultura que federación" },
      {
        type: "p",
        content:
          "La política pública de danza la lleva el Ministerio de las Culturas, las Artes y los Saberes con su Plan Nacional de Danza, y las academias no necesitan reconocimiento deportivo para funcionar. Los espectáculos de artes escénicas en vivo, danza incluida, los regula la Ley 1493 de 2011 (ley de espectáculos públicos), que crea un registro para los productores de esos espectáculos. Si tu muestra de fin de año vende boletas al público, revisa con tu contador si te aplica.",
      },
      {
        type: "p",
        content:
          "Los eventos que mueven a las academias son festivales y concursos. El caso más visible es el Festival Mundial de Salsa de Cali, que en su edición 21 (2026) cambió su componente de concurso: tras el sismo del 10 de agosto en Cali, la Secretaría de Cultura consultó a las 73 escuelas de salsa inscritas y 61 de ellas (83,6 %) pidieron no competir en el formato previsto. El festival pasó a una estrategia de circulación artística para las 73 escuelas. La convocatoria inicial incluía categorías infantiles como Solista Chiky (5 a 8 años) y Solista Kids (9 a 13 años).",
      },
      {
        type: "table",
        headers: ["Dato", "Detalle", "Fuente"],
        rows: [
          ["Marco normativo de espectáculos", "Ley 1493 de 2011: espectáculos públicos de artes escénicas, incluye la danza", "Función Pública, gestor normativo"],
          ["Política de danza", "Plan Nacional de Danza", "Ministerio de las Culturas, las Artes y los Saberes"],
          ["Festival Mundial de Salsa de Cali 2026", "Edición 21; el concurso no se realiza en los términos previstos; 61 de 73 escuelas (83,6 %) lo decidieron", "Alcaldía de Cali, boletín del 4 de septiembre de 2026"],
          ["Categorías infantiles anunciadas en la convocatoria inicial", "Solista Chiky (5 a 8 años), Solista Kids (9 a 13), Pareja Chiky (5 a 8), Grupo (5 a 13)", "Alcaldía de Cali, convocatoria 2026"],
        ],
      },
      { type: "h2", content: "Cómo organizar los grupos de una academia" },
      {
        type: "p",
        content:
          "En danza la unidad no es el equipo sino el grupo de clase: un estilo, un nivel, un horario y un cupo que depende del tamaño del salón. Muchas alumnas toman dos estilos, y los adultos conviven con niños en la misma academia pero en otros horarios.",
      },
      {
        type: "table",
        headers: ["Cómo lo vive la academia", "Cómo se configura en SportMaps"],
        rows: [
          ["Ballet infantil nivel 1, martes y jueves 4 p. m.", "Un equipo o grupo con su horario dentro de la categoría \"Ballet\""],
          ["Una alumna toma ballet y jazz", "La misma ficha en dos grupos, sin duplicar"],
          ["Grupo de adultos de salsa", "Grupo aparte; el alumno adulto es su propio pagador"],
          ["Dos salones o dos sedes", "Multi-sede, cada grupo en su sede"],
          ["Clase de prueba para prospectos", "Clase de prueba agendable; el asistente de WhatsApp responde precios y agenda la cortesía"],
        ],
      },
      { type: "h2", content: "Cobros: mensualidad, vestuario y muestra" },
      {
        type: "p",
        content:
          "El cobro que más enreda a una academia es el de la muestra: vestuario, maquillaje, alquiler del teatro y a veces fotografía. Si lo metes en la mensualidad, el papá no entiende por qué subió; si lo cobras en efectivo en el ensayo general, pierdes el control.",
      },
      {
        type: "ul",
        items: [
          "Mensualidad automática por grupo, con recordatorios por correo y WhatsApp y enlace de pago que se abre sin iniciar sesión.",
          "Matrícula o inscripción una sola vez, separada de la mensualidad.",
          "Vestuario de muestra por catálogo de artículos, que se suma al cobro del mes, o cobro puntual solo a los grupos que se presentan.",
          "Descuento por hermanos o por tomar dos estilos, configurado una vez.",
          "Pagos por PSE, Nequi o tarjeta con Wompi o Mercado Pago; comprobantes de transferencia leídos por el asistente de WhatsApp y listos para aprobar.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Lo que SportMaps no hace: no vende boletas para el público de tu muestra ni maneja la taquilla del teatro. Para eso usa una plataforma de boletería y deja en SportMaps lo que es de tus alumnos.",
      },
      { type: "h2", content: "Mensualidad o paquete de clases: haz la cuenta" },
      {
        type: "p",
        content:
          "Muchas academias, sobre todo de salsa y urbano para adultos, venden paquetes de clases en vez de mensualidad. Los dos modelos sirven, pero tienen consecuencias distintas en tu flujo de caja y en la asistencia.",
      },
      {
        type: "table",
        headers: ["Ejemplo ilustrativo", "Mensualidad fija", "Paquete de 8 clases"],
        rows: [
          ["Precio para la alumna", "$140.000 al mes, 2 clases por semana", "$140.000 por 8 clases, vence a los 45 días"],
          ["Ingreso predecible", "Sí: sabes el día 1 cuánto vas a recaudar", "No: depende de cuándo recompre cada alumna"],
          ["Si la alumna falta", "La academia no devuelve; la alumna pierde la clase", "La clase queda para después, hasta el vencimiento"],
          ["Riesgo de deserción", "Se nota en la asistencia", "Se nota cuando no recompra"],
          ["Mejor para", "Niños y grupos estables con montaje", "Adultos con horarios cambiantes"],
        ],
      },
      {
        type: "p",
        content:
          "Las cifras son un ejemplo para comparar modelos, no precios del mercado. En los grupos infantiles que preparan una muestra, la mensualidad funciona mejor porque la coreografía necesita a las mismas alumnas todas las semanas. En SportMaps la mensualidad se cobra sola cada período; si un mes la alumna paga en efectivo en recepción, registras el pago manual con su comprobante y el cobro queda al día.",
      },
      { type: "h2", content: "Asistencia y progreso del alumno" },
      {
        type: "p",
        content:
          "En una academia la asistencia importa por dos razones: porque las coreografías se arman con quien viene, y porque la inasistencia es el primer síntoma de retiro. Tómala en segundos por QR o a mano desde el celular de la profe. Para el progreso, cada academia define sus métricas: técnica (1 a 5), musicalidad (1 a 5), memoria coreográfica (sí/no por coreografía), flexibilidad (centímetros en un test fijo). Eso alimenta el informe mensual que reciben los papás, que en danza suele valer más que cualquier nota escolar porque muestra avance concreto.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea la academia y tus sedes o salones.",
          "Crea una categoría por estilo y, dentro, un grupo por nivel y horario con cupo.",
          "Configura matrícula, mensualidad y descuentos.",
          "Comparte el QR de inscripción en tu perfil de Instagram y en el salón.",
          "Publica la página web de la academia (4 diseños, botón de inscripción, en subdominio de sportmaps.co).",
          "Agenda los ensayos extra de la muestra en el calendario.",
          "Cobra el vestuario por catálogo con tiempo, no la semana de la función.",
        ],
      },
      { type: "h2", content: "Planes" },
      {
        type: "table",
        headers: ["Academia", "Plan", "Mensual", "Anual (por mes)"],
        rows: [
          ["Hasta 20 alumnos", "Free Start", "$0", "—"],
          ["Hasta 50", "Escuela Start", "$69.000", "$59.000"],
          ["Hasta 120", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Hasta 300", "Escuela Pro", "$159.000", "$139.000"],
        ],
      },
      {
        type: "cta",
        title: "Tu academia de danza, sin cuaderno de pagos",
        description:
          "Grupos por estilo y nivel, mensualidades con PSE y Nequi, vestuario por catálogo y asistencia por QR. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "pagina-web-para-escuela-deportiva",
      "como-cobrar-mensualidades-escuela-deportiva",
      "control-de-asistencia-con-qr-y-torniquetes",
    ],
    about: [
      "academias de danza",
      "gestión de academias culturales",
      "cobro de mensualidades",
      "software de gestión",
    ],
    mentions: ["Festival Mundial de Salsa de Cali", "Ministerio de las Culturas, las Artes y los Saberes", "Ley 1493 de 2011", "Wompi", "Mercado Pago", "WhatsApp", "Instagram"],
    faqs: [
      {
        question: "¿Una academia de danza necesita estar afiliada a una federación en Colombia?",
        answer:
          "No. Las academias de danza funcionan en el ámbito cultural y no requieren reconocimiento deportivo. Si haces espectáculos con boletería para el público, revisa con tu contador las obligaciones de la Ley 1493 de 2011 sobre espectáculos públicos.",
      },
      {
        question: "¿Qué pasó con el concurso del Festival Mundial de Salsa de Cali 2026?",
        answer:
          "La Alcaldía de Cali informó que la edición 21 no hace el concurso en los términos previstos: tras el sismo del 10 de agosto, 61 de las 73 escuelas consultadas pidieron no competir en ese formato. Las 73 escuelas pasaron a una estrategia de circulación artística.",
      },
      {
        question: "¿Cómo cobro el vestuario de la muestra de fin de año?",
        answer:
          "Sepáralo de la mensualidad. En SportMaps puedes usar el catálogo de artículos para que el vestuario se sume al cobro del mes, o hacer un cobro puntual solo a los grupos que se presentan, con tiempo antes de la función.",
      },
      {
        question: "¿SportMaps vende boletas para las presentaciones?",
        answer:
          "No. SportMaps maneja alumnos, cobros, asistencia y avisos a las familias, pero no tiene boletería para el público. Para la taquilla de la muestra usa una plataforma de boletería.",
      },
      {
        question: "¿Puede una alumna estar en dos grupos de danza?",
        answer:
          "Sí. En SportMaps la misma ficha puede pertenecer a dos grupos, por ejemplo ballet y jazz, sin duplicar a la alumna, y el descuento por tomar dos estilos se puede configurar.",
      },
    ],
  },
  {
    slug: "software-clubes-de-rugby",
    title: "Software para clubes de rugby en Colombia: categorías M, contacto seguro y cuotas",
    excerpt:
      "Categorías M16 y M18, rugby 7 y XV, protocolos de conmoción y clubes que mezclan adultos con juveniles. Qué necesita un club de rugby colombiano y cómo se organiza en SportMaps.",
    category: "Por deporte",
    readTime: "7 min",
    date: "30 Sep 2026",
    isoDate: "2026-09-30",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Un club de rugby en Colombia necesita un software que maneje algo que casi ningún otro deporte formativo tiene: un plantel que mezcla adultos que pagan su propia cuota con juveniles M16 y M18 cuyos papás pagan la mensualidad, en dos modalidades (rugby 7 y rugby XV) y con un riesgo de contacto que exige tener al día la ficha médica y el seguimiento de lesiones. Si solo resuelves el cobro, te queda por fuera lo que más preocupa a las familias de un deporte de contacto.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa a los mayores (pagadores directos) de los juveniles (pagan los acudientes), arma equipos por categoría M y modalidad, y ten la ficha médica y el seguimiento de lesiones en el mismo lugar. SportMaps cubre fichas, cobros, asistencia y fisioterapeuta vinculado con consentimiento del acudiente.",
      },
      { type: "h2", content: "Cómo se organiza el rugby en Colombia" },
      {
        type: "p",
        content:
          "La Federación Colombiana de Rugby (FCR) se constituyó jurídicamente el 4 de septiembre de 2010 en Bucaramanga, está conformada por quince ligas departamentales y es miembro de World Rugby y de Sudamérica Rugby. La selección de XV se conoce como los Tucanes y la juvenil como los Tucancitos, que compite en la categoría M18 desde 2008. En rugby 7, la selección masculina ganó el Seven de Sudamérica Rugby de Lima en 2025, su primer título sudamericano en la modalidad, y Colombia subió al podio del rugby 7 en los Juegos Bolivarianos 2025.",
      },
      {
        type: "table",
        headers: ["Dato", "Detalle", "Fuente"],
        rows: [
          ["Federación", "Federación Colombiana de Rugby, constituida el 4 de septiembre de 2010 en Bucaramanga", "Wikipedia, \"Federación Colombiana de Rugby\""],
          ["Estructura", "15 ligas departamentales; miembro de World Rugby y Sudamérica Rugby", "Wikipedia, \"Federación Colombiana de Rugby\""],
          ["Selección juvenil", "Tucancitos, categoría M18 desde 2008", "Wikipedia, \"Selección juvenil de rugby de Colombia\""],
          ["Rugby 7 masculino", "Campeón del Seven Sudamérica Rugby de Lima 2025", "El Colombiano, 2025"],
          ["Torneos juveniles de liga", "Ejemplo: la Liga de Rugby del Atlántico juega torneos M16 y M18, masculino y femenino, en rugby 7", "Wikipedia, \"Liga de Rugby del Atlántico\""],
        ],
      },
      {
        type: "p",
        content:
          "Las categorías juveniles se nombran con \"M\" (menores de): M14, M16, M18. Cada liga define en su convocatoria qué años de nacimiento entran y si el torneo es de rugby 7 o de XV. Al cierre de este artículo el sitio de la federación (colombia.rugby) estaba en renovación, así que confirma calendarios con tu liga.",
      },
      { type: "h2", content: "Lo que hace distinto a un club de rugby" },
      {
        type: "ul",
        items: [
          "Mezcla de pagadores: los mayores pagan su cuota de jugador; en juveniles paga el acudiente. Un buen sistema no debe obligar a inventar un \"papá\" para un jugador de 25 años.",
          "Dos modalidades: el mismo jugador puede estar en el equipo de 7 y en el de XV.",
          "Contacto: la ficha médica, el contacto de emergencia y el historial de lesiones no son opcionales.",
          "Ramas femenina y masculina: ligas como la del Atlántico ya juegan torneos juveniles femeninos de rugby 7.",
          "Tercer tiempo y viajes: gastos colectivos que conviene cobrar aparte de la cuota.",
        ],
      },
      { type: "h2", content: "Conmociones y lesiones: tener el seguimiento en orden" },
      {
        type: "p",
        content:
          "World Rugby promueve el principio \"reconocer y retirar\": ante la sospecha de conmoción, el jugador sale y no vuelve ese día, y el regreso es gradual. Para un club formativo eso significa poder registrar el evento, avisar a la familia y no perder de vista cuándo ese jugador está habilitado para volver al contacto.",
      },
      {
        type: "table",
        headers: ["Momento", "Qué registrar", "Dónde queda en SportMaps"],
        rows: [
          ["Inscripción", "EPS, tipo de sangre, alergias, contacto de emergencia", "Ficha del atleta"],
          ["Golpe o sospecha de conmoción", "Fecha, partido o entrenamiento, quién lo atendió", "Historia clínica deportiva, si el club tiene fisioterapeuta vinculado"],
          ["Regreso al juego", "Cuándo vuelve al contacto", "Seguimiento del profesional, con consentimiento del acudiente en menores"],
          ["Aviso a la familia", "Qué pasó y siguientes pasos", "Avisos a las familias en la app y por notificación"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "El software ayuda a no perder información, pero no reemplaza el criterio médico ni el protocolo de tu liga. En menores, el regreso al contacto lo autoriza un profesional de la salud.",
      },
      { type: "h2", content: "Cobros en un club de rugby" },
      {
        type: "ul",
        items: [
          "Cuota de jugador mayor y mensualidad juvenil como cobros automáticos por período; cada uno le llega a quien paga.",
          "Inscripción anual al club, separada.",
          "Cobros puntuales por torneo o viaje, solo a los convocados.",
          "Camiseta del club por catálogo de artículos sumado a la mensualidad, o tienda en línea (adicional de $49.000 al mes, incluida en Escuela Elite) si vendes a hinchas y exjugadores.",
          "Pagos por PSE, Nequi o tarjeta con Wompi o Mercado Pago, y comprobantes de transferencia leídos por el asistente de WhatsApp, listos para aprobar.",
        ],
      },
      {
        type: "p",
        content:
          "La mora no da de baja automáticamente al jugador; el club decide si aplica recargo. Es importante en clubes donde un mayor se atrasa un mes por trabajo pero sigue entrenando.",
      },
      { type: "h2", content: "El paso de M18 a mayores: donde se pierden jugadores" },
      {
        type: "p",
        content:
          "En un club de rugby el momento más frágil es el salto de juvenil a mayores. El jugador termina el colegio, se va a la universidad o empieza a trabajar, pasa de tener un papá que paga a pagar él mismo, y de entrenar con amigos de su edad a enfrentarse con adultos más pesados. Si el club no lo acompaña, lo pierde.",
      },
      {
        type: "ul",
        items: [
          "Cambia el pagador a tiempo: cuando el jugador cumple 18 y pasa a mayores, la cuota debe llegarle a él y no seguir al acudiente.",
          "Mantén su historial: asistencia, partidos y lesiones de juvenil siguen en la misma ficha.",
          "Usa la asistencia de los primeros dos meses en mayores como alerta: si baja, alguien del club debe hablar con él.",
          "Considera una cuota de transición los primeros meses; es una decisión de la escuela, y el sistema permite aplicar descuentos.",
        ],
      },
      {
        type: "p",
        content:
          "Lo mismo aplica, con otro matiz, a quienes llegan al rugby ya adultos y sin experiencia previa en deportes de contacto, hombres o mujeres. Un grupo de iniciación separado, con su propio horario y una evaluación de fundamentos de contacto antes de pasar a juego, reduce lesiones y abandono.",
      },
      { type: "h2", content: "Lo que usa el entrenador" },
      {
        type: "p",
        content:
          "Asistencia por QR, planificación por mesociclos para repartir carga de contacto entre semanas, evaluaciones con métricas propias (tackles efectivos por partido, pases completados, test de velocidad en segundos) y registro de partidos. La pizarra táctica de SportMaps hoy es de fútbol, así que para jugadas de rugby no te la recomendamos todavía.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea el club y tus sedes de entrenamiento.",
          "Crea categorías M14, M16, M18 y mayores, y equipos por modalidad (7 y XV) y rama.",
          "Inscribe a los mayores como pagadores directos y a los juveniles con su acudiente vinculado.",
          "Exige ficha médica completa desde la inscripción.",
          "Configura cuota de mayores, mensualidad juvenil e inscripción.",
          "Vincula a tu fisioterapeuta para llevar la historia clínica deportiva.",
          "Publica partidos y viajes en el calendario.",
        ],
      },
      {
        type: "cta",
        title: "Organiza tu club de rugby",
        description:
          "Mayores y juveniles en el mismo club, fichas médicas, fisioterapeuta vinculado y cobros con PSE y Nequi. Gratis hasta 20 jugadores.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas y clubes",
      },
    ],
    related: [
      "poliza-seguro-escuela-deportiva-colombia",
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "reconocimiento-deportivo-club-paso-a-paso",
    ],
    about: [
      "clubes de rugby",
      "rugby 7 y rugby XV",
      "seguridad en deportes de contacto",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Rugby", "World Rugby", "Sudamérica Rugby", "Tucanes", "Liga de Rugby del Atlántico", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Qué federación rige el rugby en Colombia?",
        answer:
          "La Federación Colombiana de Rugby, constituida en 2010 en Bucaramanga, con quince ligas departamentales. Es miembro de World Rugby y de Sudamérica Rugby.",
      },
      {
        question: "¿Qué significan las categorías M16 y M18 en rugby?",
        answer:
          "Son categorías de menores de 16 y menores de 18 años. Cada liga define en su convocatoria los años de nacimiento y si el torneo es de rugby 7 o de XV.",
      },
      {
        question: "¿Cómo manejo jugadores adultos y menores en el mismo club?",
        answer:
          "En SportMaps el jugador mayor es su propio pagador y recibe los cobros directamente, mientras que en los menores el acudiente vinculado recibe avisos y paga. Ambos conviven en el mismo club con sus propias categorías.",
      },
      {
        question: "¿Qué debe hacer un club de rugby ante una conmoción?",
        answer:
          "Seguir el principio de World Rugby de reconocer y retirar: el jugador sale y no vuelve ese día, y el regreso es gradual con autorización de un profesional. Conviene registrar el evento y avisar a la familia el mismo día.",
      },
    ],
  },
  {
    slug: "software-escuelas-de-beisbol-y-softbol",
    title: "Software para escuelas de béisbol y sóftbol: categorías U12 a U18, estadísticas y cobros",
    excerpt:
      "Nacionales U12, U15 y U18 de la Federación Colombiana de Béisbol, control de lanzamientos en menores, promedio de bateo y mensualidades. Guía práctica para escuelas de béisbol y sóftbol en Colombia.",
    category: "Por deporte",
    readTime: "8 min",
    date: "15 Sep 2026",
    isoDate: "2026-09-15",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Una escuela de béisbol o sóftbol en Colombia necesita un software que agrupe a los peloteros por las categorías de la Federación Colombiana de Béisbol (U12, U15, U18), que le permita al mánager llevar estadísticas propias del deporte, como turnos, hits y lanzamientos, y que cobre mensualidades y uniformes, que en béisbol son caros por los implementos. Un punto que ningún otro deporte formativo tiene: cuidar el brazo de los lanzadores menores controlando cuántos lanzamientos hacen.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Organiza a tus peloteros por la categoría del nacional al que apuntas, registra turnos, hits y lanzamientos como métricas numéricas, y separa la mensualidad de uniforme e implementos. SportMaps hace eso y suma asistencia por QR, avisos a las familias y WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el béisbol en Colombia" },
      {
        type: "p",
        content:
          "La Federación Colombiana de Béisbol (FCB) rige el béisbol aficionado con ligas departamentales; su asamblea de abril de 2025, en Cartagena, eligió presidente a Jimmy Char para cuatro años. El béisbol colombiano tiene su fuerza en la región Caribe (Bolívar, Atlántico, Córdoba, Sucre), y la Liga Profesional de Béisbol Colombiano juega su temporada entre noviembre y enero. El sóftbol tiene federación propia: la Federación Colombiana de Softbol, fundada en 1968 y con 18 ligas afiliadas, reconocida por el Ministerio del Deporte.",
      },
      {
        type: "table",
        headers: ["Evento 2026", "Categoría", "Fechas"],
        rows: [
          ["XLI Campeonato Nacional U12", "U12", "26 de junio al 5 de julio de 2026"],
          ["XLI Campeonato Nacional U18", "U18", "17 al 24 de julio de 2026"],
          ["XVI Campeonato Nacional U15", "U15", "11 al 20 de septiembre de 2026"],
          ["Liga Profesional de Béisbol Colombiano 2025-2026", "Profesional", "28 de noviembre de 2025 al 20 de enero de 2026"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: calendario de eventos de la Federación Colombiana de Béisbol publicado en col.wbsc.org, consultado el 14 de octubre de 2026; El Universal (asamblea de la FCB, abril de 2025); WBSC, perfil de la Federación Colombiana de Softbol. Los años de nacimiento de cada categoría salen en la convocatoria de cada nacional.",
      },
      {
        type: "p",
        content:
          "Para el ciclo largo, la meta de muchos peloteros juveniles son los XXIII Juegos Nacionales 2027, con sede en Córdoba y Sucre, departamentos de tradición beisbolera. El Ministerio del Deporte ya publicó el instructivo de competencia de sóftbol para esos juegos.",
      },
      { type: "h2", content: "Cuidar el brazo: control de lanzamientos" },
      {
        type: "p",
        content:
          "El riesgo de lesión de codo y hombro en lanzadores jóvenes es el tema de salud número uno del béisbol formativo. Little League y la guía Pitch Smart de MLB y USA Baseball publican límites de lanzamientos por día y días de descanso según la edad. Úsalos como referencia y, sobre todo, lleva la cuenta: un niño que lanza el sábado en el torneo de la liga y el domingo en el de la escuela puede pasarse sin que nadie lo note.",
      },
      {
        type: "ul",
        items: [
          "Registra los lanzamientos de cada pitcher por partido como métrica numérica.",
          "Anota la fecha: los días de descanso se cuentan desde ahí.",
          "Comparte la regla con los papás desde la inscripción, para que entiendan por qué su hijo no lanza dos días seguidos.",
          "Si el niño juega en otro equipo además del tuyo, pregunta cuánto lanzó allá.",
        ],
      },
      { type: "h2", content: "Estadísticas que sí vale la pena llevar" },
      {
        type: "p",
        content:
          "El béisbol es el deporte de las estadísticas, y las fórmulas básicas son públicas y sencillas. En categorías formativas no hace falta más que esto:",
      },
      {
        type: "table",
        headers: ["Estadística", "Fórmula", "Para qué sirve"],
        rows: [
          ["Promedio de bateo (AVG)", "Hits ÷ turnos al bate", "Rendimiento ofensivo básico"],
          ["Porcentaje de embasarse (OBP)", "(Hits + bases por bolas + golpeados) ÷ (turnos + bases por bolas + golpeados + elevados de sacrificio)", "Mide cuánto se embasa, no solo cuánto batea"],
          ["Efectividad (ERA)", "(Carreras limpias × 9) ÷ entradas lanzadas", "Rendimiento del lanzador; en partidos de 7 entradas usa × 7"],
          ["Lanzamientos por partido", "Conteo", "Salud del brazo"],
          ["Porcentaje de strikes", "Strikes ÷ lanzamientos totales", "Control del lanzador"],
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada escuela define sus métricas: número con unidad para turnos, hits o lanzamientos; escala de 1 a 5 para mecánica de bateo o de lanzamiento; sí/no para fundamentos (\"recibe rodado en posición\"). El registro de partidos deja el historial, y los datos llegan al informe mensual del atleta para las familias.",
      },
      { type: "h2", content: "Cobros: mensualidad, uniforme e implementos" },
      {
        type: "ul",
        items: [
          "Mensualidad automática por período, con recordatorios por correo y WhatsApp.",
          "Inscripción al club una vez, separada.",
          "Uniforme, gorra y casco por catálogo de artículos sumado a la mensualidad; si vendes guantes y bates, la tienda en línea es un adicional de $49.000 al mes (incluida en Escuela Elite).",
          "Viajes a nacionales y departamentales como cobros puntuales para los convocados.",
          "Pagos con Wompi o Mercado Pago (PSE, Nequi, tarjeta) y comprobantes de transferencia leídos por el asistente de WhatsApp, listos para aprobar.",
        ],
      },
      { type: "h3", content: "Ejemplo de cálculo con un pelotero" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo: en un mes, un pelotero U12 tiene 20 turnos al bate, 6 hits, 3 bases por bolas y 1 golpeado. Su promedio es 6 ÷ 20 = .300. Su porcentaje de embasarse es (6 + 3 + 1) ÷ (20 + 3 + 1) = 10 ÷ 24 = .417. El segundo número le dice al mánager algo que el primero no: este niño sabe esperar su lanzamiento, y eso vale tanto como batear fuerte.",
      },
      {
        type: "p",
        content:
          "Para los papás, esas cifras son más claras que un \"va bien\". Muéstralas en el informe mensual junto con la asistencia y un par de notas de fundamentos, y la conversación cambia de \"¿por qué mi hijo no jugó?\" a \"¿qué tiene que mejorar para jugar más?\".",
      },
      { type: "h2", content: "Béisbol y sóftbol en la misma escuela" },
      {
        type: "p",
        content:
          "Muchas escuelas del Caribe tienen béisbol para niños y sóftbol para niñas o adultos. Funciona bien como dos categorías dentro de la misma escuela, cada una con sus equipos, su mensualidad y su federación de referencia. Los adultos de sóftbol son sus propios pagadores.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea la escuela y tus sedes (estadio o campo).",
          "Crea categorías U10, U12, U15, U18 según los años de la convocatoria vigente, y sóftbol si aplica.",
          "Abre la inscripción por enlace o QR con ficha médica y acudiente.",
          "Carga las métricas: turnos, hits, lanzamientos, strikes.",
          "Configura mensualidad, inscripción y catálogo de uniformes.",
          "Publica juegos y viajes en el calendario.",
          "Revisa el conteo de lanzamientos antes de cada fin de semana.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no te conviene: si tu equipo es un grupo de amigos que juega sóftbol recreativo y reparte gastos en el momento, no necesitas un software. Si cobras mensualidad a niños, sí.",
      },
      {
        type: "cta",
        title: "Organiza tu escuela de béisbol o sóftbol",
        description:
          "Categorías U12 a U18, estadísticas y lanzamientos por jugador, uniformes por catálogo y cobros con PSE y Nequi. Gratis hasta 20 peloteros.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "metricas-clave-academias",
      "software-escuelas-deportivas-barranquilla",
      "software-escuelas-deportivas-monteria",
    ],
    about: [
      "escuelas de béisbol",
      "sóftbol formativo",
      "estadísticas de béisbol",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Béisbol", "Federación Colombiana de Softbol", "WBSC", "Little League", "Pitch Smart", "Liga Profesional de Béisbol Colombiano", "Wompi", "Mercado Pago"],
    faqs: [
      {
        question: "¿Cuáles son las categorías del béisbol menor en Colombia?",
        answer:
          "La Federación Colombiana de Béisbol organiza campeonatos nacionales U12, U15 y U18; en 2026 el U12 fue del 26 de junio al 5 de julio, el U18 del 17 al 24 de julio y el U15 del 11 al 20 de septiembre. Los años de nacimiento salen en cada convocatoria.",
      },
      {
        question: "¿Cuántos lanzamientos puede hacer un niño pitcher?",
        answer:
          "Depende de la edad. Little League y la guía Pitch Smart de MLB y USA Baseball publican límites diarios y días de descanso por edad. Lo importante es llevar el conteo de cada partido, incluso si el niño juega en otro equipo.",
      },
      {
        question: "¿Cómo se calcula el promedio de bateo?",
        answer:
          "Se dividen los hits entre los turnos al bate. Un jugador con 12 hits en 40 turnos batea .300. Las bases por bolas no cuentan como turno.",
      },
      {
        question: "¿Hay una federación distinta para el sóftbol?",
        answer:
          "Sí. La Federación Colombiana de Softbol se fundó en 1968, tiene 18 ligas afiliadas y está reconocida por el Ministerio del Deporte. Es independiente de la Federación Colombiana de Béisbol.",
      },
      {
        question: "¿Cómo cobro el uniforme de béisbol sin hacer otro cobro?",
        answer:
          "En SportMaps el catálogo de artículos suma el uniforme al cobro de la mensualidad del mes. Si vendes muchos implementos, la tienda en línea es un adicional de $49.000 al mes, incluida en Escuela Elite.",
      },
    ],
  },
  {
    slug: "software-academias-de-ajedrez",
    title: "Software para academias de ajedrez: grupos por nivel, torneos por edades y mensualidades",
    excerpt:
      "Nacionales sub-6 a sub-20 de la Federación Colombiana de Ajedrez, grupos por nivel y no por edad, rating FIDE y cobros. Cómo organizar una academia o club de ajedrez en Colombia.",
    category: "Por deporte",
    readTime: "7 min",
    date: "5 Oct 2026",
    isoDate: "2026-10-05",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una academia de ajedrez necesita un software que agrupe a sus alumnos por nivel de juego y no solo por edad (un niño de 9 años puede jugar mejor que uno de 14), que lleve el registro de torneos y progreso de cada uno y que cobre mensualidades sin perseguir a los papás. Necesita poco de lo que piden los deportes de cancha: no hay uniformes caros ni alquiler de coliseo, pero sí hay inscripciones a torneos frecuentes y familias que quieren ver avances concretos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Crea grupos por nivel (iniciación, intermedio, competencia) y guarda en la ficha la categoría por edad del alumno para los torneos. Registra rating y resultados como métricas numéricas y cobra los torneos aparte de la mensualidad. SportMaps cubre grupos, asistencia, informe mensual y cobros con WhatsApp IA gratis.",
      },
      { type: "h2", content: "Cómo se organiza el ajedrez en Colombia" },
      {
        type: "p",
        content:
          "La Federación Colombiana de Ajedrez (Fecodaz) rige el ajedrez federado con sus ligas departamentales y, cada año, convoca por resolución los campeonatos nacionales por edades. En 2026 publicó resoluciones para los nacionales sub-20, sub-18, sub-16 y sub-10, sub-14 y sub-8, sub-12 y sub-6, además del nacional escolar, el amateur y los nacionales de partidas rápidas y blitz para menores. Las categorías sub-N se definen por año de nacimiento, siguiendo el criterio de la FIDE para torneos juveniles.",
      },
      {
        type: "table",
        headers: ["Evento", "Detalle", "Fuente"],
        rows: [
          ["Nacionales por edades 2026", "Resoluciones para sub-20, sub-18, sub-16 y sub-10, sub-14 y sub-8, sub-12 y sub-6", "Federación Colombiana de Ajedrez, resoluciones 2026"],
          ["Nacional Amateur 2026", "Barranquilla, del 5 al 8 de junio, con la Liga de Ajedrez del Atlántico", "El Universal, junio de 2026"],
          ["Rápidas y blitz", "Nacional de rápidas y blitz para menores y nacional de mayores en Risaralda", "Federación Colombiana de Ajedrez, resoluciones 2026"],
          ["Festival Sudamericano de la Juventud", "Cali, del 5 al 12 de diciembre de 2025, jugadores de 6 a 18 años", "El País Cali, 2025"],
          ["Escolar", "El ajedrez está en la final nacional de Intercolegiados 2026 (Bogotá, 13 al 30 de noviembre)", "Alcaldía de Bogotá, 2026"],
        ],
      },
      { type: "h2", content: "Grupos por nivel, categoría por edad" },
      {
        type: "p",
        content:
          "En una academia de ajedrez hay dos clasificaciones que no coinciden. Para entrenar, el nivel: un grupo de iniciación aprende movimientos y mates básicos; uno intermedio trabaja aperturas y táctica; uno de competencia analiza partidas y prepara torneos. Para competir, la categoría por edad: el niño juega el nacional sub-10 aunque entrene con el grupo de competencia.",
      },
      {
        type: "table",
        headers: ["Necesidad", "Cómo se configura en SportMaps"],
        rows: [
          ["Grupo de clase por nivel y horario", "Un equipo o grupo por nivel, con su horario y cupo"],
          ["Categoría por edad para torneos", "Fecha de nacimiento en la ficha y categoría por edad"],
          ["Alumno que sube de nivel a mitad de año", "Cambiarlo de grupo sin perder su historial"],
          ["Alumnos adultos", "Grupo aparte; el adulto es su propio pagador"],
          ["Clases en colegios con convenio", "Multi-sede: cada colegio es una sede"],
        ],
      },
      { type: "h2", content: "Cómo mostrar progreso en ajedrez" },
      {
        type: "p",
        content:
          "El ajedrez tiene la ventaja de que el progreso se puede medir con números, y eso tranquiliza a los papás que pagan la mensualidad sin ver un partido de fútbol cada sábado.",
      },
      {
        type: "ul",
        items: [
          "Rating: el nacional y el FIDE, si el alumno ya tiene, como número; se actualiza cuando sale la lista.",
          "Resultado de torneos: puntos sobre rondas jugadas (por ejemplo, 5 de 7).",
          "Ejercicios tácticos resueltos en la clase o en la semana.",
          "Temas dominados: mates básicos, finales de rey y peón, aperturas del repertorio (sí/no).",
          "Asistencia: un alumno que falta tres clases seguidas es el primero en retirarse.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps cada academia define sus métricas como número, escala de 1 a 5 o sí/no, y todo llega al informe mensual del atleta que reciben las familias por correo y notificación.",
      },
      { type: "h2", content: "Ajedrez en colegios: el modelo de convenio" },
      {
        type: "p",
        content:
          "Una parte grande del ajedrez formativo en Colombia pasa por los colegios: clubes extracurriculares, convenios con academias y la ruta de Intercolegiados. Para la academia eso significa varios lugares de clase, grupos con horarios fijados por el colegio y, a veces, dos formas de cobro: el colegio paga por el grupo, o cada familia paga su mensualidad a la academia.",
      },
      {
        type: "table",
        headers: ["Modelo", "Quién paga", "Cómo se maneja en SportMaps"],
        rows: [
          ["Club extracurricular cobrado a las familias", "Cada familia, mensualidad", "El colegio es una sede; cobros automáticos a cada acudiente"],
          ["Convenio pagado por el colegio", "El colegio, por grupo", "El colegio es una sede; el pago del colegio se registra como pago manual con su comprobante"],
          ["Mixto: clase en el colegio y torneos aparte", "Colegio la clase, familias los torneos", "Cobros puntuales de torneo solo a los convocados"],
        ],
      },
      {
        type: "p",
        content:
          "En los tres casos conviene tomar asistencia en cada clase: es tu evidencia frente al colegio de que el programa funciona, y te dice qué alumnos vale la pena invitar al grupo de competencia de la academia. Con el QR del carné digital, la toma de asistencia de un grupo de 20 niños se hace en segundos.",
      },
      { type: "h2", content: "Cobros en una academia de ajedrez" },
      {
        type: "ul",
        items: [
          "Mensualidad automática por grupo, con recordatorios por correo y WhatsApp y enlace de pago sin iniciar sesión.",
          "Matrícula una vez, separada.",
          "Inscripción a torneos como cobro puntual para quienes juegan.",
          "Tablero, reloj o libro por catálogo de artículos sumado a la mensualidad.",
          "Descuento por hermanos configurado una vez.",
          "Pagos con Wompi o Mercado Pago (PSE, Nequi, tarjeta) y comprobantes de transferencia leídos por el asistente de WhatsApp, listos para aprobar.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Para captar alumnos nuevos, el asistente de WhatsApp responde precios y agenda la clase de prueba, y la página pública de la academia tiene botón de inscripción. Así no dependes de contestar a las 10 de la noche.",
      },
      { type: "h2", content: "Paso a paso" },
      {
        type: "ol",
        items: [
          "Crea la academia y una sede por cada lugar donde das clase (incluidos colegios con convenio).",
          "Crea los grupos por nivel con horario y cupo.",
          "Abre la inscripción por enlace o QR con fecha de nacimiento en la ficha.",
          "Configura matrícula, mensualidad y cobros de torneo.",
          "Carga las métricas: rating, puntos por torneo, temas dominados.",
          "Publica los torneos en el calendario para que lleguen a las familias.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Lo que SportMaps no es: no es una plataforma para jugar partidas en línea ni para hacer emparejamientos de torneo. Para eso usa las herramientas de ajedrez de siempre y deja en SportMaps alumnos, cobros y asistencia.",
      },
      { type: "h2", content: "Planes" },
      {
        type: "table",
        headers: ["Academia", "Plan", "Mensual", "Anual (por mes)"],
        rows: [
          ["Hasta 20 alumnos", "Free Start", "$0", "—"],
          ["Hasta 50", "Escuela Start", "$69.000", "$59.000"],
          ["Hasta 120", "Escuela Crecimiento", "$99.000", "$89.000"],
          ["Hasta 300", "Escuela Pro", "$159.000", "$139.000"],
        ],
      },
      {
        type: "cta",
        title: "Tu academia de ajedrez, en orden",
        description:
          "Grupos por nivel, progreso medible para los papás y mensualidades con PSE y Nequi. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "informe-mensual-del-deportista-para-padres",
      "como-cobrar-mensualidades-escuela-deportiva",
      "pagina-web-para-escuela-deportiva",
    ],
    about: [
      "academias de ajedrez",
      "categorías juveniles de ajedrez",
      "gestión de academias",
      "software de gestión deportiva",
    ],
    mentions: ["Federación Colombiana de Ajedrez", "Fecodaz", "FIDE", "Liga de Ajedrez del Atlántico", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuáles son las categorías de ajedrez por edad en Colombia?",
        answer:
          "La Federación Colombiana de Ajedrez convoca nacionales sub-6, sub-8, sub-10, sub-12, sub-14, sub-16, sub-18 y sub-20, cada uno por resolución anual. La categoría se define por año de nacimiento.",
      },
      {
        question: "¿Cómo se organizan los grupos en una academia de ajedrez?",
        answer:
          "Por nivel para entrenar (iniciación, intermedio, competencia) y por edad solo para inscribir en torneos. Un niño de 9 años puede entrenar con el grupo de competencia y jugar el nacional sub-10.",
      },
      {
        question: "¿Cómo le muestro a los papás que su hijo avanza en ajedrez?",
        answer:
          "Con datos: rating, puntos en torneos, ejercicios resueltos y temas dominados. En SportMaps esas métricas llegan en el informe mensual del atleta, por correo y notificación.",
      },
      {
        question: "¿SportMaps sirve para jugar ajedrez en línea?",
        answer:
          "No. SportMaps maneja alumnos, grupos, cobros, asistencia y avisos a las familias. Para jugar en línea o emparejar torneos se usan las plataformas propias del ajedrez.",
      },
    ],
  },
];
