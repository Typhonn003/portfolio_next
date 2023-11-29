import type { Config } from "tailwindcss";
import { blue, blueDark } from "@radix-ui/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          ...blue,
        },
        dark: {
          ...blueDark,
        },
      },
      screens: {
        xs: "520px",
      },
      backgroundImage: {
        mobile: "url('/wallpaper-mobile.png')",
        tablet: "url('/wallpaper-tablet.png')",
        desktop: "url('/wallpaper-desktop.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
