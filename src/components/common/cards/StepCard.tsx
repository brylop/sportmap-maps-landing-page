import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface StepData {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

interface StepCardProps {
  data: StepData;
  index: number;
  isLast?: boolean;
}

export function StepCard({ data, index, isLast = false }: StepCardProps) {
  const IconComponent = data.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative p-6 rounded-2xl bg-sport-card border border-sport-border"
    >
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-sport-primary text-white flex items-center justify-center text-sm font-bold">
        {data.step}
      </div>
      <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4 mt-2">
        <IconComponent className="w-6 h-6 text-sport-primary" />
      </div>
      <h3 className="text-lg font-semibold text-sport-text-primary mb-2">{data.title}</h3>
      <p className="text-sport-text-secondary text-sm">{data.description}</p>
      
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-sport-border" />
      )}
    </motion.div>
  );
}
