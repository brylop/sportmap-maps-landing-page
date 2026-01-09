import { useState } from "react";
import { 
  ArrowRight, 
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
  Zap,
  GraduationCap,
  ArrowDown,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const painPoints = [
  {
    problem: "Cobras en efectivo y pierdes el control",
    solution: "Cobros automáticos con recordatorios",
    icon: CreditCard,
    stat: "60%",
    statLabel: "menos mora"
  },
  {
    problem: "Excel interminable de estudiantes",
    solution: "Dashboard completo con un click",
    icon: Users,
    stat: "15h",
    statLabel: "ahorradas/semana"
  },
  {
    problem: "WhatsApp saturado de mensajes",
    solution: "App exclusiva para padres",
    icon: MessageSquare,
    stat: "98%",
    statLabel: "satisfacción"
  },
  {
    problem: "No sabes qué alumnos están al día",
    solution: "Reportes de cartera en tiempo real",
    icon: BarChart3,
    stat: "+40%",
    statLabel: "retención"
  }
];

const features = [
  {
    title: "Gestión de Estudiantes",
    description: "Perfiles completos, asistencia automática, historial de pagos y evaluaciones de progreso deportivo.",
    icon: Users,
    color: "text-sport-primary",
    bgColor: "bg-sport-primary/10"
  },
  {
    title: "Cobros Automáticos",
    description: "Facturación mensual recurrente, recordatorios de pago automáticos, múltiples métodos de pago.",
    icon: CreditCard,
    color: "text-sport-success",
    bgColor: "bg-sport-success/10"
  },
  {
    title: "Reservas Online 24/7",
    description: "Calendario inteligente, gestión de cupos, notificaciones automáticas y lista de espera.",
    icon: Calendar,
    color: "text-sport-accent",
    bgColor: "bg-sport-accent/10"
  },
  {
    title: "App para Padres",
    description: "Comunicación directa, notificaciones push, reportes de progreso y pagos desde el celular.",
    icon: Smartphone,
    color: "text-sport-info",
    bgColor: "bg-sport-info/10"
  },
  {
    title: "Analytics Avanzados",
    description: "Métricas de retención, ingresos proyectados, análisis de deserción y reportes personalizados.",
    icon: TrendingUp,
    color: "text-sport-highlight",
    bgColor: "bg-sport-highlight/10"
  },
  {
    title: "Certificaciones Digitales",
    description: "Genera diplomas y certificados automáticamente para tus estudiantes al completar niveles.",
    icon: Award,
    color: "text-sport-warning",
    bgColor: "bg-sport-warning/10"
  }
];

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Director, Academia Fútbol Elite",
    quote: "Pasamos de cobrar en efectivo a tener todo automatizado. Redujimos la cartera morosa en un 60% en solo 3 meses.",
    rating: 5,
    students: "180 estudiantes"
  },
  {
    name: "María Fernanda López",
    role: "Fundadora, Escuela de Natación Delfines",
    quote: "La app para padres cambió todo. Ahora los papás ven el progreso de sus hijos en tiempo real y pagan a tiempo.",
    rating: 5,
    students: "250 estudiantes"
  },
  {
    name: "Andrés Rodríguez",
    role: "Gerente, Club Deportivo Santa Fe",
    quote: "Gestionamos 500+ estudiantes sin aumentar personal administrativo. El ROI fue inmediato desde el primer mes.",
    rating: 5,
    students: "520 estudiantes"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "",
    description: "Para academias que empiezan",
    features: ["Perfil público verificado", "Hasta 10 alumnos", "Mensajes de contacto", "Soporte por email"],
    cta: "Empezar Gratis",
    popular: false,
    icon: Zap
  },
  {
    name: "Profesional",
    price: "$79.000",
    period: "/mes",
    description: "Para academias en crecimiento",
    features: ["Todo en Starter", "Cobros automáticos", "App para padres", "Alumnos ilimitados", "Tienda de uniformes", "Reportes avanzados"],
    cta: "Probar 14 días gratis",
    popular: true,
    icon: Star
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    description: "Para clubes y franquicias",
    features: ["Todo en Profesional", "Múltiples sedes", "API e integraciones", "Marca blanca", "Gerente dedicado", "SLA garantizado"],
    cta: "Contactar Ventas",
    popular: false,
    icon: Shield
  }
];

