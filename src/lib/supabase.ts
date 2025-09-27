import { createClient } from '@supabase/supabase-js'

// In Lovable, when Supabase is connected, these variables should be available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Fallback for development - these will be replaced when Supabase is properly connected
const fallbackUrl = 'https://placeholder.supabase.co'
const fallbackKey = 'placeholder-anon-key'

// Check if we have proper Supabase configuration
const hasSupabaseConfig = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'undefined' && supabaseAnonKey !== 'undefined' &&
  !supabaseUrl.includes('placeholder') && !supabaseAnonKey.includes('placeholder')

if (!hasSupabaseConfig) {
  console.warn('⚠️ Supabase not properly configured. Make sure to connect Supabase in your Lovable project.')
  console.log('🔗 Click the green Supabase button in the top right to connect.')
}

// Create client with available config or fallback
export const supabase = createClient(
  supabaseUrl || fallbackUrl,
  supabaseAnonKey || fallbackKey
)

// Export a flag to check if Supabase is properly configured
export const isSupabaseConfigured = hasSupabaseConfig