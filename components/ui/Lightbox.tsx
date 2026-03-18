"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { hwUrl } from "@/lib/utils";
import type { Photo } from "@/lib/data/photos";

interface Props {
  photos: Photo[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

export function Lightbox({ photos, current, onClose, onPrev, onNext, onGoTo }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Focus trap & keyboard navigation
  useEffect(() => {
    closeRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      // Basic focus trap: keep Tab inside lightbox
      if (e.key === "Tab") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Auto-scroll thumbnail strip to active item
  useEffect(() => {
    if (!thumbsRef.current) return;
    const activeThumb = thumbsRef.current.children[current] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [current]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(delta) > 50) {
        delta < 0 ? onNext() : onPrev();
      }
      touchStartX.current = null;
    },
    [onNext, onPrev]
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 cursor-pointer z-10 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={onClose}
        aria-label="Cerrar galería"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next */}
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-white/50"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Foto siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main image */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full mx-12 sm:mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={hwUrl(photos[current].id, 1280)}
          alt={photos[current].label}
          width={1280}
          height={800}
          className="object-contain max-h-[72vh] w-full rounded-xl"
          priority
          sizes="(max-width: 768px) 95vw, 80vw"
        />
        <p className="text-center text-white/60 text-sm mt-3">
          {photos[current].label} · {current + 1} / {photos.length}
        </p>
      </div>

      {/* Thumbnail strip — desktop only */}
      <div
        ref={thumbsRef}
        className="hidden md:flex gap-2 mt-4 overflow-x-auto max-w-4xl px-4 pb-2"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => onGoTo(i)}
            aria-label={`Ver foto: ${photo.label}`}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
              i === current ? "border-primary-light scale-110" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={hwUrl(photo.id, 80)}
              alt={photo.label}
              width={80}
              height={56}
              className="object-cover w-16 h-11"
            />
          </button>
        ))}
      </div>

      {/* Preload adjacent images */}
      <div className="hidden" aria-hidden="true">
        <Image
          src={hwUrl(photos[(current + 1) % photos.length].id, 1280)}
          alt=""
          width={1}
          height={1}
        />
        <Image
          src={hwUrl(photos[(current - 1 + photos.length) % photos.length].id, 1280)}
          alt=""
          width={1}
          height={1}
        />
      </div>
    </div>
  );
}
