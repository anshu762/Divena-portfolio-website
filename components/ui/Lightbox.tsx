"use client";

import { useEffect, useState, type TouchEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  Calendar,
  ExternalLink,
  Sparkles,
  Maximize2,
} from "lucide-react";
import type { Certificate } from "@/data/portfolio";

interface LightboxProps {
  certificates: Certificate[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ certificates, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
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
  }, [isOpen, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certificates.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (!isOpen) return null;

  const current = certificates[currentIndex];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Certificate Exhibition Folio"
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

        {/* Modal Container: Curated Editorial Folio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
          className="relative w-full max-w-5xl max-h-[92vh] rounded-[28px] bg-card border border-gold/40 shadow-editorial-lg z-10 my-auto text-ink flex flex-col overflow-hidden"
        >
          {/* Top Bar (Institution & Navigation Controls) */}
          <div className="shrink-0 px-5 sm:px-8 py-3.5 border-b border-border/80 bg-card/95 backdrop-blur-md flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-wine dark:text-gold text-xs font-bold uppercase tracking-wider border border-gold/40">
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>Folio {currentIndex + 1} of {certificates.length}</span>
              </span>

              <span className="hidden sm:inline-block text-xs font-serif italic text-ink-muted">
                {current.issuer}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Certificate"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink hover:text-wine hover:border-gold transition-colors"
                title="Previous (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Certificate"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink hover:text-wine hover:border-gold transition-colors"
                title="Next (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="w-[1px] h-5 bg-border mx-1" />

              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-ink hover:text-wine hover:border-wine transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Folio Body: Split View (Left = Archival Image, Right = Curated Dossier) */}
          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border/70">
            {/* Left Column: Archival Certificate Frame */}
            <div className="lg:col-span-7 p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center bg-card-subtle/50 relative group">
              <div className="relative w-full h-[40vh] sm:h-[46vh] lg:h-[54vh] max-h-[520px] rounded-2xl overflow-hidden border border-gold/30 bg-black/5 dark:bg-black/30 shadow-md p-2 flex items-center justify-center">
                {/* Double hairline gold matting */}
                <div className="pointer-events-none absolute inset-2.5 rounded-xl border border-gold/20" />

                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain p-2"
                />

                {/* Inspect Fullscreen Overlay Button */}
                <a
                  href={current.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-semibold backdrop-blur-md border border-white/20 hover:bg-gold hover:text-black transition-colors shadow-lg z-20"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Open Full Document</span>
                </a>
              </div>

              <p className="mt-3 text-[11px] font-sans text-ink-muted/80 text-center tracking-wide">
                Official document issued by {current.issuer} &middot; High-fidelity verified record
              </p>
            </div>

            {/* Right Column: Curated Credential Dossier */}
            <div className="lg:col-span-5 p-5 sm:p-6 md:p-8 flex flex-col justify-between space-y-5 bg-card">
              <div className="space-y-4">
                {/* 🌟 Prominent Distinction / Honors Ribbon (Bold, High-Contrast Enamel Design) */}
                {current.scoreOrAward && (
                  <div>
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-wine via-[#8E2344] to-wine text-white border-2 border-gold shadow-[0_4px_16px_rgba(201,166,107,0.3)]">
                      <div className="w-5 h-5 rounded-full bg-gold/25 border border-gold/60 flex items-center justify-center shrink-0">
                        <Award className="w-3.5 h-3.5 text-gold-light" />
                      </div>
                      <span className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white">
                        {current.scoreOrAward}
                      </span>
                    </div>
                  </div>
                )}

                {/* Header Meta: Issuer & Date */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5 font-bold text-wine dark:text-gold">
                    <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                    <span>{current.issuer}</span>
                  </span>
                  <span className="text-border">&middot;</span>
                  <span className="flex items-center gap-1 text-ink-muted">
                    <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{current.date}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-snug">
                  {current.title}
                </h3>

                {/* Program Track */}
                <div className="p-3 rounded-xl bg-card-subtle/80 border border-border/80 text-xs">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold font-sans block mb-0.5">
                    Academic Specialization / Stream
                  </span>
                  <span className="font-serif font-bold text-ink text-sm">
                    {current.program}
                  </span>
                </div>

                {/* Summary / Curriculum Focus */}
                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-ink font-sans flex items-center gap-1.5">
                    Curriculum &amp; Intellectual Scope
                  </span>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {current.summary}
                  </p>
                </div>

                {/* Official Verification Note */}
                {current.verificationNote && (
                  <div className="p-3 rounded-xl bg-gold/10 border border-gold/30 text-xs text-ink space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-gold block">
                      Authenticity &amp; Validation
                    </span>
                    <p className="text-xs text-ink-muted font-sans font-medium">
                      {current.verificationNote}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Quick Actions inside the Right Panel */}
              <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={current.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-wine text-white text-xs font-bold uppercase tracking-wider hover:bg-wine-hover shadow-wine transition-colors"
                >
                  <span>Inspect Original Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-border text-xs uppercase tracking-wider font-semibold text-ink hover:bg-card-subtle transition-colors"
                >
                  Close Folio
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
