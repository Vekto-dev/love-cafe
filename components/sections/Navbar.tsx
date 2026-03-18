"use client";

import { useState, useEffect } from "react";
import { Music, Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/lib/data/navigation";
import { whatsappUrl } from "@/lib/data/contact";

const LANGS = ["ES", "EN", "PT"] as const;
type Lang = (typeof LANGS)[number];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [lang, setLang] = useState<Lang>("ES");

  // Scroll state + close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-primary/10"
          : "bg-transparent"
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg" aria-label="Cool Raúl Rock'n Hostel — Inicio">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center" aria-hidden="true">
              <Music className="w-4 h-4 text-white" />
            </div>
            <span className="font-heading text-text-primary text-lg leading-tight">Cool Raúl</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((l) => {
              const id = l.href.replace("#", "");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={activeSection === id ? "page" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded ${
                    activeSection === id
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language stub */}
            <div className="flex items-center gap-1 bg-surface/60 rounded-full px-2 py-1" role="group" aria-label="Seleccionar idioma">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full cursor-pointer transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary ${
                    lang === l ? "bg-primary text-white" : "text-text-dim hover:text-text-muted"
                  }`}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp para reservar"
              className="flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Reservar
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-text-primary p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        } bg-background/98 backdrop-blur-md border-b border-border`}
      >
        <div className="min-h-0">
        <div className="px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-text-muted hover:text-text-primary text-base font-medium py-1 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              {l.label}
            </a>
          ))}
          {/* Language in mobile */}
          <div className="flex gap-2 pt-1" role="group" aria-label="Seleccionar idioma">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-semibold px-3 py-1 rounded-full cursor-pointer transition-colors ${
                  lang === l ? "bg-primary text-white" : "bg-surface text-text-dim"
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="flex items-center justify-center gap-2 bg-whatsapp text-white font-semibold px-4 py-3 rounded-full mt-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
}
