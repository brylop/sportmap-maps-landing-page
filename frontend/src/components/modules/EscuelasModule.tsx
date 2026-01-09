import { motion } from "framer-motion";
import { GraduationCap, Search, Calendar, Shield, Star, MapPin, Users, TrendingUp, Award, Trophy, Dumbbell, Bike, Waves, Target, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EscuelasModuleProps {
  onContactClick?: () => void;
}

export function EscuelasModule({ onContactClick }: EscuelasModuleProps) {
  const features = [
    { icon: Search, title: "Búsqueda Inteligente", description: "Encuentra la escuela perfecta con filtros por ubicación, disciplina, nivel y presupuesto.", badges: ["Geolocalización", "Comparar precios"], color: "sport-primary", stats: "1,200+ escuelas" },
    { icon: Calendar, title: "Reservas Seguras", description: "Sistema de reservas en tiempo real con pago protegido y cancelación flexible.", badges: ["Pago seguro", "Reembolso"], color: "sport-accent", stats: "Tiempo real" },
    { icon: Shield, title: "Calidad Garantizada", description: "Todas las escuelas están verificadas con documentación completa y seguros vigentes.", badges: ["Certificados", "Seguros"], color: "sport-primary", stats: "100% verificado" }
  ];

  const stats = [
    { icon: GraduationCap, value: "1,200+", label: "Escuelas Verificadas" },
    { icon: Users, value: "50K+", label: "Estudiantes Activos" },
    { icon: Star, value: "4.9", label: "Rating Promedio" }
  ];

  const sports = [
    { icon: Trophy, name: "Fútbol", schools: "320+", color: "sport-primary" },
    { icon: Dumbbell, name: "Gimnasios", schools: "280+", color: "sport-accent" },
    { icon: Bike, name: "Ciclismo", schools: "150+", color: "sport-primary" },
    { icon: Waves, name: "Natación", schools: "210+", color: "sport-accent" },
    { icon: Target, name: "Tenis", schools: "180+", color: "sport-primary" },
    { icon: Heart, name: "Yoga", schools: "160+", color: "sport-accent" }
  ];

  const steps = [
    { number: "01", title: "Explora", description: "Busca escuelas por ubicación, disciplina y presupuesto", icon: Search },
    { number: "02", title: "Compara", description: "Revisa perfiles, horarios y opiniones de otros estudiantes", icon: Star },
    { number: "03", title: "Reserva", description: "Agenda tu clase de prueba con pago seguro", icon: Calendar },
    { number: "04", title: "Entrena", description: "Comienza tu viaje deportivo con entrenadores certificados", icon: Trophy }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Hero Card - GREEN border for action/schools */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="card-premium p-8 sm:p-12 mb-8 relative overflow-hidden border-l-4 border-l-sport-primary">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-primary/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-primary to-sport-primary/70 flex items-center justify-center glow-primary" whileHover={{ scale: 1.1, rotate: 10 }}>
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Escuelas & Entrenadores</h2>
                <Badge className="bg-sport-primary text-white border-0">Verificados</Badge>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground">Conecta con las mejores escuelas deportivas de Colombia. Búsqueda avanzada, reservas garantizadas y entrenadores certificados.</p>
            </div>
          </div>
          {/* Stats - GREEN for schools */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }} whileHover={{ scale: 1.05 }} className="glass-effect rounded-xl p-4 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-sport-primary" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} whileHover={{ y: -8 }} className="card-premium p-8">
            <motion.div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${feature.color === 'sport-accent' ? 'bg-sport-accent glow-accent' : 'bg-sport-primary glow-primary'}`} whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }}>
              <feature.icon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
            <div className="text-2xl font-bold text-sport-primary mb-2">{feature.stats}</div>
            <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.badges.map((badge, idx) => (
                <Badge key={idx} variant="outline" className="border-sport-primary/40 text-sport-primary">{badge}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Disciplinas Deportivas */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="card-premium p-8 sm:p-12 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-3">Disciplinas Disponibles</h3>
          <p className="text-muted-foreground">Encuentra tu pasión entre más de 50 disciplinas deportivas</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((sport, index) => (
            <motion.div key={sport.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass-effect rounded-2xl p-6 text-center cursor-pointer border border-white/10">
              <motion.div className={`w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center ${sport.color === 'sport-accent' ? 'bg-sport-accent' : 'bg-sport-primary'}`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <sport.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h4 className="text-foreground font-bold mb-1">{sport.name}</h4>
              <p className="text-sport-primary text-sm font-semibold">{sport.schools}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Proceso de Inscripción */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-effect rounded-3xl p-8 sm:p-12 mb-12 border border-sport-primary/20">
        <div className="text-center mb-10">
          <Badge className="bg-sport-primary text-white border-0 mb-4">Proceso Simple</Badge>
          <h3 className="text-3xl font-bold text-foreground mb-3">Cómo Funciona</h3>
          <p className="text-muted-foreground">Tu camino hacia el éxito deportivo en 4 simples pasos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
              <Card className="p-6 h-full border-2 border-sport-primary/20 hover:border-sport-primary/40 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold text-sport-primary/30">{step.number}</div>
                  <div className="w-12 h-12 rounded-xl bg-sport-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-sport-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Final - Green to Orange gradient */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-r from-sport-primary to-sport-accent rounded-3xl p-8 sm:p-12 text-center glow-primary">
        <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-white mb-3">¿Listo para Comenzar?</h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">Únete a miles de deportistas que ya están alcanzando sus metas. Primera clase de prueba gratis.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-white text-sport-primary hover:bg-white/90 shadow-lg font-bold" onClick={onContactClick}>
            <Search className="w-5 h-5 mr-2" />
            Comenzar Prueba Gratis
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" onClick={onContactClick}>
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Contactar
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
