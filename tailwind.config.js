// tailwind.config.mjs
import withMT from "@material-tailwind/react/utils/withMT";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = withMT({
  // Arquivos onde o Tailwind CSS irá procurar classes
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Configurações do tema
  theme: {
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
        'sans': ['Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Cores principais
        primary: {
          '50': '#fffbec',
          '100': '#fff6d3',
          '200': '#ffeaa5',
          '300': '#ffd86d',
          '400': '#ffbb32',
          '500': '#ffa40a',
          '600': '#ff8c00',
          '700': '#cc6702',
          '800': '#a14f0b',
          '900': '#82420c',
          '950': '#462004',
        },
        // Cores de destaque
        accent: {
          rose: {
            light: '#F5C2D9',
            DEFAULT: '#D0006B',
            dark: '#A3005D',
          },
          gold: '#FFD700',
          mint: '#A8E6CF',
          wine: '#8B0000',
          sky: '#87CEEB',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  // Habilita o modo escuro através da classe "dark"
  darkMode: "class",
  // Plugins utilizados no Tailwind CSS
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
});

export default config;