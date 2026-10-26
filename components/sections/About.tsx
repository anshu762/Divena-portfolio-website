"use client";

import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { portfolio } from "@/data/portfolio";
import { Sparkles, Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="font-serif text-sm md:text-base font-bold text-wine dark:text-gold tracking-widest">
            01
          </span>
          <div className="w-8 h-[1px] bg-wine/40 dark:bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.25em] text-ink-muted font-sans font-semibold">
            About &middot; Philosophy &middot; Impact
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-3xl leading-[1.1]">
          Connecting economic theory with grassroots enterprise.
        </h2>
      </Reveal>

      {/* Main About Layout: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
        {/* Left Column: Narrative & Quote */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              {portfolio.bio}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
              {portfolio.extendedBio}
            </p>
          </Reveal>

          {/* Editorial Quote Card */}
          <Reveal delay={0.3}>
            <div className="relative p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-editorial my-6 overflow-hidden group">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-gold/15 transition-transform duration-500 group-hover:scale-110" />
              <p className="font-serif italic text-lg sm:text-xl text-ink leading-relaxed">
                &ldquo;Business models without behavioural empathy are merely spreadsheets. Real value begins where human decisions diverge from classical assumptions.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-6 h-[1px] bg-gold" />
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gold">
                  Divena Rajesh Chugani
                </span>
              </div>
            </div>
          </Reveal>

          {/* Currently Exploring Tags */}
          <Reveal delay={0.4}>
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider font-sans font-semibold text-ink-muted flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" /> Currently Researching & Exploring:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {portfolio.currentlyExploring.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-card-subtle text-ink font-medium border border-border transition-all duration-300 hover:border-gold hover:text-wine"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Animated Stats Showcase */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <Reveal delay={0.2}>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-card to-card-subtle border border-border/90 shadow-editorial-lg">
              <div className="flex items-center justify-between pb-4 border-b border-border/70 mb-6">
                <h3 className="font-serif text-lg font-bold text-ink">
                  Key Metrics at a Glance
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-gold font-sans font-semibold">
                  Verified Data
                </span>
              </div>

              <div className="space-y-6">
                {portfolio.keyStats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:border-gold/60 hover:shadow-sm"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-wine dark:text-gold">
                        <CountUp
                          end={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          decimals={stat.value % 1 !== 0 ? 1 : 0}
                        />
                      </div>
                      <span className="text-[11px] font-sans font-bold text-ink-muted uppercase tracking-wider text-right">
                        #{idx + 1}
                      </span>
                    </div>

                    <h4 className="font-sans font-bold text-sm text-ink mt-1">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {stat.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
