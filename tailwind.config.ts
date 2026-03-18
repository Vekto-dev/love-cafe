import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F23",
        surface: "#1A1A3E",
        "surface-2": "#2D2B5E",
        primary: "#7C3AED",
        "primary-light": "#9D5CF5",
        accent: "#F59E0B",
        "accent-red": "#DC2626",
        whatsapp: "#22C55E",
        "text-primary": "#F8FAFC",
        "text-muted": "#94A3B8",
        "text-dim": "#7B8CAA", // ajustado para cumplir WCAG AA 4.5:1 sobre #0F0F23
        border: "#2D2B5E",
      },
      fontFamily: {
        heading: ["var(--font-righteous)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.3s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
