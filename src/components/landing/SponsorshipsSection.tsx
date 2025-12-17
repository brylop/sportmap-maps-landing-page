import { motion } from 'framer-motion';
import { Upload, Brain, FileText, Wallet } from 'lucide-react';

const steps = [
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
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-6 rounded-2xl bg-sport-card border border-sport-border"
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-sport-primary text-white flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4 mt-2">
                <item.icon className="w-6 h-6 text-sport-primary" />
              </div>
              <h3 className="text-lg font-semibold text-sport-text-primary mb-2">{item.title}</h3>
              <p className="text-sport-text-secondary text-sm">{item.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sport-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
