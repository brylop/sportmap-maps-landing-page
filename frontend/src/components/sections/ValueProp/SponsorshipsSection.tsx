import { motion } from 'framer-motion';
import { Sparkles, Zap, CheckCircle, TrendingUp } from 'lucide-react';
import { StepCard, StepData } from '@/components/common';

const steps: StepData[] = [
  {
    icon: Sparkles,
    step: '1',
    title: 'Publica tu necesidad',
    description: 'En segundos',
  },
  {
    icon: Zap,
    step: '2',
    title: 'IA encuentra el match',
    description: 'Automático y preciso',
  },
  {
    icon: CheckCircle,
    step: '3',
    title: 'Acuerdo seguro',
    description: 'Protección total',
  },
  {
    icon: TrendingUp,
    step: '4',
    title: 'Recibes el patrocinio',
    description: 'Creces sin esfuerzo',
  },
];

export function SponsorshipsSection() {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sport-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sport-text-primary mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Tu academia genera ingresos mientras duermes
          </h2>
          <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto font-light">
            Patrocinios automáticos. Cero esfuerzo. Puro crecimiento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <StepCard
              key={item.step}
              data={item}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
