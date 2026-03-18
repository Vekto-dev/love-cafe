import {
  Wifi, Coffee, Utensils, Wind, Flame,
  Bike, Luggage, Gamepad2, Music, BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  label: string;
  desc: string;
}

export const SERVICES: Service[] = [
  { icon: Wifi,     label: "WiFi gratis",           desc: "Alta velocidad en todo el hostel" },
  { icon: Coffee,   label: "Desayuno incluido",      desc: "Continental todas las mañanas" },
  { icon: Utensils, label: "Cocina compartida",      desc: "Equipada para todos" },
  { icon: Wind,     label: "Aire acondicionado",     desc: "En todos los dormitorios" },
  { icon: Flame,    label: "Parrilla en terraza",    desc: "Asado con vista a Rosario" },
  { icon: Bike,     label: "Alquiler de bicicletas", desc: "Explorá la ciudad pedaleando" },
  { icon: Luggage,  label: "Consigna 24h",           desc: "Tu equipaje siempre seguro" },
  { icon: Gamepad2, label: "Ping pong & juegos",     desc: "Mesa de ping pong y sala de juegos" },
  { icon: Music,    label: "Bar & Karaoke",          desc: "La noche arranca acá" },
  { icon: BookOpen, label: "Biblioteca & DVDs",      desc: "Para las tardes tranquilas" },
];
