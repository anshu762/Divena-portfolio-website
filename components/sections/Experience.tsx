"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/data/portfolio";
import {
  Briefcase,
  Compass,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Trees,
  Music,
  Camera,
  Mountain,
  CheckCircle2,
  FileCheck,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Experience() {
  const [activeDoc, setActiveDoc] = useState<{ url: string; title: string } | null>(null);

  const getLeadershipIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-wine dark:text-gold" };
    switch (iconName) {
      case "Compass":
        return <Compass {...props} />;
      case "HeartHandshake":
        return <HeartHandshake {...props} />;
      case "Megaphone":
        return <Megaphone {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Trees":
        return <Trees {...props} />;
      case "Music":
        return <Music {...props} />;
      case "Camera":
        return <Camera {...props} />;
      case "Mountain":
        return <Mountain {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            05
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Industry Immersion &middot; Civic Stewardship
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
          Experience & Leadership
        </h2>
        <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
          Bridging boardroom consulting, venture capital research, and high-impact extracurricular initiatives.
        </p>
      </Reveal>

      {/* Two-Column Grid: Internships (Left) vs Leadership (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
        {/* Column 1: Professional Internships */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Briefcase className="w-4 h-4 text-wine dark:text-gold" />
            <h3 className="font-serif text-xl font-bold text-ink">
              Professional Internships
            </h3>
          </div>

          <div className="space-y-6">
            {portfolio.experience.map((exp, index) => (
              <Reveal key={exp.id} delay={index * 0.08}>
                <div className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-editorial transition-all duration-300 hover:border-gold/60 hover:shadow-editorial-lg group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/30">
                      {exp.industry}
                    </span>
                    <span className="text-xs text-ink-muted font-sans">
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors">
                    {exp.organization}
                  </h4>

                  <p className="text-xs uppercase tracking-widest text-ink-muted font-sans font-semibold mt-0.5">
                    {exp.role}
                  </p>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  <ul className="mt-4 pt-4 border-t border-border/60 space-y-1.5">
                    {exp.takeaways.map((takeaway, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-ink-muted"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-wine dark:text-gold shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Verified Completion Certificate Trigger */}
                  {exp.documentUrl && (
                    <div className="mt-4 pt-3 border-t border-border/50">
                      <button
                        onClick={() =>
                          setActiveDoc({
                            url: exp.documentUrl!,
                            title: exp.documentLabel || `Verified Completion Document (${exp.organization})`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-wine dark:text-gold hover:underline"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>View Verified Completion Certificate &rarr;</span>
                      </button>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}

            {/* Executive Immersion Synthesis Banner to eliminate empty vertical space */}
            <Reveal delay={0.35}>
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-card via-card to-card-subtle border border-gold/40 shadow-editorial flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold shrink-0" />
                    <h4 className="font-serif font-bold text-base text-ink">
                      Advisory & Corporate Immersion Synthesis
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gold/15 text-gold border border-gold/30">
                    Cross-Sector
                  </span>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed">
                  Synthesizing early-stage venture capital diligence at Sathguru, commercial financial feasibility at AND Consulting, enterprise supply-chain telemetry at Cache, and precision client staging at One Wedding.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/60 text-center">
                  <div className="p-2.5 rounded-xl bg-card-subtle/70 border border-border/50">
                    <span className="font-serif font-bold text-base text-wine dark:text-gold">4</span>
                    <p className="text-[10px] text-ink-muted uppercase font-sans mt-0.5 font-medium">Sectors</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-card-subtle/70 border border-border/50">
                    <span className="font-serif font-bold text-base text-wine dark:text-gold">100%</span>
                    <p className="text-[10px] text-ink-muted uppercase font-sans mt-0.5 font-medium">Verified</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-card-subtle/70 border border-border/50">
                    <span className="font-serif font-bold text-base text-wine dark:text-gold">Corporate</span>
                    <p className="text-[10px] text-ink-muted uppercase font-sans mt-0.5 font-medium">Advisory</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Column 2: Leadership & Extra-Curriculars */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-border">
            <Compass className="w-4 h-4 text-wine dark:text-gold" />
            <h3 className="font-serif text-xl font-bold text-ink">
              Leadership & Extra-Curriculars
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolio.leadership.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <div className="h-full p-5 rounded-2xl bg-card border border-border/70 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-editorial flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-9 h-9 rounded-full bg-wine/10 dark:bg-gold/15 flex items-center justify-center">
                        {getLeadershipIcon(item.iconName)}
                      </div>
                      {item.badge && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-card-subtle text-ink-muted border border-border">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-base text-ink group-hover:text-wine dark:group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-sans text-gold mt-0.5 font-medium">
                      {item.organization}
                    </p>

                    <p className="text-xs text-ink-muted leading-relaxed mt-2.5">
                      {item.description}
                    </p>

                    {/* Band Live Drumming or Himalayan Expedition Photo */}
                    {item.image && (
                      <div
                        onClick={() =>
                          setActiveDoc({
                            url: item.image!,
                            title:
                              item.id === "lead-kedarkantha"
                                ? "Kedarkantha Himalayan Expedition (12,500 ft) - Expedition Archive"
                                : `${item.title} - Visual Proof`,
                          })
                        }
                        className="group/dimg relative w-full h-32 mt-3 rounded-xl overflow-hidden border border-gold/40 shadow-sm cursor-pointer"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover/dimg:scale-105"
                          sizes="(max-width: 640px) 100vw, 300px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[10px] font-bold text-white flex items-center gap-1">
                            <Maximize2 className="w-2.5 h-2.5 text-gold" />
                            <span>
                              {item.id === "lead-band-drummer"
                                ? "Live at Brewtiful Cafe"
                                : item.id === "lead-kedarkantha"
                                ? "12,500 ft Summit & Basecamp"
                                : "View Visual Archive"}
                            </span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
                    {/* Official Letter of Recommendation / Appointment / Summit Certificate Trigger */}
                    {item.documentUrl && (
                      <button
                        onClick={() =>
                          setActiveDoc({
                            url: item.documentUrl!,
                            title: item.documentLabel || `Official Document (${item.organization})`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-wine dark:text-gold hover:underline"
                      >
                        <FileCheck className="w-3.5 h-3.5 text-gold" />
                        <span>
                          {item.id === "lead-nilgiri"
                            ? "View Verified Appointment Letter \u2192"
                            : item.id === "lead-kedarkantha"
                            ? "View Verified Summit Certificate \u2192"
                            : "View Verified LOR Document \u2192"}
                        </span>
                      </button>
                    )}

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="text-[11px] text-ink-muted/90 italic font-serif">
                        &bull; {item.highlights[0]}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Official Document / LOR Inspection Modal */}
      <AnimatePresence>
        {activeDoc && (
          <div
            className="fixed inset-0 z-[100] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setActiveDoc(null)}
            />
            <div className="min-h-full flex items-center justify-center p-3 sm:p-5 py-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto relative max-w-2xl w-full max-h-[90vh] bg-card rounded-2xl overflow-hidden border border-gold/40 shadow-2xl flex flex-col my-auto"
              >
                <div className="p-4 border-b border-border flex items-center justify-between bg-card shrink-0">
                  <span className="font-serif font-bold text-ink text-sm sm:text-base">
                    {activeDoc.title}
                  </span>
                  <button
                    onClick={() => setActiveDoc(null)}
                    aria-label="Close dialog"
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-ink hover:text-wine"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative w-full h-[55vh] sm:h-[65vh] max-h-[650px] p-2 bg-black/10 flex-1">
                  <Image
                    src={activeDoc.url}
                    alt={activeDoc.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </div>
                <div className="p-3.5 border-t border-border/80 bg-card/95 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
                  <a
                    href={activeDoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-wine text-white text-xs font-bold uppercase tracking-wider hover:bg-wine-hover shadow-wine transition-colors"
                  >
                    <span>Inspect High-Res</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="px-4 py-2 rounded-xl border border-border text-xs uppercase tracking-wider font-semibold text-ink hover:bg-card-subtle transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
