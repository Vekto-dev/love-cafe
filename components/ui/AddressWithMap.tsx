"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { CONTACT } from "@/lib/data/contact";

const MiniMap = dynamic(
  () => import("@/components/ui/MiniMap").then((m) => m.MiniMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-surface-2 animate-pulse" aria-hidden="true" />
    ),
  }
);

export function AddressWithMap() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  // Lazy-mount the map only once user has hovered/tapped
  const handleOpen = useCallback(() => {
    setMounted(true);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  // Close on outside click (mobile)
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block group"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => (open ? handleClose() : handleOpen())}
        className="text-accent font-semibold border-b border-dashed border-accent/40 hover:border-accent transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
        aria-label="Ver ubicación en mapa: San Lorenzo 1670, Rosario"
        aria-expanded={open}
      >
        San Lorenzo 1670
      </button>

      {/* Popover */}
      <span
        className={`absolute z-50 left-1/2 -translate-x-1/2 top-full mt-3 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="tooltip"
        aria-hidden={!open}
      >
        {/* Arrow */}
        <span
          className="block w-3 h-3 bg-surface rotate-45 absolute -top-1.5 left-1/2 -translate-x-1/2 border-l border-t border-primary/30"
          aria-hidden="true"
        />

        {/* Card */}
        <span className="block w-72 sm:w-80 rounded-2xl overflow-hidden border border-primary/30 bg-surface shadow-2xl shadow-primary/20">
          {/* Map */}
          <span className="block h-[180px] w-full relative overflow-hidden">
            {mounted && <MiniMap />}
          </span>

          {/* Info */}
          <span className="flex items-center justify-between px-3 py-2.5 bg-surface border-t border-border">
            <span>
              <p className="text-text-primary text-sm font-semibold">San Lorenzo 1670</p>
              <p className="text-text-dim text-xs">Rosario, Santa Fe</p>
            </span>
            <a
              href={CONTACT.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-light text-xs font-semibold hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded whitespace-nowrap ml-3"
              onClick={(e) => e.stopPropagation()}
            >
              Google Maps →
            </a>
          </span>
        </span>
      </span>
    </span>
  );
}
