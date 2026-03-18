"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/data/contact";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      // Show after hero, hide in last 400px (near FinalCTA)
      const nearBottom = scrollY > docH - window.innerHeight - 400;
      setVisible(scrollY > heroH * 0.7 && !nearBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl("Hola! Quiero consultar disponibilidad en Cool Raúl Hostel.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-whatsapp hover:bg-green-400 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg shadow-green-900/30 hover:shadow-green-900/50 transition-all duration-300 cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
