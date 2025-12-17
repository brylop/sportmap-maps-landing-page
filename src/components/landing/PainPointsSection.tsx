import { motion } from 'framer-motion';
import { DollarSign, Lock, Users, Layers } from 'lucide-react';

const painPoints = [
  {
    icon: DollarSign,
    title: 'Costes Ocultos',
    description: 'Empiezas con $29/mes. Terminas pagando $400+ (app + integraciones + marketing)',
  },
  {
    icon: Lock,
    title: 'Lock-in',
    description: 'Cambiar = perder datos, clientes y 3 meses de trabajo',
  },
  {
    icon: Users,
    title: 'Cliente no es tuyo',
    description: 'ClassPass controla precio, datos y comunicación',
  },
  {
    icon: Layers,
    title: 'Complejidad',
    description: '5 herramientas = 5 logins = 5 facturas = 0 tiempo',
  },
];

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-sport-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-sport-text-primary mb-12"
        >
          ¿Por qué tu software fitness te está frenando?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-sport-card border border-sport-border hover:border-sport-highlight/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-sport-highlight/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-sport-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-sport-text-primary mb-2">{point.title}</h3>
              <p className="text-sport-text-secondary text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
