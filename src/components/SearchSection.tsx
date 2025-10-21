import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function SearchSection() {
  return (
    <section className="relative bg-sport-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-elegant mb-6 sm:mb-8 mx-4 sm:mx-6 lg:mx-8 border border-sport-border">
      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-sport-text-primary px-2">
        Encuentra Todo lo que Necesitas
      </h3>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-2 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Input
          type="search"
          placeholder="Buscar escuelas, productos, servicios…"
          className="flex-1 rounded-full border-sport-border bg-sport-surface text-sport-text-primary placeholder:text-sport-text-muted focus:border-sport-accent text-sm sm:text-base transition-all duration-300 focus:shadow-glow-primary"
        />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            variant="secondary"
            className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
          >
            <Search className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Buscar</span>
            <span className="sm:hidden">Buscar</span>
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center flex-wrap gap-1.5 sm:gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {['Fútbol', 'Equipamiento', 'Nutrición', 'Entrenadores'].map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Badge 
              variant="default" 
              className={`${
                index === 0 ? 'bg-sport-accent/80 hover:bg-sport-accent' :
                index === 1 ? 'bg-sport-highlight/80 hover:bg-sport-highlight' :
                index === 2 ? 'bg-sport-nutrition/80 hover:bg-sport-nutrition' :
                'bg-sport-wellness/80 hover:bg-sport-wellness'
              } text-white text-xs sm:text-sm cursor-pointer transition-all duration-300`}
            >
              {tag}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}