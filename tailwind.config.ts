import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFE962",
        secondary: "#2A2A2A",
        tertiary: "#FF5500",
        light: "#565656",
        textdark: "#4D4D4D",
        extra: "#0095A5",
      },
    },
  },
  plugins: [],
} satisfies Config;
