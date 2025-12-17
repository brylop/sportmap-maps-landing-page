import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAFinalSectionProps {
  onStartClick: () => void;
  onDemoClick: () => void;
}

export function CTAFinalSection({ onStartClick, onDemoClick }: CTAFinalSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-sport-primary/10 to-sport-accent/10">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-sport-text-primary mb-8"
        >
          Deja de pagar peajes. Empieza a crecer.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button onClick={onStartClick} size="lg" className="text-lg px-8">
            14 días gratis - Starter
          </Button>
          <Button onClick={onDemoClick} variant="outline" size="lg" className="text-lg px-8">
            Demo personalizada
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-sport-text-secondary"
        >
          <Shield className="w-5 h-5 text-sport-success" />
          <p>
            <strong>Sin riesgos:</strong> Cancelas gratis. Datos tuyos. Sin lock-in.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
