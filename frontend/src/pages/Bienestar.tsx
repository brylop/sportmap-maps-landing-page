import { useState } from "react";
import { ArrowLeft, Calendar, Users, Shield, FileText, Activity, School, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";

const services = [
  {
    icon: Calendar,
    color: "text-sport-primary",
    title: "Agenda de citas",
    description: "Organiza tus citas con los deportistas de la escuela en un solo calendario.",
    items: ["Citas por deportista", "Horarios del profesional", "Historial de atenciones"],
  },
  {
    icon: Users,
    color: "text-sport-accent",
    title: "Pacientes",
    description: "La lista de deportistas que atiendes, con sus datos y su escuela.",
    items: ["Ficha por deportista", "Datos del acudiente", "Notas de seguimiento"],
  },
  {
    icon: Shield,
    color: "text-sport-success",
    title: "Consentimiento del acudiente",
    description: "Para menores de edad, el acudiente autoriza la atención y el tratamiento de los datos de salud (Ley 1581 de 2012).",
    items: ["Autorización previa del acudiente", "Datos de salud como dato sensible", "Acceso solo con autorización"],
  },
  {
    icon: FileText,
    color: "text-sport-highlight",
    title: "Historia clínica",
    description: "Registro de la historia clínica según la Resolución 1995 de 1999.",
    items: ["Registro por cada atención", "Diligenciada por el profesional", "Guardada con acceso restringido"],
  },
  {
    icon: Activity,
    color: "text-sport-info",
    title: "Registro de lesiones",
    description: "Anota las lesiones de cada deportista y su evolución.",
    items: ["Tipo y fecha de la lesión", "Evolución y estado", "Visible para el profesional a cargo"],
  },
  {
    icon: School,
    color: "text-sport-warning",
    title: "El fisio de tu escuela",
    description: "Trabaja de la mano con la academia: la escuela te vincula y atiendes a sus deportistas.",
    items: ["Vinculación con la escuela", "Deportistas de la escuela en tu agenda", "Un solo lugar para el equipo"],
  },
];

export default function Bienestar() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO
        title="Bienestar Deportivo - Salud Física y Mental"
        description="Para fisioterapeutas y profesionales de la salud deportiva: agenda, pacientes, historia clínica según la Resolución 1995 y consentimiento del acudiente (Ley 1581) para menores."
        url="https://sportmaps.co/bienestar"
        canonical="https://sportmaps.co/bienestar"
        keywords="bienestar deportivo, fisioterapia deportiva, historia clínica deportiva, fisioterapeuta escuela deportiva, Colombia"
      />
      <TechBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Bienestar Integral</h1>
            <p className="text-sm text-sport-text-secondary">Para el fisio y los profesionales de salud de tu escuela</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            El fisio de tu escuela, organizado
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Agenda, pacientes, registro de lesiones e historia clínica según la Resolución 1995, con el consentimiento del acudiente para los menores. Todo conectado con la escuela donde atiendes.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Lo que tienes hoy en SportMaps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
                <CardHeader>
                  <service.icon className={`w-8 h-8 mb-2 ${service.color}`} />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-sport-text-secondary">
                    {service.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <Card className="border-sport-border bg-sport-card border-dashed">
              <CardHeader>
                <Wallet className="w-8 h-8 mb-2 text-sport-text-secondary" />
                <div className="flex items-center gap-2">
                  <CardTitle>Cobro de tus consultas</CardTitle>
                  <Badge variant="secondary">Próximamente</Badge>
                </div>
                <CardDescription>
                  Cobrar tus atenciones dentro de la app con tu propia cuenta de pagos. Todavía no está disponible.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="mb-12">
          <Card className="border-sport-border bg-sport-card">
            <CardHeader className="text-center">
              <Shield className="w-12 h-12 text-sport-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Datos de salud con cuidado</CardTitle>
              <CardDescription>
                La información de salud es un dato sensible y la tratamos como tal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="font-semibold mb-1">Resolución 1995</h4>
                  <p className="text-sm text-sport-text-secondary">La historia clínica se lleva según la Resolución 1995 de 1999</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="font-semibold mb-1">Consentimiento del acudiente</h4>
                  <p className="text-sm text-sport-text-secondary">Para menores, el acudiente autoriza antes de la atención (Ley 1581 de 2012)</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold mb-1">Acceso restringido</h4>
                  <p className="text-sm text-sport-text-secondary">Solo el profesional a cargo ve la historia clínica del deportista</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plans Section */}
        <RolePricingSection
          config={rolePricingConfigs.bienestar}
          onCTA={() => setIsDemoOpen(true)}
        />

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Eres el fisio de una escuela?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Wellness Pro cuesta $59.000/mes. Escríbenos y te mostramos cómo funciona con tu escuela.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={() => setIsDemoOpen(true)}>
              Solicitar demo
            </Button>
          </div>
        </section>
      </main>
      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="bienestar" />
    </div>
  );
}
