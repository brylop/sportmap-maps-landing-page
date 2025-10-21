import { motion } from "framer-motion";
import { Heart, Video, Activity, Lock, Calendar, Brain, Monitor, Stethoscope, Shield, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BienestarModule() {
  const services = [
    {
      icon: Video,
      title: "Consulta Virtual",
      description: "Conexión directa con especialistas certificados desde casa con videollamada HD y historial médico completo.",
      badges: ["HD Video", "Historial"],
      color: "sport-wellness",
      stats: "24/7 disponible"
    },
    {
      icon: Activity,
      title: "Monitoreo Inteligente",
      description: "Integración con dispositivos wearables para seguimiento de métricas vitales y prevención de lesiones.",
      badges: ["Wearables", "Alertas IA"],
      color: "sport-primary",
      stats: "Tiempo real"
    },
    {
      icon: Lock,
      title: "Máxima Seguridad",
      description: "Protección total de datos médicos con encriptación avanzada y cumplimiento normativo internacional.",
      badges: ["Encriptado", "HIPAA"],
      color: "sport-accent",
      stats: "100% seguro"
    }
  ];

  const specialties = [
    {
      icon: Heart,
      name: "Fisioterapia Deportiva",
      description: "Especialistas en recuperación y prevención de lesiones",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop",
      professionals: "45+ especialistas"
    },
    {
      icon: Brain,
      name: "Psicología del Rendimiento",
      description: "Optimiza tu mente para el máximo rendimiento",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      professionals: "30+ psicólogos"
    },
    {
      icon: Calendar,
      name: "Planes Personalizados",
      description: "Recuperación adaptada a tus necesidades",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      professionals: "Plan individual"
    },
    {
      icon: Stethoscope,
      name: "Análisis Biomecánico",
      description: "Evaluación avanzada de movimiento y técnica",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      professionals: "Tecnología 3D"
    }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Profesionales Certificados" },
    { icon: Heart, value: "10K+", label: "Consultas Realizadas" },
    { icon: Shield, value: "99.9%", label: "Confianza del Usuario" }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 sm:p-12 mb-8 shadow-elegant relative overflow-hidden border-l-4 border-l-sport-wellness"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-wellness/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sport-primary/10 rounded-full translate-y-28 -translate-x-28" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-wellness to-sport-wellness/70 flex items-center justify-center shadow-glow-primary"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-sport-text">Bienestar & Salud</h2>
                <Badge className="bg-sport-wellness text-white">Teleconsulta</Badge>
              </div>
              <p className="text-base sm:text-lg text-sport-text/80">
                Cuidado integral del deportista con profesionales certificados. Fisioterapia, psicología deportiva y monitoreo 24/7 para máximo rendimiento.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-sport-background/60 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-sport-wellness" />
                <div className="text-2xl font-bold text-sport-text">{stat.value}</div>
                <div className="text-xs text-sport-text/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-sport-card rounded-3xl p-8 shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            <motion.div 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}
              style={{ background: `linear-gradient(135deg, hsl(var(--${service.color})), hsl(var(--${service.color})) 70%)` }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <service.icon className="w-8 h-8 text-white" />
            </motion.div>

            <div className="mb-3">
              <h3 className="text-xl font-bold text-sport-text mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-sport-wellness mb-2">{service.stats}</div>
            </div>

            <p className="text-sport-text/70 text-sm mb-4 leading-relaxed">{service.description}</p>

            <div className="flex flex-wrap gap-2">
              {service.badges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="border-sport-wellness/30 text-sport-wellness">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Specialties Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 shadow-elegant"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-sport-text mb-6 flex items-center gap-3">
          <Monitor className="w-8 h-8 text-sport-wellness" />
          Servicios Especializados
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={specialty.image} 
                  alt={specialty.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <specialty.icon className="w-6 h-6 text-white mb-2" />
                  <p className="text-white font-bold text-sm mb-1">{specialty.name}</p>
                  <p className="text-white/80 text-xs mb-2">{specialty.description}</p>
                  <Badge className="bg-white/20 text-white border-0 text-xs">
                    {specialty.professionals}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button size="lg" className="bg-gradient-tech-primary text-white px-8 rounded-full hover:shadow-glow-primary">
            <Calendar className="w-5 h-5 mr-2" />
            Agendar Consulta
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
