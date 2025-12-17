import { motion } from 'framer-motion';
import { PricingCard, PricingPlan } from '@/components/common';

interface PricingHeroSectionProps {
  onPlanClick: () => void;
}

const heroPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 19,
    features: ['Agenda + Pagos', 'App incluida', 'WhatsApp integrado'],
    popular: false,
  },
  {
    name: 'Pro',
    price: 49,
    features: ['Todo Starter +', 'Patrocinios IA', 'Analítica avanzada'],
    popular: true,
  },
];

export function PricingHeroSection({ onPlanClick }: PricingHeroSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-sport-text-primary mb-6"
        >
          La Gestión Deportiva que No Te Cobra por Crecer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-sport-text-secondary mb-12 max-w-3xl mx-auto"
        >
          Mindbody: $500/mes reales. ClassPass: pierde 60% margen.{' '}
          <strong className="text-sport-primary">SportMaps: $19-99/mes, todo incluido.</strong>
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {heroPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              onPlanClick={onPlanClick}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
