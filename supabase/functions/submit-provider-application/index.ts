import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Flexible validation schema that accepts both camelCase and snake_case
const providerSchema = z.object({
  business_name: z.string().trim().min(1, "Nombre de negocio requerido").max(100),
  contact_name: z.string().trim().min(1, "Nombre de contacto requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  business_description: z.string().trim().min(5, "Descripción muy corta").max(2000),
  experience_years: z.number().int().min(0).max(100).optional().nullable(),
  website: z.string().trim().url("URL inválida").optional().nullable().or(z.literal("")).or(z.null()),
  partner_type: z.string().optional(),
})

// HTML escape function to prevent injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Sanitize string input
function sanitizeString(input: string): string {
  return input.trim().replace(/[\x00-\x1F\x7F]/g, '')
}

serve(async (req) => {
  console.log('Received request:', req.method)
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()
    console.log('Request body received:', JSON.stringify(body, null, 2))

    // Normalize the input (accept both camelCase and snake_case)
    const normalizedBody = {
      business_name: body.business_name || body.businessName || '',
      contact_name: body.contact_name || body.contactName || '',
      email: body.email || '',
      phone: body.phone || '',
      business_description: body.business_description || body.businessDescription || '',
      experience_years: body.experience_years ?? body.experienceYears ?? null,
      website: body.website || null,
      partner_type: body.partner_type || 'provider',
    }

    console.log('Normalized body:', JSON.stringify(normalizedBody, null, 2))

    // Validate input with zod
    const validationResult = providerSchema.safeParse(normalizedBody)
    
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.issues)
      return new Response(
        JSON.stringify({ 
          error: 'Datos inválidos',
          details: validationResult.error.issues.map(i => i.message)
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const validData = validationResult.data

    // Sanitize all string inputs
    const sanitizedData = {
      partner_type: sanitizeString(validData.partner_type || 'provider'),
      business_name: sanitizeString(validData.business_name),
      contact_name: sanitizeString(validData.contact_name),
      email: sanitizeString(validData.email).toLowerCase(),
      phone: sanitizeString(validData.phone),
      business_description: sanitizeString(validData.business_description),
      experience_years: validData.experience_years ? Number(validData.experience_years) : null,
      website: validData.website && validData.website !== '' ? sanitizeString(validData.website) : null,
    }

    console.log('Sanitized data for insertion:', JSON.stringify(sanitizedData, null, 2))

    // Insert the provider application
    const { data, error } = await supabaseClient
      .from('partner_applications')
      .insert(sanitizedData)
      .select()

    if (error) {
      console.error('Database insertion failed:', error)
      return new Response(
        JSON.stringify({ error: 'Error al guardar la solicitud', details: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Successfully inserted application:', data)

    // Send notification email to admin
    try {
      const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
      
      if (RESEND_API_KEY) {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'SportMaps <onboarding@resend.dev>',
            to: ['spoortmaps@gmail.com'],
            subject: `Nueva solicitud: ${escapeHtml(sanitizedData.business_name)} (${sanitizedData.partner_type})`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #22c55e;">Nueva Solicitud de Registro</h2>
                <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
                  <p><strong>Tipo:</strong> ${escapeHtml(sanitizedData.partner_type)}</p>
                  <p><strong>Negocio/Marca:</strong> ${escapeHtml(sanitizedData.business_name)}</p>
                  <p><strong>Contacto:</strong> ${escapeHtml(sanitizedData.contact_name)}</p>
                  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(sanitizedData.email)}">${escapeHtml(sanitizedData.email)}</a></p>
                  <p><strong>Teléfono:</strong> ${escapeHtml(sanitizedData.phone)}</p>
                  ${sanitizedData.experience_years ? `<p><strong>Años de Experiencia:</strong> ${sanitizedData.experience_years}</p>` : ''}
                  ${sanitizedData.website ? `<p><strong>Sitio Web:</strong> <a href="${escapeHtml(sanitizedData.website)}">${escapeHtml(sanitizedData.website)}</a></p>` : ''}
                  <p><strong>Descripción:</strong></p>
                  <p style="white-space: pre-wrap;">${escapeHtml(sanitizedData.business_description)}</p>
                </div>
                <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                  Este mensaje fue enviado desde el formulario de registro de SportMaps.
                </p>
              </div>
            `
          })
        })
        
        if (emailResponse.ok) {
          console.log('Notification email sent to admin')
        } else {
          console.error('Email sending failed:', await emailResponse.text())
        }
      } else {
        console.log('RESEND_API_KEY not configured, skipping email notification')
      }
    } catch (emailError) {
      console.error('Email sending exception:', emailError)
      // Continue even if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Solicitud enviada exitosamente',
        data 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})