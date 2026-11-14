import type { BlogPost } from "../blog-posts";

export const negocioPosts: BlogPost[] = [
  {
    slug: "plantilla-excel-control-asistencia-y-pagos-escuela-deportiva",
    title: "Plantilla de Excel para controlar asistencia y pagos en una escuela deportiva: columnas, fórmulas y errores",
    excerpt:
      "Cómo armar en Excel o Google Sheets una plantilla de cuatro hojas (alumnos, asistencia, pagos y cartera) con las fórmulas exactas para saber quién asistió, quién debe y cuánto. Y las señales de que la hoja de cálculo ya no alcanza.",
    category: "Guías",
    readTime: "9 min",
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
          "Una plantilla de Excel o Google Sheets para una escuela deportiva necesita cuatro hojas: una lista de alumnos con un código único, un registro de asistencia con una fila por alumno y por clase, un registro de pagos con una fila por pago y una hoja de cartera que cruza las tres con fórmulas como SUMAR.SI.CONJUNTO y CONTAR.SI.CONJUNTO. Con eso sabes, para cualquier mes, quién asistió, quién pagó, quién debe y cuánto. Funciona bien mientras una sola persona digita y los alumnos no pasan de unas pocas decenas; cuando varias personas tocan el archivo o las familias mandan los comprobantes por WhatsApp, empieza a fallar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Separa los datos en hojas distintas y nunca mezcles asistencia y pagos en la misma tabla. Dale a cada alumno un código que no cambie, escribe el periodo cobrado (por ejemplo 2026-11) en cada pago y deja que la hoja de cartera calcule sola. Aquí no hay archivo para descargar: abajo están las columnas y las fórmulas para que la armes en veinte minutos.",
      },
      { type: "h2", content: "¿Qué hojas debe tener la plantilla?" },
      {
        type: "table",
        headers: ["Hoja", "Qué guarda", "Una fila es…"],
        rows: [
          ["Alumnos", "Los datos fijos de cada deportista y lo que paga", "Un alumno"],
          ["Asistencia", "Cada vez que alguien vino, faltó o se excusó", "Un alumno en una clase"],
          ["Pagos", "Cada pago recibido, sea completo o un abono", "Un pago"],
          ["Cartera", "El resumen del mes: asistencias, pagado, saldo y estado", "Un alumno en el mes elegido"],
        ],
      },
      {
        type: "p",
        content:
          "La regla que sostiene todo es esta: en las tres primeras hojas solo se digita, y en la cuarta solo hay fórmulas. Si alguien escribe un saldo a mano en la hoja de cartera, deja de ser confiable.",
      },
      { type: "h2", content: "¿Qué columnas lleva la hoja de alumnos?" },
      {
        type: "table",
        headers: ["Columna", "Campo", "Ejemplo", "Para qué sirve"],
        rows: [
          ["A", "Código", "A001", "Identifica al alumno aunque haya dos con el mismo nombre"],
          ["B", "Nombre completo", "Sofía Rojas Peña", "Como aparece en el documento"],
          ["C", "Fecha de nacimiento", "14/03/2015", "Para calcular la edad y la categoría"],
          ["D", "Acudiente", "Carolina Peña", "A quién le cobras y le escribes"],
          ["E", "Celular", "300 000 0000", "Contacto para recordatorios"],
          ["F", "Grupo", "Sub-11 martes y jueves", "Para filtrar la lista de cada profe"],
          ["G", "Fecha de ingreso", "03/02/2026", "Para saber desde qué mes se le cobra"],
          ["H", "Mensualidad", "120000", "Lo que debe pagar ese alumno, con su descuento ya aplicado"],
          ["I", "Estado", "Activo", "Activo, Pausado o Retirado"],
        ],
      },
      {
        type: "p",
        content:
          "Escribe la mensualidad como número, sin puntos ni signo de pesos; el formato de moneda se lo da la celda. Y no borres a los retirados: cámbiales el estado. Si los borras, pierdes el historial de pagos y de asistencia.",
      },
      { type: "h2", content: "¿Cómo registrar la asistencia?" },
      {
        type: "p",
        content:
          "La planilla clásica tiene los alumnos hacia abajo y los días hacia la derecha. Se ve bonita, pero cada mes hay que armar una nueva y es difícil de sumar. Funciona mejor una lista larga: cada fila es un alumno en una clase.",
      },
      {
        type: "table",
        headers: ["Columna", "Campo", "Ejemplo"],
        rows: [
          ["A", "Fecha", "10/11/2026"],
          ["B", "Código del alumno", "A001"],
          ["C", "Nombre (fórmula)", "Se llena solo a partir del código"],
          ["D", "Estado", "Asistió, Faltó o Excusa"],
          ["E", "Profe", "Camilo"],
        ],
      },
      {
        type: "p",
        content:
          "Para que el nombre aparezca solo, en C2 escribe =BUSCARX(B2;Alumnos!A:A;Alumnos!B:B;\"No existe\"). Si tu versión de Excel es antigua y no tiene BUSCARX, usa =BUSCARV(B2;Alumnos!A:B;2;FALSO). En la columna D pon una lista desplegable (Datos > Validación de datos) con las tres opciones: así nadie escribe «asistio», «Asistió » y «si» para decir lo mismo.",
      },
      { type: "h2", content: "¿Cómo registrar los pagos?" },
      {
        type: "table",
        headers: ["Columna", "Campo", "Ejemplo"],
        rows: [
          ["A", "Fecha del pago", "04/11/2026"],
          ["B", "Código del alumno", "A001"],
          ["C", "Periodo que cubre", "2026-11"],
          ["D", "Concepto", "Mensualidad, Inscripción, Uniforme o Torneo"],
          ["E", "Valor", "120000"],
          ["F", "Medio", "Transferencia, Nequi, Efectivo o Pasarela"],
          ["G", "Referencia", "Número del comprobante o del recibo"],
        ],
      },
      {
        type: "p",
        content:
          "La columna que más se olvida es la C. La fecha en que alguien pagó y el mes que está pagando son dos cosas distintas: una familia puede pagar noviembre el 28 de octubre o el 15 de diciembre. Escribe el periodo como texto con el formato año-mes (2026-11) y, si puedes, con lista desplegable. Si alguien abona en dos partes, son dos filas con el mismo periodo.",
      },
      { type: "h2", content: "¿Qué fórmulas necesita la hoja de cartera?" },
      {
        type: "p",
        content:
          "Arriba de la hoja deja tres celdas de control: en B1 el primer día del mes que quieres revisar (01/11/2026), en B2 el periodo como texto (2026-11) y en B3 el día límite de pago (10/11/2026). Desde la fila 6, la columna A trae los códigos de los alumnos. Estas son las fórmulas de la fila 6:",
      },
      {
        type: "table",
        headers: ["Qué calcula", "Fórmula"],
        rows: [
          ["Nombre", "=BUSCARX(A6;Alumnos!A:A;Alumnos!B:B;\"\")"],
          ["Edad en años", "=SIFECHA(BUSCARX(A6;Alumnos!A:A;Alumnos!C:C);HOY();\"Y\")"],
          ["Clases a las que asistió en el mes (D6)", "=CONTAR.SI.CONJUNTO(Asistencia!B:B;A6;Asistencia!D:D;\"Asistió\";Asistencia!A:A;\">=\"&$B$1;Asistencia!A:A;\"<=\"&FIN.MES($B$1;0))"],
          ["Faltas sin excusa en el mes (E6)", "=CONTAR.SI.CONJUNTO(Asistencia!B:B;A6;Asistencia!D:D;\"Faltó\";Asistencia!A:A;\">=\"&$B$1;Asistencia!A:A;\"<=\"&FIN.MES($B$1;0))"],
          ["Porcentaje de asistencia (F6)", "=SI(D6+E6=0;\"\";D6/(D6+E6))"],
          ["Valor esperado (G6)", "=SI(BUSCARX(A6;Alumnos!A:A;Alumnos!I:I)=\"Activo\";BUSCARX(A6;Alumnos!A:A;Alumnos!H:H);0)"],
          ["Pagado del periodo (H6)", "=SUMAR.SI.CONJUNTO(Pagos!E:E;Pagos!B:B;A6;Pagos!C:C;$B$2;Pagos!D:D;\"Mensualidad\")"],
          ["Saldo (I6)", "=G6-H6"],
          ["Estado (J6)", "=SI(I6<=0;\"Al día\";SI(HOY()>$B$3;\"En mora\";\"Pendiente\"))"],
        ],
      },
      {
        type: "p",
        content:
          "Y tres totales para la parte de arriba: cartera pendiente con =SUMAR.SI(I6:I300;\">0\"), alumnos en mora con =CONTAR.SI(J6:J300;\"En mora\") y porcentaje de recaudo con =SUMA(H6:H300)/SUMA(G6:G300). Cambias B1, B2 y B3 y toda la hoja pasa al mes siguiente sin copiar ni pegar nada.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Las fórmulas están escritas para Excel y Google Sheets en español con configuración de Colombia, que separan los argumentos con punto y coma. Si tu programa está en inglés, las funciones se llaman XLOOKUP, COUNTIFS, SUMIFS, IF, TODAY, EOMONTH y DATEDIF, y el separador suele ser la coma. Prueba cada fórmula con dos o tres alumnos antes de confiar en el total.",
      },
      { type: "h2", content: "¿Cuáles son los errores típicos?" },
      {
        type: "ul",
        items: [
          "Usar el nombre como llave. Dos «Juan Pérez», o un nombre escrito con y sin tilde, y la suma sale mal. Usa siempre el código.",
          "Fechas escritas como texto. Si la fecha queda pegada a la izquierda de la celda, Excel no la reconoce como fecha y el conteo del mes la ignora.",
          "Códigos repetidos. Detéctalos con =CONTAR.SI(Alumnos!A:A;A2)>1 en una columna auxiliar o con formato condicional.",
          "Espacios invisibles. «A001 » con un espacio al final no es igual a «A001». La lista desplegable lo evita.",
          "Una hoja por mes. Parece ordenado, pero impide ver el historial de un alumno y multiplica los errores al copiar.",
          "Celdas combinadas y filas de subtotales en medio de los datos. Rompen los filtros y las fórmulas.",
          "Sobrescribir un pago en lugar de agregar una fila. Pierdes el rastro de qué entró y cuándo.",
          "No anotar el periodo. A los tres meses nadie sabe si ese pago era de septiembre o de octubre.",
          "Varias copias del archivo circulando por WhatsApp o correo. Define un único archivo en la nube y un solo responsable de digitar pagos.",
          "No sacar copia. Guarda una versión con fecha al cierre de cada mes.",
        ],
      },
      { type: "h2", content: "¿Cuándo deja de alcanzar el Excel?" },
      {
        type: "p",
        content:
          "No hay un número mágico de alumnos. Lo que avisa es el tipo de trabajo que empiezas a hacer a mano. Estas son las señales:",
      },
      {
        type: "table",
        headers: ["Señal", "Qué está pasando"],
        rows: [
          ["Pasas horas a la semana cruzando comprobantes de WhatsApp contra la hoja de pagos", "El registro depende de que alguien digite cada transferencia"],
          ["Dos personas editan el archivo y aparecen pagos duplicados o borrados", "La hoja de cálculo no controla quién cambió qué"],
          ["Los profes toman lista en papel y alguien la pasa después", "La asistencia llega tarde y con errores de transcripción"],
          ["Las familias preguntan cuánto deben y tienes que abrir el archivo para responder", "Nadie más que tú puede consultar el estado de cuenta"],
          ["Tienes dos sedes o más de un tipo de plan", "Las fórmulas se llenan de excepciones"],
          ["Necesitas facturar electrónicamente", "Excel no emite facturas ni se conecta con la DIAN"],
        ],
      },
      {
        type: "p",
        content:
          "Si te reconoces en una sola de esas filas, la plantilla todavía aguanta con disciplina. Si te reconoces en tres, el costo ya no es el software que no pagas: es tu tiempo y la plata que se queda sin cobrar porque nadie hizo el cruce.",
      },
      { type: "h2", content: "El siguiente paso, cuando llegue" },
      {
        type: "p",
        content:
          "SportMaps hace con una sola plataforma lo que esta plantilla hace con cuatro hojas: los profes toman asistencia desde el celular, los pagos entran por Wompi o Mercado Pago y Mapi, el asistente de WhatsApp con IA, lee los comprobantes que mandan las familias y los deja listos para aprobar. El plan Free cuesta $0 y admite hasta 20 alumnos; Start vale $69.000 COP al mes para hasta 50. La migración desde Excel es asistida y sin costo, así que la hoja de alumnos que armes hoy no se pierde.",
      },
      {
        type: "cta",
        title: "Pasa de la plantilla a la plataforma cuando estés listo",
        description:
          "Asistencia desde el celular, cobros con Wompi y Mercado Pago y Mapi leyendo comprobantes. Gratis hasta 20 alumnos, con migración asistida desde Excel.",
        href: "/planes",
        label: "Ver planes de SportMaps",
      },
    ],
    related: [
      "excel-vs-software-escuela-deportiva",
      "como-cobrar-mensualidades-escuela-deportiva",
      "kpis-escuela-deportiva-formulas-retencion-churn",
    ],
    about: [
      "plantilla de Excel para escuelas deportivas",
      "control de asistencia",
      "control de pagos y cartera",
      "gestión de escuelas y academias deportivas",
    ],
    mentions: ["Microsoft Excel", "Google Sheets", "WhatsApp", "Wompi", "Mercado Pago", "DIAN"],
    faqs: [
      {
        question: "¿Qué hojas debe tener una plantilla de Excel para una escuela deportiva?",
        answer:
          "Cuatro: Alumnos (una fila por deportista, con un código único), Asistencia (una fila por alumno y por clase), Pagos (una fila por cada pago, con el periodo que cubre) y Cartera, que cruza las otras tres con fórmulas y muestra asistencias, valor pagado, saldo y estado de cada alumno en el mes.",
      },
      {
        question: "¿Qué fórmula uso para saber cuánto pagó un alumno en un mes?",
        answer:
          "SUMAR.SI.CONJUNTO. Por ejemplo: =SUMAR.SI.CONJUNTO(Pagos!E:E;Pagos!B:B;A6;Pagos!C:C;$B$2;Pagos!D:D;\"Mensualidad\"), donde A6 es el código del alumno y B2 el periodo escrito como 2026-11. Suma todos los abonos de ese alumno para ese mes.",
      },
      {
        question: "¿Cómo cuento las asistencias de un alumno en el mes?",
        answer:
          "Con CONTAR.SI.CONJUNTO sobre la hoja de asistencia, filtrando por el código del alumno, el estado «Asistió» y las fechas entre el primer y el último día del mes. El último día se obtiene con FIN.MES.",
      },
      {
        question: "¿Sirve Google Sheets en lugar de Excel?",
        answer:
          "Sí. Las funciones de esta plantilla (BUSCARX, CONTAR.SI.CONJUNTO, SUMAR.SI.CONJUNTO, SI, HOY, FIN.MES y SIFECHA) existen en ambos. Google Sheets tiene la ventaja de que el archivo vive en la nube y varios profes pueden abrirlo desde el celular.",
      },
      {
        question: "¿Cuándo conviene pasar de Excel a un software?",
        answer:
          "Cuando más de una persona edita el archivo, cuando pasas horas cruzando comprobantes de WhatsApp, cuando los profes toman lista en papel, cuando las familias no pueden consultar su saldo o cuando necesitas facturación electrónica. No depende de un número fijo de alumnos.",
      },
    ],
  },
  {
    slug: "como-conseguir-mas-alumnos-para-una-escuela-deportiva",
    title: "Cómo conseguir más alumnos para una escuela deportiva: seis canales que sí puedes medir",
    excerpt:
      "Perfil de Empresa en Google, Instagram y TikTok, referidos, alianzas con colegios y conjuntos, clase de prueba y anuncios de clic a WhatsApp: qué hacer en cada canal, en qué orden y cómo saber cuál te trae inscritos de verdad.",
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
          "Para conseguir más alumnos en una escuela deportiva necesitas tres cosas, en este orden: que te encuentren cuando alguien busca tu deporte cerca de su casa (Perfil de Empresa en Google y redes sociales), que alguien de confianza te recomiende (referidos y alianzas con colegios y conjuntos residenciales) y que al interesado le quede fácil probar (clase de prueba agendada por WhatsApp). Los anuncios pagados van de últimos: sirven para acelerar un proceso que ya convierte, no para arreglar uno que pierde a la gente en el camino. Y todo se mide con una pregunta que casi nadie anota: «¿cómo supiste de nosotros?».",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Empieza por lo gratuito: perfil de Google completo, contenido que muestre cómo es una clase y un programa de referidos simple. Luego busca dos o tres alianzas con colegios o conjuntos cercanos. Ofrece una clase de prueba con fecha y cupo, no un «pásate cuando quieras». Solo cuando sepas cuántas pruebas se vuelven inscripción, invierte en anuncios de clic a WhatsApp.",
      },
      { type: "h2", content: "¿Por dónde empezar si casi no hay presupuesto?" },
      {
        type: "table",
        headers: ["Canal", "Cuesta plata", "Cuesta tiempo", "Cuándo se ve el resultado"],
        rows: [
          ["Perfil de Empresa en Google", "No", "Poco: se arma una vez y se mantiene", "Semanas"],
          ["Instagram y TikTok", "No", "Mucho: pide constancia", "Meses"],
          ["Referidos", "Solo el beneficio que des", "Poco", "Desde el primer mes"],
          ["Alianzas con colegios y conjuntos", "No, o un porcentaje acordado", "Medio: hay que reunirse y cumplir", "Por semestre o por temporada"],
          ["Clase de prueba", "El cupo que ocupa", "Medio", "Inmediato"],
          ["Anuncios de clic a WhatsApp", "Sí", "Medio: alguien tiene que responder", "Días"],
        ],
      },
      {
        type: "p",
        content:
          "La tabla es una guía de esfuerzo, no una promesa de resultados: cada barrio y cada deporte se mueven distinto. Por eso la última sección de este artículo es sobre medir.",
      },
      { type: "h2", content: "¿Cómo aparecer en Google cuando buscan una escuela cerca?" },
      {
        type: "p",
        content:
          "Cuando un papá escribe «escuela de natación cerca de mí», lo que ve primero es un mapa con fichas. Esa ficha es el Perfil de Empresa en Google, que según la ayuda oficial de Google es una herramienta gratuita para gestionar cómo aparece tu negocio en la Búsqueda y en Maps. Si no la tienes o está a medias, estás regalando ese espacio.",
      },
      {
        type: "ol",
        items: [
          "Crea o reclama el perfil con el nombre real de la escuela, sin agregarle palabras de relleno.",
          "Elige la categoría que mejor describa lo que haces y pon la dirección donde entrenas. Si usas varias canchas, revisa las directrices de Google antes de crear más de una ficha.",
          "Completa horarios, teléfono, botón de WhatsApp y el enlace a tu página o a tu formulario de inscripción.",
          "Sube fotos reales de los entrenamientos y de la sede, y renuévalas cada cierto tiempo.",
          "Pide la reseña a las familias en un buen momento: después de un festival, de un torneo o de la entrega de informes.",
          "Responde todas las reseñas, las buenas y las malas, con nombre y sin pelear.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No ofrezcas descuentos ni regalos a cambio de reseñas. La política de contenido prohibido y restringido del Perfil de Empresa en Google trata como interacción falsa el ofrecer incentivos para que alguien publique, cambie o retire una reseña. Pídelas a todas las familias por igual, no solo a las que sabes que están contentas.",
      },
      { type: "h2", content: "¿Qué publicar en Instagram y TikTok?" },
      {
        type: "p",
        content:
          "La familia que no te conoce quiere responder una sola pregunta: «¿cómo sería un martes de mi hijo ahí?». El contenido que la responde vende más que cualquier pieza diseñada.",
      },
      {
        type: "ul",
        items: [
          "Un ejercicio completo de la clase, grabado en vertical, con el profe explicando.",
          "El antes y el después de un alumno a lo largo de varios meses, contado por el entrenador.",
          "Presentación de cada profe: quién es, qué categoría dirige, qué le gusta enseñar.",
          "Respuestas a las preguntas que te hacen por WhatsApp: edades, horarios, qué llevar, cuánto vale.",
          "El ambiente: llegada, calentamiento, hidratación, despedida. Los papás miran si hay orden.",
          "Resultados de torneos y festivales, con más énfasis en la participación que en el marcador.",
        ],
      },
      {
        type: "p",
        content:
          "Pon en la biografía el barrio o la ciudad, las edades que recibes y un enlace directo a WhatsApp. Publicar poco pero con regularidad funciona mejor que una semana intensa seguida de un mes en silencio.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Antes de publicar fotos o videos de menores, pide la autorización escrita del acudiente. En Colombia, la Ley 1581 de 2012 define la autorización como el consentimiento previo, expreso e informado del titular, y su artículo 7 da protección especial a los datos de niños, niñas y adolescentes; el Decreto 1074 de 2015 exige que el tratamiento responda a su interés superior. Lo más práctico es incluir esa autorización en el formulario de inscripción y respetar a la familia que diga que no.",
      },
      { type: "h2", content: "¿Cómo armar un programa de referidos?" },
      {
        type: "p",
        content:
          "La recomendación de otro papá en el parque o en el chat del salón es el canal más barato que tienes, pero casi nunca pasa sola. Hay que pedirla y ponerle reglas claras.",
      },
      {
        type: "ol",
        items: [
          "Define un beneficio sencillo y parejo: por ejemplo, un descuento en la siguiente mensualidad para la familia que refiere y un beneficio de bienvenida para la que llega.",
          "Fija cuándo se gana: cuando el referido paga su primera mensualidad, no cuando solo viene a la prueba.",
          "Pregunta siempre en la inscripción quién lo recomendó y anótalo.",
          "Avísale a la familia que refirió apenas se cumpla la condición y aplica el beneficio sin que te lo recuerden.",
          "Recuérdalo dos o tres veces al año, sobre todo antes de enero y de mitad de año, que es cuando las familias buscan actividad.",
        ],
      },
      { type: "h2", content: "¿Cómo hacer alianzas con colegios y conjuntos residenciales?" },
      {
        type: "p",
        content:
          "Un colegio sin oferta deportiva en las tardes y un conjunto con cancha subutilizada tienen un problema que tú resuelves. Llega con una propuesta escrita, no con una idea general.",
      },
      {
        type: "table",
        headers: ["Aliado", "Qué le ofreces", "Qué pides", "Qué dejar por escrito"],
        rows: [
          ["Colegio", "Extracurricular con profes propios, horario fijo e informe a las familias", "Espacio, permiso para comunicar a los padres y un contacto responsable", "Horarios, responsabilidad sobre los niños, seguros y forma de pago"],
          ["Conjunto residencial", "Clases para los residentes en la cancha del conjunto", "Uso de la zona común en horarios definidos y difusión por la administración", "Aprobación de la administración o del consejo, horarios y cuidado de la zona"],
          ["Empresa o fondo de empleados", "Tarifa preferencial para hijos de empleados", "Difusión interna", "Vigencia del convenio y cómo se valida el beneficio"],
          ["Tienda deportiva o centro de fisioterapia", "Recomendación mutua", "Lo mismo", "Qué beneficio recibe el cliente de cada lado"],
        ],
      },
      {
        type: "p",
        content:
          "Propón siempre empezar con una jornada abierta o una clase de muestra: le baja el riesgo al aliado y te deja una lista de interesados con nombre y teléfono.",
      },
      { type: "h2", content: "¿Para qué sirve la clase de prueba?" },
      {
        type: "p",
        content:
          "Es el puente entre «me interesa» y «me inscribo». Funciona cuando tiene fecha, hora, grupo y un profe que sabe que ese niño viene; y cuando alguien escribe después para preguntar cómo les fue. Si quieres el proceso completo, con mensajes y métricas, lo desarrollamos en la guía sobre cómo convertir la clase de prueba en inscripción.",
      },
      { type: "h2", content: "¿Cuándo vale la pena pagar anuncios de clic a WhatsApp?" },
      {
        type: "p",
        content:
          "Los anuncios de clic a WhatsApp son piezas en Facebook e Instagram cuyo botón abre un chat con tu número, en vez de mandar a la persona a una página. Para una escuela de barrio tienen sentido porque la conversación ya ocurre en WhatsApp. Pero pagas por cada conversación que empieza, así que conviene tener la casa en orden antes de prender la pauta.",
      },
      {
        type: "ul",
        items: [
          "Segmenta por cercanía: un radio corto alrededor de la sede vale más que toda la ciudad.",
          "Usa un video real de una clase, no una imagen de banco.",
          "Ofrece una sola cosa: agendar la clase de prueba de una categoría concreta.",
          "Ten lista la respuesta a las tres preguntas de siempre: precio, horarios y edades.",
          "Responde rápido. Un chat sin respuesta es plata botada.",
          "Empieza con un presupuesto pequeño por una o dos semanas y mira cuántos chats terminan en prueba agendada antes de subirlo.",
        ],
      },
      { type: "h2", content: "¿Cómo saber qué canal funciona?" },
      {
        type: "p",
        content:
          "Agrega una columna «¿cómo supo de nosotros?» a tu lista de interesados y llénala siempre. Con eso puedes calcular tres cosas por canal, cada mes:",
      },
      {
        type: "table",
        headers: ["Indicador", "Fórmula"],
        rows: [
          ["Interesados por canal", "Personas que escribieron o llamaron, agrupadas por su respuesta a «¿cómo supo?»"],
          ["Conversión del canal", "Inscritos que llegaron por ese canal ÷ interesados de ese canal × 100"],
          ["Costo por alumno inscrito", "Lo que gastaste en ese canal en el mes ÷ alumnos inscritos por ese canal"],
        ],
      },
      {
        type: "p",
        content:
          "No hay un promedio de industria que valga para tu escuela: compárate contra tu propio mes anterior. Un canal que trae pocos interesados pero casi todos se inscriben puede valer más que uno que llena el chat de curiosos.",
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no hace tu contenido ni tus alianzas. Lo que sí pone es la parte de recibir al interesado: una página pública de la escuela con botón de inscripción, presencia en un directorio con mapa para que te encuentren atletas nuevos, y Mapi, el asistente de WhatsApp con IA, que le responde a quien escribe preguntando precios y agenda la clase de cortesía. Viene en todos los planes, incluido el Free ($0, hasta 20 alumnos).",
      },
      {
        type: "cta",
        title: "Que el interesado no se quede sin respuesta",
        description:
          "Página pública con botón de inscripción y Mapi respondiendo por WhatsApp y agendando la clase de cortesía. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "clase-de-prueba-gratis-como-convertirla-en-inscripcion",
      "pagina-web-para-escuela-deportiva",
      "como-fijar-precio-mensualidad-escuela-deportiva",
    ],
    about: [
      "captación de alumnos para escuelas deportivas",
      "marketing local para academias deportivas",
      "programa de referidos",
      "anuncios de clic a WhatsApp",
    ],
    mentions: [
      "Perfil de Empresa en Google",
      "Google Maps",
      "Instagram",
      "TikTok",
      "WhatsApp",
      "Meta",
      "Ley 1581 de 2012",
    ],
    faqs: [
      {
        question: "¿Cuál es la forma más barata de conseguir alumnos para una escuela deportiva?",
        answer:
          "Completar el Perfil de Empresa en Google, que es gratuito, y poner en marcha un programa de referidos con un beneficio que se entrega cuando el alumno recomendado paga su primera mensualidad. Ninguno de los dos exige pauta.",
      },
      {
        question: "¿Puedo dar un descuento a cambio de una reseña en Google?",
        answer:
          "No. La política de contenido prohibido y restringido del Perfil de Empresa en Google considera interacción falsa ofrecer incentivos a cambio de publicar, cambiar o retirar reseñas. Puedes pedirlas, pero a todas las familias por igual y sin recompensa.",
      },
      {
        question: "¿Qué necesito para publicar fotos de los niños de mi escuela en redes?",
        answer:
          "La autorización previa, expresa e informada del acudiente. La Ley 1581 de 2012 da protección especial a los datos de niños, niñas y adolescentes, y una foto que permite identificar a alguien es un dato personal. Lo usual es incluir la autorización en el formulario de inscripción.",
      },
      {
        question: "¿Cuándo conviene pagar anuncios de clic a WhatsApp?",
        answer:
          "Cuando ya sabes cuántas clases de prueba se convierten en inscripción y tienes a alguien, o a un asistente, respondiendo el chat rápido. Antes de eso, la pauta solo trae conversaciones que nadie atiende.",
      },
      {
        question: "¿Cómo sé qué canal me trae más alumnos?",
        answer:
          "Pregunta siempre «¿cómo supiste de nosotros?» y anótalo. Luego divide los inscritos de cada canal entre los interesados de ese canal, y lo que gastaste en el canal entre los alumnos que te dejó. Compara mes contra mes.",
      },
    ],
  },
  {
    slug: "clase-de-prueba-gratis-como-convertirla-en-inscripcion",
    title: "Clase de prueba gratis: cómo convertirla en inscripción (antes, durante y después)",
    excerpt:
      "La clase de prueba no se pierde en la cancha: se pierde antes, cuando nadie confirma, y después, cuando nadie escribe. Proceso paso a paso, mensajes de seguimiento y las fórmulas para medir tu conversión sin promedios inventados.",
    category: "Guías",
    readTime: "8 min",
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
          "Una clase de prueba se convierte en inscripción cuando la tratas como un proceso de tres momentos y no como un favor: antes, agendas con fecha, grupo y profe, y confirmas el día anterior; durante, el entrenador sabe que el niño viene, lo integra y alguien le explica al acudiente precios y horarios ahí mismo; después, escribes el mismo día con una oferta clara y un plazo, y vuelves a escribir una o dos veces más. La mayoría de escuelas hace bien la clase y falla en el antes y en el después. Y casi ninguna mide, así que no sabe si su problema es que la gente no llega o que llega y no se queda.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Agenda con cupo y horario fijo, pide los datos mínimos, confirma el día anterior, avísale al profe, habla de precios al final de la clase y haz seguimiento el mismo día, a los dos días y a la semana. Mide tres números: cuántos agendan, cuántos asisten y cuántos se inscriben.",
      },
      { type: "h2", content: "¿La clase de prueba debe ser gratis?" },
      {
        type: "p",
        content:
          "No hay una respuesta única. Depende de cuánto te cuesta el cupo y de qué tan seguido te dejan plantado.",
      },
      {
        type: "table",
        headers: ["Modalidad", "A favor", "En contra", "Te sirve si…"],
        rows: [
          ["Gratis", "Baja la barrera: más gente se anima a probar", "Más inasistencias y algunos curiosos sin intención de inscribirse", "Tienes cupo libre en los grupos y quieres llenar"],
          ["Paga con valor simbólico", "Filtra a quien no tiene interés real", "Menos pruebas agendadas", "Tus grupos están casi llenos o el cupo es costoso (piscina, cancha alquilada)"],
          ["Paga y abonable a la inscripción", "Filtra y además premia a quien se queda", "Hay que explicar bien la regla y llevar la cuenta", "Quieres compromiso sin que se sienta como un cobro"],
        ],
      },
      {
        type: "p",
        content:
          "Cualquiera que elijas, que sea una sola regla para todos y que esté escrita. Lo que desgasta al equipo es negociar cada caso.",
      },
      { type: "h2", content: "¿Qué hacer antes de la clase?" },
      {
        type: "ol",
        items: [
          "Ofrece dos opciones de fecha y hora concretas, en el grupo que le corresponde por edad. «Cuando quieras» no es una cita.",
          "Pide lo mínimo: nombre y fecha de nacimiento del niño, nombre y celular del acudiente, si ha practicado antes y si tiene alguna condición de salud que el profe deba saber.",
          "Limita los cupos de prueba por sesión. Uno o dos niños nuevos se integran; cinco desordenan la clase de los que ya pagan.",
          "Envía un mensaje de confirmación con dirección, punto de encuentro, qué ropa llevar, hidratación y el nombre del profe que lo va a recibir.",
          "Recuérdalo el día anterior y pide que confirmen con una palabra.",
          "Avísale al entrenador: nombre, edad y si es la primera vez que hace ese deporte.",
        ],
      },
      {
        type: "p",
        content:
          "Un mensaje de confirmación puede ser tan simple como este: «Hola, Carolina. Te confirmo la clase de prueba de Sofía este jueves a las 4:00 p. m. en la cancha 2. La recibe el profe Camilo. Que traiga ropa cómoda, tenis y agua. ¿Me confirmas que asisten?».",
      },
      { type: "h2", content: "¿Qué debe pasar durante la clase?" },
      {
        type: "ul",
        items: [
          "Alguien recibe a la familia en la entrada y la lleva hasta el grupo. Que no tengan que preguntar dónde es.",
          "El profe saluda al niño por el nombre y lo presenta al grupo.",
          "Se le asigna un compañero que lo acompañe en los primeros ejercicios.",
          "La sesión incluye al menos un ejercicio en el que el niño nuevo pueda sentir que le salió bien.",
          "Al final, el profe le dice al acudiente una observación concreta: algo que hizo bien y algo que va a aprender. Evita el «va muy bien» genérico.",
          "Una persona distinta al profe, o el profe si ya terminó la clase, explica horarios, valor de la inscripción y de la mensualidad, y qué incluye.",
          "Se le pregunta directamente a la familia cómo se sintieron y si quieren apartar el cupo.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El que decide es el adulto, pero el que convence es el niño. Si el niño sale diciendo que quiere volver, la conversación de precios es corta. Diseña la clase de prueba para que eso pase: participación desde el primer minuto y nada de dejarlo esperando turno en una fila.",
      },
      { type: "h2", content: "¿Cómo hacer el seguimiento después?" },
      {
        type: "table",
        headers: ["Momento", "Qué enviar", "Objetivo"],
        rows: [
          ["El mismo día", "Agradecimiento, la observación del profe y los pasos para inscribirse, con el valor y el enlace o los datos de pago", "Que la decisión se tome mientras el niño sigue emocionado"],
          ["A los dos días", "Una pregunta abierta: cómo le pareció al niño y si quedó alguna duda", "Descubrir la objeción real: horario, precio, transporte"],
          ["A la semana", "Aviso de hasta cuándo se le guarda el cupo o el beneficio de bienvenida", "Cerrar con un sí o con un no"],
          ["Al mes, si dijo «más adelante»", "Novedad concreta: nuevo horario, inicio de ciclo, festival", "Reabrir la conversación sin presionar"],
        ],
      },
      {
        type: "p",
        content:
          "Ejemplo del primer mensaje: «Hola, Carolina. Gracias por venir hoy. El profe Camilo nos contó que Sofía entendió rapidísimo el ejercicio de pases y que le falta soltarse un poco al rematar, que es justo lo que trabajamos este mes. Su grupo entrena martes y jueves a las 4:00 p. m. La inscripción vale $X y la mensualidad $Y. Si la inscribes antes del viernes, le guardamos el cupo en ese horario. ¿Te envío el enlace de pago?».",
      },
      {
        type: "p",
        content:
          "Tres contactos bien espaciados es suficiente. Si no responden, deja la puerta abierta y no insistas más. Y cuida los horarios: la Ley 2300 de 2023, conocida como «dejen de fregar», limita el contacto de cobranza y los mensajes comerciales a los días hábiles de 7:00 a. m. a 7:00 p. m. y los sábados de 8:00 a. m. a 3:00 p. m., sin domingos ni festivos, según el resumen de la norma publicado por Forvis Mazars. Aunque tengas dudas de si te aplica en un caso concreto, es una buena regla de respeto.",
      },
      { type: "h2", content: "¿Qué hacer cuando dicen que no?" },
      {
        type: "ul",
        items: [
          "Pregunta la razón y anótala. Con veinte respuestas ya tienes un diagnóstico.",
          "Si es el horario, ofrece otro grupo o apúntalo en lista de espera de ese horario.",
          "Si es el precio, explica qué incluye antes de pensar en un descuento. Si tienes plan de menos días a la semana, ofrécelo.",
          "Si es el transporte, conéctalo con otra familia del mismo sector, si ambas están de acuerdo.",
          "Si el niño no se sintió cómodo, ofrece una segunda prueba con otro profe o en otro grupo.",
          "Si es un no definitivo, agradece y pregunta si puedes avisarle de vacacionales o festivales.",
        ],
      },
      { type: "h2", content: "¿Cómo medir la conversión?" },
      {
        type: "p",
        content:
          "No vas a encontrar aquí un «promedio del sector»: no conocemos una cifra confiable para escuelas deportivas en Colombia y preferimos no inventarla. Lo que sí puedes hacer es medir la tuya y compararla mes a mes.",
      },
      {
        type: "table",
        headers: ["Indicador", "Fórmula", "Qué te dice"],
        rows: [
          ["Tasa de asistencia a la prueba", "Pruebas realizadas ÷ pruebas agendadas × 100", "Si falla, el problema está en la confirmación y el recordatorio"],
          ["Tasa de conversión de la prueba", "Inscritos ÷ pruebas realizadas × 100", "Si falla, el problema está en la clase o en el seguimiento"],
          ["Conversión de punta a punta", "Inscritos ÷ pruebas agendadas × 100", "El resultado completo del proceso"],
          ["Días hasta la inscripción", "Promedio de días entre la prueba y el primer pago", "Cuánto tiempo vale la pena hacer seguimiento"],
          ["Costo por alumno inscrito", "Gasto del mes en captación ÷ inscritos del mes", "Cuánto te cuesta cada alumno nuevo"],
          ["Permanencia a los tres meses", "Inscritos por prueba que siguen activos al tercer mes ÷ inscritos por prueba × 100", "Si estás trayendo alumnos que se quedan"],
        ],
      },
      {
        type: "p",
        content:
          "Un ejemplo inventado, solo para ver la cuenta: en un mes agendas 40 pruebas, llegan 30 y se inscriben 18. La asistencia a la prueba es 30 ÷ 40 = 75 %, la conversión de la prueba es 18 ÷ 30 = 60 % y la de punta a punta es 18 ÷ 40 = 45 %. Si ese mes gastaste $600.000 en anuncios y material, cada alumno nuevo te costó unos $33.333. Con esos tres porcentajes sabes dónde trabajar: si subes la asistencia a la prueba con un simple recordatorio, ganas inscritos sin conseguir un solo interesado más.",
      },
      {
        type: "p",
        content:
          "Separa los números por profe, por grupo y por canal de llegada. A veces la diferencia no está en la escuela sino en un horario que no le sirve a nadie o en un grupo donde el niño nuevo no encuentra a nadie de su edad.",
      },
      { type: "h2", content: "Errores frecuentes" },
      {
        type: "ul",
        items: [
          "No pedir el celular del acudiente y quedarse sin forma de hacer seguimiento.",
          "Meter al niño nuevo en un grupo que no es de su edad «porque es el que hay hoy».",
          "Que el profe se entere de la prueba cuando el niño ya está en la cancha.",
          "Dejar la conversación de precios para «te escribo luego».",
          "Ofrecer pruebas sin límite: semanas de clases gratis que nunca se cierran.",
          "No registrar las pruebas: sin lista no hay seguimiento ni medición.",
        ],
      },
      { type: "h2", content: "Cómo se apoya esto en SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps, Mapi, el asistente de WhatsApp con IA incluido en todos los planes, atiende a quien escribe preguntando precios y le agenda la clase de cortesía, y la escuela tiene una página pública con botón de inscripción para cerrar el paso final. La clase, la observación del profe y la calidez del seguimiento siguen siendo tuyas: eso no lo reemplaza ningún software. El plan Free cuesta $0 hasta 20 alumnos y Start, $69.000 COP al mes hasta 50.",
      },
      {
        type: "cta",
        title: "Que ninguna clase de prueba se quede sin agendar",
        description:
          "Mapi responde por WhatsApp, agenda la clase de cortesía y tu página pública recibe la inscripción. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "como-conseguir-mas-alumnos-para-una-escuela-deportiva",
      "kpis-escuela-deportiva-formulas-retencion-churn",
      "por-que-se-retiran-los-ninos-del-deporte",
    ],
    about: [
      "clase de prueba en escuelas deportivas",
      "conversión de prospectos a inscritos",
      "seguimiento comercial por WhatsApp",
      "indicadores de captación",
    ],
    mentions: ["WhatsApp", "Ley 2300 de 2023", "Forvis Mazars"],
    faqs: [
      {
        question: "¿Cómo convertir una clase de prueba en inscripción?",
        answer:
          "Agenda con fecha, grupo y profe definidos; confirma el día anterior; durante la clase integra al niño y explica precios al final; y haz seguimiento el mismo día, a los dos días y a la semana, con una oferta clara y un plazo para apartar el cupo.",
      },
      {
        question: "¿La clase de prueba debe ser gratis o paga?",
        answer:
          "Depende del cupo. Gratis atrae más interesados pero tiene más inasistencias; con un valor simbólico o abonable a la inscripción filtras a quien tiene interés real. Lo importante es que haya una sola regla para todos.",
      },
      {
        question: "¿Cómo se calcula la tasa de conversión de la clase de prueba?",
        answer:
          "Inscritos dividido entre pruebas realizadas, por cien. Conviene medir también la tasa de asistencia (pruebas realizadas ÷ pruebas agendadas) y la conversión de punta a punta (inscritos ÷ pruebas agendadas).",
      },
      {
        question: "¿Cuántas veces debo escribirle a una familia después de la prueba?",
        answer:
          "Tres contactos bien espaciados suelen ser suficientes: el mismo día, a los dos días y a la semana. Si dijeron «más adelante», un cuarto mensaje al mes con una novedad concreta. Después de eso, no insistas.",
      },
      {
        question: "¿En qué horario puedo enviar mensajes de seguimiento?",
        answer:
          "Como regla prudente, de lunes a viernes de 7:00 a. m. a 7:00 p. m. y los sábados de 8:00 a. m. a 3:00 p. m., sin domingos ni festivos. Son los horarios que fija la Ley 2300 de 2023 para cobranza y mensajes comerciales, según el resumen de Forvis Mazars.",
      },
    ],
  },
  {
    slug: "como-subir-la-mensualidad-sin-perder-alumnos",
    title: "Cómo subir la mensualidad de tu escuela deportiva sin perder alumnos: cuándo, cuánto y cómo decirlo",
    excerpt:
      "Sube una vez al año, en una fecha previsible, con el IPC del DANE como piso y tus costos reales como techo, y avísalo con al menos un mes de anticipación. Incluye las cifras oficiales de 2025 y 2026, la cuenta del punto de equilibrio y una plantilla de mensaje.",
    category: "Guías",
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
          "Para subir la mensualidad sin perder alumnos, haz el ajuste una sola vez al año y en una fecha que las familias ya esperen (enero o el inicio de la temporada), usa la inflación como piso y tus costos reales como techo, y avísalo por escrito con al menos un mes de anticipación, explicando el porqué y lo que la familia recibe. Como referencia, el DANE reportó que el IPC cerró 2025 en 5,10 % y que la variación anual a octubre de 2026 iba en 6,30 %. Las familias aceptan un aumento previsible y explicado; lo que las hace irse es la sorpresa, el silencio o sentir que pagan más por lo mismo de siempre.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Un ajuste anual, anunciado con 30 a 45 días, con una cifra en pesos (no solo un porcentaje), una razón concreta y una fecha exacta de entrada en vigencia. Antes de fijar el número, calcula cuánto subieron tus costos y cuántos alumnos podrías perder sin quedar peor que hoy.",
      },
      { type: "h2", content: "¿Cuándo conviene subir la mensualidad?" },
      {
        type: "ul",
        items: [
          "En enero, cuando suben el salario mínimo, los arriendos y casi todo lo demás. Es la fecha en que las familias ya esperan ajustes.",
          "Al inicio de una temporada o de un ciclo, si tu escuela trabaja por semestres.",
          "Nunca a mitad de un periodo ya pagado ni a mitad de un torneo.",
          "Idealmente, no justo después de un mes con muchas clases canceladas o cambios de profe.",
          "Siempre en la misma época del año. La costumbre le quita drama al anuncio.",
        ],
      },
      {
        type: "p",
        content:
          "Si llevas dos o tres años sin subir, tienes un atraso acumulado. Es mejor repartirlo en dos ajustes (por ejemplo, enero y julio, avisando los dos desde el principio) que soltar de una vez un aumento que duplique la inflación.",
      },
      { type: "h2", content: "¿Cuánto subir? Las cifras oficiales de referencia" },
      {
        type: "table",
        headers: ["Indicador", "Dato", "Fuente"],
        rows: [
          ["IPC, variación anual de 2025", "5,10 %", "DANE, dato publicado el 8 de enero de 2026; reportado por Portafolio y Bloomberg Línea"],
          ["IPC, variación anual a octubre de 2026", "6,30 %", "DANE, boletín de IPC de octubre de 2026 (publicado el 9 de noviembre); reportado por El País de Cali"],
          ["IPC, variación año corrido a octubre de 2026", "5,94 %", "DANE, mismo boletín; El País de Cali"],
          ["IPC de la división de educación, anual a octubre de 2026", "7,44 %", "DANE, citado por El País de Cali"],
          ["Salario mínimo mensual de 2026", "$1.750.905, un aumento de 23,7 %", "Decreto 1469 de 2025; El Tiempo, 16 de febrero de 2026"],
          ["Auxilio de transporte de 2026", "$249.095", "El Tiempo, 16 de febrero de 2026"],
          ["Salario mínimo de 2027", "Sin definir al 14 de noviembre de 2026; si no hay acuerdo, el Gobierno lo fija por decreto a más tardar el 30 de diciembre", "Ley 278 de 1996, según Bloomberg Línea"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Dos advertencias. Primera: el IPC con el que normalmente se ajustan los precios de enero es el del año completo, que el DANE publica en los primeros días de enero; el 6,30 % de octubre es un avance, no el dato definitivo de 2026. Segunda: el Decreto 1469 de 2025 fue suspendido provisionalmente por el Consejo de Estado en febrero de 2026 (El Tiempo) y, según Noticias RCN, el Gobierno expidió después un decreto transitorio que mantuvo el aumento. Para nómina, confirma el valor vigente con tu contador.",
      },
      {
        type: "p",
        content:
          "La inflación es el piso: si subes menos que el IPC, en la práctica estás bajando tu precio. Pero tu techo lo ponen tus costos. Una escuela deportiva gasta sobre todo en entrenadores y en escenario, y en 2026 el salario mínimo subió bastante más que la inflación. Si les pagas a tus profes con referencia al mínimo, tu costo por clase creció más que el IPC aunque no hayas cambiado nada.",
      },
      {
        type: "ol",
        items: [
          "Suma tus costos mensuales de hoy: profes, escenario, implementos, seguros, administración.",
          "Estima cuánto van a costar el próximo año con los aumentos que ya conoces o esperas.",
          "Divide la diferencia entre el número de alumnos que pagan. Ese es el aumento mínimo en pesos para quedar igual.",
          "Compáralo con lo que daría aplicar el IPC a tu mensualidad actual.",
          "Elige una cifra entre las dos y redondéala a un número fácil de recordar y de pagar.",
        ],
      },
      {
        type: "table",
        headers: ["Mensualidad actual", "Con 6,3 %", "Redondeada", "Con 10 %"],
        rows: [
          ["$90.000", "$95.670", "$96.000", "$99.000"],
          ["$120.000", "$127.560", "$128.000", "$132.000"],
          ["$150.000", "$159.450", "$160.000", "$165.000"],
        ],
      },
      {
        type: "p",
        content:
          "La tabla es un ejemplo ilustrativo con el IPC anual a octubre de 2026 y con un 10 % hipotético; no es una recomendación de porcentaje. No encontramos una norma que fije un tope al precio de las escuelas de formación deportiva privadas, pero revisa lo que firmaste con las familias en el contrato o el reglamento, y consulta a tu abogado si prometiste un precio por un periodo determinado.",
      },
      { type: "h2", content: "¿Cuántos alumnos puedo perder sin quedar peor?" },
      {
        type: "p",
        content:
          "Hay una cuenta sencilla que le quita miedo a la decisión. Si subes el precio en un porcentaje p, tus ingresos quedan iguales aunque pierdas una fracción de alumnos igual a p ÷ (1 + p).",
      },
      {
        type: "table",
        headers: ["Aumento", "Porcentaje de alumnos que puedes perder y facturar lo mismo"],
        rows: [
          ["5 %", "4,8 %"],
          ["8 %", "7,4 %"],
          ["10 %", "9,1 %"],
          ["15 %", "13,0 %"],
        ],
      },
      {
        type: "p",
        content:
          "Ejemplo: con 100 alumnos a $120.000 facturas $12.000.000. Si subes 8 %, la mensualidad queda en $129.600; con 93 alumnos facturas $12.052.800. Es decir, podrías perder hasta 7 alumnos y seguir igual o mejor. No es una invitación a perderlos, sino una forma de ver que el riesgo de un ajuste razonable suele ser menor de lo que parece. Ojo: la cuenta mira ingresos, no ganancia; si tus costos son casi todos fijos, perder alumnos pesa un poco más.",
      },
      { type: "h2", content: "¿Cómo comunicar el aumento?" },
      {
        type: "ol",
        items: [
          "Avisa con 30 a 45 días de anticipación. Es una recomendación práctica, no un plazo legal: le da tiempo a la familia para organizar su presupuesto.",
          "Primero por escrito (WhatsApp o correo) y a todas las familias el mismo día. Que nadie se entere por otro papá.",
          "Di la cifra en pesos, el valor nuevo y la fecha exacta desde la que aplica.",
          "Explica la razón en una o dos frases, sin victimizarte: costos de entrenadores, escenario, implementos.",
          "Menciona algo concreto que mejora o que se mantiene: grupos pequeños, un profe más, informe a las familias, participación en un torneo.",
          "Deja un canal para dudas y responde una por una, en privado, no en el grupo.",
          "Cuéntaselo antes a tus profes y a quien atiende el WhatsApp, para que todos digan lo mismo.",
        ],
      },
      { type: "h3", content: "Plantilla de mensaje" },
      {
        type: "quote",
        content:
          "Hola, familias de [nombre de la escuela]. Les escribimos con tiempo para contarles que, a partir del [fecha], la mensualidad pasará de $[valor actual] a $[valor nuevo]. Es el ajuste que hacemos una vez al año para cubrir el aumento en los costos de entrenadores, escenario e implementos. La inscripción y los horarios se mantienen igual. Para [año] seguimos con [beneficio concreto: grupos de máximo X niños, informe mensual, festival de mitad de año]. Si tienes alguna duda o una situación particular, escríbenos por este medio y lo revisamos contigo. Gracias por confiar en nosotros para la formación de sus hijos.",
      },
      {
        type: "p",
        content:
          "Ajusta el tono al de tu escuela, pero conserva los cuatro datos: valor actual, valor nuevo, fecha y razón. Y no escondas el anuncio al final de un mensaje largo sobre otra cosa.",
      },
      { type: "h2", content: "¿Qué hacer con las familias que no pueden pagar el aumento?" },
      {
        type: "ul",
        items: [
          "Ten definida de antemano una política de becas o descuentos, con cupos limitados, en lugar de improvisar caso por caso.",
          "Ofrece el pago anticipado: quien pague el semestre o el año antes de la fecha del ajuste conserva la tarifa anterior por ese periodo.",
          "Mantén el descuento por hermanos sobre el valor nuevo.",
          "Si tienes un plan de menos días a la semana, preséntalo como alternativa antes de que la familia se retire.",
          "No hagas excepciones en secreto: tarde o temprano se saben, y el que sí pagó el ajuste se siente tratado injustamente.",
        ],
      },
      { type: "h2", content: "Errores que sí hacen perder alumnos" },
      {
        type: "ul",
        items: [
          "Avisar el mismo día del cobro, o no avisar y que la familia lo descubra en el recibo.",
          "Subir dos veces en el mismo año sin haberlo anunciado.",
          "Comunicar solo el porcentaje: «sube 8 %» obliga a la familia a hacer la cuenta y suena más grande que «sube $9.000».",
          "Justificarlo con quejas sobre lo difícil que está todo.",
          "Subir el precio y, el mismo mes, quitar un día de entrenamiento o agrandar los grupos.",
          "Cobrar el valor nuevo a unos y el viejo a otros por desorden en la lista.",
        ],
      },
      { type: "h2", content: "Cómo se aplica el ajuste en la operación" },
      {
        type: "p",
        content:
          "El anuncio es la mitad del trabajo; la otra mitad es que desde la fecha acordada a todos se les cobre el valor correcto y que el recordatorio llegue con el monto nuevo. En SportMaps la escuela define sus precios, los recordatorios de cobro salen por WhatsApp y correo con enlace de pago, y los reportes de mora y de retiros te dejan ver, en las semanas siguientes al ajuste, si el aumento tuvo algún efecto. La plataforma no decide cuánto subes: eso lo sabes tú, con tus costos en la mano. Los planes van desde Free ($0, hasta 20 alumnos) hasta Elite ($349.000 COP al mes, hasta 800).",
      },
      {
        type: "cta",
        title: "Cobra el valor nuevo sin perseguir a nadie",
        description:
          "Recordatorios por WhatsApp y correo con enlace de pago, Wompi y Mercado Pago, y reportes de mora y retiros. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes de SportMaps",
      },
    ],
    related: [
      "como-fijar-precio-mensualidad-escuela-deportiva",
      "descuento-por-hermanos-y-becas-escuela-deportiva",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
    ],
    about: [
      "aumento de mensualidad en escuelas deportivas",
      "IPC en Colombia",
      "salario mínimo en Colombia",
      "fijación de precios en academias deportivas",
    ],
    mentions: [
      "DANE",
      "Consejo de Estado",
      "Noticias RCN",
      "El País de Cali",
      "El Tiempo",
      "Bloomberg Línea",
      "Portafolio",
      "WhatsApp",
    ],
    faqs: [
      {
        question: "¿Cuánto puedo subir la mensualidad de mi escuela deportiva en 2027?",
        answer:
          "Usa la inflación como piso y tus costos como techo. El DANE reportó un IPC de 5,10 % para 2025 y una variación anual de 6,30 % a octubre de 2026; el dato definitivo de 2026 se publica en los primeros días de enero de 2027. Si tus costos de entrenadores y escenario subieron más que eso, haz la cuenta en pesos por alumno.",
      },
      {
        question: "¿Cuándo es mejor subir la mensualidad?",
        answer:
          "Una vez al año y siempre en la misma época: enero o el inicio de la temporada. Evita hacerlo a mitad de un periodo ya pagado, en medio de un torneo o justo después de un mes con muchas clases canceladas.",
      },
      {
        question: "¿Con cuánta anticipación debo avisar el aumento?",
        answer:
          "Como recomendación práctica, entre 30 y 45 días, por escrito y a todas las familias el mismo día. No es un plazo legal, pero le da tiempo a cada familia para organizar su presupuesto y reduce los reclamos.",
      },
      {
        question: "¿Cuántos alumnos puedo perder al subir el precio sin facturar menos?",
        answer:
          "Una fracción igual al aumento dividido entre uno más el aumento. Con una subida de 8 %, puedes perder hasta 7,4 % de los alumnos y facturar lo mismo; con 10 %, hasta 9,1 %.",
      },
      {
        question: "¿Qué debe decir el mensaje para anunciar el aumento?",
        answer:
          "Cuatro datos: el valor actual, el valor nuevo en pesos, la fecha exacta desde la que aplica y la razón en una o dos frases. Agrega algo concreto que la familia recibe o que se mantiene, y un canal para resolver dudas en privado.",
      },
    ],
  },
];
