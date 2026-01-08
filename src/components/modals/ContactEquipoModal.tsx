import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Users, Building2, Mail, Phone, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ContactEquipoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

const organizationTypes = [
  { value: "escuela", label: "Escuela Deportiva" },
  { value: "federacion", label: "Federación / Liga" },
  { value: "club", label: "Club Deportivo" },
  { value: "gimnasio", label: "Gimnasio / Centro Fitness" },
  { value: "empresa", label: "Empresa / Corporativo" },
  { value: "gobierno", label: "Entidad Gubernamental" },
  { value: "otro", label: "Otro" },
];

const teamSizes = [
  { value: "1-10", label: "1-10 personas" },
  { value: "11-50", label: "11-50 personas" },
  { value: "51-200", label: "51-200 personas" },
  { value: "201-500", label: "201-500 personas" },
  { value: "500+", label: "Más de 500 personas" },
];

export function ContactEquipoModal({ isOpen, onClose, preselectedCategory }: ContactEquipoModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    organizationName: "",
    email: "",
    phone: "",
    organizationType: "",
    teamSize: "",
    currentChallenges: "",
    desiredFeatures: "",
    budget: "",
    timeline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.contactName,
        email: formData.email,
        subject: `Plan Personalizado - ${formData.organizationName}`,
        category: "plan_personalizado",
        message: `
📋 SOLICITUD DE PLAN PERSONALIZADO

👤 Contacto: ${formData.contactName}
🏢 Organización: ${formData.organizationName}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}

📊 DETALLES DE LA ORGANIZACIÓN
• Tipo: ${organizationTypes.find(t => t.value === formData.organizationType)?.label || formData.organizationType}
• Tamaño del equipo: ${teamSizes.find(t => t.value === formData.teamSize)?.label || formData.teamSize}
${preselectedCategory ? `• Categoría de interés: ${preselectedCategory}` : ''}

🎯 NECESIDADES
• Desafíos actuales: ${formData.currentChallenges}
• Funcionalidades deseadas: ${formData.desiredFeatures}

💰 INFORMACIÓN ADICIONAL
• Presupuesto estimado: ${formData.budget || 'No especificado'}
• Timeline de implementación: ${formData.timeline || 'No especificado'}
        `.trim(),
      });

      if (error) throw error;

      toast({
        title: "¡Solicitud enviada!",
        description: "Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.",
      });

      // Reset form and close
      setFormData({
        contactName: "",
        organizationName: "",
        email: "",
        phone: "",
        organizationType: "",
        teamSize: "",
        currentChallenges: "",
        desiredFeatures: "",
        budget: "",
        timeline: "",
      });
      onClose();
    } catch (error: any) {
      toast({
        title: "Error al enviar",
        description: error.message || "Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader className="text-center pb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sport-primary to-sport-accent flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          <DialogTitle className="text-2xl font-bold">
            Plan Personalizado para tu Organización
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Cuéntanos sobre tu organización y te diseñaremos una solución a medida
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact & Organization Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sport-primary" />
                Tu nombre *
              </Label>
              <Input
                id="contactName"
                placeholder="Juan Pérez"
                value={formData.contactName}
                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                required
                className="bg-muted/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizationName" className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sport-primary" />
                Nombre de la organización *
              </Label>
              <Input
                id="organizationName"
                placeholder="Academia Deportiva Elite"
                value={formData.organizationName}
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                required
                className="bg-muted/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sport-primary" />
                Email corporativo *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="contacto@tuempresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sport-primary" />
                Teléfono / WhatsApp *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+57 300 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-muted/50"
              />
            </div>
          </div>

          {/* Organization Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Tipo de organización *</Label>
              <Select
                value={formData.organizationType}
                onValueChange={(value) => setFormData({ ...formData, organizationType: value })}
                required
              >
                <SelectTrigger className="bg-muted/50">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  {organizationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tamaño del equipo *</Label>
              <Select
                value={formData.teamSize}
                onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
                required
              >
                <SelectTrigger className="bg-muted/50">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  {teamSizes.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Needs */}
          <div className="space-y-2">
            <Label htmlFor="currentChallenges" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sport-primary" />
              ¿Cuáles son tus principales desafíos actuales? *
            </Label>
            <Textarea
              id="currentChallenges"
              placeholder="Ej: Gestión manual de inscripciones, comunicación ineficiente con padres, falta de reportes..."
              value={formData.currentChallenges}
              onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
              required
              rows={3}
              className="bg-muted/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="desiredFeatures">
              ¿Qué funcionalidades te gustaría tener? *
            </Label>
            <Textarea
              id="desiredFeatures"
              placeholder="Ej: Sistema de pagos online, app para móviles, reportes automáticos, integración con calendario..."
              value={formData.desiredFeatures}
              onChange={(e) => setFormData({ ...formData, desiredFeatures: e.target.value })}
              required
              rows={3}
              className="bg-muted/50"
            />
          </div>

          {/* Optional info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto estimado mensual (opcional)</Label>
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData({ ...formData, budget: value })}
              >
                <SelectTrigger className="bg-muted/50">
                  <SelectValue placeholder="Selecciona un rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="menos-200k">Menos de $200.000 COP</SelectItem>
                  <SelectItem value="200k-500k">$200.000 - $500.000 COP</SelectItem>
                  <SelectItem value="500k-1m">$500.000 - $1.000.000 COP</SelectItem>
                  <SelectItem value="1m-2m">$1.000.000 - $2.000.000 COP</SelectItem>
                  <SelectItem value="mas-2m">Más de $2.000.000 COP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">¿Cuándo te gustaría implementar? (opcional)</Label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => setFormData({ ...formData, timeline: value })}
              >
                <SelectTrigger className="bg-muted/50">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inmediato">Inmediatamente</SelectItem>
                  <SelectItem value="1-mes">En el próximo mes</SelectItem>
                  <SelectItem value="1-3-meses">En 1-3 meses</SelectItem>
                  <SelectItem value="3-6-meses">En 3-6 meses</SelectItem>
                  <SelectItem value="explorando">Solo estoy explorando</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-sport-primary to-sport-accent hover:opacity-90"
            >
              {isSubmitting ? "Enviando..." : "Solicitar plan personalizado"}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Al enviar, aceptas que te contactemos para discutir tu plan personalizado.
            Respuesta garantizada en menos de 24 horas.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}