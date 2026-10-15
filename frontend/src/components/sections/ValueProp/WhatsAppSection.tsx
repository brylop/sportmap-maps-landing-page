import { motion } from 'framer-motion';
import { Smartphone, Bell, MessageCircle, ShieldCheck } from 'lucide-react';
import { StepCard, StepData } from '@/components/common';

const steps: StepData[] = [
  {
    icon: Smartphone,
    step: '1',
    title: 'Conecta tu número',
    description: 'Activa WhatsApp Business con el número de tu escuela en minutos',
  },
  {
    icon: Bell,
    step: '2',
    title: 'Avisos automáticos',
    description: 'Recordatorios de pago, confirmaciones de inscripción y avisos de clase',
  },
  {
    icon: MessageCircle,
    step: '3',
    title: 'Los padres responden ahí mismo',
    description: 'Consultan y reciben soporte sin descargar nada ni crear otra cuenta',
  },
  {
    icon: ShieldCheck,
    step: '4',
    title: 'Tú tienes el control',
    description: 'Todo desde el panel de tu escuela, con tu marca y tus datos',
  },
];

export function WhatsAppSection() {
  return (
    <section id="whatsapp" className="py-16 md:py-24 px-4 bg-sport-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sport-text-primary mb-4">
            Comunícate con las familias por WhatsApp, con el número de tu escuela
          </h2>
          <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto font-light">
            Los padres no abren la app, abren WhatsApp. Actívalo con tu propio número de
            WhatsApp Business y quítate el trabajo manual.
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
