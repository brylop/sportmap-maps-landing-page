import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Mail, FileText, Clock, Globe, Baby, Share2, Trash2, MessageCircle } from "lucide-react";

// Fecha real de la última revisión del documento. NO usar new Date(): una
// política que dice "actualizada hoy" todos los días no sirve para acreditar
// qué texto estaba vigente en una fecha dada.
const ULTIMA_ACTUALIZACION = "11 de septiembre de 2026";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Política de Privacidad | SportMaps"
        description="Conoce cómo SportMaps protege tu privacidad y tus datos personales. Política de privacidad conforme a la Ley 1581 de 2012 de Colombia."
        keywords="política privacidad, protección datos, privacidad sportmaps, datos personales, ley 1581"
        canonical="https://sportmaps.co/privacidad"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-sport-primary to-sport-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-sport-primary">
              Política de Privacidad
            </h1>
            <p className="text-muted-foreground">
              Última actualización: {ULTIMA_ACTUALIZACION}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introducción */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sport-primary" />
                  Introducción
                </h2>
                <p className="text-sport-text-muted leading-relaxed">
                  En SportMaps, nos comprometemos a proteger la privacidad de nuestros usuarios. 
                  Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y 
                  protegemos su información personal cuando utiliza nuestra plataforma de ecosistemas deportivos.
                </p>
              </CardContent>
            </Card>

            {/* Información que recopilamos */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-sport-primary" />
                  Información que Recopilamos
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <div>
                    <h3 className="font-medium text-sport-text-primary mb-2">Información proporcionada voluntariamente:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nombre y apellidos</li>
                      <li>Dirección de correo electrónico</li>
                      <li>Número de teléfono (opcional)</li>
                      <li>Información sobre intereses deportivos</li>
                      <li>Datos de su negocio (para partners y escuelas)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-sport-text-primary mb-2">Información recopilada automáticamente:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Dirección IP y ubicación geográfica aproximada</li>
                      <li>Tipo de navegador y dispositivo</li>
                      <li>Páginas visitadas y tiempo de navegación</li>
                      <li>Cookies y tecnologías similares</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Uso de la información */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sport-primary" />
                  Uso de la Información
                </h2>
                <p className="text-sport-text-muted mb-4">
                  Utilizamos su información personal para los siguientes propósitos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sport-text-muted ml-4">
                  <li>Procesar sus solicitudes de contacto y formularios</li>
                  <li>Conectarle con escuelas deportivas, entrenadores y servicios relevantes</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Enviar comunicaciones sobre actualizaciones de la plataforma (con su consentimiento)</li>
                  <li>Cumplir con obligaciones legales y resolver disputas</li>
                  <li>Prevenir fraudes y actividades maliciosas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Protección de datos */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-sport-primary" />
                  Protección de Datos
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cifrado SSL/TLS para todas las transmisiones de datos</li>
                    <li>Políticas de seguridad a nivel de fila (RLS) en nuestra base de datos</li>
                    <li>Acceso restringido a datos personales solo a personal autorizado</li>
                    <li>Monitoreo continuo de seguridad y auditorías periódicas</li>
                    <li>Copias de seguridad encriptadas y almacenamiento seguro</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Datos de menores de edad */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Baby className="w-5 h-5 text-sport-primary" />
                  Datos de Menores de Edad
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    SportMaps es una plataforma de gestión deportiva, por lo que una parte
                    importante de los datos que procesamos corresponde a niños, niñas y
                    adolescentes. Tratamos esos datos con el cuidado reforzado que exigen la
                    Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-sport-text-primary">Quién responde por esos datos:</strong> la
                      escuela, club o entidad deportiva actúa como responsable del tratamiento y es
                      quien obtiene la autorización del padre, madre o representante legal.
                      SportMaps actúa como encargado: tratamos los datos por instrucción de la
                      escuela y únicamente para prestarle el servicio.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Qué datos:</strong> nombre, fecha de
                      nacimiento, documento de identidad, datos de contacto del acudiente,
                      información de salud relevante para la práctica deportiva que la escuela
                      solicite, asistencia, desempeño deportivo e información de los cobros
                      asociados a su inscripción.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Lo que no hacemos:</strong> no
                      vendemos datos de menores, no los usamos para publicidad ni para
                      perfilamiento comercial, y no los compartimos con terceros distintos de los
                      encargados descritos más abajo.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Derechos:</strong> el padre, madre o
                      representante legal puede ejercer en nombre del menor todos los derechos
                      descritos en esta política, incluida la eliminación.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Terceros y encargados */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-sport-primary" />
                  Con Quién Compartimos la Información
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    <strong className="text-sport-text-primary">No vendemos su información.</strong>{" "}
                    Para operar la plataforma trabajamos con proveedores tecnológicos que actúan
                    como encargados: solo pueden usar los datos para prestarnos el servicio que
                    describimos, bajo obligaciones de confidencialidad y seguridad.
                  </p>
                  <div className="space-y-2">
                    <p><strong className="text-sport-text-primary">Infraestructura y comunicaciones</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Supabase</strong> — base de datos, autenticación y almacenamiento de archivos.</li>
                      <li><strong>Vercel</strong> y <strong>Render</strong> — alojamiento de la aplicación web y de nuestros servicios.</li>
                      <li><strong>Resend</strong> — envío de correos transaccionales (invitaciones, avisos de cobro, informes).</li>
                      <li><strong>Google Firebase</strong> — notificaciones push a la aplicación móvil.</li>
                      <li><strong>Meta Platforms</strong> — mensajería a través de la WhatsApp Business Platform, cuando la escuela habilita ese canal.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-sport-text-primary">Pagos y facturación</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><strong>Wompi</strong> y <strong>Mercado Pago</strong> — procesamiento de pagos en línea. Los datos de tarjetas se entregan directamente a la pasarela; SportMaps no los almacena.</li>
                      <li><strong>Proveedores autorizados de facturación electrónica</strong> — emisión de facturas ante la DIAN, cuando la escuela lo requiere.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-sport-text-primary">Procesamiento automatizado con inteligencia artificial</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        <strong>Google (Gemini)</strong>, <strong>Groq</strong>, <strong>OpenAI</strong> y{" "}
                        <strong>DeepSeek</strong> — lectura automática de comprobantes de pago que usted
                        adjunta, y asistencia conversacional en los canales de atención. Usamos varios
                        proveedores con conmutación automática para garantizar disponibilidad del
                        servicio.
                      </li>
                      <li>
                        Esto implica que la <strong>imagen del comprobante</strong> y el{" "}
                        <strong>texto de los mensajes</strong> se envían al proveedor para ser
                        procesados. No enviamos historiales completos ni datos de salud a estos
                        proveedores, y no usamos su información para entrenar modelos de terceros.
                      </li>
                    </ul>
                  </div>
                  <p>
                    <strong className="text-sport-text-primary">Transferencias internacionales.</strong>{" "}
                    Varios de estos proveedores operan servidores fuera de Colombia. Al usar la
                    plataforma usted autoriza esa transferencia, que realizamos amparados en
                    cláusulas contractuales y medidas de seguridad equivalentes a las exigidas por
                    la normativa colombiana.
                  </p>
                  <p>
                    También podemos entregar información cuando lo exija una autoridad competente
                    mediante orden válida, o cuando sea necesario para defender nuestros derechos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comunicaciones por WhatsApp */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-sport-primary" />
                  Comunicaciones por WhatsApp
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Algunas escuelas atienden a las familias por WhatsApp a través de SportMaps. Ese
                    canal funciona así:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong className="text-sport-text-primary">Consentimiento previo y explícito.</strong>{" "}
                      Solo enviamos mensajes iniciados por la escuela —recordatorios de pago,
                      confirmaciones, avisos— después de que usted lo acepta expresamente en la
                      conversación. Escribirle a la escuela no equivale a aceptar recibirlos.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Baja inmediata.</strong> Puede dejar de
                      recibirlos en cualquier momento respondiendo <strong>STOP</strong>. Lo
                      registramos de inmediato y dejamos de enviarle mensajes automáticos.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Asistente automático y personas.</strong>{" "}
                      La conversación puede ser atendida por un asistente automático y por el
                      personal de la escuela. En ambos casos queda registrada y visible para la
                      escuela.
                    </li>
                    <li>
                      <strong className="text-sport-text-primary">Comprobantes.</strong> Si envía la imagen
                      de un comprobante de pago, la procesamos para validarlo contra el cobro
                      correspondiente, con el apoyo de los proveedores de inteligencia artificial
                      indicados arriba.
                    </li>
                  </ul>
                  <p>
                    El costo de los mensajes de WhatsApp corre por cuenta de la escuela y de su
                    operador; SportMaps no cobra por mensaje enviado.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Retención de datos */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sport-primary" />
                  Retención de Datos
                </h2>
                <p className="text-sport-text-muted">
                  Conservamos sus datos personales solo durante el tiempo necesario para cumplir 
                  con los propósitos descritos en esta política, o según lo requiera la ley. 
                  Los datos de contacto y solicitudes se mantienen por un período máximo de 3 años 
                  desde la última interacción, después del cual serán eliminados de forma segura.
                </p>
              </CardContent>
            </Card>

            {/* Sus derechos */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sport-primary" />
                  Sus Derechos
                </h2>
                <p className="text-sport-text-muted mb-4">
                  De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sport-text-muted ml-4">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar información incorrecta o desactualizada</li>
                  <li>Solicitar la eliminación de sus datos (derecho al olvido)</li>
                  <li>Oponerse al tratamiento de sus datos para ciertos fines</li>
                  <li>Revocar el consentimiento otorgado</li>
                  <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Eliminación de datos */}
            <Card className="bg-sport-surface border-sport-border" id="eliminacion-de-datos">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Trash2 className="w-5 h-5 text-sport-primary" />
                  Cómo Solicitar la Eliminación de sus Datos
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <div>
                    <p className="mb-2"><strong className="text-sport-text-primary">Cómo pedirlo</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Escríbanos a <strong>contacto@sportmaps.co</strong> desde el correo con el que
                        está registrado, con el asunto <em>"Eliminación de datos"</em>.
                      </li>
                      <li>
                        O solicítelo directamente a su escuela, que puede tramitarlo desde la
                        plataforma.
                      </li>
                      <li>
                        Si la solicitud es sobre un menor de edad, debe hacerla su padre, madre o
                        representante legal.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-sport-text-primary">Qué pasa después</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>
                        Confirmamos su identidad y atendemos la solicitud dentro de los{" "}
                        <strong>15 días hábiles</strong> que establece la Ley 1581 de 2012.
                      </li>
                      <li>
                        Eliminamos su cuenta y sus datos personales de nuestros sistemas activos, y
                        pedimos su eliminación a los encargados que los tengan.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong className="text-sport-text-primary">Qué debemos conservar, y por qué</strong></p>
                    <p>
                      Hay información que no podemos borrar de inmediato porque la ley nos obliga a
                      conservarla: los <strong>registros contables y de facturación</strong> de pagos
                      ya realizados deben guardarse por los plazos que exigen las normas comerciales
                      y tributarias colombianas. En esos casos conservamos únicamente el soporte
                      contable, lo desvinculamos de su perfil y no lo usamos para ninguna otra
                      finalidad.
                    </p>
                  </div>
                  <p>
                    Si considera que no atendimos bien su solicitud, puede presentar una queja ante
                    la Superintendencia de Industria y Comercio.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-sport-primary" />
                  Contacto
                </h2>
                <div className="text-sport-text-muted space-y-2">
                  <p>
                    Para ejercer sus derechos o realizar consultas sobre esta política, contáctenos:
                  </p>
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
