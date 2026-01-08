import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DeportistasRegistroForm } from "@/components/forms/DeportistasRegistroForm";

interface DeportistasRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  planSelected?: string;
}

export function DeportistasRegistroModal({ isOpen, onClose, planSelected }: DeportistasRegistroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Crea tu Perfil de Atleta
            {planSelected && <span className="text-sport-primary ml-2">- Plan {planSelected}</span>}
          </DialogTitle>
        </DialogHeader>
        <DeportistasRegistroForm onSuccess={onClose} planSelected={planSelected} />
      </DialogContent>
    </Dialog>
  );
}