import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/ContactForm";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-sport-card border-sport-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sport-text-primary">
            🚀 Comienza tu Prueba Gratis
          </DialogTitle>
          <DialogDescription className="text-sport-text-secondary">
            Completa el formulario y te contactaremos para activar tu cuenta de prueba de 14 días sin costo.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}