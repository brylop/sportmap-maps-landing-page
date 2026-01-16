import { useState } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Link2, 
  MapPin, 
  Users, 
  CreditCard,
  CheckCircle2,
  Play,
  Clock,
  Shield,
  Smartphone,
  Star,
  Zap,
  Share2,
  QrCode,
  ClipboardList,
  Globe,
  MessageSquare
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
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";

const painPoints = [
  {
    problem: "Respondes las mismas preguntas por WhatsApp",
    solution: "Página pública con toda la info del evento",
    icon: MessageSquare
  },
  {
    problem: "Excel interminable de inscritos",
    solution: "Panel de gestión con inscripciones automáticas",
    icon: ClipboardList
  },
  {
    problem: "Persigues pagos y comprobantes",
    solution: "Validación de pagos integrada sin comisión",
    icon: CreditCard
  },
  {
    problem: "Nadie encuentra tu evento",
    solution: "Apareces en el mapa de SportMaps 24/7",
    icon: MapPin
  }
];

const features = [
  {
    title: "Crea Eventos en 1 Minuto",
    description: "Nombre, fecha, ubicación, cupos y precio. Sin formularios eternos, sin complicaciones.",
    icon: Calendar,
    color: "text-sport-primary"
  },
  {
    title: "Página Pública Automática",
    description: "Cada evento genera una página profesional que funciona en móvil sin login requerido.",
    icon: Globe,
    color: "text-sport-success"
  },
  {
    title: "Link Único Compartible",
    description: "Un solo link para WhatsApp, Instagram, email. Reemplaza flyers, PDFs y mensajes largos.",
    icon: Link2,
    color: "text-sport-accent"
  },
  {
    title: "Mapa como Descubrimiento",
    description: "Tu evento aparece como pin en el mapa. Nuevos participantes te encuentran sin promoción.",
    icon: MapPin,
    color: "text-sport-info"
  },
  {
    title: "Inscripciones Sin Fricción",
    description: "Nombre, WhatsApp, comprobante opcional. Cero apps, cero registros complejos.",
    icon: Users,
    color: "text-sport-highlight"
  },
  {
    title: "Pagos Sin Comisión",
    description: "SportMaps NO cobra comisión. Usa transferencia, efectivo o pasarela opcional.",
    icon: CreditCard,
    color: "text-sport-warning"
  }
];

const eventTypes = [
  { name: "Torneos", emoji: "🏆" },
  { name: "Festivales", emoji: "🎉" },
  { name: "Showcases", emoji: "✨" },
  { name: "Clases Abiertas", emoji: "📚" },
  { name: "Campeonatos", emoji: "🥇" },
  { name: "Competencias", emoji: "🎯" }
];

const testimonials = [
  {
    name: "Laura Gómez",
    role: "Directora, Festival Cheer Colombia",
    quote: "Dejamos de responder 500 mensajes con la misma información. Ahora todos van al link y se inscriben solos.",
    rating: 5
  },
  {
    name: "Ricardo Mendoza",
    role: "Organizador, Copa Natación Junior",
    quote: "El mapa nos trajo participantes de ciudades que ni habíamos promocionado. Descubrimiento orgánico real.",
    rating: 5
  },
  {
    name: "Patricia Ruiz",
    role: "Academia de Gimnasia Artística",
    quote: "Sin comisiones significa que todo el dinero va a nuestro evento. Simple y directo como debe ser.",
    rating: 5
  }
];

const differentiators = [
  { text: "Mapa como motor, no adorno", icon: MapPin },
  { text: "Link > App", icon: Link2 },
  { text: "Sin comisión", icon: CreditCard },
  { text: "Mobile first", icon: Smartphone },
  { text: "Funciona para cualquier deporte", icon: Star }
];

