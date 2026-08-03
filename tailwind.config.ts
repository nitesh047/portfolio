import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6F7F9",
        surface: "#FFFFFF",
        ink: "#0D1117",
        graphite: "#5B6472",
        line: "#DCE0E6",
        signal: "#2454FF",
        signalDim: "#E8EDFF",
        signalDeep: "#0E2E9E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightest2: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
