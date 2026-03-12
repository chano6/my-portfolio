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
        blue: {
          dark: "var(--color-blue-dark)",
          primary: "var(--color-blue-primary)",
          hover: "var(--color-blue-hover)",
          accent: "var(--color-blue-accent)",
          light: "var(--color-blue-light)",
          background: "var(--color-blue-background)",
          surface: "var(--color-blue-surface)",
          border: "var(--color-blue-border)",
          text: "var(--color-blue-text)",
          muted: "var(--color-blue-muted)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
