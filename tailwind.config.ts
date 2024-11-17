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
      keyframes: {
        slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
        },
    },
    animation: {
        slideIn: 'slideIn 0.5s ease-out',
        slideOut: 'slideOut 0.7s ease-out',
    },      
    },
  },
  plugins: [],
} satisfies Config;
