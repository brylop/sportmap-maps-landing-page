import { motion } from "framer-motion";
import { GraduationCap, Search, Calendar, Shield, Star, MapPin, Users, TrendingUp, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function EscuelasModule() {
  const features = [
    { icon: Search, title: "Búsqueda Inteligente", description: "Encuentra la escuela perfecta con filtros por ubicación, disciplina, nivel y presupuesto.", badges: ["Geolocalización", "Comparar precios"], color: "sport-primary", stats: "1,200+ escuelas" },
    { icon: Calendar, title: "Reservas Seguras", description: "Sistema de reservas en tiempo real con pago protegido y cancelación flexible.", badges: ["Pago seguro", "Reembolso"], color: "sport-accent", stats: "Tiempo real" },
    { icon: Shield, title: "Calidad Garantizada", description: "Todas las escuelas están verificadas con documentación completa y seguros vigentes.", badges: ["Certificados", "Seguros"], color: "sport-highlight", stats: "100% verificado" }
  ];

  const stats = [
    { icon: GraduationCap, value: "1,200+", label: "Escuelas Verificadas" },
    { icon: Users, value: "50K+", label: "Estudiantes Activos" },
    { icon: Star, value: "4.9", label: "Rating Promedio" }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-sport-card rounded-3xl p-8 sm:p-12 mb-8 shadow-elegant relative overflow-hidden border-l-4 border-l-sport-primary">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-primary/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-primary to-sport-primary/70 flex items-center justify-center shadow-glow-primary" whileHover={{ scale: 1.1, rotate: 10 }}>
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-sport-text">Escuelas & Entrenadores</h2>
                <Badge className="bg-sport-primary text-white">Verificados</Badge>
              </div>
              <p className="text-base sm:text-lg text-sport-text/80">Conecta con las mejores escuelas deportivas de Colombia. Búsqueda avanzada, reservas garantizadas y entrenadores certificados.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-sport-background/60 backdrop-blur-sm rounded-xl p-4 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-sport-primary" />
                <div className="text-2xl font-bold text-sport-text">{stat.value}</div>
                <div className="text-xs text-sport-text/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} whileHover={{ y: -8 }} className="bg-sport-card rounded-3xl p-8 shadow-elegant hover:shadow-hover">
            <motion.div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, hsl(var(--${feature.color})), hsl(var(--${feature.color})) 70%)` }} whileHover={{ scale: 1.1, rotate: 360 }} transition={{ duration: 0.6 }}>
              <feature.icon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-sport-text mb-2">{feature.title}</h3>
            <div className="text-2xl font-bold text-sport-primary mb-2">{feature.stats}</div>
            <p className="text-sport-text/70 text-sm mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.badges.map((badge, idx) => (
                <Badge key={idx} variant="outline" className="border-sport-primary/30 text-sport-primary">{badge}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
