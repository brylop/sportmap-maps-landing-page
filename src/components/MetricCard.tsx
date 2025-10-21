import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, y: -4 }}
      className="bg-sport-primary/10 border-2 border-sport-primary/20 rounded-xl sm:rounded-2xl text-center p-3 sm:p-4 backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300"
    >
      <motion.div 
        className="text-xl sm:text-2xl md:text-3xl font-bold text-sport-primary mb-1"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {value}
      </motion.div>
      <div className="text-sport-text/70 text-xs sm:text-sm md:text-base font-medium">{label}</div>
    </motion.div>
  );
}