const howItWorks = [
  {
    step: "1",
    title: "Crea tu cuenta",
    description: "Regístrate en 2 minutos. Sin tarjeta de crédito."
  },
  {
    step: "2",
    title: "Configura tu academia",
    description: "Importa tus alumnos y configura tus servicios."
  },
  {
    step: "3",
    title: "Activa los cobros",
    description: "Conecta tu cuenta bancaria y automatiza pagos."
  },
  {
    step: "4",
    title: "¡Listo! Gestiona todo",
    description: "Dashboard completo para administrar tu academia."
  }
];

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="SportMaps | Software de Gestión para Academias Deportivas"
        description="El software #1 para escuelas y academias deportivas en Colombia. Automatiza cobros, gestiona estudiantes y comunícate con padres. Prueba gratis 14 días."
        url="https://sportmaps.co"
        canonical="https://sportmaps.co"
        keywords="software academias deportivas, gestión escuelas deportivas, cobros automáticos academias, app padres deportes, administración deportiva Colombia"
      />
      <TechBackground />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-sport-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sport-primary to-sport-accent rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-foreground">Sport</span>
                <span className="text-sport-primary">Maps</span>
              </h1>
              <p className="text-[10px] text-sport-text-secondary uppercase tracking-wider hidden sm:block">Academias Deportivas</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('beneficios')} className="text-sm text-sport-text-secondary hover:text-sport-primary transition-colors">Beneficios</button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-sm text-sport-text-secondary hover:text-sport-primary transition-colors">Cómo Funciona</button>
            <button onClick={() => scrollToSection('precios')} className="text-sm text-sport-text-secondary hover:text-sport-primary transition-colors">Precios</button>
            <button onClick={() => scrollToSection('testimonios')} className="text-sm text-sport-text-secondary hover:text-sport-primary transition-colors">Testimonios</button>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={openModal} className="bg-sport-primary hover:bg-sport-primary/90 text-white font-semibold px-4 py-2 rounded-full">
              <Play className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 bg-sport-primary/10 text-sport-primary border-sport-primary/30 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                +500 academias ya digitalizadas en Colombia
              </Badge>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Deja de perseguir pagos.</span>
                <br />
                <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
                  Automatiza tu academia.
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
                El software que gestiona estudiantes, cobra automáticamente y mantiene a los padres 
                informados. Todo desde una sola plataforma diseñada para escuelas deportivas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  onClick={openModal}
                  className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-xl hover:shadow-sport-primary/20 text-white px-8 py-7 text-lg font-bold rounded-full transition-all hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo de 15 min
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openModal}
                  className="border-2 border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-8 py-7 text-lg rounded-full transition-all"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Probar Gratis 14 días
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-sport-text-secondary">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sport-success" />
                  Sin tarjeta de crédito
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sport-success" />
                  Configuración en 5 minutos
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sport-success" />
                  Soporte en español
                </span>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12"
            >
              <button onClick={() => scrollToSection('problemas')} className="text-sport-text-secondary hover:text-sport-primary transition-colors">
                <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section id="problemas" className="bg-sport-surface/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Te suena <span className="text-sport-primary">familiar</span>?
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Si administras una academia deportiva, seguro enfrentas estos problemas todos los días.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-sport-border bg-sport-card hover:shadow-xl hover:shadow-sport-primary/5 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-sport-primary/10 flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-7 h-7 text-sport-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sport-text-secondary line-through mb-2 text-sm">
                            ❌ {point.problem}
                          </p>
                          <p className="text-foreground font-semibold flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-sport-success flex-shrink-0" />
                            {point.solution}
                          </p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-sport-primary">{point.stat}</span>
                            <span className="text-sm text-sport-text-secondary">{point.statLabel}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="beneficios" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sport-accent/10 text-sport-accent border-sport-accent/30">
                Funcionalidades
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Todo lo que necesitas para <span className="text-sport-primary">crecer</span>
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Herramientas profesionales diseñadas específicamente para academias deportivas en Colombia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg hover:border-sport-primary/30 transition-all duration-300 group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
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

        {/* How it Works */}
        <section id="como-funciona" className="bg-sport-surface/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
                Proceso Simple
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Comienza en <span className="text-sport-primary">minutos</span>, no días
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Configurar SportMaps es más fácil que crear una cuenta de email.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {howItWorks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-sport-primary to-sport-accent flex items-center justify-center text-white font-bold text-xl mb-4">
                        {item.step}
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-sport-text-secondary">{item.description}</p>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sport-primary/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sport-warning/10 text-sport-warning border-sport-warning/30">
                Casos de Éxito
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Lo que dicen <span className="text-sport-primary">nuestros clientes</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-sport-warning text-sport-warning" />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                      <div className="border-t border-sport-border pt-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-sport-text-secondary">{testimonial.role}</p>
                        <Badge variant="outline" className="mt-2 text-xs">{testimonial.students}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="bg-sport-surface/50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-sport-success/10 text-sport-success border-sport-success/30">
                Planes y Precios
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Elige el plan <span className="text-sport-primary">perfecto</span> para tu academia
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Sin costos ocultos. Sin sorpresas. Cancela cuando quieras.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-6 border transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-b from-sport-primary/10 to-transparent border-sport-primary shadow-xl shadow-sport-primary/10 scale-105' 
                      : 'bg-sport-card border-sport-border hover:border-sport-primary/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-xs font-bold">
                      MÁS POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                      <plan.icon className="w-6 h-6 text-sport-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{plan.name}</h4>
                    <p className="text-sm text-sport-text-secondary">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-sport-accent">{plan.price}</span>
                      <span className="text-sport-text-secondary">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-sport-success flex-shrink-0 mt-0.5" />
                        <span className="text-sport-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openModal}
                    className={`w-full py-5 font-bold rounded-xl transition-all hover:scale-[1.02] ${
                      plan.popular
                        ? 'bg-sport-primary hover:bg-sport-primary/90 text-white'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sport-text-secondary text-sm">
                ¿Tienes preguntas? <button onClick={openModal} className="text-sport-primary hover:underline font-medium">Habla con un asesor</button>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-sport-primary/10 via-sport-accent/10 to-sport-primary/5 rounded-3xl p-8 md:p-16 border border-sport-primary/20">
              <Badge className="mb-6 bg-sport-accent/10 text-sport-accent border-sport-accent/30">
                <Zap className="w-3 h-3 mr-1" />
                Oferta especial: 14 días gratis
              </Badge>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para <span className="text-sport-primary">transformar</span> tu academia?
              </h3>
              <p className="text-sport-text-secondary mb-8 max-w-2xl mx-auto text-lg">
                Únete a +500 academias que ya automatizaron su gestión y aumentaron sus ingresos con SportMaps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={openModal}
                  className="bg-gradient-to-r from-sport-primary to-sport-accent text-white px-10 py-7 text-lg font-bold rounded-full hover:shadow-xl hover:shadow-sport-primary/20 transition-all hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo Ahora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openModal}
                  className="border-2 border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-10 py-7 text-lg rounded-full transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hablar con Ventas
                </Button>
              </div>

              <p className="mt-8 text-sm text-sport-text-secondary">
                ¿Prefieres escribirnos? <a href="mailto:spoortmaps@gmail.com" className="text-sport-primary hover:underline">spoortmaps@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sport-surface border-t border-sport-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sport-primary to-sport-accent rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">
                    <span className="text-foreground">Sport</span>
                    <span className="text-sport-primary">Maps</span>
                  </span>
                </div>
              </div>
              <p className="text-sport-text-secondary text-sm mb-4 max-w-md">
                El software de gestión #1 para academias deportivas en Colombia. Automatiza cobros, gestiona estudiantes y comunícate con padres desde una sola plataforma.
              </p>
              <div className="flex items-center gap-4">
                <a href="mailto:spoortmaps@gmail.com" className="text-sport-text-secondary hover:text-sport-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://wa.me/573128463555" target="_blank" rel="noopener noreferrer" className="text-sport-text-secondary hover:text-sport-primary transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sobre-nosotros" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/casos-exito" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Casos de Éxito</Link></li>
                <li><Link to="/blog" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Blog</Link></li>
                <li><Link to="/ayuda" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Centro de Ayuda</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacidad" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Política de Privacidad</Link></li>
                <li><Link to="/terminos" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Términos y Condiciones</Link></li>
                <li><Link to="/tratamiento-datos" className="text-sport-text-secondary hover:text-sport-primary transition-colors">Tratamiento de Datos</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-sport-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-sport-text-secondary">
              © {new Date().getFullYear()} SportMaps. Todos los derechos reservados.
            </p>
            <p className="text-xs text-sport-text-secondary">
              Hecho con ❤️ en Colombia 🇨🇴
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <DemoRequestModal isOpen={isModalOpen} onClose={closeModal} source="landing-escuelas" />
    </div>
  );
}
