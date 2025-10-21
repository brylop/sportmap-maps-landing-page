import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Validation schema
const schoolSchema = z.object({
  businessName: z.string().trim().min(1, "School name is required").max(100),
  contactName: z.string().trim().min(1, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(20),
  businessDescription: z.string().trim().min(20, "Description must be at least 20 characters").max(1000),
  experienceYears: z.number().int().min(0, "Experience years must be positive"),
  website: z.string().trim().url("Invalid URL").optional().nullable()
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()

    // Validate input with zod
    const validationResult = schoolSchema.safeParse(body)
    
    if (!validationResult.success) {
      console.error('Validation failed:', validationResult.error.issues)
      return new Response(
        JSON.stringify({ 
          error: 'Invalid input data',
          details: validationResult.error.issues.map(i => i.message)
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { businessName, contactName, email, phone, businessDescription, experienceYears, website } = validationResult.data

    // Insert the school application
    const { data, error } = await supabaseClient
      .from('partner_applications')
      .insert({
        partner_type: 'school',
        business_name: businessName,
        contact_name: contactName,
        email,
        phone,
        business_description: businessDescription,
        experience_years: experienceYears,
        website
      })
      .select()

    if (error) {
      console.error('Database insertion failed:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit application' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Send notification email to admin
    try {
      const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
      
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'SportMaps <onboarding@resend.dev>',
          to: ['brylop71@gmail.com'],
          subject: `Nueva solicitud de Escuela: ${escapeHtml(businessName)}`,
          html: `
            <h2>Nueva solicitud de Escuela Deportiva</h2>
            <p><strong>Escuela:</strong> ${escapeHtml(businessName)}</p>
            <p><strong>Contacto:</strong> ${escapeHtml(contactName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Años de Operación:</strong> ${experienceYears}</p>
            ${website ? `<p><strong>Sitio Web:</strong> <a href="${escapeHtml(website)}">${escapeHtml(website)}</a></p>` : ''}
            <p><strong>Descripción:</strong></p>
            <p>${escapeHtml(businessDescription).replace(/\n/g, '<br>')}</p>
          `
        })
      })
      
      if (emailResponse.ok) {
        console.log('Notification email sent to admin')
      } else {
        console.error('Email sending failed:', await emailResponse.text())
      }
    } catch (emailError) {
      console.error('Email sending exception:', emailError)
      // Continue even if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'School application submitted successfully',
        data 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})