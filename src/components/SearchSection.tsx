import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SearchSection() {
  return (
    <section className="bg-sport-card p-6 rounded-3xl shadow-elegant mb-8">
      <h3 className="text-center text-2xl font-bold mb-6 text-sport-text">
        Encuentra Todo lo que Necesitas
      </h3>
      
      <div className="flex gap-2 mb-4">
        <Input
          type="search"
          placeholder="Buscar escuelas, productos, servicios…"
          className="flex-1 rounded-full border-sport-border focus:border-sport-accent"
        />
        <Button 
          className="bg-sport-primary hover:bg-sport-primary/90 text-white rounded-full px-6"
        >
          <Search className="w-4 h-4 mr-2" />
          Buscar
        </Button>
      </div>
      
      <div className="flex justify-center flex-wrap gap-2">
        <Badge variant="default" className="bg-sport-primary text-white">Fútbol</Badge>
        <Badge variant="default" className="bg-sport-accent text-white">Equipamiento</Badge>
        <Badge variant="default" className="bg-sport-nutrition text-white">Nutrición</Badge>
        <Badge variant="default" className="bg-sport-wellness text-white">Entrenadores</Badge>
      </div>
    </section>
  );
}