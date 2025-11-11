import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, User, Mail, MessageSquare, HelpCircle } from "lucide-react";

interface ContactFormProps {
  onClose?: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Call the edge function to handle both DB insertion and email
      const { data, error } = await supabase.functions.invoke('submit-contact-message', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          category: formData.category,
          message: formData.message
        }
      });

      if (error) {
        console.error('Function error:', error);
        const errorMessage = data?.details?.[0] || 'Hubo un problema al enviar tu mensaje. Verifica que todos los campos cumplan con los requisitos.';
        toast({
          title: "Error de validación",
          description: errorMessage,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
      
      onClose?.();
    } catch (error) {
      console.error('Error submitting message:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
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
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-tech-primary bg-clip-text text-transparent">
            Contáctanos
          </h2>
        </div>
        <p className="text-sport-text-muted">
          ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Nombre</span>
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
            <Label htmlFor="category" className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>Categoría</span>
            </Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className="bg-sport-surface border-sport-border">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Consulta general</SelectItem>
                <SelectItem value="technical">Soporte técnico</SelectItem>
                <SelectItem value="business">Oportunidad de negocio</SelectItem>
                <SelectItem value="partnership">Alianza estratégica</SelectItem>
                <SelectItem value="feedback">Feedback y sugerencias</SelectItem>
                <SelectItem value="other">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Asunto</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Asunto de tu mensaje"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              required
              className="bg-sport-surface border-sport-border focus:border-sport-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="flex items-center justify-between">
            <span>Mensaje</span>
            <span className="text-xs text-sport-text-muted">
              {formData.message.trim().length}/10 mínimo
            </span>
          </Label>
          <Textarea
            id="message"
            placeholder="Describe tu consulta o mensaje en detalle (mínimo 10 caracteres)..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[150px]"
            minLength={10}
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
                <span>Enviar mensaje</span>
              </div>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-sport-surface rounded-lg border border-sport-border">
        <h3 className="font-semibold text-sport-text-primary mb-2">Otras formas de contacto</h3>
        <div className="space-y-2 text-sm text-sport-text-muted">
          <p>📧 Email: brylop71@gmail.com</p>
          <p>📱 WhatsApp: +57 3128463555</p>
          <p>🌐 Síguenos en redes sociales para las últimas novedades</p>
        </div>
      </div>
    </div>
  );
}