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
        className="fixed inset-0 z-[100] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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

        {/* Centering wrapper that prevents top/bottom truncation on all screen heights */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-5 md:p-6 py-6 sm:py-8 pointer-events-none">
          {/* Modal Container: Luxury Editorial Folio with 2-Column Responsive Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="pointer-events-auto relative w-full max-w-4xl lg:max-w-5xl rounded-[28px] bg-card border border-gold/40 shadow-editorial-lg z-10 text-ink flex flex-col overflow-hidden my-auto"
          >
            {/* Pinned Top Bar (Always visible) */}
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

            {/* Scrollable Folio Body: Seamless scroll with hidden scrollbar */}
            <div className="flex-1 overflow-y-auto max-h-[calc(90vh-60px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-5 sm:p-7 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Left Column: Archival Certificate Frame (md:col-span-6 lg:col-span-7) */}
                <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-3">
                  <div className="relative w-full h-64 sm:h-80 md:h-[460px] rounded-2xl overflow-hidden border border-gold/30 bg-gradient-to-b from-card-subtle/90 via-card-subtle/50 to-card-subtle/90 shadow-md p-3 flex items-center justify-center">
                    {/* Double hairline gold matting */}
                    <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-gold/20" />

                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
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

                  {/* Desktop Verification Note */}
                  {certificate.verificationNote && (
                    <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-card-subtle/60 border border-border/70 text-[11px] font-mono text-ink-muted">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span className="truncate">{certificate.verificationNote}</span>
                    </div>
                  )}
                </div>

                {/* Right Column: Complete Context Dossier (md:col-span-6 lg:col-span-5) */}
                <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    {/* Prominent Distinction Ribbon */}
                    {certificate.scoreOrAward && (
                      <div>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-wine via-[#8E2344] to-wine text-white border-2 border-gold shadow-[0_4px_16px_rgba(201,166,107,0.3)] max-w-full">
                          <div className="w-5 h-5 rounded-full bg-gold/25 border border-gold/60 flex items-center justify-center shrink-0">
                            <Award className="w-3.5 h-3.5 text-gold-light" />
                          </div>
                          <span className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white truncate">
                            {certificate.scoreOrAward}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Title & Metadata */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted mb-1.5 font-sans">
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

                      <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink leading-snug">
                        {certificate.title}
                      </h3>
                    </div>

                    {/* Academic Program / Specialization */}
                    <div className="p-3.5 rounded-xl bg-card-subtle/80 border border-border/80 text-xs space-y-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold font-sans block">
                        Academic Specialization / Program
                      </span>
                      <span className="font-serif font-bold text-ink text-sm block leading-snug">
                        {certificate.program}
                      </span>
                    </div>

                    {/* Mobile Verification Note */}
                    {certificate.verificationNote && (
                      <div className="md:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-card-subtle/60 border border-border/70 text-[11px] font-mono text-ink-muted">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="leading-snug">{certificate.verificationNote}</span>
                      </div>
                    )}

                    {/* Dossier Overview & Key Highlights: Complete Context, No Cut-Off */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-ink-muted font-sans block">
                        Dossier Overview &amp; Key Highlights
                      </span>
                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {certificate.summary}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row items-center gap-2.5">
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
