export interface Room {
  name: string;
  capacity: string;
  highlight: string;
  features: string[];
  tag: string;
  tagColor: string;
  photoId: string;
  priceFrom: string;
  priceSuffix: string;
}

export const ROOMS: Room[] = [
  {
    name: "Dormitorio Mixto",
    capacity: "6-8 personas",
    highlight: "El clásico mochilero",
    features: ["Lockers individuales", "AC", "Baño privado"],
    tag: "MÁS ELEGIDO",
    tagColor: "bg-primary",
    photoId: "5010",
    priceFrom: "USD 8",
    priceSuffix: "/noche",
  },
  {
    name: "Dormitorio Femenino",
    capacity: "4-6 personas",
    highlight: "Solo para chicas",
    features: ["Ambiente seguro", "AC", "Baño privado"],
    tag: "PARA ELLAS",
    tagColor: "bg-accent-red",
    photoId: "509",
    priceFrom: "USD 8",
    priceSuffix: "/noche",
  },
  {
    name: "Habitación Privada",
    capacity: "1-2 personas",
    highlight: "Tu propio espacio",
    features: ["Cama simple o doble", "AC", "Privacidad total"],
    tag: "PRIVADA",
    tagColor: "bg-accent",
    photoId: "503",
    priceFrom: "USD 25",
    priceSuffix: "/noche",
  },
];
