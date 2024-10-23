/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gray: 'var(--gray)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(-10%)',
          },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
