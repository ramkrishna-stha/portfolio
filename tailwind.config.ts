import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)'],
        manrope: ['var(--font-manrope)'],
        pacifico: ['var(--font-pacifico)'],
        sans: ['Roboto', 'sans-serif'],
        garamond: ['Adobe Garamond Pro', 'serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
