import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:    { DEFAULT: "#F5F1E8", 1: "#F4F0E7", 2: "#FBFAF6", 3: "#F2EEE5", 4: "#FAF8F1", card: "#FFFDF8", warm: "#F7F4EC" },
        ink:      { DEFAULT: "#11172A", secondary: "#596176", muted: "#7C8497" },
        brand:    { blue: "#3867FF", purple: "#6B5AF7", "blue-light": "#4C8DFF" },
        notebook: { green: "#59B58A", yellow: "#F2C85B", pink: "#EBA7B7", sky: "#9FC8F5", red: "#E76F61" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "monospace"],
        hand: ["var(--font-hand)", "Caveat", "cursive"],
      },
      boxShadow: {
        card:       "0 8px 25px rgba(40,35,25,.06)",
        "card-hover": "0 14px 35px rgba(40,35,25,.10), 0 2px 8px rgba(56,103,255,.06)",
        notebook:   "0 12px 40px rgba(40,35,25,.09), 0 2px 6px rgba(40,35,25,.04)",
        "notebook-lg": "0 24px 60px rgba(40,35,25,.12), 0 4px 12px rgba(40,35,25,.05)",
        sticky:     "2px 3px 0px rgba(40,35,25,.08)",
      },
      borderColor: {
        rule: "rgba(17,23,42,.10)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
