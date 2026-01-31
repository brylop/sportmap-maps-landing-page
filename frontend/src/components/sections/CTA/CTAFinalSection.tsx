import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAFinalSectionProps {
  onStartClick: () => void;
  onDemoClick: () => void;
}

export function CTAFinalSection({ onStartClick, onDemoClick }: CTAFinalSectionProps) {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/20 via-sport-accent/10 to-sport-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(36,130,35,0.1),transparent_50%)]" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sport-card/80 backdrop-blur-sm border border-sport-primary/30 mb-6"
        >
          <Sparkles className="w-4 h-4 text-sport-accent animate-pulse" />
          <span className="text-sm font-semibold text-sport-primary">Espacios limitados</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sport-primary via-sport-accent to-sport-primary bg-clip-text text-transparent"
        >
          Únete a la revolución deportiva
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-sport-text-secondary max-w-2xl mx-auto mb-10 font-light"
        >
          El futuro ya está aquí. ¿Te unes?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={onDemoClick}
            size="lg"
            className="text-lg px-10 py-7 bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-accent text-white font-bold rounded-full group relative overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Solicitar Demo Exclusiva
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sport-accent to-sport-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            onClick={onStartClick}
            variant="outline"
            size="lg"
            className="text-lg px-10 py-7 border-2 border-sport-primary/50 hover:border-sport-primary hover:bg-sport-primary/10 font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Descubrir Soluciones
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
