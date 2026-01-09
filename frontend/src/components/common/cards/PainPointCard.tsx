import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface PainPointData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PainPointCardProps {
  data: PainPointData;
  index: number;
}

export function PainPointCard({ data, index }: PainPointCardProps) {
  const IconComponent = data.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-sport-card border border-sport-border hover:border-sport-highlight/50 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-sport-highlight/10 flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-sport-highlight" />
      </div>
      <h3 className="text-lg font-semibold text-sport-text-primary mb-2">{data.title}</h3>
      <p className="text-sport-text-secondary text-sm">{data.description}</p>
    </motion.div>
  );
}
