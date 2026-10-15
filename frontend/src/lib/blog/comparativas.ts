import type { BlogPost } from "../blog-posts";

/**
 * Cluster «comparativas» (fondo de embudo).
 *
 * Regla de verdad: de los competidores solo se cita lo que ellos publican,
 * con la URL y la fecha de consulta. Precios de SportMaps = brief 2026-10-14.
 */
export const comparativasPosts: BlogPost[] = [
  // ── SportMaps vs Controla.Club ─────────────────────────────────────────────
  {
    slug: "sportmaps-vs-controla-club",
    title: "SportMaps vs Controla.Club (2026): precios verificados y qué incluye cada uno",
    excerpt:
      "Comparativa factual con precios verificados el 14 de octubre de 2026: qué incluye cada plan de SportMaps, qué publica Controla.Club sobre sí mismo, dónde gana cada uno y qué datos sobre SportMaps que circulan ya no son ciertos.",
    category: "Comparativas",
    readTime: "9 min",
    date: "14 Oct 2026",
    isoDate: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "SportMaps y Controla.Club son dos softwares colombianos para administrar escuelas y clubes deportivos. La diferencia práctica, con precios verificados el 14 de octubre de 2026: SportMaps tiene un plan gratis hasta 20 alumnos y planes pagos desde $69.000 al mes (hasta 50 alumnos), y en todos ellos incluye WhatsApp con IA, Wompi y Mercado Pago, facturación electrónica sin costo de integración, staff ilimitado y página web de la escuela. Controla.Club publica un plan de entrada de $99.000 al mes hasta 50 alumnos y es más fuerte en control de acceso tipo gimnasio, reservas de canchas (Controla Cancha) y red social entre clubes.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si diriges una escuela formativa con niños, acudientes, categorías y mensualidades, compara primero cuánto te cuesta cobrar: en SportMaps el asistente de WhatsApp, las pasarelas y la facturación electrónica vienen en todos los planes. Si tu negocio es un gimnasio con torniquete y paquetes de sesiones, o una cancha sintética que vive de reservas, Controla.Club tiene productos pensados para eso.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Por qué escribimos esto: Controla.Club publicó una comparativa contra nosotros (controla.club/blog/controlaclub-vs-sportmaps, fechada el 18 de julio de 2026) y un archivo para buscadores de IA (controla.club/llms-faq.txt) con planes y condiciones de SportMaps que hoy no son los vigentes. No es un reproche: los precios cambian. Aquí dejamos los datos actuales con fecha para que cualquiera pueda verificarlos.",
      },
      { type: "h2", content: "Precios de SportMaps vigentes (14 de octubre de 2026)" },
      {
        type: "table",
        headers: ["Plan", "Mensual", "Pago anual (por mes)", "Alumnos"],
        rows: [
          ["Free Start", "$0", "—", "Hasta 20"],
          ["Escuela Start", "$69.000", "$59.000", "Hasta 50"],
          ["Escuela Crecimiento", "$99.000", "$89.000", "Hasta 120"],
          ["Escuela Pro", "$159.000", "$139.000", "Hasta 300"],
          ["Escuela Elite", "$349.000", "$299.000", "Hasta 800"],
          ["Custom", "Desde $750.000", "—", "Ilimitados"],
        ],
      },
      {
        type: "p",
        content:
          "Lo que viene en todos los planes, incluido el gratuito, desde el 14 de octubre de 2026:",
      },
      {
        type: "ul",
        items: [
          "WhatsApp con IA gratis: el asistente lee los comprobantes que mandan las familias, extrae monto y referencia, los cruza contra el cobro y responde. SportMaps no cobra el asistente ni vende paquetes de conversaciones. WhatsApp da 1.000 conversaciones de servicio gratis al mes por número; si la escuela se excede, Meta le cobra el excedente directo a su tarjeta. El número es de la escuela.",
          "Wompi y Mercado Pago integrados: PSE, Nequi, tarjetas, Bancolombia y billetera de Mercado Pago. La plata llega directo a la cuenta de la escuela y SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela.",
          "Facturación electrónica DIAN: la integración no tiene costo; la escuela paga solo el paquete de facturas que use. El contador puede tener acceso para revisar el estado de las facturas.",
          "Entrenadores y staff ilimitados (coaches, administradores, recepción) con roles y permisos.",
          "Página web de la escuela: con dominio propio, o una genérica de SportMaps si no tienes dominio.",
          "Registro de pagos manuales (efectivo o transferencia) con su comprobante.",
        ],
      },
      {
        type: "p",
        content:
          "Lo que sí cambia entre planes es el número de alumnos y de sedes: Start maneja 1 sede, Crecimiento 2, Pro 3 y Elite sedes ilimitadas. La asistencia con QR está desde Escuela Start; en Free Start la asistencia es manual.",
      },
      { type: "h2", content: "Qué publica Controla.Club sobre sus precios" },
      {
        type: "p",
        content:
          "Citamos solo sus fuentes públicas, consultadas el 14 de octubre de 2026. Su página de inicio no muestra una tabla de precios; los valores aparecen en estos lugares:",
      },
      {
        type: "table",
        headers: ["Fuente de Controla.Club", "Lo que dice"],
        rows: [
          ["llms-faq.txt (controla.club/llms-faq.txt)", "Plan inicial desde $99.000 COP/mes hasta 50 alumnos; Plan Pro $199.000 COP/mes hasta 300 alumnos; Enterprise a medida; 7 días gratis sin tarjeta"],
          ["llms-full.txt (controla.club/llms-full.txt)", "Starter $99.000 hasta 50 miembros; Growth (50–200) y Pro (200+) con precio «Custom»; «todas las funciones incluidas en cada plan»"],
          ["Datos estructurados (schema.org) de controla.club", "Oferta de $500 COP «por deportista activo al mes», con «acompañamiento en la configuración y soporte por WhatsApp»"],
          ["Blog: Controla Cancha (10 oct 2026)", "Reservas de canchas por WhatsApp con IA: crear la sede es gratis; el plan, al conectar el WhatsApp, desde $149.000 al mes sin comisión por reserva"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Sus propias fuentes no coinciden entre sí (por ejemplo, $99.000 al mes en el texto frente a $500 por deportista activo en los datos estructurados, y un plan Pro de $199.000 en un archivo y «Custom» en otro). Antes de decidir, pídeles una cotización escrita para tu número real de alumnos.",
      },
      { type: "h2", content: "Comparativa lado a lado" },
      {
        type: "table",
        headers: ["Tema", "SportMaps (verificado 14 oct 2026)", "Controla.Club (según sus fuentes públicas)"],
        rows: [
          ["Plan gratis permanente", "Sí, Free Start hasta 20 alumnos", "No publica; ofrece 7 días de prueba"],
          ["Hasta 50 alumnos", "$69.000/mes ($59.000 en pago anual)", "$99.000/mes"],
          ["Hasta 120 alumnos", "$99.000/mes", "No publica un plan con ese tope"],
          ["Hasta 300 alumnos", "$159.000/mes", "$199.000/mes (llms-faq) o «Custom» (llms-full)"],
          ["Wompi / PSE / Nequi", "En todos los planes, incluido el gratis", "Dice incluirlos desde el plan inicial"],
          ["Mercado Pago", "En todos los planes", "Lo lista entre sus integraciones"],
          ["WhatsApp con IA", "Gratis en todos los planes; lee y cruza comprobantes", "Recordatorios automáticos por WhatsApp y asistente Controli"],
          ["Facturación electrónica DIAN", "Integración sin costo; pagas solo el paquete de facturas", "La lista en sus funciones (llms-full); no publica su costo"],
          ["Staff y entrenadores", "Ilimitados en todos los planes", "Dice no cobrar usuarios extra"],
          ["Control de acceso físico", "Torniquetes y biométricos ZKTeco como adicional", "QR y biométrico; suspende acceso al moroso"],
          ["Reservas de canchas", "Reservas de instalaciones dentro de la plataforma", "Producto aparte: Controla Cancha, desde $149.000/mes"],
          ["Red social entre clubes", "No", "Sí, Social Controla"],
        ],
      },
      { type: "h2", content: "Dónde gana Controla.Club" },
      {
        type: "ul",
        items: [
          "Control de acceso tipo gimnasio: planes ilimitados, paquetes de sesiones con saldo, validación por QR y biométricos, y suspensión de la entrada cuando la membresía está vencida. Si tu negocio es un gimnasio o un box de CrossFit, ese enfoque les juega a favor.",
          "Controla Cancha: un producto dedicado a canchas sintéticas que responde reservas por WhatsApp con IA, pide el abono y valida el comprobante. Si vendes horas de cancha, es más específico que un módulo de reservas dentro de un software de escuelas.",
          "Social Controla: una red social con perfiles, foros y reputación entre clubes, entrenadores y deportistas. SportMaps no tiene algo equivalente.",
          "Otras funciones que publican y nosotros no tenemos: gamificación con puntos (ClubPoints), Radar del Club (auditor con IA de riesgo de deserción), prospección por WhatsApp con IA y multimoneda para operar en varios países.",
        ],
      },
      { type: "h2", content: "Dónde gana SportMaps" },
      {
        type: "ul",
        items: [
          "Precio de entrada y plan gratis: una escuela que arranca con 20 alumnos paga $0, y con 50 alumnos paga $69.000 al mes, o $59.000 en pago anual.",
          "Cobro sin costos escondidos de SportMaps: el asistente de WhatsApp, las dos pasarelas y la integración de facturación electrónica vienen en todos los planes. Lo único que se paga aparte son las tarifas de la pasarela, el paquete de facturas y, si te excedes de las 1.000 conversaciones gratis al mes, a Meta.",
          "Pensado para la escuela formativa: acudientes vinculados a cada atleta, categorías por edad, equipos, inscripción una sola vez más mensualidad, recargo por mora opcional que define la escuela y sin cancelar automáticamente al atleta que se atrasa.",
          "Herramientas para el entrenador: pizarra táctica (hoy para fútbol; más deportes en camino), planificación por mesociclos y sesiones, evaluaciones físicas y autoevaluación post-entreno.",
          "Para las familias: carnet digital con QR, calendario y avisos con notificación push, informe mensual del atleta por correo y app instalable en el celular.",
          "Operación completa: tienda de la escuela con cupones y compra sin cuenta, contabilidad con cierre de mes, torneos (adicional) y profesionales de salud vinculados.",
        ],
      },
      { type: "h2", content: "Cómo decidir en 5 pasos" },
      {
        type: "ol",
        items: [
          "Cuenta tus alumnos activos hoy y los que esperas en 12 meses. Con eso ubicas el plan en cada proveedor.",
          "Pide por escrito el precio total a cada uno: plan, pasarela, WhatsApp, facturación electrónica y cualquier adicional.",
          "Define tu negocio principal: escuela con mensualidades, gimnasio con acceso o cancha con reservas. Cada producto brilla en uno distinto.",
          "Prueba el cobro de punta a punta con un acudiente real: enlace de pago, comprobante por WhatsApp y registro del pago.",
          "Revisa quién es dueño del número de WhatsApp y de la cuenta de la pasarela. En SportMaps ambos quedan a nombre de la escuela.",
        ],
      },
      { type: "h2", content: "Sobre los cálculos de retorno que circulan" },
      {
        type: "p",
        content:
          "La comparativa de Controla.Club incluye un cálculo anual en el que atribuye a SportMaps una reducción de morosidad de «~30%» y a ellos «hasta 40%». SportMaps no publica un porcentaje de reducción de morosidad, porque depende de cada escuela: de cuánto cobra, de cómo pagan sus familias y de qué tan firme es su política de cobro. Desconfía de cualquier ROI que no venga de tus propios números. Lo que sí puedes medir antes de contratar es el costo fijo de cada opción y cuánto tiempo te toma hoy cobrar y conciliar.",
      },
      {
        type: "cta",
        title: "Mira la comparación completa con Controla.Club",
        description:
          "Tabla detallada, escenarios por tamaño de escuela y preguntas frecuentes, con precios verificados.",
        href: "/comparar/controla-club",
        label: "Ver SportMaps vs Controla.Club",
      },
    ],
    related: [
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "mejor-software-gestion-deportiva-colombia-2026",
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
    ],
    about: [
      "software de gestión de escuelas deportivas",
      "comparativa SportMaps vs Controla.Club",
      "precios de software deportivo en Colombia",
    ],
    mentions: ["SportMaps", "Controla.Club", "Controla Cancha", "Wompi", "Mercado Pago", "WhatsApp", "Meta", "DIAN", "ZKTeco"],
    faqs: [
      {
        question: "¿Es cierto que el plan Start de SportMaps solo cubre 20 alumnos?",
        answer:
          "No. Escuela Start cuesta $69.000 al mes ($59.000 en pago anual) y cubre hasta 50 alumnos. El de 20 alumnos es Free Start, que cuesta $0. Precios verificados el 14 de octubre de 2026.",
      },
      {
        question: "¿Es cierto que SportMaps solo integra Wompi desde el plan Pro o Crecimiento?",
        answer:
          "No. Wompi y Mercado Pago (PSE, Nequi, tarjetas, Bancolombia y billetera de Mercado Pago) están en todos los planes, incluido el gratuito. SportMaps no cobra comisión por la integración; solo aplican las tarifas de la pasarela y la plata llega directo a la cuenta de la escuela.",
      },
      {
        question: "¿Es cierto que SportMaps cobra el WhatsApp con IA aparte?",
        answer:
          "No. El asistente de WhatsApp que lee comprobantes y responde a las familias es gratis en todos los planes y SportMaps no vende paquetes de conversaciones. WhatsApp da 1.000 conversaciones de servicio gratis al mes por número; solo si la escuela se excede, Meta le cobra el excedente directo a su tarjeta.",
      },
      {
        question: "¿Es cierto que SportMaps exige el plan Elite para manejar varias sedes?",
        answer:
          "No. Escuela Crecimiento ($99.000) maneja 2 sedes, Escuela Pro ($159.000) maneja 3 y Escuela Elite ($349.000) sedes ilimitadas. Escuela Start maneja una sede.",
      },
      {
        question: "¿Es cierto que el soporte de SportMaps es solo en horario comercial?",
        answer:
          "El asistente de WhatsApp atiende a las familias de forma automática a cualquier hora: recibe comprobantes, los cruza con el cobro y responde. El soporte para la escuela lo da por WhatsApp y en español un equipo en Colombia.",
      },
      {
        question: "¿Cuál es más barato para una escuela de 50 alumnos, SportMaps o Controla.Club?",
        answer:
          "Con los precios públicos al 14 de octubre de 2026, SportMaps Escuela Start cuesta $69.000 al mes ($59.000 en pago anual) y el plan inicial de Controla.Club, $99.000 al mes, ambos hasta 50 alumnos. Pide a cada uno el costo total con pasarela, WhatsApp y facturación electrónica.",
      },
    ],
  },

  // ── Alternativas a Clupik ──────────────────────────────────────────────────
  {
    slug: "alternativas-a-clupik-colombia",
    title: "Alternativas a Clupik en Colombia (2026): precios públicos y cuándo conviene cada una",
    excerpt:
      "Clupik es una plataforma sólida para clubes, ligas y federaciones. Si buscas otra opción en Colombia, aquí están las alternativas con precio público, qué incluye cada una y cuándo conviene quedarse en Clupik.",
    category: "Comparativas",
    readTime: "8 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Las alternativas a Clupik con precio público en pesos colombianos son SportMaps (plan gratis hasta 20 alumnos y planes desde $69.000 al mes), Controla.Club (desde $99.000 al mes hasta 50 alumnos) y GOLAPP (desde $150.000 al mes hasta 200 deportistas). Clupik, por su parte, tiene plan gratis hasta 50 deportistas, Pro entre $200.000 y $220.000 al mes y Élite entre $470.000 y $520.000 al mes, con la app de marca propia y Mercado Pago como cargos aparte. La mejor alternativa depende de si tu prioridad es cobrar mensualidades, manejar competiciones o tener una app con tu escudo.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Quédate en Clupik si manejas ligas, competiciones o una federación y te sirve su web y tienda. Si eres una escuela formativa en Colombia que vive de mensualidades y quiere cobrar por Wompi o Mercado Pago sin pagar cargos de integración, compara SportMaps. Si tu escuela es pequeña y solo necesitas inscripciones, asistencia y pagos, GOLAPP también es una opción local.",
      },
      { type: "h2", content: "Qué publica Clupik en su página de precios para Colombia" },
      {
        type: "p",
        content:
          "Consultamos clupik.com/precios el 8 de octubre de 2026. La página se titula «Precios Colombia» y muestra dos cifras por plan sin rotularlas; la más baja parece corresponder al pago anual, porque la página dice que pagar anual ahorra «más de un 10%».",
      },
      {
        type: "table",
        headers: ["Plan Clupik", "Precio publicado", "Límites", "Cargos aparte publicados"],
        rows: [
          ["Free", "Gratis", "1 deporte; 3 equipos o 50 deportistas; 1 administrador", "App personalizada no disponible; Mercadopago $90.000/mes"],
          ["Pro", "$200.000 – $220.000/mes", "2 deportes; 20 equipos o 300 deportistas; 2 administradores", "App personalizada $245.000/mes; Mercadopago $75.000/mes"],
          ["Élite", "$470.000 – $520.000/mes", "5 deportes; 35 equipos o 800 deportistas; administradores ilimitados", "App personalizada $245.000/mes; Mercadopago $60.000/mes"],
          ["Custom", "Contáctanos", "Deportes, equipos y deportistas ilimitados", "Consulta"],
        ],
      },
      {
        type: "p",
        content:
          "Clupik se presenta como «el software deportivo que usan +3.000 clubes y federaciones en +25 países». Incluye página web del club, app móvil estándar, inscripciones, contabilidad, gestión de competiciones, entrenamientos, convocatorias y asistencias, y tienda online (5 productos en Pro, ilimitados en Élite).",
      },
      { type: "h2", content: "Las alternativas con precio público" },
      {
        type: "table",
        headers: ["Opción", "Entrada", "Para ~300 alumnos", "Pasarela", "Ideal para"],
        rows: [
          ["Clupik", "Gratis (50 deportistas)", "$200.000 – $220.000 (Pro) + cargos aparte", "Mercadopago con cargo mensual; Clupik Pay con comisión según país", "Clubes, ligas y federaciones con competiciones"],
          ["SportMaps", "Gratis (20 alumnos); $69.000 (50)", "$159.000 (Escuela Pro)", "Wompi y Mercado Pago en todos los planes, sin cargo de integración", "Escuelas formativas con mensualidades y acudientes"],
          ["Controla.Club", "$99.000 (50 alumnos)", "$199.000 según su llms-faq.txt", "Wompi, PSE, Nequi, Daviplata y Mercado Pago según sus fuentes", "Gimnasios, academias con control de acceso, canchas"],
          ["GOLAPP", "$150.000 (200 deportistas)", "$220.000 (Estándar, 400)", "No detalla pasarelas en su página", "Escuelas de fútbol base que solo necesitan lo esencial"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Precios de terceros tomados de sus sitios: clupik.com/precios y golapp.com.co (8 de octubre de 2026) y controla.club/llms-faq.txt. Pueden cambiar; confírmalos con cada proveedor antes de firmar.",
      },
      { type: "h3", content: "SportMaps" },
      {
        type: "p",
        content:
          "Software colombiano para escuelas deportivas. En todos los planes, incluido el gratis, trae WhatsApp con IA que lee los comprobantes de las familias y los cruza con el cobro, Wompi y Mercado Pago integrados, facturación electrónica DIAN sin costo de integración, entrenadores y staff ilimitados y página web de la escuela. Planes: Free Start $0 (20 alumnos), Escuela Start $69.000 (50), Crecimiento $99.000 (120), Pro $159.000 (300), Elite $349.000 (800) y Custom desde $750.000. El pago anual baja el precio mensual (por ejemplo, Pro queda en $139.000).",
      },
      {
        type: "p",
        content:
          "Lo que no tiene frente a Clupik: app nativa con el nombre y el escudo del club publicada en las tiendas (SportMaps es una app instalable desde el navegador) y un módulo de federaciones. A cambio, suma pizarra táctica, planificación por mesociclos, carnets digitales con QR, informe mensual para los papás y tienda con cupones.",
      },
      { type: "h3", content: "Controla.Club" },
      {
        type: "p",
        content:
          "También colombiano. Según sus fuentes públicas, su plan inicial cuesta $99.000 al mes hasta 50 alumnos, con 7 días de prueba sin tarjeta, recordatorios por WhatsApp, asistente Controli, gamificación ClubPoints y control de acceso por QR y biométrico. Tiene un producto aparte para canchas (Controla Cancha, desde $149.000 al mes) y una red social entre clubes. Es fuerte si tu operación se parece a un gimnasio. Ojo: sus propios documentos muestran precios distintos para el mismo servicio, así que pide cotización escrita.",
      },
      { type: "h3", content: "GOLAPP" },
      {
        type: "p",
        content:
          "Nació en Medellín en 2018 y está enfocado en escuelas de fútbol base. Publica tres planes: Básico $150.000 al mes (200 deportistas), Estándar $220.000 (400) y Premium $320.000 (700 o más), con descuento semestral y anual. Incluye inscripciones online con formulario para acudientes, asistencia por grupos, registro de competencias, control de pagos, portal para acudientes y avisos de atraso por correo. Es simple y claro; no publica WhatsApp con IA ni facturación electrónica.",
      },
      { type: "h3", content: "Excel y grupos de WhatsApp" },
      {
        type: "p",
        content:
          "Para una escuela de menos de 20 alumnos con un solo entrenador puede bastar por un tiempo. El problema llega con el cobro: conciliar transferencias a mano, perseguir comprobantes y no tener historial por atleta. Lo explicamos con detalle en nuestra guía Excel vs software.",
      },
      { type: "h2", content: "Elige según tu caso" },
      {
        type: "ul",
        items: [
          "Elige Clupik si administras una liga, un torneo recurrente o una federación, necesitas competiciones con resultados y estadísticas, o quieres una app nativa con tu escudo y puedes pagar el adicional.",
          "Elige SportMaps si eres una escuela formativa que cobra mensualidades a acudientes en Colombia y quieres que el WhatsApp con IA, Wompi, Mercado Pago y la facturación electrónica vengan incluidos desde el plan gratis.",
          "Elige Controla.Club si tu negocio es un gimnasio, un box o una academia que controla la entrada en portería, o si además administras canchas por reserva.",
          "Elige GOLAPP si eres una escuela de fútbol base que solo necesita inscripciones, asistencia y control de pagos con avisos por correo.",
        ],
      },
      { type: "h2", content: "Cómo migrar desde Clupik sin perder información" },
      {
        type: "ol",
        items: [
          "Exporta desde Clupik tu base de deportistas con documento, fecha de nacimiento, categoría y datos del acudiente.",
          "Saca un corte de quién está al día y quién debe a una fecha fija (por ejemplo, el último día del mes).",
          "Carga a los atletas en el nuevo sistema y revisa que cada uno quede en su categoría y equipo.",
          "Configura la inscripción y la mensualidad, y conecta la pasarela a nombre de la escuela.",
          "Avisa a las familias con una semana de anticipación y manda el primer enlace de pago desde el sistema nuevo.",
          "Mantén Clupik en modo lectura un mes por si necesitas consultar historial.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cambia de sistema al inicio de un periodo de cobro, nunca a mitad de mes. Si cambias a mitad, vas a tener familias que pagaron en un sistema y aparecen como deudoras en el otro.",
      },
      {
        type: "cta",
        title: "Compara con los precios de SportMaps",
        description:
          "Plan gratis hasta 20 alumnos. WhatsApp con IA, Wompi, Mercado Pago y facturación electrónica en todos los planes.",
        href: "/planes",
        label: "Ver planes y precios",
      },
    ],
    related: [
      "sportmaps-vs-clupik-academias-colombia",
      "cuanto-cuesta-software-escuela-deportiva-2026",
      "excel-vs-software-escuela-deportiva",
    ],
    about: [
      "alternativas a Clupik",
      "software para clubes deportivos en Colombia",
      "precios de software de gestión deportiva",
    ],
    mentions: ["Clupik", "SportMaps", "Controla.Club", "GOLAPP", "Wompi", "Mercado Pago", "WhatsApp"],
    faqs: [
      {
        question: "¿Cuánto cuesta Clupik en Colombia?",
        answer:
          "Según clupik.com/precios (consultado el 8 de octubre de 2026), Clupik tiene un plan Free hasta 50 deportistas, Pro entre $200.000 y $220.000 al mes y Élite entre $470.000 y $520.000 al mes. La app personalizada cuesta $245.000 al mes aparte y Mercadopago figura con un cargo de $60.000 a $90.000 al mes según el plan.",
      },
      {
        question: "¿Cuál es la mejor alternativa a Clupik para una escuela de fútbol en Colombia?",
        answer:
          "Depende de qué necesitas. Si vives de mensualidades y quieres cobrar por Wompi o Mercado Pago con WhatsApp con IA incluido, SportMaps cuesta desde $0 (20 alumnos) o $69.000 al mes (50). Si solo necesitas inscripciones, asistencia y pagos, GOLAPP publica planes desde $150.000 al mes hasta 200 deportistas.",
      },
      {
        question: "¿Hay una alternativa gratis a Clupik?",
        answer:
          "Sí. SportMaps Free Start es gratis hasta 20 alumnos e incluye WhatsApp con IA, Wompi, Mercado Pago, facturación electrónica sin costo de integración y página web de la escuela. Clupik también tiene un plan Free hasta 50 deportistas, aunque sin app personalizada.",
      },
      {
        question: "¿Puedo pasar mis datos de Clupik a otro software?",
        answer:
          "Sí. Exporta la base de deportistas con sus acudientes y un corte de pagos a una fecha fija, cárgalos en el nuevo sistema y haz el cambio al inicio de un periodo de cobro. Conserva el acceso a Clupik un mes para consultar historial.",
      },
      {
        question: "¿Cuándo conviene quedarse en Clupik?",
        answer:
          "Cuando administras ligas, competiciones o una federación, cuando necesitas una app nativa con tu escudo en las tiendas, o cuando tu equipo ya trabaja bien con la herramienta y el costo total te funciona.",
      },
    ],
  },

  // ── Excel vs software ──────────────────────────────────────────────────────
  {
    slug: "excel-vs-software-escuela-deportiva",
    title: "Excel vs software para una escuela deportiva: cuándo cambiar y cuánto te cuesta no hacerlo",
    excerpt:
      "Excel sirve para empezar. Esta guía te muestra en qué momento empieza a costarte plata, qué hace un software que una hoja no puede hacer y cómo pasar de uno a otro en una semana.",
    category: "Guías",
    readTime: "8 min",
    date: "2 Oct 2026",
    isoDate: "2026-10-02",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Excel alcanza para una escuela deportiva de pocos alumnos, un solo entrenador y pagos en efectivo. Deja de alcanzar cuando cobras por transferencia a muchas familias, tienes más de una persona tocando la hoja o necesitas saber al instante quién está al día. En ese punto un software te ahorra conciliar comprobantes a mano, mandar recordatorios uno por uno y perder historial. Y no tiene que costar más: hay planes gratis para escuelas pequeñas.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tienes menos de 20 alumnos y cobras en efectivo, Excel funciona. Si tus familias pagan por transferencia, Nequi o PSE, o si más de una persona registra pagos, el tiempo que pierdes cuadrando comprobantes ya vale más que un software. SportMaps Free Start cuesta $0 hasta 20 alumnos, así que puedes probar sin arriesgar plata.",
      },
      { type: "h2", content: "Lo que Excel hace bien" },
      {
        type: "ul",
        items: [
          "Es gratis o ya lo pagas, y todo el mundo sabe usarlo.",
          "Es flexible: armas las columnas que quieras.",
          "Para una lista de 15 niños y un cuaderno de asistencia, es suficiente.",
        ],
      },
      { type: "h2", content: "Dónde Excel empieza a costarte" },
      {
        type: "p",
        content:
          "El costo de Excel no está en la licencia sino en las horas y en la plata que se escapa. Estas son las señales más comunes:",
      },
      {
        type: "ul",
        items: [
          "Recibes comprobantes por WhatsApp y tienes que abrir la app del banco para confirmar cada uno.",
          "Una familia dice que ya pagó y no encuentras el pago, o lo encuentras en otra pestaña.",
          "El recordatorio de la mensualidad lo mandas tú, uno por uno, cada mes.",
          "Dos personas editan la hoja y una sobrescribe a la otra.",
          "No sabes cuánto te deben hoy sin sentarte media hora a sumar.",
          "La hoja con nombres, documentos y teléfonos de menores circula por correo o WhatsApp sin control de quién la ve.",
        ],
      },
      { type: "h2", content: "Excel vs software, punto por punto" },
      {
        type: "table",
        headers: ["Tarea", "Excel + WhatsApp", "Software de gestión (ejemplo: SportMaps)"],
        rows: [
          ["Inscripción", "Formulario aparte y copiar a mano", "Enlace o QR; la familia llena la ficha del atleta y del acudiente"],
          ["Cobro mensual", "Calculas quién debe y mandas mensajes", "Cobros automáticos por periodo con enlace de pago"],
          ["Pagos por transferencia", "Revisas cada comprobante contra el banco", "El asistente de WhatsApp lee el comprobante, extrae monto y referencia y lo cruza con el cobro"],
          ["Pagos en línea", "No aplica", "Wompi y Mercado Pago: PSE, Nequi, tarjetas; la plata llega a tu cuenta"],
          ["Recordatorios", "Manuales", "Automáticos por correo y WhatsApp"],
          ["Mora", "Columna en rojo", "Recargo opcional que defines tú; el atleta no se cancela solo por atrasarse"],
          ["Asistencia", "Lista impresa o casillas", "Manual, por QR o con torniquete (adicional)"],
          ["Factura electrónica", "Aparte, con otro proveedor", "Integración sin costo; pagas solo el paquete de facturas"],
          ["Varias personas", "Archivo compartido y choques", "Staff ilimitado con roles y permisos"],
          ["Comunicación con papás", "Grupo de WhatsApp", "Calendario, avisos con push e informe mensual del atleta"],
        ],
      },
      { type: "h2", content: "Un ejemplo de cuánto tiempo se va en Excel" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo, no un caso real: una escuela de 80 alumnos donde 60 familias pagan por transferencia. Si confirmar cada comprobante contra el banco, anotarlo y responder toma 3 minutos, son 3 horas al mes solo en eso. Súmale los recordatorios a quienes no han pagado (otros 2 o 3 minutos por familia) y el cierre de fin de mes. Haz la cuenta con tus números: multiplica tus pagos por transferencia por el tiempo que te toma cada uno.",
      },
      {
        type: "p",
        content:
          "Ahora compara con el costo del software. Para 80 alumnos, SportMaps Escuela Crecimiento cuesta $99.000 al mes ($89.000 en pago anual), con el asistente de WhatsApp y las pasarelas incluidos. Si las horas que liberas valen más que eso, el cambio se paga solo. Si no, quédate en Excel o usa el plan gratis mientras creces.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Lo que un software no arregla: si no tienes una fecha de cobro clara y una política de mora definida, vas a automatizar el desorden. Decide primero cuándo se cobra, cuánto y qué pasa si alguien se atrasa.",
      },
      { type: "h2", content: "Cuándo NO conviene cambiar todavía" },
      {
        type: "ul",
        items: [
          "Tienes menos de 15 alumnos, todos pagan en efectivo y eres el único que administra.",
          "Estás a mitad de temporada con un torneo encima: cambia al inicio del próximo periodo de cobro.",
          "Nadie en la escuela va a mantener los datos al día. El software no se llena solo.",
        ],
      },
      { type: "h2", content: "Cómo pasar de Excel a un software en una semana" },
      {
        type: "ol",
        items: [
          "Limpia la hoja: una fila por atleta, con nombre, documento, fecha de nacimiento, categoría, acudiente y teléfono.",
          "Haz un corte de pagos a una fecha fija: quién está al día y quién debe, y cuánto.",
          "Crea las categorías y los equipos en el sistema y define el valor de la inscripción y de la mensualidad.",
          "Carga a los atletas o comparte el enlace de inscripción para que cada familia complete su ficha.",
          "Conecta Wompi o Mercado Pago a nombre de la escuela y activa el WhatsApp con IA.",
          "Manda a las familias un aviso con el cambio y el primer enlace de pago.",
          "Guarda el Excel en solo lectura como respaldo del historial anterior.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Los datos de menores son datos sensibles. Una hoja de cálculo reenviada por WhatsApp no tiene control de acceso. Al migrar, limita quién ve qué con los roles del sistema y borra las copias sueltas.",
      },
      {
        type: "cta",
        title: "¿Cuánto tiempo te está costando el Excel?",
        description:
          "Pon tus números en la calculadora y compáralo con el plan que te corresponde. Hasta 20 alumnos es gratis.",
        href: "/calculadora",
        label: "Abrir la calculadora",
      },
    ],
    related: [
      "conciliar-transferencias-comprobantes-escuela-deportiva",
      "5-claves-digitalizar-escuela-deportiva",
      "cuanto-cuesta-software-escuela-deportiva-2026",
    ],
    about: [
      "Excel para escuelas deportivas",
      "software de gestión deportiva",
      "cobro de mensualidades",
      "digitalización de academias deportivas",
    ],
    mentions: ["Microsoft Excel", "WhatsApp", "SportMaps", "Wompi", "Mercado Pago", "Nequi", "PSE"],
    faqs: [
      {
        question: "¿Puedo manejar mi escuela deportiva solo con Excel?",
        answer:
          "Sí, si es pequeña: menos de 20 alumnos, pagos en efectivo y una sola persona administrando. Cuando cobras por transferencia a muchas familias o varias personas tocan la hoja, el tiempo de conciliar comprobantes y los errores empiezan a costar más que un software.",
      },
      {
        question: "¿Cuándo debo pasar de Excel a un software para mi academia?",
        answer:
          "Cuando gastas más de un par de horas al mes cuadrando comprobantes, cuando no sabes al instante quién te debe, o cuando más de una persona registra pagos. Haz el cambio al inicio de un periodo de cobro, no a mitad de mes.",
      },
      {
        question: "¿Hay un software gratis para escuelas deportivas que reemplace a Excel?",
        answer:
          "SportMaps Free Start es gratis hasta 20 alumnos e incluye inscripción, cobros, WhatsApp con IA para leer comprobantes, Wompi y Mercado Pago, y página web de la escuela. Pasados 20 alumnos, Escuela Start cuesta $69.000 al mes hasta 50.",
      },
      {
        question: "¿Cómo paso los datos de mi Excel a un software deportivo?",
        answer:
          "Deja una fila por atleta con documento, fecha de nacimiento, categoría y acudiente, haz un corte de pagos a una fecha fija y cárgalo en el sistema o comparte el enlace de inscripción. Guarda el Excel en solo lectura como respaldo.",
      },
      {
        question: "¿Es seguro tener los datos de los niños en un Excel?",
        answer:
          "Es riesgoso si la hoja circula por correo o WhatsApp, porque cualquiera que la reciba ve nombres, documentos y teléfonos de menores. Un software con roles y permisos limita quién ve cada dato.",
      },
    ],
  },

  // ── Cuánto cuesta un software ──────────────────────────────────────────────
  {
    slug: "cuanto-cuesta-software-escuela-deportiva-2026",
    title: "¿Cuánto cuesta un software para escuela deportiva en Colombia en 2026? Precios públicos y costos ocultos",
    excerpt:
      "Tabla con los precios públicos de los softwares deportivos que operan en Colombia, por tamaño de escuela, y los costos que no aparecen en el plan: pasarela, WhatsApp de Meta, facturación electrónica y app.",
    category: "Análisis",
    readTime: "9 min",
    date: "26 Sep 2026",
    isoDate: "2026-09-26",
    isoDateModified: "2026-10-14",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Un software para escuela deportiva en Colombia cuesta entre $0 y unos $520.000 al mes según el proveedor y el número de alumnos, con precios públicos a octubre de 2026. Para una escuela de 50 alumnos los planes publicados van de $69.000 a $99.000 al mes; para 300 alumnos, de $159.000 a $220.000. A eso hay que sumarle lo que no aparece en el plan: la comisión de la pasarela por cada pago, el excedente de WhatsApp que cobra Meta, la facturación electrónica y, en algunos proveedores, la app con tu marca o la integración con la pasarela como cargo mensual.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "No compares solo el precio del plan. Pide a cada proveedor el costo total mensual para tu número de alumnos: plan, cargos por integración de pasarela, WhatsApp, facturación electrónica y app. Las comisiones de la pasarela las pagas con cualquier proveedor; los cargos de integración, no.",
      },
      { type: "h2", content: "Precios públicos por tamaño de escuela" },
      {
        type: "p",
        content:
          "Solo incluimos proveedores que publican sus precios en pesos colombianos. Valores mensuales; donde hay pago anual, el precio por mes baja.",
      },
      {
        type: "table",
        headers: ["Proveedor", "Hasta 20–50 alumnos", "Hasta 120–200", "Hasta 300–400", "Hasta 800", "Fuente"],
        rows: [
          ["SportMaps", "$0 (20) / $69.000 (50)", "$99.000 (120)", "$159.000 (300)", "$349.000 (800)", "sportmaps.co/planes, 14 oct 2026"],
          ["Clupik", "Gratis (50)", "—", "$200.000 – $220.000 (300)", "$470.000 – $520.000 (800)", "clupik.com/precios, 8 oct 2026"],
          ["Controla.Club", "$99.000 (50)", "Custom", "$199.000 (300) o Custom", "Custom", "controla.club/llms-faq.txt y llms-full.txt"],
          ["GOLAPP", "—", "$150.000 (200)", "$220.000 (400)", "$320.000 (700+)", "golapp.com.co, 8 oct 2026"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Clupik muestra dos cifras por plan; la más baja parece ser el pago anual. Controla.Club publica valores distintos según el documento (incluida una oferta de $500 por deportista activo al mes en los datos estructurados de su sitio). Precios sujetos a cambio: confírmalos con cada proveedor.",
      },
      { type: "h2", content: "Los costos que no aparecen en el plan" },
      { type: "h3", content: "1. Comisión de la pasarela de pagos" },
      {
        type: "p",
        content:
          "Cuando una familia paga con tarjeta o PSE por internet, la pasarela cobra una comisión por transacción. La tarifa estándar publicada de Wompi es 2,65% + $700 + IVA por transacción aprobada (Wompi anunció en septiembre de 2026 una tarifa menor para algunos pagos con QR). Ejemplo: en una mensualidad de $150.000, la comisión con tarjeta queda cerca de $5.563 con IVA. Esa comisión existe con cualquier software; lo que debes evitar es pagar además un cargo mensual por la integración.",
      },
      {
        type: "table",
        headers: ["Proveedor", "Cargo mensual por integrar la pasarela"],
        rows: [
          ["SportMaps", "$0: Wompi y Mercado Pago en todos los planes"],
          ["Clupik", "Mercadopago: $90.000 (Free), $75.000 (Pro), $60.000 (Élite) al mes, según su página"],
          ["Controla.Club", "Dice no tener costos ocultos por WhatsApp, cobros ni usuarios extra; confirma por escrito"],
          ["GOLAPP", "No lo publica"],
        ],
      },
      { type: "h3", content: "2. WhatsApp: lo que cobra Meta" },
      {
        type: "p",
        content:
          "Si el software usa la API oficial de WhatsApp, Meta da 1.000 conversaciones de servicio gratis al mes por número. Por encima de eso, Meta cobra el excedente directamente a la tarjeta de la escuela; para mensajes de servicio en Colombia es del orden de unos pocos pesos por mensaje (verifica la tabla vigente de Meta, porque cambia). Pregunta dos cosas: si el proveedor cobra aparte el asistente o vende paquetes de conversaciones, y de quién es el número. En SportMaps el asistente es gratis, no hay paquetes y el número es de la escuela.",
      },
      { type: "h3", content: "3. Facturación electrónica" },
      {
        type: "p",
        content:
          "Si tu escuela está obligada a facturar electrónicamente ante la DIAN, necesitas un proveedor tecnológico o la solución gratuita de la DIAN, que exige digitar cada factura. Los proveedores suelen cobrar por paquete de documentos. Pregunta si el software de gestión cobra la integración aparte. En SportMaps la integración no tiene costo; pagas solo el paquete según la cantidad de facturas, y tu contador puede entrar a revisar su estado.",
      },
      { type: "h3", content: "4. App con tu marca" },
      {
        type: "p",
        content:
          "Una app nativa con el nombre y el escudo de tu escuela en App Store y Google Play cuesta mantenerla. Clupik la publica como adicional de $245.000 al mes en Pro y Élite. SportMaps funciona como app instalable desde el navegador (con notificaciones push) sin costo adicional; no publica una app nativa con tu marca en las tiendas.",
      },
      { type: "h3", content: "5. Lo que no se ve en ninguna factura" },
      {
        type: "ul",
        items: [
          "Migración: cargar alumnos, acudientes y el corte de pagos. Pregunta si el proveedor lo hace y si cobra.",
          "Tiempo de tu equipo aprendiendo la herramienta, sobre todo los entrenadores.",
          "Adicionales que no vienen en el plan: torneos, control de acceso con torniquete, tienda, más sedes.",
          "Usuarios: algunos proveedores limitan los administradores por plan. En SportMaps el staff es ilimitado en todos los planes.",
        ],
      },
      { type: "h2", content: "Ejemplo: costo total para una escuela de 120 alumnos" },
      {
        type: "p",
        content:
          "Ejemplo ilustrativo con precios públicos de SportMaps: 120 alumnos, mensualidad de $150.000 y 80 familias que pagan en línea con tarjeta.",
      },
      {
        type: "table",
        headers: ["Concepto", "Valor mensual aproximado"],
        rows: [
          ["Plan Escuela Crecimiento", "$99.000 ($89.000 en pago anual)"],
          ["Asistente de WhatsApp con IA", "$0"],
          ["Integración Wompi / Mercado Pago", "$0"],
          ["Comisión de pasarela (80 pagos × ~$5.563)", "~$445.000, la paga la escuela a la pasarela o la traslada como recargo si así lo decide"],
          ["Excedente de WhatsApp a Meta", "$0 si no pasas de 1.000 conversaciones de servicio al mes"],
          ["Facturación electrónica", "Solo el paquete de facturas que contrates"],
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "La comisión de la pasarela suele ser el costo más grande, más que el software. Si muchas familias pagan por transferencia directa a la cuenta de la escuela, esa comisión no existe; ahí lo que importa es que el sistema lea y concilie esos comprobantes por ti.",
      },
      { type: "h2", content: "Cómo pedir una cotización comparable" },
      {
        type: "ol",
        items: [
          "Dile a cada proveedor tu número de alumnos hoy y en 12 meses, y cuántas sedes tienes.",
          "Pide el precio mensual y el anual del plan que te corresponde.",
          "Pregunta si la pasarela, el WhatsApp, la facturación electrónica y la app tienen cargo mensual aparte.",
          "Pregunta si limitan administradores o entrenadores.",
          "Pide todo por escrito, con fecha, y compara el total, no el plan.",
        ],
      },
      {
        type: "cta",
        title: "Calcula tu costo total",
        description:
          "Mira qué plan te corresponde según tus alumnos. WhatsApp con IA, Wompi, Mercado Pago y facturación electrónica vienen en todos.",
        href: "/planes",
        label: "Ver planes y precios",
      },
    ],
    related: [
      "whatsapp-ia-gratis-escuelas-deportivas-cuanto-cobra-meta",
      "wompi-vs-mercado-pago-escuelas-deportivas",
      "facturacion-electronica-escuelas-deportivas-dian",
    ],
    about: [
      "precio de software para escuelas deportivas",
      "costos de pasarela de pagos en Colombia",
      "facturación electrónica DIAN",
      "WhatsApp Business API",
    ],
    mentions: ["SportMaps", "Clupik", "Controla.Club", "GOLAPP", "Wompi", "Mercado Pago", "Meta", "WhatsApp", "DIAN"],
    faqs: [
      {
        question: "¿Cuánto cuesta un software para una escuela de fútbol en Colombia?",
        answer:
          "Con precios públicos a octubre de 2026, va de $0 a unos $520.000 al mes según el proveedor y el número de alumnos. Para 50 alumnos los planes publicados están entre $69.000 y $99.000 al mes; para 300 alumnos, entre $159.000 y $220.000.",
      },
      {
        question: "¿Hay software gratis para escuelas deportivas?",
        answer:
          "Sí. SportMaps Free Start es gratis hasta 20 alumnos y Clupik tiene un plan Free hasta 50 deportistas. Revisa qué incluye cada uno: en SportMaps el plan gratis trae WhatsApp con IA, Wompi, Mercado Pago y página web de la escuela.",
      },
      {
        question: "¿Cuánto cobra Wompi por cada pago de mensualidad?",
        answer:
          "La tarifa estándar publicada de Wompi es 2,65% + $700 + IVA por transacción aprobada. En una mensualidad de $150.000 eso da cerca de $5.563 con IVA. Confirma la tarifa vigente con Wompi, porque tiene condiciones distintas para algunos medios como el QR.",
      },
      {
        question: "¿Cuánto cuesta usar WhatsApp para cobrar en una escuela deportiva?",
        answer:
          "Meta da 1.000 conversaciones de servicio gratis al mes por número y cobra el excedente directo a la escuela. Aparte, algunos softwares cobran el asistente o venden paquetes de conversaciones; en SportMaps el asistente es gratis en todos los planes.",
      },
      {
        question: "¿Qué costos ocultos tiene un software deportivo?",
        answer:
          "Los más comunes son cargos mensuales por integrar la pasarela, la app con tu marca, la facturación electrónica, límites de administradores y adicionales como torneos o más sedes. Pide el costo total por escrito antes de firmar.",
      },
    ],
  },

  // ── Mejor software 2026 ────────────────────────────────────────────────────
  {
    slug: "mejor-software-gestion-deportiva-colombia-2026",
    title: "Mejor software de gestión deportiva en Colombia 2026: criterios y opciones reales",
    excerpt:
      "No hay un mejor software para todos. Esta guía te da los criterios que importan en Colombia, una tabla con opciones reales y precios públicos, y te dice cuál elegir según tu tipo de escuela o club.",
    category: "Comparativas",
    readTime: "8 min",
    date: "11 Oct 2026",
    isoDate: "2026-10-11",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "El mejor software de gestión deportiva en Colombia depende de tu tipo de organización. Para una escuela formativa que cobra mensualidades a acudientes, lo decisivo es cobrar por Wompi o Mercado Pago, conciliar comprobantes por WhatsApp y facturar a la DIAN sin cargos extra: ahí SportMaps es una opción fuerte, con plan gratis hasta 20 alumnos. Para un gimnasio con control de acceso o una cancha con reservas, Controla.Club tiene productos específicos. Para ligas y federaciones, Clupik. Para una escuela de fútbol base que solo necesita lo esencial, GOLAPP.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Antes de mirar marcas, define tu negocio principal (escuela, gimnasio, cancha o liga), tu número de alumnos y cómo te pagan las familias. Con eso, la tabla de abajo te deja dos candidatos. Pruébalos con un cobro real antes de decidir.",
      },
      { type: "h2", content: "Los 8 criterios que importan en Colombia" },
      {
        type: "ol",
        items: [
          "Pasarelas locales: PSE, Nequi, tarjetas y Bancolombia, con la plata llegando directo a tu cuenta. Pregunta si la integración tiene cargo mensual.",
          "Conciliación de transferencias: muchas familias pagan por transferencia y mandan foto del comprobante. Un sistema que lea el comprobante y lo cruce con el cobro te ahorra horas.",
          "WhatsApp oficial: que use la API de Meta, que el número sea de la escuela y que quede claro qué cobra el proveedor y qué cobra Meta.",
          "Facturación electrónica DIAN: si estás obligado, que la integración no sea otro proveedor con otro contrato.",
          "Modelo de cobro de la escuela: inscripción una vez, mensualidad, recargo por mora opcional y qué pasa con el atleta que se atrasa.",
          "Acudientes y menores: fichas con el papá o la mamá vinculados, permisos y cuidado de los datos.",
          "Usuarios: si cobran por cada entrenador o administrador adicional.",
          "Precio total y transparencia: precios publicados, en pesos, con el costo de pasarela, WhatsApp y app claro.",
        ],
      },
      { type: "h2", content: "Opciones reales con precio público" },
      {
        type: "table",
        headers: ["Software", "Origen", "Precio publicado", "Fuerte en", "Ten en cuenta"],
        rows: [
          ["SportMaps", "Colombia", "$0 (20 alumnos) a $349.000 (800); Custom desde $750.000", "Escuelas formativas: cobro con WhatsApp IA, Wompi y Mercado Pago incluidos, facturación DIAN, herramientas para entrenadores", "App instalable desde el navegador, no app nativa con tu marca; sin red social entre clubes"],
          ["Controla.Club", "Colombia", "Desde $99.000 (50 alumnos) según sus fuentes", "Gimnasios y academias con control de acceso; canchas con Controla Cancha; gamificación", "Sus documentos públicos muestran precios distintos entre sí; pide cotización escrita"],
          ["Clupik", "España, presencia en +25 países", "Free (50) ; Pro $200.000–$220.000 ; Élite $470.000–$520.000", "Clubes, ligas y federaciones: competiciones, web y tienda", "App personalizada $245.000/mes y Mercadopago con cargo mensual aparte"],
          ["GOLAPP", "Medellín, 2018", "$150.000 (200) a $320.000 (700+)", "Escuelas de fútbol base que necesitan inscripción, asistencia y pagos", "Avisos de pago por correo; no publica WhatsApp con IA ni facturación electrónica"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Fuentes: sportmaps.co/planes (14 oct 2026), clupik.com/precios y golapp.com.co (8 oct 2026), controla.club/llms-faq.txt. Solo listamos proveedores con precios públicos en pesos que pudimos verificar; hay otros en el mercado que piden agendar una llamada para conocer el precio.",
      },
      { type: "h2", content: "Elige según tu caso" },
      { type: "h3", content: "Elige SportMaps si…" },
      {
        type: "ul",
        items: [
          "Diriges una escuela o academia formativa con niños y acudientes, y vives de inscripción y mensualidad.",
          "Muchas familias te pagan por transferencia o Nequi y quieres que el WhatsApp con IA lea y cruce los comprobantes, gratis.",
          "Quieres Wompi y Mercado Pago, facturación electrónica y staff ilimitado sin cargos por integración, desde el plan gratis.",
          "Tus entrenadores necesitan pizarra táctica, planificación por mesociclos, evaluaciones físicas y partidos.",
        ],
      },
      { type: "h3", content: "Elige Controla.Club si…" },
      {
        type: "ul",
        items: [
          "Tu operación se parece a un gimnasio: entrada controlada en portería, planes ilimitados o paquetes de sesiones.",
          "Además administras canchas sintéticas y quieres reservas por WhatsApp con un producto dedicado.",
          "Te interesan la gamificación por puntos o una red social entre clubes.",
        ],
      },
      { type: "h3", content: "Elige Clupik si…" },
      {
        type: "ul",
        items: [
          "Administras una liga, torneos recurrentes o una federación y necesitas competiciones con resultados y estadísticas.",
          "Quieres una app nativa con tu escudo en las tiendas y puedes pagar el adicional.",
        ],
      },
      { type: "h3", content: "Elige GOLAPP si…" },
      {
        type: "ul",
        items: [
          "Eres una escuela de fútbol base de hasta 200 deportistas y solo necesitas inscripción, asistencia, competencias y control de pagos.",
        ],
      },
      { type: "h3", content: "Sigue con Excel si…" },
      {
        type: "ul",
        items: [
          "Tienes menos de 15 alumnos, cobras en efectivo y eres el único que administra. Cuando eso cambie, revisa nuestra guía Excel vs software.",
        ],
      },
      { type: "h2", content: "Cómo probar antes de decidir" },
      {
        type: "ol",
        items: [
          "Escoge dos candidatos con la tabla.",
          "Crea una categoría real con 5 atletas y sus acudientes.",
          "Genera un cobro y paga con un enlace real (PSE o Nequi), y otro por transferencia con foto del comprobante.",
          "Mira cuánto trabajo manual te quedó para registrar cada pago.",
          "Pide a un entrenador que tome asistencia desde su celular.",
          "Pide el costo total por escrito y decide con esos datos, no con rankings.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Desconfía de los rankings que solo citan porcentajes de reducción de mora o retorno de inversión sin mostrar de dónde salen. Lo que sí puedes verificar es el precio publicado, qué incluye y cómo se siente cobrar con tu propia escuela.",
      },
      {
        type: "cta",
        title: "Prueba SportMaps con tu escuela",
        description:
          "Gratis hasta 20 alumnos, sin tarjeta. WhatsApp con IA, Wompi, Mercado Pago y página web incluidos.",
        href: "/escuelas",
        label: "Conocer SportMaps para escuelas",
      },
    ],
    related: [
      "sportmaps-vs-controla-club",
      "alternativas-a-clupik-colombia",
      "cuanto-cuesta-software-escuela-deportiva-2026",
    ],
    about: [
      "software de gestión deportiva en Colombia",
      "software para escuelas de fútbol",
      "criterios para elegir software deportivo",
    ],
    mentions: ["SportMaps", "Controla.Club", "Clupik", "GOLAPP", "Wompi", "Mercado Pago", "WhatsApp", "DIAN"],
    faqs: [
      {
        question: "¿Cuál es el mejor software para escuelas deportivas en Colombia?",
        answer:
          "Depende del tipo de organización. Para escuelas formativas que cobran mensualidades a acudientes, SportMaps incluye WhatsApp con IA, Wompi, Mercado Pago y facturación electrónica en todos sus planes, desde uno gratis hasta 20 alumnos. Para gimnasios con control de acceso, Controla.Club; para ligas y federaciones, Clupik.",
      },
      {
        question: "¿Cuál es el mejor software para una escuela de fútbol pequeña?",
        answer:
          "Para menos de 20 alumnos, SportMaps Free Start es gratis; hasta 50, Escuela Start cuesta $69.000 al mes. Si solo necesitas inscripción, asistencia y pagos para hasta 200 deportistas, GOLAPP publica un plan de $150.000 al mes.",
      },
      {
        question: "¿Qué debe tener un software para clubes deportivos en Colombia?",
        answer:
          "Pasarelas locales como PSE y Nequi con la plata directo a tu cuenta, conciliación de transferencias, WhatsApp oficial, facturación electrónica DIAN, manejo de acudientes y precios publicados en pesos sin cargos ocultos por integración.",
      },
      {
        question: "¿Qué software deportivo tiene WhatsApp con inteligencia artificial?",
        answer:
          "SportMaps incluye gratis en todos sus planes un asistente de WhatsApp que lee comprobantes, extrae monto y referencia y los cruza con el cobro. Controla.Club publica recordatorios automáticos por WhatsApp y un asistente llamado Controli.",
      },
      {
        question: "¿Cómo elijo entre dos softwares deportivos?",
        answer:
          "Pruébalos con una categoría real: genera un cobro, paga por enlace y por transferencia, y mide cuánto trabajo manual te queda. Luego compara el costo total por escrito, incluidos pasarela, WhatsApp, facturación y app.",
      },
    ],
  },
];
