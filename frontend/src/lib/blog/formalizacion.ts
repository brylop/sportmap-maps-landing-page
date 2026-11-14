import type { BlogPost } from "../blog-posts";

export const formalizacionPosts: BlogPost[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Club deportivo, escuela de formación o SAS
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "club-deportivo-escuela-de-formacion-o-sas-diferencias",
    title: "Club deportivo, escuela de formación o SAS: diferencias y cuál te conviene en Colombia",
    excerpt:
      "Son tres cosas distintas y no se excluyen: el club es un organismo deportivo, la escuela de formación es un programa que avala el municipio y la SAS es el vehículo jurídico. Tabla comparativa, quién vigila cada una y cómo decidir.",
    category: "Guías",
    readTime: "8 min",
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
          "En Colombia, «club deportivo», «escuela de formación deportiva» y «SAS» no son tres opciones del mismo menú: responden a preguntas distintas. El club deportivo es un organismo del Sistema Nacional del Deporte (Decreto-Ley 1228 de 1995) y sirve para afiliarte a una liga y competir oficialmente. La escuela de formación deportiva es un programa de deporte formativo (Ley 181 de 1995, artículo 16) que en varias ciudades recibe un aval del ente deportivo municipal. La SAS, o la persona natural, es el vehículo con el que contratas, facturas y respondes ante terceros (Ley 1258 de 2008). Por eso muchas escuelas combinan dos: una empresa que opera el negocio y un club con reconocimiento deportivo para competir.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si lo tuyo es enseñar y cobrar mensualidades, necesitas un vehículo jurídico (persona natural o SAS) y, donde exista, el aval de escuela de formación. Si quieres jugar torneos oficiales de liga, necesitas reconocimiento deportivo como club. Si quieres acceder a recursos públicos, el club además necesita personería jurídica. Empieza por lo que vas a hacer este año, no por la figura que suena más grande.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Información general con base en los textos de las normas citadas; no es asesoría legal ni tributaria. Los trámites y formatos cambian según el municipio y el departamento. Antes de constituir cualquier figura, consulta con un abogado, con tu contador y con el ente deportivo de tu municipio.",
      },
      { type: "h2", content: "¿Por qué no es una sola decisión?" },
      {
        type: "p",
        content:
          "Porque hay dos capas. La primera es la capa jurídica: quién es el dueño de la operación, a nombre de quién sale la factura y quién responde si algo sale mal. Ahí las opciones son persona natural, sociedad (casi siempre una SAS) o entidad sin ánimo de lucro. La segunda es la capa deportiva: cómo te reconoce el Sistema Nacional del Deporte. Ahí las opciones son club deportivo, club promotor o escuela de formación con aval.",
      },
      {
        type: "p",
        content:
          "Las dos capas se cruzan. El parágrafo del artículo 2 del Decreto-Ley 1228 de 1995 permite que empresas privadas, colegios, cajas de compensación y otras organizaciones actúen como club deportivo en cada deporte sin cambiar su estructura, si cumplen los requisitos del artículo 6. Y la Resolución 639 de 2021 del IDRD (Bogotá), en su artículo 2, dice que las escuelas de formación deportiva pueden ser creadas por personas naturales o jurídicas. Es decir: la figura deportiva se monta sobre el vehículo jurídico que ya tengas.",
      },
      { type: "h2", content: "Tabla comparativa de las tres figuras" },
      {
        type: "table",
        headers: ["Aspecto", "Club deportivo", "Escuela de formación con aval", "SAS o persona natural"],
        rows: [
          [
            "Qué es",
            "Organismo de derecho privado del Sistema Nacional del Deporte, para fomentar y patrocinar la práctica de un deporte",
            "Programa de deporte formativo (iniciación, fundamentación y perfeccionamiento) para niños, niñas y adolescentes",
            "Vehículo jurídico y comercial para prestar el servicio y cobrarlo",
          ],
          [
            "Norma base",
            "Ley 181 de 1995; Decreto-Ley 1228 de 1995 (arts. 2, 6, 18 y 24); Decreto 1085 de 2015",
            "Ley 181 de 1995, art. 16; reglamentación del ente deportivo local (en Bogotá, Resolución 639 de 2021 del IDRD)",
            "Ley 1258 de 2008 (SAS); Código de Comercio",
          ],
          [
            "Cómo nace",
            "Acta de constitución con al menos 10 deportistas, reglamento y reconocimiento deportivo del alcalde a través del ente deportivo municipal",
            "Solicitud ante el ente deportivo municipal con los documentos que este pida; varía por municipio",
            "SAS: documento privado inscrito en la Cámara de Comercio. Persona natural: RUT y, si aplica, registro mercantil",
          ],
          [
            "Ánimo de lucro",
            "No. Si obtiene personería jurídica, se organiza como corporación o asociación",
            "Depende de quién la opera; la escuela puede cobrar mensualidad",
            "Sí",
          ],
          [
            "Vigencia",
            "Reconocimiento por cinco años, renovable (art. 18, modificado por la Ley 962 de 2005)",
            "La fija cada ente; en Bogotá el aval dura cinco años",
            "Indefinida; la matrícula mercantil se renueva cada año",
          ],
          [
            "Quién vigila",
            "Ente deportivo municipal (reconocimiento) y Ministerio del Deporte (inspección, vigilancia y control de los organismos deportivos)",
            "El ente deportivo que da el aval, con visitas de seguimiento",
            "Cámara de Comercio (registro), DIAN y, según el caso, Superintendencia de Sociedades",
          ],
          [
            "Para qué sirve",
            "Afiliarse a la liga y competir en torneos oficiales; con personería, acceder a recursos públicos",
            "Respaldo oficial frente a las familias y, según la ciudad, acceso a escenarios y programas del ente",
            "Contratar, facturar, abrir cuentas y limitar la responsabilidad (en la SAS)",
          ],
        ],
      },
      {
        type: "p",
        content:
          "Fuentes de la tabla: Decreto-Ley 1228 de 1995 y Ley 181 de 1995 (Gestor Normativo de Función Pública); Resolución 639 del 20 de agosto de 2021 del IDRD, artículos 2, 7, 12 y 21; Ley 1258 de 2008. Sea cual sea la figura, la Superintendencia de Industria y Comercio (SIC) es la autoridad en protección al consumidor (Ley 1480 de 2011) y en datos personales (Ley 1581 de 2012).",
      },
      { type: "h2", content: "¿Qué exige y qué te da el club deportivo?" },
      {
        type: "p",
        content:
          "El club es la puerta de entrada al deporte asociado. Con el reconocimiento deportivo puedes pedir la afiliación a la liga departamental de tu deporte, y desde ahí inscribir equipos en campeonatos oficiales. El reconocimiento no te convierte en persona jurídica: según el artículo 24 del Decreto-Ley 1228, los clubes municipales solo están obligados a obtener personería jurídica para acceder a recursos públicos o cuando la ley lo exija.",
      },
      {
        type: "p",
        content:
          "Un detalle que confunde a muchos: la personería jurídica de un club no se tramita en la Cámara de Comercio. El artículo 3 del Decreto 427 de 1996 (hoy compilado en el Decreto 1074 de 2015) exceptúa de ese registro a las entidades del Sistema Nacional del Deporte reguladas por la Ley 181 y el Decreto-Ley 1228. La otorga la autoridad territorial; la Alcaldía de Cali, por ejemplo, indica que la personería de sus clubes la adelanta la Gobernación del Valle. Confirma en tu departamento cuál es la dependencia.",
      },
      {
        type: "p",
        content:
          "El paso a paso del reconocimiento, con modelo de acta, está en nuestra guía de reconocimiento deportivo; aquí solo importa la consecuencia: el club es una estructura democrática, con afiliados, órgano de administración, de control y de disciplina. No tiene «dueño». Si montaste la escuela como proyecto de vida y de ingresos, eso pesa.",
      },
      { type: "h2", content: "¿Qué es exactamente una escuela de formación deportiva?" },
      {
        type: "p",
        content:
          "La Ley 181 de 1995 define el deporte formativo como el que contribuye al desarrollo integral del individuo, y dice que tiene lugar en el sector educativo y en «los programas desescolarizados de las Escuelas de Formación Deportiva y semejantes» (artículo 16). No es un tipo de sociedad ni un organismo deportivo: es un programa. Por eso el aval, donde existe, lo da el ente deportivo local con sus propias reglas, y no hay un trámite nacional único.",
      },
      {
        type: "p",
        content:
          "La escuela avalada no reemplaza al club: el aval reconoce que tu proceso pedagógico cumple unos mínimos, pero la afiliación a la liga la pide un club con reconocimiento deportivo. Los requisitos y las diferencias entre ciudades los explicamos en la guía del aval.",
      },
      { type: "h2", content: "¿Cuándo conviene una SAS y cuándo seguir como persona natural?" },
      {
        type: "ul",
        items: [
          "Persona natural: es lo más rápido para empezar. Facturas a tu nombre y respondes con tu propio patrimonio por las obligaciones de la escuela.",
          "SAS: se constituye por documento privado inscrito en la Cámara de Comercio, puede tener un solo accionista y la responsabilidad se limita a los aportes (Ley 1258 de 2008). Sirve cuando ya tienes empleados, arriendos, socios o contratos con colegios y conjuntos.",
          "Entidad sin ánimo de lucro distinta del club (fundación o corporación): tiene sentido si el proyecto es social y vive de donaciones o convenios, no si es tu fuente de ingresos. Los excedentes no se reparten.",
          "En cualquier caso, lo tributario (IVA, renta, régimen simple o régimen especial) depende de tus ingresos y de la actividad: es una conversación con tu contador, no algo que se resuelva con el nombre de la figura.",
        ],
      },
      { type: "h2", content: "¿Cuál te conviene según tu caso?" },
      {
        type: "table",
        headers: ["Tu situación", "Combinación habitual", "Por qué"],
        rows: [
          ["Empiezas con 20 a 40 niños en una cancha alquilada", "Persona natural + aval de escuela si tu municipio lo tiene", "Poco trámite; formalizas el servicio y pruebas el mercado"],
          ["Ya tienes entrenadores contratados y varias sedes", "SAS + aval de escuela", "Separas tu patrimonio del negocio y puedes firmar contratos como empresa"],
          ["Quieres jugar el torneo de la liga departamental", "Tu vehículo jurídico + club con reconocimiento deportivo", "La liga afilia clubes, no empresas ni escuelas sueltas"],
          ["Quieres presentar proyectos a recursos públicos de deporte", "Club con reconocimiento y personería jurídica", "El art. 24 del Decreto-Ley 1228 exige personería para acceder a recursos públicos"],
          ["Proyecto comunitario sin cobro o con cobro simbólico", "Club deportivo o club promotor", "Estructura sin ánimo de lucro, pensada para la comunidad"],
        ],
      },
      {
        type: "p",
        content:
          "La tabla es orientativa: muestra combinaciones frecuentes, no una regla legal. Si tu escuela aspira a tener deportistas profesionales, el marco es otro (Ley 1445 de 2011) y necesitas asesoría especializada.",
      },
      { type: "h2", content: "Errores frecuentes al elegir la figura" },
      {
        type: "ul",
        items: [
          "Crear un club solo «para verse más serio» y descubrir después que las decisiones las toma una asamblea de afiliados.",
          "Llamarse «club» o «academia» en la publicidad sin tener reconocimiento ni aval. En Bogotá, además, la Resolución 639 de 2021 no admite que el nombre de una escuela avalada incluya palabras como club, fundación, corporación o academia, ni la sigla FC.",
          "Creer que el reconocimiento deportivo da personería jurídica, o que la Cámara de Comercio registra clubes deportivos.",
          "Mezclar la plata de la escuela con la cuenta personal del entrenador.",
          "Dejar vencer el reconocimiento o el aval: los dos tienen fecha.",
          "Elegir la figura por un supuesto ahorro de impuestos sin haberlo revisado con un contador.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no constituye sociedades ni tramita reconocimientos o avales: eso lo haces tú con el ente deportivo y con tus asesores. Lo que hace es ordenar la operación, sea cual sea la figura: inscripciones y fichas de los deportistas con su acudiente, asistencia desde el celular, cobros con Wompi y Mercado Pago, carnets digitales e integración de facturación electrónica DIAN. Opera solo en Colombia y tiene un plan gratis hasta 20 alumnos.",
      },
      {
        type: "cta",
        title: "Ordena la operación antes de crecer",
        description:
          "Inscripciones, asistencia, cobros y carnets digitales en un solo lugar, para escuelas, academias y clubes. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "reconocimiento-deportivo-club-paso-a-paso",
      "aval-escuelas-de-formacion-deportiva-requisitos-por-ciudad",
      "como-abrir-una-escuela-de-futbol-en-colombia",
    ],
    about: [
      "figuras jurídicas para escuelas deportivas en Colombia",
      "club deportivo",
      "escuela de formación deportiva",
      "sociedad por acciones simplificada",
    ],
    mentions: [
      "Ley 181 de 1995",
      "Decreto-Ley 1228 de 1995",
      "Ley 1258 de 2008",
      "Decreto 427 de 1996",
      "Ministerio del Deporte",
      "IDRD",
      "Superintendencia de Industria y Comercio",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre un club deportivo y una escuela de formación deportiva?",
        answer:
          "El club deportivo es un organismo del Sistema Nacional del Deporte regulado por el Decreto-Ley 1228 de 1995: necesita reconocimiento deportivo y sirve para afiliarse a una liga y competir. La escuela de formación deportiva es un programa de deporte formativo (Ley 181 de 1995, artículo 16) que en varias ciudades recibe un aval del ente deportivo municipal. Una misma organización puede tener las dos.",
      },
      {
        question: "¿Una SAS puede tener una escuela de fútbol y competir en la liga?",
        answer:
          "Puede operar la escuela. Para competir en la liga, el parágrafo del artículo 2 del Decreto-Ley 1228 de 1995 permite que empresas privadas actúen como club deportivo si cumplen los requisitos del artículo 6 y obtienen el reconocimiento deportivo. Confirma con tu ente municipal y con la liga cómo lo aplican.",
      },
      {
        question: "¿Un club deportivo se registra en la Cámara de Comercio?",
        answer:
          "No. El artículo 3 del Decreto 427 de 1996, compilado en el Decreto 1074 de 2015, exceptúa del registro en Cámara de Comercio a las entidades del Sistema Nacional del Deporte. El reconocimiento deportivo lo da el alcalde a través del ente deportivo municipal y la personería jurídica, la autoridad territorial competente.",
      },
      {
        question: "¿Quién vigila a los clubes deportivos en Colombia?",
        answer:
          "El ente deportivo municipal otorga y renueva el reconocimiento deportivo, y el Ministerio del Deporte ejerce la inspección, vigilancia y control sobre los organismos del Sistema Nacional del Deporte. En consumo y datos personales, la autoridad es la Superintendencia de Industria y Comercio.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Aval de escuelas de formación deportiva
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "aval-escuelas-de-formacion-deportiva-requisitos-por-ciudad",
    title: "Aval de escuelas de formación deportiva: qué es, requisitos y cómo cambia por ciudad",
    excerpt:
      "El aval es el registro que el ente deportivo municipal le da a una escuela de formación. No hay un trámite nacional único: en Bogotá lo regula la Resolución 639 de 2021 del IDRD y dura cinco años. Requisitos, vigencia y diferencia con el reconocimiento deportivo.",
    category: "Guías",
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
          "El aval de una escuela de formación deportiva es el registro que el ente deportivo de tu municipio expide, mediante acto administrativo, cuando verifica que la escuela cumple unos requisitos pedagógicos, administrativos y de protección de los niños. No existe un trámite nacional único: cada ente lo reglamenta. El caso mejor documentado es Bogotá, donde la Resolución 639 del 20 de agosto de 2021 del IDRD fija los requisitos, da un plazo de 45 días hábiles para decidir y una vigencia de cinco años. El aval no es lo mismo que el reconocimiento deportivo: este último es para clubes y es el que permite afiliarse a una liga.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Antes de armar la carpeta, pregunta en el ente deportivo de tu municipio tres cosas: si existe el aval de escuelas, qué resolución lo regula y cuáles son los formatos vigentes. En Bogotá el aval aplica a escuelas con niños de 4 a 17 años, pide hojas de vida del director y los instructores, plan pedagógico, listado de inscritos con EPS y póliza de accidentes, y dura cinco años.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Información general, no asesoría legal. Lo que sigue describe con detalle la norma de Bogotá porque es la que pudimos leer completa en su texto oficial. Para Medellín, Cali y los demás municipios no encontramos una norma pública equivalente al momento de escribir: consulta directamente a tu ente deportivo antes de radicar.",
      },
      { type: "h2", content: "¿De dónde sale el aval?" },
      {
        type: "p",
        content:
          "La Ley 181 de 1995 ordena al Estado «fomentar las escuelas deportivas para la formación y perfeccionamiento de los practicantes» (artículo 3, numeral 7) y ubica a las escuelas de formación dentro del deporte formativo (artículo 16). Antes de esa ley, Coldeportes (hoy Ministerio del Deporte) había creado el proyecto Escuelas de Formación Deportiva con la Resolución 000058 del 25 de abril de 1991 y lo reglamentó con la Resolución 001909 del 5 de agosto de 1991, que encargó a las juntas seccionales de deporte «dar el aval deportivo a las escuelas». Esas funciones pasaron después a los entes deportivos territoriales. Así lo recogen los considerandos de la Resolución 639 de 2021 del IDRD.",
      },
      {
        type: "p",
        content:
          "La consecuencia práctica: el aval es un trámite local. Hay municipios con resolución propia, formatos y visitas de verificación, y otros donde no existe o se maneja como una inscripción en un programa. Por eso la primera diligencia es preguntar.",
      },
      { type: "h2", content: "¿En qué se diferencia del reconocimiento deportivo?" },
      {
        type: "table",
        headers: ["", "Aval de escuela de formación", "Reconocimiento deportivo"],
        rows: [
          ["A quién se le da", "A una escuela de formación, creada por persona natural o jurídica", "A un club deportivo o club promotor"],
          ["Norma", "Reglamentación local (en Bogotá, Resolución 639 de 2021 del IDRD)", "Decreto-Ley 1228 de 1995, arts. 6 y 18"],
          ["Quién lo otorga", "El ente deportivo municipal o distrital", "El alcalde, a través del ente deportivo municipal"],
          ["Qué revisa", "Proceso pedagógico, perfil de director e instructores, inscritos, seguros", "Constitución del club, mínimo de deportistas, reglamento y órganos"],
          ["Para qué sirve", "Registro oficial de la escuela y acceso a los beneficios que defina el ente", "Pertenecer al Sistema Nacional del Deporte y afiliarse a la liga"],
          ["Vigencia", "La que fije el ente; cinco años en Bogotá", "Cinco años en todo el país (Ley 962 de 2005)"],
        ],
      },
      {
        type: "p",
        content:
          "No son excluyentes. Una organización puede tener escuela avalada para la base formativa y club con reconocimiento para los equipos que compiten.",
      },
      { type: "h2", content: "¿Qué pide Bogotá? La Resolución 639 de 2021 del IDRD" },
      {
        type: "p",
        content:
          "La resolución define el aval como el registro que el IDRD emite a las escuelas de formación deportiva mediante acto administrativo (artículo 7) y lo dirige a escuelas conformadas por niños, niñas y adolescentes entre los 4 y los 17 años en el sector convencional (artículo 4). Según el artículo 11, la solicitud se presenta en los formatos del IDRD, foliada y en este orden:",
      },
      {
        type: "ol",
        items: [
          "Carta de solicitud firmada por el director o directora de la escuela.",
          "Formato de revisión de documentos (lista de chequeo) diligenciado.",
          "Ficha de inscripción de la escuela: nombre, fecha de creación, deportes, sede administrativa, escenarios de práctica, localidad y datos de los firmantes.",
          "Copias de las cédulas de los firmantes.",
          "Acta de creación de la escuela, con deportes, sedes, días y horarios, socialización del manual de normas, aprobación de la mensualidad, elección del representante de los padres y listado de padres con firma.",
          "Hoja de vida del director, con formación en el área del deporte, mínimo un año de experiencia con niños, curso de primer respondiente, antecedentes con expedición no mayor a un mes, certificado de inhabilidades de la Ley 1918 de 2018 y curso de fundamentos en administración deportiva.",
          "Hojas de vida de los instructores, clasificadas en tres categorías (A, B o C) según título y experiencia, con los mismos certificados; en deportes acuáticos, además, curso de salvamento acuático.",
          "Manual de normas de funcionamiento.",
          "Plan pedagógico y metodológico ajustado a los lineamientos del IDRD, con cronograma de mínimo un año.",
          "Listado de inscritos en la planilla del IDRD, con los datos del adulto responsable que firma el consentimiento informado y el tratamiento de datos, y certificación de afiliación a EPS o Sisbén de cada inscrito.",
          "Póliza de accidentes deportivos para el total de inscritos.",
        ],
      },
      {
        type: "table",
        headers: ["Dato", "Qué dice la norma de Bogotá", "Fuente"],
        rows: [
          ["Quién puede crear una escuela", "Personas naturales o jurídicas", "Resolución 639 de 2021 del IDRD, art. 2"],
          ["Estructura mínima", "Un director, un representante de madres, padres o acudientes, e instructores deportivos", "Art. 8"],
          ["Mínimo de inscritos", "8 en deportes convencionales individuales y 10 en deportes de conjunto", "Art. 10"],
          ["Plazo de respuesta", "45 días hábiles desde la radicación; un requerimiento por documentos faltantes interrumpe el término", "Art. 11, parágrafo quinto"],
          ["Vigencia", "Cinco años", "Art. 12"],
          ["Renovación", "Se solicita antes del vencimiento; la carta se radica con 45 días hábiles de anticipación", "Arts. 13 y 14"],
          ["Seguimiento", "Visita de verificación antes de otorgar y visitas de seguimiento después; 15 días hábiles para presentar acciones de mejora", "Arts. 20 y 21"],
          ["Nombre de la escuela", "No puede incluir las palabras club, fundación, corporación, academia u organización, ni la sigla FC, ni nombres de clubes reconocidos sin autorización", "Art. 11, numeral 3"],
        ],
      },
      {
        type: "p",
        content:
          "El artículo 18 enumera los beneficios: el registro oficial ante el IDRD, la posibilidad de usar el Sistema Distrital de Parques según disponibilidad y las reglas de aprovechamiento económico, la invitación a capacitaciones, torneos y festivales del Instituto, y asesoría pedagógica y técnica. El aval puede suspenderse o cancelarse, por ejemplo, si la escuela deja de funcionar un mes o más sin justa causa o si vincula instructores sin la formación exigida.",
      },
      { type: "h2", content: "¿Y en Medellín, Cali y otras ciudades?" },
      {
        type: "table",
        headers: ["Ciudad", "Ente deportivo", "Lo que pudimos confirmar"],
        rows: [
          ["Bogotá", "Instituto Distrital de Recreación y Deporte (IDRD)", "Aval regulado por la Resolución 639 de 2021; vigencia de cinco años"],
          ["Medellín", "Instituto de Deportes y Recreación de Medellín (INDER)", "El INDER otorga el reconocimiento deportivo a clubes con trámite digital, según la Alcaldía de Medellín. No encontramos una norma pública de aval para escuelas privadas: consulta al INDER"],
          ["Cali", "Secretaría del Deporte y la Recreación", "La Secretaría tramita el reconocimiento deportivo de clubes, según la Alcaldía de Cali. No encontramos una resolución pública de aval para escuelas privadas: consulta a la Secretaría"],
          ["Otros municipios", "Instituto o secretaría de deportes municipal", "Varía por municipio. Algunos entes publican sus propios formatos de aval y renovación; otros no tienen la figura"],
        ],
      },
      {
        type: "p",
        content:
          "Que no hayamos encontrado la norma no significa que no exista: muchas resoluciones locales no están publicadas en línea. Lleva estas preguntas a la ventanilla de tu ente deportivo:",
      },
      {
        type: "ul",
        items: [
          "¿Existe un aval o registro para escuelas de formación deportiva privadas? ¿Qué acto lo regula?",
          "¿Cuáles son los formatos vigentes y dónde se radican?",
          "¿Qué perfil piden para el director y los instructores?",
          "¿Hay un mínimo de inscritos, y a partir de qué edad?",
          "¿Exigen póliza de accidentes, afiliación a salud o certificados de antecedentes?",
          "¿Cuánto dura y con cuánta anticipación se renueva?",
          "¿El aval da acceso a escenarios públicos o hay que tramitar un permiso aparte?",
        ],
      },
      { type: "h2", content: "Checklist para armar la carpeta" },
      {
        type: "ol",
        items: [
          "Confirma la norma y descarga los formatos oficiales; no los modifiques.",
          "Reúne a las familias, levanta el acta de creación y elige al representante de los padres.",
          "Arma las hojas de vida con soportes de estudio y experiencia, y pide los certificados recientes.",
          "Escribe el manual de normas y el plan pedagógico por etapas y edades.",
          "Exporta el listado de inscritos con documento, fecha de nacimiento, acudiente y EPS.",
          "Contrata la póliza de accidentes para todos los inscritos.",
          "Radica, guarda el número de radicado y prepara la visita de verificación.",
          "Agenda la renovación en el calendario con varios meses de margen.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no radica ni gestiona avales. Ayuda en la parte que más tiempo consume de la carpeta y del seguimiento posterior: tener a los deportistas inscritos con su ficha, su acudiente y sus datos médicos básicos, organizados por categoría, y la asistencia registrada desde el celular. Cuando el ente haga una visita, la información de inscritos e instructores está al día en un solo lugar.",
      },
      {
        type: "cta",
        title: "Ten tu listado de inscritos siempre al día",
        description:
          "Fichas de deportistas con acudiente, categorías por edad, asistencia y carnets digitales. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "reconocimiento-deportivo-club-paso-a-paso",
      "club-deportivo-escuela-de-formacion-o-sas-diferencias",
      "poliza-seguro-escuela-deportiva-colombia",
    ],
    about: [
      "aval de escuelas de formación deportiva",
      "entes deportivos municipales",
      "deporte formativo en Colombia",
      "reconocimiento deportivo",
    ],
    mentions: [
      "IDRD",
      "INDER Medellín",
      "Secretaría del Deporte y la Recreación de Cali",
      "Ministerio del Deporte",
      "Ley 181 de 1995",
      "Resolución 639 de 2021 del IDRD",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Qué es el aval de una escuela de formación deportiva?",
        answer:
          "Es el registro que el ente deportivo municipal o distrital expide a una escuela de formación deportiva, mediante acto administrativo, tras verificar sus requisitos. En Bogotá lo define el artículo 7 de la Resolución 639 de 2021 del IDRD. No hay un trámite nacional único: cada ente lo reglamenta.",
      },
      {
        question: "¿Cuánto dura el aval de una escuela deportiva en Bogotá?",
        answer:
          "Cinco años, según el artículo 12 de la Resolución 639 de 2021 del IDRD. La renovación se solicita antes del vencimiento, con carta radicada 45 días hábiles antes. En otros municipios la vigencia la fija el ente deportivo local.",
      },
      {
        question: "¿El aval de escuela sirve para afiliarse a una liga?",
        answer:
          "No. Para afiliarse a una liga se necesita el reconocimiento deportivo como club, regulado por el Decreto-Ley 1228 de 1995. El aval registra a la escuela como programa de formación ante el ente deportivo.",
      },
      {
        question: "¿Qué requisitos pide el IDRD para avalar una escuela de formación deportiva?",
        answer:
          "Carta de solicitud, lista de chequeo, ficha de inscripción, cédulas, acta de creación, hojas de vida del director y de los instructores con certificados, manual de normas, plan pedagógico, listado de inscritos con afiliación a salud y póliza de accidentes deportivos, según el artículo 11 de la Resolución 639 de 2021.",
      },
      {
        question: "¿Cuántos niños necesito para pedir el aval en Bogotá?",
        answer:
          "El artículo 10 de la Resolución 639 de 2021 del IDRD pide un mínimo de 8 inscritos en deportes convencionales individuales y 10 en deportes de conjunto.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Protocolo de protección de menores
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "protocolo-de-proteccion-de-menores-en-escuelas-deportivas",
    title: "Protocolo de protección de menores en escuelas deportivas: qué exige la ley y checklist",
    excerpt:
      "Código de Infancia (Ley 1098), consulta de inhabilidades por delitos sexuales (Ley 1918 de 2018 y Ley 2375 de 2024), reglas para vestuarios, transporte y chats con menores, y la ruta de reporte. Con checklist para implementar.",
    category: "Guías",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un protocolo de protección de menores en una escuela deportiva debe tener, como mínimo, cuatro piezas: la verificación de quién trabaja con los niños (incluida la consulta del registro de inhabilidades por delitos sexuales de la Ley 1918 de 2018), reglas de conducta por escrito para vestuarios, transporte y mensajes, una persona responsable de recibir alertas y una ruta de reporte a las autoridades. La base legal es el Código de la Infancia y la Adolescencia (Ley 1098 de 2006), que obliga a toda persona natural o jurídica a dar aviso de cualquier hecho que vulnere o amenace los derechos de un niño. No verificar el registro de inhabilidades puede costar una multa de 50 a 500 salarios mínimos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Consulta el registro de inhabilidades antes de vincular a cualquier persona que tenga trato directo y habitual con niños, y repite la consulta cada cuatro meses. Escribe reglas simples: nunca un adulto a solas con un niño en un espacio cerrado, nada de chats privados, transporte solo con autorización. Nombra un responsable de protección y deja claro que ante una sospecha se reporta a las autoridades; la escuela no investiga por su cuenta.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Información general, no asesoría legal. Las obligaciones legales se citan con su norma; las reglas de vestuarios, transporte y mensajería son buenas prácticas de salvaguarda, no un texto legal. Ante un caso real, llama a las líneas oficiales y busca asesoría jurídica.",
      },
      { type: "h2", content: "¿Qué normas obligan a una escuela deportiva?" },
      {
        type: "table",
        headers: ["Norma", "Qué establece", "Qué significa para tu escuela"],
        rows: [
          ["Ley 1098 de 2006, art. 8", "Interés superior del niño: todas las personas deben garantizar la satisfacción integral y simultánea de sus derechos", "Ante la duda, se decide a favor del niño, no de la reputación de la escuela"],
          ["Ley 1098 de 2006, art. 18", "Derecho a la integridad personal; define el maltrato infantil como toda forma de perjuicio, castigo, humillación o abuso físico o psicológico", "Gritar, humillar o castigar con ejercicio no es «formar carácter»"],
          ["Ley 1098 de 2006, art. 18A (Ley 2089 de 2021)", "Derecho al buen trato; no se admiten castigos físicos como forma de corrección ni disciplina", "El reglamento de la escuela debe decirlo expresamente"],
          ["Ley 1098 de 2006, art. 40, numeral 4", "Las personas naturales y jurídicas deben dar aviso o denunciar por cualquier medio los delitos o acciones que vulneren o amenacen a los niños", "La escuela y cada entrenador tienen el deber de reportar"],
          ["Ley 1918 de 2018", "Régimen de inhabilidades para condenados por delitos sexuales contra menores y registro de inhabilidades administrado por la Policía Nacional", "Hay que consultar el registro de quien vas a vincular"],
          ["Ley 2375 de 2024 («Entornos seguros»)", "Define los cargos, oficios y profesiones sujetos a la inhabilidad y fija la multa por no verificar", "Incluye expresamente el ámbito deportivo"],
          ["Decreto 753 de 2019", "Reglamenta la consulta: momento, periodicidad y autorización del aspirante", "Consulta antes de vincular y cada cuatro meses"],
        ],
      },
      {
        type: "p",
        content:
          "Fuentes: textos de las leyes y del decreto en los normogramas oficiales (Función Pública, ICBF, Jurisdicción Especial para la Paz) y Sentencia C-407 de 2020 de la Corte Constitucional.",
      },
      { type: "h2", content: "¿Cómo funciona la consulta de inhabilidades por delitos sexuales?" },
      {
        type: "p",
        content:
          "La Ley 1918 de 2018 creó la inhabilidad para que quien haya sido condenado por delitos sexuales contra menores de 18 años no pueda desempeñar cargos, oficios o profesiones con trato directo y habitual con niños, y creó un registro que administra la Policía Nacional. La Corte Constitucional la revisó en la Sentencia C-407 de 2020: mantuvo la inhabilidad, pero aclaró que no puede ser perpetua (su duración se sujeta a los límites del Código Penal) y retiró la facultad que la ley le daba al ICBF de definir los cargos.",
      },
      {
        type: "p",
        content:
          "El Congreso llenó ese vacío con la Ley 2375 del 12 de julio de 2024. La lista de cargos cubre el ámbito deportivo cuando hay trato directo y habitual con menores e incluye, entre otros, al personal de atención directa en servicios de recreación y deporte como los clubes deportivos, a formadores e instructores, al personal de transporte escolar (conductores y monitores), al personal de limpieza con contacto con niños, a los representantes legales y miembros de juntas directivas de entidades que atienden menores, y a cualquier otro oficio con ese trato. Aplica a labores remuneradas y no remuneradas: el papá voluntario que ayuda en los entrenamientos también cuenta.",
      },
      {
        type: "ul",
        items: [
          "Cuándo: antes de seleccionar o vincular a la persona, y de nuevo cada cuatro meses mientras dure la relación (Decreto 753 de 2019).",
          "Con permiso: se necesita la autorización previa, expresa y escrita de la persona consultada, que se archiva en su expediente.",
          "Dónde: en la consulta en línea de inhabilidades de la Policía Nacional. El certificado indica si la persona registra o no inhabilidad.",
          "Reserva: el resultado solo se usa para el proceso de selección; no se comparte en grupos ni se publica.",
          "Sanción: omitir la verificación o contratar a una persona inhabilitada acarrea multa de 50 a 500 salarios mínimos mensuales legales vigentes, que impone el ICBF (Ley 1918, artículo 5, modificado por la Ley 2375 de 2024).",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El Decreto 753 de 2019 es anterior a la Sentencia C-407 de 2020 y a la Ley 2375 de 2024. Si la plataforma de la Policía o el ICBF publican un procedimiento distinto, sigue el vigente. En Bogotá, además, el IDRD exige el certificado de inhabilidades al director y a los instructores para dar el aval de escuela (Resolución 639 de 2021, artículo 11).",
      },
      { type: "h2", content: "¿Qué más revisar antes de vincular a un entrenador?" },
      {
        type: "ul",
        items: [
          "Documento de identidad y hoja de vida con referencias verificadas por teléfono, no solo en papel.",
          "Antecedentes judiciales (Policía), disciplinarios (Procuraduría) y fiscales (Contraloría).",
          "Formación en el deporte y, ojalá, curso de primeros auxilios o primer respondiente.",
          "Firma del código de conducta de la escuela antes de la primera clase.",
          "Un periodo de acompañamiento: las primeras semanas, el entrenador nuevo no trabaja solo con el grupo.",
        ],
      },
      { type: "h2", content: "¿Qué reglas poner para vestuarios, transporte y mensajes?" },
      {
        type: "table",
        headers: ["Situación", "Regla recomendada (buena práctica)"],
        rows: [
          ["Vestuarios y baños", "Los adultos no se cambian ni se duchan con los niños. Si un niño necesita ayuda, la da su acudiente o dos adultos con la puerta abierta. Celulares guardados: cero fotos o videos en vestuarios."],
          ["Espacios cerrados", "Regla de dos: ningún adulto se queda a solas con un niño en un salón, oficina o carro. Las conversaciones individuales se hacen a la vista de otros."],
          ["Contacto físico", "Solo el necesario para la técnica o la seguridad, explicado antes y a la vista del grupo. Atención de lesiones con otro adulto presente."],
          ["Transporte", "Solo con autorización escrita del acudiente para ese desplazamiento, vehículo y conductor identificados, lista de pasajeros y nunca un adulto solo con un niño."],
          ["Viajes y concentraciones", "Los adultos no comparten habitación con menores que no sean sus hijos. Habitaciones por sexo y edad, con un responsable por piso."],
          ["Mensajería", "Las comunicaciones van al acudiente o a grupos donde esté el acudiente. Sin chats privados entre entrenador y menor, sin mensajes que desaparecen y dentro de un horario definido."],
          ["Fotos y redes", "Solo con autorización de imagen firmada. Nunca en vestuarios ni en traje de baño fuera de competencia, y sin datos que permitan ubicar al niño."],
          ["Entrega del menor", "Solo al acudiente o a las personas autorizadas por escrito. Si nadie llega, el niño espera acompañado por dos adultos."],
          ["Trato y disciplina", "Sin castigos físicos, sin apodos humillantes y sin ejercicio como castigo, en línea con los artículos 18 y 18A de la Ley 1098."],
        ],
      },
      { type: "h2", content: "¿Cuál es la ruta de reporte?" },
      {
        type: "ol",
        items: [
          "Escucha sin interrogar. Si un niño cuenta algo, créele, agradécele la confianza y no le prometas guardar el secreto.",
          "Protege primero. Separa al niño del presunto agresor de inmediato; si hay riesgo físico o necesita atención médica, llama al 123.",
          "Avisa al responsable de protección de la escuela el mismo día. Si el señalado es esa persona o el director, reporta directamente afuera.",
          "Reporta a la autoridad: línea 141 del ICBF, Comisaría de Familia o Defensoría de Familia de tu municipio, Policía de Infancia y Adolescencia, o la línea 122 de la Fiscalía para denunciar.",
          "Informa a la familia, salvo que la persona señalada sea del núcleo familiar; en ese caso deja que la autoridad indique cómo proceder.",
          "Suspende de inmediato el contacto del señalado con menores mientras la autoridad decide. No es una sanción: es una medida de protección.",
          "Deja un registro escrito con fecha, hora, lo que se dijo en palabras textuales y a quién se reportó. Guárdalo con acceso restringido.",
          "No investigues, no confrontes al señalado con el niño y no lo comentes en grupos de padres.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El deber de dar aviso del artículo 40 de la Ley 1098 no exige tener pruebas ni certeza: basta la sospecha razonable. Verificar los hechos es trabajo de las autoridades.",
      },
      { type: "h2", content: "Checklist del protocolo" },
      {
        type: "ol",
        items: [
          "Política de protección de una o dos páginas, aprobada por la dirección y publicada.",
          "Responsable de protección nombrado, con suplente, y sus datos visibles en la sede.",
          "Consulta de inhabilidades de todo el personal y voluntarios, con autorización escrita y fecha de la próxima consulta.",
          "Antecedentes y referencias verificados antes de la primera clase.",
          "Código de conducta firmado por entrenadores, staff, conductores y voluntarios.",
          "Reglas de vestuarios, transporte, viajes, mensajería y fotos incorporadas al reglamento interno.",
          "Autorizaciones de los acudientes al día: práctica, imagen, datos, transporte y personas autorizadas para recoger.",
          "Ruta de reporte impresa con los números 141, 123 y 122 y la dirección de la Comisaría de Familia.",
          "Charla de inicio de temporada con familias y con deportistas, en lenguaje adecuado a cada edad.",
          "Capacitación anual del staff y revisión del protocolo cada año o después de cualquier incidente.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no consulta el registro de inhabilidades ni reemplaza tu protocolo: eso es responsabilidad de la escuela. Ayuda con el orden que el protocolo necesita: cada deportista tiene su ficha con su acudiente vinculado, la asistencia queda registrada por sesión y las familias tienen su propia app para ver la información de su hijo, en vez de depender del chat personal del entrenador.",
      },
      {
        type: "cta",
        title: "Cada deportista con su acudiente y su asistencia",
        description:
          "Fichas, asistencia desde el celular y app para las familias, sin depender del chat personal del profe. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "autorizacion-uso-de-imagen-y-consentimiento-informado-menores-deportistas",
      "como-contratar-entrenadores-prestacion-de-servicios",
      "reglamento-interno-escuela-deportiva",
    ],
    about: [
      "protección de menores en el deporte",
      "salvaguarda infantil",
      "inhabilidades por delitos sexuales contra menores",
      "escuelas deportivas en Colombia",
    ],
    mentions: [
      "Ley 1098 de 2006",
      "Ley 1918 de 2018",
      "Ley 2375 de 2024",
      "Decreto 753 de 2019",
      "Sentencia C-407 de 2020",
      "ICBF",
      "Policía Nacional",
      "Fiscalía General de la Nación",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Una escuela deportiva debe consultar el registro de inhabilidades por delitos sexuales?",
        answer:
          "Sí. La Ley 1918 de 2018, con la lista de cargos que fijó la Ley 2375 de 2024, cubre el ámbito deportivo cuando hay trato directo y habitual con menores, en labores remuneradas o no. Omitir la verificación o vincular a una persona inhabilitada acarrea multa de 50 a 500 salarios mínimos mensuales, que impone el ICBF.",
      },
      {
        question: "¿Cada cuánto se consulta el registro de inhabilidades?",
        answer:
          "Antes de seleccionar o vincular a la persona y, según el Decreto 753 de 2019, cada cuatro meses después de iniciada la relación. Se requiere autorización previa, expresa y escrita de la persona consultada.",
      },
      {
        question: "¿Qué hago si un niño me cuenta que alguien lo está maltratando o abusando?",
        answer:
          "Escúchalo sin interrogarlo, protégelo de inmediato y reporta a las autoridades: línea 141 del ICBF, Comisaría de Familia, Policía de Infancia y Adolescencia, línea 122 de la Fiscalía o 123 si hay urgencia. El artículo 40 de la Ley 1098 de 2006 obliga a dar aviso; la escuela no debe investigar por su cuenta.",
      },
      {
        question: "¿Un entrenador puede escribirle por WhatsApp a un deportista menor de edad?",
        answer:
          "No hay una norma que lo prohíba de forma expresa, pero la buena práctica de salvaguarda es que las comunicaciones vayan al acudiente o a grupos donde esté el acudiente, sin chats privados entre el adulto y el menor.",
      },
      {
        question: "¿Se puede castigar a un niño con ejercicio físico en un entrenamiento?",
        answer:
          "No es recomendable y puede constituir maltrato. El artículo 18 de la Ley 1098 de 2006 incluye el castigo y la humillación en la definición de maltrato infantil, y el artículo 18A, agregado por la Ley 2089 de 2021, no admite castigos físicos como forma de corrección ni disciplina.",
      },
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Autorización de imagen y consentimiento informado
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "autorizacion-uso-de-imagen-y-consentimiento-informado-menores-deportistas",
    title: "Autorización de uso de imagen y consentimiento informado de menores deportistas: qué debe firmar el acudiente",
    excerpt:
      "Los cuatro documentos que firma el representante legal al inscribir a un niño: consentimiento de práctica, uso de imagen, tratamiento de datos y atención médica. Qué debe decir cada uno, modelos de cláusula y por cuánto tiempo guardarlos.",
    category: "Guías",
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
          "Al inscribir a un menor en una escuela deportiva en Colombia, su representante legal debería firmar cuatro autorizaciones separadas: el consentimiento informado para la práctica deportiva, la autorización de tratamiento de datos personales, la autorización de uso de imagen y la autorización de atención médica en caso de urgencia. Las dos primeras son necesarias para prestar el servicio; la de imagen es voluntaria y revocable, y negarla no puede afectar la inscripción. La escuela debe conservar la prueba de cada autorización mientras el niño esté inscrito y por un tiempo prudente después, definido en su política de datos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Cuatro autorizaciones, cada una con su casilla y su firma: práctica, datos, imagen y atención médica. Firma el papá o la mamá con patria potestad, o quien tenga la custodia legal; al niño se le explica y se le escucha. Renueva las autorizaciones cada temporada, guarda la versión que firmó cada familia y ten una forma sencilla de revocar la de imagen.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Información general, no asesoría legal. Los modelos de cláusula son un punto de partida para adaptar: pide a un abogado que los revise según tu ciudad, tu deporte y tu forma jurídica. Ningún consentimiento exonera a la escuela de su deber de cuidado.",
      },
      { type: "h2", content: "¿Qué debe firmar el acudiente?" },
      {
        type: "table",
        headers: ["Documento", "¿Obligatorio para inscribir?", "Base legal o referencia", "¿Revocable?"],
        rows: [
          ["Consentimiento informado de práctica deportiva", "Sí, como condición del servicio", "No hay un formato legal único. En Bogotá, el IDRD exige el consentimiento firmado por el adulto responsable en el listado de inscritos (Resolución 639 de 2021, art. 11)", "Sí: equivale a retirar al deportista"],
          ["Autorización de tratamiento de datos personales", "Sí, para los datos indispensables", "Ley 1581 de 2012, arts. 7, 9 y 12; Decreto 1377 de 2013, art. 12 (compilado en el Decreto 1074 de 2015)", "Sí, salvo deber legal o contractual de conservar"],
          ["Autorización de uso de imagen", "No. Voluntaria", "Constitución, art. 15; Ley 23 de 1982, art. 87; Ley 1098 de 2006, art. 33; Ley 1581 de 2012", "Sí, en cualquier momento"],
          ["Autorización de atención médica y traslado", "Recomendada", "Ley 1751 de 2015, arts. 10 y 14 (la atención de urgencias no se puede negar)", "Sí"],
        ],
      },
      {
        type: "p",
        content:
          "El detalle de la Ley 1581 y el contrato de inscripción completo están en otras dos guías de este blog; aquí vemos qué debe decir cada autorización y cómo guardarla.",
      },
      { type: "h2", content: "¿Quién firma: el acudiente o el representante legal?" },
      {
        type: "p",
        content:
          "El Decreto 1377 de 2013 dice que la autorización para tratar datos de niños, niñas y adolescentes la otorga su representante legal, después de que el menor ejerza su derecho a ser escuchado. En la práctica, los representantes legales son los padres que ejercen la patria potestad, o quien tenga la custodia o la guarda por decisión de autoridad. «Acudiente» es una palabra de uso cotidiano, no una categoría legal: la abuela o el tío que lleva al niño al entrenamiento no necesariamente puede firmar por él.",
      },
      {
        type: "ul",
        items: [
          "Pide el nombre y el documento de quien firma y su parentesco con el niño, y anexa copia del registro civil o del documento que acredite la custodia.",
          "Si firma un familiar que no es el padre ni la madre, pide una autorización escrita de uno de ellos.",
          "Si los padres están separados y no se ponen de acuerdo sobre la imagen, no publiques.",
          "Explícale al niño, en palabras de su edad, qué se va a hacer con sus fotos y pregúntale si está de acuerdo. Con adolescentes, que firmen también: no reemplaza la firma del adulto.",
        ],
      },
      { type: "h2", content: "¿Qué debe decir el consentimiento informado de práctica?" },
      {
        type: "ul",
        items: [
          "Qué actividad se hace, con qué frecuencia y en qué sede.",
          "Los riesgos propios del deporte, descritos sin eufemismos: caídas, golpes, lesiones musculares o articulares.",
          "La declaración del acudiente sobre el estado de salud del niño y las condiciones médicas, alergias o medicamentos que la escuela debe conocer.",
          "La afiliación a salud (EPS) y, si existe, la póliza de accidentes y lo que cubre.",
          "Lo que hará la escuela si hay una lesión.",
          "Que el acudiente pudo hacer preguntas y que puede retirar al deportista cuando quiera.",
        ],
      },
      {
        type: "quote",
        content:
          "Yo, [NOMBRE], identificado con cédula [NÚMERO], en calidad de [PADRE / MADRE / REPRESENTANTE LEGAL] de [NOMBRE DEL MENOR], declaro que fui informado de que la práctica de [DEPORTE] implica riesgos propios de la actividad, como caídas, golpes y lesiones musculares o articulares, y autorizo su participación en los entrenamientos y actividades de [ESCUELA]. Declaro que el deportista está afiliado a [EPS] y que su estado de salud le permite practicar este deporte, con las siguientes condiciones que informo: [CONDICIONES, ALERGIAS, MEDICAMENTOS]. Me comprometo a informar cualquier cambio. Este consentimiento no exonera a la escuela de su deber de cuidado.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Evita frases como «la escuela no se hace responsable por ningún accidente». Frente a un consumidor, las cláusulas que limitan la responsabilidad del prestador o implican renuncia de derechos son abusivas e ineficaces según los artículos 42 y 43 de la Ley 1480 de 2011.",
      },
      { type: "h2", content: "¿Qué debe decir la autorización de uso de imagen?" },
      {
        type: "p",
        content:
          "El artículo 87 de la Ley 23 de 1982 da a toda persona el derecho de impedir que su retrato se exhiba o se ponga en el comercio sin su consentimiento expreso. Además, la foto de un niño identificable es un dato personal, así que le aplican el interés superior del menor y la autorización del representante legal. Una buena autorización separa los usos, porque no es lo mismo el álbum privado del equipo que una valla publicitaria:",
      },
      {
        type: "table",
        headers: ["Uso", "¿Se autoriza por separado?", "Recomendación"],
        rows: [
          ["Registro interno (foto del carnet, video para corregir técnica)", "Va con la autorización de datos", "Explica la finalidad y quién lo ve"],
          ["Redes sociales y página web de la escuela", "Sí, casilla propia", "Sin nombre completo, sin colegio ni dirección"],
          ["Publicidad paga o material comercial", "Sí, casilla propia", "Considera un acuerdo específico por campaña"],
          ["Transmisiones y fotos de torneos de terceros", "Sí, e informa quién es el organizador", "La escuela no controla lo que publiquen otros"],
        ],
      },
      {
        type: "quote",
        content:
          "Autorizo a [ESCUELA] para captar y usar la imagen y la voz de [NOMBRE DEL MENOR] en fotos y videos de entrenamientos y competencias, así: [ ] Sí [ ] No, en redes sociales y página web de la escuela, sin fines comerciales. [ ] Sí [ ] No, en publicidad y material comercial de la escuela. Esta autorización es gratuita, rige por la temporada [AÑO] y puedo revocarla en cualquier momento escribiendo a [CORREO]; la escuela retirará las publicaciones que estén bajo su control dentro de los [N] días hábiles siguientes. La escuela no publicará imágenes en vestuarios ni que afecten la dignidad del menor, ni datos que permitan ubicarlo. La negativa no afecta la inscripción. El menor fue escuchado y está de acuerdo.",
      },
      { type: "h2", content: "¿Qué debe decir la autorización de datos personales?" },
      {
        type: "p",
        content:
          "El artículo 12 de la Ley 1581 de 2012 obliga a informar, al pedir la autorización, para qué se usarán los datos, que es facultativo responder preguntas sobre datos sensibles o sobre datos de niños, los derechos del titular y la identificación y contacto del responsable. La salud y la huella son datos sensibles: requieren autorización explícita.",
      },
      {
        type: "quote",
        content:
          "Autorizo a [ESCUELA], identificada con NIT [NÚMERO], como responsable del tratamiento, para recolectar y usar mis datos y los de [NOMBRE DEL MENOR] con estas finalidades: inscripción, asignación de categoría, control de asistencia, cobros, comunicaciones sobre la actividad y atención de emergencias. Fui informado de que no estoy obligado a suministrar datos sensibles ni datos de menores; autorizo de forma explícita el tratamiento de los datos de salud que entrego, únicamente para la atención del deportista. Puedo conocer, actualizar, rectificar y suprimir los datos y revocar esta autorización escribiendo a [CORREO]. La política de tratamiento está en [ENLACE].",
      },
      { type: "h2", content: "¿Y la autorización de atención médica?" },
      {
        type: "p",
        content:
          "La Ley 1751 de 2015 garantiza la atención de urgencias sin que se exija documento o pago previo (artículo 10) y prohíbe negarla (artículo 14): en una urgencia vital, el centro de salud atiende al niño con o sin papel. La autorización sirve para lo que pasa antes y alrededor: que la escuela pueda dar primeros auxilios, llamar una ambulancia, trasladar al niño y entregar su información médica básica mientras llega el acudiente.",
      },
      {
        type: "quote",
        content:
          "En caso de accidente o enfermedad durante las actividades, autorizo a [ESCUELA] para prestar primeros auxilios básicos, solicitar atención de urgencias y trasladar a [NOMBRE DEL MENOR] al centro de salud más cercano o a [IPS DE PREFERENCIA], y para informar al personal de salud sus datos médicos relevantes. La escuela me avisará de inmediato a los teléfonos [NÚMERO 1] y [NÚMERO 2]. La escuela no suministrará medicamentos sin mi indicación escrita. Contacto de emergencia alterno: [NOMBRE Y TELÉFONO].",
      },
      { type: "h2", content: "¿Por cuánto tiempo hay que guardar estos documentos?" },
      {
        type: "p",
        content:
          "No existe una norma que fije un plazo específico para las autorizaciones de una escuela deportiva. Hay dos reglas que tiran en direcciones opuestas: la Ley 1581 obliga al responsable a conservar copia de la autorización (artículo 17) y a poder probarla, y el Decreto 1377 de 2013 (artículo 11) solo permite tratar los datos durante el tiempo razonable y necesario para la finalidad que justificó recogerlos. La salida es definir los plazos en tu política de tratamiento y cumplirlos.",
      },
      {
        type: "table",
        headers: ["Documento", "Criterio prudente de conservación", "Qué confirmar con tu abogado"],
        rows: [
          ["Autorización de datos e imagen", "Mientras el niño esté inscrito y, después, mientras sigas usando los datos o publicando las imágenes, más un margen para atender reclamos", "El margen según los términos de prescripción y de investigación de la SIC"],
          ["Consentimiento de práctica y autorización médica", "Toda la permanencia del deportista y un periodo posterior, por si hay una reclamación por lesión", "Cuántos años, teniendo en cuenta que los términos pueden contarse distinto para menores de edad"],
          ["Soportes de pago y facturas", "El término de los documentos contables", "Con tu contador: no dependen de la autorización de datos"],
          ["Fichas médicas de retirados", "Suprimir o anonimizar cuando ya no haya finalidad ni deber de conservar", "Procedimiento de supresión"],
        ],
      },
      { type: "h2", content: "Errores frecuentes" },
      {
        type: "ul",
        items: [
          "Una sola firma «para todo»: la familia no puede decir que no a las fotos sin quedarse sin cupo.",
          "Autorizaciones de imagen sin plazo ni forma de revocarlas.",
          "Firmas de quien no es representante legal.",
          "Formatos que nadie vuelve a encontrar cuando la familia pide prueba.",
          "Seguir publicando fotos de un niño que se retiró hace dos años.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no redacta tus formatos ni reemplaza la revisión de un abogado. Ayuda a que la información que respaldan esas autorizaciones esté ordenada: la inscripción del deportista con su acudiente vinculado, su historial y su ficha médica en un solo lugar, en vez de carpetas y hojas de cálculo repartidas.",
      },
      {
        type: "cta",
        title: "Inscripciones y fichas médicas en un solo lugar",
        description:
          "Cada deportista con su acudiente, su historial y su ficha médica, para escuelas, academias y clubes en Colombia. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "contrato-de-inscripcion-escuela-deportiva",
      "protocolo-de-proteccion-de-menores-en-escuelas-deportivas",
    ],
    about: [
      "autorización de uso de imagen de menores",
      "consentimiento informado en el deporte",
      "protección de datos de niños, niñas y adolescentes",
      "escuelas deportivas en Colombia",
    ],
    mentions: [
      "Ley 1581 de 2012",
      "Decreto 1377 de 2013",
      "Ley 23 de 1982",
      "Ley 1098 de 2006",
      "Ley 1751 de 2015",
      "Ley 1480 de 2011",
      "Superintendencia de Industria y Comercio",
      "IDRD",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Qué documentos debe firmar el acudiente al inscribir a un niño en una escuela deportiva?",
        answer:
          "Cuatro autorizaciones separadas: consentimiento informado de práctica deportiva, autorización de tratamiento de datos personales, autorización de uso de imagen (voluntaria y revocable) y autorización de atención médica y traslado en caso de urgencia. Las firma el representante legal del menor.",
      },
      {
        question: "¿Puede una escuela deportiva publicar fotos de los niños sin autorización?",
        answer:
          "No. El artículo 87 de la Ley 23 de 1982 permite impedir que el retrato de una persona se exhiba sin su consentimiento expreso, y la imagen de un niño identificable es un dato personal cuya autorización da el representante legal (Ley 1581 de 2012 y Decreto 1377 de 2013). La autorización debe ser voluntaria y revocable.",
      },
      {
        question: "¿Quién puede firmar la autorización de un menor deportista?",
        answer:
          "Su representante legal: los padres que ejercen la patria potestad o quien tenga la custodia o la guarda por decisión de autoridad. Un familiar que solo lo acompaña no necesariamente puede firmar; en ese caso, pide una autorización escrita de uno de los padres.",
      },
      {
        question: "¿El consentimiento informado libera a la escuela de responsabilidad por lesiones?",
        answer:
          "No. El consentimiento prueba que la familia fue informada de los riesgos, pero no elimina el deber de cuidado de la escuela. Las cláusulas que limitan la responsabilidad del prestador o implican renuncia de derechos del consumidor son abusivas según los artículos 42 y 43 de la Ley 1480 de 2011.",
      },
      {
        question: "¿Por cuánto tiempo debe guardar la escuela las autorizaciones firmadas?",
        answer:
          "No hay un plazo legal específico. La Ley 1581 de 2012 exige conservar prueba de la autorización y el Decreto 1377 de 2013 limita el tratamiento al tiempo razonable y necesario. Lo prudente es guardarlas mientras el niño esté inscrito y un periodo posterior definido en la política de datos, revisado con un abogado.",
      },
    ],
  },
];
