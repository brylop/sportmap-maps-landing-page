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

const entrenadoresSchema = z.object({
  fullName: z.string().min(2, "Nombre completo requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(7, "Teléfono requerido").max(20),
  specialty: z.string().min(1, "Selecciona una especialidad"),
  experienceYears: z.string().min(1, "Selecciona años de experiencia"),
  city: z.string().min(2, "Ciudad requerida").max(100),
  certifications: z.string().max(300).optional(),
  description: z.string().max(500).optional(),
});

type EntrenadoresFormData = z.infer<typeof entrenadoresSchema>;

interface EntrenadoresRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function EntrenadoresRegistroForm({ onSuccess, planSelected }: EntrenadoresRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<EntrenadoresFormData>({
    resolver: zodResolver(entrenadoresSchema),
  });

  const onSubmit = async (data: EntrenadoresFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-trainer-application', {
        body: {
          business_name: `Entrenador: ${data.fullName}`,
          contact_name: data.fullName,
          email: data.email,
          phone: data.phone,
          experience_years: parseInt(data.experienceYears) || 0,
          business_description: `Especialidad: ${data.specialty} | Ciudad: ${data.city} | Plan: ${planSelected || 'No especificado'} | Certificaciones: ${data.certifications || 'N/A'} | ${data.description || ''}`,
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
      <div className="space-y-2">
        <Label htmlFor="fullName">Nombre Completo *</Label>
        <Input
          id="fullName"
          placeholder="Tu nombre completo"
          {...register("fullName")}
          className="bg-background"
        />
        {errors.fullName && <p className="text-destructive text-sm">{errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="correo@entrenador.com"
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
          <Label>Especialidad *</Label>
          <Select onValueChange={(value) => setValue("specialty", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona especialidad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal-trainer">Personal Trainer</SelectItem>
              <SelectItem value="futbol">Entrenador de Fútbol</SelectItem>
              <SelectItem value="natacion">Entrenador de Natación</SelectItem>
              <SelectItem value="atletismo">Entrenador de Atletismo</SelectItem>
              <SelectItem value="ciclismo">Entrenador de Ciclismo</SelectItem>
              <SelectItem value="crossfit">CrossFit / Funcional</SelectItem>
              <SelectItem value="artes-marciales">Artes Marciales</SelectItem>
              <SelectItem value="yoga-pilates">Yoga / Pilates</SelectItem>
              <SelectItem value="multideporte">Multideporte</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.specialty && <p className="text-destructive text-sm">{errors.specialty.message}</p>}
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
          placeholder="Ej: NSCA, ACE, certificaciones locales..."
          {...register("certifications")}
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Sobre ti y tus servicios (opcional)</Label>
        <Textarea
          id="description"
          placeholder="Tu experiencia, métodos de entrenamiento, logros..."
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
          "Registrarme como Entrenador"
        )}
      </Button>
    </form>
  );
}