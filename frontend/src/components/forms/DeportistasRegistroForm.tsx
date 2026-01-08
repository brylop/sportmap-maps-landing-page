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

const deportistasSchema = z.object({
  fullName: z.string().min(2, "Nombre completo requerido").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().min(7, "Teléfono requerido").max(20),
  sport: z.string().min(1, "Selecciona un deporte"),
  level: z.string().min(1, "Selecciona tu nivel"),
  city: z.string().min(2, "Ciudad requerida").max(100),
  goals: z.string().max(500).optional(),
});

type DeportistasFormData = z.infer<typeof deportistasSchema>;

interface DeportistasRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function DeportistasRegistroForm({ onSuccess, planSelected }: DeportistasRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<DeportistasFormData>({
    resolver: zodResolver(deportistasSchema),
  });

  const onSubmit = async (data: DeportistasFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-join-application', {
        body: {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          interests: data.sport,
          experience: data.level,
          motivation: `Ciudad: ${data.city} | Plan: ${planSelected || 'No especificado'} | Objetivos: ${data.goals || 'No especificados'}`,
        }
      });

      if (error) throw error;

      toast.success("¡Registro enviado!", {
        description: "Bienvenido al ecosistema SportMaps.",
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
            placeholder="tu@correo.com"
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
          <Label>Deporte Principal *</Label>
          <Select onValueChange={(value) => setValue("sport", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona deporte" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ciclismo">Ciclismo</SelectItem>
              <SelectItem value="running">Running / Atletismo</SelectItem>
              <SelectItem value="natacion">Natación</SelectItem>
              <SelectItem value="futbol">Fútbol</SelectItem>
              <SelectItem value="baloncesto">Baloncesto</SelectItem>
              <SelectItem value="tenis">Tenis</SelectItem>
              <SelectItem value="crossfit">CrossFit / Funcional</SelectItem>
              <SelectItem value="triathlon">Triatlón</SelectItem>
              <SelectItem value="senderismo">Senderismo / Trail</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.sport && <p className="text-destructive text-sm">{errors.sport.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Nivel *</Label>
          <Select onValueChange={(value) => setValue("level", value)}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Selecciona nivel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="principiante">Principiante</SelectItem>
              <SelectItem value="intermedio">Intermedio</SelectItem>
              <SelectItem value="avanzado">Avanzado</SelectItem>
              <SelectItem value="profesional">Profesional</SelectItem>
            </SelectContent>
          </Select>
          {errors.level && <p className="text-destructive text-sm">{errors.level.message}</p>}
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
        <Label htmlFor="goals">¿Cuáles son tus objetivos? (opcional)</Label>
        <Textarea
          id="goals"
          placeholder="Mejorar rendimiento, encontrar rutas, conectar con entrenadores..."
          {...register("goals")}
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
          "Crear mi Perfil de Atleta"
        )}
      </Button>
    </form>
  );
}