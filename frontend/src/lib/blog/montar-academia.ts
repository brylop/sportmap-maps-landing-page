import type { BlogPost } from "../blog-posts";

const AUTHOR = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
} as const;

export const montarAcademiaPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Academia de natación
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-montar-una-academia-de-natacion-en-colombia",
    title: "Cómo montar una academia de natación en Colombia: piscina, salvavidas, cupos y costos",
    excerpt:
      "Piscina propia o carriles alquilados, lo que exigen la Ley 1209 de 2008 y la Resolución 929 de 2026 del Ministerio de Salud, cuántos niños por profesor, niveles, rubros de inversión y un plan para los primeros 90 días.",
    category: "Guías",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Para montar una academia de natación en Colombia lo más sensato es empezar alquilando carriles en una piscina que ya tenga sus papeles al día, y no construyendo una. La piscina, propia o ajena, debe cumplir la Ley 1209 de 2008 (seguridad en piscinas), su reglamentación en el Decreto 780 de 2016 y los criterios técnicos de la Resolución 929 del 12 de mayo de 2026 del Ministerio de Salud: salvavidas certificado, cerramiento, elementos de rescate, reglamento de uso visible, agua con concepto sanitario y un tope de bañistas por metro cuadrado. Sobre esa base defines niveles, cupos pequeños por profesor y una mensualidad que cubra el agua, que es tu costo más alto.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Alquila carriles antes de construir, pide por escrito quién pone el salvavidas y el certificado de seguridad de la piscina, arma grupos de 4 a 6 niños por profesor en iniciación y cobra por nivel, no por edad. Deja la competencia y la afiliación a la liga para cuando tengas nadadores que la pidan.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa, no asesoría legal ni sanitaria. La vigilancia de piscinas la hacen la alcaldía y la secretaría de salud de cada municipio: confirma con ellas qué te aplica antes de firmar un contrato o abrir.",
      },
      { type: "h2", content: "¿Piscina propia o alquilada?" },
      {
        type: "table",
        headers: ["Aspecto", "Carriles alquilados", "Piscina propia"],
        rows: [
          ["Inversión inicial", "Baja: implementos y un depósito", "Alta: obra, equipos de tratamiento, licencia y adecuaciones de seguridad"],
          ["Quién responde ante la autoridad", "El responsable del establecimiento; tú respondes por tus alumnos y profesores", "Tú: certificado de seguridad, plan de seguridad, concepto sanitario y salvavidas"],
          ["Horarios", "Los que te dejen; suelen faltar las franjas de la tarde", "Los que tú definas"],
          ["Costo fijo", "Hora-carril o tarifa por alumno", "Agua, energía o gas para calentar, químicos, operario y mantenimiento"],
          ["Cuándo conviene", "Para validar la demanda con los primeros grupos", "Cuando ya llenas varias franjas y el arriendo te frena"],
        ],
      },
      {
        type: "p",
        content:
          "Si alquilas, el contrato debe decir al menos cuatro cosas: cuántos carriles y en qué franjas, quién aporta el salvavidas durante tus clases, qué pasa si la piscina cierra por mantenimiento y que el dueño te entrega copia del certificado de cumplimiento de normas de seguridad y del concepto sanitario vigentes. Colegios, cajas de compensación, clubes y conjuntos con piscina subutilizada en la tarde son los arrendadores más frecuentes.",
      },
      { type: "h2", content: "¿Qué exige la ley de piscinas?" },
      {
        type: "p",
        content:
          "La Ley 1209 de 2008 aplica a todas las piscinas de uso colectivo, públicas o privadas. Una academia casi siempre opera en una piscina de uso restringido (la ley menciona clubes, condominios, escuelas y hoteles) o de uso público. Esto es lo que más toca a una escuela de natación:",
      },
      {
        type: "table",
        headers: ["Requisito", "Qué pide", "Fuente"],
        rows: [
          ["Menores de 12 años", "No entran sin un adulto responsable. Excepción: los niños inscritos en escuelas de natación pueden ingresar bajo la vigilancia de un profesor o instructor", "Ley 1209 de 2008, art. 11 lit. a) y art. 14, parágrafo 2"],
          ["Salvavidas", "Mínimo uno por piscina, con conocimientos de reanimación cardiopulmonar y certificado", "Ley 1209 de 2008, art. 14"],
          ["Cuántos salvavidas", "Uno por cada estanque o conjunto de estanques de hasta 312 m² de lámina de agua; uno adicional si se supera, y más en actividades recreativas y escolares con afluencia mayor de 20 niños", "Resolución 929 de 2026 de Minsalud, anexo técnico, num. 12.3"],
          ["Elementos de rescate", "Botiquín, flotadores con cuerda y bastón o pértiga, visibles y en buen estado; teléfono, celular o radio de emergencia", "Ley 1209, art. 11; Resolución 929 de 2026, num. 12.4 y 12.5"],
          ["Dispositivos de seguridad", "Cerramiento con control de acceso, alarma de agua o detector de inmersión, cubiertas antiatrapamiento y sistema de liberación de vacío", "Ley 1209, arts. 11 y 12; Decreto 554 de 2015, compilado en el Decreto 780 de 2016"],
          ["Autorización de funcionamiento", "Certificado de cumplimiento de normas de seguridad expedido por la dependencia que defina el municipio, con vigencia de cuatro años", "Resolución 929 de 2026, arts. 4 y 5"],
          ["Plan de seguridad y reglamento de uso", "Plan de seguridad integral actualizado al menos cada tres años y reglamento de uso fijado en lugar visible (ducha previa, gorro obligatorio, horario y tope de bañistas)", "Resolución 929 de 2026, art. 7 y num. 12.2"],
          ["Agua", "Concepto sanitario de la autoridad de salud y un operario de mantenimiento certificado", "Resolución 929 de 2026, art. 5 num. 5.9 y num. 10.10"],
          ["Sanciones", "Multa de 50 a 1.000 salarios mínimos y cierre temporal hasta por cinco días en la primera falta; cierre definitivo en la tercera", "Ley 1209 de 2008, art. 16"],
        ],
      },
      {
        type: "p",
        content:
          "La Resolución 929 es reciente y da un año a las piscinas que ya funcionaban para hacer las adecuaciones que no impliquen obra. En la práctica, muchas piscinas están en plena transición: pregúntale al dueño en qué va su plan y pide los documentos. El certificado lo exige de forma expresa para las piscinas de uso colectivo abiertas al público; si la tuya es de uso restringido, confirma el trámite con la alcaldía.",
      },
      { type: "h2", content: "¿Cuántos alumnos por profesor y por carril?" },
      {
        type: "p",
        content:
          "No encontramos una norma colombiana que fije la proporción profesor-alumnos en clases de natación. Como referencia internacional, la coalición Water Safety USA recomienda, para niños pequeños o principiantes sin un cuidador en el agua, un instructor por cada cuatro alumnos y nunca más de seis (guía \"What to Look for in a Learn-to-Swim Program\"). Es una buena regla para tu academia, y además un argumento de venta frente a los papás.",
      },
      {
        type: "p",
        content:
          "Lo que sí fija la norma es el tope de personas en el agua. La Resolución 929 de 2026 (tabla 4) permite un bañista por cada 2,2 m² si la profundidad es menor de 1 metro, uno por cada 2,7 m² entre 1 y 1,5 metros, y uno por cada 4 m² por encima de 1,5 metros. Un carril de 25 por 2,5 metros tiene 62,5 m²: a 1,2 metros de profundidad, el máximo legal ronda los 23 bañistas. Tu cupo pedagógico será mucho menor, pero ese número te sirve para negociar cuántos grupos caben a la vez con los demás usuarios de la piscina.",
      },
      {
        type: "ul",
        items: [
          "El salvavidas no es el profesor. La resolución pide un distintivo exclusivo para ese personal durante su labor; exige que haya uno dedicado mientras das clase.",
          "Bebés y niños de 2 a 4 años: clase con acudiente en el agua y grupos muy pequeños.",
          "Iniciación (5 a 8 años): 4 a 6 niños por profesor, en la zona donde hacen pie.",
          "Perfeccionamiento y preequipo: puedes subir el cupo por carril si todos nadan 25 metros seguidos sin ayuda.",
          "Adultos: grupo aparte. No los mezcles con niños por llenar el carril.",
        ],
      },
      { type: "h2", content: "¿Cómo definir niveles y categorías?" },
      {
        type: "p",
        content:
          "En natación formativa se agrupa por nivel antes que por edad. Un esquema ilustrativo, que puedes renombrar: adaptación al agua, flotación y desplazamiento, crol y espalda, pecho y mariposa, y preequipo. Escribe qué debe lograr un niño para pasar de nivel y evalúalo cada bimestre: es lo que las familias quieren ver.",
      },
      {
        type: "p",
        content:
          "Si vas a competir, las categorías las pone la Federación Colombiana de Natación (Fecna). Su Instructivo Oficial 2026 de natación carreras toma la edad que el nadador cumple al 31 de diciembre: grupos de un año de los 7 a los 13, Juvenil A (14-15), Juvenil B (16-17), Junior (18-20) y Mayores (21 o más). Para inscribir nadadores en eventos federados necesitas ser club con reconocimiento deportivo y estar afiliado a tu liga departamental; los requisitos y tarifas de cada liga se consultan directamente con ella.",
      },
      { type: "h2", content: "Inversión inicial: qué comprar" },
      {
        type: "callout",
        variant: "info",
        content:
          "No ponemos precios de implementos ni de alquiler porque cambian por ciudad y proveedor y no encontramos una fuente pública confiable. Cotiza cada rubro con al menos dos proveedores. El único precio público de la tabla es el del software.",
      },
      {
        type: "table",
        headers: ["Rubro", "Qué incluye", "Tipo", "Precio"],
        rows: [
          ["Material didáctico", "Tablas, pull buoys, flotadores tubulares, cinturones, aros de fondo, juguetes de inmersión", "Una vez + reposición", "Cotizar"],
          ["Material de entrenamiento", "Aletas cortas, paletas, snorkel frontal, cronómetros", "Cuando abras perfeccionamiento", "Cotizar"],
          ["Seguridad propia", "Botiquín, silbatos, formación en primeros auxilios y RCP para todos los profesores", "Una vez + renovación", "Cotizar"],
          ["Dotación", "Gorros con tu marca, camisetas de profesor", "Se recupera con la inscripción", "Cotizar"],
          ["Carriles o piscina", "Hora-carril o tarifa por alumno; depósito si lo piden", "Mensual", "Cotizar con la piscina"],
          ["Póliza", "Accidentes para los alumnos y responsabilidad civil", "Anual", "Cotizar con un corredor"],
          ["Software de gestión", "Inscripciones, grupos, asistencia y cobros", "Mensual", "SportMaps: $0 hasta 20 alumnos; $69.000 COP/mes hasta 50"],
          ["Solo si construyes", "Obra, filtros y bombas, calentamiento, dispositivos de seguridad homologados, planos firmados por ingeniero o arquitecto y licencia", "Una vez", "Proyecto de ingeniería"],
        ],
      },
      { type: "h2", content: "¿Cómo es la estructura de costos?" },
      {
        type: "ol",
        items: [
          "Agua: el alquiler de carriles o, si la piscina es tuya, calentar, tratar y mantener el agua. Es el rubro que define tu precio.",
          "Profesores: como los grupos son pequeños, el costo por alumno es más alto que en un deporte de cancha.",
          "Salvavidas, si el contrato te lo carga a ti.",
          "Póliza, material y administración.",
        ],
      },
      {
        type: "p",
        content:
          "La cuenta es sencilla: suma lo que te cuesta una hora de clase (carril + profesor + parte del salvavidas) y divídelo entre los alumnos del grupo. Con cupos de 5, cada alumno que falta por llenar pesa un 20 %. Por eso conviene abrir pocas franjas y llenarlas antes de abrir más.",
      },
      { type: "h2", content: "Primeros 90 días" },
      {
        type: "table",
        headers: ["Semana", "Qué hacer"],
        rows: [
          ["1 a 2", "Visita tres piscinas, pide certificado de seguridad y concepto sanitario, negocia franjas por semestre"],
          ["3 a 4", "Contrato firmado, profesores con RCP vigente, póliza cotizada, niveles y criterios de paso escritos"],
          ["5 a 6", "Clases de prueba con evaluación de nivel; cada niño sale ubicado en un grupo"],
          ["7 a 8", "Primeras inscripciones y cobros; lista de espera por franja en vez de sobrecupo"],
          ["9 a 12", "Primera evaluación de nivel a las familias; decide si abres una franja nueva o un segundo carril"],
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps es un software colombiano para escuelas y academias deportivas. En una academia de natación sirve para lo administrativo: inscripciones con ficha médica del alumno, grupos por nivel y horario, asistencia desde el celular del profesor, cobro de mensualidades con Wompi y Mercado Pago, y Mapi, el asistente de WhatsApp con IA que lee los comprobantes que mandan las familias y recuerda los pagos. No reemplaza al salvavidas ni al plan de seguridad de la piscina. El plan Free Start cuesta $0 hasta 20 alumnos.",
      },
      {
        type: "cta",
        title: "Arranca tu academia con el plan gratis",
        description: "Grupos por nivel, asistencia y cobros con Wompi y Mercado Pago. $0 hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-academias-de-natacion",
      "poliza-seguro-escuela-deportiva-colombia",
      "como-fijar-precio-mensualidad-escuela-deportiva",
    ],
    about: [
      "academias de natación en Colombia",
      "seguridad en piscinas",
      "Ley 1209 de 2008",
      "emprendimiento deportivo",
    ],
    mentions: [
      "Ministerio de Salud y Protección Social",
      "Federación Colombiana de Natación",
      "Water Safety USA",
      "SENA",
      "Wompi",
      "Mercado Pago",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Qué ley regula las piscinas donde funciona una academia de natación en Colombia?",
        answer:
          "La Ley 1209 de 2008, reglamentada por el Decreto 554 de 2015 (compilado en el Decreto 780 de 2016) y por la Resolución 929 del 12 de mayo de 2026 del Ministerio de Salud, que adopta los criterios técnicos constructivos y de seguridad. Exigen salvavidas certificado, cerramiento, dispositivos de seguridad, elementos de rescate, reglamento de uso y certificado de cumplimiento.",
      },
      {
        question: "¿Cuántos salvavidas necesita una piscina con clases de natación?",
        answer:
          "La Ley 1209 de 2008 pide mínimo uno por piscina. La Resolución 929 de 2026 precisa uno por cada estanque o conjunto de estanques de hasta 312 m² de lámina de agua, uno adicional si se supera esa superficie y un aumento en actividades recreativas y escolares con afluencia mayor de 20 niños.",
      },
      {
        question: "¿Pueden entrar niños menores de 12 años sin sus papás a la clase de natación?",
        answer:
          "Sí. La regla general de la Ley 1209 de 2008 prohíbe el ingreso de menores de 12 años sin un adulto responsable, pero el parágrafo 2 del artículo 14 permite que los niños inscritos en escuelas de natación ingresen bajo la vigilancia de un profesor o instructor.",
      },
      {
        question: "¿Cuántos niños debe tener un profesor de natación por grupo?",
        answer:
          "No encontramos una norma colombiana que lo fije. Como referencia, Water Safety USA recomienda un instructor por cada cuatro niños principiantes sin cuidador en el agua, y nunca más de seis.",
      },
      {
        question: "¿Es mejor construir una piscina o alquilar carriles para empezar?",
        answer:
          "Alquilar. Con carriles alquilados validas la demanda con poca inversión y el responsable del establecimiento asume el certificado de seguridad, el tratamiento del agua y el mantenimiento. Construir tiene sentido cuando ya llenas varias franjas.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Escuela de patinaje
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-montar-una-escuela-de-patinaje-en-colombia",
    title: "Cómo montar una escuela de patinaje en Colombia: pista, modalidades, liga y categorías",
    excerpt:
      "Escenario, velocidad o artístico, protección obligatoria, afiliación a la liga y a la Federación Colombiana de Patinaje con las tarifas 2026, categorías por edad, festivales y un plan para los primeros 90 días.",
    category: "Guías",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Para montar una escuela de patinaje en Colombia necesitas tres cosas antes que cualquier otra: un escenario con piso liso y horas fijas, una modalidad clara para empezar (velocidad o artístico) y una regla de protección que no se negocia. Después viene lo federado: para que tus patinadores compitan en eventos de la Federación Colombiana de Patinaje (Fedepatin), el club debe tener reconocimiento deportivo vigente, estar afiliado a la liga de su departamento y registrar a deportistas, técnicos y delegados en la plataforma VELOPRO. En 2026 ese registro cuesta $350.000 por deportista nuevo, según la Resolución 001 de la Federación.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Empieza con iniciación y una sola modalidad, en un escenario con horas aseguradas por semestre. Exige casco, rodilleras y guantes desde la primera clase. Tramita el reconocimiento deportivo cuando tengas un grupo listo para festivales, y explícales a las familias desde la matrícula cuánto cuesta el carné federado.",
      },
      { type: "h2", content: "¿Qué escenario necesitas?" },
      {
        type: "p",
        content:
          "La iniciación se puede hacer en casi cualquier placa lisa: una cancha múltiple, el patio de un colegio o un coliseo. Lo que importa es que el piso no tenga grietas ni arenilla, que haya cerramiento para que no cruce gente y que puedas guardar conos y vallas. La competencia sí pide escenario específico: la velocidad se corre en pista y en ruta, y el artístico necesita una superficie cubierta, regular y con sonido.",
      },
      {
        type: "table",
        headers: ["Opción", "Ventajas", "Cuidado con"],
        rows: [
          ["Patinódromo o pista pública del municipio", "Es el escenario real de competencia; suele tener iluminación", "Los horarios se reparten entre clubes: solicítalos al ente deportivo municipal con anticipación"],
          ["Coliseo o cancha de colegio", "Cubierto, cerca de tus alumnos, sirve para artístico e iniciación", "Pide por escrito que se permite patinar: algunos pisos se protegen de las ruedas"],
          ["Placa de conjunto o parque", "Barata o por canje", "Lluvia, piso irregular y vecinos; define qué pasa cuando no se puede dictar clase"],
        ],
      },
      { type: "h2", content: "¿Velocidad o artístico?" },
      {
        type: "p",
        content:
          "Son dos escuelas distintas aunque compartan piso. La velocidad usa patín en línea y trabaja habilidad, velocidad y fondo: son las tres familias de pruebas de los festivales de menores de Fedepatin. El artístico se compite en figuras, libre, danza (solo danza y pareja), parejas de alto, show y precisión, según el Reglamento Técnico 2026 de la Federación (Resolución 009 del 23 de enero de 2026), que adopta el reglamento de World Skate.",
      },
      {
        type: "table",
        headers: ["", "Velocidad", "Artístico"],
        rows: [
          ["Patín", "En línea; la Federación limita el diámetro de rueda en menores", "El que pida el reglamento de World Skate para cada modalidad"],
          ["Grupo típico", "Más numeroso; se trabaja por tandas", "Más pequeño; mucha corrección individual"],
          ["Costos extra para la familia", "Ruedas y rodamientos, uniforme de club", "Trusa de competencia, música y montaje coreográfico"],
          ["Entrenador", "Técnico de carreras", "Técnico de artístico; a menudo se suma coreógrafo"],
        ],
      },
      {
        type: "p",
        content:
          "La Federación también maneja hockey y skateboarding, con sus propios reglamentos. Para una escuela nueva, lo normal es abrir una modalidad, consolidarla y sumar la segunda cuando tengas entrenador idóneo.",
      },
      { type: "h2", content: "¿Qué implementos y protección son obligatorios?" },
      {
        type: "p",
        content:
          "En los eventos de velocidad de menores, Fedepatin exige a todos los deportistas guantes con férula, rodilleras y casco (Resolución 007 del 20 de enero de 2026, art. 8, parágrafo 3). Aplica la misma regla en tu escuela, sin excepciones por calor o afán. La misma resolución limita el diámetro de las ruedas: hasta 80 mm para 7 y 8 años y hasta 84 mm para 9 y 10 años. Cuéntaselo a los papás antes de que compren un patín que el niño no podrá usar en un festival.",
      },
      {
        type: "ul",
        items: [
          "Cada niño: casco, rodilleras, coderas, guantes con férula y patines de su talla. Decide si los vendes, los alquilas o das una lista con referencias.",
          "La escuela: conos, platillos, vallas bajas, cuerdas, cronómetros, herramienta para ruedas y rodamientos, botiquín.",
          "Un banco de patines y protecciones para clases de prueba: sin eso, pierdes al niño que llega sin equipo.",
          "Seguro: la Federación advierte que no asume responsabilidad por accidentes en sus eventos y pide que cada patinador, delegado y entrenador tenga seguro de accidentes, EPS o medicina prepagada vigente.",
        ],
      },
      { type: "h2", content: "¿Cómo afiliarte a la liga y a la Federación?" },
      {
        type: "ol",
        items: [
          "Constituye el club y tramita el reconocimiento deportivo ante el ente deportivo de tu municipio (Decreto-Ley 1228 de 1995, art. 6: acta con al menos 10 deportistas, reglamento y solicitud).",
          "Afíliate a la liga de patinaje de tu departamento. Cada liga define sus requisitos y cuotas: pídelos por escrito.",
          "Registra en VELOPRO a deportistas, técnicos y delegados. La Federación pide foto, documento de identidad, aval de la liga, aval del club y soporte de pago.",
          "Inscribe a los eventos a través de la liga. En velocidad de menores, la Federación no recibe inscripciones enviadas directamente por los clubes.",
        ],
      },
      {
        type: "p",
        content:
          "Estas son las tarifas que fijó la Federación para 2026. Se ajustan cada enero en la misma proporción del salario mínimo, así que úsalas como referencia y revisa la resolución del año en curso:",
      },
      {
        type: "table",
        headers: ["Concepto (2026)", "Valor", "Fuente"],
        rows: [
          ["Registro de deportista nuevo (carné)", "$350.000", "Fedepatin, Resolución 001 del 13 de enero de 2026, art. 1"],
          ["Registro de técnico, dirigente o delegado nuevo", "$175.000", "Misma resolución"],
          ["Renovación anual de deportista, técnico o delegado", "$122.000", "Misma resolución"],
          ["Inscripción del club a un evento nacional o regional", "$350.000 ordinaria; $525.000 extraordinaria", "Misma resolución"],
          ["Inscripción de un deportista a un evento nacional", "$140.000 ordinaria; $210.000 extraordinaria", "Misma resolución"],
          ["Festivales Nacionales de Novatos", "Club: $175.000; deportista: $87.000 (ordinarias)", "Misma resolución"],
        ],
      },
      { type: "h2", content: "¿Cómo se fijan las categorías por edad?" },
      {
        type: "p",
        content:
          "Aquí está la trampa del patinaje: cada modalidad calcula la edad distinto. En velocidad se usa la edad deportiva con fecha de corte; para la temporada 2026-2027 se toma al 1 de julio de 2026 (Resolución 045 del 6 de mayo de 2026). En artístico se toman los años cumplidos al 31 de diciembre del año de la competencia (Resolución 009 de 2026, art. 4).",
      },
      {
        type: "table",
        headers: ["Modalidad", "Categorías y edades", "Fuente"],
        rows: [
          ["Velocidad, menores", "Mini infantil de 7, 8 y 9 años; preinfantil de 10 años", "Fedepatin, Resolución 007 de 2026, art. 4"],
          ["Velocidad, transición", "11, 12 y 13 años", "Fedepatin, convocatoria del Quinto Torneo Nacional de Transición 2026 (Resolución 047)"],
          ["Velocidad, mayores", "Prejuvenil, 14 años; juvenil, 15 a 17; mayores, 18 en adelante", "Fedepatin, Resolución 045 de 2026, art. 2"],
          ["Artístico, nivel promocional", "Pre Tots, 6 y 7 años; Tots, 8 y 9; Mini, 10 y 11; Infantil-Espoir, 12 y 13; Cadetes, 14 y 15; Juvenil-Youth, 16; Junior, 17 y 18; Senior, 19 en adelante", "Fedepatin, Resolución 009 de 2026, art. 4"],
          ["Artístico, nivel A (World Skate)", "Las mismas edades desde Tots (8 y 9 años)", "Fedepatin, Resolución 009 de 2026, art. 4"],
        ],
      },
      {
        type: "p",
        content:
          "Para tu escuela, arma primero grupos por nivel (iniciación, intermedio, avanzado) y dentro de cada uno ubica a los niños por edad federada. Un cupo razonable depende del tamaño de la placa y de cuántos monitores tengas; como criterio práctico, baja el número cuando hay niños que todavía no frenan solos. Guarda la fecha de nacimiento exacta: con dos fechas de corte distintas, un error de digitación termina en una inscripción rechazada.",
      },
      { type: "h2", content: "Festivales, chequeos y calendario" },
      {
        type: "p",
        content:
          "La puerta de entrada a la competencia son los festivales. En 2026 la Federación convocó Festivales Nacionales Interclubes de velocidad para menores (el primero en Bogotá, del 20 al 22 de febrero), torneos de transición y Festivales Nacionales de Novatos. Solo participan patinadores de clubes con reconocimiento deportivo vigente, afiliados a su liga y con carné al día. Los chequeos y festivales departamentales los programa cada liga: pide su calendario apenas te afilies y elige dos o tres eventos al año para los grupos nuevos, no todos.",
      },
      { type: "h2", content: "Inversión inicial: qué comprar" },
      {
        type: "table",
        headers: ["Rubro", "Tipo", "Precio"],
        rows: [
          ["Conos, platillos, vallas, cuerdas, cronómetros", "Una vez + reposición", "Cotizar"],
          ["Banco de patines y protecciones para clases de prueba", "Una vez", "Cotizar"],
          ["Herramienta, ruedas y rodamientos de repuesto", "Una vez + reposición", "Cotizar"],
          ["Botiquín y formación en primeros auxilios", "Una vez + anual", "Cotizar"],
          ["Uniforme de club (licra o trusa)", "Se recupera con la inscripción", "Cotizar con confeccionista"],
          ["Escenario", "Mensual o por semestre", "Cotizar con el administrador o el ente deportivo"],
          ["Póliza de accidentes y responsabilidad civil", "Anual", "Cotizar con un corredor"],
          ["Registro federado de técnico y delegado", "Anual", "$175.000 cada uno si son nuevos (Fedepatin, tarifas 2026)"],
          ["Software de gestión", "Mensual", "SportMaps: $0 hasta 20 alumnos; $69.000 COP/mes hasta 50"],
        ],
      },
      { type: "h2", content: "Primeros 90 días" },
      {
        type: "table",
        headers: ["Semana", "Qué hacer"],
        rows: [
          ["1 a 2", "Escenario con horas por escrito, modalidad definida, entrenador contratado"],
          ["3 a 4", "Regla de protección y lista de implementos para familias; banco de patines; póliza cotizada"],
          ["5 a 6", "Clases de prueba en colegios y conjuntos cercanos; grupos por nivel"],
          ["7 a 8", "Inscripciones y primeros cobros; acta de constitución del club si ya tienes 10 deportistas"],
          ["9 a 12", "Solicitud de reconocimiento deportivo, contacto con la liga y un festival interno para que las familias vean el avance"],
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps es un software colombiano para escuelas y clubes deportivos. En patinaje ayuda a tener una sola ficha por patinador con su fecha de nacimiento y sus acudientes, grupos y categorías por edad, asistencia desde el celular, carnets digitales y cobros de mensualidad con Wompi y Mercado Pago; Mapi, el asistente de WhatsApp con IA, lee los comprobantes y recuerda los pagos. El registro federado sigue haciéndose en la plataforma de la Federación: SportMaps no lo reemplaza.",
      },
      {
        type: "cta",
        title: "Ordena tu escuela de patinaje desde el primer grupo",
        description: "Categorías por edad, asistencia, carnets digitales y cobros. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "software-clubes-de-patinaje",
      "reconocimiento-deportivo-club-paso-a-paso",
      "poliza-seguro-escuela-deportiva-colombia",
    ],
    about: [
      "escuelas de patinaje en Colombia",
      "patinaje de velocidad",
      "patinaje artístico",
      "afiliación a ligas deportivas",
    ],
    mentions: [
      "Federación Colombiana de Patinaje",
      "World Skate",
      "VELOPRO",
      "Wompi",
      "Mercado Pago",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Qué necesita un club de patinaje para competir en eventos de la Federación Colombiana de Patinaje?",
        answer:
          "Reconocimiento deportivo vigente, afiliación a la liga de su departamento y carnetización vigente de sus patinadores ante la Federación. Deportistas, técnicos y delegados se registran en la plataforma VELOPRO, y las inscripciones a eventos se tramitan a través de la liga.",
      },
      {
        question: "¿Cuánto cuesta el carné de la Federación Colombiana de Patinaje en 2026?",
        answer:
          "Según la Resolución 001 del 13 de enero de 2026, el registro de un deportista nuevo vale $350.000, el de un técnico o delegado nuevo $175.000 y la renovación anual $122.000. Las tarifas se ajustan cada año con el salario mínimo.",
      },
      {
        question: "¿Cuáles son las categorías de patinaje de velocidad en Colombia?",
        answer:
          "En menores: mini infantil de 7, 8 y 9 años y preinfantil de 10. Transición: 11, 12 y 13 años. Luego prejuvenil (14), juvenil (15 a 17) y mayores (18 en adelante). Para la temporada 2026-2027 la edad deportiva se toma al 1 de julio de 2026.",
      },
      {
        question: "¿Qué protección es obligatoria en patinaje para niños?",
        answer:
          "En los eventos de velocidad de categoría menores, la Federación Colombiana de Patinaje exige guantes con férula, rodilleras y casco a todos los deportistas (Resolución 007 de 2026). Una escuela debería aplicar la misma regla en cada entrenamiento.",
      },
      {
        question: "¿Desde qué edad se compite en patinaje artístico en Colombia?",
        answer:
          "El Reglamento Técnico 2026 de Fedepatin incluye la categoría nacional Pre Tots para 6 y 7 años en el nivel promocional. El nivel A arranca en Tots, con 8 y 9 años. La edad se calcula con los años cumplidos al 31 de diciembre del año de la competencia.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Club de voleibol
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-montar-un-club-de-voleibol-en-colombia",
    title: "Cómo montar un club de voleibol en Colombia: cancha, categorías, liga y staff",
    excerpt:
      "Horas de coliseo, balones y malla según la edad, cómo armar categorías y cupos, qué pide la afiliación a la liga departamental y a la Federación Colombiana de Voleibol, torneos para empezar y un plan de 90 días.",
    category: "Guías",
    readTime: "8 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    ...AUTHOR,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para montar un club de voleibol en Colombia lo que más pesa es conseguir horas fijas de cancha cubierta, porque un grupo de 12 jugadores ocupa una cancha completa. Con eso resuelto, compra balones suficientes (uno por cada dos jugadores como mínimo), ajusta la malla a la edad, arma dos o tres categorías por año de nacimiento y contrata un entrenador por grupo. Para competir en torneos oficiales necesitas reconocimiento deportivo del ente municipal y afiliarte a la liga de voleibol de tu departamento, que es la que te conecta con la Federación Colombiana de Voleibol.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Asegura la cancha por semestre antes de matricular, empieza con minivoleibol y una categoría de base por rama, y calcula el cupo por cancha, no por entrenador. Juega torneos escolares y de festival el primer año; la afiliación a la liga llega cuando tengas equipos completos.",
      },
      { type: "h2", content: "¿Qué cancha necesitas y cuántas horas?" },
      {
        type: "p",
        content:
          "Las Reglas Oficiales de Voleibol de la FIVB describen una cancha de 18 por 9 metros, rodeada por una zona libre de al menos 3 metros y con un espacio de juego libre de obstáculos de mínimo 7 metros de altura. Esa altura es lo que descarta muchos salones y bodegas: mídela antes de arrendar. Un coliseo o un polideportivo cubierto es lo ideal; una cancha múltiple al aire libre sirve para empezar si aceptas perder clases por lluvia.",
      },
      {
        type: "p",
        content:
          "Para los más pequeños no necesitas la cancha completa. El reglamento de minivoleibol de los Juegos Intercolegiados Nacionales 2026 del Ministerio del Deporte usa canchas de 14 por 7 metros y juego de 4 contra 4: en una cancha reglamentaria puedes montar dos o tres minicanchas a lo ancho y atender a más niños en la misma hora.",
      },
      {
        type: "ul",
        items: [
          "Negocia horas por semestre, con días y franja fijos, y por escrito.",
          "Pregunta si el escenario ya tiene postes y malla, y quién responde si se dañan.",
          "Los colegios con coliseo subutilizado en la tarde suelen aceptar canje por cupos para sus estudiantes.",
          "Frecuencia habitual en formación: 2 o 3 sesiones semanales por categoría. Multiplica categorías por sesiones y sabrás cuántas horas-cancha comprar.",
        ],
      },
      { type: "h2", content: "¿Qué balones y qué malla comprar?" },
      {
        type: "table",
        headers: ["Elemento", "Referencia oficial", "Fuente"],
        rows: [
          ["Malla, mayores", "2,43 m en masculino y 2,24 m en femenino", "FIVB, Reglas Oficiales de Voleibol, regla 2.1"],
          ["Malla, minivoleibol infantil (nacidos en 2015 y 2016)", "2,15 m en mujeres y 2,35 m en hombres", "Ministerio del Deporte, Reglamento JIN 2026 de minivoleibol"],
          ["Malla, minivoleibol preinfantil (nacidos en 2017 y 2018)", "2,00 m en ambas ramas", "Ministerio del Deporte, Reglamento JIN 2026 de minivoleibol"],
          ["Balón, mayores", "65 a 67 cm de circunferencia y 260 a 280 g", "FIVB, Reglas Oficiales de Voleibol, regla 3.1"],
          ["Balón, minivoleibol", "Balón n.º 4", "Ministerio del Deporte, Reglamento JIN 2026 de minivoleibol"],
          ["Cancha de minivoleibol", "14 x 7 m, 4 contra 4, partidos a dos de tres sets de 15 puntos", "Ministerio del Deporte, Reglamento JIN 2026 de minivoleibol"],
        ],
      },
      {
        type: "p",
        content:
          "Por eso conviene una malla con postes de altura graduable. Las alturas intermedias para categorías entre el minivoleibol y mayores las define cada torneo: revisa la convocatoria de tu liga antes de fijar la tuya.",
      },
      { type: "h2", content: "¿Cómo armar categorías y cupos?" },
      {
        type: "p",
        content:
          "En voleibol se agrupa por año de nacimiento, y la ventana cambia según quién organiza. Estas son las que pudimos verificar para 2026:",
      },
      {
        type: "table",
        headers: ["Torneo", "Categorías", "Fuente"],
        rows: [
          ["Juegos Intercolegiados 2026, minivoleibol", "Preinfantil: nacidos en 2017 y 2018. Infantil: 2015 y 2016", "Ministerio del Deporte, Reglamento JIN 2026 de minivoleibol"],
          ["Juegos Intercolegiados 2026, voleibol", "Prejuvenil: nacidos en 2012, 2013 y 2014. Juvenil: 2009, 2010 y 2011", "Ministerio del Deporte, Reglamento JIN 2026 de voleibol"],
          ["Mundiales FIVB", "U17 de 2026: nacidos desde 2010. U19 de 2027: desde 2009. U21 de 2028: desde 2008", "CEV, \"Age limits for CEV and FIVB age group Volleyball Championships\""],
        ],
      },
      {
        type: "p",
        content:
          "No encontramos publicada la resolución de la Federación Colombiana de Voleibol con las categorías de sus campeonatos nacionales de clubes para 2026 o 2027, así que no la citamos: pídesela a tu liga. Sí hay reportes de prensa de campeonatos nacionales de base, como un nacional femenino U13 jugado en Armenia en octubre de 2026 (Vanguardia).",
      },
      {
        type: "p",
        content:
          "Para el cupo, piensa en la cancha. Como criterio práctico, 12 jugadores por cancha permiten jugar 6 contra 6 sin gente sentada; hasta 14 o 16 funciona si el entrenador rota bien. Por encima de eso, necesitas segunda cancha o asistente. En minivoleibol, con minicanchas de 4 contra 4, caben más niños por hora. Separa ramas desde la categoría en que tu liga las separe y no mezcles niveles muy distintos solo por completar equipo.",
      },
      {
        type: "ol",
        items: [
          "Abre minivoleibol mixto y una categoría de base por rama.",
          "Nombra cada categoría por los años que contiene (por ejemplo, \"2012-2014\"), además del sub-N.",
          "Fija cupo máximo por grupo y lista de espera.",
          "Cada enero, promueve categorías completas y revisa la convocatoria de la liga.",
        ],
      },
      { type: "h2", content: "¿Cómo afiliarte a la liga y a la Federación?" },
      {
        type: "p",
        content:
          "La Federación Colombiana de Voleibol, fundada en 1955 y afiliada a la FIVB y a la Confederación Sudamericana, está integrada por ligas departamentales; los clubes se afilian a la liga, no directamente a la Federación. El camino es el mismo de cualquier deporte asociado en Colombia:",
      },
      {
        type: "ol",
        items: [
          "Constituir el club con acta, al menos 10 deportistas y reglamento de funcionamiento (Decreto-Ley 1228 de 1995, art. 6). Una SAS también puede actuar como club si cumple esos requisitos.",
          "Solicitar el reconocimiento deportivo ante el ente deportivo de tu municipio. En Bogotá lo tramita el IDRD.",
          "Pedir la afiliación a la liga de voleibol de tu departamento, con los documentos y cuotas que ella defina. Solo puede haber una liga por deporte en cada departamento.",
          "Registrar jugadores y cuerpo técnico según el procedimiento de la liga para cada torneo.",
        ],
      },
      {
        type: "p",
        content:
          "Las cuotas de afiliación y de inscripción a torneos cambian por liga y no encontramos una tarifa nacional publicada: pídelas por escrito y súmalas a tu presupuesto anual.",
      },
      { type: "h2", content: "¿En qué torneos empezar?" },
      {
        type: "ul",
        items: [
          "Festivales internos y amistosos con otros clubes: sin costo de afiliación y con mucho tiempo de juego.",
          "Juegos Intercolegiados: tus jugadores compiten por su colegio, pero la base técnica es tuya. El minivoleibol exige entre 9 y 20 inscritos por equipo.",
          "Torneos y festivales privados por categorías, que no siempre piden afiliación.",
          "Torneos de la liga departamental, ya con reconocimiento deportivo y afiliación.",
          "Campeonatos nacionales de la Federación, a los que se llega por la liga. El campeonato nacional de 2026 fue además el primer evento clasificatorio de voleibol a los Juegos Deportivos Nacionales 2027, según el instructivo del Ministerio del Deporte.",
        ],
      },
      { type: "h2", content: "¿Qué staff necesitas?" },
      {
        type: "ul",
        items: [
          "Un entrenador por categoría. Dos grupos seguidos en la misma cancha los puede llevar la misma persona; dos al tiempo, no.",
          "Un asistente o monitor para minivoleibol, donde los grupos son más grandes y dispersos.",
          "Alguien de administración que lleve inscripciones, cobros y comunicación con familias, así sea de medio tiempo.",
          "Un delegado para torneos, que puede ser un padre de familia.",
          "Apoyo de fisioterapia por convenio cuando tengas categorías de competencia: hombro, rodilla y tobillo son las zonas que más carga recibe este deporte.",
        ],
      },
      {
        type: "p",
        content:
          "Ten presente la Ley 2210 de 2022, que reglamenta la actividad del entrenador deportivo: para ejercer hay que estar inscrito en el Registro de Entrenadores Deportivos, con título en el área o, para quienes ya ejercían sin título, con un registro provisional. Pídeles a tus entrenadores el soporte al contratarlos.",
      },
      { type: "h2", content: "Inversión inicial: qué comprar" },
      {
        type: "callout",
        variant: "info",
        content:
          "Tabla de rubros, sin precios: dependen de marca, ciudad y proveedor, y no encontramos una fuente pública confiable. Cotiza con dos proveedores. El único precio público es el del software.",
      },
      {
        type: "table",
        headers: ["Rubro", "Tipo", "Precio"],
        rows: [
          ["Balones de entrenamiento (uno por cada dos jugadores) y balones n.º 4 para mini", "Una vez + reposición", "Cotizar"],
          ["Malla con antenas y postes graduables, si el escenario no los tiene", "Una vez", "Cotizar"],
          ["Carro o tulas para balones, inflador, conos, bandas elásticas, tablero de puntos", "Una vez", "Cotizar"],
          ["Botiquín, hielo y formación en primeros auxilios", "Una vez + anual", "Cotizar"],
          ["Uniformes numerados y rodilleras", "Se recupera con la inscripción", "Cotizar con confeccionista"],
          ["Horas de cancha", "Mensual o por semestre", "Cotizar con el escenario"],
          ["Entrenadores", "Mensual", "Según contrato"],
          ["Póliza de accidentes y responsabilidad civil", "Anual", "Cotizar con un corredor"],
          ["Afiliación a la liga e inscripción a torneos", "Anual y por torneo", "Solicitar a la liga"],
          ["Software de gestión", "Mensual", "SportMaps: $0 hasta 20 alumnos; $69.000 COP/mes hasta 50"],
        ],
      },
      { type: "h2", content: "Primeros 90 días" },
      {
        type: "table",
        headers: ["Semana", "Qué hacer"],
        rows: [
          ["1 a 2", "Cancha con horas por escrito y altura verificada; categorías y cupos definidos"],
          ["3 a 4", "Balones y malla comprados, entrenadores contratados, póliza cotizada"],
          ["5 a 6", "Clases de prueba y convocatoria en colegios de la zona"],
          ["7 a 8", "Inscripciones, uniformes y primeros cobros; lista de espera por categoría"],
          ["9 a 12", "Primer festival interno o amistoso; acta de constitución del club y contacto con la liga si ya tienes 10 deportistas"],
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps es un software colombiano para escuelas, academias y clubes. Lo usan clubes de voleibol de Bogotá como Dynasty Volley Club, que con corte al 14 de octubre de 2026 gestionaba 502 deportistas activos, 2.666 asistencias y 494 carnets digitales en la plataforma. Para un club que arranca sirve para lo básico: categorías por año de nacimiento, asistencia desde el celular, cobro de mensualidades con Wompi y Mercado Pago y Mapi, el asistente de WhatsApp con IA que lee comprobantes y recuerda pagos. Los módulos de torneos y ligas están todavía en piloto.",
      },
      {
        type: "cta",
        title: "Organiza tu club desde la primera categoría",
        description: "Categorías por año de nacimiento, asistencia, carnets y cobros. $0 hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-clubes-de-voleibol",
      "reconocimiento-deportivo-club-paso-a-paso",
      "como-fijar-precio-mensualidad-escuela-deportiva",
    ],
    about: [
      "clubes de voleibol en Colombia",
      "minivoleibol",
      "categorías por año de nacimiento",
      "afiliación a ligas deportivas",
    ],
    mentions: [
      "Federación Colombiana de Voleibol",
      "FIVB",
      "Ministerio del Deporte",
      "Juegos Intercolegiados Nacionales",
      "IDRD",
      "Dynasty Volley Club",
      "Wompi",
      "Mercado Pago",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Qué medidas tiene una cancha de voleibol reglamentaria?",
        answer:
          "Según las Reglas Oficiales de la FIVB, 18 por 9 metros, con una zona libre de al menos 3 metros alrededor y un espacio de juego libre de obstáculos de mínimo 7 metros de altura. La malla va a 2,43 m en masculino y 2,24 m en femenino.",
      },
      {
        question: "¿Cómo se juega el minivoleibol en Colombia?",
        answer:
          "En los Juegos Intercolegiados Nacionales 2026 se juega 4 contra 4 en cancha de 14 por 7 metros, con balón n.º 4 y partidos a dos de tres sets de 15 puntos. La malla va a 2,00 m en preinfantil y a 2,15 m (mujeres) o 2,35 m (hombres) en infantil.",
      },
      {
        question: "¿Qué necesita un club de voleibol para afiliarse a la liga?",
        answer:
          "Estar constituido como club con al menos 10 deportistas, tener reconocimiento deportivo del ente deportivo municipal (Decreto-Ley 1228 de 1995) y cumplir los requisitos y cuotas que fije la liga de voleibol de su departamento. Los clubes se afilian a la liga, y las ligas a la Federación Colombiana de Voleibol.",
      },
      {
        question: "¿Cuántos jugadores debe tener un grupo de voleibol?",
        answer:
          "Como criterio práctico, 12 por cancha para poder jugar 6 contra 6, y hasta 14 o 16 con buena rotación. En minivoleibol, con minicanchas de 4 contra 4, caben más niños en el mismo espacio.",
      },
      {
        question: "¿Qué categorías tiene el voleibol en los Juegos Intercolegiados 2026?",
        answer:
          "Minivoleibol preinfantil (nacidos en 2017 y 2018) e infantil (2015 y 2016); y voleibol prejuvenil (2012 a 2014) y juvenil (2009 a 2011), según los reglamentos del Ministerio del Deporte.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Academia de porrismo o gimnasia
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-montar-una-academia-de-porrismo-o-gimnasia-en-colombia",
    title: "Cómo montar una academia de porrismo o gimnasia en Colombia: piso, seguridad, niveles y competencias",
    excerpt:
      "Piso y colchonetas, altura del espacio, progresiones seguras, niveles de la Federación Colombiana de Gimnasia con edades mínimas y tarifas 2026, registro de entrenadores, competencias de porrismo y póliza.",
    category: "Guías",
    readTime: "9 min",
    date: "14 Nov 2026",
    isoDate: "2026-11-14",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para montar una academia de porrismo o de gimnasia en Colombia, la inversión que decide todo es el espacio: un local con altura libre suficiente y un piso que amortigüe, con colchonetas de caída. Lo segundo son los entrenadores, que deben saber enseñar por progresiones y estar inscritos en el Registro de Entrenadores Deportivos (Ley 2210 de 2022). Lo tercero es un sistema de niveles: en gimnasia, la Federación Colombiana de Gimnasia compite por niveles del programa USAG con edad mínima desde los 4 años; en porrismo, los equipos se arman por nivel de dificultad y por edad. Con eso y una póliza de accidentes, puedes abrir con grupos pequeños y crecer.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Mide la altura del local antes de firmar, compra primero piso y colchonetas y después aparatos, y no dejes que nadie intente un elemento sin haber aprobado el anterior. Arma grupos por nivel, con cupo corto por entrenador, y compite solo cuando el nivel esté limpio.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Son deportes acrobáticos: una caída mal amortiguada es una lesión seria. Esta guía es orientativa y no reemplaza la formación técnica del entrenador ni el reglamento de seguridad de la federación que rija tu competencia.",
      },
      { type: "h2", content: "¿Qué piso y qué colchonetas necesitas?" },
      {
        type: "table",
        headers: ["Elemento", "Para qué", "Prioridad"],
        rows: [
          ["Piso amortiguado (rollos o paneles de espuma con carpeta; tarima con resortes en niveles altos)", "Base de todo: acrobacia de suelo, pirámides y lanzamientos", "Primera compra"],
          ["Colchonetas de caída gruesas", "Recibir saltos y elementos nuevos", "Primera compra"],
          ["Planos inclinados, octágonos, bloques y colchonetas plegables", "Progresiones: aprender el elemento por partes", "Primera compra"],
          ["Tumbl track o pista de aire", "Repetir acrobacia con menos impacto", "Segunda etapa"],
          ["Viga baja, barra a baja altura, minitrampolín, cajón de salto", "Gimnasia formativa por aparatos", "Segunda etapa"],
          ["Aparatos de competencia y foso de espuma", "Niveles altos de gimnasia", "Cuando el nivel lo exija"],
        ],
      },
      {
        type: "p",
        content:
          "Como referencia de tamaño, el practicable de suelo de la gimnasia artística mide 12 por 12 metros (Normas de Aparatos de la Federación Internacional de Gimnasia). Una academia formativa puede empezar con menos superficie, pero no con menos amortiguación. Las medidas del piso de competencia de porrismo las fija el reglamento de cada evento: revísalas antes de comprar los rollos, porque te conviene entrenar en un área igual a la que vas a pisar el día de la competencia.",
      },
      { type: "h2", content: "¿Qué altura debe tener el espacio?" },
      {
        type: "p",
        content:
          "No encontramos una norma colombiana que fije una altura mínima para academias de porrismo o gimnasia, así que no te damos un número como si fuera ley. El criterio práctico es medir la altura libre real (hasta lámparas, vigas, ductos y ventiladores, no hasta el techo) y compararla con lo más alto que vas a hacer: en porrismo, una pirámide de dos alturas y media más los brazos extendidos de quien va arriba, o un lanzamiento; en gimnasia, el punto más alto sobre la barra o el trampolín. Si el local no da, limita los elementos por escrito o busca otro.",
      },
      {
        type: "ul",
        items: [
          "Sin columnas dentro del área de práctica; las que haya, forradas.",
          "Paredes a distancia del borde del piso, sin vidrios ni espejos sin protección en la línea de caída.",
          "Ventilación e iluminación que no encandile hacia arriba.",
          "Zona de espera para acudientes separada del piso.",
          "Si tienes sede propia abierta al público, revisa uso del suelo y los requisitos del artículo 87 del Código de Policía (Ley 1801 de 2016).",
        ],
      },
      { type: "h2", content: "¿Cómo manejar la seguridad y las progresiones?" },
      {
        type: "ol",
        items: [
          "Ningún elemento nuevo sin el anterior dominado. Escribe la secuencia por nivel y pégala en la pared.",
          "Primero en plano inclinado o con ayuda, luego en colchoneta, luego en piso.",
          "En porrismo, toda elevación se aprende a baja altura y con cuidadores (spotters) antes de subirla.",
          "Un entrenador mira un solo elemento de riesgo a la vez; el resto del grupo trabaja estaciones seguras.",
          "Sin joyas, con el pelo recogido y uñas cortas.",
          "Botiquín, hielo, un protocolo escrito de qué hacer ante un golpe en cabeza o cuello y los teléfonos de los acudientes a la mano.",
          "Ficha médica de cada deportista, actualizada cada año.",
        ],
      },
      { type: "h2", content: "¿Cómo definir niveles y cupos?" },
      {
        type: "p",
        content:
          "En gimnasia artística femenina, la Federación Colombiana de Gimnasia (Fedecolgim) organiza campeonatos nacionales del Programa USAG Masificación con Prenivel y niveles 1 al 9. La edad se cuenta por año calendario (quien nació en diciembre de 2016 compite todo 2026 como de 10 años) y cada nivel tiene edad mínima:",
      },
      {
        type: "table",
        headers: ["Nivel USAG", "Requisito mínimo de edad", "Fuente"],
        rows: [
          ["Prenivel", "4 a 7 años; habilidades básicas sin coreografía, todas reciben medalla de participación", "Fedecolgim, Resolución 008 del 19 de febrero de 2026, anexos 1 y 2"],
          ["Nivel 1", "4 años cumplidos", "Misma resolución, anexo 1"],
          ["Nivel 2", "5 años cumplidos", "Misma resolución, anexo 1"],
          ["Nivel 3", "6 años cumplidos", "Misma resolución, anexo 1"],
          ["Niveles 4 a 7", "7 años cumplidos", "Misma resolución, anexo 1"],
          ["Nivel 8", "8 años cumplidos", "Misma resolución, anexo 1"],
        ],
      },
      {
        type: "p",
        content:
          "Dentro de cada nivel hay subdivisiones por edad, y deben existir al menos seis deportistas por subdivisión para que haya competencia. La gimnasia de alto rendimiento sigue otra lógica: la Federación Internacional exige cumplir 16 años en el año de la competencia para la categoría senior de artística femenina y 18 en la masculina.",
      },
      {
        type: "p",
        content:
          "En porrismo, los equipos se clasifican por nivel de dificultad y por división de edad. La International Cheer Union (ICU) publica cada año sus reglas y su tabla de edades; en el Mundial de la ICU de abril de 2026, en Orlando, la Selección Colombia compitió, por ejemplo, en Youth Coed Median y Junior Coed Advanced, según la Alcaldía de Bogotá. No pudimos consultar el reglamento vigente de la Federación Colombiana de Porrismo, así que pídeselo a tu liga antes de armar equipos.",
      },
      {
        type: "p",
        content:
          "Para tu academia: agrupa por nivel y, dentro del nivel, por edad. No conocemos una norma colombiana de cupo por entrenador; como criterio práctico, mantén grupos cortos en iniciación y suma un asistente cuando haya elementos con ayuda manual. El cupo real lo pone tu piso: cuántas estaciones seguras caben al mismo tiempo.",
      },
      { type: "h2", content: "¿Qué certificación deben tener los entrenadores?" },
      {
        type: "p",
        content:
          "La Ley 2210 de 2022 reglamenta la actividad del entrenador deportivo en todos los deportes. Para ejercer hay que estar inscrito en el Registro de Entrenadores Deportivos, lo que se acredita con la tarjeta que expide el Colegio Colombiano de Entrenamiento Deportivo. Pueden inscribirse quienes tengan título profesional, tecnológico o técnico en deporte, educación física o afines. Quienes ya ejercían sin título pueden obtener un registro provisional por cinco años, renovable por otros cinco, si son mayores de edad, acreditan al menos 12 meses de experiencia y aprueban una evaluación de idoneidad. La ley dio tres años de transición, que se cumplieron en mayo de 2025.",
      },
      {
        type: "ul",
        items: [
          "Pide copia de la tarjeta o del registro provisional al contratar.",
          "Suma la formación técnica propia del deporte: cursos de niveles de la federación en gimnasia, y cursos de reglas y seguridad de la federación o de la ICU en porrismo. Consulta la oferta vigente con cada entidad.",
          "Primeros auxilios y RCP para todo el que esté en el piso.",
        ],
      },
      { type: "h2", content: "¿En qué competencias participar?" },
      {
        type: "p",
        content:
          "En gimnasia, los nacionales USAG de Fedecolgim reciben clubes, colegios, escuelas y academias, y son los que dan aumento de nivel. En 2026 se programaron en Armenia (8 al 12 de abril), Cartagena (3 al 7 de junio), Ibagué (5 al 9 de agosto) y Valledupar (14 al 18 de octubre). La inscripción nominal costó $231.000 por gimnasta en Prenivel y $341.000 en niveles 1 a 9, más $110.000 por equipo (Resolución 008 de 2026); las inscripciones extemporáneas son más caras. Úsalo como referencia para explicarles a las familias cuánto cuesta competir, y revisa la resolución del año siguiente.",
      },
      {
        type: "p",
        content:
          "En porrismo, la Federación Colombiana de Porrismo organiza el Campeonato Nacional Interligas e Interclubes, y las ligas tienen sus propios campeonatos: la Liga Bogotana de Porrismo realizó en mayo de 2026 el Segundo Campeonato Distrital, con cerca de 1.800 deportistas de clubes afiliados, colegios y universidades, con apoyo del IDRD. También hay porrismo en los Juegos Intercolegiados. Para competir como club afiliado aplica la ruta general: reconocimiento deportivo ante el ente municipal y afiliación a la liga.",
      },
      { type: "h2", content: "¿Qué póliza necesitas?" },
      {
        type: "p",
        content:
          "Dos coberturas: accidentes personales para los deportistas y responsabilidad civil para la academia. En un deporte acrobático, léele la letra pequeña al corredor: que cubra entrenamientos y competencias, que no excluya acrobacias ni elevaciones, y que incluya gastos médicos y traslado. Varios escenarios y organizadores de eventos la piden para dejarte entrar. Prorratea el costo en la inscripción anual.",
      },
      { type: "h2", content: "Inversión inicial: qué comprar" },
      {
        type: "table",
        headers: ["Rubro", "Tipo", "Precio"],
        rows: [
          ["Piso amortiguado y carpeta", "Una vez", "Cotizar; es el rubro más alto"],
          ["Colchonetas de caída, planos inclinados, octágonos y bloques", "Una vez + reposición", "Cotizar"],
          ["Aparatos formativos (viga baja, barra, minitrampolín) o pista de aire", "Segunda etapa", "Cotizar"],
          ["Adecuación del local: protección de columnas, iluminación, ventilación, sonido", "Una vez", "Cotizar"],
          ["Botiquín y formación en primeros auxilios", "Una vez + anual", "Cotizar"],
          ["Uniformes de entrenamiento y de competencia", "Se recupera con la inscripción", "Cotizar con confeccionista"],
          ["Arriendo del local", "Mensual", "Cotizar; verifica altura libre"],
          ["Entrenadores con registro vigente", "Mensual", "Según contrato"],
          ["Póliza de accidentes y responsabilidad civil", "Anual", "Cotizar con un corredor"],
          ["Inscripción a campeonatos", "Por evento", "Gimnasia USAG 2026: $231.000 a $341.000 por gimnasta (Fedecolgim, Resolución 008 de 2026)"],
          ["Software de gestión", "Mensual", "SportMaps: $0 hasta 20 alumnos; $69.000 COP/mes hasta 50"],
        ],
      },
      { type: "h2", content: "Primeros 90 días" },
      {
        type: "table",
        headers: ["Semana", "Qué hacer"],
        rows: [
          ["1 a 2", "Local con altura medida y contrato; piso y colchonetas cotizados con dos proveedores"],
          ["3 a 4", "Piso instalado, entrenadores con registro verificado, progresiones por nivel escritas, póliza contratada"],
          ["5 a 6", "Clases de prueba con evaluación de nivel; cada niño queda ubicado en un grupo"],
          ["7 a 8", "Inscripciones con ficha médica y primeros cobros; reglas de seguridad firmadas por los acudientes"],
          ["9 a 12", "Muestra interna para familias; decide si el primer evento será un festival local o un campeonato de niveles"],
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps es un software colombiano para escuelas y academias deportivas. En una academia de porrismo o gimnasia sirve para llevar la ficha de cada deportista con su información médica y sus acudientes, armar grupos por nivel y horario, tomar asistencia desde el celular y cobrar mensualidades con Wompi y Mercado Pago; Mapi, el asistente de WhatsApp con IA, lee los comprobantes y recuerda los pagos. Dreamers Gymnastics, en Bogotá, lo usa con banco de horas por niveles y control de acceso por torniquete. No reemplaza el criterio del entrenador en el piso.",
      },
      {
        type: "cta",
        title: "Ordena tu academia desde el primer grupo",
        description: "Grupos por nivel, ficha médica, asistencia y cobros. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "software-escuelas-de-gimnasia",
      "software-escuelas-de-porrismo-cheerleading",
      "poliza-seguro-escuela-deportiva-colombia",
    ],
    about: [
      "academias de gimnasia en Colombia",
      "porrismo y cheerleading",
      "seguridad en deportes acrobáticos",
      "entrenadores deportivos",
    ],
    mentions: [
      "Federación Colombiana de Gimnasia",
      "Federación Colombiana de Porrismo",
      "International Cheer Union",
      "Federación Internacional de Gimnasia",
      "Liga Bogotana de Porrismo",
      "IDRD",
      "Dreamers Gymnastics",
      "Wompi",
      "Mercado Pago",
      "SportMaps",
    ],
    faqs: [
      {
        question: "¿Desde qué edad se puede competir en gimnasia artística en Colombia?",
        answer:
          "En el Programa USAG Masificación de la Federación Colombiana de Gimnasia, el Prenivel recibe niñas de 4 a 7 años y el nivel 1 exige 4 años cumplidos. El nivel 2 pide 5 años, el 3 pide 6, los niveles 4 a 7 piden 7 y el nivel 8 pide 8, según la Resolución 008 del 19 de febrero de 2026.",
      },
      {
        question: "¿Qué necesita un entrenador de porrismo o gimnasia para ejercer legalmente en Colombia?",
        answer:
          "Estar inscrito en el Registro de Entrenadores Deportivos que creó la Ley 2210 de 2022, con título en deporte, educación física o afines, o con un registro provisional si ya ejercía sin título, tiene 12 meses de experiencia y aprueba la evaluación de idoneidad. Además, la formación técnica propia de su deporte.",
      },
      {
        question: "¿Qué altura debe tener un local para una academia de porrismo?",
        answer:
          "No encontramos una norma colombiana que fije un mínimo. Mide la altura libre real, hasta lámparas y vigas, y compárala con el elemento más alto que vas a entrenar (pirámides y lanzamientos). Si no alcanza, limita esos elementos por escrito o busca otro espacio.",
      },
      {
        question: "¿Cuánto cuesta inscribir a una gimnasta en un campeonato nacional de niveles?",
        answer:
          "En 2026, la inscripción nominal a los Campeonatos Nacionales USAG de la Federación Colombiana de Gimnasia costó $231.000 en Prenivel y $341.000 en niveles 1 a 9, más $110.000 por equipo. Las inscripciones extemporáneas tienen un valor mayor.",
      },
      {
        question: "¿Qué póliza debe tener una academia de porrismo o gimnasia?",
        answer:
          "Accidentes personales para los deportistas y responsabilidad civil para la academia. Verifica que cubra entrenamientos y competencias, que no excluya acrobacias ni elevaciones y que incluya gastos médicos y traslado.",
      },
    ],
  },
];
