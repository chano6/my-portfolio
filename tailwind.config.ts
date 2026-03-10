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
        brown: {
          dark: "#4B352A",
          primary: "#9C6A3D",
          accent: "#E6C6A5",
          light: "#FFF7ED",
          border: "#EADBC8",
          text: "#2B2B2B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
