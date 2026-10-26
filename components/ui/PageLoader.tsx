"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem("portfolio-intro-seen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasLoaded || prefersReducedMotion) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("portfolio-intro-seen", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setVisible(false);
    sessionStorage.setItem("portfolio-intro-seen", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          onClick={handleSkip}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0E0C0B] text-white cursor-pointer select-none"
        >
          {/* Subtle noise grain */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.15),transparent_60%)]" />

          {/* Central Monogram Reveal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-3"
          >
            <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center bg-white/5 backdrop-blur-sm">
              <span className="font-serif text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-[#B38F4D]">
                DC
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-center"
            >
              <h2 className="font-serif text-lg tracking-[0.25em] uppercase text-white/90">
                Divena Rajesh Chugani
              </h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold/75 mt-1 font-sans">
                Portfolio &middot; 2026
              </p>
            </motion.div>
          </motion.div>

          <span className="absolute bottom-8 text-[11px] text-stone-500 tracking-wider">
            Click to continue
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
