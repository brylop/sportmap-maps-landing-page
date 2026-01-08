import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MarcasRegistroForm } from "@/components/forms/MarcasRegistroForm";

interface MarcasRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  planSelected?: string;
}

export function MarcasRegistroModal({ isOpen, onClose, planSelected }: MarcasRegistroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Registra tu Marca
            {planSelected && <span className="text-sport-primary ml-2">- Plan {planSelected}</span>}
          </DialogTitle>
        </DialogHeader>
        <MarcasRegistroForm onSuccess={onClose} planSelected={planSelected} />
      </DialogContent>
    </Dialog>
  );
}