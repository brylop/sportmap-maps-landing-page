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

const escuelasSchema = z.object({
  schoolName: z.string().min(2, "Nombre de escuela requerido").max(100),
  contactName: z.string().min(2, "Nombre de contacto requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(7, "Teléfono requerido").max(20),
  city: z.string().min(2, "Ciudad requerida").max(100),
  sportType: z.string().min(1, "Selecciona un deporte"),
  studentCount: z.string().min(1, "Selecciona cantidad de alumnos"),
  description: z.string().max(500).optional(),
});

type EscuelasFormData = z.infer<typeof escuelasSchema>;

interface EscuelasRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function EscuelasRegistroForm({ onSuccess, planSelected }: EscuelasRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<EscuelasFormData>({
    resolver: zodResolver(escuelasSchema),
  });

  const onSubmit = async (data: EscuelasFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-school-application', {
        body: {
          business_name: data.schoolName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          business_description: `Ciudad: ${data.city} | Deporte: ${data.sportType} | Alumnos: ${data.studentCount} | Plan: ${planSelected || 'No especificado'} | ${data.description || ''}`,
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
          <Label htmlFor="schoolName">Nombre de la Escuela *</Label>
          <Input
            id="schoolName"
            placeholder="Ej: Academia Fútbol Elite"
            {...register("schoolName")}
            className="bg-background"
          />
          {errors.schoolName && <p className="text-destructive text-sm">{errors.schoolName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactName">Nombre de Contacto *</Label>
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
            placeholder="correo@escuela.com"
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
          <Label>Deporte Principal *</Label>
          <Select onValueChange={(value) => setValue("sportType", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona deporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="futbol">Fútbol</SelectItem>
              <SelectItem value="natacion">Natación</SelectItem>
              <SelectItem value="baloncesto">Baloncesto</SelectItem>
              <SelectItem value="tenis">Tenis</SelectItem>
              <SelectItem value="ciclismo">Ciclismo</SelectItem>
              <SelectItem value="artes-marciales">Artes Marciales</SelectItem>
              <SelectItem value="atletismo">Atletismo</SelectItem>
              <SelectItem value="multideporte">Multideporte</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.sportType && <p className="text-destructive text-sm">{errors.sportType.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Cantidad de Alumnos *</Label>
        <Select onValueChange={(value) => setValue("studentCount", value)}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Selecciona rango" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-20">1 - 20 alumnos</SelectItem>
            <SelectItem value="21-50">21 - 50 alumnos</SelectItem>
            <SelectItem value="51-100">51 - 100 alumnos</SelectItem>
            <SelectItem value="101-200">101 - 200 alumnos</SelectItem>
            <SelectItem value="200+">Más de 200 alumnos</SelectItem>
          </SelectContent>
        </Select>
        {errors.studentCount && <p className="text-destructive text-sm">{errors.studentCount.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Cuéntanos más sobre tu escuela (opcional)</Label>
        <Textarea
          id="description"
          placeholder="Deportes que enseñan, horarios, instalaciones..."
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
          "Registrar mi Escuela"
        )}
      </Button>
    </form>
  );
}