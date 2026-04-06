import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "var(--color-primary)",
          muted: "var(--color-muted)",
        },
        blue: {
          dark: "var(--color-blue-dark)",
          primary: "var(--color-blue-primary)",
          hover: "var(--color-blue-hover)",
          accent: "var(--color-blue-accent)",
          light: "var(--color-blue-light)",
          background: "var(--color-blue-background)",
          surface: "var(--color-blue-surface)",
          border: "var(--color-blue-border)",
        },
        white: {
          background: "var(--color-white-background)",
        },
      },
      fontFamily: {
        logo: ["var(--font-logo)", "sans-serif"],
        nav: ["var(--font-nav)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
