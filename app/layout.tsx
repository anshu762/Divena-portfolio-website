import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/lenis";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageLoader } from "@/components/ui/PageLoader";
import { portfolio } from "@/data/portfolio";

const serifFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0A09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://divenachugani.com"),
  title: `${portfolio.name} | Business, Economics & Entrepreneurship`,
  description: `${portfolio.name} — ${portfolio.role}. ${portfolio.bio}`,
  keywords: [
    "Divena Rajesh Chugani",
    "Divena Chugani",
    "Rural Bazaar",
    "Gramin Growth Lab",
    "Behavioural Economics",
    "John Locke Essay Prize",
    "Economics Student",
    "Chirec International School",
    "High Performance Collaboration Northwestern",
    "Kelley Women's Leadership",
  ],
  authors: [{ name: portfolio.name, url: "https://divenachugani.com" }],
  creator: portfolio.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divenachugani.com",
    title: `${portfolio.name} | ${portfolio.tagline}`,
    description: portfolio.bio,
    siteName: `${portfolio.name} Portfolio`,
    images: [
      {
        url: "/images/img4.png",
        width: 1200,
        height: 630,
        alt: `${portfolio.name} - John Locke Economics Commendation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.tagline}`,
    description: portfolio.bio,
    images: ["/images/img4.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon" },
    ],
    apple: "/icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: portfolio.school,
    },
    description: portfolio.bio,
    email: portfolio.contact.email,
    telephone: portfolio.contact.phoneFormatted,
    sameAs: [portfolio.contact.instagram],
    knowsAbout: [
      "Behavioural Economics",
      "Market Analysis",
      "Business Strategy",
      "Entrepreneurship",
      "Micro-Finance",
    ],
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('portfolio-theme');
                  if (saved) {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink transition-colors duration-300">
        <SmoothScrollProvider>
          {/* Top Scroll Indicator */}
          <ScrollProgress />

          {/* Luxury Film Grain Overlay */}
          <div className="film-grain" aria-hidden="true" />

          {/* Desktop Magnetic Custom Cursor */}
          <CustomCursor />

          {/* Single-session high-end intro reveal */}
          <PageLoader />

          {/* Main App Content */}
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
