import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard, TestimonialData } from "@/components/common";

const testimonials: TestimonialData[] = [
  {
    name: "María González",
    role: "Directora Academia Fútbol Elite",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "Mi academia creció un 300%. Ahora tengo tiempo para mi familia mientras SportMaps hace el trabajo pesado.",
    rating: 5
  },
  {
    name: "Carlos Ruiz",
    role: "Entrenador Personal · 6 años",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Pasé de 5 clientes a 40 en 3 meses. SportMaps transformó mi vida y mi negocio por completo.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Atleta Profesional · Ciclismo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Encontré mi equipo perfecto y patrocinadores que creen en mí. Este es el futuro del deporte.",
    rating: 5
  },
  {
    name: "Roberto Silva",
    role: "CEO Academia Multideportiva",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Automatizamos todo. Ahora nos enfocamos en lo que importa: formar campeones y crecer.",
    rating: 5
  }
];

export function TestimonialsSection() {
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sport-primary/5 via-transparent to-sport-accent/5 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-sport-text-primary mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Parte de la comunidad líder
          </h2>
          <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto font-light">
            Historias reales de transformación y éxito
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
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
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
