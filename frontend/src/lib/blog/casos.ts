import type { BlogPost } from "../blog-posts";

/**
 * Casos de éxito REALES. Todas las cifras salen de la base de producción de
 * SportMaps con corte al 14 oct 2026. Los clientes autorizaron ser nombrados.
 * No alterar, no inflar, no agregar cifras ni citas que no estén en la base.
 */

const AUTHOR = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
};

const FUENTE = "Fuente: datos de la plataforma SportMaps, corte 14 oct 2026.";

export const casosPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Dynasty Volley Club — caso principal
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "caso-dynasty-volley-club-cobros-whatsapp-ia-facturacion",
    title:
      "Caso Dynasty Volley Club: 502 deportistas, $117,6 millones en pagos y comprobantes leídos por IA en WhatsApp",
    excerpt:
      "Cómo un club de voleibol de Bogotá organizó cobros, asistencia, carnets y facturación electrónica DIAN en SportMaps desde julio de 2026, con un asistente de WhatsApp que lee los comprobantes y los deja listos para aprobar.",
    category: "Casos de éxito",
    readTime: "8 min",
    date: "14 Oct 2026",
    isoDate: "2026-10-14",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Dynasty Volley Club es un club de voleibol de Bogotá que usa SportMaps desde el 28 de julio de 2026. Al 14 de octubre de 2026 gestiona 502 deportistas activos, lleva 756 pagos registrados por $117,6 millones, 455 comprobantes de pago leídos por inteligencia artificial, 2.666 asistencias, 494 carnets digitales y 334 facturas electrónicas aceptadas por la DIAN. Fue el primer club en conectar el asistente de WhatsApp de SportMaps a su propio número: el asistente lee el comprobante que manda la familia y deja el pago listo para que la escuela lo apruebe con un toque.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Dynasty concentró en una sola plataforma lo que antes vive repartido entre chats, hojas de cálculo y un proveedor de facturación aparte: cobros, comprobantes, asistencia, carnets y facturas DIAN. La IA hace el trabajo repetitivo de leer comprobantes; la decisión final de aprobar un pago sigue siendo de la escuela.",
      },
      { type: "h2", content: "Las cifras de Dynasty" },
      {
        type: "table",
        headers: ["Indicador", "Dato"],
        rows: [
          ["En SportMaps desde", "28 jul 2026"],
          ["Deportistas activos", "502"],
          ["Pagos registrados", "756"],
          ["Valor de esos pagos", "$117,6 millones COP"],
          ["Comprobantes leídos por la IA", "455"],
          ["Asistencias registradas", "2.666"],
          ["Carnets digitales emitidos", "494"],
          ["Facturas electrónicas aceptadas por la DIAN", "334"],
        ],
      },
      { type: "p", content: FUENTE },
      { type: "h2", content: "El club y su punto de partida" },
      {
        type: "p",
        content:
          "Dynasty es un club de voleibol con más de 500 deportistas activos. La atención presencial a las familias es de 4 a 9 p. m. en el coliseo, que es justamente cuando los entrenadores y el equipo administrativo están ocupados en la cancha. Eso crea un problema conocido para cualquier escuela de este tamaño: los papás pagan por transferencia a cualquier hora, mandan la foto del comprobante por WhatsApp y esperan una respuesta, mientras alguien del club tiene que abrir cada imagen, buscar al deportista, revisar el monto y marcar el pago.",
      },
      {
        type: "p",
        content:
          "Con cientos de familias, ese trabajo se vuelve una segunda jornada. Y cada comprobante sin revisar es una familia preguntando si su pago llegó, o un deportista que aparece como pendiente cuando ya pagó. A eso se suma la facturación electrónica: un club formal en Colombia necesita emitir facturas válidas ante la DIAN, y hacerlo a mano o en un sistema separado duplica la digitación.",
      },
      { type: "h2", content: "Qué hizo la escuela" },
      {
        type: "p",
        content:
          "Dynasty no cambió su forma de cobrar de un día para otro: llevó a SportMaps las piezas que ya tenía y conectó una con otra. Este es el orden lógico de lo que quedó funcionando:",
      },
      {
        type: "ol",
        items: [
          "Cargó a sus deportistas y sus cobros en SportMaps. Hoy son 502 deportistas activos, cada uno con su ficha y su estado de pago.",
          "Conectó su propio número de WhatsApp al asistente de SportMaps mediante el registro integrado de Meta. El número sigue siendo del club; fue el primer club en hacerlo.",
          "Dejó que el asistente recibiera los comprobantes: cuando una familia manda la foto de una transferencia, la IA lee el monto y la referencia, la cruza con el cobro pendiente y deja el pago listo para aprobar. Así se han leído 455 comprobantes.",
          "Mantuvo la aprobación en manos del equipo: alguien del club revisa lo que preparó la IA y aprueba con un toque. La auto-aprobación está apagada a propósito.",
          "Registró la asistencia en la plataforma: van 2.666 asistencias.",
          "Emitió los carnets digitales de sus deportistas: 494 carnets con código QR.",
          "Activó la facturación electrónica integrada: 334 facturas aceptadas por la DIAN salieron desde SportMaps, sin pasar los datos a otro sistema.",
        ],
      },
      { type: "h2", content: "Cómo funciona el asistente de WhatsApp en la práctica" },
      {
        type: "p",
        content:
          "El asistente no reemplaza al equipo del club; le quita la parte mecánica. Cuando llega un comprobante por WhatsApp, la IA hace tres cosas: lee la imagen (monto, fecha, referencia, banco), busca el cobro que corresponde a esa familia y responde que el comprobante fue recibido. El pago queda en una bandeja de revisión con la información ya extraída, y el club lo aprueba.",
      },
      {
        type: "p",
        content:
          "Los tiempos de respuesta están medidos sobre todas las escuelas que usan el asistente, no solo Dynasty: en 862 respuestas medidas, el asistente contesta mensajes de texto con una mediana de 20 segundos, y a los comprobantes de pago, que exigen leer la imagen y cruzarla con el cobro, responde con una mediana de 42 segundos; 9 de cada 10 comprobantes reciben respuesta en menos de 93 segundos. En total, el asistente ha gestionado 6.612 mensajes, de los cuales 773 fueron respuestas generadas por IA.",
      },
      {
        type: "table",
        headers: ["Asistente de WhatsApp (todas las escuelas)", "Dato"],
        rows: [
          ["Respuestas con tiempo medido", "862"],
          ["Mediana de respuesta a mensajes de texto", "20 s"],
          ["Mediana de respuesta a comprobantes de pago", "42 s"],
          ["Comprobantes respondidos en menos de 93 s", "9 de cada 10"],
          ["Mensajes gestionados en total", "6.612"],
          ["Mensajes generados por IA", "773"],
        ],
      },
      { type: "p", content: FUENTE },
      {
        type: "callout",
        variant: "info",
        content:
          "Para la familia la diferencia es concreta: manda el comprobante a las 10 de la noche y en menos de un minuto sabe que llegó y que está en revisión, en vez de esperar a que alguien del club abra el chat al día siguiente.",
      },
      { type: "h2", content: "Por qué la aprobación sigue siendo humana" },
      {
        type: "p",
        content:
          "Leer un comprobante no es lo mismo que confirmar que la plata llegó. Un comprobante puede ser una captura editada, una transferencia programada que no se ejecutó o un pago a otra cuenta. Por eso, en SportMaps la auto-aprobación de comprobantes está apagada a propósito: la IA prepara todo, pero el club decide. Para el equipo de Dynasty, aprobar es un toque sobre un pago que ya llega con el monto, el deportista y el cobro identificados; lo que se ahorra es buscar, digitar y cruzar.",
      },
      { type: "h2", content: "Facturación electrónica sin digitar dos veces" },
      {
        type: "p",
        content:
          "Las 334 facturas electrónicas aceptadas por la DIAN que hay en toda la plataforma al corte son de Dynasty. La factura sale del mismo pago que ya está registrado en SportMaps, así que los datos del cliente y el valor no se vuelven a digitar en otro programa. La integración con la facturación electrónica es gratis en todos los planes; lo que se paga es el paquete según la cantidad de facturas. El contador del club puede tener acceso en modo solo lectura para revisar el estado de las facturas.",
      },
      { type: "h2", content: "Asistencia y carnets" },
      {
        type: "p",
        content:
          "Con 2.666 asistencias registradas, el club tiene un historial de quién entrena y cuándo, ligado a la misma ficha donde está el estado de pago. Los 494 carnets digitales con QR identifican a cada deportista; se generan en lote y pueden descargarse en PDF por equipo, algo útil para torneos y para el control en la entrada del coliseo.",
      },
      { type: "h2", content: "Lo que todavía no está" },
      {
        type: "p",
        content:
          "Un caso honesto también dice lo que falta. Estas son las cosas que Dynasty no tiene, o que todavía no hace en SportMaps, al 14 de octubre de 2026:",
      },
      {
        type: "ul",
        items: [
          "La auto-aprobación de comprobantes está apagada a propósito. La IA lee y prepara; el club aprueba con un toque. No es un pendiente técnico, es una decisión de control.",
          "El cobro en línea con pasarela de pago todavía se está terminando de activar para el club; el flujo que hoy mueve sus pagos es transferencia más comprobante leído por IA.",
          "Las apps nativas para iPhone y Android están en pruebas, todavía sin publicar en App Store ni Google Play. Las familias usan SportMaps como app instalable desde el navegador (PWA).",
          "No usan la tienda en línea por ahora: la venta de uniformes no pasa por la plataforma.",
          "Cada escuela que quiera el asistente tiene que conectar su propio número con Meta. No es un número compartido de SportMaps.",
        ],
      },
      { type: "h2", content: "Qué puede copiar otra escuela de este caso" },
      {
        type: "ul",
        items: [
          "Empezar por el cuello de botella real. En Dynasty era la revisión de comprobantes, no la falta de reportes.",
          "Conectar el número de WhatsApp que las familias ya conocen, en vez de pedirles que escriban a otro.",
          "Dejar la aprobación del pago en una persona del equipo, con la información ya preparada.",
          "Sacar la factura electrónica del mismo registro del pago para no digitar dos veces.",
          "Si tu escuela es pequeña, no necesitas todo esto el primer mes: el asistente de WhatsApp está incluido en todos los planes, incluso en Free Start.",
        ],
      },
      {
        type: "cta",
        title: "Organiza tus cobros como Dynasty",
        description:
          "El asistente de WhatsApp que lee comprobantes y la integración de facturación electrónica vienen en todos los planes. Mira cuál se ajusta al tamaño de tu escuela.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "leer-comprobantes-de-pago-con-ia",
      "facturacion-electronica-escuelas-deportivas-dian",
      "software-clubes-de-voleibol",
    ],
    about: [
      "gestión de clubes de voleibol",
      "validación de comprobantes de pago con inteligencia artificial",
      "facturación electrónica DIAN",
      "WhatsApp Business para escuelas deportivas",
    ],
    mentions: ["Dynasty Volley Club", "WhatsApp", "Meta", "DIAN", "SportMaps"],
    faqs: [
      {
        question: "¿Qué es Dynasty Volley Club y desde cuándo usa SportMaps?",
        answer:
          "Es un club de voleibol de Bogotá que usa SportMaps desde el 28 de julio de 2026. Al 14 de octubre de 2026 tiene 502 deportistas activos y 756 pagos registrados por $117,6 millones en la plataforma.",
      },
      {
        question: "¿El asistente de WhatsApp de SportMaps aprueba los pagos solo?",
        answer:
          "No. El asistente lee el comprobante, extrae monto y referencia, lo cruza con el cobro y lo deja listo para aprobar. La auto-aprobación está apagada a propósito: la escuela revisa y aprueba con un toque.",
      },
      {
        question: "¿Qué tan rápido responde el bot de WhatsApp a un comprobante de pago?",
        answer:
          "Medido sobre todas las escuelas, con corte al 14 de octubre de 2026, la mediana de respuesta a comprobantes es de 42 segundos y 9 de cada 10 se responden en menos de 93 segundos. A mensajes de texto responde con una mediana de 20 segundos.",
      },
      {
        question: "¿Se puede facturar electrónicamente ante la DIAN desde SportMaps?",
        answer:
          "Sí. Dynasty Volley Club lleva 334 facturas electrónicas aceptadas por la DIAN emitidas desde SportMaps. La integración es gratis en todos los planes y se paga el paquete según la cantidad de facturas.",
      },
      {
        question: "¿Mi escuela tiene que usar un número de WhatsApp de SportMaps?",
        answer:
          "No. Cada escuela conecta su propio número con Meta mediante el registro integrado, y el número sigue siendo suyo. Dynasty fue el primer club en conectar el suyo.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. GYM RM — control de acceso con torniquetes ZKTeco
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "caso-gym-rm-control-de-acceso-torniquetes-zkteco",
    title:
      "Caso GYM RM: 12.181 accesos por torniquete ZKTeco con bloqueo automático por mora",
    excerpt:
      "GYM RM usa SportMaps desde mayo de 2026 para controlar quién entra con torniquetes ZKTeco conectados al estado de pago de cada deportista. Cifras reales, pasos y lo que todavía no tiene.",
    category: "Casos de éxito",
    readTime: "6 min",
    date: "14 Oct 2026",
    isoDate: "2026-10-14",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "GYM RM usa SportMaps desde el 16 de mayo de 2026 y conectó sus torniquetes ZKTeco a la plataforma: al 14 de octubre de 2026 lleva 12.181 accesos registrados, con bloqueo automático de la entrada cuando el deportista está en mora. Gestiona 128 deportistas activos y 315 pagos que suman $24,2 millones, y es el piloto de la tienda en línea de SportMaps.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "En un gimnasio la entrada es el punto donde se cruza el servicio con el pago. GYM RM conectó el torniquete al estado de cuenta: quien está al día entra; quien está en mora no pasa hasta ponerse al día, sin que nadie en recepción tenga que revisar una lista.",
      },
      { type: "h2", content: "Las cifras de GYM RM" },
      {
        type: "table",
        headers: ["Indicador", "Dato"],
        rows: [
          ["En SportMaps desde", "16 may 2026"],
          ["Deportistas activos", "128"],
          ["Pagos registrados", "315"],
          ["Valor de esos pagos", "$24,2 millones COP"],
          ["Accesos registrados por torniquete ZKTeco", "12.181"],
          ["Bloqueo de acceso por mora", "Activo"],
          ["Tienda en línea", "Piloto (adicional)"],
        ],
      },
      { type: "p", content: FUENTE },
      {
        type: "p",
        content:
          "Para dimensionar: los 12.181 accesos de GYM RM son la mayor parte de los 14.459 accesos por torniquete registrados en toda la plataforma al corte.",
      },
      { type: "h2", content: "El problema de la puerta" },
      {
        type: "p",
        content:
          "En un gimnasio o un centro de entrenamiento con horario abierto, la gente entra muchas veces por semana y a horas distintas. Si el control de entrada depende de que alguien en recepción reconozca a cada persona y recuerde si pagó, pasan dos cosas: se cuelan usuarios con la mensualidad vencida y recepción termina teniendo conversaciones incómodas de cobro en la puerta. Además, sin registro de entradas no hay forma de saber quién está usando el servicio y quién dejó de venir.",
      },
      { type: "h2", content: "Qué hizo la escuela" },
      {
        type: "ol",
        items: [
          "Registró a sus deportistas y sus cobros en SportMaps; hoy son 128 deportistas activos.",
          "Instaló torniquetes ZKTeco en la entrada y los conectó a SportMaps con el adicional de control de acceso.",
          "Asoció a cada deportista con su credencial en el torniquete, de modo que cada entrada queda registrada a su nombre.",
          "Activó el bloqueo automático por mora: el torniquete consulta el estado de pago y no abre si hay cobros vencidos.",
          "Registró los pagos en la plataforma (315 pagos por $24,2 millones), que es lo que alimenta el estado al día o en mora.",
          "Entró como piloto de la tienda en línea, el adicional para vender productos con cupones y compra sin cuenta.",
        ],
      },
      { type: "h2", content: "Cómo funciona el bloqueo por mora" },
      {
        type: "p",
        content:
          "El bloqueo no cancela al deportista ni lo da de baja: en SportMaps la mora no cancela automáticamente a nadie. Lo que hace es impedir el paso por el torniquete mientras haya un cobro vencido. Cuando el pago se registra o se aprueba, el estado cambia y el torniquete vuelve a abrir. La conversación de cobro deja de pasar en la puerta, frente a otras personas, y se vuelve una regla clara que el gimnasio define.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "El bloqueo es tan bueno como los pagos registrados. Si un pago en efectivo no se registra, el sistema ve una mora que no existe. Por eso conviene que todo pago, también el manual, quede en la plataforma el mismo día.",
      },
      { type: "h2", content: "Lo que todavía no está" },
      {
        type: "ul",
        items: [
          "El control de acceso es un adicional y requiere hardware ZKTeco compatible; no viene en los planes base.",
          "Los torniquetes de otras marcas no están integrados hoy.",
          "La tienda en línea está en piloto con GYM RM; es un adicional ($49.000 al mes, incluido en el plan Elite).",
          "Las apps nativas para iPhone y Android están en pruebas, todavía sin publicar en App Store ni Google Play; los usuarios usan la app instalable desde el navegador.",
          "El bloqueo depende de que los pagos manuales se registren a tiempo: el torniquete no puede saber de un pago que nadie anotó.",
        ],
      },
      { type: "h2", content: "Cuándo NO conviene este montaje" },
      {
        type: "p",
        content:
          "Si tu escuela entrena en una cancha abierta o en un colegio donde no controlas la entrada, un torniquete no tiene dónde ir. En ese caso la asistencia por escaneo de QR desde el celular del entrenador cumple la función de registrar quién vino, sin hardware. El torniquete tiene sentido cuando hay una puerta que controlas y mucha gente entrando a horas distintas, como en un gimnasio.",
      },
      {
        type: "cta",
        title: "Conecta tu entrada al estado de pago",
        description:
          "Conoce el adicional de control de acceso con torniquetes ZKTeco y los planes de SportMaps para escuelas y gimnasios.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "control-de-asistencia-con-qr-y-torniquetes",
      "tienda-online-escuela-deportiva-uniformes",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
    ],
    about: [
      "control de acceso con torniquetes",
      "gestión de gimnasios",
      "bloqueo de acceso por mora",
    ],
    mentions: ["GYM RM", "ZKTeco", "SportMaps"],
    faqs: [
      {
        question: "¿SportMaps se conecta con torniquetes ZKTeco?",
        answer:
          "Sí, con el adicional de control de acceso. GYM RM registra sus entradas con torniquetes ZKTeco conectados a SportMaps y al 14 de octubre de 2026 lleva 12.181 accesos registrados.",
      },
      {
        question: "¿Se puede bloquear la entrada al gimnasio si el usuario no ha pagado?",
        answer:
          "Sí. El torniquete consulta el estado de pago en SportMaps y no abre si hay cobros vencidos. Cuando el pago se registra o se aprueba, el acceso se habilita de nuevo.",
      },
      {
        question: "¿El bloqueo por mora da de baja al deportista?",
        answer:
          "No. En SportMaps la mora no cancela automáticamente a nadie. El bloqueo solo impide el paso por el torniquete mientras haya un cobro vencido.",
      },
      {
        question: "¿Necesito torniquetes para registrar la asistencia?",
        answer:
          "No. Si no controlas una puerta, puedes registrar la asistencia de forma manual o por escaneo de QR. El torniquete conviene cuando hay mucho flujo de entrada a horas distintas, como en un gimnasio.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Resumen de casos + cifras de la plataforma
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "escuelas-que-usan-sportmaps-en-bogota-casos-reales",
    title:
      "Escuelas que usan SportMaps en Bogotá y Colombia: casos reales con cifras (2026)",
    excerpt:
      "Besser, Dreamers Gymnastics, Carmel Club y Monster's Volley Club: qué usa cada una en SportMaps, con sus números reales, y las cifras de toda la plataforma al 14 de octubre de 2026.",
    category: "Casos de éxito",
    readTime: "7 min",
    date: "14 Oct 2026",
    isoDate: "2026-10-14",
    author: "Equipo SportMaps",
    authorRole: "SportMaps",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Varias escuelas y clubes de Bogotá usan SportMaps para cobrar, registrar asistencia y comunicarse con las familias. Entre ellas están el Club Deportivo Besser (78 deportistas activos e informe mensual a las familias), Dreamers Gymnastics (2.278 accesos por torniquete ZKTeco y banco de horas por niveles) y Monster's Volley Club (125 deportistas, piloto de contabilidad); también Carmel Club, con 100 deportistas y 1.549 asistencias. En total, al 14 de octubre de 2026 la plataforma gestiona 1.111 deportistas activos y 1.194 pagos por $184 millones.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Cada escuela usa una parte distinta de SportMaps según su problema: una el informe a las familias y los cobros automáticos, otra el control de acceso, otra la asistencia, otra la contabilidad. No hace falta activar todo el primer día.",
      },
      { type: "h2", content: "SportMaps en números" },
      {
        type: "table",
        headers: ["Indicador de la plataforma", "Dato"],
        rows: [
          ["Deportistas activos", "1.111"],
          ["Pagos registrados", "1.194"],
          ["Valor de esos pagos", "$184 millones COP"],
          ["Gestionado el mes pasado", "$52,4 millones COP"],
          ["Comprobantes leídos por la IA", "459"],
          ["Facturas electrónicas aceptadas por la DIAN", "334"],
          ["Accesos por torniquete", "14.459"],
          ["Asistencias registradas", "5.029"],
          ["Mensajes gestionados por el asistente de WhatsApp", "6.612"],
          ["Mediana de respuesta a comprobantes por WhatsApp", "42 s"],
        ],
      },
      { type: "p", content: FUENTE },
      { type: "h2", content: "Las escuelas, una por una" },
      {
        type: "table",
        headers: ["Escuela", "Deportistas", "Dato destacado", "Qué usa"],
        rows: [
          ["Dynasty Volley Club (Bogotá)", "502", "334 facturas DIAN", "Cobros, WhatsApp IA, asistencia, carnets, facturación"],
          ["GYM RM", "128", "12.181 accesos por torniquete", "Torniquetes ZKTeco con bloqueo por mora, tienda (piloto)"],
          ["Club Deportivo Besser (Bogotá)", "78", "720 asistencias", "Informe mensual, cobros por correo, catálogo de artículos"],
          ["Dreamers Gymnastics (Bogotá)", "—", "2.278 accesos por torniquete", "Torniquetes ZKTeco, banco de horas por niveles"],
          ["Carmel Club", "100", "1.549 asistencias", "Asistencia"],
          ["Monster's Volley Club (Bogotá)", "125", "Piloto de contabilidad", "Contabilidad"],
        ],
      },
      { type: "p", content: FUENTE },
      { type: "h3", content: "Club Deportivo Besser (Bogotá)" },
      {
        type: "p",
        content:
          "Besser usa SportMaps desde el 5 de septiembre de 2026. Empezó importando 69 atletas y hoy tiene 78 deportistas activos y 720 asistencias registradas. Envía a las familias el informe mensual del atleta, tiene activos desde el 5 de octubre los correos automáticos de cobro y usa el catálogo de artículos escolares, la alternativa liviana a una tienda completa: el artículo se suma al cobro de la mensualidad.",
      },
      { type: "h3", content: "Dreamers Gymnastics (Bogotá)" },
      {
        type: "p",
        content:
          "Dreamers es una escuela de gimnasia que controla la entrada con torniquetes ZKTeco conectados a SportMaps: lleva 2.278 accesos registrados. Trabaja con banco de horas por niveles, de modo que cada gimnasta tiene sus horas según el nivel en el que está.",
      },
      { type: "h3", content: "Carmel Club" },
      {
        type: "p",
        content:
          "Carmel Club tiene 100 deportistas y 1.549 asistencias registradas en SportMaps. Es el ejemplo de una escuela que empezó por lo básico: saber quién vino a cada entrenamiento, con el historial en la ficha de cada deportista.",
      },
      { type: "h3", content: "Monster's Volley Club (Bogotá)" },
      {
        type: "p",
        content:
          "Monster's Volley Club tiene 125 deportistas y es el piloto del módulo de contabilidad, que registra ingresos y egresos y hace el cierre de mes. La contabilidad es un adicional, incluido en el plan Elite.",
      },
      { type: "h2", content: "Qué hicieron estas escuelas" },
      {
        type: "ol",
        items: [
          "Cargaron a sus deportistas. Besser, por ejemplo, importó 69 atletas al empezar.",
          "Eligieron el problema más urgente: cobros y comunicación con las familias en Besser, control de acceso en Dreamers, asistencia en Carmel, contabilidad en Monster's.",
          "Activaron solo los módulos que necesitaban para ese problema, y los adicionales donde tenía sentido (torniquetes, contabilidad).",
          "Empezaron a registrar el día a día en la plataforma: asistencias, accesos y pagos.",
          "Sumaron funciones cuando lo anterior ya andaba, como los correos automáticos de cobro que Besser activó un mes después de empezar.",
        ],
      },
      { type: "h2", content: "Lo que todavía no está" },
      {
        type: "ul",
        items: [
          "La auto-aprobación de comprobantes está apagada a propósito: la IA lee y prepara el pago, y la escuela aprueba con un toque.",
          "Las apps nativas para iPhone y Android están en pruebas, todavía sin publicar en App Store ni Google Play; SportMaps se usa como app instalable desde el navegador (PWA).",
          "Torniquetes, contabilidad, tienda en línea y torneos son adicionales; no vienen en todos los planes.",
          "La contabilidad está en piloto con Monster's Volley Club.",
          "SportMaps opera solo en Colombia y en pesos colombianos.",
        ],
      },
      {
        type: "cta",
        title: "Empieza por tu problema más urgente",
        description:
          "Free Start es gratis hasta 20 alumnos e incluye el asistente de WhatsApp. Compara los planes y los adicionales.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "software-escuelas-deportivas-bogota",
      "informe-mensual-del-deportista-para-padres",
      "software-escuelas-de-gimnasia",
    ],
    about: [
      "software de gestión para escuelas deportivas",
      "escuelas deportivas en Bogotá",
      "casos de uso de SportMaps",
    ],
    mentions: [
      "Club Deportivo Besser",
      "Dreamers Gymnastics",
      "Carmel Club",
      "Monster's Volley Club",
      "Dynasty Volley Club",
      "GYM RM",
      "ZKTeco",
      "DIAN",
    ],
    faqs: [
      {
        question: "¿Qué escuelas usan SportMaps en Bogotá?",
        answer:
          "Entre otras, Dynasty Volley Club, Club Deportivo Besser, Dreamers Gymnastics y Monster's Volley Club, todas en Bogotá. También la usan GYM RM y Carmel Club.",
      },
      {
        question: "¿Cuántos deportistas gestiona SportMaps?",
        answer:
          "Al 14 de octubre de 2026, la plataforma tiene 1.111 deportistas activos y 1.194 pagos registrados por $184 millones. El mes pasado se gestionaron $52,4 millones.",
      },
      {
        question: "¿Puedo importar mis atletas desde una lista al empezar?",
        answer:
          "Sí. El Club Deportivo Besser importó 69 atletas al empezar en septiembre de 2026 y hoy tiene 78 deportistas activos.",
      },
      {
        question: "¿SportMaps sirve para gimnasia con banco de horas?",
        answer:
          "Sí. Dreamers Gymnastics trabaja con banco de horas por niveles y controla la entrada con torniquetes ZKTeco; lleva 2.278 accesos registrados.",
      },
      {
        question: "¿SportMaps tiene contabilidad?",
        answer:
          "Sí, como adicional incluido en el plan Elite: ingresos, egresos y cierre de mes. Al 14 de octubre de 2026 está en piloto con Monster's Volley Club.",
      },
    ],
  },
];
