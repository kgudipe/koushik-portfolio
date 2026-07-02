import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#060812",
        card: "rgba(255,255,255,0.025)",
        indigo: {
          glow: "#6366F1",
          soft: "#818CF8",
          muted: "#A5B4FC",
        },
      },
      animation: {
        blink: "blink 1.8s ease-in-out infinite",
        orb1: "orb1 8s ease-in-out infinite",
        orb2: "orb2 10s ease-in-out infinite",
        orb3: "orb3 12s ease-in-out infinite",
        "bar-in": "barIn 0.9s ease-out both",
        "fade-up": "fadeUp 0.5s ease-out both",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        orb1: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(18px,-12px)" },
        },
        orb2: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-14px,10px)" },
        },
        orb3: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(10px,16px)" },
        },
        barIn: {
          from: { width: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
