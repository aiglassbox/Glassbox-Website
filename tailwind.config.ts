import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#0e0e0f",
          850: "#141416",
          800: "#18181a",
          700: "#1e1f21",
          600: "#252729",
          500: "#2e353b",
        },
        line: "rgba(136,136,136,0.16)",
        muted: "#6e7178",
        soft: "#888888",
        accent: "#0099ff",
        mint: "#2ee6a6",
        pink: "#ff5edb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-archivo)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-chivo)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
