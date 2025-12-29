import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, Heart, Lightbulb, Users,
  Globe, Rocket, Award, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const SobreNosotros = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Democratizar el acceso a herramientas tecnológicas de élite para todo el ecosistema deportivo latinoamericano."
    },
    {
      icon: Lightbulb,
      title: "Visión",
      description: "Ser la plataforma líder que conecta y potencia a atletas, entrenadores, escuelas y organizaciones deportivas en la región."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Innovación, compromiso, excelencia y pasión por el deporte guían cada decisión que tomamos."
    }
  ];

  const milestones = [
    { year: "2023", title: "Fundación", description: "SportMaps nace en Bogotá con la visión de transformar el deporte" },
    { year: "2024", title: "Crecimiento", description: "Expandimos operaciones a 5 países de Latinoamérica" },
    { year: "2025", title: "Consolidación", description: "Más de 100,000 usuarios activos en la plataforma" }
  ];

  const team = [
    { name: "Brayan López", role: "Chief Executive Officer (CEO)", badge: "Co-Founder" },
    { name: "Andrés Pardo", role: "Chief Technology Officer (CTO)", badge: "Co-Founder" },
    { name: "Julián Gómez", role: "Chief Growth Officer (CGO)", badge: "Co-Founder" },
    { name: "Maleja Duarte", role: "Marketing Director", badge: "Co-Founder" },
    { name: "Sebastian Rodríguez", role: "Chief Commercial Officer (CCO)", badge: "" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sobre Nosotros | SportMaps - Conoce Nuestra Historia"
        description="Conoce la historia de SportMaps, nuestra misión de transformar el ecosistema deportivo latinoamericano y el equipo detrás de la plataforma."
        keywords="sobre sportmaps, equipo sportmaps, historia sportmaps, startup deportiva, tecnología deportiva colombia"
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
              <Award className="w-4 h-4 text-sport-primary" />
              <span className="text-sm text-sport-primary font-medium">Nuestra Historia</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Co-Creando la <span className="text-sport-primary">Realidad Tecnológica</span> del Deporte
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Somos una startup colombiana con la misión de conectar y potenciar 
              a todo el ecosistema deportivo de Latinoamérica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-sport-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestra <span className="text-sport-primary">Trayectoria</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un camino de innovación y crecimiento continuo.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-sport-primary flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro <span className="text-sport-primary">Equipo</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profesionales apasionados por la tecnología y el deporte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 text-center hover:border-sport-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sport-primary to-sport-accent flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-sport-primary font-medium mb-1">{member.role}</p>
                    {member.badge && (
                      <span className="inline-block text-xs bg-sport-primary/10 text-sport-primary px-2 py-1 rounded-full">
                        {member.badge}
                      </span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100K+", label: "Usuarios Activos" },
              { value: "5", label: "Países" },
              { value: "500+", label: "Organizaciones" },
              { value: "24/7", label: "Soporte" }
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
            ¿Quieres Ser Parte del Cambio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Únete a la revolución tecnológica del deporte latinoamericano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
              Trabaja con Nosotros
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default SobreNosotros;
