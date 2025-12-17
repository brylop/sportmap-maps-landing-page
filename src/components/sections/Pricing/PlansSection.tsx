import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { PricingCard, PricingPlan } from '@/components/common';

interface PlansSectionProps {
  onPlanClick: () => void;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 19,
    features: [
      'Agenda ilimitada',
      '100 alumnos',
      'Pagos Stripe/local',
      'App básica (tu logo)',
      'WhatsApp/Email auto',
      'API 10k calls/mes',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: 49,
    features: [
      'Todo Starter',
      '500 alumnos',
      'Patrocinios IA',
      'App marca blanca',
      'API 50k calls/mes',
      'Soporte chat',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: 99,
    features: [
      'Todo Pro',
      'Alumnos ilimitados',
      'SportMind IA',
      'VisionNet ready',
      'API ilimitada',
      'Soporte prioritario',
    ],
    popular: false,
  },
];

export function PlansSection({ onPlanClick }: PlansSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-sport-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-sport-text-primary mb-4"
        >
          Planes Transparentes. Sin Sorpresas.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-sport-text-secondary mb-12"
        >
          Elige el plan que mejor se adapte a tu escuela o negocio deportivo
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              onPlanClick={onPlanClick}
              variant="full"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-6 rounded-2xl bg-sport-accent/10 border border-sport-accent/30 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-sport-accent" />
            <strong className="text-sport-text-primary">14 días gratis. Sin tarjeta.</strong>
          </div>
          <p className="text-sport-text-secondary text-sm">
            Cancelas cuando quieras. Datos 100% tuyos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
