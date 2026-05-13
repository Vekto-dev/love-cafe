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
  title: "Love Café Rosario — Café de especialidad & Pastelería",
  description:
    "Café de especialidad, tortas y pasteles artesanales en el corazón de Rosario. Tucumán 1114.",
  openGraph: {
    title: "Love Café Rosario",
    description: "Coffee made with love. Dulces y café de especialidad en Rosario.",
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
