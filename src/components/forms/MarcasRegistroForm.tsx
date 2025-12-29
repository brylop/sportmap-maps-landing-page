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

const marcasSchema = z.object({
  brandName: z.string()
    .min(2, "Nombre de marca requerido (mínimo 2 caracteres)")
    .max(100, "Nombre muy largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\-0-9]+$/, "Solo letras, números y caracteres básicos"),
  contactName: z.string()
    .min(2, "Nombre de contacto requerido")
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
  category: z.string().min(1, "Selecciona una categoría"),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  description: z.string().max(500, "Descripción muy larga").optional(),
});

type MarcasFormData = z.infer<typeof marcasSchema>;

interface MarcasRegistroFormProps {
  onSuccess?: () => void;
  planSelected?: string;
}

export function MarcasRegistroForm({ onSuccess, planSelected }: MarcasRegistroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<MarcasFormData>({
    resolver: zodResolver(marcasSchema),
  });

  const categoryValue = watch("category");

  const onSubmit = async (data: MarcasFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-provider-application', {
        body: {
          business_name: data.brandName.trim(),
          contact_name: data.contactName.trim(),
          email: data.email.trim().toLowerCase(),
          phone: data.phone.trim(),
          website: data.website?.trim() || null,
          partner_type: 'marca',
          business_description: `Categoría: ${data.category} | Plan: ${planSelected || 'No especificado'} | ${data.description || ''}`.trim(),
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
            <Label htmlFor="brandName">Nombre de la Marca *</Label>
            <Input
              id="brandName"
              placeholder="Ej: Nike, Adidas..."
              {...register("brandName")}
              className="bg-background"
              maxLength={100}
            />
            {errors.brandName && <p className="text-destructive text-sm">{errors.brandName.message}</p>}
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
              placeholder="contacto@marca.com"
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
            <Label>Categoría de Productos *</Label>
            <Select value={categoryValue} onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecciona categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ropa">Ropa Deportiva</SelectItem>
                <SelectItem value="calzado">Calzado</SelectItem>
                <SelectItem value="equipamiento">Equipamiento</SelectItem>
                <SelectItem value="nutricion">Nutrición y Suplementos</SelectItem>
                <SelectItem value="accesorios">Accesorios</SelectItem>
                <SelectItem value="tecnologia">Tecnología Deportiva</SelectItem>
                <SelectItem value="uniformes">Uniformes</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-destructive text-sm">{errors.category.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Sitio Web (opcional)</Label>
            <Input
              id="website"
              placeholder="https://tumarca.com"
              {...register("website")}
              className="bg-background"
            />
            {errors.website && <p className="text-destructive text-sm">{errors.website.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Describe tu marca (opcional)</Label>
          <Textarea
            id="description"
            placeholder="Productos principales, mercado objetivo, valores de marca..."
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
            "Registrar mi Marca"
          )}
        </Button>
      </form>

      <FormSuccessAnimation 
        isVisible={showSuccess}
        title="¡Marca Registrada!"
        message="Tu solicitud ha sido enviada. Revisaremos tu información y te contactaremos pronto."
        onClose={handleSuccessClose}
      />
    </>
  );
}