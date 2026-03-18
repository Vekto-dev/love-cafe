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
  { icon: Wifi,     label: "WiFi gratuito",            desc: "Conexión de alta velocidad en todas las áreas: dormitorios, áreas comunes, terraza y patio. Ideal para trabajar en remoto." },
  { icon: Coffee,   label: "Desayuno continental",     desc: "Incluido en todas las estadías. Se sirve cada mañana con café, té, medialunas, tostadas y mermelada." },
  { icon: Utensils, label: "Cocina compartida",        desc: "Totalmente equipada con heladera, hornallas, horno, microondas, utensilios y vajilla. Abierta las 24 horas." },
  { icon: Wind,     label: "Aire acondicionado",       desc: "Aire acondicionado y calefacción en todos los dormitorios. Control individual para tu comodidad en verano e invierno." },
  { icon: Flame,    label: "Terraza con parrilla",     desc: "Parrillero en la terraza con vista a los techos de Rosario. Comprá la carne en la carnicería de la esquina y hacé tu asado." },
  { icon: Bike,     label: "Alquiler de bicicletas",   desc: "Bicicletas disponibles para explorar la Costanera, el centro y los parques. Estación de Mi Bici Tu Bici a 2 cuadras." },
  { icon: Luggage,  label: "Consigna de equipaje",     desc: "Guardá tu equipaje de forma segura antes del check-in o después del check-out. Gratuito y disponible las 24 horas." },
  { icon: Gamepad2, label: "Ping pong y juegos",       desc: "Mesa de ping pong en el patio, juegos de mesa, biblioteca de DVDs con pantalla grande. Para las tardes sin planes." },
  { icon: Music,    label: "Bar y karaoke",            desc: "Bar propio con cerveza, vinos y tragos. Noches de karaoke, música en vivo y jam sessions espontáneas." },
  { icon: BookOpen, label: "Sala de ensayo y estudio", desc: "Estudio de grabación profesional y sala de ensayo. Alquiler de instrumentos para huéspedes. Único en Argentina." },
];
