import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-sport-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sport-text mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-sport-text/70 max-w-2xl mx-auto">
            Historias reales de deportistas, entrenadores y familias que han transformado su experiencia deportiva
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-elegant p-8 sm:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sport-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl text-sport-text/90 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-sport-accent/20"
                />
                <div className="text-center sm:text-left">
                  <div className="font-bold text-sport-text text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sport-text/60">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="rounded-full border-sport-border hover:bg-sport-primary hover:text-white hover:border-sport-primary"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-sport-primary scale-125' 
                      : 'bg-sport-border hover:bg-sport-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full border-sport-border hover:bg-sport-primary hover:text-white hover:border-sport-primary"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}