import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg)",
        card: "var(--bg-card)",
        "card-subtle": "var(--bg-card-subtle)",
        ink: "var(--text-main)",
        "ink-muted": "var(--text-muted)",
        "ink-faint": "var(--text-faint)",
        wine: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          light: "var(--accent-light)",
          glow: "var(--accent-glow)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "var(--gold-light)",
          glow: "var(--gold-glow)",
        },
        border: "var(--border-main)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
      },
      animation: {
        "marquee-slow": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(20, 17, 15, 0.08)",
        "editorial-lg": "0 30px 60px -20px rgba(20, 17, 15, 0.14)",
        "editorial-dark": "0 20px 40px -15px rgba(0, 0, 0, 0.45)",
        gold: "0 0 25px rgba(201, 166, 107, 0.25)",
        wine: "0 0 30px rgba(122, 30, 58, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
