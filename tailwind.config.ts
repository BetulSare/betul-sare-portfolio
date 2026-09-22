import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F9FC",
        ink: { DEFAULT: "#0F172A", soft: "#475569", mute: "#94A3B8" },
        line: "#E2E8F0",
        accent: { DEFAULT: "#3B82F6", sky: "#38BDF8", teal: "#14B8A6" },
      },
      fontFamily: { sans: ["Manrope Variable", "system-ui", "sans-serif"], mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"] },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,.04), 0 12px 32px -12px rgba(15,23,42,.10)",
        lift: "0 2px 4px rgba(15,23,42,.04), 0 28px 56px -20px rgba(59,130,246,.25)",
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};
export default config;
