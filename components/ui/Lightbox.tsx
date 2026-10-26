"use client";

import { useEffect, useState, type TouchEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Award, ShieldCheck, Calendar, ExternalLink } from "lucide-react";
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
        className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-2xl text-white overflow-y-auto"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Certificate Lightbox"
      >
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 w-full bg-black/80 backdrop-blur-md px-4 sm:px-8 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase border border-gold/40">
              Credential {currentIndex + 1} of {certificates.length}
            </span>
            <span className="hidden md:inline-block text-xs text-stone-300 font-sans">
              Use &larr; &rarr; keys or swipe &middot; Press Esc to close
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct Image Link */}
            <a
              href={current.image}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium text-stone-200 hover:bg-white/20 transition-colors"
            >
              <span>View Full Resolution</span>
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Image + Text (Scrollable and never cut off) */}
        <div className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center space-y-6 my-auto">
          {/* Image Frame with Navigation Arrows */}
          <div className="relative w-full flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Certificate"
              className="absolute left-1 sm:-left-6 md:-left-12 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Certificate Image Frame */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-[40vh] sm:h-[48vh] md:h-[55vh] max-h-[580px] rounded-2xl overflow-hidden border border-white/15 bg-black/50 shadow-2xl flex items-center justify-center p-2 sm:p-4"
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-contain"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Certificate"
              className="absolute right-1 sm:-right-6 md:-right-12 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Details Panel (Zero text truncation, fully readable) */}
          <div className="w-full bg-stone-900/90 border border-white/10 rounded-2xl p-5 sm:p-7 backdrop-blur-md text-left flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-xl">
            <div className="space-y-2.5 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-gold">
                <span className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold" /> {current.issuer}
                </span>
                <span className="text-stone-500">&middot;</span>
                <span className="flex items-center gap-1 text-stone-300">
                  <Calendar className="w-3.5 h-3.5 text-gold" /> {current.date}
                </span>
                {current.verificationNote && (
                  <>
                    <span className="text-stone-500">&middot;</span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {current.verificationNote}
                    </span>
                  </>
                )}
              </div>

              {/* Distinction / Score Badge */}
              {current.scoreOrAward && (
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/25 text-[#FFF2D6] border border-gold/60 text-xs sm:text-sm font-bold tracking-wide shadow-gold">
                    <Award className="w-4 h-4 text-gold shrink-0" />
                    <span>{current.scoreOrAward}</span>
                  </span>
                </div>
              )}

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
                {current.title}
              </h4>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
                {current.summary}
              </p>
            </div>

            {current.scoreOrAward && (
              <div className="shrink-0 hidden md:flex items-center md:self-center">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold/20 text-gold-light border border-gold/40 text-xs sm:text-sm font-semibold tracking-wide shadow-gold">
                  <Award className="w-4 h-4 text-gold" />
                  {current.scoreOrAward}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
