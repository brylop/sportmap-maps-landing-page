import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EscuelasRegistroForm } from "@/components/forms/EscuelasRegistroForm";

interface EscuelasRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  planSelected?: string;
}

export function EscuelasRegistroModal({ isOpen, onClose, planSelected }: EscuelasRegistroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Registra tu Escuela Deportiva
            {planSelected && <span className="text-sport-primary ml-2">- Plan {planSelected}</span>}
          </DialogTitle>
        </DialogHeader>
        <EscuelasRegistroForm onSuccess={onClose} planSelected={planSelected} />
      </DialogContent>
    </Dialog>
  );
}