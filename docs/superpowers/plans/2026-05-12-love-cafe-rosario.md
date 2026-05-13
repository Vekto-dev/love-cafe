# Love Café Rosario — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete single-page editorial website for Love Café Rosario — warm, pink, feminine, Maman NYC-inspired aesthetic with all 8 sections from the spec.

**Architecture:** Single `app/page.tsx` composing isolated section components. Each section is a `"use client"` React component using motion v12 for scroll-triggered animations. All brand data (menu URLs, hours, contact) lives in `lib/data/` constants, never hardcoded in JSX.

**Tech Stack:** Next.js 16 (App Router), Tailwind v4, motion v12 (import from `"motion/react"`), next/font/google (Playfair Display + DM Sans), next/image (local images), shadcn/ui button, lucide-react icons.

---

## File Map

| Action | Path | Purpose |
|---|---|---|
| Create | `public/logo.svg` | Brand logo (copied from Downloads) |
| Create | `public/images/cafeteravertiendocafe.jpg` | Hero + Instagram photo |
| Create | `public/images/doscafedospasteles.jpg` | Gallery + Instagram photo |
| Create | `public/images/macarons.jpg` | Gallery + Instagram photo |
| Create | `public/images/mesa2cafey3postres.jpg` | About + Instagram photo |
| Modify | `app/globals.css` | Love Café color tokens, font variables, base styles |
| Modify | `app/layout.tsx` | Playfair Display + DM Sans fonts, metadata |
| Modify | `next.config.ts` | Nothing needed (local images only) |
| Create | `lib/data/menus.ts` | Menu PDF URLs + hours + contact constants |
| Create | `components/ui/CrochetBorder.tsx` | SVG lace/crochet decorative border |
| Create | `components/ui/WhatsAppFloat.tsx` | Fixed WA button bottom-right |
| Create | `components/Navbar.tsx` | Transparent → blur navbar on scroll |
| Create | `components/sections/Hero.tsx` | Fullscreen editorial hero |
| Create | `components/sections/Menu.tsx` | Two menu PDF cards |
| Create | `components/sections/Gallery.tsx` | Horizontal scroll photo strip |
| Create | `components/sections/InstagramFeed.tsx` | IG-styled horizontal card row |
| Create | `components/sections/About.tsx` | Two-column love story section |
| Create | `components/sections/Location.tsx` | Address, hours, maps embed |
| Create | `components/sections/Footer.tsx` | Minimal editorial footer |
| Modify | `app/page.tsx` | Compose all sections |

---

## Task 1: Copy brand assets to public/

**Files:**
- Create: `public/logo.svg`
- Create: `public/images/` (4 photos)

- [ ] **Step 1: Create images directory and copy all assets**

```bash
mkdir -p /Users/lautaroantunez/love-cafe/public/images
cp /Users/lautaroantunez/Downloads/lovecafe1.svg /Users/lautaroantunez/love-cafe/public/logo.svg
cp /Users/lautaroantunez/Desktop/love-cafe/cafeteravertiendocafe.jpg /Users/lautaroantunez/love-cafe/public/images/
cp /Users/lautaroantunez/Desktop/love-cafe/doscafedospasteles.jpg /Users/lautaroantunez/love-cafe/public/images/
cp /Users/lautaroantunez/Desktop/love-cafe/macarons.jpg /Users/lautaroantunez/love-cafe/public/images/
cp /Users/lautaroantunez/Desktop/love-cafe/mesa2cafey3postres.jpg /Users/lautaroantunez/love-cafe/public/images/
```

- [ ] **Step 2: Verify files are present**

```bash
ls /Users/lautaroantunez/love-cafe/public/images/
ls /Users/lautaroantunez/love-cafe/public/logo.svg
```

Expected: 4 `.jpg` files listed + logo.svg present.

- [ ] **Step 3: Commit**

```bash
cd /Users/lautaroantunez/love-cafe
git add public/
git commit -m "feat: add brand assets (logo + 4 photos)"
```

