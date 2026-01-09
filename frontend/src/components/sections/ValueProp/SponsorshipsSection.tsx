import { motion } from 'framer-motion';
import { Upload, Brain, FileText, Wallet } from 'lucide-react';
import { StepCard, StepData } from '@/components/common';

const steps: StepData[] = [
  {
    icon: Upload,
    step: '1',
    title: 'Publica necesidad',
    description: '"Uniformes para 50 niños"',
  },
  {
    icon: Brain,
    step: '2',
    title: 'IA matchea',
    description: 'Adidas (afinidad 92%)',
  },
  {
    icon: FileText,
    step: '3',
    title: 'Smart contract',
    description: '$8M COP → Escrow → Verificación → Liberado',
  },
  {
    icon: Wallet,
    step: '4',
    title: 'Tú recibes',
    description: '$7.44M (93%) | SportMaps: $560k (7%)',
  },
];

export function SponsorshipsSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sport-text-primary mb-4">
            Patrocinios Inteligentes: Ingresos Nuevos
          </h2>
          <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
            El primer SaaS que genera ingresos, no solo costos.
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
