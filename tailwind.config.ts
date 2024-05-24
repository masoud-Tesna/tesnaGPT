import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
        160: '160px'
      },
      borderRadius: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
        64: '64px',
        80: '80px',
        120: '120px',
        160: '160px'
      },
      boxShadow: {
        glow: '0 0 12px 6px rgba(94, 94, 94, 0.40), 0 0 12px 6px rgba(255, 255, 255, 0.20)',
        focus: '0 0 0 4px rgba(0, 0, 0, 0.05)',
        inner: '0 -0.5px 1px 0 rgba(255, 255, 255, 0.30) inset, 0 -0.5px 1px 0 rgba(255, 255, 255, 0.25) inset, 1px 1.5px 4px 0 rgba(0, 0, 0, 0.08) inset, 1px 1.5px 4px 0 rgba(0, 0, 0, 0.10) inset',
        drop: '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
        imageHover: '0 20px 20px 0 #000 inset'
      },
      gridTemplateColumns: {
        'auth': '1fr minmax(440px, 500px)',
      },
      colors: {
        white: {
          5: 'rgba(28, 28, 28,0.05)',
          10: 'rgba(28, 28, 28,0.1)',
          20: 'rgba(28, 28, 28,0.2)',
          40: 'rgba(28, 28, 28,0.4)',
          80: 'rgba(28, 28, 28,0.80)',
          100: '#1C1C1C'
        },
        black: {
          5: 'rgba(255,255,255,0.05)',
          10: 'rgba(255,255,255,0.1)',
          20: 'rgba(255,255,255,0.2)',
          40: 'rgba(255,255,255,0.4)',
          80: 'rgba(255,255,255,0.8)',
          100: '#FFFFFF'
        },
        primary: {
          brand: '#C6C7F8',
          blue: '#E3F5FF',
          purple: {
            50: 'rgba(255,255,255,0.05)',
            100: '#E5ECF6'
          },
          light: 'rgba(255,255,255,0.05)',
          background: '#1C1C1C'
        },
        secondary: {
          indigo: 'rgba(255,255,255,0.05)',
          purple: '#C6C7F8',
          cyan: '#A8C5DA',
          blue: '#B1E3FF',
          green: '#A1E3CB',
          mint: '#BAEDBD',
          yellow: '#FFE999',
          orange: '#FFCB83',
          red: '#FF4747'
        },
        social: {
          google: '#8156FA',
          facebook: '#1877F2',
          microsoft: '#C6C7F8',
        }
      },
      backdropBlur: {
        40: '20px',
        100: '50px'
      },
      fontSize: {
        'regular-12': [ '0.75rem', { lineHeight: '1.125rem', fontWeight: 400 } ],
        'regular-14': [ '0.875rem', { lineHeight: '1.25rem', fontWeight: 400 } ],
        'regular-18': [ '1.125rem', { lineHeight: '1.5rem', fontWeight: 400 } ],
        'regular-24': [ '1.5rem', { lineHeight: '2.25rem', fontWeight: 400 } ],
        'regular-48': [ '3rem', { lineHeight: '3.625rem', fontWeight: 400 } ],
        'regular-64': [ '4rem', { lineHeight: '4.875rem', fontWeight: 400 } ],
        'semiBold-12': [ '0.75rem', { lineHeight: '1.125rem', fontWeight: 600 } ],
        'semiBold-14': [ '0.875rem', { lineHeight: '1.25rem', fontWeight: 600 } ],
        'semiBold-18': [ '1.125rem', { lineHeight: '1.5rem', fontWeight: 600 } ],
        'semiBold-24': [ '1.5rem', { lineHeight: '2.25rem', fontWeight: 600 } ],
        'semiBold-48': [ '3rem', { lineHeight: '3.625rem', fontWeight: 600 } ],
        'semiBold-64': [ '4rem', { lineHeight: '4.875rem', fontWeight: 600 } ],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
