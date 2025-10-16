import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Zap, User, Mail, Phone, Briefcase } from "lucide-react";

interface JoinTechFormProps {
  onClose?: () => void;
}

export function JoinTechForm({ onClose }: JoinTechFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    interests: "",
    motivation: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (formData.interests.trim().length < 10) {
      toast({
        title: "Error de validación",
        description: "Las áreas de interés deben tener al menos 10 caracteres.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.motivation.trim().length < 10) {
      toast({
        title: "Error de validación",
        description: "La motivación debe tener al menos 10 caracteres.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-join-application', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience: formData.experience,
          interests: formData.interests,
          motivation: formData.motivation
        }
      });

      if (error) {
        const errorMessage = error.message || "Hubo un problema al enviar tu aplicación. Inténtalo de nuevo.";
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }
      
      // Check if the response contains an error
      if (data?.error) {
        const details = data.details ? data.details.join(', ') : data.error;
        toast({
          title: "Error de validación",
          description: details,
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "¡Aplicación enviada!",
        description: "Te contactaremos pronto para continuar con el proceso.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        interests: "",
        motivation: ""
      });
      
      onClose?.();
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: error.message || "Hubo un problema al enviar tu aplicación. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-12 h-12 bg-gradient-tech-primary rounded-xl flex items-center justify-center shadow-glow-primary">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
            Únete a SportMaps Tech
          </h2>
        </div>
        <p className="text-sport-text-muted">
          Forma parte de la revolución deportiva. Comparte tu pasión y experiencia con nuestra comunidad tech.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Nombre completo</span>
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Tu nombre completo"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
              className="bg-sport-surface border-sport-border focus:border-sport-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-sport-surface border-sport-border focus:border-sport-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Teléfono</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+57 312 456 7890"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-sport-surface border-sport-border focus:border-sport-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience" className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Experiencia</span>
            </Label>
            <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
              <SelectTrigger className="bg-sport-surface border-sport-border">
                <SelectValue placeholder="Selecciona tu nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
                <SelectItem value="professional">Profesional</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests">
            Áreas de interés <span className="text-muted-foreground text-sm">(mínimo 10 caracteres)</span>
          </Label>
          <Textarea
            id="interests"
            placeholder="¿En qué aspectos de SportMaps Tech te gustaría participar? (desarrollo, contenido, comunidad, etc.)"
            value={formData.interests}
            onChange={(e) => handleInputChange("interests", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[100px]"
            required
            minLength={10}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="motivation">
            Motivación <span className="text-muted-foreground text-sm">(mínimo 10 caracteres)</span>
          </Label>
          <Textarea
            id="motivation"
            placeholder="Cuéntanos por qué quieres unirte a SportMaps Tech y qué puedes aportar a la comunidad"
            value={formData.motivation}
            onChange={(e) => handleInputChange("motivation", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[120px]"
            required
            minLength={10}
          />
        </div>

        <div className="flex space-x-4 pt-4">
          {onClose && (
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
          )}
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-gradient-tech-primary hover:shadow-glow-primary text-white"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Enviando...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Enviar aplicación</span>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}