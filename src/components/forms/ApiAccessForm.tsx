import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, User, Mail, Building2, Code2, Target } from "lucide-react";

interface ApiAccessFormProps {
  onClose?: () => void;
}

export function ApiAccessForm({ onClose }: ApiAccessFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    usageType: "",
    projectDescription: "",
    endpoints: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('submit-api-access', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          usageType: formData.usageType,
          projectDescription: formData.projectDescription,
          endpoints: formData.endpoints
        }
      });

      if (error) {
        console.error('Function error:', error);
        throw error;
      }
      
      toast({
        title: "¡Solicitud enviada!",
        description: "Procesaremos tu solicitud de acceso a la API pronto.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        usageType: "",
        projectDescription: "",
        endpoints: ""
      });
      
      onClose?.();
    } catch (error) {
      console.error('Error submitting API access request:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Inténtalo de nuevo.",
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
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
            Solicitar Acceso a API
          </h2>
        </div>
        <p className="text-sport-text-muted">
          Completa este formulario para obtener acceso a nuestra API y documentación completa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Nombre Completo</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
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
            <Label htmlFor="company" className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span>Empresa/Organización</span>
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Nombre de tu empresa"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              required
              className="bg-sport-surface border-sport-border focus:border-sport-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="usageType" className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span>Tipo de Uso</span>
            </Label>
            <Select value={formData.usageType} onValueChange={(value) => handleInputChange("usageType", value)} required>
              <SelectTrigger className="bg-sport-surface border-sport-border">
                <SelectValue placeholder="Selecciona el tipo de uso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="development">Desarrollo/Testing</SelectItem>
                <SelectItem value="production">Producción</SelectItem>
                <SelectItem value="research">Investigación</SelectItem>
                <SelectItem value="education">Educación</SelectItem>
                <SelectItem value="personal">Proyecto Personal</SelectItem>
                <SelectItem value="enterprise">Empresarial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectDescription">Descripción del Proyecto</Label>
          <Textarea
            id="projectDescription"
            placeholder="Describe cómo planeas usar nuestra API, qué tipo de aplicación estás construyendo..."
            value={formData.projectDescription}
            onChange={(e) => handleInputChange("projectDescription", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[120px]"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="endpoints">Endpoints de Interés</Label>
          <Textarea
            id="endpoints"
            placeholder="¿Qué endpoints o funcionalidades específicas necesitas? (athletes, schools, nutrition, analytics, etc.)"
            value={formData.endpoints}
            onChange={(e) => handleInputChange("endpoints", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[100px]"
            required
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
                <Send className="w-4 h-4" />
                <span>Solicitar Acceso</span>
              </div>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-sport-surface rounded-lg border border-sport-border">
        <h3 className="font-semibold text-sport-text-primary mb-2">¿Qué obtendrás?</h3>
        <ul className="space-y-2 text-sm text-sport-text-muted">
          <li>🔑 API Key personalizada</li>
          <li>📚 Documentación completa y ejemplos de código</li>
          <li>⚡ 50K+ llamadas por minuto</li>
          <li>🎯 Acceso a 15+ modelos ML</li>
          <li>💬 Soporte técnico dedicado</li>
        </ul>
      </div>
    </div>
  );
}
