/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,json}"],
  theme: {
    extend: {
      colors: {
        lead: {
          50: "#f3f5f7",
          100: "#e5e8ec",
          300: "#aeb8c5",
          500: "#64748b",
          700: "#334155",
          900: "#1e293b"
        },
        graphite: "#334155",
        tile: "#a54e2b",
        brass: "#b08a3c",
        warmstone: "#f7f3ea",
        limestone: "#e8e1d4",
        paper: "#fbfaf7",
        ink: "#111827",
        muted: "#4b5563",
        borderline: "#d6ccbb"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(30, 41, 59, 0.16)",
        lift: "0 18px 45px rgba(17, 24, 39, 0.18)"
      },
      backgroundImage: {
        "surface-grid": "linear-gradient(rgba(30, 41, 59, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
