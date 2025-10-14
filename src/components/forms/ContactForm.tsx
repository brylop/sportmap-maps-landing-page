import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
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
      // Check if Supabase is properly configured
      if (!isSupabaseConfigured) {
        toast({
          title: "Configuración pendiente",
          description: "Supabase no está configurado. Conecta tu proyecto primero.",
          variant: "destructive",
        });
        return;
      }

      // Insert into the contact_messages table
      const { data, error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          category: formData.category,
          message: formData.message
        })
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Send email notification via Resend
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer re_123456789', // You'll need to replace this
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'SportMaps <onboarding@resend.dev>',
            to: ['brylop71@gmail.com'],
            subject: `Nuevo mensaje de contacto: ${formData.subject}`,
            html: `
              <h2>Nuevo mensaje de contacto recibido</h2>
              <p><strong>Nombre:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Asunto:</strong> ${formData.subject}</p>
              <p><strong>Categoría:</strong> ${formData.category}</p>
              <p><strong>Mensaje:</strong></p>
              <p>${formData.message}</p>
            `
          })
        });
      } catch (emailError) {
        console.log('Email notification failed, but form was saved:', emailError);
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
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="Describe tu consulta o mensaje en detalle..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="bg-sport-surface border-sport-border focus:border-sport-primary min-h-[150px]"
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