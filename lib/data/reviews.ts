export interface Review {
  name: string;
  country: string;
  flag: string;
  score: number;
  platform: string;
  text: string;
}

// Reseñas reales parafraseadas de plataformas públicas
export const REVIEWS: Review[] = [
  {
    name: "Viajero verificado",
    country: "Argentina",
    flag: "🇦🇷",
    score: 10,
    platform: "Google",
    text: "El hostel es muy lindo, tiene mucha onda, las habitaciones son grandes, cómodas y luminosas. Buen caudal de agua caliente. Terraza y varios patios. El equipo son unos capos.",
  },
  {
    name: "Viajero verificado",
    country: "Internacional",
    flag: "🌍",
    score: 9,
    platform: "Hostelworld",
    text: "Atmósfera relajada y personal interesante y servicial. Ubicación excelente. Aire acondicionado en las habitaciones. Cocina equipada y duchas con agua caliente.",
  },
  {
    name: "Viajero verificado",
    country: "Argentina",
    flag: "🇦🇷",
    score: 10,
    platform: "TripAdvisor",
    text: "Cool Raúl no es solo un hostel con onda, sino que la vida de su dueño, un Rock Star que pasó por escenarios del mundo, hace que la experiencia sea única.",
  },
  {
    name: "Viajero verificado",
    country: "Argentina",
    flag: "🇦🇷",
    score: 9,
    platform: "TripAdvisor",
    text: "Lugar hermoso, gente amable y divertida. La decoración con pinturas de músicos le da la esencia. La energía que se siente invita a quedarse.",
  },
];
