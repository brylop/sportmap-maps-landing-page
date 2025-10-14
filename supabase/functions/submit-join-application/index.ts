import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Validation schema
const applicationSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Full name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  experience: z.string().trim().max(50, "Experience must be less than 50 characters").optional(),
  interests: z.string().trim().min(10, "Interests must be at least 10 characters").max(2000, "Interests must be less than 2000 characters"),
  motivation: z.string().trim().min(10, "Motivation must be at least 10 characters").max(2000, "Motivation must be less than 2000 characters")
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
    const validationResult = applicationSchema.safeParse(body)
    
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

    const { fullName, email, phone, experience, interests, motivation } = validationResult.data

    // Insert the application
    const { data, error } = await supabaseClient
      .from('join_applications')
      .insert({
        full_name: fullName,
        email,
        phone,
        experience,
        interests,
        motivation
      })
      .select()

    if (error) {
      console.error('Database insertion failed for join_applications')
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
          from: 'SportMaps Tech <onboarding@resend.dev>',
          to: ['brylop71@gmail.com'],
          subject: `Nueva aplicación SportMaps Tech: ${escapeHtml(fullName)}`,
          html: `
            <h2>Nueva aplicación recibida</h2>
            <p><strong>Nombre completo:</strong> ${escapeHtml(fullName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Teléfono:</strong> ${phone ? escapeHtml(phone) : 'No proporcionado'}</p>
            <p><strong>Nivel de experiencia:</strong> ${experience ? escapeHtml(experience) : 'No especificado'}</p>
            <p><strong>Áreas de interés:</strong></p>
            <p>${escapeHtml(interests).replace(/\n/g, '<br>')}</p>
            <p><strong>Motivación:</strong></p>
            <p>${escapeHtml(motivation).replace(/\n/g, '<br>')}</p>
          `
        })
      })
      
      if (emailResponse.ok) {
        console.log('Notification email sent to admin')
      } else {
        console.error('Email sending failed')
      }
    } catch (emailError) {
      console.error('Email sending exception occurred')
      // Continue even if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully',
        data 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error in join application function')
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})