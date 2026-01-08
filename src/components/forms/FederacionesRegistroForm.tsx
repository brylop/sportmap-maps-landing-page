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

const federacionesSchema = z.object({
  organizationName: z.string().min(2, "Nombre de organización requerido").max(100),
  contactName: z.string().min(2, "Nombre de contacto requerido").max(100),
  position: z.string().min(2, "Cargo requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(7, "Teléfono requerido").max(20),
  organizationType: z.string().min(1, "Selecciona tipo de organización"),
  sport: z.string().min(1, "Selecciona deporte principal"),
  clubCount: z.string().min(1, "Selecciona cantidad de clubes"),
  description: z.string().max(500).optional(),
});

type FederacionesFormData = z.infer<typeof federacionesSchema>;

interface FederacionesRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function FederacionesRegistroForm({ onSuccess, planSelected }: FederacionesRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FederacionesFormData>({
    resolver: zodResolver(federacionesSchema),
  });

  const onSubmit = async (data: FederacionesFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-provider-application', {
        body: {
          business_name: data.organizationName,
          contact_name: data.contactName,
          email: data.email,
          phone: data.phone,
          business_description: `Tipo: ${data.organizationType} | Cargo: ${data.position} | Deporte: ${data.sport} | Clubes: ${data.clubCount} | Plan: ${planSelected || 'No especificado'} | Categoría: Federación | ${data.description || ''}`,
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
          <Label htmlFor="organizationName">Nombre de la Organización *</Label>
          <Input
            id="organizationName"
            placeholder="Ej: Federación Colombiana de Fútbol"
            {...register("organizationName")}
            className="bg-background"
          />
          {errors.organizationName && <p className="text-destructive text-sm">{errors.organizationName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Tipo de Organización *</Label>
          <Select onValueChange={(value) => setValue("organizationType", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="federacion">Federación Nacional</SelectItem>
              <SelectItem value="liga">Liga Departamental</SelectItem>
              <SelectItem value="asociacion">Asociación Regional</SelectItem>
              <SelectItem value="club-matriz">Club Matriz</SelectItem>
              <SelectItem value="torneo">Organizador de Torneos</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.organizationType && <p className="text-destructive text-sm">{errors.organizationType.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="contactName">Nombre del Representante *</Label>
          <Input
            id="contactName"
            placeholder="Tu nombre completo"
            {...register("contactName")}
            className="bg-background"
          />
          {errors.contactName && <p className="text-destructive text-sm">{errors.contactName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Cargo *</Label>
          <Input
            id="position"
            placeholder="Ej: Director, Presidente..."
            {...register("position")}
            className="bg-background"
          />
          {errors.position && <p className="text-destructive text-sm">{errors.position.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Institucional *</Label>
          <Input
            id="email"
            type="email"
            placeholder="contacto@federacion.org"
            {...register("email")}
            className="bg-background"
          />
          {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono *</Label>
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
          <Label>Deporte Principal *</Label>
          <Select onValueChange={(value) => setValue("sport", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona deporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="futbol">Fútbol</SelectItem>
              <SelectItem value="baloncesto">Baloncesto</SelectItem>
              <SelectItem value="voleibol">Voleibol</SelectItem>
              <SelectItem value="natacion">Natación</SelectItem>
              <SelectItem value="atletismo">Atletismo</SelectItem>
              <SelectItem value="ciclismo">Ciclismo</SelectItem>
              <SelectItem value="tenis">Tenis</SelectItem>
              <SelectItem value="artes-marciales">Artes Marciales</SelectItem>
              <SelectItem value="multideporte">Multideporte</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.sport && <p className="text-destructive text-sm">{errors.sport.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Cantidad de Clubes Afiliados *</Label>
          <Select onValueChange={(value) => setValue("clubCount", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona rango" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1 - 10 clubes</SelectItem>
              <SelectItem value="11-50">11 - 50 clubes</SelectItem>
              <SelectItem value="51-100">51 - 100 clubes</SelectItem>
              <SelectItem value="100+">Más de 100 clubes</SelectItem>
            </SelectContent>
          </Select>
          {errors.clubCount && <p className="text-destructive text-sm">{errors.clubCount.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Cuéntanos sobre tu organización (opcional)</Label>
        <Textarea
          id="description"
          placeholder="Historia, torneos que organizan, cobertura regional..."
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
          "Registrar mi Organización"
        )}
      </Button>
    </form>
  );
}