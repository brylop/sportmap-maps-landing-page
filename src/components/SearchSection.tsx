import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SearchSection() {
  return (
    <section className="relative bg-sport-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-elegant mb-6 sm:mb-8 mx-4 sm:mx-6 lg:mx-8 border border-sport-border">
      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-sport-text-primary px-2">
        Encuentra Todo lo que Necesitas
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <Input
          type="search"
          placeholder="Buscar escuelas, productos, servicios…"
          className="flex-1 rounded-full border-sport-border bg-sport-surface text-sport-text-primary placeholder:text-sport-text-muted focus:border-sport-accent text-sm sm:text-base"
        />
        <Button 
          variant="secondary"
          className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
        >
          <Search className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Buscar</span>
          <span className="sm:hidden">Buscar</span>
        </Button>
      </div>
      
      <div className="flex justify-center flex-wrap gap-1.5 sm:gap-2">
        <Badge variant="default" className="bg-sport-accent/80 hover:bg-sport-accent text-white text-xs sm:text-sm">Fútbol</Badge>
        <Badge variant="default" className="bg-sport-highlight/80 hover:bg-sport-highlight text-white text-xs sm:text-sm">Equipamiento</Badge>
        <Badge variant="default" className="bg-sport-nutrition/80 hover:bg-sport-nutrition text-white text-xs sm:text-sm">Nutrición</Badge>
        <Badge variant="default" className="bg-sport-wellness/80 hover:bg-sport-wellness text-white text-xs sm:text-sm">Entrenadores</Badge>
      </div>
    </section>
  );
}