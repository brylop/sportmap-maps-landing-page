import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Calendar, TrendingUp, Trophy, 
  ClipboardList, Video, BarChart3, Star,
  CheckCircle, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Entrenadores = () => {
  const features = [
    {
      icon: Users,
      title: "Gestión de Atletas",
      description: "Administra todos tus deportistas en un solo lugar con perfiles completos y seguimiento individual."
    },
    {
      icon: Calendar,
      title: "Planificación de Entrenamientos",
      description: "Crea y programa sesiones de entrenamiento personalizadas con calendario integrado."
    },
    {
      icon: TrendingUp,
      title: "Análisis de Rendimiento",
      description: "Métricas detalladas y reportes de progreso para optimizar el desarrollo de cada atleta."
    },
    {
      icon: Video,
      title: "Biblioteca de Ejercicios",
      description: "Accede a una amplia colección de ejercicios con videos demostrativos y guías técnicas."
    },
    {
      icon: ClipboardList,
      title: "Planes de Entrenamiento",
      description: "Diseña programas de entrenamiento estructurados con periodización y objetivos claros."
    },
    {
      icon: BarChart3,
      title: "Dashboard Profesional",
      description: "Visualiza el progreso de tu grupo con estadísticas en tiempo real y KPIs relevantes."
    }
  ];

  const benefits = [
    "Ahorra hasta 10 horas semanales en gestión administrativa",
    "Mejora la comunicación con atletas y padres",
    "Acceso desde cualquier dispositivo, en cualquier lugar",
    "Reportes automáticos de rendimiento y asistencia",
    "Integración con calendario y recordatorios",
    "Soporte técnico especializado 24/7"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Entrenadores Pro | SportMaps - Herramientas para Entrenadores Deportivos"
        description="Plataforma profesional para entrenadores deportivos. Gestiona atletas, planifica entrenamientos y analiza el rendimiento de tus deportistas con SportMaps."
        keywords="entrenadores deportivos, gestión de atletas, planificación entrenamientos, software entrenadores, app para coaches"
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
              <span className="text-sm text-sport-primary font-medium">Para Entrenadores Profesionales</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lleva tu <span className="text-sport-primary">Coaching</span> al Siguiente Nivel
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Herramientas profesionales para entrenadores que buscan optimizar su trabajo y 
              maximizar el potencial de sus atletas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
                Comenzar Prueba Gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>
          </motion.div>
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
              Herramientas diseñadas específicamente para las necesidades de entrenadores deportivos profesionales.
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
                ¿Por qué los <span className="text-sport-primary">Mejores Entrenadores</span> Eligen SportMaps?
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
                  <Star className="w-16 h-16 text-sport-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold">+500 Entrenadores</p>
                  <p className="text-muted-foreground">Ya confían en SportMaps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Únete a la Comunidad de Entrenadores Pro
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Comienza tu prueba gratuita de 14 días sin compromiso.
          </p>
          <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
            Empezar Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Entrenadores;
