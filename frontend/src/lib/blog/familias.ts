import type { BlogPost } from "../blog-posts";

/**
 * Cluster "familias": papás, acudientes y deportistas.
 * Flujos de producto verificados contra la app (solo lectura):
 * - Pago: ParentCheckoutPage (Wompi / Mercado Pago / transferencia + comprobante).
 * - Carnet: MyAthleteCardsPage + AthleteCardPublicPage (/c/:token).
 * - Paz y salvo: MyCertificatesPage + CertificateVerifyPublicPage (/cert/:folio).
 * - Informe mensual: ChildReportDetailPage + MetricHighlights.
 * Ley 1581: texto de la Ley 1581 de 2012 y Decreto 1377 de 2013 (SIC / Función Pública).
 */
export const familiasPosts: BlogPost[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Pagar la mensualidad desde el celular
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "como-pagar-mensualidad-escuela-deportiva-desde-el-celular",
    title: "Cómo pagar la mensualidad de la escuela deportiva desde el celular",
    excerpt:
      "Paso a paso para pagar con PSE, Nequi, tarjeta o transferencia sin ir a la sede, qué comprobante guardar y qué hacer si el pago no aparece.",
    category: "Para familias",
    readTime: "7 min",
    date: "18 Sep 2026",
    isoDate: "2026-09-18",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para pagar la mensualidad de la escuela deportiva desde el celular necesitas tres cosas: el cobro del mes (llega como enlace por WhatsApp o correo, o lo ves en la app de la escuela), un medio de pago (PSE, Nequi, tarjeta o transferencia) y el comprobante. Si la escuela tiene pasarela en línea, el pago queda registrado solo en minutos. Si pagas por transferencia, subes la foto del comprobante y la escuela lo valida. En ningún caso deberías tener que ir a la sede con efectivo ni mandar la captura a tres personas distintas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Paga siempre desde el enlace o la app de la escuela, no a cuentas que te pasen por chat sin confirmar. Si pagas en línea, el pago se aplica solo. Si pagas por transferencia, sube el comprobante en el mismo cobro y guárdalo hasta que veas el pago como aprobado.",
      },
      { type: "h2", content: "Las dos formas de pagar: en línea o por transferencia" },
      {
        type: "p",
        content:
          "Casi todas las escuelas en Colombia reciben pagos de una de estas dos maneras, y muchas aceptan las dos. La diferencia importante para ti es cuánto tarda la escuela en enterarse de que pagaste.",
      },
      {
        type: "table",
        headers: ["", "Pago en línea (pasarela)", "Transferencia + comprobante"],
        rows: [
          ["Medios", "PSE, Nequi, tarjeta débito o crédito, Bancolombia, billetera de Mercado Pago (según la pasarela de la escuela)", "Transferencia bancaria, Nequi, Daviplata, llave Bre-B o QR de la escuela"],
          ["Quién confirma el pago", "La pasarela, automáticamente", "La escuela, al revisar tu comprobante"],
          ["Cuándo queda registrado", "En minutos", "Cuando la escuela lo aprueba (horas o días, según la escuela)"],
          ["Qué guardas", "El correo de confirmación de la pasarela", "La captura o PDF del comprobante del banco"],
          ["Riesgo típico", "Pagar dos veces si reintentas sin revisar", "Que el comprobante se pierda en un chat"],
        ],
      },
      {
        type: "p",
        content:
          "Las pasarelas más usadas por escuelas en Colombia son Wompi (de Bancolombia) y Mercado Pago. Cuando la escuela las tiene conectadas, la plata llega a la cuenta de la escuela y el cobro se marca como pagado sin que nadie tenga que revisar capturas.",
      },
      { type: "h2", content: "Paso a paso: pagar en línea desde el celular" },
      {
        type: "ol",
        items: [
          "Abre el enlace de cobro que te llegó por WhatsApp o correo (en escuelas con SportMaps es un enlace corto que no te pide iniciar sesión), o entra a la app de la escuela y busca tus pagos pendientes.",
          "Revisa el detalle: nombre del deportista, concepto (inscripción o mensualidad), mes y valor. Si algo no cuadra, pregunta antes de pagar.",
          "Elige el medio: PSE (te lleva a tu banco), Nequi, tarjeta o el que muestre la pasarela.",
          "Completa el pago en la pantalla del banco o de la billetera. No cierres la ventana hasta ver el resultado.",
          "Vuelve a la pantalla de la escuela: debe decir que el pago fue aprobado. Si tienes la opción, descarga el recibo.",
          "Guarda el correo de confirmación de la pasarela. Es tu prueba si algo falla.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Si el banco te muestra «pendiente» o la pantalla se cierra antes de terminar, no pagues de nuevo de inmediato. Espera unos minutos y revisa si el cobro ya aparece como pagado. Reintentar a ciegas es la causa más común de pagos dobles.",
      },
      { type: "h2", content: "Paso a paso: pagar por transferencia y subir el comprobante" },
      {
        type: "ol",
        items: [
          "Abre el cobro y elige la opción de transferencia. Ahí deben aparecer los datos de la escuela: banco, tipo y número de cuenta, titular, o la llave/QR de Nequi, Daviplata o Bre-B.",
          "Haz la transferencia por el valor exacto del cobro desde la app de tu banco.",
          "Toma la captura del comprobante o descarga el PDF. Que se vean el valor, la fecha, la referencia y la cuenta destino.",
          "Vuelve al cobro y sube el comprobante ahí mismo (desde la galería o con la cámara).",
          "Confirma. El pago queda «en revisión» hasta que la escuela lo apruebe.",
          "Cuando lo aprueben, el cobro pasa a pagado. Si pasan varios días y sigue en revisión, escribe a la escuela con la fecha y el valor.",
        ],
      },
      {
        type: "p",
        content:
          "En escuelas que usan SportMaps, el comprobante que subes se lee automáticamente: el sistema extrae el valor y la referencia y los compara con el cobro. Eso ayuda a la escuela a aprobar más rápido y a detectar errores, como un comprobante por un valor menor o uno que ya se había usado en otro pago. La aprobación final la sigue haciendo la escuela.",
      },
      { type: "h3", content: "¿Y si mando el comprobante por WhatsApp?" },
      {
        type: "p",
        content:
          "Depende de la escuela. Algunas tienen un asistente de WhatsApp que recibe la foto del comprobante, lee el valor y la referencia en segundos, lo cruza con tu cobro y lo deja listo para que la escuela lo apruebe con un toque. En SportMaps ese asistente viene incluido para la escuela, que conecta su propio número de WhatsApp; si tu escuela lo tiene activo, mandar la foto a su número oficial funciona igual que subirla en el cobro. Si no lo tiene, el comprobante que mandas por chat queda en el celular de alguien y es fácil que se pierda: mejor súbelo en el cobro.",
      },
      { type: "h2", content: "Qué revisar antes de pagar" },
      {
        type: "ul",
        items: [
          "Que el cobro sea del deportista correcto. Si tienes dos hijos en la misma escuela, son cobros separados.",
          "Que el mes sea el correcto. Un error común es pagar el mes siguiente creyendo que es el actual.",
          "Si hay recargo por mora, que aparezca explicado en el cobro. El recargo lo define cada escuela; no todas lo cobran.",
          "Que la cuenta destino sea la que la escuela publicó en su app o enlace, no una que te pasaron por un mensaje sin verificar.",
          "Si es la primera vez, distingue la inscripción (se paga una sola vez) de la mensualidad (se paga cada periodo).",
        ],
      },
      { type: "h2", content: "Qué hacer si pagaste y el pago no aparece" },
      {
        type: "table",
        headers: ["Situación", "Qué hacer"],
        rows: [
          ["Pagaste en línea y el cobro sigue pendiente", "Espera 10–15 minutos y recarga. Si sigue igual, busca el correo de la pasarela y envíalo a la escuela."],
          ["El banco debitó pero la pasarela dice rechazado", "No pagues otra vez. Pide a la escuela que revise; en PSE estos casos suelen reversarse según los tiempos de tu banco."],
          ["Subiste comprobante y lleva días en revisión", "Escribe a la escuela con fecha, valor y referencia. Puede que el comprobante esté borroso o no coincida el valor."],
          ["Pagaste dos veces el mismo mes", "Avisa a la escuela con los dos comprobantes. Lo usual es abonarlo al mes siguiente o devolverlo; la decisión es de la escuela."],
          ["Pagaste a una cuenta equivocada", "Contacta a tu banco de inmediato. La escuela no puede aplicar un pago que no recibió."],
        ],
      },
      { type: "h2", content: "Recordatorios: para no pagar tarde" },
      {
        type: "p",
        content:
          "Muchas escuelas envían recordatorios automáticos por correo o WhatsApp antes y después de la fecha de pago, con el enlace para pagar. En escuelas que usan SportMaps, el recordatorio sale unos días antes del vencimiento, el día del vencimiento y en varios momentos después si sigue pendiente, y trae un enlace corto con el que pagas sin iniciar sesión. Si no te llegan, revisa que la escuela tenga tu correo y tu número correctos en tu ficha de acudiente. Un dato desactualizado es la razón más común de que una familia diga «nunca me avisaron».",
      },
      {
        type: "p",
        content:
          "Un detalle que conviene saber: en SportMaps, estar atrasado en un pago no da de baja automáticamente al deportista. La escuela puede cobrar un recargo si así lo decidió, pero tu hijo no desaparece de la lista por un mes atrasado. Si la escuela decide algo distinto, debe decírtelo directamente.",
      },
      { type: "h2", content: "Instala la app de la escuela en el celular" },
      {
        type: "p",
        content:
          "Si tu escuela usa SportMaps, no tienes que buscar nada en App Store ni en Google Play: la app se instala desde el navegador (Chrome en Android o Safari en iPhone, opción «Agregar a pantalla de inicio»). Queda como un ícono más y te llegan notificaciones de cobros, avisos y calendario. Desde ahí ves tus pagos, el historial y lo que está pendiente sin buscar enlaces viejos en el chat.",
      },
      { type: "h2", content: "Cuándo no conviene pagar desde el celular" },
      {
        type: "p",
        content:
          "Si la escuela solo recibe efectivo y no tiene forma de registrarlo, pagar por transferencia sin que te lo pidan puede generar confusión. Pregunta primero. Y si estás en una red wifi pública, prefiere los datos móviles para hacer pagos con PSE o tarjeta.",
      },
      {
        type: "cta",
        title: "¿Tu escuela todavía cobra por chat y capturas?",
        description:
          "Compártele esta guía. SportMaps le da cobros con enlace, pasarelas Wompi y Mercado Pago y lectura de comprobantes sin costo adicional por el asistente.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Cómo pago la mensualidad de la escuela de fútbol de mi hijo por Nequi?",
        answer:
          "Abre el cobro que te envió la escuela y elige Nequi si aparece en la pasarela, o haz una transferencia a la llave o número Nequi que la escuela publicó. Si fue por transferencia, sube la captura del comprobante en el mismo cobro para que la escuela lo apruebe.",
      },
      {
        question: "¿Cuánto tarda en reflejarse un pago por PSE en la escuela?",
        answer:
          "Si la escuela tiene una pasarela como Wompi o Mercado Pago conectada, el pago aprobado se refleja en minutos. Si el banco lo deja pendiente, puede tardar más; en ese caso no vuelvas a pagar y revisa de nuevo más tarde.",
      },
      {
        question: "Pagué la mensualidad y la escuela dice que no le aparece, ¿qué hago?",
        answer:
          "Envía a la escuela el comprobante o el correo de confirmación de la pasarela, con fecha, valor y referencia. Si el pago fue por transferencia, súbelo en el cobro dentro de la app para que quede ligado a ese mes y no se pierda en el chat.",
      },
      {
        question: "¿Es seguro pagar la escuela deportiva con tarjeta desde el celular?",
        answer:
          "Sí, si pagas desde el enlace o la app oficial de la escuela y la página de pago es de una pasarela reconocida como Wompi o Mercado Pago. No pagues a cuentas que te lleguen por mensajes sin confirmar con la escuela.",
      },
      {
        question: "¿Me pueden sacar de la escuela si me atraso un mes?",
        answer:
          "Depende de las reglas de cada escuela. En SportMaps, el atraso no da de baja automáticamente al deportista; la escuela puede aplicar un recargo por mora si lo tiene configurado, pero la baja es una decisión que debe comunicarte.",
      },
    ],
    about: ["pagos en línea", "mensualidad de escuela deportiva", "comprobantes de pago", "PSE"],
    mentions: ["Wompi", "Mercado Pago", "Nequi", "Daviplata", "Bre-B", "PSE", "Bancolombia", "WhatsApp"],
    related: [
      "leer-comprobantes-de-pago-con-ia",
      "paz-y-salvo-escuela-deportiva",
      "inscripcion-vs-mensualidad-escuela-deportiva",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Carnet digital del deportista
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "carnet-digital-deportista",
    title: "Carnet digital del deportista: qué es, para qué sirve y cómo usarlo",
    excerpt:
      "El carnet con QR reemplaza el carnet plástico: identifica al deportista, muestra si está vigente, guarda datos de emergencia y sirve para marcar asistencia.",
    category: "Para familias",
    readTime: "7 min",
    date: "23 Sep 2026",
    isoDate: "2026-09-23",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un carnet digital del deportista es la versión en el celular del carnet plástico de la escuela: muestra la foto, el nombre, la escuela, el equipo o categoría y una fecha de vencimiento, y trae un código QR que cualquiera puede escanear para comprobar en tiempo real si el carnet está vigente. Sirve para identificar al deportista en la entrada, en torneos y salidas, para tener a mano sus datos de emergencia y, si la escuela lo usa así, para marcar la asistencia escaneando el QR.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El carnet digital no se pierde, no se imprime cada año y no se puede falsificar fácilmente, porque el QR se valida contra el registro de la escuela. Lo emite la escuela; tú lo ves en el celular, lo puedes voltear para ver los datos de emergencia y descargarlo como imagen.",
      },
      { type: "h2", content: "Carnet plástico vs carnet digital" },
      {
        type: "table",
        headers: ["", "Carnet plástico", "Carnet digital con QR"],
        rows: [
          ["Costo para la escuela", "Impresión por unidad y por renovación", "Sin impresión (se puede imprimir si se quiere)"],
          ["Si se pierde", "Hay que reimprimir", "Sigue en el celular del acudiente"],
          ["¿Está vigente?", "Hay que confiar en la fecha impresa", "El QR muestra el estado en tiempo real: vigente, vencido o revocado"],
          ["Datos de emergencia", "Rara vez caben", "En el reverso: contacto de emergencia y datos médicos básicos que la escuela habilite"],
          ["Asistencia", "No sirve", "El entrenador puede escanearlo para marcar presente"],
          ["Si el deportista se retira", "El carnet sigue circulando", "La escuela lo revoca y el QR deja de validar"],
        ],
      },
      { type: "h2", content: "Qué datos lleva el carnet" },
      {
        type: "p",
        content:
          "El frente identifica: foto (si la escuela la tiene), nombre, escuela con su logo y colores, equipo o categoría, sede, fecha de vencimiento y el QR. El reverso es para emergencias: contacto de emergencia, EPS, tipo de sangre (RH) y talla, según los campos que la escuela decida mostrar en su plantilla.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "La escuela elige qué campos aparecen. Si te preocupa que algún dato de tu hijo quede visible al escanear el QR, pregúntale a la escuela qué campos muestra su carnet. Más sobre esto en nuestra guía de datos de menores y la Ley 1581.",
      },
      { type: "h2", content: "Cómo ver el carnet de tu hijo en el celular" },
      {
        type: "ol",
        items: [
          "Entra a la app de la escuela con tu cuenta de acudiente (la que quedó vinculada al deportista).",
          "Abre la sección de carnets. Ahí aparece el carnet vigente de cada uno de tus hijos, agrupado por escuela.",
          "Toca el carnet para verlo en grande. Puedes voltearlo para ver el reverso con los datos de emergencia.",
          "Si quieres tenerlo sin conexión, descárgalo como imagen (PNG) y guárdalo en la galería.",
          "Cuando te lo pidan en la entrada, muestra el QR desde el celular. Quien lo escanea ve el estado del carnet en ese momento.",
        ],
      },
      {
        type: "p",
        content:
          "Si no ves ningún carnet, lo más probable es que la escuela todavía no lo haya emitido o que tu cuenta no esté vinculada como acudiente del deportista. Escríbele a la escuela: el carnet lo emite el administrador, uno por uno o en lote para todo un equipo (y puede descargar un PDF por equipo si quiere imprimirlos).",
      },
      { type: "h2", content: "Qué significa cada estado" },
      {
        type: "table",
        headers: ["Estado", "Qué quiere decir", "Qué hacer"],
        rows: [
          ["Vigente", "El carnet es válido hasta la fecha de vencimiento", "Nada; úsalo normalmente"],
          ["Vencido", "Pasó la fecha de vencimiento definida por la escuela", "Pide a la escuela que emita uno nuevo"],
          ["Revocado", "La escuela lo anuló (retiro, error en los datos o reemplazo por una versión nueva)", "Si no esperabas esto, pregunta a la escuela"],
        ],
      },
      {
        type: "p",
        content:
          "Cuando la escuela corrige un dato y reemite el carnet, el nuevo queda con un número de versión y el anterior deja de ser el vigente. Por eso conviene mostrar siempre el carnet desde la app y no una captura vieja.",
      },
      { type: "h2", content: "El QR para marcar asistencia" },
      {
        type: "p",
        content:
          "En escuelas que usan SportMaps, el entrenador o el personal puede escanear el QR del carnet desde su celular para marcar al deportista como presente en la sesión del día. Para la familia esto significa que la asistencia queda registrada sin listas de papel, y que luego la puedes ver reflejada en el informe mensual. Algunas escuelas, además, tienen torniquetes o lectores biométricos en la entrada; eso es un módulo aparte que depende de la sede.",
      },
      { type: "h2", content: "Cuándo te van a pedir el carnet" },
      {
        type: "ul",
        items: [
          "Al entrar a la sede, si la escuela controla el acceso.",
          "En torneos y festivales, donde los organizadores piden identificar a cada jugador de la categoría.",
          "En salidas y viajes, para tener a mano el contacto de emergencia y la EPS.",
          "Cuando el deportista se lesiona y quien lo atiende necesita sus datos básicos.",
          "Para validar descuentos o convenios que la escuela tenga con terceros, si los tiene.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Para torneos federados, el carnet de la escuela no reemplaza la inscripción ante la liga ni el documento de identidad. Es una identificación de la escuela, no un documento oficial.",
      },
      { type: "h2", content: "Si tu hijo es mayor de edad o tiene su propia cuenta" },
      {
        type: "p",
        content:
          "Los deportistas adultos con cuenta propia ven su carnet en su propio celular. Para menores de edad, lo normal es que lo vea el acudiente vinculado. Si son varios acudientes (mamá y papá, por ejemplo), cada uno puede vincularse para verlo.",
      },
      { type: "h2", content: "Qué pedirle a la escuela si aún no tiene carnet digital" },
      {
        type: "ul",
        items: [
          "Que el QR se valide en línea y muestre si el carnet está vigente, no solo un QR con el nombre.",
          "Que tenga fecha de vencimiento y se pueda anular si el deportista se retira.",
          "Que el reverso tenga contacto de emergencia y que la familia sepa qué datos se muestran.",
          "Que lo puedas ver sin depender de que alguien te reenvíe una imagen por WhatsApp.",
        ],
      },
      {
        type: "cta",
        title: "¿Tu escuela sigue imprimiendo carnets cada año?",
        description:
          "Con SportMaps emite carnets digitales con QR, por deportista o por equipo, con su marca y fecha de vencimiento.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Qué es el carnet digital de un deportista?",
        answer:
          "Es el carnet de la escuela en el celular, con foto, nombre, categoría, fecha de vencimiento y un código QR. Al escanear el QR se comprueba en tiempo real si el carnet está vigente, vencido o anulado.",
      },
      {
        question: "¿Dónde veo el carnet de mi hijo en la app de la escuela?",
        answer:
          "Entra con tu cuenta de acudiente y abre la sección de carnets: ahí aparece el carnet vigente de cada hijo. Si no aparece, la escuela no lo ha emitido o tu cuenta no está vinculada al deportista.",
      },
      {
        question: "¿El carnet digital sirve para los torneos?",
        answer:
          "Sirve para identificar al deportista ante la escuela y los organizadores que lo acepten. No reemplaza el documento de identidad ni la inscripción ante una liga en torneos federados.",
      },
      {
        question: "¿Qué pasa si el carnet de mi hijo aparece vencido?",
        answer:
          "Significa que pasó la fecha de vencimiento definida por la escuela. Pídele a la escuela que emita uno nuevo; al reemitirlo, el carnet anterior deja de ser el vigente.",
      },
      {
        question: "¿Puedo descargar el carnet para mostrarlo sin internet?",
        answer:
          "Sí, se puede descargar como imagen. Ten en cuenta que quien escanee el QR necesita conexión para ver el estado actualizado, y que una captura vieja puede no reflejar una versión más reciente del carnet.",
      },
    ],
    about: ["carnet digital", "identificación de deportistas", "código QR", "control de asistencia"],
    mentions: ["SportMaps", "WhatsApp"],
    related: [
      "control-de-asistencia-con-qr-y-torniquetes",
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "informe-mensual-del-deportista-para-padres",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Paz y salvo
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "paz-y-salvo-escuela-deportiva",
    title: "Paz y salvo de la escuela deportiva: cómo pedirlo y para qué sirve",
    excerpt:
      "Cuándo te lo piden (traslado de club, torneos, retiro), qué debe decir, cómo solicitarlo desde el celular y cómo comprobar que es auténtico.",
    category: "Para familias",
    readTime: "7 min",
    date: "29 Sep 2026",
    isoDate: "2026-09-29",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Un paz y salvo de una escuela deportiva es una constancia firmada por la escuela que certifica que el deportista no tiene deudas pendientes con ella a una fecha determinada. Te lo piden sobre todo cuando tu hijo se cambia de club, cuando otro club o una liga necesitan confirmar que sale sin pendientes, y cuando se retira y quieres dejar cerrado el tema de cobros. Para obtenerlo necesitas estar al día con inscripción, mensualidades y otros cobros, y solicitarlo a la escuela; si la escuela usa SportMaps, lo pides desde el celular y recibes un documento con folio que cualquiera puede verificar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Antes de pedir el paz y salvo, revisa en la app que no tengas cobros pendientes: la escuela no debería emitirlo si hay saldo. Pídelo por escrito o desde la app, no de palabra, y guarda el PDF con su folio.",
      },
      { type: "h2", content: "Cuándo te van a pedir un paz y salvo" },
      {
        type: "table",
        headers: ["Situación", "Quién lo pide", "Por qué"],
        rows: [
          ["Traslado a otro club", "El club nuevo o la liga", "Confirmar que el deportista no deja deudas en el club anterior"],
          ["Retiro de la escuela", "Tú", "Dejar constancia de que todo quedó pagado y que no llegarán más cobros"],
          ["Inscripción a torneos o viajes", "La escuela u organizador", "Algunas escuelas exigen estar al día antes de inscribir"],
          ["Reclamar uniformes, kits o documentos", "La escuela", "Políticas internas de la escuela"],
          ["Trámites de becas o apoyos", "La entidad que otorga el apoyo", "Soporte de que el deportista está activo y al día"],
        ],
      },
      {
        type: "p",
        content:
          "No hay una norma única que obligue a todas las escuelas deportivas a pedir paz y salvo para un traslado; depende del reglamento del club, de la liga y del torneo. Lo práctico es preguntarle al club de destino qué documento exacto necesita y con qué fecha.",
      },
      { type: "h2", content: "Qué debe decir un paz y salvo" },
      {
        type: "ul",
        items: [
          "Nombre completo y documento de identidad del deportista.",
          "Nombre de la escuela o club que lo expide.",
          "La afirmación concreta: que el deportista se encuentra a paz y salvo por todo concepto (o por los conceptos que se indiquen) a una fecha.",
          "Fecha de expedición.",
          "Firma, nombre y cargo de quien lo expide.",
          "Un número de folio o un código de verificación, para que un tercero pueda comprobar que es auténtico.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "«A paz y salvo por todo concepto» incluye mensualidades, inscripción, uniformes, torneos y cualquier otro cobro. Si la escuela solo certifica mensualidades, el documento debe decirlo.",
      },
      { type: "h2", content: "Cómo pedirlo desde el celular (escuelas en SportMaps)" },
      {
        type: "ol",
        items: [
          "Revisa tus pagos en la app y confirma que no tengas cobros pendientes ni comprobantes en revisión.",
          "Abre la sección de constancias y toca «solicitar».",
          "Elige al deportista (si tienes varios hijos) y el tipo de constancia de paz y salvo que la escuela tenga configurada.",
          "Envía la solicitud. Si la escuela cobra por la constancia, verás el valor antes de confirmar; si es gratis, también lo indica.",
          "La escuela revisa la solicitud y la aprueba. Cuando queda emitida, cambia a estado «Emitida» y puedes descargar el PDF.",
          "Comparte el PDF con quien te lo pidió. Cada constancia tiene un folio para verificarla.",
        ],
      },
      {
        type: "p",
        content:
          "Un punto importante para que no haya malentendidos: en SportMaps la escuela revisa y aprueba cada constancia antes de emitirla. El sistema no la expide sola; es la escuela la que certifica que estás al día. Si te la rechazan o se demora, pregunta si hay algún cobro que la escuela ve pendiente y tú no.",
      },
      { type: "h2", content: "Estados de la solicitud" },
      {
        type: "table",
        headers: ["Estado", "Qué significa"],
        rows: [
          ["Pendiente de pago", "La escuela cobra por esta constancia y aún no se registra el pago"],
          ["Por aprobar", "La solicitud llegó a la escuela y está en revisión"],
          ["Emitida", "Ya puedes descargar el PDF y compartirlo"],
          ["Revocada", "La escuela la anuló; quien la verifique verá que no es válida"],
        ],
      },
      { type: "h2", content: "Cómo comprobar que un paz y salvo es auténtico" },
      {
        type: "p",
        content:
          "Un PDF se puede editar. Por eso un paz y salvo útil trae un mecanismo de verificación. Las constancias emitidas por escuelas en SportMaps tienen un folio y una página pública de verificación: quien la recibe (el club nuevo, la liga) entra al enlace o busca el folio y ve si la constancia existe, a nombre de quién está, qué escuela la emitió y si sigue vigente o fue revocada.",
      },
      {
        type: "p",
        content:
          "Si eres tú quien recibe un paz y salvo (por ejemplo, eres el club de destino), verifica siempre el folio en vez de confiar solo en el papel. Y si el documento no tiene ningún código, llama a la escuela que lo emitió.",
      },
      { type: "h2", content: "Problemas comunes y cómo resolverlos" },
      {
        type: "table",
        headers: ["Problema", "Qué hacer"],
        rows: [
          ["La escuela dice que debo un mes que ya pagué", "Envía el comprobante con fecha y valor. Si pagaste por transferencia y no lo subiste al cobro, súbelo ahora."],
          ["Hay un recargo por mora que no conocía", "Pide que te muestren la regla de recargo y desde cuándo aplica. El recargo lo define la escuela."],
          ["La escuela no responde la solicitud", "Escribe por el canal oficial con la fecha de la solicitud. Deja constancia por escrito."],
          ["El club nuevo necesita el documento ya", "Pregunta si acepta la verificación por folio mientras llega la versión firmada que pide."],
          ["Mi hijo se retiró hace meses y siguieron llegando cobros", "Pide que anulen los cobros posteriores al retiro antes de emitir el paz y salvo, y que conste la fecha de retiro."],
        ],
      },
      { type: "h2", content: "Un consejo para el retiro" },
      {
        type: "p",
        content:
          "Cuando tu hijo deje la escuela, avisa por escrito la fecha de retiro y pide en el mismo momento el paz y salvo. Así queda claro desde cuándo no deben generarse más mensualidades. Retirarse de palabra en la cancha y descubrir dos meses después que siguieron corriendo cobros es una de las discusiones más frecuentes entre familias y escuelas.",
      },
      {
        type: "cta",
        title: "¿Tu escuela todavía hace los paz y salvo en Word?",
        description:
          "SportMaps le permite emitir constancias con plantilla, firma, folio y verificación pública, y que las familias las pidan desde el celular.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Qué es un paz y salvo de una escuela deportiva?",
        answer:
          "Es una constancia de la escuela que certifica que el deportista no tiene deudas pendientes con ella a una fecha. Se usa sobre todo para traslados de club, retiros e inscripciones a torneos.",
      },
      {
        question: "¿Cómo pido el paz y salvo de la escuela de fútbol de mi hijo?",
        answer:
          "Confirma primero que no tengas cobros pendientes y solicítalo por escrito o desde la app de la escuela. En escuelas que usan SportMaps se pide en la sección de constancias y, cuando la escuela lo aprueba, se descarga en PDF con folio.",
      },
      {
        question: "¿Me pueden negar el paz y salvo?",
        answer:
          "Sí, si la escuela registra cobros pendientes a tu nombre. Pide el detalle de lo que aparece pendiente y envía los comprobantes de lo que ya pagaste para que lo corrijan.",
      },
      {
        question: "¿Cómo sé si un paz y salvo es verdadero?",
        answer:
          "Verifica el folio o código del documento en la página de verificación de la escuela, si la tiene, o llama directamente a la escuela que lo emitió. Un documento sin ningún código de verificación es fácil de alterar.",
      },
      {
        question: "¿El paz y salvo tiene costo?",
        answer:
          "Depende de la escuela: algunas lo entregan gratis y otras cobran un valor por constancia. En SportMaps la escuela configura si la constancia tiene costo, y la familia ve el valor antes de solicitarla.",
      },
    ],
    about: ["paz y salvo", "constancias de escuelas deportivas", "traslado de club", "verificación de documentos"],
    mentions: ["SportMaps"],
    related: [
      "como-pagar-mensualidad-escuela-deportiva-desde-el-celular",
      "inscripcion-vs-mensualidad-escuela-deportiva",
      "carnet-digital-deportista",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Informe mensual del deportista para padres
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "informe-mensual-del-deportista-para-padres",
    title: "Informe mensual del deportista: qué debería recibir como papá o mamá",
    excerpt:
      "Asistencia, nota del entrenador, lo que mejoró y en qué va a trabajar: cómo leer el informe mensual de tu hijo y qué preguntar si no te llega.",
    category: "Para familias",
    readTime: "7 min",
    date: "2 Oct 2026",
    isoDate: "2026-10-02",
    author: "Equipo SportMaps",
    authorRole: "Producto",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Un informe mensual del deportista es el resumen que la escuela le envía a la familia cada mes sobre cómo le fue a su hijo: cuántas sesiones asistió, qué escribió el entrenador sobre el equipo y sobre él, en qué mejoró, en qué se va a trabajar y, en deportes como el fútbol, sus datos de partidos. Su objetivo no es calificar al niño sino que la familia sepa qué está pasando en la cancha sin tener que preguntarle al entrenador a la salida del entreno.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Un buen informe tiene asistencia real, una nota escrita por el entrenador y dos o tres puntos concretos: lo que mejoró y lo que se va a trabajar. Si solo trae una calificación de 1 a 5, pide más contexto. Y no lo compares con el de otros niños: está pensado para ver la evolución de tu hijo contra sí mismo.",
      },
      { type: "h2", content: "Qué trae el informe mensual" },
      {
        type: "p",
        content:
          "En escuelas que usan SportMaps, el informe mensual tiene estas partes. No todas aparecen siempre: depende del deporte y de lo que el entrenador haya registrado ese mes.",
      },
      {
        type: "table",
        headers: ["Sección", "Qué te dice", "Cómo leerla"],
        rows: [
          ["Asistencia", "Sesiones a las que asistió de las programadas en el mes", "Es el dato más objetivo. Si no coincide con lo que sabes, avisa."],
          ["Nota del equipo", "Lo que el entrenador escribió sobre el grupo: qué trabajaron, cómo van", "Da el contexto: en qué etapa está la categoría."],
          ["Nota individual", "Comentario del entrenador sobre tu hijo", "Es opcional; no todos los meses habrá una."],
          ["Lo que más mejoró", "Las métricas con mejor evolución", "Úsalo para reconocer el esfuerzo en casa."],
          ["En qué se va a trabajar", "Los puntos a reforzar", "Úsalo para apoyar, no para presionar."],
          ["Datos de partidos (fútbol)", "Partidos, minutos, goles, asistencias, tarjetas", "Mira la tendencia de varios meses, no un mes aislado."],
          ["Carga de entrenamiento", "Si el entrenador la registra: volumen de trabajo del mes", "Útil si el deportista entrena en varios lugares."],
          ["Todas las métricas", "El detalle completo por categoría, detrás de un clic", "Para quien quiera ver más."],
        ],
      },
      { type: "h2", content: "Cómo te llega" },
      {
        type: "ol",
        items: [
          "El entrenador escribe la nota del equipo y, si quiere, notas individuales.",
          "La escuela revisa y publica los informes (algunas escuelas dejan que el entrenador los publique directamente).",
          "Te llega una notificación en la app y un correo con un enlace al informe. El correo no trae el informe adjunto: trae el enlace.",
          "Abres el enlace, ves el informe en el celular y, si quieres guardarlo, lo descargas en PDF.",
        ],
      },
      {
        type: "p",
        content:
          "¿Por qué un enlace y no un PDF adjunto? Porque así el informe queda guardado en la app con el historial de meses anteriores, se puede ver bien en el celular y los correos con enlace llegan con menos frecuencia a la carpeta de spam que los correos con adjuntos pesados.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Para recibir el informe tu cuenta de acudiente tiene que estar vinculada al deportista y la escuela debe tener tu correo correcto. Si la escuela tiene el informe activo y a ti no te llega, eso es lo primero que hay que revisar.",
      },
      { type: "h2", content: "Lo que el informe NO trae, a propósito" },
      {
        type: "p",
        content:
          "El informe para la familia no compara a tu hijo con sus compañeros ni le asigna un puesto en el grupo. En deporte formativo, un ranking frente a otros niños genera presión y dice poco sobre el progreso real, que depende de la edad, la maduración y el tiempo que lleva entrenando. El informe muestra la evolución de tu hijo contra sí mismo.",
      },
      { type: "h2", content: "Cómo hablar del informe con tu hijo" },
      {
        type: "ul",
        items: [
          "Empieza por lo que mejoró. Es lo que más motiva y lo que el entrenador destacó.",
          "Pregúntale qué opina de lo que «se va a trabajar» antes de dar tu opinión.",
          "No conviertas los goles o los minutos en el tema central, sobre todo en categorías infantiles.",
          "Si la asistencia bajó, busca la causa (horarios, cansancio, motivación) antes de regañar.",
          "Si algo te preocupa, pide una conversación con el entrenador en vez de discutirlo en el grupo de WhatsApp.",
        ],
      },
      { type: "h2", content: "Qué preguntarle a la escuela" },
      {
        type: "table",
        headers: ["Si ves esto", "Pregunta"],
        rows: [
          ["Asistencia que no coincide", "¿Cómo se marca la asistencia y cómo se corrige un error?"],
          ["Ninguna nota del entrenador", "¿El entrenador escribe nota del equipo cada mes? ¿Cuándo se publican los informes?"],
          ["Métricas que no entiendes", "¿Qué mide esta prueba y qué valor es esperable para su edad?"],
          ["El informe llega tarde o no llega", "¿Mi correo está bien registrado? ¿Estoy vinculado como acudiente?"],
          ["Quieres más detalle", "¿Podemos tener una conversación de seguimiento al cierre del trimestre?"],
        ],
      },
      { type: "h2", content: "Si la escuela todavía no envía informes" },
      {
        type: "p",
        content:
          "Muchas escuelas no lo hacen porque escribir un informe por niño cada mes es inviable para un entrenador con cuatro o cinco grupos. La solución no es exigirle 60 notas: es que escriba una nota por equipo, que el sistema arme el resto con la asistencia y las evaluaciones que ya registró, y que la nota individual sea opcional. Así funciona el informe mensual en SportMaps, y por eso es sostenible en el tiempo.",
      },
      {
        type: "p",
        content:
          "Si tu escuela todavía no lo tiene, lo mínimo que puedes pedir es la asistencia del mes y una reunión de seguimiento por periodo. Lo demás llega cuando la escuela registra evaluaciones de forma ordenada.",
      },
      { type: "h2", content: "Cuándo un informe mensual no aporta" },
      {
        type: "p",
        content:
          "Si el entrenador no registra evaluaciones y solo copia el mismo texto todos los meses, el informe se vuelve ruido con logo. En ese caso es más útil una conversación trimestral bien hecha. El informe sirve cuando detrás hay registro real: asistencia tomada en cada sesión y pruebas físicas o técnicas que se repiten cada cierto tiempo.",
      },
      {
        type: "cta",
        title: "¿Tu escuela quiere enviar informes sin que el entrenador escriba 60 notas?",
        description:
          "En SportMaps el entrenador escribe una nota por equipo y el informe se arma con la asistencia y las evaluaciones que ya registró.",
        href: "/entrenadores",
        label: "Ver herramientas para entrenadores",
      },
    ],
    faqs: [
      {
        question: "¿Qué debe incluir el informe mensual de una escuela deportiva?",
        answer:
          "Como mínimo, la asistencia del mes y una nota del entrenador. Un informe completo agrega lo que el deportista mejoró, en qué se va a trabajar y, según el deporte, datos de partidos o resultados de evaluaciones físicas.",
      },
      {
        question: "¿Por qué no me llega el informe mensual de mi hijo?",
        answer:
          "Las causas más comunes son que tu cuenta no esté vinculada como acudiente del deportista o que la escuela tenga mal tu correo. También puede ser que ese mes el informe aún no se haya publicado; pregunta a la escuela su fecha de envío.",
      },
      {
        question: "¿El informe compara a mi hijo con los demás niños del equipo?",
        answer:
          "En SportMaps no: el informe para la familia muestra la evolución del deportista contra sí mismo, sin rankings frente a compañeros. Las comparaciones de grupo quedan del lado del entrenador y la escuela.",
      },
      {
        question: "¿Puedo descargar el informe mensual en PDF?",
        answer:
          "Sí. El informe llega como enlace por correo y notificación en la app, y desde ahí se puede descargar en PDF. Los informes anteriores quedan guardados en el historial del deportista.",
      },
    ],
    about: ["informe deportivo para padres", "seguimiento del deportista", "deporte formativo", "comunicación escuela-familia"],
    mentions: ["SportMaps", "WhatsApp"],
    related: [
      "metricas-clave-academias",
      "carnet-digital-deportista",
      "grupos-de-whatsapp-vs-app-escuela-deportiva",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. Cómo elegir escuela de fútbol
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "como-elegir-escuela-de-futbol-para-tu-hijo",
    title: "Cómo elegir una escuela de fútbol para tu hijo: 10 criterios que sí importan",
    excerpt:
      "Formación de los entrenadores, reconocimiento deportivo, seguridad y EPS, niños por entrenador, categorías por edad y cobros claros. Una lista para revisar antes de inscribir.",
    category: "Para familias",
    readTime: "8 min",
    date: "7 Oct 2026",
    isoDate: "2026-10-07",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para elegir una escuela de fútbol para tu hijo, fíjate primero en quién entrena (formación y licencias de los entrenadores), después en si la escuela está constituida formalmente (como club con reconocimiento deportivo vigente o como empresa), en cómo cuida a los niños (EPS, protocolo ante lesiones, cuántos niños hay por entrenador) y en si los cobros son claros y por escrito. El escudo, la cancha sintética y la promesa de «llevarlo a profesional» importan mucho menos. Una visita a un entrenamiento y diez preguntas bien hechas te dicen casi todo.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Los cinco criterios que más pesan: entrenadores formados, grupos por edad con pocos niños por entrenador, protocolo ante lesiones, constitución formal de la escuela y cobros claros. Desconfía de quien promete pruebas en clubes profesionales a cambio de un pago.",
      },
      { type: "h2", content: "Los 10 criterios, en orden de importancia" },
      {
        type: "table",
        headers: ["#", "Criterio", "Qué preguntar o revisar", "Señal de alerta"],
        rows: [
          ["1", "Formación de los entrenadores", "¿Qué estudios o licencia tiene el entrenador de la categoría de mi hijo?", "«Fue jugador» como única credencial"],
          ["2", "Niños por entrenador", "¿Cuántos niños hay en el grupo y cuántos entrenadores lo atienden?", "Un solo entrenador para 30 niños pequeños"],
          ["3", "Categorías por edad", "¿Cómo se arman las categorías? ¿Por año de nacimiento?", "Niños de 6 y 12 años en el mismo grupo"],
          ["4", "Seguridad y lesiones", "¿Qué hacen si un niño se lesiona? ¿Hay botiquín? ¿Piden EPS?", "No piden ningún dato médico ni de EPS"],
          ["5", "Constitución formal", "¿Es club con reconocimiento deportivo o empresa? ¿Con qué nombre facturan?", "No hay a nombre de quién expedir un recibo"],
          ["6", "Cobros claros", "¿Cuánto es la inscripción, la mensualidad, el uniforme y los torneos? ¿Por escrito?", "Cobros que aparecen sin aviso"],
          ["7", "Comunicación con familias", "¿Cómo avisan cancelaciones, horarios y torneos?", "Todo depende de un grupo de WhatsApp caótico"],
          ["8", "Seguimiento del niño", "¿Informan asistencia y avances? ¿Cada cuánto?", "Nunca hay retroalimentación"],
          ["9", "Instalaciones y horarios", "¿La cancha es fija? ¿Hay plan B si llueve?", "Cambios de sede o de hora cada semana"],
          ["10", "Ambiente y valores", "¿Cómo tratan el error? ¿Juegan todos?", "Gritos, humillaciones o solo juegan los «buenos»"],
        ],
      },
      { type: "h2", content: "1. La formación de los entrenadores" },
      {
        type: "p",
        content:
          "Es el factor que más impacta la experiencia de tu hijo. Pregunta qué formación tiene el entrenador de su categoría, no el director. En Colombia es razonable esperar alguna de estas: título profesional en ciencias del deporte, licenciatura en educación física o deporte, o una licencia de entrenador de fútbol (CONMEBOL otorga licencias por niveles, de la C a la Pro, a través de las federaciones). Haber jugado profesionalmente es un plus, no un reemplazo de la formación pedagógica, sobre todo con niños pequeños.",
      },
      {
        type: "p",
        content:
          "Pregunta también si el entrenador tiene formación en primeros auxilios. No es un requisito universal, pero es muy buena señal.",
      },
      { type: "h2", content: "2. Cuántos niños hay por entrenador" },
      {
        type: "p",
        content:
          "No existe una cifra oficial única para todas las escuelas, pero la lógica es simple: mientras más pequeños los niños, menos niños debería atender cada entrenador, porque necesitan más corrección individual y más supervisión. Pregunta el número exacto de niños en el grupo de tu hijo y cuántos adultos lo atienden. Luego compruébalo en la visita: cuenta cuántos niños están esperando turno sin hacer nada. Si la mitad del entrenamiento es fila, el grupo está sobredimensionado.",
      },
      { type: "h2", content: "3. Categorías por edad bien armadas" },
      {
        type: "p",
        content:
          "En fútbol formativo lo habitual es agrupar por año de nacimiento (sub-8, sub-10, sub-12…), que es como se organizan la mayoría de los torneos. Lo importante es que tu hijo entrene con niños de su edad y nivel de maduración parecido. Una escuela que mezcla edades muy distintas en el mismo grupo suele hacerlo por falta de entrenadores, no por un método.",
      },
      { type: "h2", content: "4. Seguridad: EPS, lesiones y datos de emergencia" },
      {
        type: "ul",
        items: [
          "Una escuela seria pide el certificado de afiliación a EPS (o a un régimen de salud) al inscribir.",
          "Debe tener los datos de contacto de emergencia de cada niño accesibles durante el entrenamiento, no en una carpeta en la oficina.",
          "Pregunta qué pasa si tu hijo se lesiona: quién lo atiende, a quién llaman y a dónde lo llevan.",
          "Pregunta si tienen póliza de accidentes para torneos o salidas, o si debes contratarla tú.",
          "Revisa que la cancha esté en buen estado, con arcos asegurados y sin objetos peligrosos alrededor.",
        ],
      },
      { type: "h2", content: "5. Si es club, que tenga reconocimiento deportivo vigente" },
      {
        type: "p",
        content:
          "En Colombia, los clubes deportivos obtienen el reconocimiento deportivo del ente deportivo de su municipio (en Bogotá, el IDRD), según el Decreto Ley 1228 de 1995. Ese reconocimiento se otorga por cinco años y debe renovarse. Es el requisito para que el club se afilie a una liga y participe en torneos oficiales.",
      },
      {
        type: "p",
        content:
          "No todas las escuelas son clubes: muchas funcionan como empresas o academias que prestan un servicio de formación, y eso es legítimo. Lo que importa es que la escuela exista formalmente, que sepas a nombre de quién pagas y que, si promete torneos de liga, tenga cómo inscribir a tu hijo en ellos.",
      },
      { type: "h2", content: "6. Cobros claros y por escrito" },
      {
        type: "p",
        content:
          "Antes de inscribir, pide por escrito todos los cobros del año: inscripción (se paga una vez), mensualidad, uniforme, torneos, viajes y cualquier otro. Pregunta también qué pasa si pagas tarde (¿hay recargo? ¿desde qué día?), qué pasa en vacaciones y cómo se paga (efectivo, transferencia, en línea). Una escuela que te da un enlace de pago y un comprobante por cada pago te ahorra discusiones; una que cobra «por el grupo» y en efectivo, sin recibo, te deja sin forma de demostrar lo que pagaste.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Desconfía de cobros por «pruebas» o «visorías» en clubes profesionales. Los procesos serios de captación de talento no se venden como un servicio adicional de la escuela.",
      },
      { type: "h2", content: "7 a 10. Comunicación, seguimiento, sede y ambiente" },
      {
        type: "p",
        content:
          "Pregunta cómo avisan una cancelación por lluvia, cómo te enteras de los torneos y si recibes algún informe de asistencia o avances. Las escuelas que usan una app con calendario, avisos e informe mensual reducen mucho el «nadie me avisó». Y, sobre todo, mira un entrenamiento completo: cómo el entrenador corrige a un niño que se equivoca, si todos juegan, si hay gritos. Ese ambiente es lo que tu hijo va a vivir tres veces por semana.",
      },
      { type: "h2", content: "Lista de preguntas para la primera visita" },
      {
        type: "ol",
        items: [
          "¿Quién sería el entrenador de mi hijo y qué formación tiene?",
          "¿Cuántos niños hay en su grupo y cuántos entrenadores?",
          "¿Cómo arman las categorías?",
          "¿Qué hacen si un niño se lesiona en el entrenamiento?",
          "¿Piden EPS y datos de emergencia al inscribir?",
          "¿Son club con reconocimiento deportivo o empresa? ¿A nombre de quién pago?",
          "¿Cuánto cuesta todo en el año, por escrito?",
          "¿Cómo se paga y cómo recibo el comprobante?",
          "¿Cómo avisan cambios de horario y torneos?",
          "¿Puedo ver un entrenamiento completo antes de inscribir? ¿Hay clase de prueba?",
        ],
      },
      { type: "h2", content: "Cuándo una escuela «grande» no es la mejor opción" },
      {
        type: "p",
        content:
          "Una escuela con mucha publicidad y cientos de niños no es necesariamente mejor. Si tu hijo tiene 6 u 8 años, una escuela más pequeña, cerca de la casa, con un entrenador formado y grupos chicos puede darle más que un club famoso donde es uno más en una fila. La cercanía también cuenta: un entrenamiento a una hora de distancia tres veces por semana se abandona pronto.",
      },
      {
        type: "cta",
        title: "¿Diriges una escuela y quieres que las familias vean todo esto claro?",
        description:
          "Cobros con enlace y comprobante, calendario y avisos, carnets digitales e informe mensual para las familias, en una sola plataforma hecha en Colombia.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Qué debo revisar antes de inscribir a mi hijo en una escuela de fútbol?",
        answer:
          "La formación del entrenador de su categoría, cuántos niños hay por entrenador, cómo se arman las categorías, el protocolo ante lesiones y que todos los cobros estén por escrito. Ver un entrenamiento completo antes de inscribir es la mejor prueba.",
      },
      {
        question: "¿Qué licencia debe tener un entrenador de fútbol infantil en Colombia?",
        answer:
          "Es razonable esperar formación profesional en ciencias del deporte o educación física, o una licencia de entrenador de fútbol como las que otorga CONMEBOL por niveles a través de las federaciones. Haber sido jugador no reemplaza la formación pedagógica.",
      },
      {
        question: "¿Qué es el reconocimiento deportivo de un club?",
        answer:
          "Es el acto con el que el ente deportivo municipal (en Bogotá, el IDRD) reconoce a un club deportivo, según el Decreto Ley 1228 de 1995. Se otorga por cinco años y es necesario para afiliarse a una liga y jugar torneos oficiales.",
      },
      {
        question: "¿Cuántos niños debería tener un entrenador por grupo?",
        answer:
          "No hay una cifra única obligatoria, pero mientras más pequeños los niños, menos niños por entrenador. Pregunta el número exacto y obsérvalo en un entrenamiento: si buena parte del tiempo los niños están haciendo fila, el grupo es demasiado grande.",
      },
      {
        question: "¿Es normal que una escuela de fútbol cobre por llevar a mi hijo a pruebas en clubes profesionales?",
        answer:
          "Es una señal de alerta. Los procesos serios de captación de talento no se venden como un servicio adicional; desconfía de quien promete pruebas o contratos a cambio de un pago.",
      },
    ],
    about: ["escuelas de fútbol", "fútbol formativo", "elegir escuela deportiva", "entrenadores de fútbol"],
    mentions: ["CONMEBOL", "IDRD", "SportMaps", "WhatsApp"],
    related: [
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "software-escuelas-de-futbol-colombia",
      "datos-de-menores-ley-1581-escuelas-deportivas",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Datos de menores y Ley 1581
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "datos-de-menores-ley-1581-escuelas-deportivas",
    title: "Datos de menores en escuelas deportivas: qué dice la Ley 1581 y qué hacer",
    excerpt:
      "Autorización del acudiente, datos sensibles como salud o huella, fotos, grupos de WhatsApp y derechos de las familias. Guía orientativa para escuelas y padres en Colombia.",
    category: "Guías",
    readTime: "9 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela deportiva en Colombia puede guardar y usar datos de los niños que entrena, pero solo si ese uso responde al interés superior del menor, respeta sus derechos fundamentales y cuenta con la autorización de su representante legal (papá, mamá o acudiente legal), después de escuchar la opinión del niño según su madurez. Así lo establecen el artículo 7 de la Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013. En la práctica, la escuela necesita una política de tratamiento de datos, una autorización firmada al inscribir, cuidado especial con datos sensibles como la salud o la huella, y un canal para que las familias consulten, corrijan o pidan borrar sus datos.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Esta guía es orientativa y no es asesoría legal. Resume las normas vigentes a octubre de 2026 con base en sus textos oficiales. Para tu caso concreto consulta con un abogado o con la Superintendencia de Industria y Comercio (SIC), que es la autoridad de protección de datos en Colombia.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Pide autorización escrita al acudiente al inscribir, explica para qué usas cada dato, trata la salud, la huella y la foto como datos sensibles, no publiques listas de niños en grupos abiertos y responde las consultas de las familias en los plazos de ley: 10 días hábiles para consultas y 15 para reclamos.",
      },
      { type: "h2", content: "Qué dice exactamente la ley sobre los niños" },
      {
        type: "p",
        content:
          "El artículo 7 de la Ley 1581 de 2012 dice que en el tratamiento de datos «se asegurará el respeto a los derechos prevalentes de los niños, niñas y adolescentes» y que «queda proscrito el Tratamiento de datos personales de niños, niñas y adolescentes, salvo aquellos datos que sean de naturaleza pública». Leído solo, parece una prohibición total. No lo es: la Corte Constitucional, al revisar la ley (Sentencia C-748 de 2011), aclaró que el tratamiento sí es posible cuando atiende el interés superior del menor y respeta sus derechos fundamentales.",
      },
      {
        type: "p",
        content:
          "El Decreto 1377 de 2013 (hoy compilado en el Decreto 1074 de 2015) lo dejó por escrito en su artículo 12: el tratamiento de datos de niños, niñas y adolescentes procede cuando (1) responde y respeta su interés superior y (2) asegura el respeto de sus derechos fundamentales. Cumplido eso, «el representante legal del niño, niña o adolescente otorgará la autorización previo ejercicio del menor de su derecho a ser escuchado», y esa opinión se valora según su madurez, autonomía y capacidad para entender el asunto.",
      },
      {
        type: "p",
        content:
          "Para una escuela deportiva, entrenar a un niño, saber su edad para ubicarlo en una categoría, tener el contacto de emergencia y su EPS, o registrar su asistencia son usos que, en principio, sirven a su interés: permiten formarlo y cuidarlo. Lo que hay que justificar con más cuidado son los usos que no le sirven directamente al niño, como publicar su foto en redes para promocionar la escuela.",
      },
      { type: "h2", content: "Qué datos maneja una escuela y cómo tratarlos" },
      {
        type: "table",
        headers: ["Dato", "Tipo según la ley", "Recomendación práctica"],
        rows: [
          ["Nombre, fecha de nacimiento, documento", "Dato personal del menor", "Necesario para inscribir y armar categorías. Con autorización del acudiente."],
          ["Datos del acudiente (teléfono, correo)", "Dato personal del adulto", "Autoriza el propio acudiente. Úsalos para cobros, avisos y emergencias, como lo informaste."],
          ["EPS, tipo de sangre, alergias, condiciones médicas", "Dato sensible (salud, art. 5)", "Pide solo lo que necesitas para atender una emergencia. Acceso restringido al personal que lo requiere."],
          ["Huella o rostro para torniquetes", "Dato sensible (biométrico, art. 5)", "Autorización explícita y una alternativa para quien no quiera dar su huella."],
          ["Fotos y videos", "Dato personal; puede revelar información sensible", "Autorización separada para publicar en redes. Usar en lo interno no es lo mismo que publicar."],
          ["Evaluaciones físicas y rendimiento", "Dato personal del menor", "Compártelos con la familia; evita publicar rankings de niños."],
          ["Pagos y estado de cuenta", "Dato personal del acudiente", "Nunca expongas morosos con nombre en grupos o carteleras."],
        ],
      },
      {
        type: "p",
        content:
          "El artículo 5 de la Ley 1581 define como sensibles, entre otros, «los datos relativos a la salud» y «los datos biométricos». Según el artículo 6, su tratamiento está prohibido salvo excepciones, la principal de ellas que el titular haya dado autorización explícita. Y el artículo 12 obliga a informar que responder preguntas sobre datos sensibles o sobre datos de niños es facultativo: el acudiente puede no contestarlas.",
      },
      { type: "h2", content: "Lo que la escuela debe tener: lista práctica" },
      {
        type: "ol",
        items: [
          "Una política de tratamiento de datos por escrito, en lenguaje sencillo, con nombre, dirección, correo y teléfono de la escuela, las finalidades, los derechos de los titulares y el área que atiende consultas (artículo 13 del Decreto 1377).",
          "Un formato de autorización al inscribir, firmado por el representante legal, que diga para qué se usa cada dato y que es facultativo responder sobre datos sensibles.",
          "Autorizaciones separadas para lo que no es indispensable: fotos en redes sociales, uso de la imagen en publicidad, huella para el torniquete.",
          "Prueba de esas autorizaciones guardada y disponible si la familia la pide (parágrafo del artículo 12 de la Ley 1581).",
          "Control de quién ve qué: el entrenador necesita el contacto de emergencia de su grupo; no necesita los pagos de toda la escuela.",
          "Un canal para consultas y reclamos, y el compromiso de responder en 10 días hábiles las consultas (art. 14) y en 15 días hábiles los reclamos (art. 15).",
          "Un procedimiento para cuando un deportista se retira: qué datos se conservan, por cuánto tiempo y por qué.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "El Decreto 1377 permite que la autorización se obtenga por escrito, de forma oral o mediante conductas inequívocas, pero el silencio nunca cuenta como autorización. Para menores y datos sensibles, lo prudente es tenerla por escrito o en un formulario digital que quede registrado.",
      },
      { type: "h2", content: "Los errores más comunes en escuelas deportivas" },
      {
        type: "ul",
        items: [
          "Grupos de WhatsApp con decenas de familias donde se publican listas con nombres de niños, documentos o quién debe la mensualidad.",
          "Fotos de los niños en redes sociales sin autorización específica para eso.",
          "Carpetas con fichas médicas en una oficina sin llave o en el carro del entrenador.",
          "Pedir datos que no se usan (estrato, ingresos de los papás, religión) «por si acaso».",
          "Hojas de cálculo con todos los datos de la escuela compartidas por enlace abierto.",
          "No tener a quién dirigir una solicitud de borrado cuando una familia se retira.",
        ],
      },
      { type: "h2", content: "Los derechos de las familias" },
      {
        type: "p",
        content:
          "El artículo 8 de la Ley 1581 reconoce al titular (y, en el caso de un menor, a su representante legal) el derecho a conocer, actualizar y rectificar sus datos, a pedir prueba de la autorización, a saber qué uso se les ha dado, a presentar quejas ante la SIC, a revocar la autorización o pedir la supresión cuando no se respeten sus derechos, y a acceder gratis a sus datos. La supresión no procede si existe un deber legal o contractual de conservar el dato (por ejemplo, registros contables de pagos).",
      },
      {
        type: "table",
        headers: ["Si eres papá o mamá y quieres…", "Qué hacer"],
        rows: [
          ["Saber qué datos tiene la escuela de tu hijo", "Pídelo por escrito por el canal de la política de datos. Deben responder en máximo 10 días hábiles."],
          ["Corregir un dato", "Pide la rectificación. Si la escuela usa una app, muchas veces puedes actualizar tú mismo la ficha."],
          ["Que dejen de publicar fotos de tu hijo", "Revoca la autorización de imagen por escrito. No afecta la inscripción."],
          ["Que borren los datos al retirarse", "Solicita la supresión. Pueden conservar lo que la ley obliga, como registros de pagos."],
          ["Presentar una queja", "Primero reclama a la escuela; si no responde, puedes acudir a la SIC."],
        ],
      },
      { type: "h2", content: "Sanciones y Registro Nacional de Bases de Datos" },
      {
        type: "p",
        content:
          "El artículo 23 de la Ley 1581 permite a la SIC imponer multas de hasta 2.000 salarios mínimos mensuales legales vigentes, suspender actividades de tratamiento hasta por seis meses y, en casos graves, ordenar el cierre de la operación que involucre datos sensibles. Las sanciones se gradúan según el daño, el beneficio obtenido, la reincidencia y la colaboración del investigado.",
      },
      {
        type: "p",
        content:
          "Sobre el Registro Nacional de Bases de Datos (RNBD): desde el Decreto 090 de 2018, la obligación de inscribir bases ante la SIC aplica a sociedades y entidades sin ánimo de lucro con activos totales superiores a 100.000 UVT y a las personas jurídicas de naturaleza pública. La mayoría de escuelas deportivas pequeñas no está obligada a registrar, pero sí a cumplir todo lo demás: autorización, política, seguridad y atención de derechos.",
      },
      { type: "h2", content: "Y el software: ¿quién responde?" },
      {
        type: "p",
        content:
          "En la terminología de la ley, la escuela suele ser la «responsable» del tratamiento (decide qué datos recoge y para qué) y el proveedor de software actúa normalmente como «encargado» (los guarda y procesa por cuenta de la escuela). Usar una plataforma no traslada la responsabilidad: la escuela sigue debiendo pedir la autorización y tener su política. Lo que sí hace una buena herramienta es facilitar el cumplimiento.",
      },
      {
        type: "p",
        content:
          "En SportMaps, por ejemplo, cada acudiente tiene su propia cuenta vinculada a su hijo, el personal trabaja con roles y permisos (el entrenador no ve lo mismo que la administración), la escuela elige qué campos muestra el carnet digital y los informes para familias no comparan a un niño con sus compañeros. Aun así, la autorización y la política de datos de la escuela son tarea de la escuela. Revisa con tu proveedor, sea cual sea, qué dice su contrato sobre el tratamiento de datos.",
      },
      {
        type: "cta",
        title: "Ordena los datos de tu escuela sin carpetas ni grupos abiertos",
        description:
          "Fichas de deportistas con acudientes vinculados, roles y permisos para el staff y comunicación por la app. Puedes empezar gratis con hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    faqs: [
      {
        question: "¿Una escuela deportiva puede guardar datos de menores de edad en Colombia?",
        answer:
          "Sí, siempre que el uso responda al interés superior del niño, respete sus derechos fundamentales y cuente con autorización de su representante legal, tras escuchar la opinión del menor según su madurez. Lo establecen el artículo 7 de la Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013.",
      },
      {
        question: "¿La escuela de mi hijo puede publicar sus fotos en redes sociales?",
        answer:
          "Solo con tu autorización para ese uso. Lo recomendable es que la escuela pida una autorización de imagen separada de la inscripción, y puedes revocarla por escrito en cualquier momento sin que eso afecte el entrenamiento de tu hijo.",
      },
      {
        question: "¿Los datos médicos y la huella del deportista son datos sensibles?",
        answer:
          "Sí. El artículo 5 de la Ley 1581 incluye entre los datos sensibles los relativos a la salud y los biométricos. Su tratamiento requiere autorización explícita y la escuela debe informar que responder sobre ellos es facultativo.",
      },
      {
        question: "¿Cuánto tiempo tiene una escuela para responder una solicitud sobre datos personales?",
        answer:
          "Según la Ley 1581, las consultas se responden en máximo 10 días hábiles y los reclamos en máximo 15 días hábiles, con posibles prórrogas cortas si se informa el motivo. Si la escuela no responde, puedes acudir a la Superintendencia de Industria y Comercio.",
      },
      {
        question: "¿Mi escuela deportiva debe registrar sus bases de datos ante la SIC?",
        answer:
          "Desde el Decreto 090 de 2018, el registro en el RNBD es obligatorio para sociedades y entidades sin ánimo de lucro con activos totales superiores a 100.000 UVT y para entidades públicas. Las escuelas más pequeñas no tienen que registrar, pero sí deben cumplir el resto de la ley.",
      },
    ],
    about: ["Ley 1581 de 2012", "protección de datos de menores", "habeas data", "escuelas deportivas en Colombia"],
    mentions: ["Superintendencia de Industria y Comercio", "Corte Constitucional de Colombia", "SportMaps", "WhatsApp"],
    related: [
      "carnet-digital-deportista",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
      "grupos-de-whatsapp-vs-app-escuela-deportiva",
    ],
  },
];
