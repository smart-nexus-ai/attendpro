import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // indigo-600
          light: '#6366F1',
          dark: '#3730A3',
        },
        secondary: {
          DEFAULT: '#10B981', // emerald-500
          light: '#34D399',
          dark: '#065F46',
        },
        accent: {
          DEFAULT: '#F59E0B', // amber-500
          light: '#FBBF24',
          dark: '#B45309',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-plus-jakarta)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;

