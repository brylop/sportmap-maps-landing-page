import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, Lock, Eye, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const TratamientoDatos = () => {
  const sections = [
    {
      icon: Database,
      title: "Datos que Recopilamos",
      content: [
        "Información de identificación personal (nombre, email, teléfono)",
        "Datos deportivos y de rendimiento",
        "Información de uso de la plataforma",
        "Datos de facturación y pagos",
        "Registros de comunicación"
      ]
    },
    {
      icon: Eye,
      title: "Finalidad del Tratamiento",
      content: [
        "Prestación de servicios de la plataforma",
        "Mejora continua de la experiencia del usuario",
        "Comunicaciones sobre el servicio",
        "Análisis estadísticos agregados",
        "Cumplimiento de obligaciones legales"
      ]
    },
    {
      icon: Lock,
      title: "Medidas de Seguridad",
      content: [
        "Encriptación de datos en tránsito y en reposo",
        "Autenticación de múltiples factores",
        "Acceso restringido basado en roles",
        "Monitoreo continuo de seguridad",
        "Copias de seguridad regulares"
      ]
    },
    {
      icon: Users,
      title: "Derechos del Titular",
      content: [
        "Conocer, actualizar y rectificar sus datos",
        "Solicitar prueba de la autorización",
        "Ser informado sobre el uso de sus datos",
        "Revocar la autorización o solicitar supresión",
        "Presentar quejas ante la SIC"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Tratamiento de Datos | SportMaps - Política de Datos Personales"
        description="Conoce cómo SportMaps recopila, procesa y protege tus datos personales de acuerdo con la Ley 1581 de 2012 de Colombia."
        keywords="tratamiento datos personales, política datos, protección datos colombia, ley 1581, privacidad sportmaps"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/5 via-transparent to-sport-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-primary/10 border border-sport-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-sport-primary" />
              <span className="text-sm text-sport-primary font-medium">Protección de Datos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de <span className="text-sport-primary">Tratamiento de Datos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce cómo recopilamos, usamos y protegemos tu información personal.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última actualización: 29 de diciembre de 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-sport-primary" />
                  Introducción
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    SportMaps Technology S.A.S., identificada con NIT [número], con domicilio principal en Bogotá D.C., 
                    Colombia (en adelante "SportMaps"), en cumplimiento de la Ley Estatutaria 1581 de 2012 "Por la cual 
                    se dictan disposiciones generales para la protección de datos personales" y su Decreto Reglamentario 
                    1377 de 2013, adopta la presente Política de Tratamiento de Datos Personales.
                  </p>
                  <p>
                    Esta política aplica a todos los datos personales recopilados, almacenados, usados, circulados, 
                    suprimidos y tratados por SportMaps en el desarrollo de su objeto social.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sport-primary/10 flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-sport-primary" />
                      </div>
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-sport-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold mb-6">Responsable del Tratamiento</h2>
                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-2">SportMaps Technology S.A.S.</p>
                    <p>Bogotá D.C., Colombia</p>
                    <p>Email: datos@sportmaps.co</p>
                    <p>Teléfono: +57 312 846 3555</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Oficial de Protección de Datos</p>
                    <p>Email: privacidad@sportmaps.co</p>
                    <p>Horario de atención: Lunes a Viernes</p>
                    <p>8:00 AM - 6:00 PM (COT)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h2 className="text-xl font-bold mb-6">Marco Legal</h2>
                <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  <p>
                    El presente documento se rige por las siguientes normas colombianas:
                  </p>
                  <ul className="space-y-2">
                    <li>• Constitución Política de Colombia, Artículo 15</li>
                    <li>• Ley Estatutaria 1581 de 2012</li>
                    <li>• Decreto Reglamentario 1377 de 2013</li>
                    <li>• Decreto Único Reglamentario 1074 de 2015</li>
                    <li>• Demás normas que las modifiquen o adicionen</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Tienes Preguntas sobre tus Datos?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contáctanos para ejercer tus derechos o resolver cualquier inquietud sobre el tratamiento de tus datos personales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:datos@sportmaps.co" 
              className="inline-flex items-center justify-center px-6 py-3 bg-sport-primary text-white rounded-lg hover:bg-sport-primary/90 transition-colors"
            >
              Contactar por Email
            </a>
            <a 
              href="https://wa.me/573128463555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default TratamientoDatos;
