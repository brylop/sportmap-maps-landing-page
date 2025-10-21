import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award, Zap, Globe } from "lucide-react";

export function AcercaModule() {
  const stats = [
    { icon: Users, value: "50K+", label: "Usuarios Activos", color: "sport-primary" },
    { icon: TrendingUp, value: "95%", label: "Satisfacción", color: "sport-accent" },
    { icon: Award, value: "10+", label: "Premios", color: "sport-highlight" },
    { icon: Globe, value: "15", label: "Países", color: "sport-wellness" }
  ];

  const values = [
    {
      icon: Target,
      title: "Nuestra Visión",
      description: "Ser la plataforma líder en el ecosistema deportivo global, conectando a millones de atletas con las mejores oportunidades.",
      color: "sport-primary"
    },
    {
      icon: Zap,
      title: "Innovación Constante",
      description: "Utilizamos tecnología de vanguardia e IA para mejorar continuamente la experiencia de nuestros usuarios.",
      color: "sport-accent"
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Verificamos y certificamos todas las escuelas, productos y servicios en nuestra plataforma.",
      color: "sport-highlight"
    }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 sm:p-12 mb-8 shadow-elegant relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sport-accent/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sport-primary/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-sport-text mb-6">
                Nuestra <span className="bg-gradient-tech-primary bg-clip-text text-transparent">Misión</span>
              </h2>
              <p className="text-xl sm:text-2xl text-sport-text mb-6 leading-relaxed">
                Hacer el deporte más <strong>accesible y seguro</strong>, conectando formación, equipamiento y salud en un solo lugar.
              </p>
              <p className="text-base sm:text-lg text-sport-text/80 leading-relaxed mb-6">
                Atendemos a familias, jóvenes deportistas y aficionados. Para proveedores, ofrecemos un canal digital con herramientas de gestión y acceso a una audiencia calificada.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-sport-primary/10 rounded-full border border-sport-primary/20"
                >
                  <span className="text-sport-primary font-semibold">🚀 Innovación</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-sport-accent/10 rounded-full border border-sport-accent/20"
                >
                  <span className="text-sport-accent font-semibold">⚡ Eficiencia</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-sport-highlight/10 rounded-full border border-sport-highlight/20"
                >
                  <span className="text-sport-highlight font-semibold">🎯 Resultados</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img 
              className="w-full rounded-2xl shadow-hover" 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop" 
              alt="Equipo SportMaps"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sport-background/80 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className="bg-sport-card rounded-2xl p-6 text-center shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            <motion.div 
              className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
              style={{ background: `linear-gradient(135deg, hsl(var(--${stat.color})), hsl(var(--${stat.color})) 70%)` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className="w-7 h-7 text-white" />
            </motion.div>
            <div className="text-3xl font-bold text-sport-text mb-2">{stat.value}</div>
            <div className="text-sm text-sport-text/70">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 sm:p-12 shadow-elegant"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-sport-text mb-8 text-center">
          Nuestros <span className="bg-gradient-tech-primary bg-clip-text text-transparent">Valores</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-sport-background/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sport-primary/30 transition-all duration-300"
            >
              <motion.div 
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
                style={{ background: `linear-gradient(135deg, hsl(var(--${value.color})), hsl(var(--${value.color})) 70%)` }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-sport-text mb-3 text-center">{value.title}</h4>
              <p className="text-sport-text/70 text-center leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
