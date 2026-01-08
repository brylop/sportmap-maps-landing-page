-- Función que asigna rol admin al primer usuario
CREATE OR REPLACE FUNCTION public.handle_first_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Si no hay roles asignados aún, el primer usuario se convierte en admin
  IF NOT EXISTS (SELECT 1 FROM public.user_roles) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger que se ejecuta cuando se crea un usuario nuevo
CREATE TRIGGER on_first_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_first_user();