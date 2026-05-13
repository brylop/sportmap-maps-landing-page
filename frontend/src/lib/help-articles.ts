/**
 * Help Center — single source of truth.
 *
 * Contenido basado en features REALES del producto:
 * - 2 artículos completos basados en guías oficiales del repo del producto
 *   (guia-registro-pagos-manual.md, guia-recordatorios-plantillas.md)
 * - Resto basado en páginas y features inferidas del repo
 *   (sportmaps-demo/frontend/src/pages/*)
 *
 * Para agregar artículos: copiar estructura existente, agregar slug a
 * frontend/public/sitemap.xml para que el prerender los recoja.
 */

import type { ContentBlock } from "./blog-posts";

export type HelpRole = "school" | "parent" | "coach" | "athlete" | "all";

export interface HelpCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** Para qué roles aplica esta categoría */
  roles: HelpRole[];
}

export interface HelpArticle {
  slug: string;
  categoryId: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** A quién va dirigido principalmente */
  targetRole: HelpRole[];
  body: ContentBlock[];
  related?: string[];
}

export interface HelpFAQ {
  question: string;
  answer: string;
}

export const helpCategories: HelpCategory[] = [
  {
    id: "primeros-pasos",
    title: "Primeros pasos",
    emoji: "🚀",
    description: "Onboarding, login y configuración inicial de tu cuenta",
    roles: ["all"],
  },
  {
    id: "pagos-finanzas",
    title: "Pagos y Finanzas",
    emoji: "💳",
    description: "Wompi, pagos manuales, recordatorios y plantillas",
    roles: ["school", "parent"],
  },
  {
    id: "gestion-alumnos",
    title: "Gestión de alumnos",
    emoji: "👥",
    description: "Inscripciones, padres, sedes y equipos",
    roles: ["school"],
  },
  {
    id: "operacion-diaria",
    title: "Operación diaria",
    emoji: "📅",
    description: "Asistencia, calendario, reservas y reportes",
    roles: ["school", "coach"],
  },
  {
    id: "para-padres-atletas",
    title: "Para padres y atletas",
    emoji: "🏃",
    description: "Vincular tu cuenta, pagar mensualidades, ver progreso",
    roles: ["parent", "athlete"],
  },
];

