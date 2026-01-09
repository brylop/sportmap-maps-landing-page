import { useState } from "react";
import { 
  ArrowLeft, 
  Users, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  Award, 
  CreditCard,
  CheckCircle2,
  Play,
  Clock,
  TrendingUp,
  Shield,
  Smartphone,
  Star,
  ArrowRight,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { motion } from "framer-motion";
import { RolePricingCard, rolePricingContent } from "@/components/common/cards";

const painPoints = [
  {
    problem: "Cobras en efectivo y pierdes el control",
    solution: "Cobros automáticos con recordatorios",
    icon: CreditCard
  },
  {
    problem: "Excel interminable de estudiantes",
    solution: "Dashboard completo con un click",
    icon: Users
  },
  {
    problem: "WhatsApp saturado de mensajes",
    solution: "App exclusiva para padres",
    icon: MessageSquare
  },
  {
    problem: "No sabes qué alumnos están al día",
    solution: "Reportes de cartera en tiempo real",
    icon: BarChart3
  }
];

const features = [
  {
    title: "Gestión de Estudiantes",
    description: "Perfiles completos, asistencia automática, historial de pagos y evaluaciones de progreso.",
    icon: Users,
    color: "text-sport-primary"
  },
  {
    title: "Cobros Automáticos",
    description: "Facturación mensual, recordatorios de pago, múltiples métodos y seguimiento de cartera.",
    icon: CreditCard,
    color: "text-sport-success"
  },
  {
    title: "Reservas Online 24/7",
    description: "Calendario inteligente, gestión de cupos, notificaciones automáticas y lista de espera.",
    icon: Calendar,
    color: "text-sport-accent"
  },
  {
    title: "App para Padres",
    description: "Comunicación directa, notificaciones push, reportes de progreso y pagos desde el celular.",
    icon: Smartphone,
    color: "text-sport-info"
  },
  {
    title: "Analytics Avanzados",
    description: "Métricas de retención, ingresos proyectados, análisis financiero y reportes personalizados.",
    icon: TrendingUp,
    color: "text-sport-highlight"
  },
  {
    title: "Certificaciones Digitales",
    description: "Genera diplomas y certificados automáticamente con verificación blockchain.",
    icon: Award,
    color: "text-sport-warning"
  }
];

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Director, Academia Fútbol Elite",
    quote: "Pasamos de cobrar en efectivo a tener todo automatizado. Redujimos la cartera morosa en un 60%.",
    rating: 5
  },
  {
    name: "María Fernanda López",
    role: "Fundadora, Escuela de Natación Delfines",
    quote: "La app para padres cambió todo. Ahora los papás ven el progreso de sus hijos y pagan a tiempo.",
    rating: 5
  },
  {
    name: "Andrés Rodríguez",
    role: "Gerente, Club Deportivo Santa Fe",
    quote: "Gestionamos 500+ estudiantes sin aumentar personal administrativo. El ROI fue inmediato.",
    rating: 5
  }
];


export default function Escuelas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Gestión para Academias Deportivas | SportMaps"
        description="Software de gestión integral para escuelas y academias deportivas. Automatiza cobros, gestiona estudiantes, comunícate con padres. Prueba gratis 14 días."
        url="https://sportmaps.co/escuelas"
        canonical="https://sportmaps.co/escuelas"
        keywords="software academias deportivas, gestión escuelas deportivas, cobros automáticos academias, app padres deportes, administración deportiva Colombia"
      />
      <TechBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-sport-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-bold text-sport-primary">SportMaps para Escuelas</h1>
              <p className="text-xs text-sport-text-secondary hidden sm:block">Gestión integral para tu academia</p>
            </div>
          </div>
          <Button onClick={openModal} className="bg-sport-primary hover:bg-sport-primary/90">
            Ver Demo
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section - Problem Focused */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
                <Zap className="w-3 h-3 mr-1" />
                +500 academias ya digitalizadas
              </Badge>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Deja de perseguir pagos. </span>
                <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
                  Automatiza tu academia.
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto mb-8">
                El software que gestiona estudiantes, cobra automáticamente y mantiene a los padres 
                informados. Todo desde una sola plataforma.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={openModal}
                  className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-primary text-white px-8 py-6 text-lg font-bold rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo de 15 min
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openModal}
                  className="border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Probar Gratis 14 días
                </Button>
              </div>

              <p className="text-sm text-sport-text-secondary mt-4 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Sin tarjeta de crédito • Configuración en 5 minutos
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="bg-sport-surface/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              ¿Te suena familiar?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-sport-border bg-sport-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-6 h-6 text-sport-primary" />
                        </div>
                        <div>
                          <p className="text-sport-text-secondary line-through mb-2">
                            ❌ {point.problem}
                          </p>
                          <p className="text-foreground font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-sport-success" />
                            {point.solution}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Reducción de cartera morosa", value: "60%", icon: TrendingUp },
              { label: "Tiempo ahorrado en admin", value: "15h/sem", icon: Clock },
              { label: "Aumento en retención", value: "+40%", icon: Users },
              { label: "Satisfacción de padres", value: "98%", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-sport-card border border-sport-border"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-sport-primary" />
                <div className="text-3xl md:text-4xl font-bold text-sport-primary mb-1">{stat.value}</div>
                <div className="text-sm text-sport-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Todo lo que necesitas para crecer
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Herramientas profesionales diseñadas específicamente para academias deportivas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg hover:border-sport-primary/30 transition-all">
                    <CardHeader>
                      <feature.icon className={`w-10 h-10 ${feature.color} mb-2`} />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sport-text-secondary">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-sport-border bg-sport-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-sport-warning text-sport-warning" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-sport-text-secondary">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 md:py-16 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Plan para <span className="text-sport-primary">Escuelas</span>
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                El software que paga su propia inversión desde el primer mes.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <RolePricingCard 
                data={rolePricingContent.escuelas} 
                onCTA={openModal} 
              />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 rounded-3xl p-8 md:p-12 border border-sport-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para transformar tu academia?
            </h3>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Únete a +500 academias que ya automatizaron su gestión y aumentaron sus ingresos con SportMaps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openModal}
                className="bg-gradient-to-r from-sport-primary to-sport-accent text-white px-8 py-6 text-lg font-bold rounded-full hover:shadow-glow-primary"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo Personalizada
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={openModal}
                className="border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-8 py-6 text-lg rounded-full"
              >
                Hablar con un Asesor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isModalOpen} onClose={closeModal} source="escuelas" />
    </div>
  );
}
