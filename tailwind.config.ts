import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brightBlue: 'hsl(220, 98%, 61%)',
        neutral: {
          light: {
            veryLightGray: 'hsl(0, 0%, 98%)',
            veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
            lightGrayishBlue: 'hsl(233, 11%, 84%)',
            darkGrayishBlue: 'hsl(236, 9%, 61%)',
            veryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
          },
          dark: {
            veryDarkBlue: 'hsl(235, 21%, 11%)',
            veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
            lightGrayishBlue: 'hsl(234, 39%, 85%)',
            lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
            darkGrayishBlue: 'hsl(234, 11%, 52%)',
            veryDarkGrayishBlue: {
              default: 'hsl(233, 14%, 35%)',
              darker: 'hsl(237, 14%, 26%)',
            },
          },
        },
      },
      backgroundImage: {
        checkBackground:
          'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
    },
  },
  plugins: [],
} satisfies Config;
