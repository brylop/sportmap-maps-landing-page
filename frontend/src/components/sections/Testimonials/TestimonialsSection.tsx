import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard, TestimonialData } from "@/components/common";

// Clientes reales, nombrados con su permiso. Las cifras salen de la base de
// producción (corte 14 oct 2026) y se pintan como dato, no como cita: antes
// había cuatro testimonios inventados con fotos de stock.
const testimonials: TestimonialData[] = [
  {
    name: "Dynasty Volley Club",
    role: "Voleibol · Bogotá · en SportMaps desde julio de 2026",
    content: "502 deportistas activos, $117,6 millones en mensualidades gestionadas, 455 comprobantes leídos por la IA de WhatsApp y 334 facturas aceptadas por la DIAN.",
    rating: 0,
    isQuote: false,
  },
  {
    name: "GYM RM",
    role: "Control de acceso con torniquetes ZKTeco",
    content: "12.181 entradas registradas en torniquete, con bloqueo automático para quien está en mora, y 315 pagos por $24,2 millones.",
    rating: 0,
    isQuote: false,
  },
  {
    name: "Club Deportivo Besser",
    role: "Bogotá · en SportMaps desde septiembre de 2026",
    content: "78 deportistas, 720 asistencias registradas e informe mensual de progreso que llega a cada familia.",
    rating: 0,
    isQuote: false,
  },
  {
    name: "Dreamers Gymnastics",
    role: "Gimnasia · Bogotá",
    content: "2.278 accesos con torniquete y banco de horas por niveles: cada familia ve cuántas clases le quedan.",
    rating: 0,
    isQuote: false,
  },
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
            Escuelas reales, cifras reales
          </h2>
          <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto font-light">
            Datos de la plataforma con corte al 14 de octubre de 2026, publicados con permiso de cada club
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
