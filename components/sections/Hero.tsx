"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Trophy, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MonogramPlaceholder } from "@/components/ui/MonogramPlaceholder";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-wine/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full bg-gold/10 blur-3xl" />

      {/* Top Tagline Pill */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex justify-center lg:justify-start"
      >
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-gold/40 bg-card/70 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-sans tracking-wider uppercase font-semibold text-ink-muted truncate">
            {portfolio.education} &middot; {portfolio.school}
          </span>
        </div>
      </motion.div>

      {/* Main Hero Content: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto py-6 sm:py-8">
        {/* Left Column: Big Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2.5 sm:space-y-3"
          >
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight text-ink leading-[1.02] sm:leading-[0.98]">
              Divena <br className="hidden sm:inline" />
              <span className="italic font-normal text-wine dark:text-[#E8829C]">
                Rajesh
              </span>{" "}
              Chugani
            </h1>

            <p className="font-serif text-lg sm:text-2xl md:text-3xl text-ink-muted tracking-tight max-w-xl">
              &ldquo;{portfolio.tagline}&rdquo;
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-ink-muted max-w-xl leading-relaxed"
          >
            {portfolio.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
          >
            <Button href="#projects" variant="primary" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Let&apos;s Connect
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Arched Luxury Frame with Divena's Portrait + Floating Badges */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[420px]"
          >
            {/* The Arched Portrait Frame */}
            <MonogramPlaceholder
              imageSrc={portfolio.profileImage}
              name={portfolio.name}
              className="w-full h-full"
            />

            {/* Floating Badge 1: Founder Rural Bazaar */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-3 -right-2 sm:-right-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-panel shadow-editorial border border-gold/40 flex items-center gap-2 sm:gap-2.5 z-20 scale-90 sm:scale-100"
            >
              <div className="w-7 h-7 rounded-full bg-wine/10 text-wine dark:text-gold flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-muted font-sans font-semibold">
                  Founder
                </p>
                <p className="text-xs font-serif font-bold text-ink">Rural Bazaar</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Volleyball Captain */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-1/2 -left-3 sm:-left-8 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-panel shadow-editorial border border-border flex items-center gap-2 sm:gap-2.5 z-20 scale-90 sm:scale-100"
            >
              <div className="w-7 h-7 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                <Trophy className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-muted font-sans font-semibold">
                  Team Captain
                </p>
                <p className="text-xs font-serif font-bold text-ink">Varsity Volleyball</p>
              </div>
            </motion.div>

            {/* Floating Badge 3: John Locke Commended */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.4 }}
              className="absolute -bottom-3 right-0 sm:-right-4 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl glass-panel shadow-editorial border border-gold/40 flex items-center gap-2 sm:gap-2.5 z-20 scale-90 sm:scale-100"
            >
              <div className="w-7 h-7 rounded-full bg-wine/10 text-wine dark:text-gold flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-muted font-sans font-semibold">
                  Global Honors
                </p>
                <p className="text-xs font-serif font-bold text-ink">John Locke Commended</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="w-full flex justify-center pt-2 sm:pt-4"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-ink-muted hover:text-wine transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-gold group-hover:text-wine transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