---

## Task 2: Brand data constants

**Files:**
- Create: `lib/data/menus.ts`

- [ ] **Step 1: Create the constants file**

Create `lib/data/menus.ts`:

```typescript
export const MENU_DIGITAL_URL =
  "https://drive.google.com/file/d/1vTlTueiwaBhENB2VWKS-MhEAnqoUbdjO/view"

export const MENU_TORTAS_URL =
  "https://drive.google.com/file/d/1ZVzzruHnpbgkN_9EEV8QEr8wFrvrvhDi/view"

export const WHATSAPP_URL = "https://wa.me/54934183031111"

export const INSTAGRAM_URL = "https://www.instagram.com/lovecafe.ros/"

export const HOURS = [
  { days: "Lunes a viernes", time: "8:00 – 20:00" },
  { days: "Sábados", time: "9:00 – 13:00 · 16:00 – 20:00" },
  { days: "Domingos", time: "9:00 – 13:00" },
]

export const ADDRESS = "Tucumán 1114, Rosario"

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Tucumán+1114+Rosario+Argentina&t=&z=16&ie=UTF8&iwloc=&output=embed"

export const INSTAGRAM_PHOTOS = [
  {
    src: "/images/cafeteravertiendocafe.jpg",
    alt: "Cafetera vertiendo café",
    caption: "El ritual de cada mañana",
  },
  {
    src: "/images/doscafedospasteles.jpg",
    alt: "Dos cafés y dos pasteles",
    caption: "Para dos, siempre hay lugar",
  },
  {
    src: "/images/macarons.jpg",
    alt: "Macarons",
    caption: "Dulces momentos",
  },
  {
    src: "/images/mesa2cafey3postres.jpg",
    alt: "Mesa con cafés y postres",
    caption: "La mesa perfecta",
  },
]
```

- [ ] **Step 2: Commit**

```bash
git add lib/data/menus.ts
git commit -m "feat: add brand data constants (menus, hours, contact)"
```

---

## Task 3: Design tokens + fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace globals.css with Love Café theme**

Replace the entire contents of `app/globals.css`:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-body);
  --font-mono: var(--font-geist-mono);
  --font-heading: var(--font-heading);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);

  /* Love Café brand tokens */
  --color-love-blush: #FFF7F8;
  --color-love-petal: #FFE4E6;
  --color-love-pink: #FBCFE8;
  --color-love-rose: #FDA4AF;
  --color-love-crimson: #881337;
  --color-love-cream: #FDF6F0;
  --color-love-latte: #C9A98A;
  --color-love-chocolate: #5C3317;
}

:root {
  --background: #FFF7F8;
  --foreground: #5C3317;
  --card: #FDF6F0;
  --card-foreground: #5C3317;
  --popover: #FDF6F0;
  --popover-foreground: #5C3317;
  --primary: #881337;
  --primary-foreground: #FFF7F8;
  --secondary: #FFE4E6;
  --secondary-foreground: #5C3317;
  --muted: #FFE4E6;
  --muted-foreground: #C9A98A;
  --accent: #FBCFE8;
  --accent-foreground: #881337;
  --destructive: oklch(0.577 0.245 27.325);
  --border: #FDA4AF;
  --input: #FFE4E6;
  --ring: #FDA4AF;
  --radius: 0.875rem;
  --sidebar: #FDF6F0;
  --sidebar-foreground: #5C3317;
  --sidebar-primary: #881337;
  --sidebar-primary-foreground: #FFF7F8;
  --sidebar-accent: #FFE4E6;
  --sidebar-accent-foreground: #5C3317;
  --sidebar-border: #FDA4AF;
  --sidebar-ring: #FDA4AF;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
    scroll-behavior: smooth;
  }
}
```

- [ ] **Step 2: Update layout.tsx with Playfair Display + DM Sans**

Replace the entire contents of `app/layout.tsx`:

```tsx
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Love Café Rosario — Specialty Coffee & Pastelería",
  description:
    "Café de especialidad, tortas y pasteles artesanales en el corazón de Rosario. Tucumán 1114.",
  openGraph: {
    title: "Love Café Rosario",
    description: "Coffee made with love. Sweet mornings in Rosario.",
    locale: "es_AR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full antialiased",
        playfair.variable,
        dmSans.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-[#FFF7F8]">{children}</body>
    </html>
  )
}
```

- [ ] **Step 3: Start dev server and verify pink background + correct fonts load**

```bash
cd /Users/lautaroantunez/love-cafe && npm run dev
```

Open http://localhost:3000 — page should have `#FFF7F8` background (very light pink/white). Existing page content will still render.

