import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    const { name, email, subject, category, message } = await req.json()

    // Validate required fields
    if (!name || !email || !subject || !category || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Insert the contact message
    const { data, error } = await supabaseClient
      .from('contact_messages')
      .insert({
        name,
        email,
        subject,
        category,
        message
      })
      .select()

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to submit message' }),
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
          subject: `Nuevo mensaje de contacto: ${subject}`,
          html: `
            <h2>Nuevo mensaje de contacto recibido</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Categoría:</strong> ${category}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          `
        })
      })
      
      if (emailResponse.ok) {
        console.log('Notification email sent to admin')
      } else {
        const errorData = await emailResponse.json()
        console.error('Error sending email:', errorData)
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Continue even if email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact message submitted successfully',
        data 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})