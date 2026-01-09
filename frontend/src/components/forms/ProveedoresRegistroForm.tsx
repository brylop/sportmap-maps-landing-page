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
import { FormSuccessAnimation } from "./FormSuccessAnimation";

const proveedoresSchema = z.object({
  companyName: z.string()
    .min(2, "Nombre de empresa requerido (mínimo 2 caracteres)")
    .max(100, "Nombre muy largo (máximo 100 caracteres)")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\-0-9]+$/, "Solo letras, números y caracteres básicos"),
  contactName: z.string()
    .min(2, "Nombre de contacto requerido (mínimo 2 caracteres)")
    .max(100, "Nombre muy largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo letras y espacios"),
  email: z.string()
    .email("Email inválido")
    .max(255, "Email muy largo")
    .toLowerCase(),
  phone: z.string()
    .min(7, "Teléfono requerido (mínimo 7 dígitos)")
    .max(20, "Teléfono muy largo")
    .regex(/^[\d\s\+\-\(\)]+$/, "Formato de teléfono inválido"),
  serviceType: z.string().min(1, "Selecciona tipo de servicio"),
  city: z.string()
    .min(2, "Ciudad requerida")
    .max(100, "Ciudad muy larga")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-]+$/, "Solo letras"),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  description: z.string().max(500, "Descripción muy larga (máximo 500 caracteres)").optional(),
});

type ProveedoresFormData = z.infer<typeof proveedoresSchema>;

interface ProveedoresRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function ProveedoresRegistroForm({ onSuccess, planSelected }: ProveedoresRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ProveedoresFormData>({
    resolver: zodResolver(proveedoresSchema),
  });

  const serviceTypeValue = watch("serviceType");

  const onSubmit = async (data: ProveedoresFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-provider-application', {
        body: {
          business_name: data.companyName.trim(),
          contact_name: data.contactName.trim(),
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim(),
          website: data.website?.trim() || null,
          partner_type: 'proveedor',
          business_description: `Tipo: ${data.serviceType} | Ciudad: ${data.city} | Plan: ${planSelected || 'No especificado'} | ${data.description || ''}`.trim(),
        }
      });

      if (error) throw error;

      setShowSuccess(true);
      reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error("Error al enviar", {
        description: error.message || "Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onSuccess?.();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Nombre de la Empresa *</Label>
            <Input
              id="companyName"
              placeholder="Ej: Logística Deportiva S.A."
              {...register("companyName")}
              className="bg-background"
              maxLength={100}
            />
            {errors.companyName && <p className="text-destructive text-sm">{errors.companyName.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName">Nombre de Contacto *</Label>
            <Input
              id="contactName"
              placeholder="Tu nombre completo"
              {...register("contactName")}
              className="bg-background"
              maxLength={100}
            />
            {errors.contactName && <p className="text-destructive text-sm">{errors.contactName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Corporativo *</Label>
            <Input
              id="email"
              type="email"
              placeholder="contacto@empresa.com"
              {...register("email")}
              className="bg-background"
              maxLength={255}
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
              maxLength={20}
            />
            {errors.phone && <p className="text-destructive text-sm">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Tipo de Servicio *</Label>
            <Select value={serviceTypeValue} onValueChange={(value) => setValue("serviceType", value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecciona tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="logistica">Logística y Transporte</SelectItem>
                <SelectItem value="equipamiento">Equipamiento Deportivo</SelectItem>
                <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                <SelectItem value="seguros">Seguros Deportivos</SelectItem>
                <SelectItem value="eventos">Eventos y Producción</SelectItem>
                <SelectItem value="tecnologia">Tecnología</SelectItem>
                <SelectItem value="uniformes">Uniformes y Confección</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && <p className="text-destructive text-sm">{errors.serviceType.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">Ciudad *</Label>
            <Input
              id="city"
              placeholder="Bogotá, Medellín..."
              {...register("city")}
              className="bg-background"
              maxLength={100}
            />
            {errors.city && <p className="text-destructive text-sm">{errors.city.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Sitio Web (opcional)</Label>
          <Input
            id="website"
            placeholder="https://tuempresa.com"
            {...register("website")}
            className="bg-background"
          />
          {errors.website && <p className="text-destructive text-sm">{errors.website.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe tus servicios (opcional)</Label>
          <Textarea
            id="description"
            placeholder="Servicios principales, cobertura, experiencia..."
            {...register("description")}
            className="bg-background min-h-[80px]"
            maxLength={500}
          />
          <p className="text-xs text-muted-foreground text-right">
            {watch("description")?.length || 0}/500
          </p>
        </div>

        <Button type="submit" className="w-full bg-sport-primary hover:bg-sport-primary/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Registrar mi Empresa"
          )}
        </Button>
      </form>

      <FormSuccessAnimation 
        isVisible={showSuccess}
        title="¡Empresa Registrada!"
        message="Tu solicitud ha sido enviada. Revisaremos tu información y te contactaremos pronto."
        onClose={handleSuccessClose}
      />
    </>
  );
}