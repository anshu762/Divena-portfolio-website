"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Maximize2,
} from "lucide-react";
import type { Certificate } from "@/data/portfolio";

interface LightboxProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ certificate, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
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

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Certificate Details"
      >
        {/* Backdrop matching luxury brand tone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0E0C0B]/85 dark:bg-black/90 backdrop-blur-xl"
          aria-hidden="true"
        />

        {/* Modal Container: Single unified luxury folio without scrollbar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="relative w-full max-w-3xl max-h-[92vh] rounded-[28px] bg-card border border-gold/40 shadow-editorial-lg z-10 my-auto text-ink flex flex-col overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Top Bar (Badge & Close Only - Left/Right navigation completely removed) */}
          <div className="shrink-0 px-5 sm:px-8 py-3.5 border-b border-border/80 bg-card/95 backdrop-blur-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-serif font-bold text-wine dark:text-gold tracking-wide">
                Official Credential Verification
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-ink hover:text-wine hover:border-wine transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Folio Content */}
          <div className="p-5 sm:p-7 md:p-8 space-y-5">
            {/* Archival Certificate Document Preview */}
            <div className="relative w-full h-[34vh] sm:h-[40vh] md:h-[44vh] max-h-[400px] rounded-2xl overflow-hidden border border-gold/30 bg-gradient-to-b from-card-subtle/80 to-card-subtle/30 shadow-md p-2 flex items-center justify-center">
              {/* Double hairline gold matting */}
              <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-gold/20" />

              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-contain p-2"
              />

              {/* Inspect Fullscreen Overlay Button */}
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-semibold backdrop-blur-md border border-white/20 hover:bg-gold hover:text-black transition-colors shadow-lg z-20"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full Image</span>
              </a>
            </div>

            {/* Dossier Details */}
            <div className="space-y-4">
              {/* Prominent Distinction Ribbon */}
              {certificate.scoreOrAward && (
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-wine via-[#8E2344] to-wine text-white border-2 border-gold shadow-[0_4px_16px_rgba(201,166,107,0.3)]">
                    <div className="w-5 h-5 rounded-full bg-gold/25 border border-gold/60 flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 text-gold-light" />
                    </div>
                    <span className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white">
                      {certificate.scoreOrAward}
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Metadata */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-ink-muted mb-1.5 font-sans">
                  <span className="flex items-center gap-1.5 font-bold text-wine dark:text-gold">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span>{certificate.issuer}</span>
                  </span>
                  <span className="text-border">&middot;</span>
                  <span className="flex items-center gap-1 text-ink-muted">
                    <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{certificate.date}</span>
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-snug">
                  {certificate.title}
                </h3>
              </div>

              {/* Program Track */}
              <div className="p-3 rounded-xl bg-card-subtle/80 border border-border/80 text-xs flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold font-sans block">
                    Academic Specialization
                  </span>
                  <span className="font-serif font-bold text-ink text-sm">
                    {certificate.program}
                  </span>
                </div>

                {certificate.verificationNote && (
                  <span className="text-[11px] font-mono text-ink-muted bg-card px-2.5 py-1 rounded border border-border">
                    {certificate.verificationNote}
                  </span>
                )}
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {certificate.summary}
              </p>
            </div>

            {/* Bottom Actions Footer */}
            <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-wine text-white text-xs font-bold uppercase tracking-wider hover:bg-wine-hover shadow-wine transition-colors"
              >
                <span>Inspect High-Res Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto py-3 px-6 rounded-xl border border-border text-xs uppercase tracking-wider font-semibold text-ink hover:bg-card-subtle transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
