import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cool Raúl Rock'n Hostel",
    short_name: "Cool Raúl",
    description: "El hostel cultural de Rosario",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0F23",
    theme_color: "#7C3AED",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
