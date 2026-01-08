import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PartnerSchoolForm } from "../forms/PartnerSchoolForm";

interface PartnerSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerSchoolModal({ isOpen, onClose }: PartnerSchoolModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Únete como Escuela Deportiva</DialogTitle>
        </DialogHeader>
        <PartnerSchoolForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}