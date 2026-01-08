import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DynamicBackground } from "./DynamicBackground";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "María González",
    role: "Madre de deportista",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "SportMaps nos ayudó a encontrar la escuela perfecta para mi hijo. La plataforma es increíblemente fácil de usar.",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Entrenador de fútbol",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Como entrenador, SportMaps me permite gestionar mejor mis estudiantes y comunicarme eficientemente con los padres.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Atleta profesional", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "La sección de nutrición y bienestar ha sido clave en mi desarrollo. Los planes personalizados son excelentes.",
    rating: 5
  },
  {
    name: "Roberto Silva",
    role: "Director de escuela deportiva",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "SportMaps transformó la manera en que gestionamos nuestra escuela. Los reportes y herramientas son fantásticos.",
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sport-text-primary mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
            Historias reales de deportistas, entrenadores y familias que han transformado su experiencia deportiva
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-sport-background/80 backdrop-blur-sm rounded-3xl shadow-elegant p-8 sm:p-12 relative overflow-hidden border border-white/20"
            >
              {/* Background decoration */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-sport-accent/5 rounded-full -translate-y-16 translate-x-16"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center gap-1 mb-6 justify-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-current text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.blockquote 
                  className="text-xl sm:text-2xl text-sport-text-primary text-center mb-8 leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  "{testimonials[currentIndex].content}"
                </motion.blockquote>

                <motion.div 
                  className="flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-sport-accent/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-sport-text-primary text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sport-text-secondary">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={goToPrevious}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            </motion.div>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-sport-primary scale-125' 
                      : 'bg-sport-border hover:bg-sport-primary/50'
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={goToNext}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}