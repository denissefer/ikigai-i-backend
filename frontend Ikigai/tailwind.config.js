/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotu: ['Gotu', 'sans-serif'],
        tsukimi: ['"Tsukimi Rounded"', 'sans-serif'],
      },
      keyframes: {
        slideFadeIn: {
          '0%': { opacity: '0', transform: 'translateX(var(--tw-translate-x))' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slide-fade-in': 'slideFadeIn 1s ease-in-out forwards',
        'spin-loop': 'rotate360 15s linear infinite',
      },
    },
  },
  plugins: [],
};
