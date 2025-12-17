import { motion } from 'framer-motion';
import { DollarSign, Lock, Users, Layers } from 'lucide-react';
import { PainPointCard, PainPointData } from '@/components/common';

const painPoints: PainPointData[] = [
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
          ¿Por qué tu software de gestión deportiva te está frenando?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <PainPointCard key={point.title} data={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
