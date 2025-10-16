import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const demoUrl = "https://sportmaps-demo.lovable.app/";

  const openInNewTab = () => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-gray-900">
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-700">
          <DialogTitle className="text-white flex items-center gap-2">
            ✨ Demo Interactivo
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              onClick={openInNewTab}
              size="sm"
              variant="outline"
              className="text-gray-300 border-gray-600 hover:bg-gray-800"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Abrir en pestaña
            </Button>
            <Button
              onClick={onClose}
              size="sm"
              variant="ghost"
              className="text-gray-300 hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          <iframe
            src={demoUrl}
            title="SportMaps Demo - Apex Trail Maps"
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}