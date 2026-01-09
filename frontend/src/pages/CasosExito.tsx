import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Quote, TrendingUp, Users, Trophy,
  Star, ArrowRight, Building2, School
} from "lucide-react";
import { motion } from "framer-motion";

const CasosExito = () => {
  const cases = [
    {
      icon: School,
      category: "Escuela Deportiva",
      name: "Academia Deportiva Elite",
      location: "Bogotá, Colombia",
      quote: "SportMaps transformó completamente nuestra gestión. Ahora administramos 500 estudiantes sin estrés.",
      stats: [
        { value: "+300%", label: "Crecimiento en inscripciones" },
        { value: "80%", label: "Menos tiempo administrativo" },
        { value: "95%", label: "Satisfacción de padres" }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      category: "Federación",
      name: "Federación Regional de Natación",
      location: "Medellín, Colombia",
      quote: "Digitalizamos todos nuestros torneos y la gestión de clubes. Los resultados hablan por sí solos.",
      stats: [
        { value: "50+", label: "Clubes afiliados" },
        { value: "1,200", label: "Atletas registrados" },
        { value: "20", label: "Torneos organizados" }
      ],
      color: "from-sport-primary to-sport-accent"
    },
    {
      icon: Users,
      category: "Entrenador",
      name: "Coach Carlos Martínez",
      location: "Cali, Colombia",
      quote: "La plataforma me permite dar seguimiento personalizado a cada atleta. Mi productividad se triplicó.",
      stats: [
        { value: "45", label: "Atletas gestionados" },
        { value: "10hrs", label: "Ahorradas por semana" },
        { value: "100%", label: "Digital" }
      ],
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const testimonials = [
    {
      quote: "La mejor decisión que tomamos fue implementar SportMaps. El ROI fue evidente desde el primer mes.",
      author: "María González",
      role: "Directora, Club Deportivo Los Andes"
    },
    {
      quote: "Ahora tenemos visibilidad completa de nuestras operaciones. Los reportes automáticos son increíbles.",
      author: "Roberto Pérez",
      role: "Presidente, Liga Municipal de Fútbol"
    },
    {
      quote: "La atención al cliente es excepcional. Siempre están disponibles para ayudarnos.",
      author: "Ana Rodríguez",
      role: "Administradora, Escuela de Tenis"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Casos de Éxito | SportMaps - Historias de Transformación Deportiva"
        description="Conoce las historias de éxito de escuelas, federaciones y entrenadores que transformaron su gestión deportiva con SportMaps."
        keywords="casos de éxito sportmaps, testimonios deportivos, transformación digital deporte, historias de éxito"
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
            <div className="inline-flex items-center gap-2 bg-sport-success/10 border border-sport-success/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-sport-success" />
              <span className="text-sm text-sport-success font-medium">Historias de Éxito</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Resultados que <span className="text-sport-primary">Hablan por Sí Solos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre cómo organizaciones deportivas en toda Latinoamérica 
              están transformando su gestión con SportMaps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                            <caseStudy.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{caseStudy.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{caseStudy.name}</h3>
                        <p className="text-muted-foreground mb-6">{caseStudy.location}</p>
                        <div className="flex items-start gap-3 mb-8">
                          <Quote className="w-8 h-8 text-sport-primary/30 shrink-0" />
                          <p className="text-lg italic">{caseStudy.quote}</p>
                        </div>
                        <Button className="bg-sport-primary hover:bg-sport-primary/90">
                          Leer Caso Completo
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                      <div className={`bg-gradient-to-br ${caseStudy.color} p-8 lg:p-12 flex items-center`}>
                        <div className="grid grid-cols-1 gap-6 w-full">
                          {caseStudy.stats.map((stat) => (
                            <div key={stat.label} className="text-center text-white">
                              <div className="text-4xl font-bold mb-1">{stat.value}</div>
                              <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                          ))}
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que Dicen <span className="text-sport-primary">Nuestros Usuarios</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testimonios reales de organizaciones que confían en SportMaps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-sport-primary text-sport-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Tasa de Satisfacción" },
              { value: "500+", label: "Organizaciones" },
              { value: "10M+", label: "Sesiones Gestionadas" },
              { value: "5", label: "Países" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-sport-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Escribir tu Historia de Éxito?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Únete a las organizaciones que ya transformaron su gestión deportiva.
          </p>
          <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
            Comenzar Ahora
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CasosExito;