export const helpArticles: HelpArticle[] = [
  // ===========================================================================
  // Artículos completos basados en guías oficiales del producto
  // ===========================================================================
  {
    slug: "registrar-pago-manual",
    categoryId: "pagos-finanzas",
    title: "Cómo registrar un pago manual (efectivo o transferencia)",
    excerpt:
      "Cuando un padre te paga en efectivo o por transferencia, registra el pago en SportMaps para cerrar la deuda y notificar automáticamente.",
    readTime: "6 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "Cuando un padre o atleta te paga directamente — ya sea en efectivo en la escuela o por transferencia bancaria — puedes registrar ese pago en SportMaps para que: (1) el estudiante aparezca como 'Al día', (2) desaparezca de la lista de Recordatorios de cobro, (3) el padre reciba notificación + correo de confirmación, y (4) el pago quede en el historial financiero.",
      },
      { type: "h2", content: "Cómo registrar un pago" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Gestión de Pagos → Cobros",
      },
      { type: "h3", content: "Paso 1 — Abrir el formulario" },
      {
        type: "p",
        content:
          "Haz clic en el botón 'Registrar pago' en la parte superior derecha de la página de Gestión de Pagos.",
      },
      { type: "h3", content: "Paso 2 — Seleccionar el método de pago" },
      {
        type: "table",
        headers: ["Botón", "Cuándo usarlo"],
        rows: [
          ["Efectivo (verde)", "El padre pagó en persona con dinero en efectivo"],
          ["Transferencia (azul)", "El padre hizo una transferencia o consignación bancaria"],
        ],
      },
      { type: "h3", content: "Paso 3 — Seleccionar el estudiante" },
      {
        type: "p",
        content:
          "Abre el desplegable 'Estudiante / Atleta' y selecciona a quien corresponde el pago. Si el estudiante es menor de edad, verás el nombre del acudiente entre paréntesis.",
      },
      { type: "h3", content: "Paso 4 — Completar los datos del pago" },
      {
        type: "table",
        headers: ["Campo", "Qué poner"],
        rows: [
          [
            "Concepto de pago",
            "Describe qué se está pagando. Por defecto: 'Mensualidad' (editable). Ej: 'Uniforme', 'Torneo', 'Inscripción'",
          ],
          [
            "Monto ($ COP)",
            "El valor que recibiste. Escribe solo el número sin puntos ni signos",
          ],
          [
            "Fecha del pago",
            "La fecha en que recibiste el dinero. Por defecto: hoy (editable)",
          ],
        ],
      },
      { type: "h3", content: "Paso 5 — Confirmar" },
      {
        type: "p",
        content: "Haz clic en 'Guardar y confirmar'.",
      },
      { type: "h2", content: "Qué pasa cuando confirmas" },
      {
        type: "ol",
        items: [
          "Salda la deuda completa — si el estudiante tenía pagos pendientes o vencidos, TODOS se marcan como pagados",
          "Si no había deuda — se crea un nuevo registro de pago con estado 'Pagado'",
          "Notificación al padre — si el padre tiene cuenta en SportMaps, recibe notificación in-app",
          "Correo de confirmación — si tiene email registrado, recibe correo automático",
          "Historial actualizado — el pago aparece en 'Historial' con el método (CASH o TRANSFER) y referencia única",
        ],
      },
      { type: "h2", content: "Dónde se reflejan los cambios" },
      {
        type: "table",
        headers: ["Sección", "Antes", "Después"],
        rows: [
          ["Estudiantes", "Badge rojo 'Vencido' o amarillo 'Pendiente'", "Badge verde 'Al día'"],
          ["Recordatorios", "Aparece en lista con días de mora", "Desaparece de la lista"],
          ["Historial de pagos", "Solo mostraba cobro pendiente", "Muestra el pago como 'Pagado'"],
          ["Estadísticas", "No sumaba en ingresos", "Se suma a 'Pagos exitosos'"],
        ],
      },
      { type: "h2", content: "Preguntas frecuentes específicas" },
      { type: "h3", content: "Un padre me pagó pero tiene varios cobros pendientes, ¿qué hago?" },
      {
        type: "p",
        content:
          "Solo registra UN pago. El sistema automáticamente marca TODOS los cobros pendientes y vencidos de ese estudiante como pagados.",
      },
      { type: "h3", content: "¿Cuál es la diferencia entre 'Registrar pago' y el pago online?" },
      {
        type: "table",
        headers: ["Registro manual", "Pago online (Wompi/link)"],
        rows: [
          ["La escuela registra el pago", "El padre paga desde su celular"],
          ["Se marca pagado al instante", "'Pendiente' hasta que el gateway confirma"],
          ["Para efectivo y transferencias ya recibidas", "Para pagos con tarjeta o PSE"],
        ],
      },
      { type: "h3", content: "¿Puedo registrar un monto diferente al cobro original?" },
      {
        type: "p",
        content:
          "Sí. El sistema registra el monto que ingreses. Si el cobro original era $35.000 y el padre pagó $40.000, puedes registrar $40.000. El sistema guarda el monto pagado sin importar el valor original del cobro.",
      },
      {
        type: "cta",
        title: "¿Necesitas configurar Wompi para pagos online?",
        description: "Tenemos guía paso a paso.",
        href: "/ayuda/configurar-wompi-pagos-online",
        label: "Ver guía Wompi",
      },
    ],
    related: ["plantillas-recordatorios", "configurar-wompi-pagos-online"],
  },
  {
    slug: "plantillas-recordatorios",
    categoryId: "pagos-finanzas",
    title: "Configurar plantillas de recordatorios y enviar cobros",
    excerpt:
      "Activa plantillas de recordatorio, personaliza el mensaje y envía cobros por WhatsApp o email — individual o masivo.",
    readTime: "7 min",
    targetRole: ["school"],
    body: [
      { type: "h2", content: "Parte 1: Configurar las plantillas (una sola vez)" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Finanzas → Plantillas",
      },
      { type: "h3", content: "Paso 1 — Revisar las plantillas disponibles" },
      {
        type: "p",
        content: "La página muestra las plantillas organizadas por tipo:",
      },
      {
        type: "table",
        headers: ["Tipo", "Cuándo se usa"],
        rows: [
          ["Recordatorio Previo", "Días antes de que venza el pago"],
          ["Día de Vencimiento", "El mismo día que vence"],
          ["Mora / Vencido", "Cuando ya pasó la fecha de pago"],
          ["Pago Confirmado", "Cuando recibes un pago"],
          ["Abono Recibido", "Cuando recibes un pago parcial"],
        ],
      },
      {
        type: "p",
        content:
          "Cada tipo tiene varias variantes (amigable, corto, formal). Todas vienen preconfiguradas.",
      },
      { type: "h3", content: "Paso 2 — Activar o desactivar plantillas" },
      {
        type: "p",
        content:
          "Cada plantilla tiene un switch a la derecha. Solo las plantillas activas aparecerán como opción en Recordatorios.",
      },
      { type: "h3", content: "Paso 3 — Personalizar un mensaje (opcional)" },
      {
        type: "ol",
        items: [
          "Haz clic en 'Editar' en cualquier plantilla",
          "Modifica el texto usando variables que se reemplazan automáticamente",
          "Haz clic en 'Vista Previa' para ver con datos de ejemplo",
          "Haz clic en 'Guardar'",
        ],
      },
      { type: "h3", content: "Variables disponibles" },
      {
        type: "table",
        headers: ["Variable", "Se reemplaza por"],
        rows: [
          ["{{nombre_padre}}", "Nombre del acudiente"],
          ["{{nombre_atleta}}", "Nombre del deportista"],
          ["{{monto}}", "Valor del pago (ej: $150.000)"],
          ["{{fecha_vencimiento}}", "Fecha límite de pago"],
          ["{{dias_mora}}", "Días vencidos"],
          ["{{nombre_escuela}}", "Nombre de tu academia"],
          ["{{link_pago}}", "Link para pagar online"],
          ["{{equipo}}", "Equipo o programa"],
          ["{{plan}}", "Plan contratado"],
          ["{{banco}}", "Datos bancarios de la escuela"],
          ["{{nequi}}", "Número de Nequi de la escuela"],
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si quieres volver al mensaje original, haz clic en 'Restaurar'. Las plantillas preconfiguradas están probadas en cientos de academias — solo personaliza si tienes un motivo claro.",
      },
      { type: "h2", content: "Parte 2: Enviar recordatorios" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Finanzas → Recordatorios",
      },
      { type: "h3", content: "Paso 1 — Ver pagos pendientes" },
      {
        type: "p",
        content:
          "La página carga automáticamente todos los pagos pendientes y vencidos. Verás tarjetas resumen (contactos, pendientes, vencidos, monto total) y una tabla con cada pago.",
      },
      { type: "h3", content: "Paso 2 — Filtrar (opcional)" },
      {
        type: "ul",
        items: [
          "Por estado: Todos / Pendientes / Vencidos",
          "Por plan: filtra por un plan específico",
        ],
      },
      { type: "h3", content: "Paso 3 — Elegir plantilla" },
      {
        type: "ul",
        items: [
          "'Plantilla automática' (por defecto): el sistema elige según el estado — Recordatorio Previo, Día de Vencimiento o Mora",
          "Plantilla específica: abre el dropdown y selecciona la que quieras",
        ],
      },
      { type: "h3", content: "Paso 4 — Enviar por WhatsApp (individual)" },
      {
        type: "ol",
        items: [
          "Haz clic en el ícono de WhatsApp al lado de cualquier pago",
          "Se abre WhatsApp Web con el mensaje ya escrito",
          "Solo dale 'Enviar' en WhatsApp",
        ],
      },
      { type: "h3", content: "Paso 5 — Enviar por Email (selección)" },
      {
        type: "ol",
        items: [
          "Selecciona los pagos con checkboxes (o todos con el checkbox del encabezado)",
          "Haz clic en 'Enviar (X)' — envía email a todos los seleccionados con email registrado",
          "Verás resumen de cuántos se enviaron",
        ],
      },
      { type: "h3", content: "Paso 6 — Enviar todos por email (masivo)" },
      {
        type: "p",
        content:
          "Haz clic en 'Enviar todos por email' — envía recordatorio a TODOS los padres con pagos pendientes de una sola vez.",
      },
      {
        type: "cta",
        title: "¿Quieres automatizar todo esto con WhatsApp AI?",
        description:
          "Con WhatsApp AI los recordatorios se mandan solos. Sin clicks. Sin olvidos.",
        href: "/blog/cobranza-whatsapp-ai-sportmaps",
        label: "Ver cómo funciona",
      },
    ],
    related: ["registrar-pago-manual", "configurar-wompi-pagos-online"],
  },
  // ===========================================================================
  // Artículos basados en features del producto
  // ===========================================================================
  {
    slug: "primer-login-escuela",
    categoryId: "primeros-pasos",
    title: "Primer login: crea tu cuenta y configura tu escuela",
    excerpt:
      "Los primeros 15 minutos en SportMaps: crear cuenta, completar perfil de escuela y configurar tu primera sede.",
    readTime: "5 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "Crear tu cuenta de SportMaps toma menos de 15 minutos. Esta guía te lleva paso a paso desde el registro hasta tener tu primera sede lista para inscribir alumnos.",
      },
      { type: "h2", content: "Paso 1 — Crear cuenta" },
      {
        type: "ol",
        items: [
          "Ve a app.sportmaps.co/auth",
          "Haz clic en 'Registrarse'",
          "Ingresa tu email y crea una contraseña (también puedes usar Google OAuth)",
          "Confirma tu email haciendo clic en el link que recibiste",
        ],
      },
      { type: "h2", content: "Paso 2 — Seleccionar rol 'Escuela'" },
      {
        type: "p",
        content:
          "Después de confirmar el email, eliges qué tipo de cuenta eres. Selecciona 'Escuela / Academia'. Esto te lleva al wizard de onboarding.",
      },
      { type: "h2", content: "Paso 3 — Wizard de configuración" },
      {
        type: "p",
        content: "El wizard te pide la información básica en 4 pasos:",
      },
      {
        type: "ol",
        items: [
          "Datos de la escuela: nombre, deporte principal, descripción",
          "Sede principal: ciudad, dirección, capacidad estimada",
          "Plan inicial: empezás en Free Start (gratis hasta 20 alumnos)",
          "Equipo: opcional, podés invitar coaches y staff después",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "No tenés que llenar todo perfecto en este momento — podés volver a editar cualquier campo desde Configuración después.",
      },
      { type: "h2", content: "Paso 4 — Primera acción recomendada" },
      {
        type: "p",
        content:
          "Una vez completado el wizard, tu dashboard te muestra 3 botones grandes: 'Invitar primer alumno', 'Configurar Wompi para pagos' y 'Agregar tu primer equipo'. Empezá por el que tenga más urgencia para tu operación.",
      },
      {
        type: "cta",
        title: "Siguiente paso lógico",
        description: "Configurar Wompi te permite cobrar online desde el día 1.",
        href: "/ayuda/configurar-wompi-pagos-online",
        label: "Configurar Wompi",
      },
    ],
    related: ["configurar-wompi-pagos-online", "invitar-padres-vinculacion"],
  },
  {
    slug: "configurar-wompi-pagos-online",
    categoryId: "pagos-finanzas",
    title: "Configurar Wompi: empieza a cobrar online en 10 minutos",
    excerpt:
      "Conecta tu cuenta de Wompi a SportMaps para que los padres paguen con tarjeta, PSE o link de pago directo.",
    readTime: "6 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "Wompi es la pasarela de pagos integrada nativamente en SportMaps. Conectándola, tus padres pagan con tarjeta de crédito/débito o PSE en menos de 30 segundos, y el pago se concilia automáticamente con el cobro del alumno.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Si no tienes cuenta Wompi todavía, créala primero en wompi.co. Es gratis abrir la cuenta — solo cobran comisión por transacción.",
      },
      { type: "h2", content: "Paso 1 — Obtener tus llaves de Wompi" },
      {
        type: "ol",
        items: [
          "Entra a tu dashboard Wompi (comercio.wompi.co)",
          "Ve a 'Desarrolladores' → 'API Keys'",
          "Copia tu 'Llave pública' (empieza con pub_prod_...)",
          "Copia tu 'Llave privada' (empieza con prv_prod_...) — esta es secreta, nunca la compartas",
        ],
      },
      { type: "h2", content: "Paso 2 — Pegar las llaves en SportMaps" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Configuración → Pagos → Pasarela Wompi",
      },
      {
        type: "ol",
        items: [
          "Pega la llave pública en el campo 'Wompi Public Key'",
          "Pega la llave privada en el campo 'Wompi Private Key'",
          "Selecciona modo: 'Producción' (cobros reales) o 'Pruebas' (sandbox)",
          "Haz clic en 'Guardar y validar conexión'",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Te recomendamos arrancar en modo Pruebas. SportMaps incluye datos de tarjetas de test para que valides el flujo completo sin cobrar a nadie real.",
      },
      { type: "h2", content: "Paso 3 — Configurar webhook" },
      {
        type: "p",
        content:
          "Wompi notifica a SportMaps cuando un pago se aprueba o rechaza. La URL del webhook aparece en pantalla — cópiala y pégala en Wompi:",
      },
      {
        type: "ol",
        items: [
          "Vuelve a tu dashboard Wompi → 'Desarrolladores' → 'Eventos'",
          "Pega la URL del webhook que te dio SportMaps",
          "Marca eventos: 'transaction.updated', 'nequi_token.updated'",
          "Guarda",
        ],
      },
      { type: "h2", content: "Paso 4 — Validar con un cobro de prueba" },
      {
        type: "p",
        content:
          "Crea un cobro de $1.000 a tu propio email. Páguelo con la tarjeta de test que aparece en pantalla. Si el pago se marca como 'Pagado' automáticamente, el webhook funciona.",
      },
      { type: "h2", content: "Datos de tarjeta de prueba" },
      {
        type: "table",
        headers: ["Campo", "Valor"],
        rows: [
          ["Número", "4242 4242 4242 4242"],
          ["CVC", "123"],
          ["Fecha", "Cualquier fecha futura"],
          ["Resultado", "Aprobada"],
        ],
      },
      {
        type: "cta",
        title: "¿Prefieres registrar pagos manuales?",
        description: "También soportamos efectivo y transferencias.",
        href: "/ayuda/registrar-pago-manual",
        label: "Ver guía manual",
      },
    ],
    related: ["registrar-pago-manual", "plantillas-recordatorios"],
  },
  {
    slug: "invitar-padres-vinculacion",
    categoryId: "gestion-alumnos",
    title: "Invitar a un padre y vincularlo con su hijo",
    excerpt:
      "Cómo enviar invitaciones a padres para que tengan su propia cuenta y vean a sus hijos en SportMaps.",
    readTime: "4 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "Cuando inscribes un alumno menor de edad, su padre/acudiente necesita una cuenta para pagar online y ver el progreso. SportMaps te permite invitarlo en 30 segundos.",
      },
      { type: "h2", content: "Método 1: Invitación por email" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Gestión → Invitaciones → 'Nueva invitación'",
      },
      {
        type: "ol",
        items: [
          "Selecciona el alumno al que se va a vincular",
          "Ingresa el email del padre/acudiente",
          "Haz clic en 'Enviar invitación'",
          "El padre recibe email con link único. Al hacer clic, crea cuenta y ya queda vinculado al alumno",
        ],
      },
      { type: "h2", content: "Método 2: Link compartible (sin email)" },
      {
        type: "p",
        content:
          "Si el padre no tiene email o prefieres mandarle por WhatsApp, genera un link único:",
      },
      {
        type: "ol",
        items: [
          "En 'Invitaciones' → 'Generar link de un solo uso'",
          "Copia el link generado",
          "Envíalo por WhatsApp al padre",
          "Al hacer clic, crea cuenta y queda vinculado al alumno automáticamente",
        ],
      },
      { type: "h2", content: "Método 3: QR para inscripciones presenciales" },
      {
        type: "p",
        content:
          "Si haces inscripciones en persona (jornada de inscripción, torneo), imprime un QR único por alumno. El padre escanea con su celular y queda vinculado al instante.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Menú: Gestión → Estudiantes → seleccionar alumno → 'QR de vinculación familiar'",
      },
      {
        type: "cta",
        title: "¿Cómo funciona del lado del padre?",
        description:
          "Ve la guía para padres sobre cómo inscribirse y vincularse.",
        href: "/ayuda/inscripcion-padre-paso-a-paso",
        label: "Guía para padres",
      },
    ],
    related: ["inscripcion-padre-paso-a-paso", "configurar-sedes-equipos"],
  },
  {
    slug: "configurar-sedes-equipos",
    categoryId: "gestion-alumnos",
    title: "Configurar sedes, equipos y staff",
    excerpt:
      "Estructura tu academia: agrega sedes adicionales, crea equipos por edad/nivel y asigna coaches.",
    readTime: "5 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "SportMaps soporta operación multi-sede desde el plan Pro. Cada sede puede tener sus propios equipos, coaches asignados y horarios. Acá te explicamos cómo configurarlo todo.",
      },
      { type: "h2", content: "Agregar una sede" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Configuración → Sedes → 'Nueva sede'",
      },
      {
        type: "ol",
        items: [
          "Nombre de la sede (ej: 'Sede Norte', 'Sede Salitre')",
          "Dirección y ciudad",
          "Capacidad (cantidad máxima de alumnos)",
          "Coordinador de sede (opcional — un staff member específico)",
          "Guardar",
        ],
      },
      { type: "h2", content: "Crear equipos" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Equipos → 'Nuevo equipo'",
      },
      {
        type: "p",
        content:
          "Un equipo es la unidad básica de agrupación. Por ejemplo: 'Pre-juvenil masculino sub-12', 'Femenino sub-14', 'Veteranos'. Cada equipo se asigna a una sede.",
      },
      {
        type: "ol",
        items: [
          "Nombre del equipo",
          "Sede a la que pertenece",
          "Rango de edad (opcional)",
          "Coach principal asignado",
          "Plan asociado (Mensualidad estándar, Beca, etc.)",
        ],
      },
      { type: "h2", content: "Invitar staff (coaches, asistentes)" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Staff → 'Invitar miembro'",
      },
      {
        type: "ol",
        items: [
          "Email del coach o asistente",
          "Rol: Coach / Asistente / Administrador de sede",
          "Sedes a las que tiene acceso",
          "Equipos asignados (si es coach)",
          "Enviar invitación",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Los coaches solo ven los equipos que les asignaste. Los administradores de sede ven todo lo de su sede. El admin general (vos) ve todo.",
      },
    ],
    related: ["invitar-padres-vinculacion", "tomar-asistencia-coach"],
  },
  {
    slug: "tomar-asistencia-coach",
    categoryId: "operacion-diaria",
    title: "Cómo tomar asistencia en cada sesión (para coaches)",
    excerpt:
      "Desde la app del coach: marca asistencia, registra atrasos y deja notas por estudiante en menos de 2 minutos.",
    readTime: "3 min",
    targetRole: ["coach"],
    body: [
      {
        type: "p",
        content:
          "La toma de asistencia es la acción más frecuente para un coach. SportMaps la diseñó para que sea rápida — menos de 2 minutos para un equipo de 20 alumnos.",
      },
      { type: "h2", content: "Desde el celular" },
      {
        type: "ol",
        items: [
          "Abre la app SportMaps en tu celular (o app.sportmaps.co)",
          "En el dashboard, verás tus sesiones del día. Haz clic en la que vas a iniciar",
          "Se carga la lista de estudiantes del equipo",
          "Por cada alumno: toca Presente / Tarde / Ausente",
          "(Opcional) Toca el ícono de nota para dejar comentario corto del alumno",
          "Cuando termines, toca 'Finalizar sesión'",
        ],
      },
      { type: "h2", content: "Quién ve la asistencia" },
      {
        type: "ul",
        items: [
          "Los padres reciben notificación cuando su hijo se marca como Presente",
          "El admin de la escuela ve un reporte semanal de asistencia por equipo",
          "El supervisor puede auditar cualquier asistencia (corregir errores)",
        ],
      },
      { type: "h2", content: "Si te equivocaste" },
      {
        type: "p",
        content:
          "Si marcaste un alumno como Ausente por error, abre la sesión nuevamente (queda editable por 24h después de finalizada) y corrige. Después de 24h, solo el admin puede modificar — pídeselo.",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Truco: si tu equipo tiene 'presentes habituales' del 90%+, usá el botón 'Marcar todos como presentes' y luego solo cambiá los ausentes específicos. Ahorra 80% del tiempo.",
      },
    ],
    related: ["calendario-reservas", "reportes-financieros-asistencia"],
  },
  {
    slug: "inscripcion-padre-paso-a-paso",
    categoryId: "para-padres-atletas",
    title: "Cómo me registro como padre y vinculo a mi hijo",
    excerpt:
      "La guía corta para padres: aceptar invitación, crear cuenta, ver a tu hijo y empezar a pagar mensualidades online.",
    readTime: "3 min",
    targetRole: ["parent"],
    body: [
      {
        type: "p",
        content:
          "Si tu hijo está inscrito en una escuela que usa SportMaps, te enviaron una invitación por email, WhatsApp o QR. Aceptarla toma 2 minutos.",
      },
      { type: "h2", content: "Opción A: Recibiste un email" },
      {
        type: "ol",
        items: [
          "Abre el email de SportMaps en tu celular o computadora",
          "Haz clic en el botón grande 'Aceptar invitación'",
          "Crea una contraseña (o entra con Google)",
          "Listo: ya ves a tu hijo en tu cuenta",
        ],
      },
      { type: "h2", content: "Opción B: Recibiste un link por WhatsApp" },
      {
        type: "ol",
        items: [
          "Abre el link",
          "Crea cuenta con tu email + contraseña (o Google)",
          "Listo: la vinculación con tu hijo es automática",
        ],
      },
      { type: "h2", content: "Opción C: Escaneaste un QR en la escuela" },
      {
        type: "ol",
        items: [
          "El QR abre directamente la app",
          "Te pide email + contraseña",
          "Quedas vinculado al hijo cuyo QR escaneaste",
        ],
      },
      { type: "h2", content: "Qué podés hacer una vez vinculado" },
      {
        type: "ul",
        items: [
          "Ver perfil y progreso de tu hijo (asistencia, evaluaciones)",
          "Pagar mensualidades online con tarjeta o PSE (Wompi)",
          "Recibir notificaciones de pagos próximos y sesiones",
          "Chatear con la escuela y coaches",
          "Reservar clases adicionales o eventos",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tenés más de un hijo en la misma escuela, cada uno te llega como invitación separada. Aceptás cada una y todos quedan en tu misma cuenta.",
      },
    ],
    related: ["invitar-padres-vinculacion"],
  },
  {
    slug: "calendario-reservas",
    categoryId: "operacion-diaria",
    title: "Calendario, reservas y disponibilidad de canchas",
    excerpt:
      "Configurá el calendario de tu academia, abrí reservas para padres y gestioná disponibilidad de canchas/instalaciones.",
    readTime: "5 min",
    targetRole: ["school", "coach"],
    body: [
      {
        type: "p",
        content:
          "El módulo de Calendario te permite mostrar todas las clases regulares, eventos especiales y disponibilidad de canchas en una sola vista. Padres y atletas pueden reservar sesiones desde su app.",
      },
      { type: "h2", content: "Configurar horario regular" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Calendario → 'Crear horario recurrente'",
      },
      {
        type: "ol",
        items: [
          "Selecciona el equipo o programa",
          "Días de la semana en que se entrena",
          "Hora de inicio y fin",
          "Sede / cancha donde se realiza",
          "Coach principal",
          "Guardar — se crean automáticamente las sesiones del semestre",
        ],
      },
      { type: "h2", content: "Configurar canchas / instalaciones" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Configuración → Instalaciones",
      },
      {
        type: "p",
        content:
          "Cada cancha o instalación tiene su propia agenda. Si dos equipos chocan en la misma cancha, el sistema te lo avisa al crear el horario.",
      },
      { type: "h2", content: "Reservas por parte de padres/atletas" },
      {
        type: "p",
        content:
          "Si activás reservas en un equipo, los padres pueden inscribir a su hijo a sesiones adicionales (clases extras, recuperación de sesiones perdidas). Configuralo desde Equipos → seleccionar equipo → 'Permitir reservas'.",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Si tu academia hace clases libres (no por equipo fijo) — por ejemplo gimnasio o yoga — todos los slots son 'reservables' por defecto. El padre elige el horario que le sirve.",
      },
    ],
    related: ["tomar-asistencia-coach", "reportes-financieros-asistencia"],
  },
  {
    slug: "reportes-financieros-asistencia",
    categoryId: "operacion-diaria",
    title: "Reportes financieros y de asistencia",
    excerpt:
      "Los 5 reportes que todo director deportivo revisa cada semana: ingresos, mora, asistencia, churn y conversión.",
    readTime: "4 min",
    targetRole: ["school"],
    body: [
      {
        type: "p",
        content:
          "SportMaps incluye reportes pre-armados que cubren el 95% de lo que necesitás. Acá los 5 más usados y cómo leerlos.",
      },
      { type: "h2", content: "1. Reporte de ingresos mensuales" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Reportes → Financieros → Ingresos",
      },
      {
        type: "p",
        content:
          "Muestra todos los pagos exitosos del mes (Wompi + manual), agrupados por plan, sede y método de pago. Útil para conciliación contable.",
      },
      { type: "h2", content: "2. Reporte de mora" },
      {
        type: "p",
        content:
          "Lista todos los pagos con +X días de atraso (vos definís X). Indica el monto perdido si no se cobra, el padre asociado y los últimos contactos hechos.",
      },
      { type: "h2", content: "3. Asistencia por equipo" },
      {
        type: "callout",
        variant: "info",
        content: "Menú: Reportes → Operativos → Asistencia",
      },
      {
        type: "p",
        content:
          "Porcentaje de asistencia promedio por equipo en el último mes. Sirve para detectar equipos con problemas: si un equipo cae de 85% a 60% en un mes, algo está pasando.",
      },
      { type: "h2", content: "4. Churn mensual" },
      {
        type: "p",
        content:
          "% de alumnos que se dieron de baja en el mes. Meta: <3%. El reporte te muestra los motivos declarados (si los pediste al dar de baja).",
      },
      { type: "h2", content: "5. Conversión de inscripciones" },
      {
        type: "p",
        content:
          "De los padres que vieron tu página pública o respondieron una invitación, qué porcentaje terminó pagando la primera mensualidad. Mide la efectividad de tu onboarding.",
      },
      {
        type: "callout",
        variant: "tip",
        content:
          "Configurá alertas para que el sistema te avise por email cuando alguna métrica salga del rango aceptable. Menú: Reportes → Alertas.",
      },
    ],
    related: ["tomar-asistencia-coach", "plantillas-recordatorios"],
  },
];

