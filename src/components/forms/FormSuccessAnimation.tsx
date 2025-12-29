import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormSuccessAnimationProps {
  isVisible: boolean;
  title?: string;
  message?: string;
  onClose?: () => void;
}

export function FormSuccessAnimation({ 
  isVisible, 
  title = "¡Registro Exitoso!", 
  message = "Nos pondremos en contacto contigo pronto.",
  onClose 
}: FormSuccessAnimationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 0.1 
            }}
            className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-md mx-4 text-center overflow-hidden"
          >
            {/* Background confetti effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: ['#22c55e', '#f97316', '#3b82f6', '#eab308', '#ec4899'][i % 5],
                    left: `${10 + (i * 8)}%`,
                    top: '-10px',
                  }}
                  initial={{ y: -20, opacity: 0, rotate: 0 }}
                  animate={{ 
                    y: [0, 150 + Math.random() * 100], 
                    opacity: [1, 1, 0],
                    rotate: 360 * (i % 2 === 0 ? 1 : -1),
                    x: Math.sin(i) * 30
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 0.2 + (i * 0.05),
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>

            {/* Success icon with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="relative mx-auto mb-6"
            >
              {/* Pulsing ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-sport-primary/20"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ width: 80, height: 80, margin: 'auto' }}
              />
              
              <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-sport-primary to-sport-accent rounded-full flex items-center justify-center shadow-lg">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.div>

            {/* Party icon */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4"
            >
              <PartyPopper className="w-8 h-8 text-sport-accent" />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-foreground mb-2"
            >
              {title}
            </motion.h3>

            {/* Message */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-6"
            >
              {message}
            </motion.p>

            {/* Additional info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-sport-primary/10 rounded-lg p-4 mb-6"
            >
              <p className="text-sm text-foreground">
                📧 Revisa tu correo electrónico para más información
              </p>
            </motion.div>

            {/* Close button */}
            {onClose && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  onClick={onClose}
                  className="w-full bg-sport-primary hover:bg-sport-primary/90"
                >
                  Entendido
                </Button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}