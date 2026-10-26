# Divena Rajesh Chugani — Personal Portfolio

> **"Business mind. Behavioural lens. Built to launch."**  
> Premium, editorial-grade personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis.

---

## ✦ Aesthetic & Design System

- **Design Philosophy:** Luxury editorial meets boutique venture advisory. Warm, high-contrast typography, generous whitespace, subtle noise grain overlay, and responsive spring animations.
- **Palette:**
  - **Light (Default):** Warm Ivory (`#FAF7F2`), Deep Obsidian Ink (`#14110F`), Burgundy/Wine Accent (`#7A1E3A`), Champagne Gold (`#C9A66B`), Soft Sand (`#F2EBE0`).
  - **Dark (Obsidian):** Near-Black (`#0C0A09`), Cream Text (`#F7F3EC`), Rose-Wine (`#9E2B4E`), Champagne Gold (`#D6B57E`).
- **Typography:**
  - Headings: *Fraunces* (High-contrast editorial serif with italic expression)
  - Body & UI: *DM Sans* (Clean, legible geometric sans)
- **Smooth Interaction:** Lenis smooth scrolling, desktop magnetic custom cursor (disabled on touch), scroll progress hairline, animated count-up metrics, responsive bento grid, and full-resolution certificate lightbox.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS + PostCSS + CSS Variables
- **Motion & Interaction:** Framer Motion 12
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React & React Icons
- **Image Optimization:** `next/image` with AVIF / WebP support & responsive sizes

---

## 📂 Project Architecture

```
portfoliostudent/
├── app/
│   ├── api/contact/route.ts      # Contact endpoint (Web3Forms / Resend / mailto fallback)
│   ├── favicon.ico
│   ├── globals.css               # Editorial CSS design tokens & grain
│   ├── icon.tsx                  # Dynamic monogram favicon generator
│   ├── layout.tsx                # Fonts, Lenis, theme persistence, schema.org
│   ├── page.tsx                  # Single-page layout composition
│   ├── robots.ts                 # Search crawler instructions
│   └── sitemap.ts                # SEO XML sitemap
├── components/
│   ├── sections/
│   │   ├── About.tsx             # Bio, philosophy & verified metrics
│   │   ├── Achievements.tsx      # Honors & varsity volleyball captain spotlight
│   │   ├── Certificates.tsx      # 4 verified credentials & Lightbox integration
│   │   ├── Contact.tsx           # Working form + copy-to-clipboard channels
│   │   ├── Experience.tsx        # Internships + Leadership & extracurriculars
│   │   ├── Footer.tsx            # Navigation, auto year & back to top
│   │   ├── Hero.tsx              # Display typography, monogram & floating badges
│   │   ├── Navbar.tsx            # Sticky floating glassbar with hide/reveal
│   │   └── Skills.tsx            # Hard & soft skills animated pill clusters
│   └── ui/
│       ├── Button.tsx            # Editorial button variants & links
│       ├── CountUp.tsx           # IntersectionObserver RAF animated counter
│       ├── CustomCursor.tsx      # Desktop-only magnetic cursor ring
│       ├── Lightbox.tsx          # Fullscreen credential inspection with touch swipe
│       ├── Marquee.tsx           # Infinite keyword banner
│       ├── Modal.tsx             # Accessible project drawer with ESC support
│       ├── MonogramPlaceholder.tsx # Luxury arched monogram or real portrait
│       ├── PageLoader.tsx        # One-time session intro sequence
│       ├── Reveal.tsx            # Framer Motion scroll reveal
│       ├── ScrollProgress.tsx    # Hairline top progress bar
│       ├── ThemeToggle.tsx       # Light / Dark mode switcher
│       └── Toast.tsx             # Copy-to-clipboard notifications
├── data/
│   └── portfolio.ts              # Single typed source of truth for ALL content
├── docs/                         # Source documents & certificate images
├── public/
│   ├── images/                   # Copied certificate images & assets
│   └── noise.svg                 # Infinite procedural film grain
├── scripts/
│   └── copy-docs.mjs             # Automatic build-time asset synchronization
├── .env.example                  # Environment variable reference
├── next.config.ts                # Next.js compiler settings
├── tailwind.config.ts            # Custom design tokens & keyframes
└── tsconfig.json                 # TypeScript strict compiler configuration
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

```bash
npm run build
npm run start
```

---

## 🎨 How to Customize

### Replacing the Profile Photo
1. Place your portrait photo inside `public/images/profile.jpg`.
2. Open `data/portfolio.ts`.
3. Change:
   ```ts
   profileImage: "/images/profile.jpg",
   ```
4. Save. The portrait will automatically render inside the luxury arched frame with smooth hover scale effects. (Leaving `profileImage: ""` continues using the monogram "DC" placeholder).

### Adding / Updating Content
All text, numbers, awards, certificates, and project entries live inside `data/portfolio.ts`.
- **Add a project:** Add an object to `portfolio.projects`.
- **Add a certificate:** Add an entry to `portfolio.certificates` and place the image in `public/images/`.
- **Add LinkedIn:** Set `portfolio.contact.linkedin = "https://linkedin.com/in/your-handle"`. The icon will automatically appear in both the contact section and footer!

### Direct Contact & Inquiries
- **Zero backend required:** Visitors can initiate contact with one click using the pre-composed `mailto:` action or copy the formatted text directly.
- Direct channels include: `divenachugani@gmail.com` and `+91 91541 26880`.
- Mother's phone number is **strictly excluded** from all code and assets.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and import the repository.
3. In the project settings, add the environment variables from `.env.example` (if using Web3Forms or Resend).
4. Click **Deploy**. Vercel will build and assign a global CDN URL automatically.

---

## 🔒 Privacy Guarantee
- The personal phone number of the student's mother is **strictly excluded** from the codebase.
- Only the student's direct contact details (`divenachugani@gmail.com` and `+91 91541 26880`) are displayed.
