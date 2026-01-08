import { useState } from "react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, Users, Trophy, Calendar,
  Shield, Globe, BarChart3, FileText,
  CheckCircle, ArrowRight, Award
} from "lucide-react";
import { motion } from "framer-motion";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";

const Federaciones = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const features = [
    {
      icon: Building2,
      title: "Gestión de Clubes",
      description: "Administra todos los clubes afiliados con información centralizada y seguimiento de membresías."
    },
    {
      icon: Trophy,
      title: "Organización de Torneos",
      description: "Crea y gestiona competencias con inscripciones online, fixture automático y resultados en tiempo real."
    },
    {
      icon: Users,
      title: "Registro de Atletas",
      description: "Base de datos unificada de todos los deportistas federados con licencias y documentación."
    },
    {
      icon: Calendar,
      title: "Calendario Deportivo",
      description: "Planifica la temporada completa con eventos, competencias y actividades sincronizadas."
    },
    {
      icon: Shield,
      title: "Licencias y Afiliaciones",
      description: "Gestión digital de licencias deportivas, renovaciones automáticas y control de vigencias."
    },
    {
      icon: BarChart3,
      title: "Reportes y Estadísticas",
      description: "Análisis completo del deporte en tu región con métricas de crecimiento y participación."
    }
  ];

  const stats = [
    { value: "50+", label: "Federaciones Activas" },
    { value: "1,000+", label: "Clubes Afiliados" },
    { value: "100K+", label: "Atletas Registrados" },
    { value: "500+", label: "Torneos Organizados" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Federaciones y Ligas | SportMaps - Plataforma para Organizaciones Deportivas"
        description="Software integral para federaciones y ligas deportivas. Gestiona clubes, organiza torneos, registra atletas y digitaliza toda tu operación con SportMaps."
        keywords="federaciones deportivas, ligas deportivas, gestión de torneos, software federaciones, organización deportiva"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-accent/10 via-transparent to-sport-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-accent/10 border border-sport-accent/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-sport-accent" />
              <span className="text-sm text-sport-accent font-medium">Para Federaciones y Ligas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digitaliza tu <span className="text-sport-primary">Federación</span> Deportiva
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Plataforma integral para gestionar clubes, organizar torneos y administrar 
              el ecosistema deportivo de tu región.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
                Solicitar Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Conocer Más
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-sport-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Herramientas para <span className="text-sport-primary">Grandes Organizaciones</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para administrar tu federación o liga deportiva de manera eficiente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-sport-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-sport-primary/20 to-sport-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-20 h-20 text-sport-primary mx-auto mb-4" />
                  <p className="text-xl font-bold">Conecta Todo tu Ecosistema</p>
                  <p className="text-muted-foreground mt-2">Clubes, atletas y competencias en una sola plataforma</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La Solución Completa para <span className="text-sport-primary">Organizaciones Deportivas</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Reducción del 80% en trabajo administrativo",
                  "Inscripciones y pagos 100% digitales",
                  "Comunicación directa con todos los clubes",
                  "Generación automática de fixtures y resultados",
                  "Reportes para entidades gubernamentales",
                  "Soporte dedicado para federaciones"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sport-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-accent/10 to-sport-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Moderniza tu Federación Hoy
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Agenda una demostración personalizada con nuestro equipo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90" onClick={() => setIsDemoOpen(true)}>
              Comenzar prueba gratuita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsDemoOpen(true)}>
              Solicitar demo personalizado
            </Button>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="federaciones" />
    </div>
  );
};

export default Federaciones;
