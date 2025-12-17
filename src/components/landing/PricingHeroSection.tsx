import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingHeroSectionProps {
  onPlanClick: () => void;
}

export function PricingHeroSection({ onPlanClick }: PricingHeroSectionProps) {
  const plans = [
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
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative p-6 rounded-2xl border ${
                plan.popular
                  ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/30'
                  : 'bg-sport-card border-sport-border'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sport-primary text-white text-xs font-semibold rounded-full">
                  Más popular
                </span>
              )}
              <h3 className="text-xl font-bold text-sport-text-primary mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-sport-primary">${plan.price}</span>
                <span className="text-sport-text-secondary">/mes</span>
              </div>
              <ul className="space-y-2 mb-6 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sport-text-secondary">
                    <Check className="w-4 h-4 text-sport-success flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={onPlanClick}
                variant={plan.popular ? 'default' : 'outline'}
                className="w-full"
              >
                Empezar gratis 14 días
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
