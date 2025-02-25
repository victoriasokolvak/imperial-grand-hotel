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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-grey': '#171717',
        'light-grey': '#D9D9D9',
        'card-grey': '#2D2C2C',
        'light': '#e0e0e0',
        'dark-background': '#282828',
        'grey': '#575656',
        'accent': '#BF9766',
        'dark-accent': '#302F2F',
        'hover-accent': '#a87f5c',
        'hover': '#3a3a3a',
      },
      screens: {
        'xs': '400px',
        's': '440px',
      },
    },
  },
  plugins: [],
} satisfies Config;
