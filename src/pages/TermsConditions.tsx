import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, CheckCircle, Users, ShieldCheck, Ban, HelpCircle } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Términos y Condiciones | SportMaps"
        description="Términos y condiciones de uso de la plataforma SportMaps. Conoce tus derechos y obligaciones al usar nuestros servicios."
        keywords="términos condiciones, condiciones uso, términos servicio, sportmaps legal"
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
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Aceptación */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-sport-primary" />
                  Aceptación de los Términos
                </h2>
                <p className="text-sport-text-muted leading-relaxed">
                  Al acceder y utilizar la plataforma SportMaps, usted acepta estos Términos y 
                  Condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos 
                  términos, le rogamos que no utilice nuestros servicios. El uso continuado de 
                  la plataforma constituye la aceptación de cualquier modificación a estos términos.
                </p>
              </CardContent>
            </Card>

            {/* Descripción del servicio */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-sport-primary" />
                  Descripción del Servicio
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    SportMaps es una plataforma digital que conecta:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Deportistas y atletas con rutas deportivas verificadas</li>
                    <li>Usuarios con escuelas deportivas y academias certificadas</li>
                    <li>Personas con entrenadores personales y profesionales del bienestar</li>
                    <li>Proveedores de equipamiento deportivo con compradores potenciales</li>
                  </ul>
                  <p>
                    Actuamos como intermediarios facilitando la conexión entre las partes, 
                    sin ser responsables directos de los servicios prestados por terceros.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Uso permitido */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-sport-primary" />
                  Uso Permitido
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>Al utilizar SportMaps, usted se compromete a:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Proporcionar información veraz y actualizada en los formularios</li>
                    <li>No utilizar la plataforma para fines ilegales o no autorizados</li>
                    <li>Respetar los derechos de propiedad intelectual de SportMaps y terceros</li>
                    <li>No interferir con el funcionamiento normal de la plataforma</li>
                    <li>No enviar spam, malware u otro contenido malicioso</li>
                    <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Uso prohibido */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Ban className="w-5 h-5 text-red-500" />
                  Conductas Prohibidas
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>Está estrictamente prohibido:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Suplantar la identidad de otra persona o entidad</li>
                    <li>Publicar información falsa o engañosa sobre servicios deportivos</li>
                    <li>Intentar acceder a cuentas o datos de otros usuarios</li>
                    <li>Utilizar bots, scrapers u otras herramientas automatizadas sin autorización</li>
                    <li>Realizar ataques de denegación de servicio (DoS/DDoS)</li>
                    <li>Explotar vulnerabilidades de seguridad de la plataforma</li>
                    <li>Comercializar datos obtenidos de la plataforma sin autorización</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilidad */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Limitación de Responsabilidad
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    SportMaps actúa únicamente como plataforma de conexión y no se hace responsable de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>La calidad de los servicios prestados por escuelas, entrenadores o proveedores</li>
                    <li>Lesiones o daños derivados de actividades deportivas realizadas por los usuarios</li>
                    <li>La exactitud de la información proporcionada por terceros en la plataforma</li>
                    <li>Interrupciones del servicio por causas técnicas o de fuerza mayor</li>
                    <li>Pérdidas económicas derivadas del uso o imposibilidad de uso de la plataforma</li>
                  </ul>
                  <p className="mt-4">
                    Los usuarios asumen la responsabilidad de verificar la idoneidad de los servicios 
                    antes de contratarlos y de tomar las precauciones necesarias en sus actividades deportivas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Propiedad intelectual */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sport-primary" />
                  Propiedad Intelectual
                </h2>
                <div className="space-y-4 text-sport-text-muted">
                  <p>
                    Todos los contenidos de SportMaps, incluyendo pero no limitándose a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Logotipos, diseños gráficos y marca registrada</li>
                    <li>Código fuente y software de la plataforma</li>
                    <li>Textos, imágenes y material multimedia original</li>
                    <li>Estructura y diseño de la plataforma</li>
                  </ul>
                  <p className="mt-4">
                    Son propiedad exclusiva de SportMaps y están protegidos por las leyes de 
                    propiedad intelectual de Colombia. Queda prohibida su reproducción, distribución 
                    o modificación sin autorización expresa por escrito.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modificaciones */}
            <Card className="bg-sport-surface border-sport-border">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-sport-primary" />
                  Modificaciones y Contacto
                </h2>
                <div className="text-sport-text-muted space-y-4">
                  <p>
                    SportMaps se reserva el derecho de modificar estos Términos y Condiciones 
                    en cualquier momento. Las modificaciones entrarán en vigor desde su publicación 
                    en la plataforma. Recomendamos revisar periódicamente esta página.
                  </p>
                  <div className="mt-4 p-4 bg-sport-background rounded-lg">
                    <p><strong>Para consultas legales:</strong></p>
                    <p>Email: spoortmaps@gmail.com</p>
                    <p>WhatsApp: +57 312 846 3555</p>
                    <p className="mt-2 text-sm">
                      Jurisdicción: República de Colombia. Cualquier disputa será resuelta 
                      ante los tribunales competentes de la ciudad de Bogotá D.C.
                    </p>
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