- [ ] **Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: Love Café design tokens, Playfair Display + DM Sans fonts"
```

---

## Task 4: CrochetBorder UI component

**Files:**
- Create: `components/ui/CrochetBorder.tsx`

- [ ] **Step 1: Create the crochet SVG border component**

Create `components/ui/CrochetBorder.tsx`:

```tsx
export function CrochetBorder({
  position = "top",
  color = "#FDA4AF",
}: {
  position?: "top" | "bottom"
  color?: string
}) {
  const isBottom = position === "bottom"
  return (
    <div
      aria-hidden
      className={`absolute left-0 right-0 ${isBottom ? "bottom-0" : "top-0"} overflow-hidden`}
      style={{ height: 24 }}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ transform: isBottom ? "scaleY(-1)" : undefined }}
      >
        {/* Scalloped chain row — outer wave */}
        <path
          d="M0,12 Q25,0 50,12 Q75,24 100,12 Q125,0 150,12 Q175,24 200,12 Q225,0 250,12 Q275,24 300,12 Q325,0 350,12 Q375,24 400,12 Q425,0 450,12 Q475,24 500,12 Q525,0 550,12 Q575,24 600,12 Q625,0 650,12 Q675,24 700,12 Q725,0 750,12 Q775,24 800,12 Q825,0 850,12 Q875,24 900,12 Q925,0 950,12 Q975,24 1000,12 Q1025,0 1050,12 Q1075,24 1100,12 Q1125,0 1150,12 Q1175,24 1200,12"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
        />
        {/* Inner wave offset — gives the double-thread crochet look */}
        <path
          d="M0,16 Q25,4 50,16 Q75,28 100,16 Q125,4 150,16 Q175,28 200,16 Q225,4 250,16 Q275,28 300,16 Q325,4 350,16 Q375,28 400,16 Q425,4 450,16 Q475,28 500,16 Q525,4 550,16 Q575,28 600,16 Q625,4 650,16 Q675,28 700,16 Q725,4 750,16 Q775,28 800,16 Q825,4 850,16 Q875,28 900,16 Q925,4 950,16 Q975,28 1000,16 Q1025,4 1050,16 Q1075,28 1100,16 Q1125,4 1150,16 Q1175,28 1200,16"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        {/* Dots at each peak — crochet stitch nodes */}
        {Array.from({ length: 25 }, (_, i) => i * 50).map((x) => (
          <circle key={x} cx={x} cy={12} r={2.5} fill={color} />
        ))}
      </svg>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/CrochetBorder.tsx
