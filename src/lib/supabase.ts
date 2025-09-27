import { createClient } from '@supabase/supabase-js'

// Supabase configuration - now properly connected!
const supabaseUrl = 'https://luebjurafsiado.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZWJqYXJ1ZnNpYWRvamh2eGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTU2NTgsImV4cCI6MjA3NDQ5MTY1OH0.yfmAH4N9UboL4p6UqK-_tQnfhBHlTQrXCrwRokALix4'

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = true