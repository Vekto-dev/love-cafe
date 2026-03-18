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
  {
    name: "Lucas M.",
    country: "Uruguay",
    flag: "🇺🇾",
    score: 10,
    platform: "Hostelworld",
    text: "Vine por dos noches y me quedé una semana. El ambiente te engancha. La terraza, el bar, la gente. Omar y su equipo hacen que te sientas en casa.",
  },
  {
    name: "Viajera verificada",
    country: "Brasil",
    flag: "🇧🇷",
    score: 9,
    platform: "Booking.com",
    text: "Localização perfeita no centro. Café da manhã incluído, cozinha equipada e wifi rápido. Fiquei duas semanas trabalhando remotamente e foi ótimo.",
  },
  {
    name: "Viajero verificado",
    country: "España",
    flag: "🇪🇸",
    score: 9,
    platform: "TripAdvisor",
    text: "Un hostel con alma. Los murales, la música, el estudio de grabación... no es un alojamiento genérico. Es una experiencia. Rosario merece más viajeros.",
  },
  {
    name: "Maxi G.",
    country: "Argentina",
    flag: "🇦🇷",
    score: 10,
    platform: "Google",
    text: "Vine en invierno sin saber qué esperar. El hostel estaba tranquilo, íntimo, con precio muy accesible. La ciudad sin turistas es otra cosa. Ya reservé para agosto de nuevo.",
  },
];
