"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimateInView } from "@/components/ui/AnimateInView";

const FAQ_ITEMS = [
  { q: "¿A qué hora es el check-in y check-out?", a: "El check-in es a partir de las 16:00 hs y el check-out hasta las 11:00 hs. Si llegás antes o salís después, podemos guardar tu equipaje en la consigna." },
  { q: "¿El desayuno está incluido?", a: "Sí, el desayuno continental está incluido en todas las estadías. Se sirve todas las mañanas en las áreas comunes del hostel." },
  { q: "¿Cómo llego desde la terminal de ómnibus?", a: "La terminal está a solo 2 km del hostel. Ofrecemos traslado incluido — avisanos tu horario de llegada por WhatsApp. También podés tomar remis o taxi directamente hasta San Lorenzo 1670." },
  { q: "¿Puedo usar el estudio de grabación?", a: "¡Sí! Tenemos estudio de grabación profesional, sala de ensayo y alquiler de instrumentos disponibles para huéspedes. Consultá disponibilidad y precios por WhatsApp." },
  { q: "¿Tienen estacionamiento?", a: "No contamos con estacionamiento propio. Hay opciones de estacionamiento pago en la zona. Consultanos por las alternativas más cercanas." },
  { q: "¿Aceptan reservas por WhatsApp?", a: "Sí, podés reservar directamente por WhatsApp al +54 9 341 677-1443. Respondemos al instante. También podés usar Booking.com o Hostelworld." },
  { q: "¿Hay WiFi en todo el hostel?", a: "Sí, WiFi de alta velocidad gratuito en todas las áreas del hostel: dormitorios, áreas comunes, terraza y patio." },
  { q: "¿Tienen lockers?", a: "Sí, todos los dormitorios compartidos cuentan con lockers individuales con llave para guardar tus pertenencias. Recomendamos traer tu propio candado." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="faq" aria-label="Preguntas frecuentes" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface/10 to-background" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">FAQ</h2>
          <p className="text-text-muted mt-4">Todo lo que necesitás saber antes de llegar.</p>
        </AnimateInView>

        <div className="space-y-3" role="list">
          {FAQ_ITEMS.map((item, i) => (
            <AnimateInView key={i} delay={i * 40}>
              <div role="listitem" className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset group"
                >
                  <span className="text-text-primary font-semibold text-sm sm:text-base group-hover:text-primary-light transition-colors duration-200">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-dim flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-6 pb-5 text-text-muted text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView delay={100} className="mt-10 text-center">
          <p className="text-text-dim text-sm">
            ¿Otra pregunta?{" "}
            <a
              href="https://wa.me/5493416771443"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp para hacer una consulta"
              className="text-whatsapp hover:text-green-400 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-whatsapp rounded"
            >
              Escribinos por WhatsApp
            </a>{" "}
            y te respondemos al instante.
          </p>
        </AnimateInView>
      </div>
    </section>
  );
}