git commit -m "feat: CrochetBorder SVG lace decorative component"
```

---

## Task 5: WhatsApp float button

**Files:**
- Create: `components/ui/WhatsAppFloat.tsx`

- [ ] **Step 1: Create the WhatsApp floating button**

Create `components/ui/WhatsAppFloat.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import { WHATSAPP_URL } from "@/lib/data/menus"

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full shadow-lg"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-7 fill-white"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ui/WhatsAppFloat.tsx
git commit -m "feat: WhatsApp floating button with spring animation"
```

---

## Task 6: Navbar

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create the Navbar component**

Create `components/Navbar.tsx`:

```tsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Visítanos", href: "#visitanos" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,247,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(253,164,175,0.3)" : "1px solid transparent",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Love Café Rosario"
            width={80}
            height={80}
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[#5C3317] transition-colors hover:text-[#881337]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#881337] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#FFF7F8]/95 backdrop-blur-md border-t border-[#FDA4AF]/20"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#5C3317] hover:text-[#881337] transition-colors py-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: Navbar with transparent-to-blur scroll transition and mobile menu"
```

---

## Task 7: Hero section

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: Create the Hero component**

Create `components/sections/Hero.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import Image from "next/image"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
})

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 70% 50%, #FBCFE8 0%, #FFF7F8 70%)",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 px-6 py-32 md:py-0 items-center w-full">
        {/* Text block */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <motion.p
            {...fadeUp(0.1)}
            className="text-xs tracking-[0.3em] uppercase text-[#C9A98A]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Specialty Coffee · Rosario
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="text-5xl md:text-7xl leading-tight text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Coffee made
            <br />
            <em>with love</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg text-[#5C3317]/70 max-w-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Sweet mornings in Rosario. Specialty coffee &amp; pastry hecho con el corazón.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex gap-4 flex-wrap">
            <a
              href="#menu"
              className="inline-block rounded-full border-2 border-[#881337] px-8 py-3 text-sm font-medium text-[#881337] transition-all duration-300 hover:bg-[#881337] hover:text-white"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ver Menú
            </a>
            <a
              href="#visitanos"
              className="inline-block rounded-full px-8 py-3 text-sm font-medium text-[#C9A98A] transition-colors hover:text-[#881337]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Cómo llegar →
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 md:w-96 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: "0 32px 80px rgba(136,19,55,0.15)" }}
          >
            <Image
              src="/images/cafeteravertiendocafe.jpg"
              alt="Cafetera vertiendo café en Love Café Rosario"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </div>
          {/* Decorative blush blob */}
          <div
            className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-40 blur-2xl pointer-events-none"
            style={{ backgroundColor: "#FDA4AF" }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest text-[#C9A98A] uppercase" style={{ fontFamily: "var(--font-body)" }}>
          scroll
        </span>
        <motion.div
          className="w-px h-8 bg-[#FDA4AF]"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: Hero section with editorial split layout and motion entrance"
```

---

## Task 8: Menu section

**Files:**
- Create: `components/sections/Menu.tsx`

- [ ] **Step 1: Create the Menu section**

Create `components/sections/Menu.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import { Coffee, Cake } from "lucide-react"
import { MENU_DIGITAL_URL, MENU_TORTAS_URL } from "@/lib/data/menus"

const MENUS = [
  {
    icon: Coffee,
    title: "Menú Digital",
    description:
      "Cafés de especialidad, bebidas calientes y frías. Para empezar el día con amor.",
    url: MENU_DIGITAL_URL,
    cta: "Ver Menú de Café",
  },
  {
    icon: Cake,
    title: "Menú de Tortas",
    description:
      "Tortas, macarons y pasteles elaborados con amor. Dulces momentos para compartir.",
    url: MENU_TORTAS_URL,
    cta: "Ver Menú de Tortas",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32" style={{ backgroundColor: "#FDF6F0" }}>
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}>
            Lo que preparamos
          </p>
          <h2 className="text-4xl md:text-5xl text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Nuestros Menús
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENUS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="group relative flex flex-col items-center text-center gap-6 rounded-3xl p-10 border border-[#FDA4AF]/30 bg-white transition-shadow duration-300 hover:shadow-xl"
              style={{ boxShadow: "0 4px 24px rgba(136,19,55,0.06)" }}
            >
              {/* Icon circle */}
              <div className="flex size-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <item.icon className="size-7 text-[#881337]" strokeWidth={1.5} />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl text-[#881337]"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-[#5C3317]/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}>
                  {item.description}
                </p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#881337] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#6B0F2A] hover:gap-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.cta}
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Menu.tsx
git commit -m "feat: Menu section with two premium PDF cards"
```

---

## Task 9: Gallery section

**Files:**
- Create: `components/sections/Gallery.tsx`

- [ ] **Step 1: Create the Gallery component**

Create `components/sections/Gallery.tsx`:

```tsx
"use client"

import { useRef } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PHOTOS = [
  { src: "/images/cafeteravertiendocafe.jpg", alt: "Cafetera vertiendo café" },
  { src: "/images/doscafedospasteles.jpg", alt: "Dos cafés y dos pasteles" },
  { src: "/images/macarons.jpg", alt: "Macarons" },
  { src: "/images/mesa2cafey3postres.jpg", alt: "Mesa con cafés y postres" },
]

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const amount = direction === "right" ? 360 : -360
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section id="galeria" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#FFF7F8" }}>
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
          style={{ fontFamily: "var(--font-body)" }}>
          Momentos
        </p>
        <h2 className="text-4xl md:text-5xl text-[#881337]"
          style={{ fontFamily: "var(--font-heading)" }}>
          Galería
        </h2>
      </motion.div>

      {/* Scroll strip */}
      <div className="relative">
        {/* Arrow buttons — desktop only */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex size-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur text-[#881337] hover:bg-white transition"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex size-10 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur text-[#881337] hover:bg-white transition"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>

        {/* Photos strip */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-16 pb-4"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="relative shrink-0 overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              style={{
                scrollSnapAlign: "start",
                width: 300,
                height: 400,
                boxShadow: "0 8px 32px rgba(136,19,55,0.10)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="300px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Gallery.tsx
git commit -m "feat: Gallery horizontal scroll strip with arrow navigation"
```

---

## Task 10: Instagram Feed section

**Files:**
- Create: `components/sections/InstagramFeed.tsx`

- [ ] **Step 1: Create the Instagram feed section**

Create `components/sections/InstagramFeed.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { INSTAGRAM_PHOTOS, INSTAGRAM_URL } from "@/lib/data/menus"

export function InstagramFeed() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#FFE4E6" }}>
      {/* Header */}
      <motion.div
        className="text-center mb-12 px-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
          style={{ fontFamily: "var(--font-body)" }}>
          Seguinos
        </p>
        <h2 className="text-4xl md:text-5xl text-[#881337] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}>
          Seguí nuestra historia
        </h2>
        <p className="text-[#C9A98A] text-sm" style={{ fontFamily: "var(--font-body)" }}>
          @lovecafe.ros
        </p>
      </motion.div>

      {/* Cards strip */}
      <div
        className="flex gap-5 overflow-x-auto px-6 md:px-16 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {INSTAGRAM_PHOTOS.map((photo, i) => (
          <motion.a
            key={photo.src}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group shrink-0 rounded-2xl overflow-hidden bg-white cursor-pointer"
            style={{
              width: 260,
              boxShadow: "0 4px 20px rgba(136,19,55,0.08)",
            }}
          >
            {/* Photo */}
            <div className="relative" style={{ width: 260, height: 260 }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="260px"
              />
            </div>

            {/* Caption bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-[#FFE4E6]">
              <Instagram size={14} className="text-[#881337] shrink-0" />
              <span className="text-xs text-[#5C3317]/70 truncate"
                style={{ fontFamily: "var(--font-body)" }}>
                {photo.caption}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10 px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#881337] px-8 py-3 text-sm font-medium text-[#881337] transition-all duration-300 hover:bg-[#881337] hover:text-white"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Instagram size={15} />
          Seguinos en Instagram
        </a>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/InstagramFeed.tsx
git commit -m "feat: Instagram feed section with horizontal scroll cards"
```

---

## Task 11: About section

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: Create the About section**

Create `components/sections/About.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import Image from "next/image"

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32" style={{ backgroundColor: "#FFF7F8" }}>
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div
            className="relative w-72 md:w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(136,19,55,0.12)" }}
          >
            <Image
              src="/images/mesa2cafey3postres.jpg"
              alt="Mesa de Love Café Rosario"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 400px"
            />
          </div>
          {/* Pink accent blob */}
          <div
            className="absolute -top-6 -right-6 w-40 h-40 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ backgroundColor: "#FBCFE8" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A]"
            style={{ fontFamily: "var(--font-body)" }}>
            Nuestra historia
          </p>

          <h2 className="text-4xl md:text-5xl text-[#881337] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}>
            Hecho con amor,<br />
            <em>servido con el corazón</em>
          </h2>

          {/* Heart separator */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-[#FDA4AF]/40" />
            <span className="text-[#FDA4AF] text-lg">♥</span>
            <div className="h-px flex-1 bg-[#FDA4AF]/40" />
          </div>

          <p className="text-[#5C3317]/75 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-body)" }}>
            Love Café nació del deseo de crear un rincón en Rosario donde cada visita se sienta como un abrazo. Seleccionamos granos de especialidad y los transformamos en bebidas con alma, mientras nuestra cocina elabora pasteles y tortas con ingredientes frescos y mucha dedicación.
          </p>

          <p className="text-[#5C3317]/75 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-body)" }}>
            Cada taza, cada postre, cada detalle de nuestro espacio fue pensado para que te sientas especial. Porque creemos que los momentos más dulces de la vida merecen un lugar a la altura.
          </p>

          <a
            href="#visitanos"
            className="self-start inline-flex items-center gap-2 text-sm text-[#881337] font-medium hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Encontranos en Rosario →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/About.tsx
git commit -m "feat: About section with love story copy and two-column layout"
```

---

## Task 12: Location section

**Files:**
- Create: `components/sections/Location.tsx`

- [ ] **Step 1: Create the Location section**

Create `components/sections/Location.tsx`:

```tsx
"use client"

import { motion } from "motion/react"
import { MapPin, Clock } from "lucide-react"
import { HOURS, ADDRESS, MAPS_EMBED_URL } from "@/lib/data/menus"
import { CrochetBorder } from "@/components/ui/CrochetBorder"

export function Location() {
  return (
    <section id="visitanos" className="py-24 md:py-32" style={{ backgroundColor: "#FFE4E6" }}>
      <div className="mx-auto max-w-2xl px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A98A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}>
            Dónde estamos
          </p>
          <h2 className="text-4xl md:text-5xl text-[#881337]"
            style={{ fontFamily: "var(--font-heading)" }}>
            Encontranos
          </h2>
        </motion.div>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="relative rounded-3xl bg-white overflow-hidden pt-8"
          style={{ boxShadow: "0 8px 40px rgba(136,19,55,0.10)" }}
        >
          {/* Crochet top border */}
          <CrochetBorder position="top" />

          <div className="px-8 pb-0 pt-4 flex flex-col gap-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <MapPin size={18} className="text-[#881337]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A98A] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Dirección
                </p>
                <p className="text-xl text-[#881337]"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  {ADDRESS}
                </p>
                <p className="text-sm text-[#5C3317]/60" style={{ fontFamily: "var(--font-body)" }}>
                  Rosario, Santa Fe, Argentina
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "#FFE4E6" }}>
                <Clock size={18} className="text-[#881337]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C9A98A] mb-3"
                  style={{ fontFamily: "var(--font-body)" }}>
                  Horarios
                </p>
                <div className="flex flex-col gap-2">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="text-sm font-medium text-[#5C3317] w-44"
                        style={{ fontFamily: "var(--font-body)" }}>
                        {h.days}
                      </span>
                      <span className="text-sm text-[#5C3317]/70"
                        style={{ fontFamily: "var(--font-body)" }}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-8 w-full overflow-hidden" style={{ height: 280 }}>
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Love Café Rosario en Google Maps"
            />
          </div>

          {/* Crochet bottom border */}
          <CrochetBorder position="bottom" />
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Location.tsx
git commit -m "feat: Location section with crochet borders, hours, and maps embed"
```

---

## Task 13: Footer

**Files:**
- Create: `components/sections/Footer.tsx`

- [ ] **Step 1: Create the Footer component**

Create `components/sections/Footer.tsx`:

```tsx
import Image from "next/image"
import { Instagram } from "lucide-react"
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/data/menus"

export function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#FFF7F8" }}>
      <div className="mx-auto max-w-lg flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Love Café Rosario"
          width={64}
          height={64}
          className="h-16 w-auto opacity-80"
        />

        {/* Tagline */}
        <p className="text-xs tracking-[0.25em] uppercase text-[#C9A98A]"
          style={{ fontFamily: "var(--font-body)" }}>
          Coffee made with love · Rosario
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-[#FDA4AF]/50" />

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Love Café"
            className="flex size-10 items-center justify-center rounded-full border border-[#FDA4AF]/40 text-[#881337] transition-all hover:bg-[#FFE4E6] hover:border-[#FDA4AF]"
          >
            <Instagram size={17} />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de Love Café"
            className="flex size-10 items-center justify-center rounded-full border border-[#FDA4AF]/40 text-[#881337] transition-all hover:bg-[#FFE4E6] hover:border-[#FDA4AF]"
          >
            {/* WhatsApp icon inline */}
            <svg viewBox="0 0 24 24" className="size-[17px] fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#C9A98A]/70" style={{ fontFamily: "var(--font-body)" }}>
          © {new Date().getFullYear()} Love Café Rosario. Hecho con ♥
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/Footer.tsx
git commit -m "feat: Footer with logo, social links, tagline"
```

---

## Task 14: Compose page.tsx

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace page.tsx with full composition**

Replace entire contents of `app/page.tsx`:

```tsx
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { Gallery } from "@/components/sections/Gallery"
import { InstagramFeed } from "@/components/sections/InstagramFeed"
import { About } from "@/components/sections/About"
import { Location } from "@/components/sections/Location"
import { Footer } from "@/components/sections/Footer"
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <InstagramFeed />
        <About />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
```

- [ ] **Step 2: Delete unused components from previous scaffold**

```bash
rm /Users/lautaroantunez/love-cafe/components/ui/text-gif.tsx
rm /Users/lautaroantunez/love-cafe/components/ui/texture-card.tsx
```

- [ ] **Step 3: Start dev server and do full visual QA**

```bash
cd /Users/lautaroantunez/love-cafe && npm run dev
```

Check each section at http://localhost:3000:
- [ ] Navbar: transparent on top, blurs on scroll, hamburger works on mobile width
- [ ] Hero: pink gradient background, portrait image right, fade-up animations play once, scroll indicator pulses
- [ ] Menu: two cards with icons, buttons open Google Drive PDFs in new tab
- [ ] Gallery: 4 photos scroll horizontally, arrows work on desktop, swipe works on mobile
- [ ] Instagram: 4 cards scroll, captions visible, CTA button links to Instagram
- [ ] About: two-column layout, love story copy, image left
- [ ] Location: crochet border top and bottom of card, 3 hour rows, map loads
- [ ] Footer: logo, Instagram + WhatsApp icons, copyright
- [ ] WhatsApp float: green circle appears after ~1.5s, links to WA

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/ui/
git commit -m "feat: compose full page, remove old scaffold components"
```

---

## Task 15: Build verification

- [ ] **Step 1: Run production build**

```bash
cd /Users/lautaroantunez/love-cafe && npm run build
```

Expected: build completes with no errors. Warnings about `img` vs `next/image` are acceptable only if zero are present (we use `next/image` everywhere).

- [ ] **Step 2: Fix any TypeScript or build errors**

Common issues and fixes:

- `Warning: prop 'href' passed to <a>` inside motion — add `legacyBehavior` or restructure. Already handled in plan (using plain `<a>` tags, not next/link).
- `Warning: Each child in a list should have a unique key` — all `.map()` calls in plan use `key` props.
- Image `width`/`height` missing — all `next/image` with `fill` use `fill` prop (no width/height needed).

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat: Love Café Rosario website complete"
```
