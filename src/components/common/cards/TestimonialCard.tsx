import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export interface TestimonialData {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-sport-background/80 backdrop-blur-sm rounded-3xl shadow-elegant p-8 sm:p-12 relative overflow-hidden border border-white/20">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-sport-accent/5 rounded-full -translate-y-16 translate-x-16"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center gap-1 mb-6 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Star className="w-5 h-5 fill-current text-yellow-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote 
          className="text-xl sm:text-2xl text-sport-text-primary text-center mb-8 leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          "{testimonial.content}"
        </motion.blockquote>

        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-4 border-sport-accent/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <div className="text-center sm:text-left">
            <div className="font-bold text-sport-text-primary text-lg">
              {testimonial.name}
            </div>
            <div className="text-sport-text-secondary">
              {testimonial.role}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
