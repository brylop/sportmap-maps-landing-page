import { z } from "zod";

// Esquema de validación para formulario de contacto
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre contiene caracteres no válidos"),
  email: z
    .string()
    .trim()
    .email("El email no es válido")
    .max(255, "El email no puede superar 255 caracteres"),
  subject: z
    .string()
    .trim()
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .max(200, "El asunto no puede superar 200 caracteres"),
  category: z
    .string()
    .min(1, "Debes seleccionar una categoría"),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede superar 2000 caracteres"),
  // Honeypot field - debe estar vacío
  website: z.string().max(0, "").optional(),
});

// Esquema de validación para formulario de unirse
export const joinSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre contiene caracteres no válidos"),
  email: z
    .string()
    .trim()
    .email("El email no es válido")
    .max(255, "El email no puede superar 255 caracteres"),
  phone: z
    .string()
    .trim()
    .max(20, "El teléfono no puede superar 20 caracteres")
    .regex(/^[\d\s+()-]*$/, "El teléfono contiene caracteres no válidos")
    .optional()
    .or(z.literal("")),
  experience: z
    .string()
    .min(1, "Debes seleccionar tu nivel de experiencia"),
  interests: z
    .string()
    .trim()
    .min(10, "Las áreas de interés deben tener al menos 10 caracteres")
    .max(1000, "Las áreas de interés no pueden superar 1000 caracteres"),
  motivation: z
    .string()
    .trim()
    .min(10, "La motivación debe tener al menos 10 caracteres")
    .max(2000, "La motivación no puede superar 2000 caracteres"),
  // Honeypot field
  company: z.string().max(0, "").optional(),
});

// Esquema para formularios de partners
export const partnerSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(2, "El nombre del negocio debe tener al menos 2 caracteres")
    .max(200, "El nombre del negocio no puede superar 200 caracteres"),
  contactName: z
    .string()
    .trim()
    .min(2, "El nombre de contacto debe tener al menos 2 caracteres")
    .max(100, "El nombre de contacto no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, "El nombre contiene caracteres no válidos"),
  email: z
    .string()
    .trim()
    .email("El email no es válido")
    .max(255, "El email no puede superar 255 caracteres"),
  phone: z
    .string()
    .trim()
    .min(7, "El teléfono debe tener al menos 7 caracteres")
    .max(20, "El teléfono no puede superar 20 caracteres")
    .regex(/^[\d\s+()-]+$/, "El teléfono contiene caracteres no válidos"),
  businessDescription: z
    .string()
    .trim()
    .min(20, "La descripción debe tener al menos 20 caracteres")
    .max(2000, "La descripción no puede superar 2000 caracteres"),
  experienceYears: z
    .number()
    .int()
    .min(0, "Los años de experiencia no pueden ser negativos")
    .max(100, "Los años de experiencia no pueden superar 100"),
  website: z
    .string()
    .url("La URL del sitio web no es válida")
    .max(500, "La URL no puede superar 500 caracteres")
    .optional()
    .or(z.literal("")),
  // Honeypot
  fax: z.string().max(0, "").optional(),
});

// Tipos exportados
export type ContactFormData = z.infer<typeof contactSchema>;
export type JoinFormData = z.infer<typeof joinSchema>;
export type PartnerFormData = z.infer<typeof partnerSchema>;

// Función helper para sanitizar strings (prevenir XSS básico)
export function sanitizeString(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

// Función para validar que el honeypot esté vacío
export function isHoneypotValid(honeypotValue?: string): boolean {
  return !honeypotValue || honeypotValue.length === 0;
}
