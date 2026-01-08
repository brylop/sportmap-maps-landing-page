import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "@/components/forms/ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Contáctanos</DialogTitle>
          <DialogDescription className="sr-only">
            Formulario de contacto para SportMaps Tech
          </DialogDescription>
        </DialogHeader>
        <ContactForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}