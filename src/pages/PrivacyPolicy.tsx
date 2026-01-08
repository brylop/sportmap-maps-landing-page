import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, Mail, FileText, Clock, Globe } from "lucide-react";

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
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                    <p>WhatsApp: +57 312 846 3555</p>
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