export default function Eventos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Organiza Eventos Deportivos Sin Caos | SportMaps"
        description="Crea eventos deportivos, comparte un link único, recibe inscripciones automáticas y aparece en el mapa. Sin comisiones, sin WhatsApp interminable."
        url="https://sportmaps.co/eventos"
        canonical="https://sportmaps.co/eventos"
        keywords="organizar eventos deportivos, inscripciones torneos, gestión eventos deportivos, festivales deportivos Colombia, campeonatos deportivos"
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
              <h1 className="text-lg font-bold text-sport-primary">SportMaps para Eventos</h1>
              <p className="text-xs text-sport-text-secondary hidden sm:block">Organiza sin organizar personas</p>
            </div>
          </div>
          <Button onClick={openModal} className="bg-sport-primary hover:bg-sport-primary/90">
            Crear Evento
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-sport-accent/10 text-sport-accent border-sport-accent/30">
                <Calendar className="w-3 h-3 mr-1" />
                Nuevo módulo de eventos
              </Badge>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Organiza eventos. </span>
                <span className="bg-gradient-to-r from-sport-accent to-sport-primary bg-clip-text text-transparent">
                  No mensajes de WhatsApp.
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto mb-6">
                Crea un evento en 1 minuto, comparte un link único, recibe inscripciones automáticas 
                y aparece en el mapa de SportMaps. <strong>Sin comisiones.</strong>
              </p>

              {/* Frase guía */}
              <p className="text-md text-sport-primary font-medium italic mb-8">
                "SportMaps ayuda a organizar eventos sin organizar personas."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={openModal}
                  className="bg-gradient-to-r from-sport-accent to-sport-primary hover:shadow-glow-accent text-white px-8 py-6 text-lg font-bold rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Crear Mi Primer Evento
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={openModal}
                  className="border-sport-accent text-sport-accent hover:bg-sport-accent hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Ver Demo de 5 min
                </Button>
              </div>

              <p className="text-sm text-sport-text-secondary mt-4 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Sin comisiones • Evento listo en 1 minuto
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-8 container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm border-sport-border bg-sport-card">
                  <span className="mr-2">{type.emoji}</span>
                  {type.name}
                </Badge>
              </motion.div>
            ))}
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
                        <div className="w-12 h-12 rounded-xl bg-sport-accent/10 flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-6 h-6 text-sport-accent" />
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

        {/* How It Works */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Así de simple funciona
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Crea tu evento", desc: "Nombre, fecha, lugar, cupos, precio", icon: Calendar },
              { step: "2", title: "Comparte el link", desc: "WhatsApp, Instagram, email", icon: Share2 },
              { step: "3", title: "Recibe inscritos", desc: "Sin Excel, sin mensajes", icon: Users },
              { step: "4", title: "Apareces en el mapa", desc: "Nuevos participantes te encuentran", icon: MapPin }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sport-accent to-sport-primary flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 mx-auto mb-3 text-sport-accent" />
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-sport-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We Are NOT */}
        <section className="bg-sport-surface/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                ¿Qué NO es este módulo?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "❌ No es un ERP",
                  "❌ No gestiona ligas profesionales",
                  "❌ No es un sistema federativo",
                  "❌ No es una app pesada",
                  "❌ No cobra comisión",
                  "❌ No reemplaza tu sistema actual"
                ].map((item, index) => (
                  <div key={index} className="p-3 bg-sport-card rounded-lg border border-sport-border text-sm text-sport-text-secondary">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sport-primary font-medium">
                👉 Es una capa simple de conexión y orden.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Funcionalidad completa
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Todo lo que necesitas para organizar eventos sin caos
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
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg hover:border-sport-accent/30 transition-all">
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

        {/* Differentiators */}
        <section className="py-12 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-sport-card rounded-full border border-sport-primary/30"
                >
                  <diff.icon className="w-4 h-4 text-sport-primary" />
                  <span className="text-sm font-medium text-foreground">{diff.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Organizadores que ya lo usan
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
        <RolePricingSection 
          config={rolePricingConfigs.eventos} 
          onCTA={openModal} 
        />

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sport-accent/10 to-sport-primary/10 rounded-3xl p-8 md:p-12 border border-sport-accent/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para organizar sin caos?
            </h3>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Crea tu primer evento en 1 minuto. Sin comisiones, sin mensajes repetidos, sin Excel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openModal}
                className="bg-gradient-to-r from-sport-accent to-sport-primary text-white px-8 py-6 text-lg font-bold rounded-full hover:shadow-glow-accent"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Crear Mi Evento Ahora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={openModal}
                className="border-sport-accent text-sport-accent hover:bg-sport-accent hover:text-white px-8 py-6 text-lg rounded-full"
              >
                Hablar con un Asesor
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal isOpen={isModalOpen} onClose={closeModal} source="eventos" />
    </div>
  );
}
