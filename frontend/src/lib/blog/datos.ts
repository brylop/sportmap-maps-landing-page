import type { BlogPost } from "../blog-posts";

/**
 * Cluster "datos" (categoría Análisis). Imanes de citas: cada cifra lleva su
 * fuente. Lo que no tiene dato público va marcado como ejemplo ilustrativo.
 * Fuentes consultadas el 14 oct 2026.
 */
export const datosPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "kpis-escuela-deportiva-formulas-retencion-churn",
    title: "KPIs de una escuela deportiva: fórmulas de retención, churn, LTV, mora y ocupación",
    excerpt:
      "Las cinco métricas que dicen si tu escuela crece o se desangra, con la fórmula exacta, un ejemplo numérico y los errores que inflan los resultados.",
    category: "Análisis",
    readTime: "7 min",
    date: "18 Sep 2026",
    isoDate: "2026-09-18",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Los cinco KPIs que una escuela deportiva debe medir cada mes son: retención (alumnos que siguen respecto a los que había al inicio), churn o tasa de retiro (su contrario), LTV o valor de vida del alumno (cuánto paga en promedio durante toda su permanencia), tasa de mora (qué parte de lo facturado no se ha pagado a tiempo) y ocupación por grupo (cupos usados sobre cupos disponibles). Con esos cinco números sabes si el problema es que no llegan alumnos, que se van, que no pagan o que tienes grupos vacíos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Mide siempre sobre la misma base: alumnos activos al primer día del mes, sin contar los que entraron durante el mes. Calcula la mora sobre lo facturado, no sobre lo cobrado. Y antes de abrir un grupo nuevo, revisa la ocupación de los que ya tienes.",
      },
      { type: "h2", content: "Las cinco fórmulas en una tabla" },
      {
        type: "table",
        headers: ["KPI", "Fórmula", "Qué responde"],
        rows: [
          [
            "Retención mensual",
            "(Activos al final del mes − Altas del mes) ÷ Activos al inicio del mes × 100",
            "¿Cuántos de los que tenía se quedaron?",
          ],
          [
            "Churn mensual",
            "Retiros del mes ÷ Activos al inicio del mes × 100 (equivale a 100 − retención)",
            "¿Qué parte de mi base pierdo cada mes?",
          ],
          [
            "LTV (valor de vida)",
            "Mensualidad promedio × Permanencia promedio en meses (+ inscripción)",
            "¿Cuánto vale traer un alumno nuevo?",
          ],
          [
            "Tasa de mora",
            "Valor vencido sin pagar ÷ Valor facturado del periodo × 100",
            "¿Qué parte de lo que cobré no ha entrado?",
          ],
          [
            "Ocupación por grupo",
            "Alumnos inscritos en el grupo ÷ Cupo máximo del grupo × 100",
            "¿Dónde me sobran o me faltan cupos?",
          ],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: fórmulas estándar de métricas de suscripción adaptadas a escuelas deportivas por SportMaps. La permanencia promedio se aproxima como 1 ÷ churn mensual (en meses) cuando el churn es estable.",
      },
      { type: "h2", content: "1. Retención y churn: el par que más importa" },
      {
        type: "p",
        content:
          "La retención mide cuántos alumnos que ya tenías siguen contigo. El error más común es mezclar altas con permanencias: si empezaste el mes con 100 alumnos, se fueron 8 y entraron 10, terminas con 102, pero tu retención no es 102 %. Es 92 %, porque de los 100 originales quedaron 92. El churn es el 8 %.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: una escuela de fútbol empieza marzo con 120 alumnos activos. Durante el mes entran 9 y se retiran 6. Termina con 123. Retención = (123 − 9) ÷ 120 × 100 = 95 %. Churn = 6 ÷ 120 × 100 = 5 %.",
      },
      {
        type: "p",
        content:
          "Mide el churn por mes y también por temporada. En Colombia el retiro se concentra en momentos concretos: el regreso de vacaciones de mitad de año, el inicio del calendario escolar y diciembre. Un churn mensual de 5 % parece poco, pero sostenido durante 12 meses significa que, sin nuevas inscripciones, terminarías el año con alrededor del 54 % de la base (0,95 elevado a 12).",
      },
      { type: "h3", content: "Qué contar como retiro" },
      {
        type: "ul",
        items: [
          "Cuenta como retiro al alumno que tú o la familia dieron de baja, no al que está en mora. La mora es otro indicador.",
          "Una pausa de vacaciones acordada no es retiro; regístrala aparte para no inflar el churn.",
          "Si un alumno cambia de grupo o de sede dentro de la misma escuela, no es retiro.",
          "Si un hermano se va y el otro sigue, cuenta un retiro, no dos ni cero.",
        ],
      },
      { type: "h2", content: "2. LTV: cuánto vale un alumno" },
      {
        type: "p",
        content:
          "El LTV responde cuánto puedes gastar, como máximo, en conseguir un alumno nuevo (publicidad, clase de cortesía, descuento de inscripción). La fórmula simple es mensualidad promedio por meses de permanencia, más la inscripción si la cobras.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: mensualidad promedio de $150.000, churn mensual de 5 % (permanencia promedio ≈ 1 ÷ 0,05 = 20 meses) e inscripción de $100.000. LTV = $150.000 × 20 + $100.000 = $3.100.000. Si el margen después de pagar entrenadores y cancha es del 35 %, el LTV en margen es cerca de $1.085.000.",
      },
      {
        type: "p",
        content:
          "Para calibrar la permanencia hay un dato externo útil: según la encuesta nacional a padres del Aspen Institute (Project Play, 2019, 1.032 padres en Estados Unidos), el niño promedio deja un deporte después de 2,86 años de practicarlo. Si tu permanencia promedio calculada supera con mucho esa cifra, revisa que no estés contando como activos a alumnos que en realidad ya se fueron.",
      },
      { type: "h2", content: "3. Tasa de mora: sobre lo facturado, no sobre lo cobrado" },
      {
        type: "p",
        content:
          "La tasa de mora es el valor vencido sin pagar dividido por el valor facturado del periodo. Usa valores en pesos, no número de alumnos: tres mensualidades de arqueros o de grupos de competencia no pesan lo mismo que tres de iniciación. Y separa mora corta (1 a 30 días) de mora larga (más de 30): la primera suele ser olvido; la segunda, una conversación pendiente.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: en abril facturaste $18.000.000. Al día 15 hay $2.700.000 vencidos sin pagar. Tasa de mora = 2.700.000 ÷ 18.000.000 × 100 = 15 %. Si $1.900.000 tienen menos de 30 días y $800.000 más de 30, tu mora larga es 4,4 %.",
      },
      {
        type: "p",
        content:
          "Lo que más baja la mora corta no es el recargo, sino recordar a tiempo y facilitar el pago. Por eso en SportMaps los recordatorios de cobro salen automáticos por correo y WhatsApp con un enlace corto de pago (PSE, Nequi, tarjetas) que la familia abre sin iniciar sesión. El recargo por mora es opcional y lo define cada escuela; la mora no cancela automáticamente al atleta.",
      },
      { type: "h2", content: "4. Ocupación por grupo" },
      {
        type: "p",
        content:
          "La ocupación es alumnos inscritos sobre cupo máximo del grupo. Es la métrica que más dinero esconde, porque tu costo de entrenador y cancha es casi fijo por grupo: un grupo al 50 % cuesta casi lo mismo que uno al 100 %.",
      },
      {
        type: "table",
        headers: ["Grupo (ejemplo ilustrativo)", "Inscritos", "Cupo", "Ocupación", "Lectura"],
        rows: [
          ["Sub-8 martes y jueves", "18", "20", "90 %", "Casi lleno: abrir lista de interesados"],
          ["Sub-10 lunes y miércoles", "11", "20", "55 %", "Fusionar o empujar captación"],
          ["Sub-12 sábados", "20", "20", "100 %", "Lleno: considerar subir precio o abrir otro"],
          ["Arqueros", "4", "8", "50 %", "Normal en grupos especializados"],
        ],
      },
      {
        type: "p",
        content:
          "Mide también la asistencia real sobre inscritos. Un grupo puede estar al 100 % de inscritos pero con 60 % de asistencia promedio, y esa caída suele anticipar un retiro. Si tomas asistencia por QR o con torniquetes, el dato sale solo.",
      },
      { type: "h2", content: "Datos reales para calibrar tus supuestos" },
      {
        type: "table",
        headers: ["Dato", "Valor", "Fuente"],
        rows: [
          ["Edad promedio a la que un niño deja un deporte", "Hacia los 11 años", "Aspen Institute, Project Play, encuesta nacional a padres 2019"],
          ["Tiempo promedio en un deporte antes de dejarlo", "2,86 años", "Aspen Institute, Project Play 2019"],
          ["Motivo principal de retiro", "Dejó de divertirse o perdió interés (36 %)", "Aspen Institute, Project Play 2019"],
          ["Niños y adolescentes que dejan el fútbol organizado de una temporada a otra", "Entre 18 % y 36 % según el estudio", "Temple y Crane (2018), revisión sistemática sobre fútbol"],
          ["Escolares colombianos de 5 a 12 años que cumplen la recomendación de actividad física", "31,1 %", "ICBF, ENSIN 2015"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Aspen Institute Project Play (projectplay.org, 2019); Temple, V. A. y Crane, J. R. (2018), revisión sobre abandono del fútbol organizado; ICBF, Encuesta Nacional de la Situación Nutricional ENSIN 2015. Son referencias externas, no promedios del mercado colombiano de escuelas; úsalas para detectar si tus números son razonables.",
      },
      { type: "h2", content: "Cómo montar el tablero en 5 pasos" },
      {
        type: "ol",
        items: [
          "Fija el corte: el primer día de cada mes congela la lista de alumnos activos.",
          "Registra cada alta y cada retiro con fecha y motivo (precio, horario, cambio de ciudad, perdió interés, lesión).",
          "Al cierre del mes, cruza lo facturado contra lo pagado y separa mora corta y larga.",
          "Calcula la ocupación de cada grupo y márcalo en verde (más de 80 %), amarillo (50 a 80 %) o rojo (menos de 50 %).",
          "Compara con el mismo mes del año anterior, no solo con el mes pasado: la estacionalidad engaña.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo NO obsesionarte con estos números: si tienes menos de 30 alumnos, un solo retiro mueve el churn más de 3 puntos. Mira tendencias de tres meses, no el dato de un mes.",
      },
      { type: "h2", content: "Qué hacer con cada resultado" },
      {
        type: "ul",
        items: [
          "Churn alto con mora baja: el problema no es el precio, es la experiencia. Revisa motivos de retiro y asistencia por grupo.",
          "Mora alta con churn bajo: las familias quieren seguir, pero se te olvida cobrar o pagar es difícil. Automatiza recordatorios y ofrece pago en línea.",
          "Ocupación baja en varios grupos: antes de invertir en publicidad, fusiona grupos y libera horas de cancha.",
          "LTV alto y ocupación alta: tienes margen para invertir en captación o para abrir sede.",
        ],
      },
      {
        type: "cta",
        title: "Mide cobros, mora y asistencia sin armar Excel",
        description:
          "SportMaps registra cobros, pagos y asistencia por grupo. Empieza gratis con hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "metricas-clave-academias",
      "reducir-mora-escuela-deportiva-sin-perder-alumnos",
      "por-que-se-retiran-los-ninos-del-deporte",
    ],
    about: [
      "indicadores clave de desempeño (KPI)",
      "retención de clientes",
      "tasa de abandono (churn)",
      "gestión de escuelas deportivas",
    ],
    mentions: ["Aspen Institute", "Project Play", "ICBF", "ENSIN", "SportMaps"],
    faqs: [
      {
        question: "¿Cómo se calcula la retención de alumnos en una escuela deportiva?",
        answer:
          "Toma los alumnos activos al final del mes, réstale los que entraron durante el mes y divide entre los activos al inicio. Multiplica por 100. Si empezaste con 120, entraron 9 y terminaste con 123, la retención es (123 − 9) ÷ 120 = 95 %.",
      },
      {
        question: "¿Qué es un churn normal para una escuela de fútbol?",
        answer:
          "No hay un promedio público confiable para escuelas en Colombia. Como referencia, una revisión sobre fútbol organizado (Temple y Crane, 2018) encontró que entre 18 % y 36 % de los niños deja de una temporada a otra. Compara tu churn contigo mismo mes a mes y contra el mismo mes del año anterior.",
      },
      {
        question: "¿Cómo calculo la tasa de mora de mi escuela?",
        answer:
          "Divide el valor vencido sin pagar entre el valor facturado del mismo periodo y multiplica por 100. Hazlo en pesos, no en número de alumnos, y separa la mora de menos de 30 días de la de más de 30.",
      },
      {
        question: "¿Qué es el LTV y para qué le sirve a una academia?",
        answer:
          "Es el valor total que paga un alumno durante su permanencia: mensualidad promedio por meses que se queda, más la inscripción. Te dice cuánto puedes gastar como máximo en conseguir un alumno nuevo sin perder plata.",
      },
      {
        question: "¿Cuándo conviene abrir un grupo nuevo?",
        answer:
          "Cuando los grupos de esa edad y horario están por encima del 80 % de ocupación y tienes interesados esperando. Si hay grupos por debajo del 50 %, primero fusiona o llénalos: cada grupo nuevo suma costo de entrenador y cancha.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "cuanto-cobra-una-escuela-de-futbol-en-colombia-2026",
    title: "¿Cuánto cobra una escuela de fútbol en Colombia en 2026? Precios reales en Bogotá, Medellín y Cali",
    excerpt:
      "Mensualidades e inscripciones publicadas por escuelas, clubes y cajas de compensación, con su fuente y año. Del programa gratuito al club profesional.",
    category: "Análisis",
    readTime: "7 min",
    date: "24 Sep 2026",
    isoDate: "2026-09-24",
    author: "Brayan López",
    authorRole: "CEO de SportMaps",
    authorUrl: "https://www.linkedin.com/in/brayanlopezro/",
    heroGradient: "from-sport-accent to-sport-primary",
    body: [
      {
        type: "p",
        content:
          "En 2026 una escuela de fútbol privada en una ciudad grande de Colombia cobra, según los precios que las propias escuelas publican, entre $150.000 y $200.000 de mensualidad por 2 a 4 días de entrenamiento a la semana, más una matrícula anual de $100.000 en adelante. Las escuelas de clubes profesionales están más arriba (sus últimos precios públicos, de 2023, iban de $160.000 a $315.000 al mes), las cajas de compensación cobran mucho menos a sus afiliados y los programas de las alcaldías son gratuitos.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El precio depende más de quién está detrás de la escuela (alcaldía, caja de compensación, escuela de barrio, club profesional) que de la ciudad. Pocas escuelas publican su tarifa: las cifras de esta guía son las que sí lo hacen, con su año. Cuando compares, suma inscripción, uniforme y póliza, no solo la mensualidad.",
      },
      { type: "h2", content: "Tabla de precios publicados" },
      {
        type: "table",
        headers: ["Escuela / programa", "Ciudad", "Matrícula o inscripción", "Mensualidad", "Año del dato"],
        rows: [
          ["Escuela de Fútbol San Pablo", "Bogotá (norte)", "$100.000 + uniforme $90.000", "$150.000 (2 días/semana) · $200.000 (4 días/semana)", "2026"],
          ["Escuelas de Mi Barrio y escuelas deportivas del IDRD", "Bogotá", "Gratis", "Gratis", "2026"],
          ["Comfacauca, Esfoder (tarifa particular)", "Popayán", "—", "$79.600 (base I) a $206.800 (formación específica IV)", "2026"],
          ["Comfacauca, Esfoder (afiliado categoría A)", "Popayán", "—", "$14.200 a $36.700", "2026"],
          ["Escuela Carlos Sarmiento Lora", "Cali", "—", "$155.000 (promedio, 507 deportistas)", "2024"],
          ["Atlético Nacional, escuela", "Medellín", "$300.000 + indumentaria $400.000", "$160.000 (Chiqui) · $170.000 (niños y jóvenes) · $235.000 (arqueros)", "2023"],
          ["Millonarios, escuela", "Bogotá", "$330.000", "$240.000 a $315.000 según plan y sede", "2023"],
          ["Independiente Santa Fe, escuela", "Bogotá", "$470.000 + indumentaria", "$180.000", "2023"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: precios públicos consultados el 14 oct 2026 en escueladefutbolsanpablo.com/inscripciones; bogota.gov.co (Escuelas de Mi Barrio, IDRD); comfacauca.com (Tarifas Esfoder 2026); informe anual de resultados 2024 de la Escuela Carlos Sarmiento Lora (escuelasarmientolora.com); y Las2orillas, «¿Cuál es la escuela de fútbol más económica, la de Nacional, Millonarios o Santa Fe?», 23 oct 2023. Los precios de 2023 de los clubes profesionales son los últimos públicos que encontramos; hoy probablemente son más altos.",
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "No encontramos tarifas 2026 publicadas por escuelas privadas de Medellín ni de Cali. Las academias de América de Cali y Deportivo Cali abrieron inscripciones 2026, pero no publican el valor en su web. Preferimos dejar el hueco a inventar el dato.",
      },
      { type: "h2", content: "El rango, explicado por tipo de escuela" },
      { type: "h3", content: "Programas públicos: $0" },
      {
        type: "p",
        content:
          "En Bogotá, el IDRD tiene Escuelas de Mi Barrio y escuelas deportivas distritales gratuitas para niños y jóvenes de 6 a 17 años. Medellín, Cali y otras ciudades tienen programas similares a través de sus institutos de deporte. Son la base de la pirámide y una buena puerta de entrada, aunque los cupos y horarios son limitados.",
      },
      { type: "h3", content: "Cajas de compensación: tarifa por categoría de afiliación" },
      {
        type: "p",
        content:
          "Las cajas cobran según el ingreso del afiliado. En Comfacauca, por ejemplo, la misma mensualidad de formación base I cuesta $14.200 para categoría A y $79.600 para particulares: más de cinco veces. Si la familia está afiliada a una caja con escuela deportiva, casi siempre es la opción más barata con entrenador formado.",
      },
      { type: "h3", content: "Escuelas privadas de barrio o sector: $150.000 a $200.000" },
      {
        type: "p",
        content:
          "Es el grueso del mercado. San Pablo, en el norte de Bogotá, publica $150.000 por dos días a la semana y $200.000 por cuatro, más $100.000 de matrícula y $90.000 de uniforme. La Escuela Carlos Sarmiento Lora reportó una mensualidad promedio de $155.000 en Cali en 2024. La diferencia la hacen los días por semana, la cancha (sintética propia o alquilada) y si hay competencia en liga.",
      },
      { type: "h3", content: "Escuelas de clubes profesionales: la marca se cobra" },
      {
        type: "p",
        content:
          "Nacional, Millonarios y Santa Fe cobraban en 2023 entre $160.000 y $315.000 al mes, con inscripciones de $300.000 a $470.000 que suelen incluir uniforme oficial y póliza. Pagas la marca, la posibilidad de visorías y la estructura, no necesariamente un mejor entrenador.",
      },
      { type: "h2", content: "Cuánto pesa la mensualidad frente al salario mínimo 2026" },
      {
        type: "p",
        content:
          "El salario mínimo 2026 quedó en $1.750.905 mensuales (Decreto 1469 de 2025), más $249.095 de auxilio de transporte. Una mensualidad de $150.000 equivale al 8,6 % de un salario mínimo; una de $200.000, al 11,4 %. Con dos hijos en la escuela, una familia de salario mínimo destina más de una sexta parte de su ingreso al deporte. Por eso el descuento por hermanos no es un detalle: decide si el segundo hijo entra o no.",
      },
      {
        type: "table",
        headers: ["Mensualidad", "% de un salario mínimo 2026 ($1.750.905)", "Dos hermanos sin descuento"],
        rows: [
          ["$100.000", "5,7 %", "11,4 %"],
          ["$150.000", "8,6 %", "17,1 %"],
          ["$200.000", "11,4 %", "22,8 %"],
          ["$250.000", "14,3 %", "28,6 %"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: cálculo de SportMaps sobre el salario mínimo fijado por el Decreto 1469 de 2025 (Ministerio del Trabajo). El Consejo de Estado suspendió provisionalmente el decreto en febrero de 2026 y el Gobierno expidió el Decreto 0159 de 2026 con el mismo valor; el monto que reciben los trabajadores no cambió.",
      },
      { type: "h2", content: "Qué incluye (y qué no) la mensualidad" },
      {
        type: "ul",
        items: [
          "Casi siempre incluye: los entrenamientos de la semana y el uso de la cancha.",
          "A veces incluye: torneos internos, festivales y el arbitraje de liga.",
          "Casi nunca incluye: uniforme de competencia, sudadera, guayos, póliza de accidentes, inscripción a torneos externos, viajes.",
          "Vacaciones: muchas escuelas cobran febrero a noviembre y ofrecen curso de vacaciones aparte (San Pablo cobra $250.000 por el de diciembre de 2026).",
          "Pago anticipado: algunas dan descuento por pagar el año completo; pregunta por escrito qué pasa si el niño se retira a mitad de año.",
        ],
      },
      { type: "h2", content: "Si diriges una escuela: cómo usar este rango" },
      {
        type: "ol",
        items: [
          "Ubícate: ¿compites con la caja de compensación del barrio, con una escuela de club o con otras privadas? Tu precio de referencia es el de tu competidor real, no el promedio nacional.",
          "Calcula tu costo por alumno (entrenador, cancha, balones, póliza, administración) con la ocupación real de tus grupos.",
          "Decide qué incluye tu mensualidad y escríbelo en el contrato de inscripción.",
          "Separa la inscripción (una vez al año) de la mensualidad; no las mezcles en un solo cobro.",
          "Publica tu tarifa. Como muestra esta tabla, casi nadie lo hace, y eso ya es una ventaja para la familia que compara.",
        ],
      },
      { type: "h2", content: "Si eres papá o mamá: compara el costo del año, no el del mes" },
      {
        type: "p",
        content:
          "Dos escuelas con la misma mensualidad pueden costar muy distinto al año. Lo que cambia es la matrícula, si cobran 10 o 12 meses, el uniforme y lo que se paga aparte por torneos. Haz la cuenta completa antes de decidir.",
      },
      {
        type: "table",
        headers: ["Concepto (ejemplo ilustrativo)", "Escuela A", "Escuela B"],
        rows: [
          ["Matrícula anual", "$100.000", "$350.000 (incluye uniforme y póliza)"],
          ["Uniforme", "$90.000", "Incluido"],
          ["Mensualidad", "$150.000 × 10 meses (feb–nov)", "$170.000 × 12 meses"],
          ["Curso de vacaciones", "$250.000 (opcional)", "Incluido en la mensualidad"],
          ["Total del año sin vacaciones", "$1.690.000", "$2.390.000"],
          ["Total del año con vacaciones", "$1.940.000", "$2.390.000"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: ejemplo ilustrativo construido con valores del rango publicado; no corresponde a dos escuelas reales. La escuela B parece apenas $20.000 más cara al mes, pero cuesta $450.000 a $700.000 más al año porque cobra 12 meses y una matrícula más alta. A veces vale la pena (incluye póliza, uniforme y vacaciones), pero conviene saberlo antes de firmar.",
      },
      {
        type: "ul",
        items: [
          "Pregunta cuántos meses se cobran y si se cobra en vacaciones.",
          "Pregunta si la matrícula incluye póliza de accidentes y uniforme.",
          "Pregunta si hay descuento por hermanos o por pago anticipado, y qué pasa si el niño se retira.",
          "Pide que te envíen las tarifas por escrito o por WhatsApp, con el año.",
        ],
      },
      {
        type: "cta",
        title: "Cobra la mensualidad con enlace de pago y recordatorios",
        description:
          "Wompi y Mercado Pago integrados (PSE, Nequi, tarjetas), la plata llega directo a tu cuenta y SportMaps no cobra comisión por la integración.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "como-fijar-precio-mensualidad-escuela-deportiva",
      "como-elegir-escuela-de-futbol-para-tu-hijo",
      "software-escuelas-de-futbol-colombia",
    ],
    about: [
      "escuelas de fútbol en Colombia",
      "precio de mensualidades deportivas",
      "salario mínimo en Colombia 2026",
      "deporte formativo",
    ],
    mentions: [
      "Escuela de Fútbol San Pablo",
      "IDRD",
      "Comfacauca",
      "Escuela Carlos Sarmiento Lora",
      "Atlético Nacional",
      "Millonarios",
      "Independiente Santa Fe",
      "América de Cali",
      "Deportivo Cali",
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta la mensualidad de una escuela de fútbol en Bogotá en 2026?",
        answer:
          "Una escuela privada de barrio publica entre $150.000 (dos días a la semana) y $200.000 (cuatro días), más una matrícula de unos $100.000. Las escuelas de clubes profesionales cobraban entre $180.000 y $315.000 en 2023. Las escuelas del IDRD son gratuitas.",
      },
      {
        question: "¿Hay escuelas de fútbol gratis para niños en Colombia?",
        answer:
          "Sí. En Bogotá, el IDRD tiene Escuelas de Mi Barrio y escuelas deportivas distritales gratuitas para niños de 6 a 17 años; se inscriben en el portal del IDRD. Otras ciudades tienen programas similares en sus institutos municipales de deporte.",
      },
      {
        question: "¿Cuánto cobra la escuela de Millonarios o de Nacional?",
        answer:
          "Los últimos precios públicos son de 2023: Millonarios cobraba $330.000 de inscripción y entre $240.000 y $315.000 al mes; Atlético Nacional, $300.000 de inscripción y entre $160.000 y $235.000 al mes. Consulta el valor vigente directamente con el club.",
      },
      {
        question: "¿Qué gastos aparte de la mensualidad tiene una escuela de fútbol?",
        answer:
          "Matrícula anual, uniforme de competencia, sudadera, guayos, canilleras, póliza de accidentes y la inscripción a torneos externos. Algunas escuelas también cobran aparte el curso de vacaciones.",
      },
      {
        question: "¿Es más barata una escuela de caja de compensación?",
        answer:
          "Para afiliados de categorías A y B, sí, y por mucho. En Comfacauca la mensualidad de formación base cuesta $14.200 para categoría A frente a $79.600 para particulares (tarifas 2026).",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "estadisticas-deporte-formativo-colombia",
    title: "Estadísticas del deporte formativo en Colombia: actividad física, clubes y juegos escolares",
    excerpt:
      "Cuántos niños colombianos cumplen la recomendación de actividad física, cuántos están en clubes, cuántos se inscriben a los Juegos Intercolegiados y qué dice la OMS.",
    category: "Análisis",
    readTime: "6 min",
    date: "30 Sep 2026",
    isoDate: "2026-09-30",
    author: "Equipo SportMaps",
    authorRole: "Análisis y contenidos",
    heroGradient: "from-sport-primary to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Solo 31,1 % de los escolares colombianos de 5 a 12 años y 13,4 % de los adolescentes de 13 a 17 años cumplen la recomendación de actividad física, según la Encuesta Nacional de la Situación Nutricional (ENSIN 2015). El 36 % de los niños y adolescentes participa en clubes deportivos, según el Reporte de Calificaciones de Actividad Física 2022 de Colombia, y en 2026 se inscribieron 642.625 deportistas escolares a los Juegos Intercolegiados Nacionales, cifra récord según el Ministerio del Deporte.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "La mayoría de los niños colombianos no se mueve lo suficiente, y las niñas mucho menos que los niños. Hay demanda latente para el deporte formativo, pero no existe una cifra oficial reciente y periódica de práctica deportiva infantil: los datos vienen de encuestas de salud y nutrición.",
      },
      { type: "h2", content: "Actividad física de niños y adolescentes (ENSIN 2015)" },
      {
        type: "table",
        headers: ["Indicador", "Total Colombia", "Mujeres", "Hombres"],
        rows: [
          ["Escolares 5 a 12 años que cumplen la recomendación de actividad física", "31,1 %", "26,0 %", "35,8 %"],
          ["Adolescentes 13 a 17 años que cumplen la recomendación", "13,4 %", "7,6 %", "18,7 %"],
          ["Escolares con tiempo excesivo frente a pantallas", "67,6 %", "62,0 %", "69,0 %"],
          ["Adolescentes con tiempo excesivo frente a pantallas", "76,6 %", "76,3 %", "76,9 %"],
          ["Adultos 18 a 64 años que cumplen la recomendación", "51,3 %", "42,7 %", "61,1 %"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: ICBF, Encuesta Nacional de la Situación Nutricional en Colombia ENSIN 2015, documento de resultados (icbf.gov.co). La recomendación para niños y adolescentes es de al menos 60 minutos diarios de actividad física moderada a vigorosa.",
      },
      {
        type: "p",
        content:
          "Tres lecturas útiles para una escuela. Primera: el cumplimiento cae a menos de la mitad al pasar de la niñez a la adolescencia, justo la edad en que más niños abandonan el deporte organizado. Segunda: las niñas adolescentes cumplen en apenas 7,6 %, menos de la mitad que los hombres. Tercera: la ENSIN muestra mayor cumplimiento en zonas rurales que en cabeceras (35,9 % frente a 29,4 % en escolares), y más tiempo de pantalla en las ciudades.",
      },
      { type: "h2", content: "Clubes, transporte activo y pantallas (Reporte de Calificaciones 2022)" },
      {
        type: "table",
        headers: ["Indicador", "Valor"],
        rows: [
          ["Niños y adolescentes físicamente activos al menos 4 días a la semana", "37 %"],
          ["Participan en clubes deportivos", "36 %"],
          ["Participan en grupos organizados", "13 %"],
          ["Van al colegio caminando o en bicicleta (transporte activo)", "72 %"],
          ["Cumplen la guía de máximo 2 horas diarias de pantalla recreativa", "37 %"],
          ["Viven en un barrio con parque, zona verde o escenario deportivo", "64 %"],
          ["Adolescentes que reportan programas comunitarios de actividad física en su barrio o municipio", "57 %"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: González, S. A., Sarmiento, O. L. et al., Results from Colombia's 2022 Report Card on Physical Activity for Children and Adolescents, Active Healthy Kids Global Alliance (activehealthykids.org). El reporte usa principalmente datos de la ENSIN 2015 y de la Encuesta Nacional de Salud Escolar ENSE 2017.",
      },
      {
        type: "p",
        content:
          "El dato de clubes es el más relevante para el sector: alrededor de uno de cada tres niños y adolescentes está en un club deportivo. Los otros dos tercios son el mercado que todavía no llega al deporte organizado, por precio, horario, distancia o falta de oferta. El 64 % vive cerca de un parque o escenario deportivo: en muchos barrios el espacio existe, lo que falta es un programa organizado que lo use.",
      },
      { type: "h2", content: "El contexto mundial (OMS)" },
      {
        type: "table",
        headers: ["Dato", "Valor", "Fuente"],
        rows: [
          ["Recomendación para niños y adolescentes de 5 a 17 años", "Promedio de 60 minutos diarios de actividad moderada a vigorosa, más fortalecimiento muscular y óseo 3 días por semana", "OMS, Directrices sobre actividad física y hábitos sedentarios, 2020"],
          ["Adolescentes de 11 a 17 años que no hacen suficiente actividad física", "81 %", "OMS, nota descriptiva sobre actividad física (Guthold et al., The Lancet Child & Adolescent Health, 2019)"],
          ["Niñas adolescentes insuficientemente activas", "85 %", "Guthold et al., 2019 (datos de 146 países, 2001–2016)"],
          ["Niños adolescentes insuficientemente activos", "78 %", "Guthold et al., 2019"],
          ["Adultos que no hacen suficiente actividad física", "31 %", "OMS, nota descriptiva sobre actividad física, 2024"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Organización Mundial de la Salud, nota descriptiva «Actividad física» (who.int) y estudio de Guthold et al. citado por la OMS.",
      },
      { type: "h2", content: "Deporte escolar: Juegos Intercolegiados Nacionales 2026" },
      {
        type: "table",
        headers: ["Dato", "Valor"],
        rows: [
          ["Deportistas escolares inscritos", "642.625"],
          ["Entrenadores y delegados inscritos", "36.142"],
          ["Total de inscripciones", "678.458"],
          ["Instituciones educativas participantes", "9.661"],
          ["Modalidades", "26 (12 individuales, 7 de conjunto, 3 paradeportes, 3 minideportes y festivales escolares)"],
          ["Inversión anunciada", "$64.500 millones"],
          ["Edades", "7 a 17 años"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Ministerio del Deporte, «¡Histórico! Más de 678 mil deportistas escolares se inscribieron a los Juegos Intercolegiados Nacionales 2026», 4 de mayo de 2026 (mindeporte.gov.co).",
      },
      { type: "h2", content: "Lo que no se sabe (y conviene decirlo)" },
      {
        type: "ul",
        items: [
          "No hay una cifra oficial periódica del DANE sobre cuántos niños practican deporte organizado. La Cuenta Satélite del Deporte, que el DANE empezó a diseñar con el Ministerio del Deporte en 2021 (convenio 1212 de 2021), estaba en fase de diseño según la información pública del DANE.",
          "No existe un censo público de escuelas deportivas privadas ni de sus alumnos. Cualquier cifra de «cuántas escuelas de fútbol hay en Colombia» sin fuente es una estimación.",
          "La ENSIN 2015 es la referencia nacional de actividad física infantil con resultados publicados por el ICBF; los datos tienen ya varios años.",
        ],
      },
      { type: "h2", content: "Qué significa para una escuela deportiva" },
      {
        type: "ol",
        items: [
          "Hay demanda sin atender: dos de cada tres niños no están en un club.",
          "La adolescencia es el punto crítico: diseña grupos y formatos que retengan de los 12 a los 16 años, no solo de iniciación.",
          "Las niñas son el segmento más desatendido: grupos femeninos y horarios pensados para ellas son una oportunidad real.",
          "Compites contra la pantalla, no solo contra otras escuelas: la experiencia y la diversión importan tanto como el precio.",
          "Mide tus propios datos: asistencia, retención y retiro por edad. Es la única forma de saber si tu escuela va contra la tendencia.",
        ],
      },
      { type: "h2", content: "Cómo citar estos datos sin equivocarte" },
      {
        type: "p",
        content:
          "Estas cifras se repiten mucho en redes y presentaciones, a veces mal. Antes de usarlas en tu página, en un proyecto para la alcaldía o en una charla con papás, ten en cuenta tres cuidados.",
      },
      {
        type: "ul",
        items: [
          "Respeta el rango de edad. El 31,1 % de la ENSIN es para escolares de 5 a 12 años; el 13,4 %, para adolescentes de 13 a 17. El 81 % de la OMS es para adolescentes de 11 a 17 años en el mundo, no para todos los niños ni para Colombia.",
          "Di el año. La ENSIN es de 2015 y el reporte de calificaciones es de 2022 con datos de años anteriores. Presentarlos como «datos de hoy» resta credibilidad.",
          "No conviertas porcentajes en número de niños sin una base oficial de población. Si lo haces, usa las proyecciones de población del DANE para la edad exacta y explica el cálculo.",
        ],
      },
      {
        type: "p",
        content:
          "Una frase bien citada se ve así: «Según la ENSIN 2015, solo el 31,1 % de los escolares colombianos de 5 a 12 años cumple la recomendación de actividad física». Corta, con fuente, año y edad. Así la puede repetir un periodista, un concejal o un asistente de IA sin deformarla.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Para proyectos con entes territoriales (convenios de escuelas de formación, por ejemplo), los datos de tu propia escuela pesan tanto como los nacionales: cuántos niños atiendes, en qué barrios, con qué asistencia promedio y cuántos siguen al año siguiente. Si los registras desde el primer día, el informe sale en minutos.",
      },
      {
        type: "cta",
        title: "Mide la asistencia y la retención de tu escuela",
        description:
          "Asistencia por QR o torniquetes, ficha del atleta y acudientes vinculados. Gratis hasta 20 alumnos.",
        href: "/planes",
        label: "Ver planes",
      },
    ],
    related: [
      "por-que-se-retiran-los-ninos-del-deporte",
      "calendario-temporada-escuela-deportiva-colombia",
      "kpis-escuela-deportiva-formulas-retencion-churn",
    ],
    about: [
      "actividad física infantil en Colombia",
      "deporte formativo",
      "Juegos Intercolegiados Nacionales",
      "salud pública",
    ],
    mentions: [
      "ICBF",
      "ENSIN 2015",
      "Organización Mundial de la Salud",
      "Active Healthy Kids Global Alliance",
      "Ministerio del Deporte",
      "DANE",
    ],
    faqs: [
      {
        question: "¿Cuántos niños hacen actividad física suficiente en Colombia?",
        answer:
          "Según la ENSIN 2015, el 31,1 % de los escolares de 5 a 12 años y el 13,4 % de los adolescentes de 13 a 17 años cumplen la recomendación de actividad física. En las niñas adolescentes el cumplimiento baja a 7,6 %.",
      },
      {
        question: "¿Cuántos minutos de ejercicio al día recomienda la OMS para niños?",
        answer:
          "La OMS recomienda que niños y adolescentes de 5 a 17 años hagan en promedio al menos 60 minutos diarios de actividad física moderada a vigorosa, y actividades que fortalezcan músculos y huesos al menos 3 días por semana.",
      },
      {
        question: "¿Qué porcentaje de niños colombianos está en un club deportivo?",
        answer:
          "El Reporte de Calificaciones de Actividad Física 2022 de Colombia indica que el 36 % de los niños y adolescentes participa en clubes deportivos y el 13 % en grupos organizados.",
      },
      {
        question: "¿Cuántos estudiantes participan en los Juegos Intercolegiados?",
        answer:
          "En 2026 se inscribieron 642.625 deportistas escolares y 36.142 entrenadores y delegados, para un total de 678.458 inscripciones de 9.661 instituciones, según el Ministerio del Deporte.",
      },
      {
        question: "¿El DANE mide cuántos niños practican deporte?",
        answer:
          "No hay una medición periódica del DANE específica de práctica deportiva infantil. Los datos nacionales más usados vienen de la ENSIN (ICBF y Ministerio de Salud). El DANE y el Ministerio del Deporte empezaron en 2021 a diseñar una Cuenta Satélite del Deporte.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "por-que-se-retiran-los-ninos-del-deporte",
    title: "¿Por qué se retiran los niños del deporte? Lo que dicen los estudios y qué puede hacer una escuela",
    excerpt:
      "Los niños dejan el deporte hacia los 11 años y la razón número uno es que dejó de ser divertido. Datos de Project Play, revisiones científicas y la ENSIN, con acciones concretas.",
    category: "Análisis",
    readTime: "6 min",
    date: "3 Oct 2026",
    isoDate: "2026-10-03",
    author: "Equipo SportMaps",
    authorRole: "Análisis y contenidos",
    heroGradient: "from-sport-accent to-sport-success",
    body: [
      {
        type: "p",
        content:
          "Los niños se retiran del deporte sobre todo porque deja de ser divertido. Según la encuesta nacional a padres del Aspen Institute (Project Play, 2019), el niño promedio deja un deporte hacia los 11 años, tras menos de tres años de práctica, y el motivo más frecuente (36 %) es que perdió el interés o dejó de disfrutarlo. La revisión sistemática de Crane y Temple (2015) llega a algo parecido: pesan más la falta de diversión, sentirse poco competente y la presión de adultos y compañeros que el costo o el horario.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El retiro casi nunca es un problema de un solo día: se anuncia con faltas, poca participación y un niño que «ya no quiere ir». Una escuela que mide asistencia y habla con la familia a tiempo puede retener a muchos de los que hoy pierde sin darse cuenta.",
      },
      { type: "h2", content: "Los datos clave" },
      {
        type: "table",
        headers: ["Hallazgo", "Dato", "Fuente"],
        rows: [
          ["Edad promedio a la que un niño deja un deporte", "Hacia los 11 años", "Aspen Institute, Project Play 2019 (1.032 padres, EE. UU.)"],
          ["Edad promedio de inicio", "Cerca de 8 años", "Aspen Institute, Project Play 2019"],
          ["Tiempo promedio en un deporte antes de dejarlo", "2,86 años", "Aspen Institute, Project Play 2019"],
          ["Motivo más frecuente de retiro", "Perdió el interés o dejó de disfrutarlo: 36 %", "Aspen Institute, Project Play 2019"],
          ["Segundo motivo", "Dejarlo para probar otro deporte: 15 %", "Aspen Institute, Project Play 2019"],
          ["Niños que juegan un solo deporte", "45 %", "Aspen Institute, Project Play 2019"],
          ["Niños de 6 a 12 años en deportes de equipo con regularidad (EE. UU.)", "45 % en 2008 → 38 % en 2018", "SFIA, citado por Project Play"],
          ["Abandono del fútbol organizado de una temporada a otra", "Entre 18 % y 36 % según el estudio", "Temple y Crane (2018), revisión sistemática"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Aspen Institute Project Play, «Survey: Kids quit most sports by age 11», 1 de agosto de 2019 (projectplay.org), encuesta realizada con el Families in Sports Lab de Utah State University; Temple, V. A. y Crane, J. R. (2018), revisión sobre abandono del fútbol organizado en niños y adolescentes.",
      },
      { type: "h2", content: "Lo que encontró la revisión de Crane y Temple (2015)" },
      {
        type: "p",
        content:
          "Jennifer Crane y Viviene Temple revisaron la literatura sobre abandono del deporte organizado en niños y jóvenes («A systematic review of dropout from organized sport among children and youth», European Physical Education Review, 2015, vol. 21, pp. 114–131). De 557 estudios encontrados, 43 cumplieron los criterios. Organizaron los factores con la teoría de las restricciones del ocio en tres niveles:",
      },
      {
        type: "ul",
        items: [
          "Intrapersonales: falta de diversión, sentirse poco competente, cambios físicos de la pubertad.",
          "Interpersonales: presión de padres y entrenadores, mala relación con el entrenador o los compañeros.",
          "Estructurales: costo, tiempo, horarios, distancia, otras prioridades como el estudio.",
        ],
      },
      {
        type: "p",
        content:
          "Su conclusión principal: los factores intrapersonales e interpersonales se asociaron al abandono con más frecuencia que los estructurales. Dicho en lenguaje de escuela: los niños se van más por cómo se sienten en el entrenamiento que por el precio o el horario. La mayoría de los estudios eran de adolescentes y de Europa y Norteamérica, así que hay que leerlos con cuidado para Colombia.",
      },
      { type: "h2", content: "El caso colombiano: la caída de la adolescencia y la brecha de las niñas" },
      {
        type: "table",
        headers: ["Grupo (Colombia)", "Cumple la recomendación de actividad física"],
        rows: [
          ["Escolares de 5 a 12 años (total)", "31,1 %"],
          ["Escolares de 5 a 12 años, niñas", "26,0 %"],
          ["Escolares de 5 a 12 años, niños", "35,8 %"],
          ["Adolescentes de 13 a 17 años (total)", "13,4 %"],
          ["Adolescentes mujeres", "7,6 %"],
          ["Adolescentes hombres", "18,7 %"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: ICBF, ENSIN 2015. El paso de la niñez a la adolescencia reduce el cumplimiento a menos de la mitad, y en las niñas la caída es aún mayor. Es la misma ventana de edad en la que Project Play ubica el abandono. A nivel mundial, la OMS reporta que el 85 % de las niñas adolescentes y el 78 % de los niños adolescentes no hacen suficiente actividad física (Guthold et al., 2019).",
      },
      { type: "h2", content: "¿Y el costo? Pesa, pero menos de lo que se cree" },
      {
        type: "p",
        content:
          "Project Play también midió el gasto: las familias encuestadas gastaban en promedio US$693 al año por niño y por deporte, y el rubro más alto eran los viajes (US$196), seguido de equipamiento (US$144), clases privadas (US$134) e inscripciones (US$125). Los padres reportaron que el costo es una carga creciente. Aun así, el motivo número uno de retiro sigue siendo la diversión, no la plata.",
      },
      {
        type: "p",
        content:
          "En Colombia el peso del costo es mayor porque los ingresos son menores: una mensualidad de $150.000 equivale al 8,6 % del salario mínimo de 2026 ($1.750.905). Eso explica por qué, cuando una familia con dos hijos tiene que recortar, el deporte entra en la lista. El descuento por hermanos y facilitar el pago (enlace de pago, PSE, Nequi) ayudan, pero no compensan una mala experiencia en la cancha.",
      },
      {
        type: "p",
        content:
          "Fuente: Aspen Institute Project Play, 2019 (valores en dólares de Estados Unidos, mediana de ingreso de los hogares encuestados: US$70.000 al año); salario mínimo 2026 del Decreto 1469 de 2025.",
      },
      { type: "h2", content: "Señales de alerta antes del retiro" },
      {
        type: "ul",
        items: [
          "Dos o más faltas seguidas sin aviso, en un niño que antes iba siempre.",
          "Pago atrasado en una familia que siempre pagaba a tiempo: a veces no es plata, es que el niño ya no quiere ir.",
          "El niño pasa mucho tiempo en el banco o siempre queda en el grupo de los que «no juegan».",
          "Cambio de categoría con compañeros nuevos y un entrenador distinto.",
          "Comentarios de la familia sobre estrés, notas del colegio o falta de tiempo.",
        ],
      },
      { type: "h2", content: "Qué puede hacer una escuela: 7 acciones concretas" },
      {
        type: "ol",
        items: [
          "Mide asistencia por alumno y crea una alerta cuando falte dos veces seguidas. Llama o escribe a la familia esa misma semana.",
          "Diseña la sesión para que todos jueguen: más juego reducido, menos filas y menos espera.",
          "Evalúa progreso individual, no solo resultados del equipo. El informe mensual del atleta a los papás muestra avances concretos y reduce la sensación de «no está aprendiendo».",
          "Forma a los entrenadores en trato con niños, no solo en táctica. La relación con el entrenador aparece una y otra vez en los estudios.",
          "Pon reglas claras para los papás en la cancha: la presión de la tribuna es un factor de retiro.",
          "Ofrece grupos femeninos y horarios pensados para adolescentes que estudian.",
          "Pregunta el motivo de cada retiro y regístralo. Sin ese dato no sabes qué corregir.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Cuándo no insistir: si el niño quiere probar otro deporte (15 % de los retiros según Project Play), retenerlo a la fuerza no sirve. Una salida en buenos términos deja la puerta abierta para un hermano o para su regreso.",
      },
      {
        type: "p",
        content:
          "Una nota sobre especializarse temprano: Project Play encontró que el 45 % de los niños juega un solo deporte. El Aspen Institute, a través de Project Play, recomienda que los niños pequeños prueben varios deportes antes de especializarse. Para una escuela de un solo deporte, eso no es una amenaza: un niño que se divierte y no se siente presionado a rendir como profesional a los 9 años tiene más probabilidades de seguir a los 13.",
      },
      { type: "h2", content: "El costo de no hacer nada" },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: una escuela de 100 alumnos con mensualidad de $150.000 que pierde 3 alumnos al mes por retiros evitables deja de facturar $450.000 el primer mes, y la pérdida se acumula: al cabo de 12 meses, sin reemplazos, son 36 alumnos menos y $5.400.000 mensuales menos de ingreso.",
      },
      {
        type: "cta",
        title: "Detecta las faltas antes de que se conviertan en retiros",
        description:
          "Asistencia por QR o torniquetes, informe mensual del atleta para los papás y avisos a familias. Gratis hasta 20 alumnos.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "kpis-escuela-deportiva-formulas-retencion-churn",
      "informe-mensual-del-deportista-para-padres",
      "estadisticas-deporte-formativo-colombia",
    ],
    about: [
      "abandono deportivo juvenil",
      "retención de deportistas",
      "deporte formativo",
      "actividad física infantil",
    ],
    mentions: [
      "Aspen Institute",
      "Project Play",
      "Utah State University",
      "European Physical Education Review",
      "ICBF",
      "Organización Mundial de la Salud",
    ],
    faqs: [
      {
        question: "¿A qué edad dejan los niños el deporte?",
        answer:
          "Según la encuesta nacional a padres del Aspen Institute (Project Play, 2019), el niño promedio deja un deporte hacia los 11 años, después de menos de tres años de práctica. Empieza, en promedio, cerca de los 8.",
      },
      {
        question: "¿Cuál es la principal razón por la que un niño abandona el deporte?",
        answer:
          "Que dejó de divertirse o perdió el interés: es el motivo en 36 % de los casos según Project Play. Las revisiones científicas también señalan sentirse poco competente y la presión de padres y entrenadores.",
      },
      {
        question: "¿Qué hago si mi hijo ya no quiere ir a la escuela de fútbol?",
        answer:
          "Pregúntale qué cambió: entrenador, compañeros, poco tiempo de juego o simple cansancio. Habla con el entrenador antes de retirarlo. Si quiere probar otro deporte, dejarlo cambiar suele ser mejor que obligarlo.",
      },
      {
        question: "¿Por qué las niñas abandonan más el deporte?",
        answer:
          "Los datos muestran la brecha: en Colombia solo 7,6 % de las adolescentes cumple la recomendación de actividad física frente a 18,7 % de los hombres (ENSIN 2015). Influyen la falta de grupos y horarios pensados para ellas, la presión social y los cambios de la pubertad.",
      },
      {
        question: "¿Cómo puede una escuela deportiva reducir los retiros?",
        answer:
          "Midiendo asistencia para detectar faltas a tiempo, diseñando sesiones donde todos jueguen, mostrando el progreso individual a las familias y preguntando el motivo de cada retiro para corregirlo.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "calendario-temporada-escuela-deportiva-colombia",
    title: "Calendario de temporada para una escuela deportiva en Colombia (2026–2027)",
    excerpt:
      "Calendario escolar A y B, recesos, vacaciones y Juegos Intercolegiados Nacionales: cómo planear inscripciones, cobros y competencias mes a mes.",
    category: "Análisis",
    readTime: "7 min",
    date: "8 Oct 2026",
    isoDate: "2026-10-08",
    author: "Equipo SportMaps",
    authorRole: "Análisis y contenidos",
    heroGradient: "from-sport-success to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Una escuela deportiva en Colombia debe planear su temporada sobre el calendario escolar de sus alumnos. En calendario A (la mayoría del país) las clases de 2026 empezaron entre el 5 de enero y el 2 de febrero, hubo vacaciones de mitad de año del 22 de junio al 6 de julio en Bogotá, receso del 5 al 12 de octubre y fin de clases a finales de noviembre. En calendario B el año empieza entre agosto y septiembre y termina entre junio y julio. La final nacional de los Juegos Intercolegiados 2026 se juega del 13 al 30 de noviembre en Bogotá.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "Abre inscripciones antes del regreso a clases, cobra la matrícula una vez al año, decide por escrito qué pasa con la mensualidad en vacaciones y ten listos a tus deportistas escolares antes del cierre de inscripciones de los Juegos Intercolegiados (en 2026 fue el 30 de abril).",
      },
      { type: "h2", content: "Fechas escolares 2026 (calendario A, Bogotá)" },
      {
        type: "table",
        headers: ["Periodo", "Fechas 2026"],
        rows: [
          ["Inicio de clases", "Lunes 26 de enero"],
          ["Semana Santa (sin clases)", "Sábado 28 de marzo a domingo 5 de abril"],
          ["Vacaciones de mitad de año", "Lunes 22 de junio a lunes 6 de julio"],
          ["Receso de octubre", "Lunes 5 a lunes 12 de octubre"],
          ["Fin de clases", "Viernes 27 de noviembre"],
          ["Vacaciones de fin de año", "Lunes 30 de noviembre de 2026 a lunes 11 de enero de 2027"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Secretaría de Educación de Bogotá, Resolución 2433 del 27 de octubre de 2025 (40 semanas de clase), según Infobae, 17 de enero de 2026. Cada secretaría de educación fija su propio calendario: Mineducación (Circular 043 de 2025) indica que las clases de 2026 empezaron entre el 5 de enero y el 2 de febrero según la entidad territorial; en Bogotá, Medellín y Cali la semana de inicio fue la del 26 de enero. En Medellín las vacaciones de mitad de año se extendieron hasta el 12 de julio.",
      },
      { type: "h3", content: "El receso de octubre es por ley" },
      {
        type: "p",
        content:
          "La semana de receso de octubre la creó el Decreto 1373 de 2007 y aplica a los colegios oficiales de calendario A y B; en 2026 fue del 5 al 9 de octubre, más el festivo del 12. Los colegios privados pueden definir su propio calendario. Para una escuela deportiva es una semana de baja asistencia, o una oportunidad para un campamento.",
      },
      { type: "h3", content: "Calendario B" },
      {
        type: "p",
        content:
          "Lo usan sobre todo colegios privados (es frecuente en Cali y en colegios bilingües de las ciudades grandes). El año escolar suele empezar entre agosto y septiembre y terminar entre junio y julio, con fechas que define cada institución. Si tienes alumnos de los dos calendarios, tus vacaciones de alta ausencia son distintas: diciembre-enero para calendario A, junio-agosto para calendario B.",
      },
      { type: "h2", content: "Juegos Intercolegiados Nacionales 2026" },
      {
        type: "p",
        content:
          "El programa que antes se llamaba Supérate Intercolegiados pasó a llamarse Juegos Intercolegiados Nacionales por la Ley 2236 de 2022. Es la competencia escolar oficial del Ministerio del Deporte, para estudiantes de 7 a 17 años, con fases municipal, departamental, regional, final nacional e internacional. Los festivales escolares son una de las modalidades del programa para los más pequeños, junto con los minideportes.",
      },
      {
        type: "table",
        headers: ["Hito 2026", "Fecha o dato"],
        rows: [
          ["Cierre de inscripciones", "30 de abril"],
          ["Inscripciones totales", "678.458 (642.625 deportistas y 36.142 entrenadores y delegados)"],
          ["Regionales de atletismo", "23 de septiembre a 2 de octubre (Villavicencio, Montería, Sopó y Armenia)"],
          ["Final nacional", "13 al 30 de noviembre, Bogotá"],
          ["Fase internacional", "Juegos Sudamericanos Escolares (Ecuador) para prejuveniles ganadores"],
          ["Modalidades", "26: 12 individuales, 7 de conjunto, 3 paradeportes, 3 minideportes y festivales escolares"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: Ministerio del Deporte, preguntas frecuentes de Juegos Intercolegiados y comunicado del 4 de mayo de 2026 (mindeporte.gov.co); Ley 2236 de 2022. Las fases municipales y departamentales las programa cada ente territorial: confirma las fechas con el instituto de deporte de tu ciudad.",
      },
      { type: "h2", content: "Plan mes a mes para una escuela de calendario A" },
      {
        type: "table",
        headers: ["Mes", "Qué pasa con las familias", "Qué hace la escuela"],
        rows: [
          ["Diciembre", "Vacaciones; gasto alto de fin de año", "Curso vacacional; preventa de matrícula con descuento por pronto pago"],
          ["Enero", "Regreso a clases a final de mes; útiles y uniformes", "Abrir inscripciones con enlace o QR; clase de cortesía; cobro de matrícula"],
          ["Febrero", "Arranca la rutina escolar", "Primer cobro de mensualidad; armar grupos y categorías por año de nacimiento"],
          ["Marzo y abril", "Semana Santa", "Inscribir a Intercolegiados antes del cierre; anunciar el receso en el calendario de familias"],
          ["Mayo y junio", "Fin del primer semestre", "Torneos internos; informe del semestre a los papás"],
          ["Junio y julio", "Vacaciones de mitad de año", "Definir si hay mensualidad completa, reducida o pausa; campamento"],
          ["Julio", "Regreso a clases", "Campaña de reactivación: contactar a quien no volvió"],
          ["Agosto y septiembre", "Segundo semestre", "Fases zonales y regionales; captación para el próximo año"],
          ["Octubre", "Receso escolar", "Campamento de una semana o entrenamiento reducido"],
          ["Noviembre", "Fin de año escolar; final nacional de Intercolegiados", "Clausura, entrega de informes y certificados; anuncio de tarifas del año siguiente"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: elaboración de SportMaps sobre el calendario escolar oficial de Bogotá 2026 y el cronograma de Juegos Intercolegiados 2026. Es una guía; ajústala a la ciudad y al calendario de tus alumnos.",
      },
      { type: "h2", content: "Las tres decisiones que debes tomar antes de enero" },
      {
        type: "ol",
        items: [
          "Vacaciones: ¿cobras mensualidad completa, reducida o pausas el cobro? Escríbelo en el contrato de inscripción. Pausar sin regla clara genera discusiones con cada familia.",
          "Matrícula: ¿cuándo se cobra y qué incluye (póliza, uniforme, carnet)? La inscripción se cobra una vez; la mensualidad es otro concepto.",
          "Categorías: ¿agrupas por año de nacimiento o por nivel? Define el corte antes de abrir inscripciones para que las familias sepan en qué grupo queda cada niño.",
        ],
      },
      { type: "h2", content: "Si tus alumnos son de calendario B" },
      {
        type: "p",
        content:
          "Las escuelas con muchos alumnos de colegios de calendario B viven otra temporada: el gran hueco de asistencia está entre junio y agosto, y diciembre es un receso más corto. Si mezclas alumnos de los dos calendarios, no hay un mes «muerto» para todos, y eso es una ventaja: la ocupación de tus grupos baja menos.",
      },
      {
        type: "ol",
        items: [
          "Pregunta en la inscripción el calendario del colegio de cada alumno y guárdalo en su ficha.",
          "Programa los cursos vacacionales por calendario: diciembre-enero para A, junio-agosto para B.",
          "Si cobras por año escolar, define el año de cobro según el calendario del alumno o uno común para todos, pero escríbelo.",
          "Ten en cuenta que los Juegos Intercolegiados siguen el año calendario: inscripciones hasta abril y final en noviembre en 2026.",
        ],
      },
      { type: "h2", content: "Cómo comunicar el calendario a las familias" },
      {
        type: "p",
        content:
          "El calendario que no ven las familias no existe. Publícalo al inicio del año con las fechas de cobro, los días sin entrenamiento, los torneos y la clausura, y manda un aviso una semana antes de cada cambio. Las dudas de «¿hay entrenamiento el lunes festivo?» que llegan por WhatsApp a las 9 de la noche se reducen mucho cuando la información está en un solo lugar y llega con anticipación.",
      },
      {
        type: "ul",
        items: [
          "Festivos: Colombia tiene 18 festivos al año y varios caen en lunes. Decide desde enero si entrenas o no y avísalo.",
          "Clima: en temporada de lluvias ten un plan B (cancha cubierta, sesión de video o reposición) y una regla de cuándo se cancela.",
          "Torneos: publica las fechas apenas las confirme la liga o el ente territorial, aunque falten los horarios.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        content:
          "Diciembre y enero concentran gastos de las familias (fin de año, útiles, uniformes escolares). Pedir matrícula, uniforme y primera mensualidad el mismo día de enero es la receta para perder inscripciones: escalona los cobros.",
      },
      {
        type: "cta",
        title: "Publica el calendario y automatiza los cobros de la temporada",
        description:
          "Calendario y avisos para familias, cobros por periodo y recordatorios automáticos por correo y WhatsApp.",
        href: "/escuelas",
        label: "Ver SportMaps para escuelas",
      },
    ],
    related: [
      "categorias-por-ano-de-nacimiento-futbol-formativo",
      "inscripcion-vs-mensualidad-escuela-deportiva",
      "planificacion-entrenamiento-mesociclos-escuela",
    ],
    about: [
      "calendario escolar en Colombia",
      "Juegos Intercolegiados Nacionales",
      "planificación de temporada deportiva",
      "escuelas deportivas",
    ],
    mentions: [
      "Ministerio del Deporte",
      "Ministerio de Educación Nacional",
      "Secretaría de Educación de Bogotá",
      "Juegos Intercolegiados Nacionales",
      "Supérate Intercolegiados",
    ],
    faqs: [
      {
        question: "¿Cuándo son las vacaciones de mitad de año de los colegios en 2026?",
        answer:
          "En los colegios oficiales de Bogotá fueron del 22 de junio al 6 de julio de 2026; en Medellín se extendieron hasta el 12 de julio. Cada secretaría de educación fija sus fechas, así que confirma con la de tu ciudad.",
      },
      {
        question: "¿Qué diferencia hay entre calendario A y calendario B?",
        answer:
          "En calendario A el año escolar va de enero o febrero a noviembre. En calendario B, usado sobre todo por colegios privados, empieza entre agosto y septiembre y termina entre junio y julio del año siguiente.",
      },
      {
        question: "¿Supérate Intercolegiados sigue existiendo?",
        answer:
          "Cambió de nombre: desde la Ley 2236 de 2022 se llama Juegos Intercolegiados Nacionales. Lo organiza el Ministerio del Deporte para estudiantes de 7 a 17 años.",
      },
      {
        question: "¿Cuándo es la final nacional de los Juegos Intercolegiados 2026?",
        answer:
          "Del 13 al 30 de noviembre de 2026 en Bogotá, según el Ministerio del Deporte. Las inscripciones cerraron el 30 de abril.",
      },
      {
        question: "¿Debe una escuela deportiva cobrar mensualidad en vacaciones?",
        answer:
          "No hay una regla legal; lo decide la escuela y debe quedar escrito en el contrato de inscripción. Las opciones comunes son cobrar completo, cobrar reducido o pausar el cobro y ofrecer un curso vacacional aparte.",
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "cuanto-gana-un-entrenador-en-colombia",
    title: "¿Cuánto gana un entrenador deportivo en Colombia en 2026?",
    excerpt:
      "Honorarios públicos del IDRD, rangos salariales de 2026, salario mínimo y el costo real de contratar a un entrenador por nómina o por prestación de servicios.",
    category: "Análisis",
    readTime: "7 min",
    date: "13 Oct 2026",
    isoDate: "2026-10-13",
    author: "Equipo SportMaps",
    authorRole: "Análisis y contenidos",
    heroGradient: "from-sport-primary to-sport-accent",
    body: [
      {
        type: "p",
        content:
          "Un entrenador deportivo en Colombia gana en 2026 entre $2.317.403 y $4.685.259 al mes en sus primeros cinco años, según WageIndicator. En el sector público hay una referencia oficial: el IDRD de Bogotá pagaba en 2025 honorarios de $2.950.000 mensuales a un entrenador de formación deportiva y hasta $13.136.000 a un entrenador de medallistas olímpicos. En escuelas privadas es común pagar por sesión o por horas, y el piso legal de un contrato de tiempo completo es el salario mínimo de $1.750.905.",
      },
      { type: "h2", content: "En resumen" },
      {
        type: "callout",
        variant: "tip",
        content:
          "El ingreso depende del modelo de contrato (nómina o prestación de servicios), de las horas y del nivel de los deportistas. Si diriges una escuela, compara siempre el costo total del entrenador para ti, no solo el valor que recibe.",
      },
      { type: "h2", content: "Honorarios públicos de referencia: IDRD Bogotá" },
      {
        type: "table",
        headers: ["Nivel (IDRD)", "Honorarios mensuales", "Experiencia exigida"],
        rows: [
          ["Entrenador de formación deportiva", "$2.950.000", "1 a 3 años como entrenador o instructor"],
          ["Entrenador de talento y reserva deportiva", "$3.721.000", "1 año como entrenador"],
          ["Entrenador de tecnificación 3.1", "$3.857.000", "2 años"],
          ["Entrenador de tecnificación 3.2", "$4.704.000", "2 años"],
          ["Entrenador de rendimiento 4.1", "$5.654.000", "3 años"],
          ["Entrenador «head coach»", "$9.207.000", "5 años"],
          ["Entrenador de rendimiento 4.7 (medallista olímpico)", "$13.136.000", "7 años"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: IDRD, Resolución 032 de 2025, tabla de honorarios para contratos de prestación de servicios de la vigencia 2025 (alcaldiabogota.gov.co, Régimen Legal de Bogotá). Para 2026 la reemplazó la Resolución 1506 del 25 de noviembre de 2025. La Resolución 083 de 2024 fijaba $2.864.000 para el nivel de formación deportiva.",
      },
      {
        type: "p",
        content:
          "Son contratos de prestación de servicios: el entrenador paga su propia seguridad social con ese valor. Además, los niveles altos exigen logros de los deportistas (medallas nacionales o internacionales) y títulos en ciencias del deporte o educación física.",
      },
      { type: "h2", content: "Rangos salariales del mercado 2026" },
      {
        type: "table",
        headers: ["Fuente", "Cargo", "Valor mensual"],
        rows: [
          ["WageIndicator 2026", "Entrenadores, instructores y árbitros deportivos, al empezar", "$2.317.403 a $4.357.914"],
          ["WageIndicator 2026", "Mismo cargo, con 5 años de experiencia", "$2.486.591 a $4.685.259"],
          ["Decreto 1469 de 2025", "Salario mínimo legal 2026", "$1.750.905 + $249.095 de auxilio de transporte"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: WageIndicator, «Función y sueldo: entrenadores, instructores y árbitros de actividades deportivas» (wageindicator.org, 2026), semana de 42 horas; Ministerio del Trabajo, Decreto 1469 de 2025. Los portales de empleo publican estimaciones con metodologías distintas; tómalas como rango, no como promedio oficial.",
      },
      { type: "h2", content: "Nómina o prestación de servicios: el costo real para la escuela" },
      {
        type: "p",
        content:
          "La mayoría de escuelas pequeñas contrata entrenadores por prestación de servicios y paga por sesión o por mes. Es legal cuando el entrenador tiene autonomía real; si cumple horario fijo, recibe órdenes permanentes y trabaja solo para ti, el riesgo es que se configure un contrato laboral. Compara los dos modelos con números:",
      },
      {
        type: "table",
        headers: ["Concepto (ejemplo ilustrativo)", "Nómina con salario mínimo", "Prestación de servicios $2.000.000"],
        rows: [
          ["Pago al entrenador", "$1.750.905 + auxilio $249.095", "$2.000.000"],
          ["Prima, cesantías, intereses sobre cesantías y vacaciones", "≈ $426.000 (vacaciones sin auxilio)", "No aplica"],
          ["Pensión del empleador (12 %)", "≈ $210.000", "La paga el contratista"],
          ["ARL riesgo I (0,522 %) y caja de compensación (4 %)", "≈ $79.000", "La ARL la paga el contratista (riesgo I a III)"],
          ["Costo mensual aproximado para la escuela", "≈ $2.715.000", "$2.000.000"],
        ],
      },
      {
        type: "p",
        content:
          "Fuente: cálculo ilustrativo de SportMaps con el salario mínimo 2026. Supone una empresa exonerada de aportes de salud, SENA e ICBF por salarios menores a 10 mínimos (artículo 114-1 del Estatuto Tributario). En prestación de servicios, el contratista cotiza salud y pensión sobre el 40 % de sus honorarios. Valida tu caso con tu contador.",
      },
      { type: "h2", content: "Pago por sesión: cómo calcular un valor justo" },
      {
        type: "p",
        content:
          "Muchas escuelas no contratan por mes sino por sesión o por grupo. Para que el valor sea comparable con un salario, conviértelo a valor por hora de trabajo real, incluyendo el tiempo de preparación y el desplazamiento entre sedes que no se paga.",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: un entrenador dirige 3 grupos de 90 minutos, tres días a la semana (9 sesiones semanales, unas 39 al mes). Si le pagas $55.000 por sesión, recibe unos $2.145.000 al mes. Como contratista, cotiza salud (12,5 %) y pensión (16 %) sobre el 40 % de esa cifra: cerca de $245.000, más la ARL. Le quedan alrededor de $1.890.000, sin prima, cesantías ni vacaciones pagas.",
      },
      {
        type: "p",
        content:
          "Fuente: ejemplo ilustrativo de SportMaps; tasas de aportes de trabajadores independientes vigentes en Colombia. La comparación sirve para dos cosas: que el entrenador sepa cuánto le queda de verdad y que la escuela entienda por qué los buenos entrenadores rotan cuando otra escuela les ofrece nómina.",
      },
      { type: "h2", content: "Lo que no debes confundir" },
      {
        type: "ul",
        items: [
          "Salario y honorarios no son lo mismo: $2.950.000 de honorarios del IDRD no equivalen a $2.950.000 de salario, porque el contratista paga su seguridad social y no recibe prestaciones.",
          "Entrenador personal (gimnasio) y entrenador de escuela formativa son mercados distintos, con tarifas y horarios diferentes.",
          "Los cargos de alto rendimiento de los institutos de deporte exigen medallas y años de experiencia: no son el punto de partida de un entrenador de escuela.",
          "Un rango de un portal de empleo es una estimación estadística, no una tabla oficial. Para el sector público, la referencia es la resolución de honorarios de cada entidad.",
        ],
      },
      { type: "h2", content: "Qué hace subir el ingreso de un entrenador" },
      {
        type: "ul",
        items: [
          "Formación: licenciatura o profesional en ciencias del deporte o educación física, y cursos de federación.",
          "Resultados: los niveles altos del IDRD exigen medallas de sus deportistas en campeonatos nacionales o internacionales.",
          "Especialidad: preparación de arqueros, preparación física y entrenamiento de alto rendimiento se pagan mejor.",
          "Volumen: varios grupos en la misma sede, o clases personalizadas en las horas libres.",
          "Herramientas propias: planificación por mesociclos, evaluaciones físicas registradas y reportes a familias aumentan su valor para la escuela.",
        ],
      },
      { type: "h2", content: "Cuánto puede pagar una escuela: la cuenta desde los ingresos" },
      {
        type: "p",
        content:
          "El sueldo del entrenador sale de las mensualidades de sus grupos. Por eso la pregunta útil para un director no es «cuánto paga el mercado» sino «cuántos alumnos necesita un grupo para pagar bien a su entrenador y dejar margen».",
      },
      {
        type: "callout",
        variant: "info",
        content:
          "Ejemplo ilustrativo: un grupo de 18 alumnos a $150.000 factura $2.700.000 al mes. Si el entrenador cuesta $700.000 al mes por ese grupo (dos sesiones semanales) y la cancha $600.000, quedan $1.400.000 para administración, balones, pólizas, mora y utilidad. Con 10 alumnos, el mismo grupo factura $1.500.000 y apenas cubre entrenador y cancha.",
      },
      {
        type: "p",
        content:
          "Por eso la ocupación de los grupos y la mora deciden cuánto puedes pagarle a tu equipo técnico. Una escuela que cobra a tiempo y llena sus grupos puede ofrecer mejores condiciones y retener a sus mejores entrenadores; una que deja grupos a medio llenar termina compitiendo solo por precio.",
      },
      { type: "h2", content: "Si vas a contratar: 5 pasos" },
      {
        type: "ol",
        items: [
          "Define el modelo (nómina o prestación de servicios) según el horario y la exclusividad que necesitas, no solo según el costo.",
          "Fija el valor por sesión o por mes y escríbelo con las funciones: entrenamientos, partidos, reportes, reuniones con papás.",
          "Pide hoja de vida con certificados y verifica antecedentes antes de dejarlo a cargo de menores.",
          "Exige al contratista su planilla de seguridad social cada mes antes de pagar.",
          "Dale acceso a las herramientas: asistencia, planificación y evaluaciones, con un rol que solo le muestre sus grupos.",
        ],
      },
      {
        type: "callout",
        variant: "info",
        content:
          "En SportMaps puedes registrar entrenadores y staff ilimitados en todos los planes, con roles y permisos: el coach ve sus grupos, toma asistencia, planifica sesiones y registra evaluaciones físicas sin ver las finanzas de la escuela.",
      },
      {
        type: "cta",
        title: "Herramientas para entrenadores",
        description:
          "Pizarra táctica de fútbol, planificación por mesociclos, evaluaciones físicas y asistencia en el celular.",
        href: "/entrenadores",
        label: "Ver SportMaps para entrenadores",
      },
    ],
    related: [
      "como-contratar-entrenadores-prestacion-de-servicios",
      "planificacion-entrenamiento-mesociclos-escuela",
      "como-abrir-una-escuela-de-futbol-en-colombia",
    ],
    about: [
      "salario de entrenador deportivo en Colombia",
      "contrato de prestación de servicios",
      "salario mínimo en Colombia 2026",
      "gestión de escuelas deportivas",
    ],
    mentions: ["IDRD", "WageIndicator", "Ministerio del Trabajo", "SportMaps"],
    faqs: [
      {
        question: "¿Cuánto gana un entrenador de fútbol en una escuela en Colombia?",
        answer:
          "No hay un promedio oficial para escuelas privadas. Como referencias de 2026, WageIndicator ubica a entrenadores e instructores deportivos entre $2.317.403 y $4.357.914 al mes al empezar, y el IDRD pagaba en 2025 $2.950.000 mensuales a un entrenador de formación deportiva por prestación de servicios.",
      },
      {
        question: "¿Cuánto paga el IDRD a un entrenador?",
        answer:
          "Según la Resolución 032 de 2025, entre $2.950.000 (formación deportiva) y $13.136.000 (entrenador de medallistas olímpicos) al mes, según el nivel. Para 2026 rige la Resolución 1506 de 2025.",
      },
      {
        question: "¿Cuál es el salario mínimo en Colombia en 2026?",
        answer:
          "Es de $1.750.905 mensuales, más $249.095 de auxilio de transporte, fijado por el Decreto 1469 de 2025.",
      },
      {
        question: "¿Es legal contratar entrenadores por prestación de servicios?",
        answer:
          "Sí, si el entrenador tiene autonomía real sobre cómo presta el servicio. Si cumple horario fijo, recibe órdenes permanentes y trabaja de forma subordinada, puede configurarse un contrato laboral. Consulta tu caso con un abogado o contador.",
      },
      {
        question: "¿Cuánto le cuesta a una escuela un entrenador con salario mínimo?",
        answer:
          "En un cálculo ilustrativo con el mínimo de 2026, cerca de $2.715.000 al mes sumando salario, auxilio, prestaciones, pensión, ARL y caja, para una empresa exonerada de aportes de salud, SENA e ICBF.",
      },
    ],
  },
];
