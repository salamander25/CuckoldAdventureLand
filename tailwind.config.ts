import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0B',
        panel: '#151518',
        accent: '#8E1B1B',
        gold: '#C8A96B'
      }
    }
  },
  plugins: []
};
export default config;
