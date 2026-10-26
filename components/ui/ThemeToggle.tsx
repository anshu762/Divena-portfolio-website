"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="group relative w-10 h-10 rounded-full border border-border/80 bg-card/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-gold hover:shadow-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-ink transition-transform duration-300 group-hover:-rotate-12 group-hover:text-wine" />
      ) : (
        <Sun className="w-4 h-4 text-gold transition-transform duration-300 group-hover:rotate-45 group-hover:text-gold-light" />
      )}
    </button>
  );
}
