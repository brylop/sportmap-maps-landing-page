import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const serviciosSchema = z.object({
  serviceName: z.string().min(2, "Nombre del servicio requerido").max(100),
  contactName: z.string().min(2, "Nombre de contacto requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(7, "Teléfono requerido").max(20),
  serviceType: z.string().min(1, "Selecciona tipo de servicio"),
  experienceYears: z.string().min(1, "Selecciona años de experiencia"),
  city: z.string().min(2, "Ciudad requerida").max(100),
  certifications: z.string().max(300).optional(),
  description: z.string().max(500).optional(),
});

type ServiciosFormData = z.infer<typeof serviciosSchema>;

interface ServiciosRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function ServiciosRegistroForm({ onSuccess, planSelected }: ServiciosRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ServiciosFormData>({
    resolver: zodResolver(serviciosSchema),
  });

  const onSubmit = async (data: ServiciosFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-provider-application', {
        body: {
          business_name: data.serviceName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          experience_years: parseInt(data.experienceYears) || 0,
          business_description: `Tipo: ${data.serviceType} | Ciudad: ${data.city} | Plan: ${planSelected || 'No especificado'} | Certificaciones: ${data.certifications || 'N/A'} | Categoría: Servicio | ${data.description || ''}`,
        }
      });

      if (error) throw error;

      toast.success("¡Registro enviado!", {
        description: "Nos pondremos en contacto contigo pronto.",
      });
      reset();
      onSuccess?.();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Error al enviar", {
        description: "Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="serviceName">Nombre del Servicio/Consultorio *</Label>
          <Input
            id="serviceName"
            placeholder="Ej: Centro de Fisioterapia Deportiva"
            {...register("serviceName")}
            className="bg-background"
          />
          {errors.serviceName && <p className="text-destructive text-sm">{errors.serviceName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactName">Nombre Profesional *</Label>
          <Input
            id="contactName"
            placeholder="Tu nombre completo"
            {...register("contactName")}
            className="bg-background"
          />
          {errors.contactName && <p className="text-destructive text-sm">{errors.contactName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="correo@servicio.com"
            {...register("email")}
            className="bg-background"
          />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
          <Input
            id="phone"
            placeholder="+57 300 123 4567"
            {...register("phone")}
            className="bg-background"
          />
          {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Tipo de Servicio *</Label>
          <Select onValueChange={(value) => setValue("serviceType", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nutricion">Nutrición Deportiva</SelectItem>
              <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
              <SelectItem value="psicologia">Psicología Deportiva</SelectItem>
              <SelectItem value="medicina">Medicina Deportiva</SelectItem>
              <SelectItem value="rehabilitacion">Rehabilitación</SelectItem>
              <SelectItem value="masajes">Masajes Terapéuticos</SelectItem>
              <SelectItem value="coaching">Coaching Mental</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && <p className="text-destructive text-sm">{errors.serviceType.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Años de Experiencia *</Label>
          <Select onValueChange={(value) => setValue("experienceYears", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona experiencia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 - 2 años</SelectItem>
              <SelectItem value="3">3 - 5 años</SelectItem>
              <SelectItem value="6">6 - 10 años</SelectItem>
              <SelectItem value="10">Más de 10 años</SelectItem>
            </SelectContent>
          </Select>
          {errors.experienceYears && <p className="text-destructive text-sm">{errors.experienceYears.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Ciudad *</Label>
        <Input
          id="city"
          placeholder="Bogotá, Medellín..."
          {...register("city")}
          className="bg-background"
        />
        {errors.city && <p className="text-destructive text-sm">{errors.city.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certificaciones (opcional)</Label>
        <Input
          id="certifications"
          placeholder="Ej: Título profesional, especializaciones..."
          {...register("certifications")}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Describe tus servicios (opcional)</Label>
        <Textarea
          id="description"
          placeholder="Servicios que ofreces, metodología, horarios..."
          {...register("description")}
          className="bg-background min-h-[80px]"
        />
      </div>

      <Button type="submit" className="w-full bg-sport-primary hover:bg-sport-primary/90" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Registrar mi Servicio"
        )}
      </Button>
    </form>
  );
}