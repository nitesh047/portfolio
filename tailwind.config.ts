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
        bg: "oklch(0.985 0.003 90)",
        surface: "oklch(1 0 0)",
        ink: "oklch(0.18 0.005 90)",
        graphite: "oklch(0.4 0.005 90)",
        line: "oklch(0.9 0.005 90)",
        signal: "oklch(0.55 0.14 290)",
        signalDim: "oklch(0.94 0.03 290)",
        signalDeep: "oklch(0.45 0.16 290)",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "system-ui", "sans-serif"],
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
