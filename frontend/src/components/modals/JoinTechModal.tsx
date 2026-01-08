import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { JoinTechForm } from "@/components/forms/JoinTechForm";

interface JoinTechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinTechModal({ isOpen, onClose }: JoinTechModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Únete a SportMaps Tech</DialogTitle>
          <DialogDescription className="sr-only">
            Formulario para unirse al equipo de SportMaps Tech
          </DialogDescription>
        </DialogHeader>
        <JoinTechForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}