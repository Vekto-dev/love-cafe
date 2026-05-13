# Love Café Rosario — Website Design Spec
*Date: 2026-05-12*

## Overview

Single-page editorial website for Love Café Rosario. Warm, feminine, elegant. Inspired by Maman NYC visual rhythm but fully adapted to a pastel-pink Argentine café brand. Built in Next.js 16, Tailwind v4, shadcn/ui, motion v12.

---

## Brand Assets

| Asset | Path |
|---|---|
| Logo SVG | `/public/logo.svg` (copied from `/Users/lautaroantunez/Downloads/lovecafe1.svg`) |
| Photo — cafetera vertiendo café | `/public/images/cafeteravertiendocafe.jpg` |
| Photo — dos cafés dos pasteles | `/public/images/doscafedospasteles.jpg` |
| Photo — macarons | `/public/images/macarons.jpg` |
| Photo — mesa 2 cafés 3 postres | `/public/images/mesa2cafey3postres.jpg` |
| WhatsApp | `https://wa.me/54934183031111` |
| Instagram | `https://www.instagram.com/lovecafe.ros/` |

---

## Color Palette

Defined as CSS custom properties in `globals.css`, replacing the current neutral theme:

```css
--love-blush:      #FFF7F8   /* page background */
--love-petal:      #FFE4E6   /* section tints */
--love-pink:       #FBCFE8   /* accents */
--love-rose:       #FDA4AF   /* hover states, borders */
--love-crimson:    #881337   /* logo, primary CTA */
--love-cream:      #FDF6F0   /* card backgrounds */
--love-latte:      #C9A98A   /* secondary text, warm accents */
--love-chocolate:  #5C3317   /* body text */
```

---

## Typography

Loaded via `next/font/google` in `layout.tsx`:

- **Headings**: Playfair Display — `variable: --font-heading`
- **Body**: DM Sans — `variable: --font-body`

Applied in `globals.css` via `@theme inline`.

---

## Design Tokens

```
Border radius large:  2rem   (photos, cards)
Border radius pill:   3rem   (CTA buttons)
Shadow soft:          0 4px 24px rgba(136,19,55,0.08)
Section padding:      py-24 md:py-32
Max content width:    1280px
```

---

## Decorative Element — Crochet Border

Used on the location card and section dividers. Implemented as an inline SVG `<pattern>` repeating element with `#FDA4AF` fill, simulating a lace/crochet stitch row. Applied via a `<CrochetBorder />` component that renders an `<svg>` absolutely positioned at the top/bottom edge of a container.

---

## Page Sections (top → bottom)

### 1. Navbar

- Fixed top, `z-50`
- Initial: transparent background, text `--love-chocolate`
- On scroll > 60px: `backdrop-blur-md`, `bg-[#FFF7F8]/90`, soft bottom border `--love-rose/30`
- Logo SVG left, centered on mobile
- Nav links right: Home · Menú · Nosotros · Galería · Visítanos
- Mobile: hamburger icon → links drop inline (no sidebar, no drawer)
- motion: fade-in from top on mount

### 2. Hero

- Full viewport height (`min-h-svh`)
- Background: `--love-blush` with radial gradient pink glow center-right
- Layout: two columns on desktop, stacked on mobile
  - Left: editorial text block
    - Eyebrow: `"Specialty Coffee · Rosario"` — small caps, tracked, `--love-latte`
    - H1: `"Coffee made with love"` — Playfair Display, large (clamp 3rem→6rem)
    - Subline: `"Sweet mornings in Rosario"` — DM Sans light italic
    - CTA: pill button `"Ver Menú"` border `--love-crimson`, fills on hover
  - Right: `cafeteravertiendocafe.jpg` — portrait crop, `rounded-3xl`, soft shadow, slight rotate (-2deg)
- motion: staggered fade-up (eyebrow → h1 → sub → CTA → image)

### 3. Menú

- Background: `--love-cream`
- Section title: `"Nuestros Menús"` — Playfair Display, centered
- Two cards side by side (stack mobile), generous padding, `rounded-2xl`, shadow soft
  - **Card 1 — Menú Digital**
    - Icon: coffee cup SVG (lucide `Coffee`)
    - Title: `"Menú Digital"`
    - Description: `"Cafés de especialidad, bebidas calientes y frías, para empezar el día con amor."`
    - Button: `"Ver Menú →"` — pill, crimson fill, opens PDF in new tab
    - URL: `https://drive.google.com/file/d/1vTlTueiwaBhENB2VWKS-MhEAnqoUbdjO/view` (constant `MENU_DIGITAL_URL` in `lib/data/menus.ts`)
  - **Card 2 — Menú de Tortas**
    - Icon: cake SVG (lucide `Cake`)
    - Title: `"Menú de Tortas"`
    - Description: `"Tortas, macarons y pasteles elaborados con amor. Dulces momentos para compartir."`
    - Button: `"Ver Menú →"` — pill, crimson fill, opens PDF in new tab
    - URL: `https://drive.google.com/file/d/1ZVzzruHnpbgkN_9EEV8QEr8wFrvrvhDi/view` (constant `MENU_TORTAS_URL` in `lib/data/menus.ts`)
