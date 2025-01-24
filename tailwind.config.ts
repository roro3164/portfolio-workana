import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playball: ['Playball', 'cursive'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      screens: {
        'xs': '480px', 
        'screenCard': ''
      },
    },
  },
  plugins: [],
} satisfies Config;
