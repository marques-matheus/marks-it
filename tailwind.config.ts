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
        marks:{
          100: '#4B7881',
          200: '#2E5860',
          300: '#1c7383',
          400: '#1c646c',
          500: '#1c5661',
          600: '#274c4e',
          700: '#1c4046',
          800: '#1f2729',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