- motion: fade-up cards on scroll enter

### 4. Galería

- Maman NYC editorial style: large horizontal scroll strip
- Full-width container, `overflow-x-auto`, `scroll-snap-type: x mandatory`
- Photos displayed at natural portrait ratio (~3:4), fixed height `520px` on desktop, `380px` mobile
- Each photo: `scroll-snap-align: start`, `rounded-2xl`, `object-cover`, hover `scale-[1.03]` transition
- Left/right arrow buttons overlaid (hide on mobile)
- Swipe native on mobile
- Gap between photos: `1.5rem`
- Photos used: all 4 `.jpg` files
- motion: section title fade-up, photos stagger in on enter

### 5. Instagram Feed

- Section title: `"Seguí nuestra historia"` + handle `@lovecafe.ros`
- Horizontal scrollable row of 4 cards styled as Instagram posts
- Each card:
  - Photo with `rounded-2xl`, `aspect-square`, `object-cover`
  - Bottom strip: Instagram icon + `@lovecafe.ros` + short caption (from filename, humanized)
  - Hover: slight lift + shadow deepen
- CTA link: `"Seguinos en Instagram →"` → opens `https://www.instagram.com/lovecafe.ros/` new tab
- Background: `--love-blush`
- motion: horizontal slide-in stagger

### 6. Nosotros (About)

- Background: `--love-petal` (`#FFE4E6`)
- Two columns desktop, stacked mobile
  - Left: `mesa2cafey3postres.jpg` — portrait, `rounded-3xl`, shadow
  - Right: text block
    - Eyebrow: `"Nuestra historia"`
    - H2: `"Hecho con amor, servido con el corazón"` — Playfair Display
    - Body: 2 short paragraphs about artisan coffee, romantic atmosphere, Rosario local identity, handmade bakery
    - Decorative: small heart or floral separator between paragraphs
- motion: left image slide-in from left, right text fade-up

### 7. Visítanos (Location)

- Background: `--love-blush`
- Centered layout, max-width `640px`
- Section title: `"Encontranos"`
- Location card:
  - **Crochet border**: `<CrochetBorder />` at top + bottom of card — SVG lace pattern in `--love-rose`
  - Address: `"Tucumán 1114, Rosario"` — Playfair Display medium
  - Hours:
    - Lunes a viernes: 8:00 – 20:00
    - Sábados: 9:00 – 13:00 · 16:00 – 20:00
    - Domingos: 9:00 – 13:00
  - Google Maps embed: `border-radius: 1.5rem`, `height: 280px`, no default controls clutter
- motion: card fade-up scale

### 8. Footer

- Background: `--love-blush`
- Centered, minimal
- Logo SVG (smaller)
- Tagline: `"Coffee made with love · Rosario"`
- Links: Instagram icon · WhatsApp icon → `https://wa.me/54934183031111`
- Copyright: `"© 2025 Love Café Rosario"`

---

## WhatsApp Float Button

- Fixed bottom-right, `z-50`
- Circle button, `bg-[#25D366]`, WhatsApp icon white
- Pulse animation (subtle)
- Links to `https://wa.me/54934183031111`

---

## Component Map

```
app/
  layout.tsx          ← fonts, metadata, globals
  page.tsx            ← composes all sections

components/
  Navbar.tsx
  sections/
    Hero.tsx
    Menu.tsx
    Gallery.tsx
    InstagramFeed.tsx
    About.tsx
    Location.tsx
    Footer.tsx
  ui/
    CrochetBorder.tsx  ← SVG lace pattern component
    WhatsAppFloat.tsx

lib/
  data/
    menus.ts           ← MENU_DIGITAL_URL, MENU_TORTAS_URL constants

public/
  logo.svg
  images/
    cafeteravertiendocafe.jpg
    doscafedospasteles.jpg
    macarons.jpg
    mesa2cafey3postres.jpg
```

---

## Animation Strategy (motion v12)

- All scroll-triggered animations use `whileInView` + `viewport={{ once: true }}`
- Stagger children with `staggerChildren: 0.12`
- Default: `{ opacity: 0, y: 24 }` → `{ opacity: 1, y: 0 }`, duration `0.6s`, ease `easeOut`
- Image entrances: add subtle `scale: 0.97` → `1`
- No heavy parallax — soft, elegant, Apple-like

---

## Next.js 16 / Tailwind v4 Notes

- `"use client"` required on any component using motion, scroll listeners, or refs
- Images: use `next/image` with `sizes` prop for responsive optimization
- Fonts: `next/font/google` with `variable` CSS property, applied to `<html>`
- Tailwind v4: utility classes only, no `tailwind.config.js` — custom tokens via `@theme inline` in `globals.css`
- motion v12: import from `"motion/react"` not `"framer-motion"`
