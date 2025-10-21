import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PartnerTrainerForm } from "../forms/PartnerTrainerForm";

interface PartnerTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerTrainerModal({ isOpen, onClose }: PartnerTrainerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Únete como Entrenador</DialogTitle>
        </DialogHeader>
        <PartnerTrainerForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}