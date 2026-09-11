import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText, Scale, AlertTriangle, CheckCircle, Users, ShieldCheck, Ban, HelpCircle,
  CreditCard, Receipt, Wallet, Store, CalendarDays, MessageCircle, Database,
  Power, Gavel, KeyRound, Building2,
} from "lucide-react";

// Fecha real de la última revisión. NO usar new Date(): un documento que dice
// "actualizado hoy" todos los días no acredita qué texto estaba vigente en una
// fecha dada, que es justo para lo que sirve un contrato.
const ULTIMA_ACTUALIZACION = "11 de septiembre de 2026";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Términos y Condiciones | SportMaps"
        description="Términos y condiciones de uso de SportMaps: cuentas y roles, suscripción y pagos, cobros de la escuela a las familias, pasarelas, facturación electrónica, comunicaciones y responsabilidades."
        keywords="términos condiciones, condiciones uso, términos servicio, sportmaps legal, suscripción, pagos"
        canonical="https://sportmaps.co/terminos"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />

      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sport-primary to-sport-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-sport-primary">
              Términos y Condiciones
            </h1>
            <p className="text-muted-foreground">
              Última actualización: {ULTIMA_ACTUALIZACION}
            </p>
          </div>

          <div className="space-y-8">
            {/* 1. Aceptación y definiciones */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sport-primary" />
                  1. Aceptación y definiciones
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Estos Términos y Condiciones rigen el acceso y uso de la plataforma SportMaps,
                    en su sitio web, aplicación web y aplicaciones móviles. Al crear una cuenta,
                    aceptar una invitación o usar la plataforma, usted acepta estos términos. Si no
                    está de acuerdo, no utilice el servicio.
                  </p>
                  <p>
                    La aceptación por medios electrónicos tiene plena validez conforme a la Ley 527
                    de 1999.
                  </p>
                  <div>
                    <p className="mb-2"><strong className="text-sport-text-primary">Para entendernos:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>SportMaps</strong> (o "nosotros"): el titular y operador de la plataforma.</li>
                      <li><strong>Plataforma</strong>: el software, sitio, aplicaciones y servicios asociados.</li>
                      <li><strong>Escuela</strong>: la escuela, club, academia, gimnasio, entrenador independiente u organización deportiva que contrata SportMaps para gestionar su operación.</li>
                      <li><strong>Atleta</strong>: la persona que practica la actividad deportiva, sea mayor o menor de edad.</li>
                      <li><strong>Acudiente</strong>: padre, madre o representante legal de un atleta menor de edad.</li>
                      <li><strong>Usuario</strong>: cualquier persona con acceso a la plataforma, en cualquier rol.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Qué es y qué no es SportMaps */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sport-primary" />
                  2. Qué es, y qué no es, SportMaps
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    SportMaps es un <strong className="text-sport-text-primary">software de gestión
                    deportiva</strong> que la Escuela contrata para administrar su operación. Según
                    el plan y los módulos habilitados, permite gestionar inscripciones y matrículas,
                    equipos y categorías, asistencia, horarios y sesiones, planes y mensualidades,
                    cobros y conciliación de pagos, facturación electrónica, informes de desempeño,
                    carnés digitales, reservas de escenarios, eventos y torneos, inventario y
                    dotación, tienda, comunicaciones con las familias y atención por canales
                    digitales.
                  </p>
                  <div>
                    <p className="mb-2"><strong className="text-sport-text-primary">Lo que SportMaps no es:</strong></p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>No prestamos el servicio deportivo.</strong> El entrenamiento, la
                        formación, la supervisión de los atletas y la seguridad en la práctica son
                        responsabilidad exclusiva de la Escuela y de su personal.
                      </li>
                      <li>
                        <strong>No somos parte de la relación entre la Escuela y la familia.</strong>{" "}
                        La matrícula, el precio, el reglamento, los horarios y las sanciones los
                        define la Escuela. Nosotros proveemos la herramienta con la que los
                        administra.
                      </li>
                      <li>
                        <strong>No somos entidad financiera ni recaudador.</strong> El dinero que una
                        familia paga por la actividad deportiva va a la cuenta bancaria o a la
                        pasarela de pagos de la Escuela, no a SportMaps.
                      </li>
                      <li>
                        <strong>No certificamos ni avalamos</strong> a las escuelas, entrenadores,
                        profesionales o proveedores que usan la plataforma, salvo que lo indiquemos
                        de forma expresa y por escrito.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Cuentas y roles */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sport-primary" />
                  3. Cuentas, roles y menores de edad
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      La plataforma opera con roles distintos —administración de la escuela,
                      entrenador, acudiente, atleta, profesional de bienestar, organizador,
                      proveedor, administrador de escenarios— y cada rol ve y puede hacer
                      únicamente lo que su permiso habilita.
                    </li>
                    <li>
                      La cuenta es personal. Usted es responsable de la confidencialidad de sus
                      credenciales y de toda actividad realizada con ellas. Avísenos de inmediato si
                      sospecha un acceso no autorizado.
                    </li>
                    <li>
                      La información que registre debe ser veraz y estar actualizada. La Escuela es
                      responsable de la exactitud de los datos que carga sobre sus atletas.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Menores de edad:</strong> los
                      atletas menores de edad son inscritos por la Escuela o por su Acudiente, quien
                      autoriza el tratamiento de sus datos. Cuando un menor usa la plataforma
                      directamente, lo hace bajo la autorización y supervisión de su Acudiente.
                      Detalles en nuestra{" "}
                      <a href="/privacidad" className="text-sport-primary underline">
                        Política de Privacidad
                      </a>.
                    </li>
                    <li>
                      La administración de la Escuela puede crear, invitar, suspender y dar de baja
                      usuarios de su propia organización, y es responsable de a quién le otorga
                      permisos administrativos o financieros.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 4. Suscripción y pagos a SportMaps */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-sport-primary" />
                  4. Suscripción, planes y pagos a SportMaps
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-sport-text-primary">Planes y módulos.</strong> El
                      servicio se presta bajo el plan que la Escuela contrate, con los módulos
                      adicionales que habilite. Las funcionalidades disponibles dependen del plan
                      vigente. Los precios son los publicados en nuestro sitio o los pactados por
                      escrito con la Escuela; en caso de discrepancia, prevalece lo pactado por
                      escrito.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Periodicidad y renovación.</strong>{" "}
                      La suscripción se factura por el período contratado y se renueva por períodos
                      iguales, salvo que alguna de las partes avise su intención de no renovar antes
                      del vencimiento.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Período de prueba o cortesía.</strong>{" "}
                      Si le otorgamos acceso de prueba, gratuito o promocional, lo indicaremos junto
                      con su duración. Al terminar, el acceso a las funciones de pago puede
                      suspenderse hasta que se active un plan. La información cargada no se elimina
                      por ese solo hecho.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Mora y suspensión.</strong> Si la
                      suscripción no se paga, podemos limitar o suspender el acceso a las funciones
                      de pago, previo aviso. Procuramos preservar el acceso de lectura y la
                      posibilidad de exportar la información durante un tiempo razonable.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Cambios de precio.</strong> Podemos
                      ajustar precios y los avisaremos con antelación razonable antes de que
                      apliquen a un nuevo período. Si no está de acuerdo, puede no renovar.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Retractación y reversión.</strong>{" "}
                      Cuando la contratación se realice a distancia y el contratante sea consumidor
                      en los términos de la Ley 1480 de 2011, aplican los derechos de retracto y de
                      reversión del pago en los casos y plazos que esa ley establece.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Impuestos.</strong> Los precios no
                      incluyen los impuestos que resulten aplicables, que se liquidarán conforme a la
                      ley.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 5. Cobros de la Escuela a las familias */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-sport-primary" />
                  5. Cobros de la Escuela a las familias
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Esta sección es importante y conviene leerla con atención, porque separa dos
                    cosas que suelen confundirse.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-sport-text-primary">Quién cobra.</strong> La Escuela
                      define y cobra sus matrículas, mensualidades, inscripciones y demás conceptos.
                      SportMaps es la herramienta con la que los genera, comunica y concilia. El
                      acreedor es la Escuela.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">A dónde va el dinero.</strong> Los
                      pagos de las familias se dirigen a la cuenta bancaria, llave de pago
                      inmediato o pasarela que la Escuela haya configurado. SportMaps no recibe,
                      custodia ni administra ese dinero, y no retiene comisión por transacción salvo
                      que se pacte expresamente un servicio de recaudo.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Valores, intereses y descuentos.</strong>{" "}
                      Los montos, fechas de vencimiento, días de gracia, recargos por mora, becas y
                      descuentos los configura y decide la Escuela, bajo su responsabilidad y dentro
                      de los límites legales. SportMaps solo ejecuta la configuración que la Escuela
                      define.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Reclamos por cobros.</strong> Si
                      considera que un cobro es incorrecto, debe dirigirse a la Escuela, que es quien
                      puede corregirlo, anularlo o devolverlo. SportMaps puede apoyar técnicamente,
                      pero no decide sobre el cobro ni sobre su devolución.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Suspensión por mora entre Escuela y familia.</strong>{" "}
                      Si la Escuela configura restricciones de acceso por mora, esa es una decisión
                      suya frente a su cliente.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 6. Pasarelas, comprobantes y validación automatizada */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-sport-primary" />
                  6. Pasarelas de pago, comprobantes y validación automatizada
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Los pagos en línea se procesan a través de pasarelas de terceros. Su uso queda
                      sujeto además a los términos de esas pasarelas. Los datos de tarjetas se
                      entregan directamente al procesador; SportMaps no los almacena.
                    </li>
                    <li>
                      Cuando la Escuela recibe pagos por transferencia o llave de pago inmediato, la
                      familia puede adjuntar el comprobante en la plataforma o en el canal de
                      atención habilitado.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Validación automatizada.</strong> El
                      comprobante puede ser leído por sistemas automatizados, incluidos proveedores
                      de inteligencia artificial, para contrastar monto, fecha, referencia y destino
                      contra el cobro correspondiente.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">El resultado automático no es una constancia definitiva de pago.</strong>{" "}
                      Un comprobante puede quedar aprobado, en revisión o rechazado. La Escuela
                      conserva en todo caso la facultad de revisarlo, pedir aclaraciones y decidir.
                      La conciliación bancaria efectiva prevalece sobre cualquier resultado
                      preliminar.
                    </li>
                    <li>
                      Adjuntar comprobantes falsos o alterados es causal de suspensión de la cuenta
                      y puede dar lugar a las acciones legales que correspondan.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 7. Facturación electrónica */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sport-primary" />
                  7. Facturación electrónica
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Si la Escuela habilita la facturación electrónica, SportMaps se integra con
                    proveedores tecnológicos autorizados para emitirla ante la autoridad tributaria.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-sport-text-primary">La Escuela es el emisor</strong> y la
                      única responsable del contenido fiscal de sus facturas: identificación del
                      adquiriente, conceptos, bases, impuestos y resolución de numeración.
                    </li>
                    <li>
                      SportMaps no asesora en materia tributaria ni responde por sanciones derivadas
                      de información mal registrada por la Escuela.
                    </li>
                    <li>
                      La disponibilidad de la emisión depende también de la disponibilidad del
                      proveedor autorizado y de los servicios de la autoridad tributaria.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 8. Tienda, proveedores y escenarios */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-sport-primary" />
                  8. Tienda, proveedores externos y dotación
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Cuando la Escuela o un proveedor habilita una tienda o catálogo, el vendedor es
                      quien publica los productos y responde por su existencia, descripción, precio,
                      entrega, garantía y devoluciones, conforme al Estatuto del Consumidor.
                    </li>
                    <li>
                      SportMaps provee la herramienta de publicación y gestión; no es vendedor ni
                      fabricante de esos productos, salvo indicación expresa.
                    </li>
                    <li>
                      Los módulos de inventario y dotación registran la entrega y custodia de
                      implementos. Ese registro es un apoyo administrativo: las condiciones de
                      préstamo, devolución y responsabilidad por pérdida o daño las define la
                      Escuela.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 9. Reservas, eventos y torneos */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-sport-primary" />
                  9. Reservas de escenarios, eventos y torneos
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Las reservas de escenarios, las clases de prueba y las inscripciones a eventos
                      se sujetan a la disponibilidad, los horarios, los plazos de cancelación y las
                      políticas que publique quien administra el escenario o el evento.
                    </li>
                    <li>
                      SportMaps gestiona el cupo y el registro; no garantiza la realización del
                      evento ni la disponibilidad efectiva del escenario, que dependen del
                      organizador.
                    </li>
                    <li>
                      Las cancelaciones, reprogramaciones y devoluciones se rigen por la política del
                      organizador, que debe ser informada al momento de reservar.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 10. Comunicaciones */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-sport-primary" />
                  10. Comunicaciones y canales de atención
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Le enviaremos comunicaciones operativas necesarias para el servicio —avisos de
                      cobro, confirmaciones, cambios de horario, informes— por correo electrónico,
                      notificaciones en la aplicación y, si la Escuela lo habilita, por WhatsApp.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">WhatsApp.</strong> Los mensajes
                      iniciados por la Escuela requieren su consentimiento previo y explícito. Puede
                      darse de baja en cualquier momento respondiendo <strong>STOP</strong>. La
                      conversación puede ser atendida por un asistente automático y por el personal
                      de la Escuela. El costo de esos mensajes corre por cuenta de la Escuela y su
                      operador.
                    </li>
                    <li>
                      Las comunicaciones estrictamente operativas o legales pueden enviarse aunque
                      haya optado por no recibir comunicaciones comerciales.
                    </li>
                    <li>
                      Los asistentes automatizados pueden equivocarse. Ante cualquier duda sobre un
                      valor, una fecha o una decisión, prevalece lo que confirme la Escuela.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 11. Datos personales */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-sport-primary" />
                  11. Datos personales
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    El tratamiento de datos personales se rige por nuestra{" "}
                    <a href="/privacidad" className="text-sport-primary underline">
                      Política de Privacidad
                    </a>{" "}
                    y por la{" "}
                    <a href="/tratamiento-datos" className="text-sport-primary underline">
                      política de tratamiento de datos
                    </a>, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Respecto de la información de sus atletas y familias, la{" "}
                      <strong className="text-sport-text-primary">Escuela actúa como responsable</strong>{" "}
                      del tratamiento y SportMaps como <strong className="text-sport-text-primary">encargado</strong>:
                      tratamos esos datos por instrucción de la Escuela y solo para prestarle el
                      servicio.
                    </li>
                    <li>
                      La Escuela declara contar con las autorizaciones necesarias de los titulares
                      —incluidos los representantes legales de los menores— para cargar su
                      información en la plataforma.
                    </li>
                    <li>
                      Al terminar la relación, la Escuela puede exportar su información y solicitar
                      su eliminación, con las salvedades de conservación legal indicadas en la
                      Política de Privacidad.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 12. Disponibilidad y cambios */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Power className="w-5 h-5 text-sport-primary" />
                  12. Disponibilidad, soporte y cambios en el servicio
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Trabajamos para mantener la plataforma disponible, pero no garantizamos
                      operación ininterrumpida ni libre de errores. Podemos realizar mantenimientos
                      programados y, cuando sea urgente, correctivos sin aviso previo.
                    </li>
                    <li>
                      La plataforma depende de servicios de terceros —alojamiento, pasarelas, correo,
                      mensajería, facturación—, cuyas interrupciones pueden afectarla.
                    </li>
                    <li>
                      Si se pactó un nivel de servicio específico por escrito, prevalece ese acuerdo.
                    </li>
                    <li>
                      Podemos modificar, agregar o retirar funcionalidades para mejorar el producto.
                      Si un cambio afecta de forma sustancial y negativa una función central del
                      plan contratado, lo avisaremos con antelación razonable.
                    </li>
                    <li>
                      El soporte se presta por los canales publicados y en los horarios informados.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 13. Propiedad intelectual */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sport-primary" />
                  13. Propiedad intelectual y contenido
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      La plataforma, su código, diseño, marca, textos y materiales son propiedad de
                      SportMaps y están protegidos por la legislación colombiana e internacional.
                      Recibe una licencia limitada, revocable y no exclusiva para usarla conforme a
                      estos términos y a su plan.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Su contenido sigue siendo suyo.</strong>{" "}
                      Los datos, logotipos, fotografías y documentos que la Escuela o los Usuarios
                      cargan les pertenecen. Nos otorgan únicamente la licencia necesaria para
                      alojarlos, procesarlos y mostrarlos con el fin de prestar el servicio.
                    </li>
                    <li>
                      Si su plan incluye personalización de marca, usted autoriza el uso de sus
                      signos distintivos con ese solo propósito, y declara tener derecho a usarlos.
                    </li>
                    <li>
                      Queda prohibido copiar, descompilar, revender o crear obras derivadas de la
                      plataforma sin autorización escrita.
                    </li>
                    <li>
                      Podemos usar datos agregados y anonimizados —que no identifican a ninguna
                      persona ni escuela— para estadísticas y mejora del producto.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 14. Conductas prohibidas */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Ban className="w-5 h-5 text-red-500" />
                  14. Conductas prohibidas
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>Está prohibido:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Suplantar la identidad de otra persona o entidad.</li>
                    <li>Intentar acceder a cuentas, escuelas o datos que no le corresponden.</li>
                    <li>Usar la plataforma para fines ilegales, o para tratar datos sin autorización de sus titulares.</li>
                    <li>Cargar contenido que vulnere derechos de terceros, o material inapropiado que involucre a menores.</li>
                    <li>Usar bots, scrapers o automatizaciones no autorizadas, o extraer masivamente información.</li>
                    <li>Comercializar o ceder a terceros los datos obtenidos de la plataforma.</li>
                    <li>Vulnerar la seguridad, saturar los servicios o explotar vulnerabilidades.</li>
                    <li>Enviar comunicaciones no solicitadas a las familias, o usar los canales de mensajería sin el consentimiento requerido.</li>
                    <li>Adjuntar comprobantes de pago falsos o alterados.</li>
                  </ul>
                  <p>
                    El incumplimiento puede dar lugar a la suspensión o terminación del acceso, sin
                    perjuicio de las acciones legales que correspondan. Si detecta una vulnerabilidad
                    de seguridad, le pedimos reportarla de forma responsable a nuestro correo de
                    contacto antes de divulgarla.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 15. Responsabilidad */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  15. Responsabilidad
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>SportMaps no responde por:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      La calidad, seguridad o idoneidad de la actividad deportiva, ni por lesiones,
                      accidentes o daños ocurridos durante su práctica.
                    </li>
                    <li>
                      Las decisiones de la Escuela sobre precios, cobros, becas, sanciones,
                      convocatorias o permanencia de un atleta.
                    </li>
                    <li>La exactitud de la información que cargan la Escuela o los Usuarios.</li>
                    <li>
                      Los productos o servicios de vendedores, proveedores u organizadores externos.
                    </li>
                    <li>
                      Interrupciones o fallas atribuibles a terceros proveedores, a la conectividad
                      del usuario o a fuerza mayor.
                    </li>
                  </ul>
                  <p>
                    En la medida permitida por la ley, y salvo dolo o culpa grave, la
                    responsabilidad total de SportMaps frente a la Escuela por cualquier reclamación
                    derivada del servicio se limita al valor de la suscripción efectivamente pagada
                    en los doce (12) meses anteriores al hecho que la origina.
                  </p>
                  <p>
                    <strong className="text-sport-text-primary">
                      Nada en estos términos limita o excluye los derechos que la ley reconoce de
                      forma irrenunciable a los consumidores
                    </strong>{" "}
                    conforme a la Ley 1480 de 2011, ni la responsabilidad que no pueda excluirse
                    legalmente.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 16. Terminación */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <KeyRound className="w-5 h-5 text-sport-primary" />
                  16. Terminación y qué pasa con su información
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      La Escuela puede terminar su suscripción al final del período contratado. Un
                      Usuario puede solicitar la eliminación de su cuenta en cualquier momento.
                    </li>
                    <li>
                      Podemos suspender o terminar el acceso por incumplimiento de estos términos,
                      por mora en el pago, o por uso que ponga en riesgo a otros usuarios o a la
                      plataforma.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Portabilidad.</strong> Antes de la
                      terminación, y durante un plazo razonable después, la Escuela puede exportar su
                      información en formatos de uso común.
                    </li>
                    <li>
                      Transcurrido ese plazo eliminamos la información, salvo la que debamos
                      conservar por obligación legal —en particular los soportes contables y
                      tributarios de pagos ya realizados—, conforme a la Política de Privacidad.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 17. Modificaciones */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sport-primary" />
                  17. Modificaciones a estos términos
                </h2>
                <p className="text-sport-text-muted">
                  Podemos actualizar estos Términos y Condiciones. Publicaremos la versión vigente en
                  esta página con su fecha de actualización y, cuando el cambio sea sustancial, lo
                  avisaremos por un medio razonable con antelación. El uso de la plataforma después
                  de la entrada en vigor implica su aceptación; si no está de acuerdo, puede terminar
                  el servicio conforme a la sección 16.
                </p>
              </CardContent>
            </Card>

            {/* 18. Ley aplicable */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-sport-primary" />
                  18. Ley aplicable, reclamos y jurisdicción
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Estos términos se rigen por la ley colombiana, en particular la Ley 1480 de
                      2011 (Estatuto del Consumidor), la Ley 1581 de 2012 y el Decreto 1377 de 2013
                      (protección de datos) y la Ley 527 de 1999 (mensajes de datos).
                    </li>
                    <li>
                      Antes de acudir a instancias judiciales, las partes procurarán resolver
                      directamente cualquier diferencia. Puede presentarnos peticiones, quejas y
                      reclamos por los canales de contacto, y le responderemos en los términos de
                      ley.
                    </li>
                    <li>
                      Los consumidores pueden acudir además a la Superintendencia de Industria y
                      Comercio.
                    </li>
                    <li>
                      Las controversias se someterán a los jueces competentes de la República de
                      Colombia. Si el contratante no es consumidor, las partes acuerdan la
                      competencia de los jueces de Bogotá D.C.
                    </li>
                    <li>
                      Si alguna cláusula resultara inválida, las demás continuarán vigentes.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 19. Contacto */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sport-primary" />
                  19. Contacto
                </h2>
                <div className="text-sport-text-muted space-y-2">
                  <p>Para consultas, peticiones, quejas o reclamos:</p>
                  <div className="mt-4 p-4 bg-sport-background rounded-lg">
                    <p><strong>SportMaps</strong></p>
                    <p>Email: contacto@sportmaps.co</p>
                    <p>WhatsApp: +57 320 268 3539</p>
                    <p>Colombia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}
