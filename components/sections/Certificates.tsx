"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { portfolio } from "@/data/portfolio";
import { Maximize2, ShieldCheck, Award, Calendar, CheckCircle2 } from "lucide-react";

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
              Verified credentials from leading academic institutions and global essay competitions. Click any certificate to inspect full document details.
            </p>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-semibold tracking-wider uppercase shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
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
              className="group relative flex flex-col rounded-3xl bg-card border border-border/80 shadow-editorial transition-all duration-500 hover:-translate-y-1.5 hover:shadow-editorial-lg hover:border-gold/70 cursor-pointer overflow-hidden"
            >
              {/* Top Archival Certificate Document Preview */}
              <div className="relative w-full h-64 sm:h-72 bg-gradient-to-b from-card-subtle/70 to-card-subtle/30 overflow-hidden border-b border-border/60 flex items-center justify-center p-4">
                {/* Arched Inner Hairline */}
                <div className="pointer-events-none absolute inset-3 rounded-2xl border border-gold/20" />

                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Prominent Corner Award Seal (z-20 so it never gets obscured) */}
                {cert.scoreOrAward && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/95 dark:bg-[#1A1614]/95 backdrop-blur-md border border-gold/60 text-xs font-bold text-wine dark:text-gold shadow-md">
                      <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{cert.scoreOrAward}</span>
                    </span>
                  </div>
                )}

                {/* Inspect Overlay Prompt */}
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-stone-900 text-xs font-bold tracking-wider uppercase shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5 text-wine" />
                    <span>Inspect Document</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-muted mb-2 font-sans">
                    <span className="flex items-center gap-1.5 font-semibold text-wine dark:text-gold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Primary Distinction Badge in Card Body */}
                  {cert.scoreOrAward && (
                    <div className="my-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-wine dark:text-gold border border-gold/40 text-xs font-bold tracking-wide shadow-sm">
                        <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{cert.scoreOrAward}</span>
                      </span>
                    </div>
                  )}

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2.5">
                    {cert.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <span className="font-sans font-medium text-ink-muted">
                    {cert.program}
                  </span>
                  <span className="text-wine dark:text-gold font-bold flex items-center gap-1 group-hover:underline">
                    View Full Credential &rarr;
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
