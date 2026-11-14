import type { BlogPost } from "../blog-posts";

export const pagos2Posts: BlogPost[] = [
  {
    slug: "bre-b-para-escuelas-deportivas-como-recibir-pagos-con-llave",
    title: "Bre-B para escuelas deportivas: cómo recibir pagos con llave y conciliarlos",
    excerpt:
      "Qué es Bre-B, qué llave le conviene a una escuela, cuál es el monto máximo por transferencia en 2026, cuánto cuesta y cómo conciliar las mensualidades que llegan en segundos pero sin referencia.",
    category: "Cobros y pagos",
    readTime: "8 min",
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
          "Bre-B es el sistema de pagos inmediatos interoperado del Banco de la República: permite que una familia le transfiera a tu escuela desde cualquier banco o billetera, a cualquier hora, y que la plata llegue en segundos. Para recibir solo necesitas registrar una llave (tu celular, tu documento, un correo, un código alfanumérico o un código de comercio) en la entidad donde tienes la cuenta. El registro de la llave no cuesta, y el tope por transferencia que publica el Banco de la República para 2026 es de $12.110.000 (1.000 UVB). Lo que Bre-B no resuelve es saber de quién es cada pago: eso se sigue haciendo con el comprobante y con el extracto.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Abre una cuenta a nombre de la escuela, registra una sola llave fácil de dictar, publícala siempre igual y pide el comprobante por WhatsApp. Una vez por semana cruza el extracto contra los cobros del mes. Bre-B mueve la plata rápido; el orden lo pones tú. Datos consultados en noviembre de 2026 en la página de Bre-B del Banco de la República.",
      },
      { type: "h2", content: "¿Qué es Bre-B y quién lo opera?" },
      {
        type: "p",
        content:
          "El Banco de la República lo define como el «nuevo sistema de pagos inmediatos interoperado de Colombia». Interoperado quiere decir que no importa en qué entidad esté la cuenta de quien paga ni la de quien recibe: bancos, billeteras y cooperativas conectadas hablan el mismo idioma. No es una aplicación aparte; aparece dentro de la app de tu banco o de tu billetera.",
      },
      {
        type: "p",
        content:
          "Según la misma página del Banco, funciona las 24 horas, los 7 días de la semana y los 365 días del año, incluidos fines de semana y festivos, y el dinero le llega al destinatario en segundos. La prensa económica (La República y Portafolio) registró el arranque de las transferencias el 6 de octubre de 2025. Para una escuela esto cambia algo concreto: el pago del sábado en la tarde ya no queda «en proceso» hasta el lunes.",
      },
      {
        type: "table",
        headers: ["Dato", "Detalle", "Fuente (consulta: noviembre de 2026)"],
        rows: [
          ["Qué es", "Sistema de pagos inmediatos interoperado de Colombia", "Banco de la República, \"Conozca Bre-B\""],
          ["Disponibilidad", "24 horas, 7 días, 365 días; el dinero llega en segundos", "Banco de la República, \"Conozca Bre-B\""],
          ["Llaves para personas", "Número de documento, número de celular, correo electrónico o código alfanumérico asignado por la entidad", "Banco de la República, \"Conozca Bre-B\""],
          ["Llave para comercios", "Código de comercio que asigna la entidad donde el negocio tiene su medio de pago", "Banco de la República, \"Conozca Bre-B\""],
          ["Monto máximo por transferencia", "1.000 UVB del año en curso; para 2026 el Banco publica $12.110.000. Cada entidad puede fijar un tope menor", "Banco de la República, \"Conozca Bre-B\""],
          ["Costo de registrar la llave", "Sin costo", "Banco de la República, \"Conozca Bre-B\""],
          ["Código QR", "Los comercios lo usan desde el inicio de la operación; las personas naturales, desde el primer semestre de 2026", "Banco de la República, \"Conozca Bre-B\""],
        ],
      },
      { type: "h2", content: "¿Cómo se crea la llave Bre-B de una escuela?" },
      {
        type: "p",
        content:
          "La llave se registra en los canales digitales de la entidad donde está la cuenta, sin intermediarios. El Banco de la República aclara dos reglas que conviene tener claras antes de empezar: una llave solo se puede asociar a una cuenta o depósito, pero una misma cuenta puede tener varias llaves. Y otra más: para enviar plata no necesitas llave; para recibirla, sí.",
      },
      {
        type: "ol",
        items: [
          "Define a qué cuenta va a llegar la plata. Lo sano es una cuenta a nombre de la escuela (o del club, o de la SAS), no la cuenta personal del profe.",
          "Entra a la app o al portal de esa entidad y busca la opción de Bre-B o de llaves.",
          "Elige el tipo de llave. Para una persona jurídica suele servir el NIT, un correo de la escuela o el código de comercio que te asigne la entidad; pregúntale a tu banco cuáles ofrece para tu tipo de cuenta.",
          "Confirma el registro con el código que te envíe la entidad.",
          "Haz una transferencia de prueba desde otro banco por un valor pequeño y revisa cómo aparece en tu extracto: qué nombre muestra, si trae descripción y con qué referencia queda.",
          "Si tu entidad te da un QR de comercio, descárgalo: sirve para la recepción de la sede y para los eventos.",
        ],
      },
      { type: "h2", content: "¿Qué llave le conviene a una escuela?" },
      {
        type: "table",
        headers: ["Tipo de llave", "Ventaja", "Cuidado"],
        rows: [
          ["Número de celular", "Es la más fácil de dictar y de recordar", "Queda atada a una línea: si es el celular personal de alguien, la escuela depende de esa persona"],
          ["Documento (NIT o cédula)", "No cambia con el tiempo y se asocia naturalmente a la escuela", "Es un número largo; mejor compartirla escrita o con botón de copiar"],
          ["Correo electrónico", "Puede ser un correo institucional, por ejemplo el de pagos", "Un error de digitación es más probable que con un número"],
          ["Código alfanumérico", "No expone datos personales", "Difícil de dictar: úsala solo copiada y pegada"],
          ["Código de comercio y QR", "Pensado para negocios; el QR evita errores de digitación", "Depende de que tu entidad lo ofrezca para tu tipo de cuenta"],
        ],
      },
      {
        type: "p",
        content:
          "La recomendación: una sola llave publicada, siempre la misma, en el mensaje de cobro y en la cartelera de la sede.",
      },
      { type: "h2", content: "¿Cuánto se puede recibir por Bre-B?" },
      {
        type: "p",
        content:
          "El Banco de la República fija el monto máximo en 1.000 unidades de valor básico (UVB) del año en curso por transferencia, y en su página publica $12.110.000 para 2026. Para una mensualidad, una inscripción o un uniforme, ese límite sobra. Hay dos matices. El primero: cada entidad puede establecer montos, límites diarios o criterios de seguridad más bajos, así que el tope real de una familia depende de su banco. El segundo: el tope de Bre-B es por transferencia, pero el de tu cuenta es otro asunto. Si recibes en un depósito de bajo monto (como un Nequi o un Daviplata sin convertir), el límite mensual de ese producto sigue aplicando aunque el pago llegue por Bre-B.",
      },
      { type: "h2", content: "¿Cuánto cuesta recibir pagos por Bre-B?" },
      {
        type: "p",
        content:
          "Lo que está publicado de forma oficial es esto: registrar la llave no tiene costo. Sobre las transferencias, el documento técnico de Bre-B del Banco de la República (febrero de 2026) señala que las operaciones entre personas naturales se vienen ofreciendo sin costo para el usuario final, y que para los comercios hay tarifas diferenciadas según el tamaño del negocio, definidas por cada proveedor. Es decir, no hay una tarifa única para comercios que podamos citar: depende de tu entidad y de tu tipo de cuenta.",
      },
      {
        type: "p",
        content:
          "Antes de publicar tu llave, pregúntale a tu banco tres cosas: si la cuenta de la escuela paga algo por recibir transferencias Bre-B, si el QR de comercio tiene comisión y si hay un tope de recepción diario o mensual. Y pregúntale a tu contador cómo se registran esos ingresos; que la plata llegue por Bre-B no cambia tus obligaciones de facturación.",
      },
      { type: "h2", content: "¿Cómo usar Bre-B para cobrar mensualidades?" },
      {
        type: "ol",
        items: [
          "Define la fecha de corte y el valor de la mensualidad por escrito, igual para todas las familias del mismo plan.",
          "Envía el cobro con el valor exacto, el nombre del alumno y la llave copiable. Evita mandar la llave en una imagen: nadie puede copiarla.",
          "Pide siempre el comprobante por el mismo canal, idealmente el WhatsApp de la escuela y no el personal del entrenador.",
          "Pídele a la familia que escriba el nombre del alumno junto al comprobante. Muchas veces paga un tío, una abuela o la empresa del papá, y el nombre del titular no coincide con nadie de tu lista.",
          "Registra el pago contra el cobro del mes el mismo día, no al final de la quincena.",
          "Confirma por escrito que el pago quedó aplicado. Esa confirmación es la que evita la discusión de «yo ya pagué» dos meses después.",
        ],
      },
      { type: "h2", content: "¿Cómo conciliar los pagos que llegan por Bre-B?" },
      {
        type: "p",
        content:
          "Aquí está el trabajo de verdad. Una transferencia Bre-B llega con fecha, hora, valor y los datos de quien envía, pero no trae el nombre del alumno ni el mes que se está pagando. Si tienes 150 familias con la misma mensualidad, vas a ver 150 entradas del mismo valor en el extracto. Conciliar es responder, para cada una, a qué cobro corresponde.",
      },
      {
        type: "ul",
        items: [
          "Usa una cuenta exclusiva para la escuela. Si se mezclan los ingresos de la escuela con los gastos personales, la conciliación se vuelve imposible.",
          "Trabaja con dos fuentes: el extracto o los movimientos de la cuenta (la verdad de lo que entró) y los comprobantes que mandaron las familias (la pista de a quién pertenece cada entrada).",
          "Cruza por valor, fecha y hora. El número de referencia o de aprobación del comprobante es el mejor desempate cuando hay varios pagos del mismo valor el mismo día.",
          "Marca cada comprobante como usado. El error más común no es el comprobante falso sino el repetido: la misma captura enviada dos veces, o enviada por el papá y por la mamá.",
          "Deja una lista de «entradas sin dueño» y otra de «comprobantes sin entrada». La primera se resuelve preguntando en el grupo; la segunda, pidiéndole a la familia que revise si la transferencia salió.",
          "Hazlo cada semana. Conciliar treinta pagos toma minutos; conciliar trescientos a fin de mes toma un fin de semana.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Una captura de pantalla no es prueba de que la plata entró. Antes de marcar un pago como recibido, míralo en los movimientos de la cuenta de la escuela. Y si una familia transfiere a una llave equivocada, el Banco de la República advierte que no tiene competencia sobre reclamaciones ni reversos: eso se tramita con la entidad desde la que salió la plata.",
      },
      { type: "h2", content: "Errores frecuentes al cobrar con Bre-B" },
      {
        type: "ul",
        items: [
          "Registrar como llave el celular personal de un entrenador que después se va de la escuela.",
          "Recibir en un depósito de bajo monto y quedarse sin poder recibir a mitad de mes por el tope del producto.",
          "Cambiar de llave sin avisar: las familias guardan la anterior en sus favoritos y siguen pagando ahí.",
          "Dar por pagado el mes con la captura, sin mirar el extracto.",
        ],
      },
      { type: "h2", content: "Cómo se ve esto en SportMaps" },
      {
        type: "p",
        content:
          "SportMaps, que opera solo en Colombia, trabaja con transferencias Bre-B, Nequi y Daviplata además de las pasarelas Wompi y Mercado Pago. La familia paga a la llave de la escuela y manda el comprobante por WhatsApp; Mapi, el asistente con IA, lo lee y lo deja listo para que tú apruebes. Con corte al 14 de octubre de 2026, Mapi respondía un comprobante con una mediana de 42 segundos. Lo que todavía no existe es la confirmación automática de un pago Bre-B sin comprobante: está en exploración, y la plata siempre llega directo a la cuenta de la escuela. Mapi viene incluido en todos los planes, también en el gratuito de hasta 20 alumnos.",
      },
      {
        type: "cta",
        title: "Cobra mensualidades con tu llave Bre-B",
        description:
          "Las familias pagan a tu llave, mandan el comprobante por WhatsApp y Mapi lo deja listo para aprobar. Mira cómo funciona paso a paso.",
        href: "/cobrar-con-bre-b",
        label: "Ver cómo cobrar con Bre-B",
      },
    ],
    related: [
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "como-cobrar-mensualidades-escuela-deportiva",
      "como-saber-si-un-comprobante-de-nequi-es-falso",
    ],
    about: [
      "Bre-B",
      "pagos inmediatos en Colombia",
      "cobro de mensualidades en escuelas deportivas",
      "conciliación de transferencias",
    ],
    mentions: ["Banco de la República", "Bre-B", "Nequi", "Daviplata", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Qué es Bre-B?",
        answer:
          "Es el sistema de pagos inmediatos interoperado de Colombia, operado por el Banco de la República. Permite transferir entre cuentas de distintas entidades las 24 horas, todos los días del año, y el dinero llega en segundos. Funciona dentro de la app de cada banco o billetera.",
      },
      {
        question: "¿Cuál es el monto máximo por transferencia en Bre-B?",
        answer:
          "El Banco de la República lo fija en 1.000 UVB del año en curso por transferencia y publica $12.110.000 para 2026 (consulta de noviembre de 2026). Cada entidad puede establecer un tope menor por seguridad.",
      },
      {
        question: "¿Cuánto cuesta registrar una llave Bre-B?",
        answer:
          "Nada. El Banco de la República indica que el registro de llaves no tiene costo y se hace directamente en los canales digitales de la entidad donde está la cuenta. Las tarifas por recibir pagos como comercio dependen de cada entidad.",
      },
      {
        question: "¿Qué tipos de llave Bre-B existen?",
        answer:
          "Para personas: número de documento, número de celular, correo electrónico o un código alfanumérico asignado por la entidad. Los comercios pueden usar además un código de comercio. Una llave solo se asocia a una cuenta, pero una cuenta puede tener varias llaves.",
      },
      {
        question: "¿Un pago por Bre-B se puede reversar?",
        answer:
          "No hay reverso automático. El Banco de la República señala que no tiene competencia sobre reclamaciones ni reversos de transacciones Bre-B; el trámite se hace con la entidad financiera desde la que se envió el dinero.",
      },
    ],
  },
  {
    slug: "como-saber-si-un-comprobante-de-nequi-es-falso",
    title: "Cómo saber si un comprobante de Nequi es falso (y de Daviplata o transferencia)",
    excerpt:
      "La única prueba de un pago es que la plata aparezca en tus movimientos. Señales de un comprobante falso, cómo usar «Comprobar un pago» de Nequi, qué revisar en Daviplata y en transferencias bancarias, y qué hacer si ya prestaste el servicio.",
    category: "Cobros y pagos",
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
          "Un comprobante de Nequi es confiable solo si el pago aparece en los movimientos de tu propia cuenta: esa es la única prueba. La captura de pantalla, por bien hecha que esté, es una imagen que se puede editar o generar con aplicaciones que imitan a Nequi. Para verificar tienes dos caminos: revisar tus movimientos en la app (o el extracto) y, cuando el comprobante trae código QR, escanearlo con la opción «Comprobar un pago» de Nequi, que debe responder «Pago confirmado» con fecha, hora, valor y referencia. Lo mismo vale para Daviplata y para cualquier transferencia bancaria: primero la plata en la cuenta, después el servicio.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Regla de una línea para tu escuela: un pago se marca como recibido cuando alguien lo vio en los movimientos de la cuenta, no cuando llegó la captura. Señales de alerta: fecha u hora que no cuadran, valor distinto al cobrado, destinatario que no es tu cuenta, referencia cortada y comprobante que la persona «no puede volver a abrir». Pasos de Nequi consultados en su centro de ayuda en noviembre de 2026.",
      },
      { type: "h2", content: "¿Por qué la captura sola no prueba el pago?" },
      {
        type: "p",
        content:
          "Porque una captura es una foto, y una foto no está conectada con el banco. Hay tres formas en que una imagen puede mentir. La primera es la edición: se toma un comprobante real y se le cambian el valor, la fecha o el destinatario. La segunda son las aplicaciones que simulan la pantalla de la billetera; medios como El Tiempo y Noticias Caracol han reportado apps que generan pantallazos idénticos a los de Nequi a partir de datos que el estafador digita. La tercera no necesita ninguna trampa técnica: un comprobante verdadero, pero viejo, o de un pago hecho a otra cuenta.",
      },
      {
        type: "p",
        content:
          "Nequi lo dice sin rodeos en su centro de ayuda: no te confíes si alguien asegura que ya pagó pero no puede mostrarte el comprobante desde su app, y revisa que la plata haya entrado. Nequi también aclara que los usuarios no pueden reversar un pago ya hecho; solo en fallas técnicas poco frecuentes el comprobante aparece con la palabra «ANULADO» y sin QR.",
      },
      { type: "h2", content: "¿Cuáles son las señales de un comprobante falso?" },
      {
        type: "table",
        headers: ["Qué revisar", "Qué debe coincidir", "Señal de alerta"],
        rows: [
          ["Fecha y hora", "Con el momento en que la familia dice que pagó", "Fecha de ayer o de otro mes; hora posterior a la hora en que te lo enviaron"],
          ["Valor", "Exactamente lo cobrado", "Cifras con tipografía o alineación distinta al resto de la pantalla"],
          ["Destinatario", "El nombre o número de la cuenta de la escuela", "Nombre incompleto, número con un dígito cambiado o cuenta que no es la tuya"],
          ["Referencia o número de aprobación", "Un código completo, que no hayas visto en otro pago", "Referencia cortada, demasiado corta o repetida en dos comprobantes"],
          ["Código QR (si lo trae)", "Al escanearlo, la app lo confirma", "La app responde que el QR no es válido"],
          ["La imagen", "Captura nítida, completa, tomada de la app", "Foto de otra pantalla, bordes recortados, texto borroso solo en una zona"],
        ],
      },
      {
        type: "p",
        content:
          "Ninguna de estas señales es definitiva por sí sola. Un comprobante real puede tener la fecha de ayer porque la mamá pagó anoche, y un comprobante falso puede verse perfecto. Por eso las señales sirven para decidir a cuál mirarle el extracto primero, no para reemplazar la revisión.",
      },
      { type: "h2", content: "¿Cómo verificar un pago de Nequi en la app?" },
      {
        type: "ol",
        items: [
          "Abre tu Nequi y revisa tus movimientos: busca una entrada con el mismo valor, la misma fecha y una hora cercana. Si está, el pago existe. Si no está, todavía no hay pago, diga lo que diga la captura.",
          "Si el comprobante trae QR, usa el verificador. Según el centro de ayuda de Nequi: abre la app, toca el signo de pesos «$», elige «Comprobar un pago» y escanea el QR del comprobante. Nequi indica que no necesitas tener cuenta ni iniciar sesión para usar esta opción.",
          "Lee el resultado. Si es real, la app muestra «Pago confirmado» con el detalle del movimiento: fecha, hora, valor, destinatario y número de referencia. Compara esos datos con lo que esperabas recibir.",
          "Ten en cuenta el tiempo. Nequi explica que, desde que el usuario abre el comprobante y te lo muestra, hay 5 minutos para escanear el QR. Si sale un aviso de QR no válido, puede ser un comprobante viejo o modificado: pídele a la persona que abra de nuevo el movimiento en su app.",
          "Si la persona dice que perdió el comprobante, puede buscarlo: Nequi señala que en la app quedan registrados los movimientos de los últimos 30 días.",
        ],
      },
      {
        type: "p",
        content:
          "Una limitación importante: el verificador por QR no cubre todos los pagos. Las páginas de ayuda de Nequi lo describen para ciertos tipos de transacción (pagos con QR, envíos a cuentas Bancolombia y QR de negocios). Si el comprobante no trae QR, no significa que sea falso; significa que la única verificación posible es tu saldo y tus movimientos.",
      },
      { type: "h2", content: "¿Y si el comprobante es de Daviplata?" },
      {
        type: "p",
        content:
          "La lógica es la misma. La República y Xataka reportaron que Daviplata genera, al final de un pago, un código QR con los datos de la transacción (celular, aprobación y número de autorización), y que quien recibe puede validarlo abriendo la app sin iniciar sesión, tocando el ícono de QR y eligiendo «Confirmar comprobante». No pudimos leer esa instrucción directamente en una página oficial de Daviplata al momento de escribir, así que tómala como una guía y confirma la ruta en tu app. Lo que no cambia: entra a tu Daviplata y mira si la plata entró.",
      },
      { type: "h2", content: "¿Cómo verificar una transferencia bancaria?" },
      {
        type: "ul",
        items: [
          "Entra al portal o a la app de la cuenta de la escuela y busca la entrada por valor y fecha. El extracto es la fuente; el comprobante es la pista.",
          "Distingue el tipo de transferencia. Una transferencia inmediata por Bre-B llega en segundos, según el Banco de la República. Una transferencia interbancaria tradicional puede tardar más, y eso depende de las entidades y del horario.",
          "Lee el estado que muestra el comprobante. «Programada», «en proceso» o «pendiente» no es lo mismo que «exitosa»: una transferencia programada todavía se puede cancelar.",
          "Revisa a qué cuenta fue. Es frecuente que la familia pague a una cuenta antigua de la escuela o a la del entrenador.",
          "Si la plata no aparece en un tiempo razonable, pídele a la familia que consulte con su banco usando el número de referencia. La escuela no puede rastrear una transferencia que no le ha llegado.",
        ],
      },
      {
        type: "table",
        headers: ["Medio", "Cómo verificar", "Fuente (consulta: noviembre de 2026)"],
        rows: [
          ["Nequi", "Movimientos de tu cuenta; si hay QR, «$» y luego «Comprobar un pago»: debe decir «Pago confirmado»", "Centro de ayuda de Nequi, \"¿Cómo saber si un pago hecho desde Nequi es real?\""],
          ["Daviplata", "Movimientos de tu Daviplata; QR con la opción «Confirmar comprobante»", "La República y Xataka Colombia (reporte de prensa, por confirmar en la app)"],
          ["Bre-B", "Movimientos de la cuenta: la plata llega en segundos", "Banco de la República, \"Conozca Bre-B\""],
          ["Transferencia interbancaria", "Extracto o movimientos de la cuenta; revisar que el estado sea exitoso y no programado", "Recomendación operativa; los tiempos dependen de cada entidad"],
        ],
      },
      { type: "h2", content: "En una escuela, el problema suele ser otro" },
      {
        type: "p",
        content:
          "En una tienda, el riesgo es el desconocido que muestra un pantallazo y se va con la mercancía. En una escuela conoces a la familia y el alumno vuelve la próxima semana, así que el fraude deliberado es más raro. Lo que sí pasa, y desordena igual la caja, es menos dramático:",
      },
      {
        type: "ul",
        items: [
          "El comprobante repetido: lo envía la mamá el lunes y el papá el miércoles, y se registran dos pagos.",
          "El comprobante del mes anterior, reenviado por error desde la galería.",
          "El pago a la cuenta equivocada: la del profe, o una cuenta que la escuela ya no usa.",
          "El valor incompleto: pagaron la mensualidad pero no el uniforme, o al revés.",
          "El pago de dos hermanos en una sola transferencia, sin decir de quién es.",
        ],
      },
      {
        type: "p",
        content:
          "Para todos esos casos la defensa es la misma que para el comprobante falso: cruzar cada comprobante con una entrada real del extracto y marcarlo como usado. Si una referencia ya está aplicada a un pago, no puede aplicarse a otro.",
      },
      { type: "h2", content: "¿Qué hacer si ya prestaste el servicio?" },
      {
        type: "ol",
        items: [
          "Confirma primero que de verdad no entró. Revisa todas las cuentas y billeteras de la escuela, incluida la que ya no publicas.",
          "Guarda la evidencia: la captura, el chat, la fecha y el número desde el que te escribieron.",
          "Habla con la familia sin acusar. La mayoría de las veces es un error: «No encuentro este pago en la cuenta, ¿me ayudas a revisar en tu app si salió?».",
          "Deja el cobro como pendiente en tu registro. No lo borres ni lo marques como pagado «mientras tanto».",
          "Si se confirma que el comprobante fue alterado a propósito, repórtalo a la entidad (Nequi, Daviplata o el banco) por sus canales oficiales y evalúa presentar la denuncia ante las autoridades. Consulta con un abogado si el monto lo amerita.",
          "Ajusta el proceso: desde ese día, el servicio que depende de un pago (un torneo, un uniforme, una inscripción) se entrega cuando el pago está verificado.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No uses aplicaciones de terceros ni páginas web que prometen «validar comprobantes de Nequi». La verificación se hace solo dentro de la app oficial o mirando tus propios movimientos. Y nunca le entregues a nadie tu clave ni códigos de verificación para «confirmar» un pago.",
      },
      { type: "h2", content: "Una rutina de cinco minutos para tu escuela" },
      {
        type: "ul",
        items: [
          "Un solo canal para recibir comprobantes.",
          "Una sola persona (o un turno) que mira los movimientos de la cuenta una vez al día.",
          "Cada comprobante se cruza con una entrada del extracto por valor, fecha y referencia.",
          "Lo que no cruza queda en una lista de pendientes con el nombre de la familia.",
          "La confirmación a la familia sale después del cruce, no antes.",
        ],
      },
      { type: "h2", content: "Cómo ayuda SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps las familias mandan el comprobante al WhatsApp de la escuela y Mapi, el asistente con IA, lo lee y lo deja listo para aprobar; la aprobación final es tuya, después de mirar que la plata entró. Con corte al 14 de octubre de 2026, la plataforma llevaba 459 comprobantes leídos por la IA, con una mediana de 42 segundos por comprobante. Mapi valida transferencias Bre-B, Nequi y Daviplata y viene incluido en todos los planes, también en el gratuito de hasta 20 alumnos. No reemplaza la revisión del extracto: te ahorra la digitación y el desorden.",
      },
      {
        type: "cta",
        title: "Deja de digitar comprobantes a mano",
        description:
          "Mapi lee cada comprobante que llega por WhatsApp y lo deja listo para aprobar. Incluido en todos los planes; gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes de SportMaps",
      },
    ],
    related: [
      "leer-comprobantes-de-pago-con-ia",
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "cobrar-con-nequi-y-daviplata-en-una-escuela-deportiva",
    ],
    about: [
      "comprobantes de pago falsos",
      "verificación de pagos de Nequi y Daviplata",
      "fraude con capturas de pantalla",
      "cobros en escuelas deportivas",
    ],
    mentions: ["Nequi", "Daviplata", "Bancolombia", "Bre-B", "Banco de la República", "WhatsApp"],
    faqs: [
      {
        question: "¿Cómo saber si un comprobante de Nequi es falso?",
        answer:
          "Revisa los movimientos de tu propia cuenta: si el pago no aparece ahí, no existe. Si el comprobante trae QR, abre Nequi, toca «$», elige «Comprobar un pago» y escanéalo; un pago real muestra «Pago confirmado» con fecha, hora, valor y referencia, según el centro de ayuda de Nequi.",
      },
      {
        question: "¿Una captura de pantalla prueba que me pagaron?",
        answer:
          "No. Una captura es una imagen que se puede editar o generar con aplicaciones que imitan a la billetera. La prueba del pago es que el dinero aparezca en los movimientos o en el extracto de tu cuenta.",
      },
      {
        question: "¿Cuánto tiempo hay para verificar el QR de un comprobante de Nequi?",
        answer:
          "Nequi indica que, desde que el usuario abre el comprobante y te lo muestra, hay 5 minutos para escanear el QR. Si aparece que el QR no es válido, pídele que abra de nuevo el movimiento en su app.",
      },
      {
        question: "¿Se puede reversar un pago hecho por Nequi?",
        answer:
          "Según el centro de ayuda de Nequi, los usuarios no pueden reversar un pago ya hecho. Solo en fallas técnicas poco frecuentes el comprobante aparece con la palabra «ANULADO» y sin código QR.",
      },
      {
        question: "¿Qué hago si recibí un comprobante falso y ya presté el servicio?",
        answer:
          "Confirma en todas tus cuentas que el dinero no entró, guarda la captura y el chat, habla con la familia para descartar un error, deja el cobro como pendiente y, si fue una alteración deliberada, repórtalo a la entidad financiera y evalúa la denuncia ante las autoridades.",
      },
    ],
  },
  {
    slug: "cobrar-con-nequi-y-daviplata-en-una-escuela-deportiva",
    title: "Cobrar con Nequi y Daviplata en una escuela deportiva: topes 2026, riesgos y alternativas",
    excerpt:
      "Un Nequi o Daviplata de bajo monto mueve hasta 210,50 UVT al mes: unos $11 millones en 2026. Cuántos alumnos caben en ese tope, qué arriesgas al cobrar con la cuenta personal y qué alternativas tiene una escuela.",
    category: "Cobros y pagos",
    readTime: "8 min",
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
          "Sí puedes cobrar las mensualidades de tu escuela con Nequi o Daviplata, pero el producto con el que casi todo el mundo empieza, el depósito de bajo monto, tiene un tope: 210,50 UVT al mes. Nequi publica ese límite en $11.024.727,50 para 2026 y advierte que, si llegas al tope de saldo, no puedes recibir más plata. Con una mensualidad de $120.000, eso se llena con unos 90 alumnos. Para una escuela pequeña que arranca, sirve. Para una que crece, lo sano es pasar a una cuenta de ahorros o a una cuenta a nombre de la escuela, y dejar de mezclar la plata del negocio con la personal.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Divide el tope mensual entre tu mensualidad y sabrás cuántos alumnos caben. Si estás cerca, cambia de producto antes de que la cuenta se bloquee en plena semana de pagos. Y separa la plata: una cuenta solo para la escuela, aunque todavía esté a tu nombre. Topes consultados en las páginas oficiales de Nequi y Daviplata en noviembre de 2026.",
      },
      { type: "h2", content: "¿Cuál es el tope mensual de Nequi y Daviplata en 2026?" },
      {
        type: "p",
        content:
          "Los dos productos básicos son depósitos de bajo monto y comparten el mismo límite en UVT. La UVT de 2026 es de $52.374, fijada por la DIAN en la Resolución 000238 del 15 de diciembre de 2025; al multiplicarla por 210,50 da $11.024.727.",
      },
      {
        type: "table",
        headers: ["Producto", "Tope", "Fuente (consulta: noviembre de 2026)"],
        rows: [
          ["Nequi, depósito de bajo monto", "$11.024.727,50 al mes (210,50 UVT) para enviar, sacar y pagar; al llegar al tope de saldo no se puede recibir más plata", "Nequi, \"Depósito de bajo monto Nequi: diferencias y topes\""],
          ["Nequi, cuenta de ahorros", "Saldo ilimitado y sin montos límite para mover la plata; el cambio se hace desde «Tus topes» y cuesta $15.000 una sola vez", "Nequi, misma página"],
          ["Daviplata, depósito de bajo monto", "El saldo no puede exceder 210,50 UVT en ningún momento, y las operaciones débito acumuladas en un mes calendario tampoco", "Daviplata, \"Reglamento DaviPlata\""],
          ["Exención del 4x1.000 en Nequi (bajo monto)", "Retiros hasta $3.404.310 al mes (65 UVT); por encima se cobra el impuesto", "Nequi, \"Depósito de bajo monto Nequi: diferencias y topes\""],
          ["Exención del 4x1.000 en cuenta de ahorros Nequi", "Se puede marcar como exenta si mueves menos de 350 UVT al mes ($18.330.900); solo una cuenta exenta por persona", "Nequi, misma página"],
          ["Valor de la UVT 2026", "$52.374", "DIAN, Resolución 000238 del 15 de diciembre de 2025"],
        ],
      },
      {
        type: "p",
        content:
          "Una advertencia sobre Daviplata: el reglamento expresa el tope en UVT (210,50), pero en las tablas de tarifas que encontramos publicadas aparecen equivalentes en pesos distintos entre sí, algunos calculados con la UVT de años anteriores. Por eso aquí citamos el tope en UVT y no una cifra en pesos de Daviplata: revisa el valor vigente en la sección de topes de tu app. Daviplata también ofrece pasar a un depósito ordinario con un tope más alto; las condiciones y el costo cambian, así que consúltalos directamente.",
      },
      { type: "h2", content: "¿Cuántos alumnos caben en una cuenta de bajo monto?" },
      {
        type: "p",
        content:
          "La cuenta es simple: tope mensual dividido entre la mensualidad. Estos son ejemplos ilustrativos con el tope de $11.024.727 de 2026, suponiendo que por la cuenta solo pasan mensualidades. En la práctica el espacio se acaba antes, porque por la misma cuenta suelen pasar inscripciones, uniformes, torneos y, si es la cuenta personal, tus propios movimientos.",
      },
      {
        type: "table",
        headers: ["Mensualidad (ejemplo)", "Alumnos que caben en el mes", "Qué significa"],
        rows: [
          ["$80.000", "137", "Una escuela de barrio con tres categorías ya está cerca del límite"],
          ["$100.000", "110", "Un mes con inscripciones o uniformes te pasa del tope"],
          ["$120.000", "91", "Con menos de 100 alumnos ya no cabe todo"],
          ["$150.000", "73", "El tope llega antes de completar cuatro grupos"],
          ["$200.000", "55", "Una academia especializada lo llena con dos grupos"],
        ],
      },
      {
        type: "p",
        content:
          "Lo que pasa al llegar al tope es lo peor que le puede ocurrir a una escuela en semana de pagos: según Nequi, si llegas al tope de saldo no puedes recibir más plata, y si llegas al límite mensual no puedes hacer más movimientos de salida hasta el mes siguiente. Las familias intentan pagar, la transferencia rebota y tú terminas dando otro número de cuenta por WhatsApp, que es justo como empieza el desorden.",
      },
      { type: "h2", content: "¿Cuenta personal o cuenta de negocio?" },
      {
        type: "p",
        content:
          "Hay tres escalones, y no todos implican constituir una empresa. El primero es el depósito de bajo monto a tu nombre: rápido, gratis y con tope. El segundo es la cuenta de ahorros dentro de la misma billetera: Nequi la describe para mayores de 18 años, con saldo ilimitado, y la recomienda expresamente a quien tiene un emprendimiento y usa Nequi para recibir sus pagos. El tercero es una cuenta bancaria a nombre de la escuela (del club, la fundación o la SAS), que es la única que separa de verdad el patrimonio de la escuela del tuyo.",
      },
      {
        type: "p",
        content:
          "Nequi tiene además una línea para negocios, con QR y una app propia para comercios. Sus condiciones, y si aplica o no a personas jurídicas, es mejor confirmarlas directamente con Nequi, porque no encontramos ese detalle publicado de forma clara al momento de escribir.",
      },
      {
        type: "table",
        headers: ["Opción", "Ventaja", "Limitación"],
        rows: [
          ["Depósito de bajo monto personal", "Se abre en minutos; todas las familias lo conocen", "Tope de 210,50 UVT al mes; mezcla la plata personal con la de la escuela"],
          ["Cuenta de ahorros en la billetera", "Sin tope de saldo en Nequi; sigue siendo el mismo número de celular", "Sigue a nombre de una persona, no de la escuela"],
          ["Cuenta bancaria a nombre de la escuela", "Separa patrimonios, facilita la contabilidad y permite registrar una llave Bre-B institucional", "Exige tener la escuela formalizada y puede tener cuota de manejo"],
          ["Pasarela de pagos (Wompi, Mercado Pago)", "La familia paga con PSE, tarjeta o billetera y el pago queda identificado", "Cobra comisión por transacción"],
        ],
      },
      { type: "h2", content: "¿Qué riesgos tiene cobrar con la cuenta personal?" },
      {
        type: "ul",
        items: [
          "El tope. Es el más visible y el que revienta primero: la cuenta deja de recibir en la semana en que más pagos llegan.",
          "La mezcla de plata. Si por la misma cuenta pasan el mercado, el arriendo y las mensualidades, a fin de mes no sabes cuánto ganó la escuela ni cuánto te debes a ti mismo.",
          "La cara ante la DIAN. Todo lo que entra a una cuenta a tu nombre aparece como movimiento tuyo. Si no llevas soportes que expliquen qué parte era de la escuela y qué gastos tuvo, la conversación con tu contador en época de declaración se complica. Pregúntale desde ya cómo documentarlo.",
          "La dependencia de una persona. Si la cuenta es del entrenador y el entrenador se va, se va también el historial de pagos, la llave que las familias tienen guardada y el acceso a la plata.",
          "La dependencia de un celular. Un robo o un bloqueo de la línea deja a la escuela sin recibir pagos mientras se recupera la cuenta.",
          "La confianza de la familia. Transferirle a «Juan Pérez» en vez de a «Escuela de Fútbol Tal» genera dudas, sobre todo en familias nuevas.",
          "El 4x1.000. Por encima de los montos exentos, cada retiro paga el gravamen, y solo puedes tener una cuenta exenta.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No repartas los cobros entre el Nequi de tu pareja, el de tu hermano y el de dos entrenadores para «no pasarte del tope». Además de multiplicar el desorden, cada una de esas personas queda con ingresos a su nombre que no son suyos. Si la escuela ya no cabe en un depósito de bajo monto, la respuesta es cambiar de producto, no de titular.",
      },
      { type: "h2", content: "¿Qué alternativas tiene una escuela?" },
      {
        type: "ol",
        items: [
          "Convertir el depósito en cuenta de ahorros. En Nequi se hace desde la app, en «Tu plata», «Tus topes», «Cambiar a cuenta de ahorros», con un costo de $15.000 que se descuenta una sola vez, según la página de Nequi. Es el paso más rápido si hoy estás al borde del tope.",
          "Abrir una cuenta a nombre de la escuela. Si ya tienes RUT y la escuela está constituida, esta es la opción que ordena todo: contabilidad, facturación y confianza.",
          "Registrar una llave Bre-B sobre esa cuenta. Las familias siguen pagando desde su Nequi o su Daviplata, pero la plata llega a la cuenta de la escuela en segundos, sin importar la entidad.",
          "Sumar una pasarela para quien prefiere PSE o tarjeta. El pago queda asociado al cobro sin necesidad de comprobante, a cambio de una comisión.",
          "Dejar el efectivo como excepción, con recibo, y no como costumbre.",
        ],
      },
      {
        type: "p",
        content:
          "Fíjate en que ninguna alternativa obliga a las familias a cambiar de hábito: ellas pueden seguir usando Nequi o Daviplata para pagar. Lo que cambia es a dónde llega la plata y a nombre de quién.",
      },
      { type: "h2", content: "Buenas prácticas si por ahora sigues con Nequi o Daviplata" },
      {
        type: "ul",
        items: [
          "Usa una cuenta solo para la escuela, distinta de la que usas para tus gastos.",
          "Revisa a mitad de mes cuánto llevas acumulado frente al tope; en Nequi lo ves en «Tus topes».",
          "Publica un solo número y no lo cambies sin avisar por escrito.",
          "Pide el comprobante siempre por el mismo canal y con el nombre del alumno.",
          "Verifica cada pago en los movimientos antes de marcarlo como recibido.",
          "Descarga o anota los movimientos cada semana: los soportes de hoy son tu contabilidad de mañana.",
          "Habla con un contador antes de que el volumen te obligue a hacerlo de afán.",
        ],
      },
      { type: "h2", content: "Cómo encaja SportMaps" },
      {
        type: "p",
        content:
          "SportMaps, que opera solo en Colombia, no te obliga a escoger un solo medio. Todos los planes, incluido el gratuito de hasta 20 alumnos, traen integradas las pasarelas Wompi y Mercado Pago (PSE, Nequi, tarjeta y billetera), y la plata llega directo a la cuenta de la escuela. Para las familias que prefieren transferir, Mapi, el asistente de WhatsApp con IA, lee los comprobantes de Bre-B, Nequi y Daviplata y los deja listos para aprobar. También se registran pagos en efectivo. Los planes pagos van de $69.000 COP al mes (hasta 50 alumnos) a $349.000 (hasta 800).",
      },
      {
        type: "cta",
        title: "Cobra por transferencia o pasarela, sin perder el control",
        description:
          "Wompi y Mercado Pago integrados, y Mapi leyendo los comprobantes de Nequi, Daviplata y Bre-B. Empieza gratis con hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes de SportMaps",
      },
    ],
    related: [
      "bre-b-para-escuelas-deportivas-como-recibir-pagos-con-llave",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "como-saber-si-un-comprobante-de-nequi-es-falso",
    ],
    about: [
      "cobrar con Nequi y Daviplata",
      "topes de depósitos de bajo monto",
      "cuentas para escuelas deportivas",
      "formalización de cobros",
    ],
    mentions: ["Nequi", "Daviplata", "DIAN", "Bre-B", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuál es el tope mensual de Nequi en 2026?",
        answer:
          "Para el depósito de bajo monto, Nequi publica $11.024.727,50 al mes (210,50 UVT) para enviar, sacar y pagar, y advierte que al llegar al tope de saldo no se puede recibir más plata. La cuenta de ahorros de Nequi no tiene ese límite.",
      },
      {
        question: "¿Cuál es el tope de Daviplata?",
        answer:
          "El reglamento de Daviplata fija para el depósito de bajo monto un saldo máximo de 210,50 UVT y el mismo límite para las operaciones débito acumuladas en un mes calendario. Con la UVT de 2026 ($52.374) eso equivale a unos $11.024.727; confirma el valor vigente en tu app.",
      },
      {
        question: "¿Puedo cobrar las mensualidades de mi escuela con mi Nequi personal?",
        answer:
          "Puedes, pero con límites: el tope de 210,50 UVT al mes se llena con unos 90 alumnos de $120.000, y mezclas tu plata con la de la escuela. Si la escuela crece, conviene pasar a cuenta de ahorros o a una cuenta a nombre de la escuela.",
      },
      {
        question: "¿Cuánto cuesta pasar Nequi a cuenta de ahorros?",
        answer:
          "Según la página de Nequi consultada en noviembre de 2026, el cambio se hace desde «Tus topes» en la app y se descuentan $15.000 del disponible, una sola vez.",
      },
      {
        question: "¿Qué pasa si llego al tope de mi Nequi?",
        answer:
          "Nequi indica que al llegar al tope de saldo no puedes recibir más plata, y al llegar al límite mensual no puedes hacer más movimientos de salida; estos se habilitan de nuevo al mes siguiente.",
      },
    ],
  },
  {
    slug: "impuestos-de-una-escuela-deportiva-en-colombia-rut-iva-regimen-simple",
    title: "Impuestos de una escuela deportiva en Colombia: RUT, IVA, régimen simple, ESAL o SAS",
    excerpt:
      "Guía informativa para dueños de escuelas y clubes: cuándo inscribirse en el RUT, si la mensualidad lleva IVA, qué es el régimen simple, en qué se diferencia un club sin ánimo de lucro de una SAS y cuándo te practican retención. No reemplaza a tu contador.",
    category: "Cobros y pagos",
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
          "Una escuela deportiva en Colombia tiene cuatro decisiones tributarias de fondo. Primera: inscribirse en el RUT antes de empezar a cobrar. Segunda: saber si su mensualidad lleva IVA; como regla general los servicios están gravados, salvo que quepan en la lista cerrada de exclusiones del artículo 476 del Estatuto Tributario, y una persona natural con ingresos por debajo de 3.500 UVT puede ser «no responsable». Tercera: escoger entre el régimen ordinario y el régimen simple de tributación, que es voluntario y admite ingresos inferiores a 100.000 UVT. Cuarta: definir la figura, porque un club constituido como entidad sin ánimo de lucro puede pedir el Régimen Tributario Especial y una SAS no. Lo que sigue explica cada una con la norma al lado.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Esto no reemplaza a tu contador. Es una guía informativa escrita por un equipo de software, no una asesoría tributaria. Las normas cambian, hay sentencias que suspenden decretos y cada escuela tiene un caso distinto. Antes de tomar una decisión, revísala con un contador público o un abogado tributarista. Normas consultadas en noviembre de 2026.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "table",
        headers: ["Tema", "Regla general", "Norma o fuente (consulta: noviembre de 2026)"],
        rows: [
          ["RUT", "Hay que inscribirse antes de iniciar cualquier actividad económica", "Estatuto Tributario, artículo 555-2, parágrafo 2 (modificado por la Ley 2155 de 2021)"],
          ["Valor de la UVT 2026", "$52.374", "DIAN, Resolución 000238 del 15 de diciembre de 2025"],
          ["IVA en servicios", "Gravados, salvo los de la lista de exclusiones; la educación solo se excluye en establecimientos reconocidos por el Gobierno", "Estatuto Tributario, artículo 476; DIAN, Concepto 1139 de 2024"],
          ["No responsable de IVA", "Persona natural con ingresos brutos inferiores a 3.500 UVT ($183.309.000 en 2026) que cumpla todos los demás requisitos", "Estatuto Tributario, artículo 437, parágrafo 3"],
          ["Régimen simple", "Voluntario; ingresos brutos del año anterior inferiores a 100.000 UVT ($5.237.400.000 en 2026)", "Estatuto Tributario, artículo 905"],
          ["Régimen Tributario Especial (ESAL)", "20 % sobre el beneficio neto o excedente, que queda exento si se reinvierte en el objeto social", "Estatuto Tributario, artículos 356 y 358"],
          ["Retención por servicios", "4 % a declarantes de renta y 6 % a no declarantes", "Estatuto Tributario, artículo 392"],
        ],
      },
      { type: "h2", content: "¿Una escuela deportiva debe tener RUT?" },
      {
        type: "p",
        content:
          "Sí. El Registro Único Tributario es el mecanismo con el que la DIAN identifica, ubica y clasifica a quienes tienen obligaciones tributarias, y el parágrafo 2 del artículo 555-2 del Estatuto Tributario exige inscribirse antes de iniciar cualquier actividad económica. No importa si cobras por Nequi, en efectivo o por transferencia: si vendes un servicio, necesitas RUT.",
      },
      {
        type: "p",
        content:
          "En el RUT quedan tu actividad económica (el código CIIU) y tus responsabilidades: IVA, régimen simple, facturación electrónica. De esas casillas depende qué declaraciones presentas, así que revísalas con el contador en lugar de marcarlas de afán.",
      },
      { type: "h2", content: "¿La mensualidad de una escuela deportiva lleva IVA?" },
      {
        type: "p",
        content:
          "Depende de quién presta el servicio y de cómo está reconocido, y es la pregunta donde más conviene no adivinar. El punto de partida es que en Colombia la prestación de servicios está gravada con IVA, y que las exclusiones son una lista cerrada: la DIAN ha reiterado que el artículo 476 del Estatuto Tributario contiene de manera taxativa los servicios excluidos. Si tu servicio no está en esa lista, está gravado a la tarifa general.",
      },
      {
        type: "p",
        content:
          "La exclusión que muchas escuelas creen que les aplica es la de educación. Pero la norma la limita a los servicios de educación prestados por establecimientos reconocidos como tales por el Gobierno. En el Concepto 1139 de 2024 la DIAN concluyó que esa exclusión solo cobija a establecimientos de educación formal o no formal con ese reconocimiento. Y hay un antecedente directo: en el Concepto 042493 del 21 de julio de 2003, la DIAN respondió a una fundación que quería abrir una escuela de fútbol que el servicio solo queda excluido si el establecimiento tiene autorización oficial como institución educativa; sin ella, falta un requisito esencial de la exclusión.",
      },
      {
        type: "p",
        content:
          "En la práctica: una escuela de formación deportiva no queda excluida de IVA por el solo hecho de enseñar. Ese concepto es de 2003, de modo que tu contador debe verificar qué doctrina está vigente.",
      },
      { type: "h3", content: "El camino de «no responsable de IVA»" },
      {
        type: "p",
        content:
          "Que el servicio esté gravado no significa que todo el mundo deba cobrar IVA. El parágrafo 3 del artículo 437 del Estatuto Tributario permite que las personas naturales que prestan servicios operen como no responsables de IVA si cumplen la totalidad de sus requisitos; el principal es haber tenido ingresos brutos de la actividad inferiores a 3.500 UVT, que con la UVT de 2026 son $183.309.000. Hay otras condiciones además del tope, y la DIAN, en el Concepto 13873 de 2026, recordó que quien vaya a celebrar un contrato individual por más de 3.500 UVT debe inscribirse antes como responsable.",
      },
      {
        type: "ul",
        items: [
          "Este camino es para personas naturales. Una SAS o una fundación no puede declararse «no responsable» por tener pocos ingresos.",
          "Para quienes están en el régimen simple, las condiciones están en el parágrafo 4 del mismo artículo.",
          "Lleva la cuenta de ingresos mes a mes: si pasas el tope, cambian tus obligaciones.",
        ],
      },
      { type: "h2", content: "¿Régimen simple o régimen ordinario?" },
      {
        type: "p",
        content:
          "El régimen simple de tributación (SIMPLE) es un modelo voluntario, regulado en los artículos 903 a 916 del Estatuto Tributario, que reemplaza el impuesto de renta por un impuesto unificado calculado sobre los ingresos brutos e integra el impuesto de industria y comercio. Según el artículo 905, pueden entrar quienes hayan tenido en el año anterior ingresos brutos inferiores a 100.000 UVT, que en 2026 equivalen a $5.237.400.000. La tarifa depende de dos cosas, según el artículo 908: el grupo de actividad en el que quede tu código CIIU y tu nivel de ingresos.",
      },
      {
        type: "table",
        headers: ["Aspecto", "Régimen ordinario", "Régimen simple"],
        rows: [
          ["Base del impuesto", "La utilidad: ingresos menos costos y gastos que la norma permite deducir", "Los ingresos brutos"],
          ["Industria y comercio (ICA)", "Se declara y se paga aparte en cada municipio", "Queda integrado en el impuesto unificado"],
          ["Retención en la fuente por renta", "Tus clientes agentes de retención te la practican", "No te la practican ni la practicas, salvo en pagos laborales (artículo 911)"],
          ["Pagos durante el año", "Declaración anual y retenciones que te van descontando", "Anticipos bimestrales y una declaración anual"],
        ],
      },
      {
        type: "p",
        content:
          "No citamos porcentajes del SIMPLE a propósito: la tabla del artículo 908 ha tenido cambios, y las versiones que circulan no coinciden entre sí. El grupo de tu actividad y la tarifa vigente te los debe confirmar el contador. Además, la DIAN reforzó en 2026 el control de los requisitos de permanencia: el Instituto Nacional de Contadores Públicos reseñó la Resolución 000014 del 13 de mayo de 2026.",
      },
      {
        type: "p",
        content:
          "Una escuela con márgenes estrechos puede pagar más en el SIMPLE, porque ese régimen grava el ingreso y no la utilidad. Pídele al contador la simulación con tus cifras reales de los últimos doce meses.",
      },
      { type: "h2", content: "¿Club deportivo sin ánimo de lucro o SAS?" },
      {
        type: "p",
        content:
          "Es la decisión que más pesa a largo plazo y la que menos se discute al arrancar. La diferencia de fondo no es tributaria: en una entidad sin ánimo de lucro (asociación, corporación o fundación) los excedentes no se reparten entre los fundadores, se reinvierten en el objeto social. En una SAS las utilidades son de los accionistas.",
      },
      {
        type: "table",
        headers: ["Aspecto", "Club o fundación (ESAL)", "SAS"],
        rows: [
          ["Finalidad", "Sin ánimo de lucro: los excedentes se reinvierten en la actividad", "Con ánimo de lucro: las utilidades se pueden repartir"],
          ["Régimen de renta", "Puede solicitar la calificación en el Régimen Tributario Especial; si no la obtiene o la pierde, tributa en el ordinario", "Régimen ordinario, o SIMPLE si cumple los requisitos"],
          ["Tarifa especial", "20 % sobre el beneficio neto o excedente (artículo 356), exento si se destina al objeto social en el año siguiente (artículo 358)", "No aplica"],
          ["Trámites adicionales", "Calificación ante la DIAN, registro en el aplicativo web y actualización anual (artículos 356-2, 356-3 y 364-5)", "Los de cualquier sociedad comercial"],
        ],
      },
      {
        type: "p",
        content:
          "Sobre el Régimen Tributario Especial conviene saber dos cosas. No es automático: hay que pedir la calificación a la DIAN y actualizarla cada año, y quien no lo hace pasa al régimen ordinario. Y el artículo 359 del Estatuto Tributario incluye entre las actividades meritorias la promoción y el apoyo a las actividades deportivas definidas por la Ley 181 de 1995, pero exige interés general y acceso a la comunidad.",
      },
      {
        type: "p",
        content:
          "Si tu proyecto es una empresa de la que esperas utilidades, la SAS es la figura honesta. Si es un club de la comunidad, con asamblea y reinversión, la ESAL tiene sentido. Y el IVA va por otro carril: ser ESAL no excluye por sí mismo tus servicios del impuesto.",
      },
      { type: "h2", content: "¿Cuándo le practican retención en la fuente a una escuela?" },
      {
        type: "p",
        content:
          "La retención en la fuente no es un impuesto adicional: es un anticipo de tu impuesto de renta que te descuenta quien te paga, si es agente de retención. Para servicios, el artículo 392 del Estatuto Tributario fija tarifas del 4 % para declarantes de renta y del 6 % para no declarantes, y se aplica a partir de una cuantía mínima expresada en UVT.",
      },
      {
        type: "ul",
        items: [
          "Las familias, como personas naturales que pagan una mensualidad, normalmente no te retienen.",
          "Sí te pueden retener los clientes que son empresas o entidades: un colegio que contrata tus entrenamientos, una empresa que patrocina o paga un programa para sus empleados, una alcaldía.",
          "Si estás en el régimen simple, el artículo 911 dispone que no te practican retención por renta ni la practicas tú, con la excepción de los pagos laborales.",
          "Si tu escuela es persona jurídica y les paga a entrenadores por prestación de servicios, puede tener que retenerles a ellos. Revísalo con el contador.",
          "La cuantía mínima estuvo en discusión en 2026: el Decreto 572 de 2025 la redujo y, según reportó el portal especializado Actualícese, el Consejo de Estado suspendió esa modificación en mayo de 2026. Confirma el valor vigente antes de aplicar una base.",
        ],
      },
      {
        type: "p",
        content:
          "Dos temas más para la lista: el impuesto de industria y comercio es municipal, así que la tarifa cambia según la ciudad donde operes, y las responsabilidades del RUT definen si debes facturar electrónicamente.",
      },
      { type: "h2", content: "Qué llevarle al contador en la primera cita" },
      {
        type: "ol",
        items: [
          "Cuántos alumnos tienes, cuánto pagan y cuánto recibiste en los últimos doce meses, mes por mes.",
          "Por dónde entra la plata: cuentas, billeteras, pasarelas y efectivo.",
          "Cuánto gastas en entrenadores, escenarios, implementos y administración.",
          "Cómo estás constituido hoy: persona natural, SAS, club, fundación o nada todavía.",
          "A quién le vendes: solo familias, o también colegios, empresas y entidades públicas.",
          "Qué quieres en tres años: crecer y repartir utilidades, o sostener un club de la comunidad.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps (y dónde no)" },
      {
        type: "p",
        content:
          "SportMaps no hace tu contabilidad ni decide tu régimen: eso es trabajo de tu contador. Lo que sí hace es dejarle los datos ordenados. Cada pago queda registrado por alumno, mes y medio de pago, y todos los planes incluyen la integración de facturación electrónica DIAN sin costo de integración (pagas solo el paquete según la cantidad de facturas), con acceso para que el contador revise el estado de las facturas. Con corte al 14 de octubre de 2026, Dynasty Volley Club sumaba 334 facturas electrónicas aceptadas por la DIAN. SportMaps opera solo en Colombia.",
      },
      {
        type: "cta",
        title: "Llega a la cita con el contador con los datos listos",
        description:
          "Pagos registrados por alumno y por mes, e integración de facturación electrónica DIAN en todos los planes, con acceso para tu contador.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "facturacion-electronica-escuelas-deportivas-dian",
      "cobrar-con-nequi-y-daviplata-en-una-escuela-deportiva",
      "como-cobrar-mensualidades-escuela-deportiva",
    ],
    about: [
      "impuestos de escuelas deportivas en Colombia",
      "IVA en servicios deportivos",
      "régimen simple de tributación",
      "entidades sin ánimo de lucro y clubes deportivos",
    ],
    mentions: ["DIAN", "Estatuto Tributario", "Régimen Simple de Tributación", "Ley 181 de 1995", "Consejo de Estado", "Cámara de Comercio"],
    faqs: [
      {
        question: "¿Una escuela deportiva debe cobrar IVA en la mensualidad?",
        answer:
          "Depende. En Colombia los servicios están gravados salvo los de la lista cerrada del artículo 476 del Estatuto Tributario; la exclusión de educación solo aplica a establecimientos reconocidos por el Gobierno, según la DIAN (Concepto 1139 de 2024). Una persona natural con ingresos inferiores a 3.500 UVT que cumpla los demás requisitos puede ser no responsable de IVA. Confírmalo con tu contador.",
      },
      {
        question: "¿Cuál es el tope para ser no responsable de IVA en 2026?",
        answer:
          "Ingresos brutos inferiores a 3.500 UVT, que con la UVT de 2026 ($52.374) son $183.309.000, además de cumplir todos los demás requisitos del parágrafo 3 del artículo 437 del Estatuto Tributario. Aplica a personas naturales, no a sociedades.",
      },
      {
        question: "¿Qué es el régimen simple de tributación?",
        answer:
          "Es un modelo voluntario (artículos 903 a 916 del Estatuto Tributario) que reemplaza el impuesto de renta por un impuesto unificado sobre los ingresos brutos e integra el ICA. Pueden entrar quienes tuvieron ingresos brutos inferiores a 100.000 UVT el año anterior ($5.237.400.000 en 2026).",
      },
      {
        question: "¿Un club deportivo sin ánimo de lucro paga impuesto de renta?",
        answer:
          "Si está calificado en el Régimen Tributario Especial, tributa al 20 % sobre el beneficio neto o excedente, y ese excedente queda exento si se destina al objeto social en el año siguiente (artículos 356 y 358 del Estatuto Tributario). La calificación se solicita a la DIAN y se actualiza cada año.",
      },
      {
        question: "¿Le hacen retención en la fuente a una escuela deportiva?",
        answer:
          "Solo cuando el cliente es agente de retención, como una empresa o un colegio. Para servicios, el artículo 392 del Estatuto Tributario fija 4 % para declarantes y 6 % para no declarantes. A los contribuyentes del régimen simple no se les practica retención por renta, salvo en pagos laborales (artículo 911).",
      },
    ],
  },
];
