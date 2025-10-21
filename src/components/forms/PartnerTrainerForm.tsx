import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Megaphone } from "lucide-react";

const trainerSchema = z.object({
  businessName: z.string().trim().min(1, "Tu nombre profesional es requerido").max(100),
  contactName: z.string().trim().min(1, "El nombre completo es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(10, "Teléfono inválido").max(20),
  businessDescription: z.string().trim().min(20, "Describe tu experiencia (mínimo 20 caracteres)").max(1000),
  experienceYears: z.string().trim().min(1, "Los años de experiencia son requeridos"),
  website: z.string().trim().url("URL inválida").optional().or(z.literal(""))
});

type TrainerFormData = z.infer<typeof trainerSchema>;

interface PartnerTrainerFormProps {
  onSuccess?: () => void;
}

export function PartnerTrainerForm({ onSuccess }: PartnerTrainerFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TrainerFormData>({
    resolver: zodResolver(trainerSchema)
  });

  const onSubmit = async (data: TrainerFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke('submit-trainer-application', {
        body: {
          businessName: data.businessName,
          contactName: data.contactName,
          email: data.email,
          phone: data.phone,
          businessDescription: data.businessDescription,
          experienceYears: parseInt(data.experienceYears),
          website: data.website || null
        }
      });

      if (error) throw error;

      toast.success("¡Solicitud enviada!", {
        description: "Nos pondremos en contacto contigo pronto."
      });
      
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Error submitting trainer application:', error);
      toast.error("Error al enviar", {
        description: "Por favor intenta nuevamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-sport-accent/20 flex items-center justify-center">
          <Megaphone className="w-6 h-6 text-sport-accent" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-sport-text">Entrenadores & Profesionales</h3>
          <p className="text-sm text-sport-text/70">Herramientas para crecer tu negocio</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="businessName">Nombre Profesional *</Label>
          <Input
            id="businessName"
            {...register("businessName")}
            placeholder="Ej: Coach Juan Pérez - Entrenamiento Funcional"
            className="mt-1"
          />
          {errors.businessName && (
            <p className="text-sm text-red-500 mt-1">{errors.businessName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="contactName">Nombre Completo *</Label>
          <Input
            id="contactName"
            {...register("contactName")}
            placeholder="Tu nombre completo"
            className="mt-1"
          />
          {errors.contactName && (
            <p className="text-sm text-red-500 mt-1">{errors.contactName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="+57 300 123 4567"
              className="mt-1"
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="experienceYears">Años de Experiencia *</Label>
            <Input
              id="experienceYears"
              type="number"
              min="0"
              {...register("experienceYears")}
              placeholder="5"
              className="mt-1"
            />
            {errors.experienceYears && (
              <p className="text-sm text-red-500 mt-1">{errors.experienceYears.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="website">Portfolio / LinkedIn</Label>
            <Input
              id="website"
              type="url"
              {...register("website")}
              placeholder="https://linkedin.com/in/tu-perfil"
              className="mt-1"
            />
            {errors.website && (
              <p className="text-sm text-red-500 mt-1">{errors.website.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="businessDescription">Experiencia y Especialización *</Label>
          <Textarea
            id="businessDescription"
            {...register("businessDescription")}
            placeholder="Cuéntanos sobre tu experiencia, certificaciones, especialización deportiva, metodología de entrenamiento..."
            className="mt-1 min-h-[120px]"
          />
          {errors.businessDescription && (
            <p className="text-sm text-red-500 mt-1">{errors.businessDescription.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sport-accent hover:bg-sport-accent/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar Solicitud"
        )}
      </Button>
    </form>
  );
}