export const helpFAQs: HelpFAQ[] = [
  {
    question: "¿Cómo recupero mi contraseña?",
    answer:
      "En la pantalla de login (app.sportmaps.co/auth), hacé clic en '¿Olvidaste tu contraseña?'. Recibirás un email con un link para restablecerla. El link es válido por 1 hora.",
  },
  {
    question: "¿SportMaps funciona en celular?",
    answer:
      "Sí. SportMaps es una PWA (Progressive Web App): funciona en el navegador del celular y podés instalarla como app desde Chrome/Safari ('Agregar a pantalla de inicio'). No hay app nativa separada todavía.",
  },
  {
    question: "¿Qué métodos de pago acepta SportMaps?",
    answer:
      "Online via Wompi: tarjetas de crédito/débito, PSE y Nequi. Offline: efectivo y transferencias bancarias (se registran manualmente en la app). Más métodos en roadmap (Bancolombia botón, Daviplata).",
  },
  {
    question: "¿Cómo activo WhatsApp AI para recordatorios automáticos?",
    answer:
      "WhatsApp AI viene incluido en Escuela Pro y planes superiores. Para activarlo: Configuración → WhatsApp AI → conectar número (5 minutos vía WhatsApp Business). El equipo de SportMaps te acompaña en el setup inicial sin costo.",
  },
  {
    question: "Un padre me pagó pero tiene varios cobros pendientes, ¿qué hago?",
    answer:
      "Registra UN solo pago en 'Gestión de Pagos → Cobros → Registrar pago'. El sistema marca automáticamente TODOS los cobros pendientes y vencidos de ese estudiante como pagados.",
  },
  {
    question: "¿Cuál es la diferencia entre registro manual y Wompi?",
    answer:
      "Registro manual: vos registras un pago que ya recibiste en efectivo o transferencia (queda pagado al instante). Wompi: el padre paga online desde su celular (queda pendiente hasta que el gateway confirma, normalmente <1 minuto).",
  },
  {
    question: "¿Puedo gestionar varias sedes desde una sola cuenta?",
    answer:
      "Sí. En plan Pro y superiores, podés crear múltiples sedes con sus propios equipos, coaches y reportes. Cada coach solo ve los equipos asignados; vos (admin) ves todo consolidado.",
  },
  {
    question: "¿Cómo invito a un padre que no tiene email?",
    answer:
      "Usá 'Link de un solo uso' (Invitaciones → Generar link) y envialo por WhatsApp. O genera un QR (Estudiantes → seleccionar alumno → 'QR de vinculación') que el padre escanea en persona.",
  },
  {
    question: "¿Cómo doy de baja un alumno?",
    answer:
      "Estudiantes → seleccionar alumno → 'Dar de baja'. Te pide un motivo (cancelación, traslado, falta de pago, etc.). El alumno queda inactivo pero sus datos históricos se preservan para reportes.",
  },
  {
    question: "¿SportMaps emite facturas electrónicas?",
    answer:
      "En el plan Pro generamos comprobantes de pago automáticos. Para facturación electrónica DIAN, en plan Elite tenemos integración con Siigo y Alegra. Si usás otra plataforma, podemos integrar via API.",
  },
  {
    question: "¿Qué pasa con mis datos si me doy de baja de SportMaps?",
    answer:
      "Te exportamos todo en CSV/Excel (alumnos, pagos, asistencia, equipos) sin costo. Conservamos tu información encriptada por 90 días por si querés volver — después se elimina permanentemente.",
  },
  {
    question: "¿Cómo contacto soporte técnico?",
    answer:
      "WhatsApp directo a +57 312 846 3555 (lunes-viernes 8am-6pm Colombia). Email a contacto@sportmaps.co. El equipo responde en menos de 2 horas en horario hábil.",
  },
];

export function getArticleBySlug(slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categoryId: string): HelpArticle[] {
  return helpArticles.filter((a) => a.categoryId === categoryId);
}

export function getRelatedArticles(slugs: string[] = []): HelpArticle[] {
  return slugs
    .map(getArticleBySlug)
    .filter((a): a is HelpArticle => !!a);
}
