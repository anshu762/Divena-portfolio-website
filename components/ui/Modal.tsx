"use client";

import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  footerActions?: ReactNode;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, category, footerActions, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-2xl max-h-[90vh] md:max-h-[85vh] rounded-3xl bg-card border border-border/90 shadow-editorial-lg z-10 my-auto text-ink flex flex-col overflow-hidden"
          >
            {/* Sticky Header Bar */}
            <div className="shrink-0 p-5 sm:p-6 md:px-8 border-b border-border/70 flex items-start justify-between gap-4 bg-card/95 backdrop-blur-md">
              <div className="pr-4">
                {category && (
                  <span className="inline-block px-3 py-1 text-[11px] uppercase tracking-widest font-sans font-bold rounded-full bg-gold/15 text-gold border border-gold/30 mb-2">
                    {category}
                  </span>
                )}
                <h3 id="modal-title" className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-ink leading-tight">
                  {title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-muted hover:text-wine hover:border-wine hover:bg-wine/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-8 space-y-6 text-sm md:text-base leading-relaxed text-ink-muted">
              {children}
            </div>

            {/* Pinned Bottom Action Footer (Always visible without having to scroll!) */}
            {footerActions && (
              <div className="shrink-0 p-4 sm:p-5 md:px-8 border-t border-border/80 bg-card-subtle/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
                {footerActions}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
