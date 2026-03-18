"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, MessageCircle, ZoomIn } from "lucide-react";
import { GALLERY_PHOTOS } from "@/lib/data/photos";
import { hwUrl } from "@/lib/utils";
import { whatsappUrl } from "@/lib/data/contact";
import { Lightbox } from "@/components/ui/Lightbox";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };
  const prevPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0));
  const nextPhoto = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_PHOTOS.length : 0));

  const shown = GALLERY_PHOTOS.slice(0, visibleCount);

  // Varied heights for masonry effect
  const heightClass = (id: string) => {
    const n = parseInt(id.replace("50", "")) % 3;
    return n === 0 ? "h-[180px]" : n === 1 ? "h-[240px]" : "h-[200px]";
  };

  return (
    <>
      <section id="galeria" aria-label="Galería de fotos" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/20" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
              Mirá el lugar
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">Fotos del hostel</h2>
            <p className="text-text-muted mt-4 max-w-xl mx-auto">
              Fotos reales. Los murales, las habitaciones, la terraza, el bar... todo lo que hace a Cool Raúl único.
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3" role="list" aria-label="Fotos del hostel">
            {shown.map((photo, i) => (
              <div
                key={photo.id}
                role="listitem"
                className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <button
                  className="w-full focus:outline-none focus:ring-2 focus:ring-primary-light rounded-2xl"
                  aria-label={`Ver foto: ${photo.label}`}
                  tabIndex={0}
                >
                  <Image
                    src={hwUrl(photo.id, 600)}
                    alt={photo.label}
                    width={600}
                    height={400}
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${heightClass(photo.id)}`}
                  />
                </button>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-white text-xs font-medium">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < GALLERY_PHOTOS.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(GALLERY_PHOTOS.length)}
                className="flex items-center gap-2 mx-auto bg-surface border border-border hover:border-primary/50 text-text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <Camera className="w-4 h-4" aria-hidden="true" />
                Ver las {GALLERY_PHOTOS.length - visibleCount} fotos restantes
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            <p className="text-text-dim text-sm mb-3">¿Te convenciste? No esperes más.</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar por WhatsApp"
              className="inline-flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whatsapp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Reservar ahora
            </a>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          photos={GALLERY_PHOTOS}
          current={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </>
  );
}
