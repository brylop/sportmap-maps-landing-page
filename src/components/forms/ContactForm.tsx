import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Send, User, Mail, MessageSquare, HelpCircle } from "lucide-react";
import { contactSchema, isHoneypotValid } from "@/lib/validation";

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
    message: "",
    website: "" // Honeypot field
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - si está lleno, es un bot
    if (!isHoneypotValid(formData.website)) {
      // Silently reject - don't reveal to bots
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });
      onClose?.();
      return;
    }

    // Validación con zod
    if (!validateForm()) {
      toast({
        title: "Error de validación",
        description: "Por favor, corrige los errores en el formulario.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-message', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          category: formData.category,
          message: formData.message.trim()
        }
      });

      if (error) {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (data?.error) {
        toast({
          title: "Error de validación",
          description: "Verifica que todos los campos cumplan con los requisitos.",
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
        message: "",
        website: ""
      });
      
      onClose?.();
    } catch {
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
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
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
        {/* Honeypot field - hidden from users */}
        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => handleInputChange("website", e.target.value)}
          />
        </div>

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
              maxLength={100}
              className={`bg-sport-surface border-sport-border focus:border-sport-primary ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
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
              maxLength={255}
              className={`bg-sport-surface border-sport-border focus:border-sport-primary ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category" className="flex items-center space-x-2">
              <HelpCircle className="w-4 h-4" />
              <span>Categoría</span>
            </Label>
            <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
              <SelectTrigger className={`bg-sport-surface border-sport-border ${errors.category ? 'border-red-500' : ''}`}>
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
            {errors.category && <p className="text-red-500 text-xs">{errors.category}</p>}
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
              maxLength={200}
              className={`bg-sport-surface border-sport-border focus:border-sport-primary ${errors.subject ? 'border-red-500' : ''}`}
            />
            {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
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
            className={`bg-sport-surface border-sport-border focus:border-sport-primary min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
            maxLength={2000}
            required
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
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
          <p>📧 Email: <a href="mailto:spoortmaps@gmail.com" className="hover:text-sport-primary">spoortmaps@gmail.com</a></p>
          <p>📱 WhatsApp: <a href="https://wa.me/573128463555" target="_blank" rel="noopener noreferrer" className="hover:text-sport-primary">+57 312 846 3555</a></p>
          <p>🌐 Síguenos: <a href="https://www.instagram.com/spoortmaps/" target="_blank" rel="noopener noreferrer" className="hover:text-sport-primary">Instagram</a> · <a href="https://x.com/spoort_maps" target="_blank" rel="noopener noreferrer" className="hover:text-sport-primary">X</a> · <a href="https://www.facebook.com/profile.php?id=61583784419106" target="_blank" rel="noopener noreferrer" className="hover:text-sport-primary">Facebook</a></p>
        </div>
      </div>
    </div>
  );
}
