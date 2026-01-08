-- Create tables for SportMaps Tech

-- Enable Row Level Security
SET default_table_access_method = heap;

-- User profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    bio TEXT,
    location TEXT,
    sports_interests TEXT[],
    experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'advanced', 'professional')),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Join Tech Applications
CREATE TABLE IF NOT EXISTS public.join_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    experience TEXT CHECK (experience IN ('beginner', 'intermediate', 'advanced', 'professional')),
    interests TEXT NOT NULL,
    motivation TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected')),
    reviewed_by UUID REFERENCES auth.users(id),
    reviewed_at TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('general', 'technical', 'business', 'partnership', 'feedback', 'other')),
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    assigned_to UUID REFERENCES auth.users(id),
    responded_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sports Categories
CREATE TABLE IF NOT EXISTS public.sports_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    icon TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sports Equipment
CREATE TABLE IF NOT EXISTS public.sports_equipment (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category_id UUID REFERENCES public.sports_categories(id),
    brand TEXT,
    price DECIMAL(10,2),
    currency TEXT DEFAULT 'COP',
    image_url TEXT,
    specifications JSONB,
    is_available BOOLEAN DEFAULT TRUE,
    stock_quantity INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sports Schools/Academies
CREATE TABLE IF NOT EXISTS public.sports_schools (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category_id UUID REFERENCES public.sports_categories(id),
    location TEXT,
    address TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    image_url TEXT,
    rating DECIMAL(3,2) DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    amenities TEXT[],
    schedule JSONB,
    pricing JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Wellness Programs
CREATE TABLE IF NOT EXISTS public.wellness_programs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    program_type TEXT CHECK (program_type IN ('nutrition', 'fitness', 'mental_health', 'recovery', 'lifestyle')),
    duration_weeks INTEGER,
    difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
    instructor_name TEXT,
    image_url TEXT,
    content JSONB,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.join_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wellness_programs ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- User Profiles Policies
DROP POLICY IF EXISTS "Users can view all profiles" ON public.user_profiles;
CREATE POLICY "Users can view all profiles" ON public.user_profiles
    FOR SELECT USING (TRUE);

DROP POLICY IF EXISTS "Users can update own profile" ON public.user_profiles;
CREATE POLICY "Users can update own profile" ON public.user_profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.user_profiles;
CREATE POLICY "Users can insert own profile" ON public.user_profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Join Applications Policies
DROP POLICY IF EXISTS "Anyone can insert join applications" ON public.join_applications;
CREATE POLICY "Anyone can insert join applications" ON public.join_applications
    FOR INSERT WITH CHECK (TRUE);

DROP POLICY IF EXISTS "Users can view own applications" ON public.join_applications;
CREATE POLICY "Users can view own applications" ON public.join_applications
    FOR SELECT USING (TRUE);

-- Contact Messages Policies
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON public.contact_messages;
CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages
    FOR INSERT WITH CHECK (TRUE);

DROP POLICY IF EXISTS "Anyone can view contact messages" ON public.contact_messages;
CREATE POLICY "Anyone can view contact messages" ON public.contact_messages
    FOR SELECT USING (TRUE);

-- Sports Categories Policies (Public read)
DROP POLICY IF EXISTS "Anyone can view sports categories" ON public.sports_categories;
CREATE POLICY "Anyone can view sports categories" ON public.sports_categories
    FOR SELECT USING (is_active = TRUE);

-- Sports Equipment Policies (Public read)
DROP POLICY IF EXISTS "Anyone can view available equipment" ON public.sports_equipment;
CREATE POLICY "Anyone can view available equipment" ON public.sports_equipment
    FOR SELECT USING (is_available = TRUE);

-- Sports Schools Policies (Public read)
DROP POLICY IF EXISTS "Anyone can view sports schools" ON public.sports_schools;
CREATE POLICY "Anyone can view sports schools" ON public.sports_schools
    FOR SELECT USING (TRUE);

-- Wellness Programs Policies (Public read)
DROP POLICY IF EXISTS "Anyone can view active wellness programs" ON public.wellness_programs;
CREATE POLICY "Anyone can view active wellness programs" ON public.wellness_programs
    FOR SELECT USING (is_active = TRUE);

-- Insert initial sports categories
INSERT INTO public.sports_categories (name, description, icon) VALUES
('Fútbol', 'El deporte más popular del mundo', '⚽'),
('Baloncesto', 'Deporte de canasta y equipos', '🏀'),
('Tenis', 'Deporte de raqueta individual o en parejas', '🎾'),
('Natación', 'Deporte acuático completo', '🏊'),
('Atletismo', 'Deportes de pista y campo', '🏃'),
('Ciclismo', 'Deporte sobre ruedas', '🚴'),
('Volleyball', 'Deporte de red y equipos', '🏐'),
('Gimnasia', 'Deporte de flexibilidad y fuerza', '🤸'),
('Artes Marciales', 'Deportes de combate y disciplina', '🥋'),
('Deportes Extremos', 'Deportes de adrenalina y riesgo', '🏂')
ON CONFLICT (name) DO NOTHING;

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON user_profiles;
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_sports_equipment_updated_at ON sports_equipment;
CREATE TRIGGER update_sports_equipment_updated_at BEFORE UPDATE ON sports_equipment FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_sports_schools_updated_at ON sports_schools;
CREATE TRIGGER update_sports_schools_updated_at BEFORE UPDATE ON sports_schools FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_wellness_programs_updated_at ON wellness_programs;
CREATE TRIGGER update_wellness_programs_updated_at BEFORE UPDATE ON wellness_programs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();