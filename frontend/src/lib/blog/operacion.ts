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

export const operacionPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────
  // 1. Control de asistencia con QR y torniquetes
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "control-de-asistencia-con-qr-y-torniquetes",
    title: "Control de asistencia en una escuela deportiva: lista, carnet QR y torniquetes ZKTeco",
    excerpt:
      "Tres formas de tomar asistencia —lista por excepción, carnet con QR y torniquete biométrico— con lo que cuesta en tiempo, lo que exige en la sede y cuándo cada una NO conviene.",
    category: "Organización",
    readTime: "8 min",
    date: "22 Sep 2026",
    isoDate: "2026-09-22",
    ...AUTOR_CEO,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "La forma más confiable de controlar la asistencia en una escuela deportiva es combinar canales según la sede: en cancha alquilada, una lista en el celular del entrenador que arranca con todos presentes y solo se corrigen los que faltan; donde hay fila en la entrada, el carnet digital del atleta con código QR escaneado por el entrenador; y en sedes propias con puerta, un torniquete o lector biométrico (por ejemplo ZKTeco) que registra la entrada solo. Los tres canales deben terminar en el mismo registro, para que la asistencia descuente clases, alimente los informes a las familias y avise cuando alguien deja de venir.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "No existe un único método que sirva para todas las escuelas. Empieza por la lista por excepción (cero hardware), suma el carnet QR cuando la fila de la entrada se vuelva lenta, y considera el torniquete solo si la sede es tuya y tienes puerta controlada. Lo importante es que todo caiga en un solo lugar.",
      },
      { type: "h2", content: "Por qué la asistencia se deja de tomar" },
      {
        type: "p",
        content:
          "En casi todas las escuelas el problema no es que el entrenador no quiera tomar lista: es que tomarla le cuesta. Llamar uno por uno a 25 niños en una cancha con ruido toma varios minutos que salen del entrenamiento. Por eso la lista termina en una foto del tablero, en un cuaderno que nadie consolida o, peor, en nada. Y sin asistencia confiable no puedes descontar clases de un plan por sesiones, no puedes contarle a un papá cuántas veces vino su hijo en el mes y no te enteras de que un atleta lleva tres semanas sin aparecer hasta que deja de pagar.",
      },
      {
        type: "p",
        content:
          "La regla de diseño que funciona es simple: el entrenador no debe construir la lista, solo corregir excepciones. Todo lo demás debe registrarse solo o con un gesto.",
      },
      { type: "h2", content: "Los tres canales, comparados" },
      {
        type: "table",
        headers: ["Canal", "Para quién", "Qué necesitas", "Tiempo por sesión (aprox.)", "Cuándo NO conviene"],
        rows: [
          [
            "Lista por excepción",
            "Cualquier escuela, sobre todo en cancha alquilada",
            "El celular del entrenador",
            "Lo que toma destildar a los que faltaron",
            "Grupos muy grandes con alta rotación, donde nadie conoce a todos de vista",
          ],
          [
            "Carnet digital con QR",
            "Niños sin celular, grupos grandes, entradas con fila",
            "Carnet emitido por la escuela (en el celular del acudiente o impreso) y el celular del entrenador para escanear",
            "Unos segundos por atleta",
            "Grupos de 8 a 10 atletas que el entrenador conoce de memoria: la lista es más rápida",
          ],
          [
            "Torniquete o lector biométrico ZKTeco",
            "Sedes propias con puerta: gimnasios, coliseos, clubes",
            "Lector compatible instalado en la entrada y conexión a internet",
            "Cero tiempo del entrenador",
            "Canchas alquiladas, sedes compartidas o escuelas sin control de la puerta",
          ],
        ],
      },
      { type: "h2", content: "Canal 1: lista por excepción en el celular" },
      {
        type: "p",
        content:
          "En SportMaps el entrenador abre la asistencia y, si ese día tiene una sola sesión programada o un solo equipo, la pantalla la selecciona sola. El listado del equipo arranca con todos en «presente» y el entrenador solo destilda a los que no llegaron. Hay buscador por nombre, que ayuda cuando el grupo es grande. Si se le olvidó tomar la lista, puede cargarla después: el entrenador tiene hasta 7 días para hacerlo y el administrador de la escuela no tiene límite, y una sesión ya cerrada se puede reabrir para corregirla.",
      },
      {
        type: "p",
        content:
          "Cuando la sesión se cierra, quienes no quedaron como presentes se marcan como ausentes, la familia recibe el aviso y, si un atleta acumula varias ausencias seguidas, el dueño de la escuela también se entera. El número de ausencias que dispara ese aviso lo configura la escuela (por defecto son 2). Esa alerta es la que te permite llamar a tiempo a una familia que se está alejando, en lugar de descubrirlo cuando ya se fue.",
      },
      { type: "h2", content: "Canal 2: carnet digital del atleta con QR" },
      {
        type: "p",
        content:
          "Cada atleta puede tener un carnet digital con su foto, su escuela y un código QR. La familia lo lleva en el celular o la escuela lo imprime. En la entrada, el entrenador abre el escáner dentro de la app, apunta la cámara al carnet y el atleta queda presente en la sesión de su equipo. El sistema verifica que el carnet sea de esa escuela, así que un carnet de otra escuela no marca asistencia por error.",
      },
      {
        type: "p",
        content:
          "Un detalle práctico: el carnet se puede emitir de forma masiva para toda la escuela sin exigir que cada atleta tenga foto, de modo que no te quedas esperando a que 200 familias suban una imagen para empezar. El reverso del carnet puede llevar datos útiles en una emergencia, como contacto del acudiente y observaciones médicas.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El QR del carnet lo escanea el entrenador con su celular. Si buscas que el atleta marque solo en un punto fijo sin intervención del entrenador, la opción hoy es el torniquete o lector biométrico de la sección siguiente.",
      },
      { type: "h2", content: "Canal 3: torniquetes y lectores biométricos ZKTeco" },
      {
        type: "p",
        content:
          "Si tu sede tiene puerta propia, un lector ZKTeco (huella, tarjeta o rostro, según el modelo) puede reportar cada entrada a SportMaps. Esta integración es un adicional que se activa por escuela. Los lectores que soportan el protocolo en la nube de ZKTeco (ADMS) por HTTPS se conectan directo; los modelos que no lo soportan se conectan a través de un pequeño programa puente instalado en un computador de la sede.",
      },
      {
        type: "p",
        content: "Cuando alguien marca en el lector, SportMaps hace varias cosas con ese evento:",
      },
      {
        type: "ul",
        items: [
          "Identifica al atleta y revisa que tenga una inscripción activa y vigente en la escuela.",
          "Revisa si tiene una mensualidad vencida. Un comprobante de pago ya enviado (pendiente de revisión) no cuenta como deuda.",
          "Si la entrada es válida y hay una sesión de su equipo ese día, lo marca presente en esa sesión, con el mismo efecto que si lo hubiera marcado el entrenador: descuenta la clase si su plan es por sesiones.",
          "Si hay ambigüedad (por ejemplo, varias disciplinas al mismo tiempo y no se sabe a cuál entró), no inventa: deja que el entrenador lo confirme.",
          "Desde la app, el personal autorizado puede abrir la puerta de forma remota.",
        ],
      },
      {
        type: "p",
        content:
          "La escuela también puede activar, si lo decide, el bloqueo automático por mora: cada 15 minutos el sistema revisa quién tiene una mensualidad vencida y le envía al lector la orden de bloquear su acceso, y desbloquea a quien ya pagó o ya envió su comprobante. Es una opción, no una regla: muchas escuelas prefieren no cerrarle la puerta a un niño y manejar la mora con conversación y recordatorios. En SportMaps la mora tampoco cancela la inscripción del atleta de forma automática.",
      },
      { type: "h3", content: "Biometría y menores de edad: lo que debes saber" },
      {
        type: "p",
        content:
          "La huella y el rostro son datos sensibles según la Ley 1581 de 2012. Con menores de edad necesitas la autorización expresa del acudiente, con una finalidad clara. Dos reglas que aplicamos: las plantillas biométricas se quedan en el lector y nunca se suben a SportMaps (al sistema solo llega «el usuario X entró a tal hora por tal dispositivo»), y ningún atleta debe quedarse sin poder registrarse por no aceptar la biometría: el carnet QR siempre es la alternativa.",
      },
      { type: "h2", content: "Paso a paso para montar el control de asistencia" },
      {
        type: "ol",
        items: [
          "Organiza los equipos y sus horarios. La asistencia se cuelga de la sesión de un equipo; sin equipos bien armados, ningún canal funciona.",
          "Arranca con la lista por excepción durante dos o tres semanas. Mide cuántas sesiones quedan sin lista: ese número es tu punto de partida.",
          "Emite los carnets digitales de todos los atletas y compártelos con las familias.",
          "Define con los entrenadores en qué grupos conviene escanear el QR (grupos grandes, entradas con fila) y en cuáles basta la lista.",
          "Si tienes sede propia con puerta, evalúa el lector ZKTeco: confirma el modelo, la conexión a internet de la sede y el consentimiento biométrico de los acudientes.",
          "Decide la política de ausencias: cuántas faltas seguidas disparan el aviso al dueño y quién llama a la familia.",
          "Revisa la asistencia cada mes en el informe del atleta que reciben los papás. Si el dato está mal, la familia te lo va a decir.",
        ],
      },
      { type: "h2", content: "Errores comunes" },
      {
        type: "ul",
        items: [
          "Comprar torniquetes antes de tener la operación ordenada. El hardware no arregla equipos mal armados ni planes sin vigencia.",
          "Usar la asistencia solo como castigo. Funciona mejor como dato para cuidar a la familia: quien falta mucho suele estar a punto de irse.",
          "Tener tres registros paralelos (cuaderno, lector y Excel). Si no llegan al mismo lugar, ninguno es confiable.",
          "Bloquear la puerta por mora sin avisar antes. Si vas a activar el bloqueo, comunícalo en el reglamento y en los recordatorios de cobro.",
        ],
      },
      {
        type: "cta",
        title: "Toma asistencia sin quitarle tiempo al entrenamiento",
        description:
          "Lista por excepción, carnet digital con QR y la integración con lectores ZKTeco, conectados a los cobros y al informe que reciben las familias.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "carnet-digital-deportista",
      "informe-mensual-del-deportista-para-padres",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
    ],
    about: [
      "control de asistencia deportiva",
      "control de acceso biométrico",
      "carnet digital con código QR",
      "gestión de escuelas deportivas",
    ],
    mentions: ["ZKTeco", "SportMaps"],
    faqs: [
      {
        question: "¿Cuál es la forma más rápida de tomar asistencia en una escuela de fútbol?",
        answer:
          "La lista por excepción: el listado del equipo arranca con todos presentes y el entrenador solo marca a los que faltaron. En grupos grandes o con fila en la entrada, escanear el carnet QR de cada atleta es más rápido que buscar nombres.",
      },
      {
        question: "¿Puedo conectar un torniquete ZKTeco al software de mi escuela deportiva?",
        answer:
          "Sí. SportMaps recibe los eventos de lectores ZKTeco, valida si el atleta tiene inscripción vigente y lo marca presente en la sesión de su equipo. Es un adicional que se activa por escuela y requiere que el lector tenga conexión a internet en la sede.",
      },
      {
        question: "¿Es legal usar la huella de los niños para controlar la asistencia?",
        answer:
          "Se puede, pero la huella es un dato sensible según la Ley 1581 de 2012 y con menores necesitas la autorización expresa del acudiente. Además debes ofrecer una alternativa sin biometría, como el carnet con QR, para quien no autorice.",
      },
      {
        question: "¿El torniquete puede bloquear la entrada a quien no ha pagado?",
        answer:
          "En SportMaps es una opción que la escuela decide activar. Si la activa, el sistema bloquea en el lector a quien tiene una mensualidad vencida y lo desbloquea cuando paga o envía su comprobante.",
      },
      {
        question: "¿Qué pasa si el entrenador olvidó tomar la lista?",
        answer:
          "Puede cargar la asistencia hasta 7 días después, y el administrador de la escuela no tiene límite de tiempo. Una sesión ya cerrada también se puede reabrir para corregirla.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 2. Categorías por año de nacimiento
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "categorias-por-ano-de-nacimiento-futbol-formativo",
    title: "Categorías por año de nacimiento en el fútbol formativo: tabla 2026 de la Difútbol y cómo organizar tu escuela",
    excerpt:
      "Qué años de nacimiento entran en Sub-13, Sub-15, Sub-17 y Sub-19/20 según el reglamento Interclubes 2026 de la Difútbol, qué documentos piden y cómo armar las categorías de una escuela formativa.",
    category: "Guías",
    readTime: "8 min",
    date: "7 Oct 2026",
    isoDate: "2026-10-07",
    ...AUTOR_CEO,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "En el fútbol formativo colombiano las categorías se definen por año de nacimiento, no por la edad exacta del jugador: para el Campeonato Nacional Interclubes 2026 de la Difútbol, la Sub-13 admite jugadores nacidos a partir del 1 de enero de 2013, la Sub-15 a partir del 1 de enero de 2011 y la Sub-17 a partir del 1 de enero de 2009. Es decir, el corte es el año calendario: un niño nacido el 2 de enero y otro nacido el 30 de diciembre del mismo año juegan en la misma categoría. Cada torneo y cada liga publica su propio reglamento, así que la tabla se revisa cada temporada.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Para saber la categoría de un jugador, mira su año de nacimiento y el reglamento del torneo al que vas. En 2026, «Sub-15» en la Difútbol significa nacidos en 2011 o después. Dentro de tu escuela puedes agrupar por año (Categoría 2014) o por bandas de dos años, pero los equipos que compiten deben respetar el corte del torneo.",
      },
      { type: "h2", content: "Tabla 2026: categorías del Campeonato Nacional Interclubes (Difútbol)" },
      {
        type: "p",
        content:
          "Estos son los regímenes de edad que fija el artículo 12 del reglamento del Campeonato Nacional Interclubes 2026, publicado por la División Aficionada del Fútbol Colombiano (difutbol.org). En cada categoría un club puede inscribir hasta 30 jugadores.",
      },
      {
        type: "table",
        headers: ["Categoría", "Rama", "Quiénes pueden jugar (2026)"],
        rows: [
          ["Sub-13", "Masculina y femenina", "Nacidos a partir del 1 de enero de 2013"],
          ["Sub-15", "Masculina y femenina", "Nacidos a partir del 1 de enero de 2011"],
          ["Sub-17", "Masculina y femenina", "Nacidos a partir del 1 de enero de 2009"],
          ["Sub-19/20", "Masculina", "25 nacidos a partir del 1 de enero de 2007 y hasta 5 nacidos a partir del 1 de enero de 2006"],
          ["Sub-19", "Femenina", "Nacidas a partir del 1 de enero de 2007"],
          ["Sub-23", "Femenina", "25 nacidas a partir del 1 de enero de 2003 y hasta 5 de cualquier edad"],
          ["Primera C", "Masculina", "Edad libre"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Esta tabla es del reglamento Interclubes 2026 de la Difútbol. Las ligas departamentales, los Juegos Intercolegiados y los torneos privados publican sus propias categorías y fechas de corte. Por ejemplo, el reglamento de fútbol de los Juegos Intercolegiados Nacionales 2026 de MinDeporte define la categoría prejuvenil con nacidos en 2012, 2013 y 2014, y la juvenil con nacidos en 2009, 2010 y 2011. Antes de inscribir un equipo, lee el reglamento del torneo específico.",
      },
      { type: "h2", content: "Cómo calcular la categoría de un jugador" },
      {
        type: "p",
        content:
          "La regla práctica para las categorías «Sub-N» con corte al 1 de enero es: año de la temporada menos N es el año de nacimiento más antiguo permitido. Para 2026, Sub-13 es 2026 − 13 = 2013; Sub-15 es 2011; Sub-17 es 2009. Cualquier jugador nacido en ese año o después puede jugar en la categoría. Un jugador más joven puede subir a una categoría mayor, pero uno mayor no puede bajar.",
      },
      {
        type: "p",
        content:
          "Fíjate en un efecto de esta regla: como el corte es el año calendario, en la misma categoría conviven niños con casi doce meses de diferencia en edad. A los 9 o 10 años, eso se nota en tamaño y coordinación. Muchos entrenadores formativos lo tienen en cuenta al evaluar, para no confundir madurez física con talento.",
      },
      { type: "h2", content: "Documentos que pide la Difútbol para inscribir jugadores" },
      {
        type: "p",
        content: "Según el mismo reglamento 2026 (artículos 14 a 19), para la inscripción de jugadores se pide, entre otros:",
      },
      {
        type: "ul",
        items: [
          "Inscripción de todos los jugadores a través del sistema COMET de la Federación Colombiana de Fútbol. Quien ya tiene ficha nacional solo aporta su número de COMET.",
          "Para quien se inscribe por primera vez: original del registro civil de nacimiento y fotocopia de la tarjeta de identidad o cédula. La Difútbol puede pedir además la partida de bautismo.",
          "El registro civil o la partida de bautismo deben haberse inscrito con al menos tres años de antelación al inicio del campeonato.",
          "Los jugadores menores de 17 años deben presentar prueba de resonancia magnética cuando se les exija.",
          "La planilla de inscripción de menores de 18 años debe estar firmada por uno de los padres o el representante legal.",
          "El club debe inscribir un delegado y un cuerpo técnico, y ningún jugador puede actuar sin su carné.",
        ],
      },
      {
        type: "p",
        content:
          "El reglamento trata como falta grave la falsedad en la edad o la adulteración de documentos, con pérdida de puntos y posible expulsión del equipo del campeonato. Por eso conviene que la escuela tenga desde el primer día el documento y la fecha de nacimiento correctos en la ficha de cada atleta, y no solo en la carpeta del delegado.",
      },
      { type: "h2", content: "Cómo organizar las categorías dentro de tu escuela" },
      {
        type: "p",
        content:
          "Una escuela formativa no necesita copiar exactamente las categorías de los torneos para sus entrenamientos. Lo habitual en Colombia es una de estas tres opciones:",
      },
      {
        type: "table",
        headers: ["Modelo", "Ejemplo", "Ventaja", "Cuándo NO conviene"],
        rows: [
          [
            "Un año por grupo",
            "Categoría 2015, Categoría 2016",
            "Grupos parejos en edad; fácil de explicar a las familias",
            "Escuelas pequeñas: quedan grupos de 5 o 6 niños",
          ],
          [
            "Bandas de dos años",
            "2014-2015, 2016-2017",
            "Grupos de tamaño razonable con un solo entrenador",
            "Cuando un grupo compite: el torneo puede no aceptar a los mayores",
          ],
          [
            "Igual que el torneo",
            "Sub-13, Sub-15",
            "El equipo que entrena es el que compite",
            "Iniciación (5 a 8 años), donde aún no hay competencia oficial",
          ],
        ],
      },
      {
        type: "ol",
        items: [
          "Haz el listado de atletas con su fecha de nacimiento verificada con el documento (registro civil o tarjeta de identidad).",
          "Define qué grupos son solo de formación y cuáles van a competir, y en qué torneos.",
          "Para los grupos que compiten, aplica el corte del reglamento del torneo de esa temporada.",
          "Nombra las categorías de forma estable (por año de nacimiento) para que no cambien cada enero: «Categoría 2014» sigue siendo la misma; «Sub-12» cambia de jugadores cada año.",
          "Comunica a las familias en qué categoría está su hijo y por qué, antes de que empiece la temporada.",
          "Revisa los cortes cada año cuando la Difútbol o tu liga publiquen el nuevo reglamento.",
        ],
      },
      { type: "h2", content: "Cómo lo maneja SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps la categoría es un dato, no texto escrito en el nombre del equipo. La escuela parte del catálogo de categorías oficiales de su deporte y puede agregar las suyas: el caso típico es la Sub-19, que se juega mucho en Colombia aunque no esté en la lista estándar de FIFA, o una categoría propia como «2014-2015». Cada equipo pertenece a una categoría, y un atleta puede estar en más de una (por ejemplo, fútbol y fútbol sala), algo frecuente en las escuelas que también compiten en futsal.",
      },
      {
        type: "p",
        content:
          "La ficha de cada atleta guarda su fecha de nacimiento, su documento y sus acudientes, así que armar la planilla de un torneo no exige reconstruir los datos desde los grupos de WhatsApp. Y como las categorías están estructuradas, puedes ver cuántos atletas tienes por categoría y rama sin contar a mano.",
      },
      {
        type: "cta",
        title: "Ordena tus categorías desde el primer día",
        description:
          "Ficha del atleta con documento y fecha de nacimiento, categorías oficiales y propias, equipos por categoría y atletas en más de una.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "software-escuelas-de-futbol-colombia",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
      "datos-de-menores-ley-1581-escuelas-deportivas",
    ],
    about: [
      "categorías del fútbol formativo",
      "Campeonato Nacional Interclubes",
      "fútbol aficionado en Colombia",
      "gestión de escuelas de fútbol",
    ],
    mentions: ["Difútbol", "Federación Colombiana de Fútbol", "COMET", "MinDeporte", "Juegos Intercolegiados Nacionales", "SportMaps"],
    faqs: [
      {
        question: "¿En qué categoría juega un niño nacido en 2013 en 2026?",
        answer:
          "En el Campeonato Nacional Interclubes 2026 de la Difútbol, un niño nacido en 2013 está en la edad límite de la Sub-13, que admite nacidos a partir del 1 de enero de 2013. También puede jugar en categorías mayores, como Sub-15, si su club lo inscribe ahí.",
      },
      {
        question: "¿Las categorías de fútbol en Colombia son por edad o por año de nacimiento?",
        answer:
          "En los torneos de la Difútbol son por año de nacimiento, con corte al 1 de enero. Por eso dos jugadores nacidos en enero y en diciembre del mismo año juegan en la misma categoría.",
      },
      {
        question: "¿Qué documentos piden para inscribir a un niño en un torneo de la Difútbol?",
        answer:
          "Se inscribe por el sistema COMET de la Federación. La primera vez se presenta el original del registro civil y copia de la tarjeta de identidad; la planilla de menores debe firmarla uno de los padres, y a menores de 17 años pueden pedirles resonancia magnética.",
      },
      {
        question: "¿Qué es la categoría Sub-19/20 de la Difútbol?",
        answer:
          "Es la categoría juvenil masculina del Interclubes. En 2026 cada club puede inscribir 25 jugadores nacidos a partir del 1 de enero de 2007 y hasta 5 nacidos a partir del 1 de enero de 2006.",
      },
      {
        question: "¿Un jugador mayor puede jugar en una categoría menor?",
        answer:
          "No. El corte marca el año de nacimiento más antiguo permitido, así que un jugador más joven puede subir de categoría pero uno mayor no puede bajar. Jugar con un jugador fuera de edad se sanciona con pérdida de puntos.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 3. Planificación por mesociclos
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "planificacion-entrenamiento-mesociclos-escuela",
    title: "Planificación del entrenamiento por mesociclos en una escuela deportiva: guía práctica",
    excerpt:
      "Qué es un mesociclo, cómo se divide en microciclos y sesiones, cómo medir la carga con el RPE de la sesión y qué cambia cuando un club tiene partidos los fines de semana.",
    category: "Guías",
    readTime: "8 min",
    date: "29 Sep 2026",
    isoDate: "2026-09-29",
    ...AUTOR_CEO,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Planificar por mesociclos significa organizar el entrenamiento en bloques de unas cuatro semanas con un objetivo claro (por ejemplo, fundamentos de pase o preparación para un torneo), dividir cada bloque en semanas o microciclos con su propósito y su carga, y bajar cada semana a sesiones concretas. En una escuela deportiva, la ventaja no es la teoría: es que el entrenador sabe qué toca hoy, la escuela puede revisar si se cumplió lo planeado y la carga se reparte sin amontonar trabajo pesado justo antes o después de un partido.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Macrociclo (la temporada) → mesociclo (un mes, un objetivo) → microciclo (una semana) → sesión. Marca los partidos primero, porque ordenan toda la semana. Registra un número de esfuerzo por sesión (RPE de 0 a 10) y sus minutos: con eso ya puedes comparar semanas.",
      },
      { type: "h2", content: "Los niveles de la planificación" },
      {
        type: "table",
        headers: ["Nivel", "Duración típica", "Qué define", "Ejemplo en una escuela de fútbol"],
        rows: [
          ["Macrociclo", "Temporada (6 a 12 meses)", "Objetivos del año, torneos, periodos de descanso", "Febrero a noviembre, con el Interclubes como torneo principal"],
          ["Mesociclo", "3 a 5 semanas", "Un objetivo de formación o de rendimiento y su forma de evaluarlo", "Marzo: juego de posesión y primer pase"],
          ["Microciclo", "1 semana", "Tipo de cada día, carga prevista, partidos", "Martes técnico, jueves táctico, sábado partido"],
          ["Sesión", "60 a 120 minutos", "Bloques, ejercicios, minutos, materiales", "Calentamiento 15', rondos 20', juego reducido 25', partido 20'"],
        ],
      },
      { type: "h2", content: "El día de partido ordena la semana (índice MD)" },
      {
        type: "p",
        content:
          "En fútbol se usa la notación MD (match day): MD es el día del partido, MD-1 el día anterior, MD+1 el siguiente, y así. Sirve para hablar de la semana en función del partido y no del calendario. La lógica general: lejos del partido (MD-4, MD-3) caben los trabajos más exigentes; cerca (MD-1) la sesión es corta y de activación; después (MD+1) se recupera.",
      },
      {
        type: "p",
        content:
          "El error más común al hacerlo a mano es contar mal los índices cuando hay dos partidos en la misma semana. Si juegas miércoles y sábado, el jueves es a la vez MD+1 del miércoles y MD-2 del sábado, y tratarlo solo como «recuperación» o solo como «carga» lleva a errores. Otro error clásico: rotular un día como «regenerativo» y llenarlo de fuerza y sprints. El rótulo tranquiliza a quien lo lee, pero la carga real es alta.",
      },
      { type: "h2", content: "Cómo medir la carga sin GPS: RPE de la sesión" },
      {
        type: "p",
        content:
          "Una forma sencilla y muy usada de medir la carga interna es el método de RPE de la sesión (Foster): al terminar, se le pide al grupo que califique el esfuerzo de 0 a 10 y se multiplica por los minutos de la sesión. El resultado se expresa en unidades arbitrarias (UA). Ejemplo ilustrativo: una sesión de 90 minutos con RPE 6 suma 540 UA. Sumando las sesiones obtienes la carga de la semana y puedes comparar una semana con otra.",
      },
      {
        type: "p",
        content:
          "Con varias semanas de datos aparecen indicadores útiles: la monotonía (si todos los días se parecen demasiado en carga), el strain (carga por monotonía) y la relación entre la carga aguda y la crónica (ACWR), que compara la última semana con el promedio del último mes. No necesitas dominarlos para empezar, pero sí registrar el dato con constancia: sin RPE no hay ningún número que comparar.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Con pocos datos, estos indicadores engañan. Con menos de tres sesiones con RPE en la semana, la monotonía no dice nada, y la relación aguda:crónica necesita al menos cuatro semanas de historia. Mejor no mostrar un número que mostrar uno falso.",
      },
      { type: "h2", content: "Paso a paso para planificar un mesociclo" },
      {
        type: "ol",
        items: [
          "Fija el objetivo del mes en una frase y cómo lo vas a evaluar (por ejemplo, toma de decisiones y técnica individual, con una nota de 1 a 10 al inicio y al final).",
          "Ubica los partidos y torneos del mes en el calendario. Sin esto no puedes calcular los índices MD.",
          "Divide el mes en microciclos (semanas). Define el foco de cada semana y su carga relativa: por ejemplo, semana 1 media, semana 2 alta, semana 3 alta, semana 4 de descarga.",
          "Asigna a cada día un tipo: entrenamiento, partido, activación, regenerativo o descanso, con el RPE y los minutos que planeas.",
          "Diseña las sesiones por bloques, con sus minutos y si el bloque es técnico, táctico, físico o mixto.",
          "Después de cada sesión, registra el RPE real y la asistencia.",
          "Al cerrar el mes, compara lo planeado con lo ejecutado y evalúa el objetivo. Ajusta el siguiente mesociclo con esa información.",
        ],
      },
      { type: "h2", content: "Qué hace SportMaps en la planificación" },
      {
        type: "p",
        content:
          "Los entrenadores y la administración de la escuela tienen en SportMaps un módulo de planificación por equipo que sigue esa misma estructura:",
      },
      {
        type: "ul",
        items: [
          "Mesociclos con sus semanas (microciclos), creados en un solo paso para que nunca quede un mes sin sus semanas.",
          "Cada día con su tipo (entrenamiento, partido, activación, regenerativo o descanso), RPE planificado y minutos.",
          "Índice MD calculado automáticamente desde los partidos, incluso cuando el partido cae en la semana anterior. No se escribe a mano.",
          "Varias sesiones el mismo día (por ejemplo, gimnasio en la mañana y cancha en la tarde).",
          "Sesiones por bloques con minutos y componente (técnico, táctico, físico o mixto), y la pizarra táctica disponible dentro del bloque.",
          "Duplicar una semana sobre otra para no rehacer el mismo patrón cada vez.",
          "Carga de la sesión con RPE × minutos, resumen por semana con monotonía, strain y relación aguda:crónica cuando hay datos suficientes, y alertas de partidos muy seguidos o días sin descanso.",
          "Carga por atleta, cruzando el RPE de la sesión con su asistencia real.",
          "Evaluación del mesociclo con una rúbrica de seis indicadores (técnica individual, toma de decisiones, principios de juego, condición física, comportamiento colectivo y rendimiento competitivo) puntuados de 1 a 10 al inicio, en las semanas 2, 3 y 4, y al final.",
          "La carga mensual aparece en el informe del atleta que reciben las familias.",
        ],
      },
      { type: "h2", content: "Cuándo NO hace falta tanto detalle" },
      {
        type: "p",
        content:
          "Si tu escuela tiene grupos de iniciación de 5 a 8 años que entrenan dos veces por semana, no necesitas relación aguda:crónica ni rótulos MD. Con un objetivo por mes, sesiones por bloques y la asistencia es suficiente. El detalle de carga tiene sentido en categorías que compiten con frecuencia, en grupos que entrenan tres o más veces por semana y en clubes donde varios entrenadores comparten jugadores. Planificar más de lo que se va a usar también es desperdicio.",
      },
      {
        type: "cta",
        title: "Planifica la temporada de tus equipos",
        description:
          "Mesociclos, microciclos, sesiones por bloques, carga con RPE y evaluación del mes, en la misma app donde tomas asistencia.",
        href: "/entrenadores",
        label: "Ver herramientas para entrenadores",
      },
    ],
    related: [
      "pizarra-tactica-digital-para-entrenadores",
      "ia-revolucionando-entrenamiento",
      "metricas-clave-academias",
    ],
    about: [
      "periodización del entrenamiento",
      "mesociclo y microciclo",
      "carga de entrenamiento sRPE",
      "planificación deportiva",
    ],
    mentions: ["SportMaps"],
    faqs: [
      {
        question: "¿Qué es un mesociclo en el entrenamiento deportivo?",
        answer:
          "Es un bloque de entrenamiento de unas tres a cinco semanas con un objetivo concreto, como mejorar el pase o preparar un torneo. Se divide en microciclos, que son semanas, y cada microciclo en sesiones.",
      },
      {
        question: "¿Qué significa MD-1 y MD+1 en fútbol?",
        answer:
          "MD es el día del partido (match day). MD-1 es el día anterior, normalmente una sesión corta de activación, y MD+1 el día siguiente, que suele dedicarse a recuperar.",
      },
      {
        question: "¿Cómo se mide la carga de entrenamiento sin GPS?",
        answer:
          "Con el RPE de la sesión: al terminar, el grupo califica el esfuerzo de 0 a 10 y se multiplica por los minutos de la sesión. Una sesión de 90 minutos con RPE 6 suma 540 unidades arbitrarias, y la suma de la semana permite compararla con otras.",
      },
      {
        question: "¿Cuántas semanas tiene un mesociclo en una escuela de fútbol?",
        answer:
          "Lo más práctico en escuelas es usar el mes calendario, unas cuatro semanas, con tres semanas de carga y una de descarga o de evaluación. Lo importante es que el bloque tenga un objetivo y una forma de evaluarlo.",
      },
      {
        question: "¿Vale la pena planificar por mesociclos con niños pequeños?",
        answer:
          "Sí, pero de forma sencilla: un objetivo por mes y sesiones por bloques. Los indicadores de carga y los índices de partido tienen sentido en categorías que compiten con frecuencia y entrenan tres o más veces por semana.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 4. Pizarra táctica digital
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "pizarra-tactica-digital-para-entrenadores",
    title: "Pizarra táctica digital para entrenadores: jugadas animadas con tu plantel real",
    excerpt:
      "Qué debe tener una buena pizarra táctica digital, cómo armar una jugada animada cuadro a cuadro desde el celular y en qué se diferencia de una app de dibujo suelta.",
    category: "Tecnología",
    readTime: "8 min",
    date: "12 Oct 2026",
    isoDate: "2026-10-12",
    ...AUTOR_CEO,
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Una pizarra táctica digital es una cancha en la pantalla donde el entrenador ubica jugadores, material y flechas para explicar un ejercicio o una jugada, y la guarda para reutilizarla. La que de verdad sirve en una escuela hace tres cosas más: usa el plantel real del equipo (no fichas genéricas), anima la jugada cuadro a cuadro para que los jugadores vean el movimiento y no solo el dibujo final, y queda guardada dentro de la sesión o del partido, en el mismo lugar donde está la planificación. La pizarra táctica de SportMaps está construida con esos tres principios.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si dibujas en papel o en una app suelta, la jugada se pierde en la galería del celular. En SportMaps arrastras a tus propios jugadores a la cancha, animas la jugada en cuadros, la reproduces a la velocidad que quieras y queda guardada en la sesión del plan o en el partido.",
      },
      { type: "h2", content: "Qué debe tener una buena pizarra táctica" },
      {
        type: "table",
        headers: ["Necesidad del entrenador", "Pizarra de papel o tablero magnético", "App de dibujo suelta", "Pizarra de SportMaps"],
        rows: [
          ["Mostrar el movimiento, no solo la foto final", "No", "Depende de la app", "Sí: jugadas animadas por cuadros"],
          ["Usar los nombres de mis jugadores", "Escribiéndolos a mano", "Cargándolos uno por uno", "Sí: el plantel del equipo ya está ahí"],
          ["Material de entrenamiento (conos, aros, escaleras)", "Limitado", "Depende de la app", "Sí, con tamaño y giro"],
          ["Que la jugada quede en la sesión planificada", "No", "No", "Sí: se abre desde el bloque de la sesión o desde el partido"],
          ["Usarla en el celular en la cancha", "No aplica", "Sí", "Sí, también en iPhone"],
          ["Reutilizar la jugada otra semana", "Borrando y redibujando", "Sí", "Sí: se guarda como plantilla"],
        ],
      },
      {
        type: "p",
        content:
          "Las apps dedicadas de pizarra son buenas para dibujar y algunas son muy completas. La diferencia de una pizarra dentro del sistema de gestión de la escuela no es el dibujo: es que no tienes que volver a cargar a tus jugadores, y que la jugada queda unida al plan de entrenamiento, al equipo y a la historia del partido.",
      },
      { type: "h2", content: "Lo que puedes hacer hoy en la pizarra de SportMaps" },
      { type: "h3", content: "Plantel real y formaciones" },
      {
        type: "p",
        content:
          "El banco muestra a los jugadores del equipo y los arrastras a la cancha. Puedes partir de formaciones listas (4-3-3, 4-4-2, 3-5-2 y, para fútbol 7, 2-3-1) y moverlos libremente. Cada ficha lleva su etiqueta de posición, y el arquero se distingue con otro color. Los jugadores se muestran como siluetas; la foto es opcional, algo importante cuando trabajas con menores y no todas las familias autorizaron imágenes.",
      },
      { type: "h3", content: "Situaciones de juego" },
      {
        type: "p",
        content:
          "Cada tablero se etiqueta por situación: ataque, defensa, presión, transición, córner, tiro libre, penalti o arqueros. En la situación de arqueros la vista hace zoom al área, y ese zoom también se puede prender a mano para trabajar balón parado.",
      },
      { type: "h3", content: "Material y dibujo" },
      {
        type: "ul",
        items: [
          "Material de entrenamiento: conos, platos, balón, arco, mini arco, vallas, aros, escalera de coordinación, estacas, maniquí y rival, cada uno con tamaño y giro ajustables.",
          "Flechas, curvas y zonas en 9 colores, para diferenciar pase, conducción y desmarque.",
          "Lápiz libre, texto y borrador, para rayar y anotar sobre la cancha como en un tablero de verdad.",
          "Regla de medir para revisar distancias entre jugadores o del ejercicio.",
        ],
      },
      { type: "h3", content: "Jugadas animadas" },
      {
        type: "p",
        content:
          "Aquí está lo que más cambia la charla técnica. Una jugada se arma en cuadros: en el primero ubicas a los jugadores, en el segundo los mueves a su nueva posición, en el tercero el balón viaja al siguiente receptor, y así hasta 30 cuadros. Al darle «Reproducir», los jugadores se desplazan de un cuadro al otro, el balón recorre su trayectoria y queda una estela que muestra el camino recorrido. Puedes ver la jugada a media velocidad (0,5×), normal o al doble, y ajustar la duración de cada cuadro.",
      },
      { type: "h2", content: "Paso a paso: tu primera jugada animada" },
      {
        type: "ol",
        items: [
          "Abre la sesión del día desde la planificación del equipo (o el partido) y entra a la pizarra desde el bloque correspondiente.",
          "Elige la situación (por ejemplo, ataque) y una formación de partida.",
          "Arrastra a los jugadores del banco a sus posiciones y ajusta las etiquetas.",
          "Agrega el material si es un ejercicio: conos para delimitar, mini arcos, rival.",
          "Crea el segundo cuadro y mueve a los jugadores a donde deben llegar. Repite hasta completar la jugada.",
          "Reproduce a 0,5× para revisar que el movimiento tenga sentido, y corrige el cuadro que no cuadre.",
          "Guárdala como plantilla para reutilizarla en otras sesiones.",
          "Muéstrala al grupo en la charla previa desde tu celular o una tablet.",
        ],
      },
      { type: "h2", content: "Deportes: dónde está hoy y qué viene" },
      {
        type: "p",
        content:
          "Hoy la pizarra está abierta para los equipos de fútbol. Las canchas de fútbol 7, fútbol 5, futsal, voleibol, baloncesto y balonmano ya están dibujadas, y la habilitación por deporte está en camino: la idea es que un equipo de vóley vea su cancha y su material, y no los del fútbol. También está en camino una vista 3D para reproducir las jugadas. Hoy la pizarra es 2D y de fútbol. En los deportes donde una pizarra no aporta (natación, gimnasia, artes marciales), los entrenadores trabajan con la planificación, la asistencia y las métricas de rendimiento.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Preferimos decirte exactamente qué está disponible hoy. Si tu escuela es de vóley o baloncesto y quieres usar la pizarra, escríbenos y te contamos en qué punto va la habilitación para tu deporte.",
      },
      { type: "h2", content: "Consejos para que la pizarra sí se use" },
      {
        type: "ul",
        items: [
          "Menos es más: una jugada con 4 o 5 cuadros se entiende mejor que una de 20.",
          "Usa los colores siempre con el mismo significado en toda la escuela (por ejemplo, azul pase, rojo conducción).",
          "Crea una biblioteca de plantillas por categoría: salida de balón, presión tras pérdida, balón parado.",
          "Muestra la jugada animada antes del ejercicio y repítela en cámara lenta después del error.",
          "Pide a los asistentes técnicos que también la usen: si solo el entrenador principal la conoce, se pierde cuando él falta.",
        ],
      },
      {
        type: "cta",
        title: "Prueba la pizarra táctica con tu plantel",
        description:
          "Jugadas animadas por cuadros, material de entrenamiento y plantillas guardadas dentro de la planificación de tu equipo.",
        href: "/entrenadores",
        label: "Ver herramientas para entrenadores",
      },
    ],
    related: [
      "planificacion-entrenamiento-mesociclos-escuela",
      "software-escuelas-de-futbol-colombia",
      "ia-revolucionando-entrenamiento",
    ],
    about: [
      "pizarra táctica digital",
      "táctica de fútbol",
      "herramientas para entrenadores",
      "planificación de sesiones de entrenamiento",
    ],
    mentions: ["SportMaps"],
    faqs: [
      {
        question: "¿Cuál es la mejor pizarra táctica digital para entrenadores de fútbol?",
        answer:
          "Depende de para qué la uses. Si solo necesitas dibujar, hay apps dedicadas muy completas; si quieres usar tu plantel real, animar la jugada y guardarla dentro de la planificación del equipo, conviene una pizarra integrada al sistema de la escuela, como la de SportMaps.",
      },
      {
        question: "¿Puedo hacer jugadas animadas en la pizarra táctica?",
        answer:
          "Sí. En SportMaps armas la jugada en cuadros (hasta 30), y al reproducirla los jugadores se desplazan de una posición a la otra y el balón recorre su trayectoria. Puedes verla a 0,5×, 1× o 2×.",
      },
      {
        question: "¿La pizarra táctica funciona en el celular?",
        answer:
          "Sí, está pensada para usarse en el celular en la cancha, también en iPhone, y en tablet o computador para las charlas.",
      },
      {
        question: "¿La pizarra de SportMaps sirve para voleibol o baloncesto?",
        answer:
          "Hoy está abierta solo para equipos de fútbol, en 2D. La habilitación para voleibol, baloncesto, balonmano y futsal está en camino, pero todavía no está disponible.",
      },
      {
        question: "¿Necesito cargar a mis jugadores en la pizarra?",
        answer:
          "No. La pizarra toma el plantel del equipo que ya está en SportMaps; solo arrastras a cada jugador a su posición.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 5. Tienda online de la escuela
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "tienda-online-escuela-deportiva-uniformes",
    title: "Tienda online para tu escuela deportiva: cómo vender uniformes y kits sin perder el control",
    excerpt:
      "Dos caminos para vender uniformes, kits y artículos a las familias: un catálogo liviano dentro del cobro mensual o una tienda completa con tallas, stock, cupones y compra sin cuenta.",
    category: "Organización",
    readTime: "8 min",
    date: "2 Oct 2026",
    isoDate: "2026-10-02",
    ...EQUIPO,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela deportiva puede vender uniformes y kits en línea de dos formas: con un catálogo pequeño de artículos que la familia agrega al pagar la mensualidad (ideal si vendes 3 a 10 productos, como uniforme, sudadera y balón), o con una tienda completa que maneja fotos, tallas, inventario por talla, pedidos, cupones y retiro en la sede. La primera opción se monta en minutos; la segunda conviene cuando el volumen y la variedad hacen imposible controlar las tallas y el dinero en una hoja de cálculo.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si vendes pocos artículos y casi siempre a tus propias familias, empieza con el catálogo liviano. Si manejas muchas tallas, quieres vender también a personas que no tienen cuenta o necesitas cupones, usa la tienda. En ambos casos el dinero entra registrado y separado de las mensualidades.",
      },
      { type: "h2", content: "El problema de vender uniformes por WhatsApp" },
      {
        type: "p",
        content:
          "La venta típica de uniformes en una escuela funciona así: alguien publica en el grupo los precios, las familias responden con la talla, se pide al proveedor, llegan transferencias de distintos montos con comprobantes en el chat, y al final de mes nadie sabe con certeza quién pagó, quién recibió y qué tallas sobran. El dinero de los uniformes termina mezclado con el de las mensualidades y la contabilidad pierde sentido.",
      },
      {
        type: "p",
        content:
          "Lo que necesitas es que cada venta tenga su propio cobro, separado de la mensualidad, con estado (pendiente, pagado, entregado) y que el inventario por talla se actualice solo cuando el pago se confirma.",
      },
      { type: "h2", content: "Las dos opciones, comparadas" },
      {
        type: "table",
        headers: ["", "Catálogo de artículos (liviano)", "Tienda de la escuela (completa)"],
        rows: [
          ["Para qué escuela", "Pocos productos, venta a sus propias familias", "Variedad de productos y tallas, más volumen"],
          ["Productos", "Nombre, precio y tallas", "Fotos, descripción, variantes por talla, categorías"],
          ["Inventario", "No lleva stock", "Stock por talla que se descuenta al confirmar el pago"],
          ["Cómo compra la familia", "Agrega el artículo al pagar la mensualidad u otro cobro", "Carrito y pedido propio"],
          ["Medios de pago", "Los mismos de los cobros de la escuela", "Wompi, Mercado Pago, transferencia con comprobante o efectivo al retirar"],
          ["Compra sin cuenta", "No", "Sí, con correo y nombre"],
          ["Cupones de descuento", "No", "Sí"],
          ["Entrega", "La coordina la escuela", "Retiro en la sede con código de retiro"],
          ["Cómo se activa", "Se pide a SportMaps; la escuela administra sus artículos", "Adicional de $49.000/mes; incluida en el plan Escuela Elite"],
        ],
      },
      { type: "h2", content: "Opción 1: catálogo de artículos dentro del cobro" },
      {
        type: "p",
        content:
          "Es la forma más simple. La escuela crea sus artículos (por ejemplo, uniforme de entrenamiento, uniforme de partido, sudadera) con su precio y las tallas disponibles. Cuando la familia va a pagar, puede agregar el artículo y elegir la talla. El artículo genera su propio cobro, separado de la mensualidad y de la inscripción, así que en los reportes ves cuánto entró por artículos sin mezclarlo con lo demás. Con el mismo mecanismo la escuela puede cobrar la inscripción a un torneo.",
      },
      {
        type: "p",
        content:
          "Lo que NO hace: no lleva inventario ni fotos obligatorias. Si se te acaban las tallas, tienes que quitarlas a mano.",
      },
      { type: "h2", content: "Opción 2: la tienda de la escuela" },
      {
        type: "p",
        content: "La tienda es un adicional de $49.000 al mes (viene incluida en el plan Escuela Elite) para escuelas que venden de verdad. Esto es lo que incluye:",
      },
      {
        type: "ul",
        items: [
          "Productos con fotos, descripción y variantes por talla, cada una con su propio stock.",
          "El inventario se descuenta cuando el pago queda confirmado, no cuando alguien agrega al carrito.",
          "Pago con Wompi o Mercado Pago (la plata va a la cuenta de la escuela), transferencia con comprobante o efectivo al retirar.",
          "Retiro en la sede con un código de retiro: quien entrega verifica el código y el pedido queda entregado.",
          "Compra sin cuenta: un comprador puede pagar dejando su nombre y su correo, sin registrarse. Recibe un enlace para ver su pedido, subir el comprobante o cancelarlo. Si después crea su cuenta con ese correo, sus pedidos pasan a la cuenta.",
          "Cupones de descuento propios de la tienda.",
          "Las ventas de la tienda aparecen en los ingresos de la escuela.",
        ],
      },
      { type: "h3", content: "Cómo funcionan los cupones" },
      {
        type: "p",
        content:
          "Cada tienda crea sus propios códigos. Un cupón puede ser un porcentaje (hasta 90 %) o un valor fijo en pesos, tener fechas de inicio y fin, un mínimo de compra, un tope de descuento, un máximo de usos total y por comprador, y aplicar a toda la tienda o solo a ciertos productos o categorías. El descuento lo calcula y lo valida el sistema al crear el pedido, no el navegador del comprador, y si dos personas intentan usar el último cupo al mismo tiempo, solo una lo obtiene. Ejemplo: «UNIFORME10» con 10 % de descuento en uniformes durante la primera semana de inscripciones.",
      },
      { type: "h2", content: "Paso a paso para empezar a vender" },
      {
        type: "ol",
        items: [
          "Haz el inventario real: qué productos, qué tallas y cuántas unidades tienes de cada una.",
          "Define los precios con IVA incluido si aplica a tu escuela; confírmalo con tu contador.",
          "Decide la opción: catálogo liviano si son pocos productos, tienda si hay variedad y volumen.",
          "Toma fotos simples de cada producto con fondo claro.",
          "Configura los medios de pago y el lugar y horario de retiro.",
          "Anuncia la tienda a las familias con el enlace, en lugar de recibir pedidos por el grupo.",
          "Revisa cada semana los pedidos pendientes de pago y los listos para entregar.",
        ],
      },
      { type: "h2", content: "Cuándo NO conviene una tienda" },
      {
        type: "p",
        content:
          "Si el uniforme lo vende directamente un proveedor externo y tú no manejas el dinero ni el inventario, no tiene sentido montar una tienda: basta con informar a las familias dónde comprar. Tampoco conviene si vendes una vez al año un solo producto; el catálogo liviano lo resuelve sin configuración extra.",
      },
      {
        type: "cta",
        title: "Vende uniformes sin mezclar la plata",
        description:
          "Catálogo de artículos dentro del cobro o tienda completa con tallas, stock, cupones y compra sin cuenta. Mira qué incluye cada plan.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "pagina-web-para-escuela-deportiva",
    ],
    about: [
      "tienda online para escuelas deportivas",
      "venta de uniformes deportivos",
      "comercio electrónico",
      "cupones de descuento",
    ],
    mentions: ["Wompi", "Mercado Pago", "SportMaps"],
    faqs: [
      {
        question: "¿Cómo vender los uniformes de mi escuela deportiva en línea?",
        answer:
          "Puedes agregar los uniformes como artículos que la familia suma al pagar la mensualidad, o abrir una tienda con fotos, tallas y stock. En ambos casos cada venta queda como un cobro aparte, separado de las mensualidades.",
      },
      {
        question: "¿Se puede comprar en la tienda de la escuela sin crear una cuenta?",
        answer:
          "Sí. En la tienda de SportMaps el comprador deja su nombre y correo y recibe un enlace para ver su pedido y subir el comprobante. Si luego crea su cuenta con ese correo, los pedidos quedan vinculados.",
      },
      {
        question: "¿Puedo crear cupones de descuento para los uniformes?",
        answer:
          "Sí. Cada tienda crea sus códigos con porcentaje o valor fijo, fechas, mínimo de compra y límite de usos, y puede limitarlos a ciertos productos o categorías.",
      },
      {
        question: "¿Cómo controlo las tallas que me quedan?",
        answer:
          "En la tienda cada talla tiene su propio stock, que se descuenta cuando el pago queda confirmado. En el catálogo liviano no hay stock, así que las tallas agotadas se quitan a mano.",
      },
      {
        question: "¿La plata de la tienda llega a la cuenta de la escuela?",
        answer:
          "Sí. Los pagos con Wompi o Mercado Pago van a la cuenta de la escuela, y las transferencias y el efectivo se registran en el pedido. Las ventas aparecen en los ingresos de la escuela.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  // 6. Página web para la escuela
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "pagina-web-para-escuela-deportiva",
    title: "Página web para una escuela deportiva: qué debe tener y cómo tenerla sin pagar un desarrollador",
    excerpt:
      "Qué información busca una familia antes de inscribir a su hijo, qué secciones necesita la página de tu escuela, la diferencia entre dominio propio y página genérica, y cuándo no vale la pena pagar una web aparte.",
    category: "Guías",
    readTime: "7 min",
    date: "17 Sep 2026",
    isoDate: "2026-09-17",
    ...AUTOR_CEO,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Una página web para una escuela deportiva necesita responder en menos de un minuto lo que pregunta una familia antes de inscribir: qué deportes y categorías hay, dónde y a qué hora se entrena, quiénes son los entrenadores, cuánto cuesta y cómo inscribirse. No hace falta un sitio de diez páginas ni pagar un desarrollador: en SportMaps cada escuela tiene una página pública que se arma con los datos que ya carga en el sistema (equipos, entrenadores, planes e instalaciones), con su logo y sus colores, publicada en una dirección propia de la escuela dentro de sportmaps.co. Si ya tienes un dominio, te ayudamos a conectarlo.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Lo que más pesa en la decisión de una familia es encontrarte, entender la oferta y poder inscribirse sin escribir diez mensajes. Una página que se alimenta de tus datos reales nunca queda desactualizada; una web hecha a mano, sí.",
      },
      { type: "h2", content: "Qué busca una familia antes de inscribir" },
      {
        type: "p",
        content:
          "Piensa en un papá que busca «escuela de fútbol cerca» o le preguntan en el colegio. Antes de escribirte, quiere saber si hay grupo para la edad de su hijo, si el horario le sirve, dónde queda la cancha, cuánto vale y si la escuela se ve seria. Si nada de eso está a la vista, escribe por WhatsApp, y cada pregunta que respondes a mano es tiempo que no dedicas a entrenar o a cobrar.",
      },
      { type: "h2", content: "Las secciones que tu página necesita" },
      {
        type: "table",
        headers: ["Sección", "Qué debe mostrar", "Error común"],
        rows: [
          ["Portada", "Nombre, logo, deporte(s), ciudad y una foto real", "Fotos de banco de imágenes que no son tu escuela"],
          ["Equipos y categorías", "Grupos por edad o categoría", "Categorías que cambiaron y nadie actualizó"],
          ["Entrenadores", "Nombre y rol de cada entrenador", "Listar entrenadores que ya no trabajan ahí"],
          ["Planes y precios", "Qué incluye cada plan y su valor, si decides publicarlo", "«Escríbenos para precios» sin ninguna referencia"],
          ["Instalaciones", "Dónde se entrena, con dirección", "No decir si la cancha es propia o alquilada"],
          ["Horario de atención y contacto", "Horario real, teléfono o WhatsApp", "Horarios genéricos que no corresponden"],
          ["Inscripción", "Un enlace claro para inscribirse", "Pedir que «manden sus datos por el grupo»"],
        ],
      },
      { type: "h2", content: "Cómo es la página pública de una escuela en SportMaps" },
      {
        type: "p",
        content:
          "La página pública se construye con la información que la escuela ya administra en SportMaps, así que cuando cambias un equipo, un entrenador o un plan, la página cambia también. Esto es lo que incluye:",
      },
      {
        type: "ul",
        items: [
          "Logo, foto de portada y colores de tu marca.",
          "Equipos, entrenadores, planes e instalaciones, con interruptores para decidir si muestras o no los programas, los planes y las instalaciones.",
          "Horario de atención propio de la escuela.",
          "Cuatro diseños para elegir: Clásica (portada a todo lo ancho con pestañas), Moderna (portada dividida y secciones en scroll continuo), Minimal (encabezado compacto, liviana) y Revista (portada a sangre completa, para escuelas con buenas fotos).",
          "Una dirección propia de tu escuela dentro de sportmaps.co, lista para compartir. Si ya tienes un dominio, te ayudamos a conectarlo.",
        ],
      },
      {
        type: "p",
        content:
          "Para la inscripción, la escuela tiene enlaces y códigos QR propios: un formulario donde la familia deja sus datos y los del atleta, que puedes poner en tu página, en tu biografía de Instagram o impreso en la cancha. Las inscripciones llegan a la escuela ordenadas, no como mensajes sueltos.",
      },
      { type: "h2", content: "Dirección en sportmaps.co o dominio propio" },
      {
        type: "table",
        headers: ["", "Dirección en sportmaps.co", "Dominio propio"],
        rows: [
          ["Qué es", "La página se ve en una dirección de tu escuela dentro de sportmaps.co", "La página se ve en el dominio de tu escuela"],
          ["Qué necesitas", "Nada adicional", "Tener un dominio y acceso a su configuración; te ayudamos a conectarlo"],
          ["Costo del dominio", "Sin costo", "Lo pagas a tu proveedor de dominios"],
          ["Cuándo elegirla", "Estás empezando o no quieres administrar un dominio", "Ya tienes marca y dominio, y quieres que todo viva bajo tu dirección"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si ya tienes una web hecha en otra plataforma y te gusta, no tienes que reemplazarla. Puedes dejarla tal cual y poner botones que lleven al enlace de inscripción de tu escuela en SportMaps.",
      },
      { type: "h2", content: "Paso a paso para publicar la página de tu escuela" },
      {
        type: "ol",
        items: [
          "Carga o revisa en SportMaps tus equipos, entrenadores, planes e instalaciones: son el contenido de la página.",
          "Sube el logo y una foto de portada real de tu escuela, y define tus colores.",
          "Elige uno de los cuatro diseños.",
          "Configura tu horario de atención y decide qué secciones mostrar (por ejemplo, si publicas o no los precios).",
          "Comparte la dirección de tu página en sportmaps.co; si ya tienes dominio y quieres usarlo, pídenos ayuda para conectarlo.",
          "Comparte la página y tu enlace de inscripción en Instagram, en Google Business Profile y en el estado de WhatsApp.",
          "Revisa la página cada inicio de temporada, cuando cambian categorías y horarios.",
        ],
      },
      { type: "h2", content: "¿Vale la pena pagar una web aparte?" },
      {
        type: "p",
        content:
          "Una web a la medida tiene sentido si tu escuela es grande, publica noticias con frecuencia, tiene patrocinadores que exigen un sitio propio o necesitas secciones que una página de escuela no cubre, como un blog o una tienda de marca. Para la mayoría de escuelas pequeñas y medianas, el problema no es el diseño sino la actualización: una web bonita con horarios del año pasado hace más daño que una página sencilla con datos al día.",
      },
      {
        type: "p",
        content:
          "También vale considerar que el primer lugar donde te buscan muchas familias es Google Maps y redes sociales. Tener tu ficha de Google con dirección, horario y fotos, y un enlace a tu página y a tu formulario de inscripción, suele traer más inscripciones que un sitio complejo.",
      },
      {
        type: "cta",
        title: "Tu escuela con página propia, incluida",
        description:
          "La página pública de la escuela, con cuatro diseños y tu dirección en sportmaps.co, viene incluida en todos los planes.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "5-claves-digitalizar-escuela-deportiva",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
      "tienda-online-escuela-deportiva-uniformes",
    ],
    about: [
      "página web para escuelas deportivas",
      "subdominio web",
      "marketing de escuelas deportivas",
      "inscripción en línea",
    ],
    mentions: ["Google Business Profile", "Instagram", "WhatsApp", "SportMaps"],
    faqs: [
      {
        question: "¿Qué debe tener la página web de una escuela deportiva?",
        answer:
          "Deportes y categorías, horarios y sede, entrenadores, planes y precios si decides publicarlos, contacto y un enlace claro para inscribirse. Lo más importante es que esté actualizada.",
      },
      {
        question: "¿Cuánto cuesta una página web para una escuela deportiva?",
        answer:
          "En SportMaps la página pública de la escuela viene incluida en todos los planes, con una dirección propia dentro de sportmaps.co. Si quieres usar tu propio dominio, lo pagas a tu proveedor y te ayudamos a conectarlo.",
      },
      {
        question: "¿Puedo usar mi propio dominio con la página de SportMaps?",
        answer:
          "Si ya tienes un dominio, te ayudamos a conectarlo. Si no tienes, la página funciona con una dirección propia de tu escuela dentro de sportmaps.co, sin costo.",
      },
      {
        question: "¿Tengo que borrar mi web actual para usar SportMaps?",
        answer:
          "No. Puedes conservar tu web y poner botones que lleven al enlace de inscripción de tu escuela en SportMaps.",
      },
      {
        question: "¿Cómo se inscriben las familias desde la página?",
        answer:
          "La escuela comparte su enlace o código QR de inscripción, que lleva a un formulario para los datos del acudiente y del atleta. Las solicitudes llegan ordenadas a la escuela en lugar de llegar como mensajes sueltos.",
      },
    ],
  },
];
