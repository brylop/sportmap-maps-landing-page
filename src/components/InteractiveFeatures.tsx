import { useState } from "react";
import { Users, School, ShoppingBag, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicBackground } from "./DynamicBackground";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: "athletes",
    icon: Users,
    title: "Para Deportistas",
    description: "Encuentra tu escuela ideal y gestiona tu carrera deportiva",
    color: "sport-primary",
    route: "/deportistas",
    details: [
      "Búsqueda avanzada de escuelas",
      "Comparación detallada de programas",
      "Seguimiento de progreso personal",
      "Comunidad de deportistas",
      "Recomendaciones personalizadas"
    ]
  },
  {
    id: "schools",
    icon: School,
    title: "Para Escuelas",
    description: "Herramientas completas para gestionar tu institución deportiva",
    color: "sport-accent",
    route: "/escuelas",
    details: [
      "Dashboard de gestión integral",
      "Comunicación con padres y estudiantes",
      "Reportes de rendimiento automáticos",
      "Sistema de inscripciones online",
      "Certificaciones digitales"
    ]
  },
  {
    id: "equipment",
    icon: ShoppingBag,
    title: "Equipamiento",
    description: "Todo lo que necesitas para tu práctica deportiva",
    color: "sport-highlight",
    route: "/equipamiento",
    details: [
      "Catálogo especializado por deporte",
      "Reseñas verificadas de productos",
      "Ofertas exclusivas para comunidad",
      "Entrega rápida a domicilio",
      "Asesoría técnica personalizada"
    ]
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Bienestar Integral",
    description: "Cuida tu salud física y mental en el deporte",
    color: "sport-wellness",
    route: "/bienestar",
    details: [
      "Planes nutricionales personalizados",
      "Seguimiento médico especializado",
      "Programas de recuperación",
      "Análisis de rendimiento",
      "Prevención de lesiones"
    ]
  }
];

export function InteractiveFeatures() {
  const [activeFeature, setActiveFeature] = useState("athletes");
  const navigate = useNavigate();

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sport-text-primary mb-4">
            Una plataforma, múltiples soluciones
          </h2>
          <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
            Descubre cómo SportMaps se adapta a las necesidades específicas de cada usuario
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Feature Tabs */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                  activeFeature === feature.id
                    ? `border-sport-accent bg-sport-background/80 backdrop-blur-sm shadow-hover`
                    : 'border-transparent bg-sport-background/60 backdrop-blur-sm hover:bg-sport-background/80 hover:shadow-elegant'
                }`}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-300 ${
                      activeFeature === feature.id ? 'scale-110' : ''
                    }`}
                    style={{ 
                      background: `linear-gradient(135deg, hsl(var(--${feature.color})), hsl(var(--${feature.color})) 70%, hsl(var(--sport-accent)) 100%)`
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-sport-text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sport-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                  <AnimatePresence>
                    {activeFeature === feature.id && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className={`w-6 h-6 rounded-full bg-${feature.color} flex items-center justify-center`}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-sport-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-elegant border border-white/20 sticky top-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(var(--${currentFeature.color})), hsl(var(--${currentFeature.color})) 70%, hsl(var(--sport-accent)) 100%)`
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <currentFeature.icon className="w-8 h-8" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-sport-text-primary">
                    {currentFeature.title}
                  </h3>
                  <p className="text-sport-text-secondary">
                    {currentFeature.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {currentFeature.details.map((detail, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${currentFeature.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-sport-text-secondary">{detail}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="default"
                  className="w-full"
                  onClick={() => navigate(currentFeature.route)}
                >
                  Explorar {currentFeature.title}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}