"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 right-8 z-[100] flex items-center gap-2.5 px-5 py-3 rounded-full bg-ink text-canvas border border-border shadow-editorial-lg select-none"
        >
          <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-medium tracking-wide">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
