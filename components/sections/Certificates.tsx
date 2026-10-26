"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { portfolio } from "@/data/portfolio";
import { Maximize2, ShieldCheck, Award, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";

export function Certificates() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCertIndex, setSelectedCertIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setSelectedCertIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="certificates" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            04
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Credentials &middot; Academic Fellowships
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
              Certificates & Academic Programs
            </h2>
            <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
              Verified certifications from leading global academic institutions and competitions. Click any credential to inspect the curated folio and full-resolution document.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-wine dark:text-gold border border-gold/40 text-xs font-bold tracking-wider uppercase shrink-0 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
            <span>4 Verified Honors</span>
          </div>
        </div>
      </Reveal>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {portfolio.certificates.map((cert, index) => (
          <Reveal key={cert.id} delay={index * 0.1}>
            <div
              onClick={() => handleOpenLightbox(index)}
              className="group relative flex flex-col rounded-[26px] bg-card border border-border/80 shadow-editorial transition-all duration-500 hover:-translate-y-1.5 hover:shadow-editorial-lg hover:border-gold cursor-pointer overflow-hidden"
            >
              {/* Top Archival Certificate Document Frame */}
              <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-card-subtle/80 via-card-subtle/40 to-card-subtle/80 overflow-hidden border-b border-border/70 flex items-center justify-center p-4">
                {/* Archival Double Matting Frame */}
                <div className="pointer-events-none absolute inset-3 rounded-2xl border border-gold/25" />

                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Folio Index Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase border border-white/15">
                    FOLIO № 0{index + 1}
                  </span>
                </div>

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-stone-900 text-xs font-bold tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-wine" />
                    <span>Open Curated Folio</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Issuer & Date Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans">
                    <span className="flex items-center gap-1.5 font-bold text-wine dark:text-gold">
                      <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                      <span>{cert.issuer}</span>
                    </span>
                    <span className="flex items-center gap-1 text-ink-muted">
                      <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  {/* 🌟 Prominent Distinction Badge (Ultra-Bold Enamel Ribbon Design) */}
                  {cert.scoreOrAward && (
                    <div className="pt-0.5">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-wine via-[#8E2344] to-wine text-white border border-gold/70 shadow-[0_2px_10px_rgba(201,166,107,0.25)]">
                        <Award className="w-3.5 h-3.5 text-gold-light shrink-0" />
                        <span className="font-sans font-bold text-xs tracking-wide">
                          {cert.scoreOrAward}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {cert.summary}
                  </p>
                </div>

                {/* Bottom Folio Footer Action */}
                <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs">
                  <span className="font-sans font-medium text-ink-muted truncate max-w-[200px] sm:max-w-xs">
                    {cert.program}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-wine dark:text-gold group-hover:underline shrink-0">
                    <span>Inspect Folio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        certificates={portfolio.certificates}
        initialIndex={selectedCertIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
