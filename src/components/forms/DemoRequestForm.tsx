import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Rocket } from "lucide-react";

const demoSchema = z.object({
  fullName: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(10, "Teléfono inválido").max(20),
  organizationType: z.string().min(1, "Selecciona el tipo de organización"),
  organizationName: z.string().trim().min(1, "El nombre de la organización es requerido").max(100),
  studentCount: z.string().min(1, "Selecciona el número de estudiantes/usuarios"),
  message: z.string().trim().max(500).optional()
});

type DemoFormData = z.infer<typeof demoSchema>;

interface DemoRequestFormProps {
  onSuccess?: () => void;
  source?: string;
}

export function DemoRequestForm({ onSuccess, source = "demo" }: DemoRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema)
  });

  const organizationType = watch("organizationType");
  const studentCount = watch("studentCount");

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('submit-contact-message', {
        body: {
          name: data.fullName,
          email: data.email,
          subject: `Demo Request - ${data.organizationType} - ${data.organizationName}`,
          category: "demo_request",
          message: `
Tipo: ${data.organizationType}
Organización: ${data.organizationName}
Teléfono: ${data.phone}
Usuarios/Estudiantes: ${data.studentCount}
Fuente: ${source}
${data.message ? `\nMensaje adicional: ${data.message}` : ''}
          `.trim()
        }
      });

      if (error) throw error;

      toast.success("¡Solicitud de demo enviada!", {
        description: "Te contactaremos en menos de 24 horas para coordinar tu demo personalizada."
      });
      
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast.error("Error al enviar", {
        description: "Por favor intenta nuevamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-sport-primary/20 flex items-center justify-center">
          <Rocket className="w-6 h-6 text-sport-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Solicita tu Demo Personalizada</h3>
          <p className="text-sm text-muted-foreground">Te mostraremos cómo SportMaps puede transformar tu gestión</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName">Nombre Completo *</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Tu nombre"
            className="mt-1"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="correo@ejemplo.com"
            className="mt-1"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="+57 300 123 4567"
            className="mt-1"
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label>Tipo de Organización *</Label>
          <Select onValueChange={(value) => setValue("organizationType", value)} value={organizationType}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="escuela_deportiva">Escuela Deportiva</SelectItem>
              <SelectItem value="academia">Academia / Club</SelectItem>
              <SelectItem value="federacion">Federación / Liga</SelectItem>
              <SelectItem value="gimnasio">Gimnasio / Centro Fitness</SelectItem>
              <SelectItem value="entrenador">Entrenador Individual</SelectItem>
              <SelectItem value="nutricionista">Nutricionista / Bienestar</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.organizationType && (
            <p className="text-sm text-destructive mt-1">{errors.organizationType.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="organizationName">Nombre de la Organización *</Label>
          <Input
            id="organizationName"
            {...register("organizationName")}
            placeholder="Tu escuela o negocio"
            className="mt-1"
          />
          {errors.organizationName && (
            <p className="text-sm text-destructive mt-1">{errors.organizationName.message}</p>
          )}
        </div>

        <div>
          <Label>Número de Estudiantes/Usuarios *</Label>
          <Select onValueChange={(value) => setValue("studentCount", value)} value={studentCount}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Selecciona..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-50">1 - 50</SelectItem>
              <SelectItem value="51-100">51 - 100</SelectItem>
              <SelectItem value="101-200">101 - 200</SelectItem>
              <SelectItem value="201-500">201 - 500</SelectItem>
              <SelectItem value="500+">Más de 500</SelectItem>
            </SelectContent>
          </Select>
          {errors.studentCount && (
            <p className="text-sm text-destructive mt-1">{errors.studentCount.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Mensaje Adicional (Opcional)</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="¿Tienes alguna pregunta específica o necesidad particular?"
          className="mt-1 min-h-[80px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sport-primary hover:bg-sport-primary/90"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar Demo Gratuita"
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Al enviar, aceptas nuestra política de privacidad. Te contactaremos en menos de 24 horas.
      </p>
    </form>
  );
}