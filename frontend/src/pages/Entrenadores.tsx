import { useState } from "react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Calendar, TrendingUp, Trophy, 
  ClipboardList, BookOpen, BarChart3, School, UserCheck,
  CheckCircle, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";

const Entrenadores = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const features = [
    {
      icon: Users,
      title: "Gestión de Atletas",
      description: "Tus deportistas o clientes en un solo lugar, con su ficha y seguimiento individual."
    },
    {
      icon: Calendar,
      title: "Planificación de Entrenamientos",
      description: "Crea y programa sesiones de entrenamiento con periodización por mesociclos."
    },
    {
      icon: TrendingUp,
      title: "Reportes de Progreso",
      description: "Reportes del entrenador, reporte post-entreno del equipo e informe mensual del atleta."
    },
    {
      icon: BookOpen,
      title: "Catálogo de Ejercicios",
      description: "Catálogo de ejercicios para armar rutinas y planes de sesión."
    },
    {
      icon: ClipboardList,
      title: "Asistencia con QR",
      description: "Toma asistencia escaneando el QR del deportista o supervisando la lista del grupo."
    },
    {
      icon: BarChart3,
      title: "Pizarra Táctica",
      description: "Jugadas, alineaciones y ejercicios en la pizarra táctica (fútbol hoy; más deportes en camino)."
    }
  ];

  const benefits = [
    "Menos papeleo: asistencia, rutinas y reportes en un solo lugar",
    "Acceso desde el celular o el computador",
    "Reportes de asistencia y progreso por deportista",
    "Calendario de sesiones de entrenamiento",
    "Soporte por WhatsApp",
    "WhatsApp IA para entrenadores: próximamente"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Entrenadores Pro | SportMaps - Herramientas para Entrenadores Deportivos"
        description="Para entrenadores deportivos: gratis dentro del plan de tu academia, o Coach Pro a $59.000/mes si eres independiente. Sesiones, rutinas, asistencia y reportes."
        keywords="entrenadores deportivos, gestión de atletas, planificación entrenamientos, software entrenadores, app para coaches"
        url="https://sportmaps.co/entrenadores"
        canonical="https://sportmaps.co/entrenadores"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/10 via-transparent to-sport-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-primary/10 border border-sport-primary/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-sport-primary" />
              <span className="text-sm text-sport-primary font-medium">Para entrenadores de escuela e independientes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lleva tu <span className="text-sport-primary">Coaching</span> al Siguiente Nivel
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Si entrenas en una academia, vas gratis dentro del plan de tu escuela. Si eres 
              independiente, Coach Pro cuesta $59.000/mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sport-primary hover:bg-sport-primary/90"
                onClick={() => setIsDemoOpen(true)}
              >
                Solicitar demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsDemoOpen(true)}
              >
                Ver Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dos caminos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="h-full border-sport-primary/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                  <School className="w-6 h-6 text-sport-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entrenador de escuela</h3>
                <p className="text-2xl font-bold text-sport-accent mb-2">Gratis</p>
                <p className="text-muted-foreground">
                  Gratis dentro del plan de tu academia. La escuela te invita y entras con tu rol de entrenador.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full border-sport-accent/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sport-accent/10 flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-sport-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Entrenador independiente</h3>
                <p className="text-2xl font-bold text-sport-accent mb-2">Coach Pro · $59.000/mes</p>
                <p className="text-muted-foreground">
                  Tus clientes con ficha y progreso, rutinas, agenda de sesiones, cobros y perfil público.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Todo lo que Necesitas para <span className="text-sport-primary">Entrenar Mejor</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Herramientas pensadas para el día a día del entrenador.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué <span className="text-sport-primary">SportMaps</span> para entrenar?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
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
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-sport-primary/20 to-sport-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart3 className="w-16 h-16 text-sport-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold">Sesiones, asistencia y reportes</p>
                  <p className="text-muted-foreground">En la misma app que usa tu escuela</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <RolePricingSection 
        config={rolePricingConfigs.entrenadores} 
        onCTA={() => setIsDemoOpen(true)} 
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Entrenas en una escuela o por tu cuenta?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Escríbenos y te mostramos el camino que te sirve: gratis con tu academia o Coach Pro a $59.000/mes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90" onClick={() => setIsDemoOpen(true)}>
              Solicitar demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} source="entrenadores" />
    </div>
  );
};

export default Entrenadores;
