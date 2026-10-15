import type { BlogPost } from "../blog-posts";

const AUTHOR = {
  author: "Brayan López",
  authorRole: "CEO de SportMaps",
  authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
};

export const guiasPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. Precio de la mensualidad
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-fijar-precio-mensualidad-escuela-deportiva",
    title: "Cómo fijar el precio de la mensualidad de tu escuela deportiva (fórmula + tabla)",
    excerpt:
      "La fórmula paso a paso para calcular una mensualidad que cubra cancha, entrenadores, mora y comisiones, con una tabla de ejemplo y los costos de referencia de 2026.",
    category: "Guías",
    readTime: "7 min",
    date: "16 Sep 2026",
    isoDate: "2026-09-16",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para fijar la mensualidad de una escuela deportiva suma todos tus costos del mes (cancha, entrenadores, administración, implementos, seguros, software y comisiones), divídelos entre los alumnos que de verdad pagan —no entre los inscritos— y súbele el margen que necesitas para crecer. Si cobras menos meses de los que pagas (por ejemplo, 11 mensualidades contra 12 meses de arriendo), ajusta el resultado. Esa es la fórmula; el resto de esta guía es cómo llenarla sin engañarte.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Precio = (costos del mes ÷ alumnos que pagan) ÷ (1 − margen). Calcula con la tasa real de pago, no con el 100 %, y revisa el precio una vez al año, después del aumento del salario mínimo, que en 2026 quedó en $1.750.905.",
      },
      { type: "h2", content: "Por qué copiar el precio del vecino sale caro" },
      {
        type: "p",
        content:
          "La forma más común de poner precio es mirar cuánto cobra la escuela de la otra cuadra y cobrar un poco menos. El problema es que esa escuela puede tener la cancha prestada por un colegio, un entrenador que es el mismo dueño o simplemente estar perdiendo plata sin saberlo. Tu precio tiene que salir de tus costos; el mercado sirve para comprobar si ese precio es vendible, no para inventarlo.",
      },
      {
        type: "p",
        content:
          "El segundo error es dividir entre todos los inscritos. Si tienes 80 niños pero cada mes 8 no pagan a tiempo y 2 se retiran sin avisar, tu caja se mueve con 70, no con 80. La diferencia entre esos dos números es exactamente el margen que creías tener.",
      },
      { type: "h2", content: "La fórmula, paso a paso" },
      {
        type: "ol",
        items: [
          "Lista los costos fijos del mes: alquiler de cancha o piscina, honorarios o salarios de entrenadores, coordinación y administración, software, contador, seguros prorrateados, publicidad.",
          "Lista los costos variables por alumno: balones, petos y conos prorrateados, hidratación, dotación que regalas con la inscripción, comisión de la pasarela por cada pago en línea.",
          "Suma un colchón de imprevistos del 5 % al 10 % (lesiones, una cancha que se cae, un torneo que no estaba en el plan).",
          "Calcula los alumnos que pagan: inscritos × tasa real de pago. Si no la conoces, mira los últimos tres meses: pagos recibidos ÷ cobros emitidos.",
          "Costo por alumno que paga = costo total del mes ÷ alumnos que pagan.",
          "Precio = costo por alumno ÷ (1 − margen deseado). Un margen del 20 % significa dividir entre 0,8, no multiplicar por 1,2: son números distintos.",
          "Ajuste por meses cobrados: si pagas 12 meses de costos y cobras 11 mensualidades, multiplica por 12 ÷ 11.",
          "Redondea a una cifra fácil de recordar y de transferir ($180.000, no $183.417).",
        ],
      },
      { type: "h2", content: "Tabla de ejemplo ilustrativo: escuela de 80 alumnos" },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo. Las cifras de cancha, honorarios y seguros son supuestos para mostrar el cálculo; reemplázalas por las tuyas. Solo el plan de software y la tarifa de la pasarela son precios públicos.",
      },
      {
        type: "table",
        headers: ["Concepto", "Valor mensual", "Nota"],
        rows: [
          ["Cancha (16 h/semana)", "$2.400.000", "Supuesto"],
          ["4 entrenadores por prestación de servicios", "$5.200.000", "Supuesto: $1.300.000 c/u"],
          ["Coordinación / administración", "$1.500.000", "Supuesto"],
          ["Implementos prorrateados", "$300.000", "Balones, petos, conos a 12 meses"],
          ["Póliza de accidentes prorrateada", "$400.000", "Supuesto; cotiza la tuya"],
          ["Software (Escuela Crecimiento, hasta 120 alumnos)", "$99.000", "Precio público SportMaps"],
          ["Subtotal", "$9.899.000", ""],
          ["Imprevistos 5 %", "$494.950", ""],
          ["Costo total del mes", "$10.393.950", ""],
          ["Alumnos que pagan (80 × 90 %)", "72", "Tasa de pago supuesta"],
          ["Costo por alumno que paga", "$144.360", "$10.393.950 ÷ 72"],
          ["Precio con margen 20 %", "$180.450", "$144.360 ÷ 0,8"],
          ["Ajuste 11 mensualidades al año", "$196.855", "× 12 ÷ 11"],
          ["Precio final redondeado", "$195.000 o $200.000", "Decisión de la escuela"],
        ],
      },
      {
        type: "p",
        content:
          "Fíjate en lo que pasa si haces la cuenta con los 80 inscritos y sin el ajuste de meses: te da $162.400. Con ese precio, la escuela del ejemplo cubriría costos pero trabajaría casi sin margen, y en el mes que se caiga un patrocinio quedaría en rojo.",
      },
      { type: "h2", content: "Costos de referencia reales para 2026" },
      {
        type: "table",
        headers: ["Referencia", "Valor", "Fuente"],
        rows: [
          ["Salario mínimo mensual 2026", "$1.750.905", "Decreto 1469 de 2025"],
          ["Auxilio de transporte 2026", "$249.095", "Decreto 1470 de 2025"],
          ["Tarifa estándar Wompi por pago aprobado", "2,65 % + $700 + IVA", "Tarifa pública de Wompi publicada por Bancolombia, consultada el 14 oct 2026"],
          ["Base de cotización de un contratista", "40 % del valor mensual del contrato, mínimo 1 SMMLV", "Decreto 1273 de 2018"],
          ["Escuela Start / Crecimiento / Pro (mensual)", "$69.000 / $99.000 / $159.000", "Precios públicos SportMaps, 14 oct 2026"],
        ],
      },
      {
        type: "p",
        content:
          "Con la tarifa estándar de Wompi, un pago de $195.000 cuesta $5.868 de comisión más IVA ($6.983 en total). Ese costo existe solo si la familia paga en línea; si paga por transferencia, no. La escuela decide si lo absorbe (súmalo a los costos variables) o si cobra un recargo por pago en línea. Ojo: Wompi anunció en septiembre de 2026 una tarifa del 1 % + IVA para pagos por QR con condiciones específicas; revisa la tarifa vigente de tu cuenta antes de calcular.",
      },
      { type: "h2", content: "Inscripción y mensualidad: dos precios con dos trabajos distintos" },
      {
        type: "p",
        content:
          "La inscripción se cobra una vez y paga lo que cuesta recibir a un alumno nuevo: uniforme o kit, carnet, evaluación inicial, papeleo y la póliza del año si la cobras aparte. La mensualidad paga la operación. Meter todo en la mensualidad hace que tu precio parezca caro frente a la competencia; meter demasiado en la inscripción espanta a las familias en la primera conversación. Una regla práctica: que la inscripción cubra los costos de entrada del alumno y no mucho más.",
      },
      { type: "h2", content: "Cómo comprobar si el precio es vendible" },
      {
        type: "ul",
        items: [
          "Pregunta a tres o cuatro escuelas de tu zona y deporte cuánto cobran y qué incluyen (horas por semana, uniforme, torneos). Compara precio por hora de entrenamiento, no solo precio por mes.",
          "Si tu precio queda muy por encima, revisa primero los costos (¿la cancha está bien negociada?, ¿tienes grupos medio vacíos?) antes de bajar el margen.",
          "Si queda muy por debajo, no lo celebres: puede que estés olvidando un costo. Los más olvidados son tu propio sueldo, el contador y la reposición de implementos.",
          "Ofrece planes por frecuencia (2 o 3 sesiones semanales) en vez de descuentos generales. Así la familia elige y tú no regalas margen.",
        ],
      },
      { type: "h2", content: "Cuándo y cómo subir la mensualidad" },
      {
        type: "p",
        content:
          "Lo sano es revisar el precio una vez al año, en enero o al inicio de temporada, cuando ya conoces el aumento del salario mínimo y del arriendo. En 2026 el mínimo subió cerca del 23 %, así que una escuela con entrenadores atados al mínimo vio subir su costo más grande en esa proporción. Avisa con al menos un mes de anticipación, por escrito, explicando qué cambió. Y deja por escrito en el contrato de inscripción que el valor se revisa anualmente.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No subas el precio a mitad de semestre sin una razón clara y comunicada. La pérdida de confianza cuesta más alumnos que los que te ahorras en margen.",
      },
      { type: "h2", content: "Errores frecuentes al calcular" },
      {
        type: "ul",
        items: [
          "No incluir tu propio sueldo como director. Si la escuela solo da ganancia porque tú trabajas gratis, el precio está mal.",
          "Olvidar los meses sin ingresos (vacaciones) o los meses de baja inscripción a inicio de año.",
          "Calcular con grupos llenos cuando en realidad tienes grupos al 60 %.",
          "No separar lo que pagas una vez (arcos, uniformes iniciales) de lo que pagas cada mes.",
          "Ignorar el costo de los descuentos por hermanos y las becas, que también salen del margen.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps no decide tu precio: lo decides tú. Lo que hace es darte el dato que esta fórmula necesita. Separa la inscripción (una sola vez) de la mensualidad, genera los cobros de cada periodo, manda recordatorios por WhatsApp y correo, y te muestra cuántos cobros se pagaron, cuántos están pendientes y cuántos vencidos, que es tu tasa real de pago. Si usas descuento por hermanos o becas, el costo de esos descuentos también queda a la vista, y puedes configurar un recargo por mora si así lo decides.",
      },
      {
        type: "cta",
        title: "Calcula cuánto te cuesta tu operación",
        description: "Usa la calculadora de SportMaps para estimar tu plan según el número de alumnos.",
        href: "/calculadora",
        label: "Ir a la calculadora",
      },
    ],
    related: [
      "cuanto-cobra-una-escuela-de-futbol-en-colombia-2026",
      "inscripcion-vs-mensualidad-escuela-deportiva",
      "descuento-por-hermanos-y-becas-escuela-deportiva",
    ],
    about: ["precio de mensualidad", "escuelas deportivas", "punto de equilibrio", "costos operativos"],
    mentions: ["Wompi", "Bancolombia", "SportMaps"],
    faqs: [
      {
        question: "¿Cuánto debo cobrar de mensualidad en mi escuela deportiva?",
        answer:
          "Depende de tus costos, no del vecino. Suma los costos del mes, divídelos entre los alumnos que realmente pagan y divide el resultado entre 0,8 si quieres un margen del 20 %. Luego compara con el mercado para confirmar que el precio es vendible.",
      },
      {
        question: "¿Cómo calculo el punto de equilibrio de una escuela de fútbol?",
        answer:
          "Divide el costo total del mes entre el precio de la mensualidad. El resultado es el número de alumnos que deben pagar para no perder plata. Por ejemplo, con costos de $10.000.000 y una mensualidad de $180.000 necesitas 56 alumnos al día.",
      },
      {
        question: "¿Debo cobrar la mensualidad en diciembre si no hay entrenamientos?",
        answer:
          "Es decisión de cada escuela. Si no cobras diciembre, reparte los costos de 12 meses entre 11 mensualidades multiplicando el precio por 12 ÷ 11. Lo importante es dejarlo claro en el contrato de inscripción desde el principio.",
      },
      {
        question: "¿Quién paga la comisión de la pasarela de pagos?",
        answer:
          "La escuela decide. Puede absorberla dentro del precio o cobrar un recargo por pago en línea. Con la tarifa estándar de Wompi (2,65 % + $700 + IVA) un pago de $195.000 cuesta cerca de $7.000.",
      },
      {
        question: "¿Cada cuánto se debe subir la mensualidad?",
        answer:
          "Lo recomendable es revisarla una vez al año, después de conocer el aumento del salario mínimo y del arriendo de la cancha, y avisar por escrito con al menos un mes de anticipación.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. Contrato de inscripción
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "contrato-de-inscripcion-escuela-deportiva",
    title: "Contrato de inscripción para escuela deportiva: cláusulas modelo listas para adaptar",
    excerpt:
      "Qué debe decir el contrato que firman las familias al inscribir a un niño: pagos, mora, retiros, salud, datos personales e imagen. Con cláusulas modelo en texto.",
    category: "Guías",
    readTime: "7 min",
    date: "19 Sep 2026",
    isoDate: "2026-09-19",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un contrato de inscripción de escuela deportiva debe dejar por escrito, como mínimo: quiénes firman (la escuela y el acudiente del menor), qué servicio se presta y en qué horario, cuánto cuestan la inscripción y la mensualidad, cuándo se pagan, qué pasa si hay mora o retiro, cómo se manejan la salud y las lesiones, y las autorizaciones de datos personales y de uso de imagen. Abajo tienes cláusulas modelo para cada punto.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El contrato evita las discusiones más comunes: retiros sin aviso, reembolsos, cobros en vacaciones y fotos en redes. Escríbelo claro, sin letra pequeña, y pide que lo firme el acudiente legal. Las autorizaciones de datos y de imagen van separadas y son voluntarias.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Esta guía es orientativa y no es asesoría legal. Las cláusulas son un punto de partida; pide a un abogado que las revise para tu caso, tu ciudad y tu forma jurídica.",
      },
      { type: "h2", content: "Las normas que debes tener a la mano" },
      {
        type: "table",
        headers: ["Norma", "Para qué te sirve en el contrato"],
        rows: [
          ["Ley 1480 de 2011 (Estatuto del Consumidor)", "Las familias son consumidoras. Los artículos 42 y 43 prohíben las cláusulas abusivas (por ejemplo, renunciar de antemano a reclamar). El artículo 47 regula el derecho de retracto en ventas a distancia y por métodos no tradicionales."],
          ["Ley 1581 de 2012 y Decreto 1377 de 2013", "Tratamiento de datos personales. Los datos de niños y niñas solo se tratan respetando su interés superior y con autorización del representante legal."],
          ["Ley 2300 de 2023", "Fija horarios para contactar por cobranza: lunes a viernes de 7 a. m. a 7 p. m., sábados de 8 a. m. a 3 p. m., nunca domingos ni festivos. Revisa con tu abogado si aplica a tu escuela; como buena práctica, respétalos igual."],
          ["Código Civil", "Reglas generales de los contratos: consentimiento, capacidad (por eso firma el acudiente) y obligaciones de las partes."],
        ],
      },
      { type: "h2", content: "Cláusulas modelo" },
      {
        type: "p",
        content:
          "Reemplaza lo que está entre corchetes. Mantén la numeración: así, cuando surja una duda, todos hablan de la misma cláusula.",
      },
      { type: "h3", content: "Primera. Partes" },
      {
        type: "quote",
        content:
          "Entre [NOMBRE DE LA ESCUELA], identificada con NIT [NÚMERO], representada por [NOMBRE], en adelante LA ESCUELA, y [NOMBRE DEL ACUDIENTE], identificado con cédula [NÚMERO], quien actúa como representante legal del deportista [NOMBRE DEL MENOR], nacido el [FECHA], en adelante EL ACUDIENTE, se celebra el presente contrato de inscripción.",
      },
      { type: "h3", content: "Segunda. Objeto" },
      {
        type: "quote",
        content:
          "LA ESCUELA prestará al deportista el servicio de formación deportiva en [DEPORTE], en la categoría [CATEGORÍA], con una frecuencia de [N] sesiones semanales de [N] minutos, en [SEDE], según el horario publicado. LA ESCUELA podrá cambiar horarios o sede por causas justificadas, avisando con al menos [N] días de anticipación.",
      },
      { type: "h3", content: "Tercera. Valor y forma de pago" },
      {
        type: "quote",
        content:
          "EL ACUDIENTE pagará una inscripción única de $[VALOR], que incluye [KIT, CARNET, PÓLIZA, ETC.], y una mensualidad de $[VALOR], pagadera dentro de los primeros [N] días de cada mes, por los medios que LA ESCUELA habilite (pago en línea, transferencia o efectivo con comprobante). La mensualidad se cobra durante [N] meses al año; [MES O MESES] no se cobran. El valor se revisa una vez al año y cualquier cambio se avisará por escrito con al menos un mes de anticipación.",
      },
      { type: "h3", content: "Cuarta. Mora" },
      {
        type: "quote",
        content:
          "Si la mensualidad no se paga en la fecha acordada, LA ESCUELA podrá cobrar un recargo de $[VALOR] por mes vencido [solo si la escuela decide aplicarlo]. La mora no implica el retiro automático del deportista. Después de [N] mensualidades vencidas, LA ESCUELA podrá suspender la participación en torneos o el servicio, previo aviso escrito de [N] días al ACUDIENTE.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Diferencia importante: suspender no es cancelar. Muchas escuelas prefieren que la mora no saque al niño del grupo y la manejan con conversación y recordatorios. Decide tu política y escríbela tal cual la vas a aplicar.",
      },
      { type: "h3", content: "Quinta. Retiro y reembolsos" },
      {
        type: "quote",
        content:
          "EL ACUDIENTE puede retirar al deportista en cualquier momento avisando por escrito a LA ESCUELA. Si avisa antes del día [N] del mes, no se causará la mensualidad del mes siguiente. La inscripción no es reembolsable una vez entregado el kit o iniciadas las clases. Las mensualidades pagadas por adelantado de meses no iniciados se reembolsarán dentro de los [N] días hábiles siguientes a la solicitud.",
      },
      { type: "h3", content: "Sexta. Salud y aptitud física" },
      {
        type: "quote",
        content:
          "EL ACUDIENTE declara que el deportista está afiliado al sistema de salud ([EPS]) y que no conoce condición médica que le impida practicar el deporte, o informa las siguientes: [CONDICIONES]. EL ACUDIENTE se compromete a informar cualquier cambio. LA ESCUELA podrá pedir un certificado médico de aptitud deportiva.",
      },
      { type: "h3", content: "Séptima. Lesiones, primeros auxilios y póliza" },
      {
        type: "quote",
        content:
          "En caso de lesión, LA ESCUELA prestará los primeros auxilios básicos, contactará al ACUDIENTE y, si es necesario, trasladará al deportista al centro de salud más cercano. [LA ESCUELA cuenta / no cuenta] con póliza de accidentes personales para sus deportistas con [ASEGURADORA], cuyas coberturas se entregan como anexo.",
      },
      { type: "h3", content: "Octava. Entrega y recogida del menor" },
      {
        type: "quote",
        content:
          "El deportista solo será entregado al ACUDIENTE o a las personas autorizadas por escrito: [NOMBRES Y CÉDULAS]. LA ESCUELA no se hace responsable del menor antes de [N] minutos del inicio ni después de [N] minutos del final de la sesión.",
      },
      { type: "h3", content: "Novena. Datos personales" },
      {
        type: "quote",
        content:
          "EL ACUDIENTE autoriza a LA ESCUELA para tratar los datos personales suyos y del deportista con las siguientes finalidades: gestionar la inscripción, los cobros, la asistencia, la comunicación sobre la actividad y la seguridad del menor. Los datos de salud se usarán solo para atender al deportista. EL ACUDIENTE puede conocer, actualizar, rectificar y suprimir sus datos escribiendo a [CORREO]. La política de tratamiento está en [ENLACE].",
      },
      { type: "h3", content: "Décima. Uso de imagen (autorización aparte y voluntaria)" },
      {
        type: "quote",
        content:
          "[ ] Sí autorizo  [ ] No autorizo que LA ESCUELA publique fotos o videos del deportista en sus redes sociales y página web, sin fines comerciales. La negativa no afecta la inscripción. Esta autorización puede revocarse en cualquier momento por escrito.",
      },
      { type: "h3", content: "Undécima. Reglamento y comunicaciones" },
      {
        type: "quote",
        content:
          "EL ACUDIENTE declara conocer el reglamento interno de LA ESCUELA, que hace parte de este contrato. Las comunicaciones oficiales se harán por [APP / CORREO / WHATSAPP OFICIAL] y se considerarán recibidas el día de su envío.",
      },
      { type: "h3", content: "Duodécima. Vigencia y terminación" },
      {
        type: "quote",
        content:
          "Este contrato rige desde su firma hasta el [FECHA o fin de la temporada] y se renueva por periodos iguales si ninguna parte avisa lo contrario. LA ESCUELA podrá terminarlo por faltas graves al reglamento, siguiendo el procedimiento allí previsto.",
      },
      { type: "h2", content: "Errores comunes en los contratos de inscripción" },
      {
        type: "ul",
        items: [
          "Cláusulas que dicen que la escuela no responde por nada: además de abusivas, no te protegen frente a un juez.",
          "No decir qué meses se cobran y cuáles no; diciembre y enero son la discusión clásica.",
          "Mezclar la autorización de imagen con la aceptación del contrato, de modo que la familia no puede negarse.",
          "No definir quién puede recoger al menor.",
          "Copiar el contrato de un gimnasio de adultos sin adaptarlo a menores de edad.",
        ],
      },
      { type: "h2", content: "Cómo implementarlo sin papeleo" },
      {
        type: "ol",
        items: [
          "Redacta el contrato con estas cláusulas y llévalo a revisión con un abogado una sola vez.",
          "Publica el contrato, el reglamento y la política de datos en un enlace fijo.",
          "En el formulario de inscripción, pide al acudiente aceptar el contrato y marcar por separado las autorizaciones de datos e imagen.",
          "Guarda la fecha de aceptación y la versión del contrato que aceptó cada familia.",
          "Cuando cambies el contrato, sube la versión y pide aceptación de nuevo solo a quienes renueven.",
        ],
      },
      {
        type: "p",
        content:
          "En SportMaps la inscripción se hace por enlace o QR: el acudiente queda vinculado a la ficha del atleta y la escuela genera la inscripción (una sola vez) y la mensualidad por separado, que es exactamente lo que dice la cláusula tercera. El recargo por mora es opcional y lo define la escuela, y la mora no cancela automáticamente al atleta, que es lo que dice la cláusula cuarta.",
      },
      {
        type: "cta",
        title: "Inscripciones con enlace y cobros separados",
        description: "Conoce cómo SportMaps maneja inscripción, mensualidad y mora para escuelas en Colombia.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "reglamento-interno-escuela-deportiva",
      "datos-de-menores-ley-1581-escuelas-deportivas",
      "inscripcion-vs-mensualidad-escuela-deportiva",
    ],
    about: ["contrato de inscripción", "escuelas deportivas", "Estatuto del Consumidor", "protección de datos de menores"],
    mentions: ["Ley 1480 de 2011", "Ley 1581 de 2012", "Ley 2300 de 2023", "SportMaps"],
    faqs: [
      {
        question: "¿Una escuela deportiva necesita contrato de inscripción?",
        answer:
          "No hay una norma que exija un formato específico, pero tenerlo por escrito evita la mayoría de conflictos: retiros, reembolsos, mora y uso de imagen. Debe firmarlo el acudiente legal porque el deportista es menor de edad.",
      },
      {
        question: "¿Puede la escuela no devolver la inscripción si el niño se retira?",
        answer:
          "Puede pactarse que la inscripción no se reembolsa una vez entregado el kit o iniciadas las clases, siempre que se informe de forma clara antes de pagar. Las mensualidades de meses no iniciados conviene reembolsarlas; una cláusula que lo prohíba todo puede considerarse abusiva bajo la Ley 1480 de 2011.",
      },
      {
        question: "¿Necesito autorización para publicar fotos de los niños de la escuela?",
        answer:
          "Sí. Pide una autorización expresa, separada del contrato y voluntaria, que el acudiente pueda revocar. La negativa no debe afectar la inscripción del menor.",
      },
      {
        question: "¿La escuela puede sacar a un niño por no pagar la mensualidad?",
        answer:
          "Depende de lo que diga el contrato. Lo recomendable es escribir un procedimiento con aviso previo y distinguir entre suspender algunas actividades y cancelar la inscripción. Muchas escuelas prefieren que la mora no cancele automáticamente al deportista.",
      },
      {
        question: "¿A qué horas puede la escuela cobrar mensualidades atrasadas?",
        answer:
          "La Ley 2300 de 2023 fija para la cobranza de lunes a viernes de 7 a. m. a 7 p. m. y sábados de 8 a. m. a 3 p. m., sin contacto domingos ni festivos. Revisa con un abogado su alcance para tu escuela; como buena práctica, respeta esos horarios.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. Reglamento interno
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "reglamento-interno-escuela-deportiva",
    title: "Reglamento interno de una escuela deportiva: modelo por artículos para padres, deportistas y entrenadores",
    excerpt:
      "Un reglamento claro evita la mitad de los conflictos. Artículos modelo sobre asistencia, conducta, comunicación, protección del menor, convocatorias y sanciones con debido proceso.",
    category: "Organización",
    readTime: "7 min",
    date: "23 Sep 2026",
    isoDate: "2026-09-23",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "El reglamento interno de una escuela deportiva es el documento que dice cómo se comportan deportistas, padres y entrenadores, qué pasa cuando alguien falla y quién decide. Debe cubrir admisión, asistencia, uniformes, conducta, comunicación, salud, protección del menor, convocatorias a torneos y un sistema de faltas y sanciones con derecho a defensa. Si vas a constituir un club, además es un requisito legal: el artículo 6 del Decreto-Ley 1228 de 1995 exige un reglamento de funcionamiento.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Un buen reglamento es corto, concreto y se aplica igual para todos. Escríbelo en artículos numerados, haz que el acudiente lo acepte en la inscripción y revísalo una vez al año con lo que aprendiste de los conflictos reales.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa, no asesoría legal. Si tu escuela es o será un club con reconocimiento deportivo, revisa además los estatutos y el régimen disciplinario deportivo de tu liga.",
      },
      { type: "h2", content: "Qué problemas resuelve" },
      {
        type: "table",
        headers: ["Conflicto típico", "Artículo que lo previene"],
        rows: [
          ["Papá que grita al árbitro o al entrenador desde la tribuna", "Conducta de padres y acudientes"],
          ["¿Por qué convocaron a otro niño y no al mío?", "Criterios de convocatoria"],
          ["Mensajes del entrenador a un menor a las 11 p. m.", "Protección del menor y canales oficiales"],
          ["Niño que llega sin uniforme o tarde siempre", "Asistencia, puntualidad y presentación"],
          ["Discusión por sanciones aplicadas a dedo", "Faltas, sanciones y debido proceso"],
          ["Fotos de niños en redes personales del staff", "Imagen y redes sociales"],
        ],
      },
      { type: "h2", content: "Modelo de reglamento por artículos" },
      {
        type: "p",
        content:
          "Adapta los corchetes. Si un artículo no aplica a tu escuela, quítalo: un reglamento con reglas que nadie cumple pierde autoridad.",
      },
      { type: "h3", content: "Capítulo I. Disposiciones generales" },
      {
        type: "quote",
        content:
          "Artículo 1. Objeto. Este reglamento regula la convivencia, la participación y la disciplina de deportistas, acudientes y personal de [NOMBRE DE LA ESCUELA]. Artículo 2. Ámbito. Aplica en entrenamientos, partidos, torneos, viajes, eventos y en los canales digitales oficiales de la escuela. Artículo 3. Aceptación. La inscripción implica la aceptación de este reglamento por parte del acudiente y del deportista.",
      },
      { type: "h3", content: "Capítulo II. Admisión, categorías y asistencia" },
      {
        type: "quote",
        content:
          "Artículo 4. Categorías. Los deportistas se agrupan por año de nacimiento según [CRITERIO O NORMA DE LA LIGA]. El cambio de categoría lo decide la coordinación deportiva. Artículo 5. Asistencia. La asistencia se registra en cada sesión. Tres inasistencias sin justificar en un mes se informan al acudiente. Artículo 6. Puntualidad. El deportista debe llegar [N] minutos antes del inicio. Artículo 7. Presentación. Es obligatorio el uniforme de entrenamiento definido por la escuela, con canilleras [u otro implemento de protección del deporte].",
      },
      { type: "h3", content: "Capítulo III. Deberes de los deportistas" },
      {
        type: "quote",
        content:
          "Artículo 8. Son deberes del deportista: respetar a compañeros, rivales, árbitros y entrenadores; cuidar los implementos y las instalaciones; informar cualquier lesión o malestar; no consumir sustancias prohibidas; y mantener una conducta deportiva dentro y fuera de la cancha cuando represente a la escuela.",
      },
      { type: "h3", content: "Capítulo IV. Deberes de padres y acudientes" },
      {
        type: "quote",
        content:
          "Artículo 9. Son deberes del acudiente: pagar a tiempo según el contrato de inscripción; mantener actualizados los datos de contacto y de salud; recoger al deportista puntualmente; no dar instrucciones técnicas durante entrenamientos ni partidos; alentar sin insultar a nadie; y tratar cualquier inconformidad con la coordinación, no en la cancha ni en grupos de chat. Artículo 10. Durante los partidos, los acudientes permanecen en la zona destinada al público.",
      },
      { type: "h3", content: "Capítulo V. Deberes del personal" },
      {
        type: "quote",
        content:
          "Artículo 11. Entrenadores y personal deben: planificar las sesiones, registrar la asistencia, tratar a los deportistas con respeto y sin castigos humillantes o físicos, informar lesiones a la coordinación y al acudiente el mismo día, y abstenerse de cualquier trato preferente por razones distintas a las deportivas.",
      },
      { type: "h3", content: "Capítulo VI. Protección del menor" },
      {
        type: "quote",
        content:
          "Artículo 12. Ningún adulto de la escuela debe quedarse a solas con un menor en espacios cerrados; los vestuarios se supervisan desde la puerta. Artículo 13. La comunicación con deportistas menores de edad se hace por los canales oficiales y con el acudiente incluido; se prohíben los mensajes privados del personal a menores por redes personales. Artículo 14. Cualquier sospecha de maltrato o abuso se reporta de inmediato a la dirección, que activará la ruta de las autoridades competentes (ICBF, Policía de Infancia y Adolescencia o Comisaría de Familia).",
      },
      { type: "h3", content: "Capítulo VII. Comunicación, imagen y redes" },
      {
        type: "quote",
        content:
          "Artículo 15. Los canales oficiales son [APP, CORREO, NÚMERO DE WHATSAPP OFICIAL]. Los avisos publicados en ellos se consideran comunicados. Artículo 16. Las consultas administrativas se atienden en horario de [HORARIO]. Artículo 17. Solo se publican imágenes de deportistas cuyos acudientes lo hayan autorizado. El personal no publica fotos de menores en sus redes personales.",
      },
      { type: "h3", content: "Capítulo VIII. Convocatorias y competencias" },
      {
        type: "quote",
        content:
          "Artículo 18. La convocatoria a partidos y torneos es decisión técnica del entrenador, con base en asistencia, compromiso, nivel y etapa formativa. En categorías formativas menores de [EDAD], la escuela procura rotación y minutos para todos. Artículo 19. Los costos de torneos (inscripción, transporte, alimentación) se informan por escrito antes de confirmar la participación.",
      },
      { type: "h3", content: "Capítulo IX. Faltas y sanciones" },
      {
        type: "quote",
        content:
          "Artículo 20. Las faltas se clasifican en leves, graves y gravísimas, según la tabla anexa. Artículo 21. Debido proceso: antes de una sanción grave o gravísima, la coordinación informa por escrito los hechos al deportista y a su acudiente, escucha sus descargos dentro de [N] días hábiles y decide por escrito. La decisión puede apelarse ante la dirección dentro de [N] días hábiles. Artículo 22. Las sanciones son proporcionales, buscan formar y no humillar, y nunca consisten en castigo físico.",
      },
      {
        type: "table",
        headers: ["Tipo de falta", "Ejemplos", "Sanción sugerida"],
        rows: [
          ["Leve", "Llegar tarde sin aviso, no traer uniforme, uso del celular en la sesión", "Llamado de atención verbal; a la tercera, aviso al acudiente"],
          ["Grave", "Insultos a compañeros o árbitros, daño intencional de implementos, reiteración de faltas leves", "Suspensión de uno o dos partidos; reposición del daño"],
          ["Gravísima", "Agresión física, acoso, discriminación, consumo de sustancias en actividades de la escuela", "Suspensión prolongada o cancelación de la inscripción, previo debido proceso"],
          ["Faltas de acudientes", "Agresión verbal al personal o a otros padres, interferir en partidos", "Prohibición de asistir a partidos por un periodo; en casos graves, terminación del contrato"],
        ],
      },
      { type: "h3", content: "Capítulo X. Reforma" },
      {
        type: "quote",
        content:
          "Artículo 23. La dirección puede reformar este reglamento. Las reformas se comunican por los canales oficiales y rigen [N] días después de publicadas.",
      },
      { type: "h2", content: "Compromiso de padres (para firmar al inicio de temporada)" },
      {
        type: "quote",
        content:
          "Como acudiente de [NOMBRE DEL DEPORTISTA] me comprometo a: apoyar sin presionar; alentar a todo el equipo, no solo a mi hijo; respetar las decisiones del entrenador y del árbitro; no dar instrucciones desde la tribuna; llevar cualquier inconformidad a la coordinación por los canales oficiales; y recordar que mi hijo está aquí para aprender y divertirse.",
      },
      { type: "h2", content: "Cómo ponerlo en marcha" },
      {
        type: "ol",
        items: [
          "Escribe la primera versión con la coordinación y al menos un entrenador.",
          "Compártela con dos o tres familias de confianza antes de publicarla: detectan lo que no se entiende.",
          "Publícala en un enlace fijo y haz que la aceptación sea parte de la inscripción.",
          "Haz una reunión corta de inicio de temporada para explicar los cinco artículos que más conflictos generan.",
          "Lleva un registro de cada sanción grave con sus fechas y descargos.",
          "Revísalo al cierre de la temporada.",
        ],
      },
      {
        type: "p",
        content:
          "Lo que se puede medir, mídelo. En SportMaps la asistencia queda registrada por sesión (manual o por QR), los avisos salen por los canales oficiales de la escuela a las familias (dentro de la app y con notificación push) y el staff tiene roles y permisos distintos (coach, administración, recepción), así que un entrenador no ve más de lo que necesita. Eso le da soporte a los artículos de asistencia, comunicación y protección del menor.",
      },
      {
        type: "cta",
        title: "Comunicación oficial con las familias, en un solo lugar",
        description: "Asistencia, avisos y roles del staff dentro de SportMaps.",
        href: "/escuelas",
        label: "Conocer SportMaps",
      },
    ],
    related: [
      "contrato-de-inscripcion-escuela-deportiva",
      "reconocimiento-deportivo-club-paso-a-paso",
      "grupos-de-whatsapp-vs-app-escuela-deportiva",
    ],
    about: ["reglamento interno", "escuelas deportivas", "protección de menores en el deporte", "régimen disciplinario"],
    mentions: ["Decreto-Ley 1228 de 1995", "ICBF", "SportMaps"],
    faqs: [
      {
        question: "¿Qué debe tener el reglamento interno de una escuela de fútbol?",
        answer:
          "Como mínimo: admisión y categorías, asistencia y uniformes, deberes de deportistas, padres y entrenadores, protección del menor, comunicación oficial, criterios de convocatoria y un sistema de faltas y sanciones con debido proceso.",
      },
      {
        question: "¿Es obligatorio tener reglamento en una escuela deportiva?",
        answer:
          "Para un club deportivo sí: el artículo 6 del Decreto-Ley 1228 de 1995 exige un reglamento de funcionamiento para obtener el reconocimiento deportivo. Para una escuela que no es club no hay un formato obligatorio, pero es la mejor herramienta para evitar conflictos.",
      },
      {
        question: "¿Puede la escuela sancionar a un padre de familia?",
        answer:
          "Puede pactarse en el reglamento, por ejemplo, prohibirle asistir a partidos por un tiempo si agrede al personal o a otros padres. Debe estar escrito antes, aplicarse a todos por igual y seguir el mismo procedimiento de descargos.",
      },
      {
        question: "¿Cómo debe comunicarse un entrenador con los niños de la escuela?",
        answer:
          "Por los canales oficiales de la escuela y con el acudiente incluido. Lo recomendable es prohibir mensajes privados del personal a menores por redes personales y dejarlo escrito en el reglamento.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. Contratar entrenadores
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-contratar-entrenadores-prestacion-de-servicios",
    title: "Cómo contratar entrenadores por prestación de servicios sin crear un contrato laboral (Colombia 2026)",
    excerpt:
      "Cuándo un entrenador puede ser contratista y cuándo es empleado, cuánto paga de seguridad social sobre el 40 %, qué revisa la UGPP y qué debe decir el contrato.",
    category: "Guías",
    readTime: "7 min",
    date: "26 Sep 2026",
    isoDate: "2026-09-26",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Puedes contratar entrenadores por prestación de servicios solo si de verdad trabajan con autonomía: deciden cómo dar la sesión, no cumplen órdenes continuas ni horario de oficina y pueden trabajar para otros. Si les fijas jornada, los mandas y sancionas como a un empleado y les pagas un sueldo fijo cada mes, la ley presume que hay contrato de trabajo, sin importar cómo se llame el papel. En los dos casos, el contratista debe cotizar a salud, pensión y riesgos laborales sobre al menos el 40 % de lo que le pagas, y tú debes verificarlo antes de pagar.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Lo que define el contrato no es el nombre, sino cómo trabaja la persona. Prestación de servicios sirve para entrenadores por horas o por grupo con autonomía; un coordinador de tiempo completo que recibe órdenes es, casi siempre, un empleado. Pide la planilla de seguridad social pagada antes de cada pago.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa con normas vigentes a octubre de 2026; no es asesoría legal ni contable. Las reglas de cotización cambian; confirma cada caso con un contador o abogado laboral.",
      },
      { type: "h2", content: "Lo que dice la ley: los tres elementos del contrato de trabajo" },
      {
        type: "p",
        content:
          "El artículo 23 del Código Sustantivo del Trabajo (modificado por la Ley 50 de 1990) dice que hay contrato de trabajo cuando concurren tres elementos: actividad personal del trabajador, continuada subordinación o dependencia (el empleador puede exigirle cumplir órdenes en cualquier momento) y un salario como retribución. Cuando están los tres, hay contrato laboral y no deja de serlo por el nombre que se le dé.",
      },
      {
        type: "p",
        content:
          "El artículo 24 agrega una presunción: toda relación de trabajo personal se presume regida por un contrato de trabajo. En la práctica, si un entrenador demanda y prueba que prestó el servicio personalmente, le toca a la escuela demostrar que no había subordinación (así lo ha aplicado la Corte Suprema, por ejemplo en la sentencia SL1166 de 2018). Por eso se habla de contrato realidad.",
      },
      { type: "h2", content: "Señales de subordinación: la tabla para revisar tu caso" },
      {
        type: "table",
        headers: ["Señal", "Apunta a prestación de servicios", "Apunta a contrato laboral"],
        rows: [
          ["Horario", "Se pacta el grupo y la franja; el entrenador organiza su agenda", "Horario fijo de entrada y salida, con control y descuentos por llegar tarde"],
          ["Cómo se hace el trabajo", "El entrenador define la metodología con base en objetivos acordados", "Se le dan órdenes continuas sobre cómo y qué hacer en cada sesión"],
          ["Exclusividad", "Puede trabajar con otras escuelas o clubes", "Se le prohíbe trabajar para otros"],
          ["Pago", "Honorarios por grupo, sesión u horas, contra cuenta de cobro o factura", "Sueldo fijo mensual igual, se trabaje lo que se trabaje"],
          ["Disciplina", "Incumplimiento = terminación o penalidad pactada en el contrato", "Llamados de atención, memorandos, sanciones disciplinarias"],
          ["Tareas", "Las del objeto del contrato", "Cualquier tarea que se le asigne (recepción, aseo, cobranza)"],
        ],
      },
      {
        type: "p",
        content:
          "Ninguna señal sola decide. Pedirle a un entrenador que cumpla el horario del grupo es normal: el grupo entrena a las 4 p. m. Lo que pesa es el conjunto: si además le pones uniforme de staff, le llevas control de horas, le asignas tareas administrativas y lo sancionas, se parece mucho a un empleado.",
      },
      { type: "h2", content: "Seguridad social del contratista: el 40 %" },
      {
        type: "p",
        content:
          "El Decreto 1273 de 2018 fija que el ingreso base de cotización (IBC) de los contratistas por prestación de servicios personales es como mínimo el 40 % del valor mensualizado del contrato, sin IVA, y nunca menos de un salario mínimo ni más de 25. El contratista paga mes vencido. Las tarifas son: salud 12,5 %, pensión 16 % y riesgos laborales según la clase de riesgo (0,522 % en clase I).",
      },
      {
        type: "p",
        content:
          "Sobre riesgos laborales: la Ley 1562 de 2012 obliga a afiliar a la ARL a los contratistas con contratos de más de un mes. Según el Decreto 723 de 2013, en riesgos I a III paga el contratista; en riesgos IV y V paga el contratante. La clase de riesgo de un entrenador la asigna la ARL según la actividad; confírmala al afiliarlo.",
      },
      { type: "h3", content: "Dos ejemplos con el salario mínimo de 2026 ($1.750.905)" },
      {
        type: "table",
        headers: ["Concepto", "Contrato de $2.000.000/mes", "Contrato de $5.000.000/mes"],
        rows: [
          ["40 % del contrato", "$800.000", "$2.000.000"],
          ["IBC aplicado", "$1.750.905 (sube al mínimo)", "$2.000.000"],
          ["Salud 12,5 %", "$218.863", "$250.000"],
          ["Pensión 16 %", "$280.145", "$320.000"],
          ["ARL clase I 0,522 %", "$9.140", "$10.440"],
          ["Total que paga el contratista", "$508.148", "$580.440"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: cálculo propio con el Decreto 1273 de 2018, el Decreto 1469 de 2025 (salario mínimo 2026) y las tarifas vigentes de cotización. Mira el primer caso: un entrenador que factura $2.000.000 paga más del 25 % en seguridad social porque el IBC no puede bajar del mínimo. Es una de las razones por las que muchos entrenadores de medio tiempo prefieren varios contratos o un contrato laboral de tiempo parcial. Tenlo en cuenta al negociar honorarios.",
      },
      { type: "h2", content: "La UGPP: qué revisa y por qué te importa" },
      {
        type: "p",
        content:
          "La UGPP (Unidad de Gestión Pensional y Parafiscales) fiscaliza que los aportes a la seguridad social se paguen completos. Puede requerir a contratistas que no cotizaron sobre su base real y a empleadores que tienen trabajadores disfrazados de contratistas. Hoy el pago de los aportes está a cargo del propio contratista, mes vencido, pero el contratante debe verificar que se pagaron antes de pagar los honorarios. Guarda la planilla PILA de cada mes junto con la cuenta de cobro.",
      },
      { type: "h2", content: "Cláusulas mínimas del contrato de prestación de servicios" },
      {
        type: "ol",
        items: [
          "Objeto concreto: dirigir el grupo [CATEGORÍA] en [DEPORTE], [N] sesiones semanales, con un plan de entrenamiento que el contratista propone.",
          "Autonomía técnica: el contratista define la metodología; la escuela fija objetivos y estándares de seguridad, no órdenes diarias.",
          "Plazo y valor: duración, honorarios por sesión o por grupo y forma de pago contra cuenta de cobro o factura.",
          "Seguridad social: el contratista acredita cada mes el pago de salud, pensión y ARL sobre el IBC legal como condición para el pago.",
          "No exclusividad: el contratista puede prestar servicios a terceros, salvo con competidores directos durante la vigencia, si así se pacta.",
          "Protección del menor: obligación de cumplir el reglamento interno, sin contacto privado con menores por redes personales.",
          "Datos personales y confidencialidad: uso de los datos de deportistas solo para el servicio.",
          "Terminación: causales, preaviso y entrega de información al terminar.",
        ],
      },
      { type: "h2", content: "Paso a paso para contratar a un entrenador" },
      {
        type: "ol",
        items: [
          "Define el alcance: grupos, frecuencia, metas de la temporada.",
          "Pide hoja de vida, certificados de formación y referencias de otras escuelas o clubes.",
          "Haz una sesión de prueba observada con un grupo real.",
          "Revisa antecedentes: es una buena práctica cuando la persona va a trabajar con menores de edad.",
          "Firma el contrato antes de la primera sesión, con el reglamento interno como anexo.",
          "Pide la constancia de afiliación a salud, pensión y ARL.",
          "Cada mes, recibe la cuenta de cobro o factura junto con la planilla pagada, y luego paga.",
        ],
      },
      { type: "h2", content: "Cuándo NO conviene la prestación de servicios" },
      {
        type: "ul",
        items: [
          "El coordinador deportivo o administrativo de tiempo completo que recibe instrucciones diarias.",
          "La persona de recepción o cobranza con horario fijo.",
          "El entrenador que trabaja solo para ti, todos los días, con sueldo fijo y a quien supervisas como a un empleado.",
        ],
      },
      {
        type: "p",
        content:
          "En esos casos lo honesto, y lo más barato a largo plazo, es un contrato laboral (puede ser de tiempo parcial). Una demanda por contrato realidad puede incluir prestaciones sociales, vacaciones, aportes con intereses y sanciones.",
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps puedes tener entrenadores y staff ilimitados en todos los planes, cada uno con su rol (coach, administración, recepción, contador) y sus permisos. El entrenador toma la asistencia de su grupo y planifica sus sesiones, lo que te deja un registro de las sesiones dictadas para soportar sus cuentas de cobro. SportMaps no liquida nómina ni seguridad social: eso sigue siendo trabajo de tu contador.",
      },
      {
        type: "cta",
        title: "Staff ilimitado con roles y permisos",
        description: "Suma a todos tus entrenadores sin pagar por usuario.",
        href: "/entrenadores",
        label: "Ver herramientas para entrenadores",
      },
    ],
    related: [
      "cuanto-gana-un-entrenador-en-colombia",
      "como-abrir-una-escuela-de-futbol-en-colombia",
      "reglamento-interno-escuela-deportiva",
    ],
    about: ["contrato de prestación de servicios", "contrato realidad", "seguridad social de contratistas", "entrenadores deportivos"],
    mentions: ["UGPP", "Código Sustantivo del Trabajo", "Decreto 1273 de 2018", "Ley 1562 de 2012", "SportMaps"],
    faqs: [
      {
        question: "¿Puedo contratar a un entrenador por prestación de servicios?",
        answer:
          "Sí, si trabaja con autonomía: define su metodología, no recibe órdenes continuas ni tiene horario de oficina y puede trabajar con otros. Si hay subordinación, horario controlado y sueldo fijo, la ley presume un contrato de trabajo aunque el papel diga otra cosa.",
      },
      {
        question: "¿Sobre cuánto cotiza seguridad social un entrenador contratista?",
        answer:
          "Sobre el 40 % del valor mensual del contrato, sin IVA, con un mínimo de un salario mínimo ($1.750.905 en 2026) y un máximo de 25. Paga salud 12,5 %, pensión 16 % y ARL según la clase de riesgo, 0,522 % en clase I.",
      },
      {
        question: "¿Quién paga la ARL de un contratista?",
        answer:
          "Para contratos de más de un mes, en riesgos I a III la paga el contratista y en riesgos IV y V la paga el contratante, según la Ley 1562 de 2012 y el Decreto 723 de 2013. La clase de riesgo la asigna la ARL según la actividad.",
      },
      {
        question: "¿Qué es el contrato realidad?",
        answer:
          "Es cuando un contrato se llama de prestación de servicios pero en la práctica hay actividad personal, subordinación y salario. En ese caso un juez puede declarar que existió un contrato de trabajo y ordenar pagar prestaciones, vacaciones y aportes.",
      },
      {
        question: "¿Qué revisa la UGPP a una escuela deportiva?",
        answer:
          "Que los aportes a seguridad social se paguen completos y sobre la base correcta, tanto de empleados como de contratistas. Por eso conviene pedir y guardar la planilla PILA pagada de cada contratista antes de pagarle los honorarios.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. Póliza de seguro
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "poliza-seguro-escuela-deportiva-colombia",
    title: "Póliza de seguro para escuela deportiva en Colombia: qué cubrir, qué preguntar y qué no te obliga la ley",
    excerpt:
      "Accidentes personales, responsabilidad civil y ARL de entrenadores: qué protege cada una, qué es obligatorio y qué no, y el checklist para cotizar sin sorpresas.",
    category: "Guías",
    readTime: "7 min",
    date: "30 Sep 2026",
    isoDate: "2026-09-30",
    ...AUTHOR,
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela deportiva en Colombia debería tener, como mínimo, dos seguros: una póliza de accidentes personales para sus deportistas (cubre gastos médicos, incapacidad o muerte accidental durante la actividad) y una póliza de responsabilidad civil extracontractual (cubre los daños que la escuela cause a terceros). No encontramos una norma nacional que obligue a toda escuela privada a tener póliza de accidentes, pero muchas ligas, torneos, alcaldías y dueños de canchas la exigen, y un accidente sin seguro puede costarle a la escuela mucho más que la prima.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Accidentes personales protege al niño; responsabilidad civil protege a la escuela; la ARL protege al entrenador. Son tres cosas distintas. Cotiza con al menos dos aseguradoras, lee las exclusiones y define si la prima va en la inscripción o en la mensualidad.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa, no asesoría legal ni de seguros. Pregunta a tu liga, a tu ente municipal de deportes y al dueño de la cancha si exigen algún seguro; esas exigencias cambian por ciudad y por torneo.",
      },
      { type: "h2", content: "¿Es obligatorio? Lo que sí y lo que no" },
      {
        type: "table",
        headers: ["Situación", "¿Exige seguro?", "Dónde verificar"],
        rows: [
          ["Escuela privada que entrena en cancha alquilada", "No encontramos una norma nacional general que lo exija", "Contrato con el dueño de la cancha, que a menudo pide responsabilidad civil"],
          ["Inscripción de jugadores en torneos de liga", "Depende de cada liga y torneo", "Reglamento del torneo o de la liga"],
          ["Eventos abiertos al público (festivales, torneos propios)", "Algunas alcaldías piden póliza de responsabilidad civil para autorizar eventos", "Secretaría de gobierno o ente de deportes del municipio"],
          ["Entrenadores contratistas con contrato de más de un mes", "Sí, afiliación a ARL", "Ley 1562 de 2012"],
          ["Estudiantes de colegios oficiales de Bogotá", "La Secretaría de Educación contrata una póliza escolar, pero solo cubre actividades del colegio, no las de tu escuela", "Guía de la póliza escolar de la SED Bogotá"],
        ],
      },
      {
        type: "p",
        content:
          "El último punto genera confusión: muchas familias creen que el seguro estudiantil del colegio cubre al niño en la escuela deportiva de la tarde. La guía de la Secretaría de Educación de Bogotá aclara que su póliza aplica a estudiantes de colegios oficiales del distrito, en el calendario y horario escolar y en actividades bajo responsabilidad del colegio. Tu escuela no está dentro.",
      },
      {
        type: "p",
        content:
          "Además, aunque no haya póliza obligatoria, la responsabilidad sí existe: según el artículo 2341 del Código Civil, quien por culpa causa daño a otro debe indemnizarlo. Si un niño se lesiona por un arco mal anclado o por falta de supervisión, la escuela puede tener que responder con su patrimonio.",
      },
      { type: "h2", content: "Los tres seguros y qué cubre cada uno" },
      {
        type: "table",
        headers: ["Seguro", "Protege a", "Cubre típicamente", "Ojo con"],
        rows: [
          ["Accidentes personales (colectiva de deportistas)", "El deportista", "Gastos médicos por accidente, incapacidad permanente, muerte accidental, auxilio funerario", "Límite por evento, edades cubiertas, si incluye torneos y viajes"],
          ["Responsabilidad civil extracontractual", "La escuela", "Daños a terceros: lesiones a espectadores, daños a la cancha de otro, reclamos de familias", "Si cubre a los entrenadores contratistas y los eventos propios"],
          ["ARL", "El entrenador o empleado", "Accidentes y enfermedades de origen laboral", "No es una póliza voluntaria: es parte del sistema de seguridad social"],
        ],
      },
      {
        type: "p",
        content:
          "El sistema de salud (la EPS del niño) sigue atendiendo cualquier lesión: la póliza de accidentes no lo reemplaza, lo complementa. Sirve para pagar lo que la EPS no cubre o para atender más rápido, según el producto. Por eso conviene que la ficha del deportista diga su EPS y un contacto de emergencia.",
      },
      { type: "h2", content: "Checklist para cotizar una póliza de accidentes" },
      {
        type: "ol",
        items: [
          "¿Qué amparos incluye? Gastos médicos, incapacidad, muerte accidental, auxilio funerario, transporte en ambulancia.",
          "¿Cuál es el límite por accidente y por año? ¿Hay deducible?",
          "¿Qué edades cubre? Algunos productos excluyen menores de cierta edad o mayores de cierta edad.",
          "¿Cubre entrenamientos, partidos oficiales, torneos fuera de la ciudad y el trayecto?",
          "¿Qué deportes excluye? Revisa si tu deporte figura como de alto riesgo.",
          "¿Es colectiva (lista de inscritos) o individual? ¿Cómo se agregan y retiran deportistas a mitad de año?",
          "¿Cuál es el procedimiento de reclamación y en cuánto tiempo pagan?",
          "¿Tiene red de clínicas o es por reembolso?",
          "¿Cuál es la vigencia y cuándo se renueva?",
        ],
      },
      { type: "h2", content: "Cómo cobrar la póliza a las familias" },
      {
        type: "p",
        content:
          "Hay dos formas comunes. La primera es incluir la prima anual en la inscripción: es más simple y deja a todos cubiertos desde el primer día. La segunda es prorratearla en la mensualidad: el precio de entrada es más bajo, pero si alguien se retira en marzo, la escuela ya pagó su prima completa. Sea cual sea, escríbelo en el contrato de inscripción y entrega a cada familia un resumen de coberturas.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: si la póliza colectiva cuesta $X por deportista al año y tienes 80 inscritos, súmala como costo fijo mensual (80 × $X ÷ 12) en la fórmula de precio de tu mensualidad. No uses cifras de otra escuela: el valor cambia por deporte, edad y coberturas.",
      },
      { type: "h2", content: "Protocolo cuando hay un accidente" },
      {
        type: "ol",
        items: [
          "Detener la actividad y prestar primeros auxilios básicos. Al menos una persona del staff con formación en primeros auxilios por sesión.",
          "Llamar al acudiente y, si es necesario, a la línea de emergencias 123.",
          "Trasladar al centro de salud acordado con la aseguradora o al más cercano si es urgente.",
          "Registrar por escrito: hora, lugar, qué pasó, testigos y qué se hizo.",
          "Avisar a la aseguradora dentro del plazo de la póliza.",
          "Hacer seguimiento con la familia y registrar el regreso a la actividad.",
        ],
      },
      { type: "h2", content: "Prevención: lo que reduce los accidentes (y los reclamos)" },
      {
        type: "p",
        content:
          "La mejor póliza es la que casi no usas. Muchos accidentes en escuelas de formación vienen de cosas que se pueden controlar antes de la sesión, no de jugadas desafortunadas. Un recorrido de cinco minutos por la cancha y unas reglas simples bajan el riesgo y te dan argumentos si algún día hay un reclamo.",
      },
      {
        type: "ul",
        items: [
          "Arcos portátiles anclados o con contrapeso: un arco que se voltea es de los accidentes más graves en fútbol infantil.",
          "Revisión de la superficie antes de cada sesión: huecos, vidrios, charcos, mallas rotas.",
          "Relación de entrenadores por niños adecuada a la edad; en los más pequeños, siempre un adulto adicional.",
          "Hidratación y pausas en horas de calor; suspender con tormenta eléctrica.",
          "Canilleras obligatorias (o la protección propia de tu deporte) escritas en el reglamento.",
          "Calentamiento estructurado y progresión de cargas según la edad.",
          "Botiquín completo y revisado cada mes, con la lista de alergias y condiciones de cada grupo a mano.",
        ],
      },
      { type: "h2", content: "Qué contarle a las familias" },
      {
        type: "p",
        content:
          "Las familias no necesitan leer la póliza completa, pero sí saber tres cosas: si la escuela tiene seguro de accidentes y con quién, qué cubre en términos simples (por ejemplo, gastos médicos hasta cierto valor por accidente) y qué deben hacer si su hijo se lesiona. Entrégalo en una hoja de una página al inscribir y repítelo al inicio de cada temporada. Si no tienes póliza, dilo también: es más honesto y evita que una familia asuma una cobertura que no existe.",
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "En SportMaps la ficha del atleta puede guardar la EPS y el contacto de emergencia, y el carnet digital con QR permite identificar rápido al deportista en un torneo. Si la escuela trabaja con fisioterapeutas, pueden llevar la historia clínica deportiva del atleta dentro de la plataforma con el consentimiento del acudiente. SportMaps no vende seguros: la póliza la contratas con la aseguradora que elijas.",
      },
      {
        type: "cta",
        title: "Fichas, carnets y acudientes en un solo lugar",
        description: "Ten a mano la información que necesitas cuando pasa un accidente.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "contrato-de-inscripcion-escuela-deportiva",
      "carnet-digital-deportista",
      "como-abrir-una-escuela-de-futbol-en-colombia",
    ],
    about: ["póliza de accidentes personales", "responsabilidad civil extracontractual", "escuelas deportivas", "riesgos laborales"],
    mentions: ["ARL", "Secretaría de Educación de Bogotá", "Código Civil colombiano", "SportMaps"],
    faqs: [
      {
        question: "¿Es obligatorio que una escuela deportiva tenga póliza de accidentes en Colombia?",
        answer:
          "No encontramos una norma nacional que la exija de forma general a toda escuela privada. Sin embargo, ligas, torneos, alcaldías y dueños de canchas pueden exigirla, y la escuela responde por los daños que cause por culpa, así que es muy recomendable tenerla.",
      },
      {
        question: "¿El seguro del colegio cubre a mi hijo en la escuela de fútbol?",
        answer:
          "Normalmente no. Por ejemplo, la póliza escolar de la Secretaría de Educación de Bogotá cubre a estudiantes de colegios oficiales solo en actividades y horarios del colegio. Pregunta a la escuela deportiva si tiene su propia póliza de accidentes.",
      },
      {
        question: "¿Qué diferencia hay entre póliza de accidentes y responsabilidad civil?",
        answer:
          "La de accidentes personales paga gastos del deportista que se lesiona, haya o no culpa. La de responsabilidad civil cubre a la escuela cuando debe indemnizar a un tercero por un daño que causó. Lo ideal es tener las dos.",
      },
      {
        question: "¿Si el niño tiene EPS necesita póliza de accidentes?",
        answer:
          "La EPS atiende la lesión, pero la póliza complementa: puede cubrir gastos que la EPS no paga, incapacidad o muerte accidental, según el producto. No reemplaza la afiliación a salud.",
      },
      {
        question: "¿Los entrenadores necesitan ARL?",
        answer:
          "Sí. Los empleados se afilian por el empleador y los contratistas con contratos de más de un mes deben afiliarse según la Ley 1562 de 2012. En riesgos I a III paga el contratista y en IV y V el contratante.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. Reconocimiento deportivo
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "reconocimiento-deportivo-club-paso-a-paso",
    title: "Reconocimiento deportivo de un club en Colombia: requisitos y checklist paso a paso",
    excerpt:
      "Qué pide el Decreto-Ley 1228 de 1995 para que tu escuela funcione como club deportivo o promotor, quién otorga el reconocimiento, cuánto dura y para qué sirve.",
    category: "Guías",
    readTime: "7 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Para obtener el reconocimiento deportivo de un club en Colombia necesitas tres cosas, según el artículo 6 del Decreto-Ley 1228 de 1995: un acta de constitución con la lista de al menos 10 deportistas que consienten afiliarse, un reglamento de funcionamiento y la solicitud ante el ente deportivo de tu municipio, que otorga el reconocimiento en nombre del alcalde. El reconocimiento dura cinco años y es lo que te permite afiliarte a una liga y competir en torneos oficiales.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Club deportivo = un solo deporte y mínimo 10 deportistas. Club promotor = varios deportes, cuando aún no reúnes el mínimo. Reconocimiento deportivo ≠ personería jurídica: la personería solo es obligatoria si quieres acceder a recursos públicos.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa basada en el texto del Decreto-Ley 1228 de 1995 y sus modificaciones; no es asesoría legal. Cada municipio tiene su formulario y sus documentos adicionales: consúltalos antes de radicar.",
      },
      { type: "h2", content: "El marco legal en cuatro normas" },
      {
        type: "table",
        headers: ["Norma", "Qué establece"],
        rows: [
          ["Ley 181 de 1995 (Ley del Deporte)", "Crea el Sistema Nacional del Deporte y define el deporte formativo, asociado, competitivo y de alto rendimiento."],
          ["Decreto-Ley 1228 de 1995", "Estructura los organismos deportivos: define clubes deportivos (art. 2), clubes promotores (art. 3), sus requisitos (art. 6), el reconocimiento deportivo (art. 18) y la personería jurídica (art. 24)."],
          ["Ley 962 de 2005", "Modificó el artículo 18: el reconocimiento deportivo se concede por cinco años (antes eran dos)."],
          ["Decreto 1085 de 2015", "Decreto único reglamentario del sector deporte: compila el trámite y el contenido de los estatutos de los organismos deportivos."],
        ],
      },
      {
        type: "p",
        content:
          "Desde la Ley 1967 de 2019, Coldeportes se transformó en el Ministerio del Deporte, así que donde las normas antiguas dicen Coldeportes hoy debe leerse Ministerio del Deporte.",
      },
      { type: "h2", content: "Club deportivo, club promotor o escuela: cuál eres" },
      {
        type: "table",
        headers: ["Figura", "Deportes", "Mínimo de deportistas", "Para qué sirve"],
        rows: [
          ["Club deportivo (art. 2)", "Uno", "10 deportistas inscritos (art. 6)", "Afiliarse a la liga de su deporte y competir oficialmente"],
          ["Club promotor (art. 3)", "Varios", "Un número plural, sin el mínimo por deporte", "Fomentar deportes que aún no tienen el mínimo; luego cada deporte puede volverse club"],
          ["Escuela de formación como empresa (SAS o persona natural)", "Los que quiera", "No aplica", "Prestar el servicio de formación; puede actuar como club si cumple el art. 6 (parágrafo del art. 2)"],
        ],
      },
      {
        type: "p",
        content:
          "El parágrafo del artículo 2 permite que cajas de compensación, clubes sociales, colegios, organizaciones comunitarias y empresas públicas o privadas actúen como club deportivo en cada deporte sin cambiar su estructura, siempre que cumplan el artículo 6. Para una escuela que ya funciona como empresa, es la vía para competir en la liga sin crear otra entidad. Confirma con tu ente municipal cómo lo aplican.",
      },
      { type: "h2", content: "Checklist del reconocimiento deportivo" },
      {
        type: "ol",
        items: [
          "Define el deporte y la figura: club deportivo (un deporte, 10 o más deportistas) o club promotor (varios deportes).",
          "Reúne a los deportistas fundadores. Para menores de edad, el consentimiento de afiliación lo firma el acudiente.",
          "Haz la asamblea de constitución y redacta el acta: fecha, hora y lugar; nombre y domicilio del club; objeto y deporte; afiliados con identificación; aprobación del reglamento o estatutos; elección de dignatarios.",
          "Redacta el reglamento de funcionamiento o los estatutos: nombre, objeto, domicilio, colores, derechos y deberes de los afiliados, órganos de administración, control y disciplina (Decreto 1085 de 2015, art. 2.3.1.1).",
          "Elige los órganos: administración (presidente o junta), control (fiscal) y disciplina (comisión disciplinaria).",
          "Consigue el formulario de solicitud del ente deportivo de tu municipio y la lista de anexos que piden (copias de cédulas de dignatarios, aceptaciones de cargo, etc.).",
          "Radica la solicitud firmada por el representante.",
          "Espera la resolución. El reconocimiento corre desde la ejecutoria del acto administrativo.",
          "Con la resolución, solicita la afiliación a la liga departamental de tu deporte según sus requisitos.",
          "Actualiza el reconocimiento cada vez que cambien los órganos de administración o control.",
          "Pide la renovación antes de que se cumplan los cinco años.",
        ],
      },
      { type: "h2", content: "Reconocimiento deportivo vs. personería jurídica" },
      {
        type: "p",
        content:
          "Son dos trámites distintos. El reconocimiento deportivo te habilita dentro del Sistema Nacional del Deporte. La personería jurídica convierte al club en una entidad sin ánimo de lucro con existencia propia. Según el artículo 24 del Decreto-Ley 1228, los clubes deportivos y promotores del nivel municipal solo están obligados a obtener personería jurídica y organizarse como corporaciones para acceder a recursos públicos, o en los demás casos que la ley diga expresamente.",
      },
      {
        type: "table",
        headers: ["", "Reconocimiento deportivo", "Personería jurídica"],
        rows: [
          ["Quién lo otorga", "El alcalde, a través del ente deportivo municipal", "La autoridad competente según el nivel (para clubes municipales, la del municipio o departamento)"],
          ["Para qué", "Pertenecer al Sistema Nacional del Deporte, afiliarse a la liga", "Existir como persona jurídica, contratar, recibir recursos públicos"],
          ["Vigencia", "Cinco años (art. 18, modificado por la Ley 962 de 2005)", "Indefinida mientras la entidad exista"],
          ["¿Obligatorio?", "Sí, para funcionar como club (art. 6)", "Solo para acceder a recursos públicos o cuando la ley lo exija (art. 24)"],
        ],
      },
      { type: "h2", content: "Modelo de acta de constitución (texto para adaptar)" },
      {
        type: "quote",
        content:
          "ACTA DE CONSTITUCIÓN DEL CLUB DEPORTIVO [NOMBRE]. En [CIUDAD], el [FECHA], a las [HORA], en [DIRECCIÓN], se reunieron las personas que firman la lista anexa, con el fin de constituir un club deportivo, organismo de derecho privado, para fomentar y patrocinar la práctica de [DEPORTE] en el municipio de [MUNICIPIO]. 1. Se designó como presidente de la reunión a [NOMBRE] y como secretario a [NOMBRE]. 2. Se aprobó por unanimidad la constitución del club con el nombre [NOMBRE], domicilio en [MUNICIPIO] y colores [COLORES]. 3. Se aprobó el reglamento de funcionamiento, que se anexa. 4. Se eligieron los órganos: presidente [NOMBRE], fiscal [NOMBRE], comisión disciplinaria [NOMBRES]. Los elegidos aceptaron sus cargos. 5. Se autorizó al presidente para solicitar el reconocimiento deportivo ante [ENTE DEPORTIVO MUNICIPAL]. Anexo: lista de deportistas afiliados con nombre, documento, fecha de nacimiento, firma (o firma del acudiente en el caso de menores) y manifestación expresa de su consentimiento para afiliarse.",
      },
      {
        type: "p",
        content:
          "Antes de usarlo, pide al ente municipal su propio modelo: varios publican formatos y listas de anexos, y radicar con su formato ahorra devoluciones.",
      },
      { type: "h2", content: "Qué cambia cuando ya tienes el reconocimiento" },
      {
        type: "ul",
        items: [
          "Puedes pedir la afiliación a la liga de tu deporte y, con ella, inscribir equipos en torneos oficiales.",
          "Quedas sujeto a los estatutos de la liga y al régimen disciplinario deportivo.",
          "Debes mantener al día la lista de deportistas afiliados y los órganos del club.",
          "Si además obtienes personería jurídica, puedes presentar proyectos para recursos públicos de deporte.",
          "Tu escuela gana un argumento comercial: las familias que buscan competencia preguntan si el club está avalado por la liga.",
        ],
      },
      { type: "h2", content: "Errores que retrasan el trámite" },
      {
        type: "ul",
        items: [
          "Lista de deportistas sin el consentimiento firmado o con menores sin firma del acudiente.",
          "Acta sin elección de dignatarios o sin aprobación del reglamento.",
          "Reglamento copiado de otro club con nombres o colores que no son los tuyos.",
          "Olvidar actualizar el reconocimiento al cambiar de presidente.",
          "Dejar vencer los cinco años en plena temporada y quedar fuera de la liga.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "Para el trámite, lo que más tiempo toma es reunir los datos de los deportistas y sus acudientes. En SportMaps cada atleta tiene su ficha con documento, fecha de nacimiento y acudiente vinculado, organizada por categoría y equipo, y puedes generar carnets digitales con QR por equipo para los torneos. El trámite ante el municipio lo haces tú: SportMaps no radica documentos ni gestiona reconocimientos.",
      },
      {
        type: "cta",
        title: "Organiza a tus deportistas por categoría y equipo",
        description: "Fichas, acudientes y carnets listos para la liga.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "reglamento-interno-escuela-deportiva",
      "como-abrir-una-escuela-de-futbol-en-colombia",
      "categorias-por-ano-de-nacimiento-futbol-formativo",
    ],
    about: ["reconocimiento deportivo", "clubes deportivos", "Sistema Nacional del Deporte", "personería jurídica"],
    mentions: ["Ley 181 de 1995", "Decreto-Ley 1228 de 1995", "Decreto 1085 de 2015", "Ministerio del Deporte", "SportMaps"],
    faqs: [
      {
        question: "¿Qué requisitos pide el reconocimiento deportivo de un club?",
        answer:
          "El artículo 6 del Decreto-Ley 1228 de 1995 pide un acta de constitución con la lista de al menos 10 deportistas que consienten afiliarse, un reglamento de funcionamiento y el reconocimiento que otorga el alcalde a través del ente deportivo municipal. Cada municipio puede pedir anexos adicionales.",
      },
      {
        question: "¿Cuánto dura el reconocimiento deportivo?",
        answer:
          "Cinco años contados desde la ejecutoria del acto que lo concede, según el artículo 18 del Decreto-Ley 1228 de 1995, modificado por la Ley 962 de 2005. También debe actualizarse cuando cambian los órganos de administración o control.",
      },
      {
        question: "¿Un club deportivo necesita personería jurídica?",
        answer:
          "No siempre. Según el artículo 24 del Decreto-Ley 1228 de 1995, los clubes municipales solo están obligados a obtenerla para acceder a recursos públicos o cuando la ley lo exija expresamente.",
      },
      {
        question: "¿Cuántos deportistas necesito para crear un club deportivo?",
        answer:
          "Al menos 10 deportistas inscritos para un club deportivo. Si aún no los tienes, puedes constituir un club promotor, que agrupa varios deportes con un número plural de deportistas.",
      },
      {
        question: "¿Una escuela de fútbol que es SAS puede afiliarse a una liga?",
        answer:
          "El parágrafo del artículo 2 del Decreto-Ley 1228 permite que empresas públicas o privadas actúen como club deportivo en cada deporte si cumplen los requisitos del artículo 6. Confirma con tu ente municipal y con la liga cómo lo aplican.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. Descuento por hermanos y becas
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "descuento-por-hermanos-y-becas-escuela-deportiva",
    title: "Descuento por hermanos y becas en una escuela deportiva: cómo diseñarlos sin perder plata",
    excerpt:
      "Cuánto descontar, desde qué hijo, cómo dar becas con criterios claros y cómo calcular cuánto te cuesta cada descuento. Con política modelo y tabla de ejemplo.",
    category: "Organización",
    readTime: "7 min",
    date: "7 Oct 2026",
    isoDate: "2026-10-07",
    ...AUTHOR,
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "Un descuento por hermanos sano se aplica desde el segundo hijo activo, con un porcentaje que tu margen aguante (calculado, no copiado), y se recalcula solo cuando un hermano se retira. Las becas son otra cosa: se dan con criterios escritos, por un tiempo definido y con una revisión periódica. Lo que hunde a las escuelas no es dar descuentos, sino darlos sin saber cuánto cuestan ni por qué se dieron.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Un solo descuento por atleta, nunca acumulados. Hermanos automático desde el segundo hijo; becas y casos especiales a mano, con motivo escrito. Mide cada mes cuánto dejas de recibir por descuentos y trátalo como un costo de mercadeo.",
      },
      { type: "h2", content: "Por qué dar descuento por hermanos" },
      {
        type: "p",
        content:
          "Una familia con dos o tres hijos en la escuela es un cliente más estable: viene a las mismas sesiones, paga en un solo movimiento y es menos probable que se vaya. El descuento compensa que la familia esté pagando el doble o el triple. Pero cada punto de descuento sale de tu margen, así que hay que calcularlo.",
      },
      { type: "h2", content: "Cuánto te cuesta: tabla de ejemplo ilustrativo" },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: escuela de 100 alumnos con mensualidad de $180.000, de los cuales 20 son segundos hermanos y 4 son terceros hermanos. No son datos de ninguna escuela real.",
      },
      {
        type: "table",
        headers: ["Política", "Descuento por alumno", "Alumnos con descuento", "Lo que dejas de recibir al mes"],
        rows: [
          ["10 % desde el 2.º hijo", "$18.000", "24", "$432.000"],
          ["15 % desde el 2.º hijo", "$27.000", "24", "$648.000"],
          ["10 % al 2.º y 20 % del 3.º en adelante", "$18.000 / $36.000", "20 + 4", "$504.000"],
          ["20 % desde el 2.º hijo", "$36.000", "24", "$864.000"],
        ],
      },
      {
        type: "p",
        content:
          "Con una facturación de $18.000.000 al mes, un 10 % por hermano cuesta 2,4 % del ingreso; un 20 % cuesta 4,8 %. Si tu margen es del 15 %, un 20 % por hermano se come casi un tercio de la ganancia. Haz la cuenta con tus números antes de anunciar el porcentaje.",
      },
      { type: "h2", content: "Las reglas que evitan los problemas" },
      {
        type: "ol",
        items: [
          "Define qué es hermano: hijos del mismo acudiente activos en la escuela ese mes.",
          "Desde qué hijo: lo usual es desde el segundo; el primero paga completo.",
          "Un solo descuento por atleta: si tiene beca, no suma el de hermanos.",
          "Automático y mensual: si un hermano se retira, el otro vuelve a pagar completo el mes siguiente, sin que nadie tenga que acordarse.",
          "Sobre qué aplica: solo la mensualidad, no la inscripción, los uniformes ni los torneos (o lo que decidas, pero escríbelo).",
          "Visible en el recibo: la familia debe ver el valor completo, el descuento y el valor a pagar.",
        ],
      },
      { type: "h2", content: "Becas: con criterios, plazo y revisión" },
      {
        type: "p",
        content:
          "Una beca es un regalo de la escuela a un deportista y tiene que poder explicarse a las demás familias. Las dos razones habituales son el talento deportivo y la situación económica. Lo que no puede pasar es que la beca dependa de quién conoce al dueño.",
      },
      {
        type: "table",
        headers: ["Tipo de beca", "Criterio", "Contrapartida sugerida", "Revisión"],
        rows: [
          ["Deportiva", "Nivel y compromiso evaluados por el cuerpo técnico", "Asistencia mínima y representar a la escuela en torneos", "Semestral"],
          ["Socioeconómica", "Situación de la familia, con soporte que la escuela defina", "Asistencia mínima y buen comportamiento", "Semestral o anual"],
          ["Media beca", "Cualquiera de los anteriores en menor grado", "Las mismas", "Semestral"],
          ["Convenio (empresa, colegio, caja)", "Lo pactado con la entidad", "La del convenio", "Al renovar el convenio"],
        ],
      },
      { type: "h3", content: "Política modelo de becas (texto para adaptar)" },
      {
        type: "quote",
        content:
          "1. [NOMBRE DE LA ESCUELA] destina hasta el [N] % de sus cupos a becas totales o parciales. 2. Las becas deportivas las propone el cuerpo técnico y las aprueba la dirección; las socioeconómicas se solicitan por escrito con los soportes que defina la escuela. 3. Las becas cubren solo la mensualidad, salvo que se indique otra cosa. 4. Se otorgan por un semestre y se renuevan si el deportista cumple una asistencia mínima del [N] % y el reglamento interno. 5. Ningún deportista recibe dos descuentos al mismo tiempo. 6. La información socioeconómica de las familias es confidencial.",
      },
      { type: "h2", content: "Primos, referidos y casos especiales" },
      {
        type: "p",
        content:
          "Aparte de hermanos y becas, muchas escuelas quieren reconocer a primos o a familias que traen a otra familia. Hazlo a mano, caso por caso, y anota el motivo. Si lo dejas abierto como política general, termina siendo un descuento para todos. Y decide qué gana cuando un atleta califica para dos: la regla más clara es que el descuento asignado a mano reemplaza al automático.",
      },
      { type: "h2", content: "¿Y el descuento por pronto pago o pago anual?" },
      {
        type: "p",
        content:
          "Es un descuento con otro objetivo: no premia a la familia por tamaño, sino por pagar antes. Puede tener sentido si te ayuda con la caja (por ejemplo, cobrar el semestre completo en enero para pagar la cancha por adelantado), pero cuesta lo mismo que cualquier otro descuento y casi siempre lo toman las familias que igual iban a pagar a tiempo. Si lo ofreces, que sea por pagar el periodo completo por adelantado, no por pagar el día 1 en vez del día 5, y mantén la regla de un solo descuento por atleta.",
      },
      {
        type: "p",
        content:
          "Para la mora pasa lo contrario: en lugar de premiar al que paga, algunas escuelas prefieren un recargo por pago tardío. Las dos herramientas son decisión de la escuela; lo importante es escribirlas en el contrato de inscripción y aplicarlas igual para todos.",
      },
      { type: "h2", content: "Cuándo conviene y cuándo no" },
      {
        type: "table",
        headers: ["Situación", "¿Descuento por hermanos?", "Por qué"],
        rows: [
          ["Muchas familias con dos o más hijos en edad de formación", "Sí", "Retiene a la familia completa y simplifica el cobro"],
          ["Grupos llenos y con lista de interesados", "Opcional, bajo", "No necesitas atraer alumnos; protege el margen"],
          ["Margen menor al 10 %", "Con cuidado", "Un descuento alto puede dejarte en pérdida"],
          ["Escuela nueva buscando volumen", "Sí, por tiempo limitado", "Atrae familias; escribe hasta cuándo aplica"],
          ["Clases individuales o personalizadas", "Casi nunca", "El costo por alumno no baja con el segundo hermano"],
        ],
      },
      { type: "h2", content: "Cómo comunicar la política a las familias" },
      {
        type: "p",
        content:
          "Publica la política en el mismo enlace donde están el contrato y el reglamento, y menciónala en la conversación de inscripción. Un mensaje corto funciona mejor que un documento largo:",
      },
      {
        type: "quote",
        content:
          "Hola, [NOMBRE]. En [ESCUELA] tenemos descuento por hermanos: desde el segundo hijo activo, la mensualidad tiene un [N] % de descuento. Se aplica solo cada mes mientras los hermanos estén inscritos y lo verás detallado en tu recibo. No se acumula con becas ni otros descuentos. Cualquier duda, escríbenos por este canal.",
      },
      { type: "h2", content: "Errores comunes" },
      {
        type: "ul",
        items: [
          "Dar descuentos de palabra y olvidarlos: al tercer mes nadie sabe por qué esa familia paga menos.",
          "Dejar el descuento fijo cuando un hermano ya se retiró.",
          "Acumular hermanos, beca y pronto pago en el mismo niño.",
          "Becas sin fecha de vencimiento que se vuelven permanentes.",
          "No medir cuánto cuesta cada descuento al mes.",
        ],
      },
      { type: "h2", content: "Cómo lo maneja SportMaps" },
      {
        type: "p",
        content:
          "SportMaps tiene descuento por hermanos: la escuela lo activa en la configuración de pagos y define su porcentaje. Se aplica automáticamente desde el segundo hijo activo del mismo acudiente y se recalcula cada mes según quién esté matriculado, así que si un hermano se retira el descuento desaparece solo. Para primos, referidos o becas, la escuela fija a mano la cuota del atleta con su motivo, y ese valor manual reemplaza al descuento automático. Cada atleta tiene un solo descuento y la línea del descuento aparece en el recibo que ve la familia.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "La escuela decide sus precios y descuentos. SportMaps hace el cálculo y deja el rastro; no impone porcentajes.",
      },
      {
        type: "cta",
        title: "Descuento por hermanos automático",
        description: "Actívalo, define el porcentaje y deja que se recalcule cada mes.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "como-fijar-precio-mensualidad-escuela-deportiva",
      "como-cobrar-mensualidades-escuela-deportiva",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
    ],
    about: ["descuento por hermanos", "becas deportivas", "política de precios", "escuelas deportivas"],
    mentions: ["SportMaps"],
    faqs: [
      {
        question: "¿Cuánto descuento por hermanos debe dar una escuela deportiva?",
        answer:
          "No hay un número correcto: depende de tu margen. Calcula cuánto dejarías de recibir al mes con cada porcentaje antes de anunciarlo. Como referencia de cálculo, un 10 % desde el segundo hijo suele costar mucho menos que un 20 % y es más fácil de sostener.",
      },
      {
        question: "¿El descuento por hermanos aplica desde el primer hijo?",
        answer:
          "Lo usual es que el primer hijo pague completo y el descuento aplique desde el segundo hijo activo. Escríbelo en la política para evitar discusiones.",
      },
      {
        question: "¿Qué pasa con el descuento si uno de los hermanos se retira?",
        answer:
          "El hermano que sigue vuelve a pagar la mensualidad completa desde el mes siguiente. En SportMaps eso pasa solo, porque el descuento se recalcula cada mes según quién esté matriculado.",
      },
      {
        question: "¿Se pueden acumular la beca y el descuento por hermanos?",
        answer:
          "Lo recomendable es que no: un solo descuento por atleta. Si un deportista tiene beca, la beca reemplaza al descuento por hermanos.",
      },
      {
        question: "¿Cómo dar becas en una escuela de fútbol sin generar conflictos?",
        answer:
          "Con criterios escritos (deportivos o socioeconómicos), un plazo definido, una contrapartida como asistencia mínima y una revisión semestral. La información económica de las familias debe ser confidencial.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. Abrir una escuela de fútbol
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "como-abrir-una-escuela-de-futbol-en-colombia",
    title: "Cómo abrir una escuela de fútbol en Colombia: guía paso a paso 2026",
    excerpt:
      "Forma jurídica, RUT, cancha, entrenadores, póliza, contrato, precio, reconocimiento deportivo y cobros: los pasos en orden para abrir una escuela de fútbol en Colombia.",
    category: "Guías",
    readTime: "7 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    ...AUTHOR,
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Para abrir una escuela de fútbol en Colombia sigue este orden: define tu propuesta y categorías, elige la forma jurídica (persona natural, SAS o club sin ánimo de lucro), sácate el RUT y el registro mercantil si aplica, asegura la cancha, contrata entrenadores de forma legal, contrata una póliza, escribe el contrato de inscripción y el reglamento, calcula tu mensualidad, organiza cómo vas a cobrar y, si quieres competir en liga, tramita el reconocimiento deportivo. Esta guía explica cada paso con lo que cuesta y lo que suele salir mal.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Empieza pequeño y legal: una o dos categorías, una cancha bien negociada, entrenadores con contrato claro y una póliza. Valida que las familias paguen antes de crecer. El reconocimiento deportivo puede esperar a que tengas al menos 10 deportistas en una categoría.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Guía orientativa, no asesoría legal, contable ni tributaria. Los trámites y requisitos cambian por municipio; confirma cada paso con la entidad correspondiente y con un contador.",
      },
      { type: "h2", content: "Paso 1. Define la propuesta" },
      {
        type: "ul",
        items: [
          "¿Formación o competencia? Una escuela de iniciación (4 a 10 años) vive de la experiencia y la constancia; una de competencia vive de los resultados y de la liga.",
          "Categorías por año de nacimiento: arranca con dos o tres, no con todas.",
          "Frecuencia: 2 o 3 sesiones semanales es lo más común en formación.",
          "Zona: cerca de colegios y conjuntos residenciales, con parqueadero o transporte público.",
        ],
      },
      { type: "h2", content: "Paso 2. Elige la forma jurídica" },
      {
        type: "table",
        headers: ["Forma", "Ventajas", "Desventajas", "Cuándo conviene"],
        rows: [
          ["Persona natural con RUT (y registro mercantil si es comerciante)", "Rápida y barata de montar", "Respondes con tu patrimonio personal", "Para validar la idea con pocos alumnos"],
          ["SAS (Ley 1258 de 2008)", "Separa tu patrimonio, admite socios, se crea con documento privado", "Contabilidad y obligaciones tributarias de sociedad", "Cuando ya tienes ingresos estables o socios"],
          ["Club deportivo o entidad sin ánimo de lucro", "Accede a la liga y, con personería, a recursos públicos", "No reparte utilidades; órganos y estatutos", "Si el objetivo es competir y trabajar con recursos públicos"],
        ],
      },
      {
        type: "p",
        content:
          "Una escuela que funciona como SAS también puede actuar como club deportivo para afiliarse a la liga: el parágrafo del artículo 2 del Decreto-Ley 1228 de 1995 permite que empresas privadas lo hagan si cumplen los requisitos del artículo 6. Lo explicamos en la guía de reconocimiento deportivo.",
      },
      { type: "h2", content: "Paso 3. Trámites básicos" },
      {
        type: "ol",
        items: [
          "RUT ante la DIAN con la actividad económica correcta (pide al contador que la revise).",
          "Registro en la Cámara de Comercio si eres sociedad o persona natural comerciante.",
          "Cuenta bancaria a nombre de la escuela, separada de la personal.",
          "Facturación electrónica si estás obligado: tu contador te dirá si aplica según tu régimen e ingresos.",
          "Si tienes sede propia abierta al público, revisa los requisitos del artículo 87 del Código de Policía (Ley 1801 de 2016), como el uso del suelo.",
          "Política de tratamiento de datos personales (Ley 1581 de 2012), porque vas a manejar datos de menores.",
        ],
      },
      { type: "h2", content: "Paso 4. Asegura la cancha" },
      {
        type: "p",
        content:
          "La cancha suele ser el costo más alto después de los entrenadores. Negocia horas fijas por semestre, no por mes; pide por escrito qué pasa si llueve o si el dueño la necesita; y pregunta si exige póliza de responsabilidad civil. Los colegios y conjuntos con cancha subutilizada en la tarde son una opción frecuente: a veces aceptan un canje (cupos para sus estudiantes o residentes) en lugar de dinero.",
      },
      { type: "h2", content: "Paso 5. Entrenadores con contrato claro" },
      {
        type: "p",
        content:
          "Si contratas por prestación de servicios, el entrenador debe trabajar con autonomía y cotizar a seguridad social sobre al menos el 40 % de lo que le pagas (Decreto 1273 de 2018), con un mínimo de un salario mínimo. Si va a cumplir horario fijo con órdenes continuas y sueldo fijo, es un empleado. Lo explicamos en detalle en la guía de contratación de entrenadores.",
      },
      { type: "h2", content: "Paso 6. Póliza, contrato y reglamento" },
      {
        type: "ul",
        items: [
          "Póliza de accidentes personales para los deportistas y de responsabilidad civil para la escuela.",
          "Contrato de inscripción con valor, fechas de pago, mora, retiros, salud, datos e imagen.",
          "Reglamento interno con deberes de deportistas, padres y entrenadores, protección del menor y sanciones con debido proceso.",
        ],
      },
      { type: "h2", content: "Paso 7. Presupuesto de arranque" },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo de los rubros de arranque. Los valores dependen de tu ciudad y proveedores; cotiza los tuyos. El único precio público de la tabla es el del software.",
      },
      {
        type: "table",
        headers: ["Rubro", "Tipo", "Comentario"],
        rows: [
          ["Constitución (SAS o registro) y RUT", "Una vez", "El RUT es gratis; la Cámara de Comercio cobra según tarifas oficiales"],
          ["Implementos: balones, conos, petos, arcos portátiles", "Una vez + reposición", "Un balón por niño en formación es lo ideal"],
          ["Botiquín y formación en primeros auxilios", "Una vez + anual", "No negociable"],
          ["Uniformes iniciales", "Se recupera con la inscripción", "Pide anticipo o vende por tallas"],
          ["Cancha", "Mensual", "Tu costo fijo más alto junto a entrenadores"],
          ["Entrenadores", "Mensual", "Por sesión o por grupo"],
          ["Póliza", "Anual", "Prorrateable en inscripción o mensualidad"],
          ["Software de gestión", "Mensual", "SportMaps Free Start $0 hasta 20 alumnos; Escuela Start $69.000/mes hasta 50"],
          ["Publicidad local", "Mensual", "Volantes en colegios, redes, alianzas con conjuntos"],
        ],
      },
      { type: "h2", content: "Paso 8. Fija el precio y la forma de cobro" },
      {
        type: "p",
        content:
          "Calcula la mensualidad con tus costos reales divididos entre los alumnos que de verdad pagan, más tu margen (tenemos la fórmula con tabla en la guía de precio de la mensualidad). Separa la inscripción (una sola vez) de la mensualidad. Y define desde el día uno cómo vas a cobrar: transferencia con comprobante, pago en línea con pasarela, efectivo con recibo. Lo que no se ordena al empezar se vuelve una hoja de cálculo imposible al llegar a 60 alumnos.",
      },
      { type: "h2", content: "Paso 9. Reconocimiento deportivo y liga" },
      {
        type: "p",
        content:
          "Si quieres competir en torneos oficiales, necesitas el reconocimiento deportivo del ente deportivo de tu municipio: acta de constitución con al menos 10 deportistas, reglamento de funcionamiento y solicitud (Decreto-Ley 1228 de 1995, art. 6). Dura cinco años. Luego te afilias a la liga departamental de fútbol según sus requisitos. Si solo vas a hacer formación y torneos amistosos, puedes empezar sin él.",
      },
      { type: "h2", content: "Paso 10. Los primeros 90 días" },
      {
        type: "table",
        headers: ["Semana", "Qué hacer"],
        rows: [
          ["1 a 2", "Forma jurídica, RUT, cuenta bancaria, cancha negociada"],
          ["3 a 4", "Entrenadores contratados, póliza cotizada, contrato y reglamento escritos"],
          ["5 a 6", "Página de la escuela y enlace de inscripción, clases de prueba gratuitas"],
          ["7 a 8", "Primeras inscripciones y primeros cobros; registra quién paga y quién no"],
          ["9 a 12", "Ajusta grupos y horarios según asistencia; primer informe a las familias"],
        ],
      },
      { type: "h2", content: "Errores comunes al abrir una escuela de fútbol" },
      {
        type: "ul",
        items: [
          "Abrir todas las categorías a la vez con grupos de cuatro niños.",
          "No cobrar la inscripción y regalar el uniforme sin calcularlo.",
          "Manejar los pagos por WhatsApp personal y una libreta.",
          "No tener póliza ni protocolo de accidentes.",
          "Contratar a un amigo de entrenador sin contrato ni seguridad social.",
          "Bajar el precio para competir antes de conocer tus costos.",
        ],
      },
      { type: "h2", content: "Dónde ayuda SportMaps" },
      {
        type: "p",
        content:
          "SportMaps tiene un plan Free Start de $0 hasta 20 alumnos, pensado justo para arrancar. Incluye la página pública de la escuela con botón de inscripción, inscripción por enlace o QR, clase de prueba agendable, ficha del atleta con acudientes, categorías y equipos, cobros de inscripción y mensualidad con recordatorios automáticos, pagos en línea con Wompi o Mercado Pago (la plata va directo a tu cuenta), registro de pagos manuales y el asistente de WhatsApp IA, que lee los comprobantes que mandan las familias y los deja listos para que los apruebes con un toque. Cuando crezcas, subes de plan.",
      },
      {
        type: "cta",
        title: "Abre tu escuela con el plan gratis",
        description: "Free Start: $0 hasta 20 alumnos, con WhatsApp IA y pasarelas incluidas.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "reconocimiento-deportivo-club-paso-a-paso",
      "como-fijar-precio-mensualidad-escuela-deportiva",
      "software-escuelas-de-futbol-colombia",
    ],
    about: ["escuelas de fútbol", "emprendimiento deportivo", "formación deportiva", "gestión de escuelas deportivas"],
    mentions: ["DIAN", "Cámara de Comercio", "Wompi", "Mercado Pago", "WhatsApp", "SportMaps"],
    faqs: [
      {
        question: "¿Qué necesito para abrir una escuela de fútbol en Colombia?",
        answer:
          "Una forma jurídica (persona natural con RUT, SAS o club), una cancha, entrenadores con contrato, una póliza, un contrato de inscripción, un reglamento y un sistema para cobrar. Si quieres competir en liga, además el reconocimiento deportivo del ente municipal.",
      },
      {
        question: "¿Necesito ser licenciado o entrenador certificado para abrir una escuela de fútbol?",
        answer:
          "Para abrir la empresa no se exige un título específico, pero la calidad y la seguridad de los niños dependen de entrenadores formados. Las ligas y torneos pueden pedir requisitos a los técnicos; consúltalos en tu liga.",
      },
      {
        question: "¿Es mejor abrir la escuela como SAS o como club?",
        answer:
          "Una SAS separa tu patrimonio y permite repartir utilidades; un club sin ánimo de lucro no reparte utilidades pero facilita acceder a recursos públicos. Una SAS puede actuar como club deportivo si cumple el artículo 6 del Decreto-Ley 1228 de 1995. Decide con tu contador.",
      },
      {
        question: "¿Cuántos alumnos necesito para que una escuela de fútbol sea rentable?",
        answer:
          "Divide tus costos mensuales entre tu mensualidad y obtienes el número de alumnos que deben pagar para no perder. Por ejemplo, con costos de $8.000.000 y una mensualidad de $160.000 necesitas 50 alumnos al día; suma un margen por los que pagan tarde.",
      },
      {
        question: "¿Necesito reconocimiento deportivo para abrir una escuela de fútbol?",
        answer:
          "No para empezar a dar clases. Sí lo necesitas para funcionar como club, afiliarte a la liga y competir en torneos oficiales. Exige al menos 10 deportistas, acta de constitución y reglamento.",
      },
    ],
  },
];
