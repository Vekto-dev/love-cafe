import { MapPin, Building, ShoppingBag, Utensils, GraduationCap, Landmark, Train } from "lucide-react";
import { AnimateInView } from "@/components/ui/AnimateInView";
import { CONTACT } from "@/lib/data/contact";

const CATEGORIES = [
  {
    title: "Atracciones principales",
    icon: Landmark,
    places: [
      { name: "Monumento Nacional a la Bandera", distance: "1.4 km", time: "19 min a pie" },
      { name: "Casa natal del Che Guevara", distance: "600 m", time: "8 min a pie" },
      { name: "Museo de la Memoria", distance: "500 m", time: "7 min a pie" },
      { name: "Costanera del Paraná", distance: "700 m", time: "10 min a pie" },
      { name: "Parque de España", distance: "1.2 km", time: "15 min a pie" },
    ],
  },
  {
    title: "Museos y cultura",
    icon: Building,
    places: [
      { name: "Museo Cs. Naturales Dr. Ángel Gallardo", distance: "330 m", time: "4 min a pie" },
      { name: "Museo de la Bolsa de Comercio", distance: "500 m", time: "6 min a pie" },
      { name: "MACRO (Arte Contemporáneo)", distance: "1.5 km", time: "18 min a pie" },
      { name: "Teatro El Círculo", distance: "1 km", time: "12 min a pie" },
      { name: "Complejo Astronómico Municipal", distance: "2.7 km", time: "Bus/bici" },
    ],
  },
  {
    title: "Compras y entretenimiento",
    icon: ShoppingBag,
    places: [
      { name: "Shopping del Siglo", distance: "200 m", time: "3 min a pie" },
      { name: "Peatonal Córdoba", distance: "200 m", time: "3 min a pie" },
      { name: "Plaza Pringles", distance: "350 m", time: "4 min a pie" },
      { name: "La Isla de los Inventos", distance: "1.3 km", time: "17 min a pie" },
      { name: "Plaza Montenegro", distance: "2 km", time: "Bus/bici" },
    ],
  },
  {
    title: "Gastronomía cercana",
    icon: Utensils,
    places: [
      { name: "Pizzerías del microcentro", distance: "100–300 m", time: "1–4 min a pie" },
      { name: "Mercado del Patio", distance: "800 m", time: "10 min a pie" },
      { name: "Bares de Pichincha", distance: "2 km", time: "25 min a pie" },
      { name: "Restaurantes de la Costanera", distance: "1 km", time: "12 min a pie" },
      { name: "Heladerías del centro", distance: "200–500 m", time: "3–7 min a pie" },
    ],
  },
  {
    title: "Universidades",
    icon: GraduationCap,
    places: [
      { name: "Universidad Nacional de Rosario (UNR)", distance: "420 m", time: "5 min a pie" },
      { name: "Facultad de Ciencias Médicas", distance: "1.9 km", time: "Bus/bici" },
    ],
  },
  {
    title: "Transporte",
    icon: Train,
    places: [
      { name: "Parada de bus Ciudad Paseo del Siglo", distance: "550 m", time: "7 min a pie" },
      { name: "Estación Rosario Norte", distance: "1.2 km", time: "15 min a pie" },
      { name: "Terminal de Ómnibus", distance: "2 km", time: "Traslado gratis incluido" },
      { name: "Aeropuerto Islas Malvinas (ROS)", distance: "20 km", time: "30 min en auto" },
    ],
  },
];

export function Surroundings() {
  return (
    <section id="alrededores" aria-label="Alrededores del hostel" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface/20" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-16">
          <span className="inline-block text-primary-light font-semibold text-sm uppercase tracking-widest mb-4">
            Ubicación privilegiada
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-text-primary">
            Alrededores del hostel
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Cool Raúl está en San Lorenzo 1670, en el corazón del microcentro de Rosario. Todo lo que necesitás queda cerca.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, i) => (
            <AnimateInView key={cat.title} delay={i * 60}>
              <div className="glass-card rounded-2xl p-5 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <cat.icon className="w-4 h-4 text-primary-light" aria-hidden="true" />
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm">{cat.title}</h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.places.map((place) => (
                    <li key={place.name} className="flex items-start justify-between gap-3">
                      <span className="text-text-muted text-sm leading-tight flex-1">{place.name}</span>
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span className="text-primary-light text-xs font-semibold">{place.distance}</span>
                        <span className="text-text-dim text-[10px]">{place.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          ))}
        </div>

        <AnimateInView delay={100} className="mt-8 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
              <span className="font-heading text-2xl text-primary-light">9.1</span>
            </div>
            <div>
              <p className="text-text-primary font-semibold text-sm">Puntuación de ubicación</p>
              <p className="text-text-dim text-xs">Según huéspedes en Hostelworld</p>
            </div>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            En nuestros alrededores tenemos supermercados, kioscos, bares, pizzerías, teatros y librerías. A 3 cuadras de la Peatonal Córdoba y a 7 cuadras del río Paraná.
          </p>
          <a
            href={CONTACT.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface-2 hover:bg-primary/30 text-text-primary text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer w-fit flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Ver en Google Maps
          </a>
        </AnimateInView>
      </div>
    </section>
  );
}
