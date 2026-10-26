"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { portfolio } from "@/data/portfolio";
import { Sparkles, Brain, Award } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            06
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            Competencies &middot; Cognitive Frameworks
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink">
          Core Skills & Capabilities
        </h2>
        <p className="text-sm md:text-base text-ink-muted mt-2 max-w-2xl">
          An intersection of analytical quantitative acumen and collaborative behavioral leadership.
        </p>
      </Reveal>

      {/* Grid: Hard Skills vs Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Hard Skills Group */}
        <Reveal delay={0.1}>
          <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-editorial h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-border/60 mb-6">
                <Brain className="w-5 h-5 text-wine dark:text-[#E8829C]" />
                <h3 className="font-serif text-xl font-bold text-ink">
                  Hard Skills & Analytics
                </h3>
              </div>

              <div className="space-y-4">
                {portfolio.skills.hard.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-4 rounded-2xl bg-card-subtle/70 border border-border/60 transition-colors hover:border-wine/50 hover:bg-wine/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-ink">
                        {skill.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-wine/10 text-wine dark:text-[#E8829C] font-semibold font-sans">
                        Analytical #{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted mt-1 font-sans">
                      {skill.focus}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-ink-muted font-sans">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Applied in financial modeling, essay theses & business plans</span>
            </div>
          </div>
        </Reveal>

        {/* Soft Skills Group */}
        <Reveal delay={0.2}>
          <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-editorial h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 border-b border-border/60 mb-6">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl font-bold text-ink">
                  Soft Skills & Leadership
                </h3>
              </div>

              <div className="space-y-4">
                {portfolio.skills.soft.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="p-4 rounded-2xl bg-card-subtle/70 border border-border/60 transition-colors hover:border-gold/60 hover:bg-gold/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-ink">
                        {skill.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold/15 text-gold font-semibold font-sans">
                        Executive #{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-ink-muted mt-1 font-sans">
                      {skill.focus}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-ink-muted font-sans">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Cultivated through 5+ years varsity captaincy & non-profit directorship</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
