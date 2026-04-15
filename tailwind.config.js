/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nia-black': '#0D0D0D',
        'nia-charcoal': '#141414',
        'nia-dark': '#EDE9E3',
        'nia-darker': '#F7F5F2',
        'nia-ivory': '#F5F3EF',
        'nia-gold': '#C6A969',
        'nia-orange': '#E87722',
        'nia-gray': '#555555',
        'nia-muted': '#999999',
        'nia-white': '#FFFFFF',
        'nia-border': '#E5E1DB',
        'nia-border-light': '#E0E0E0',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontWeight: {
        'light': '300',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra-wide': '0.15em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed-custom': '1.75',
      },
      boxShadow: {
        'ring': '0px 0px 0px 1px #E5E1DB',
        'ring-gold': '0px 0px 0px 1px #C6A969',
        'ring-sm': '0px 0px 0px 1px #E5E1DB, 0px 4px 24px rgba(0,0,0,0.04)',
        'whisper': 'rgba(0,0,0,0.04) 0px 4px 24px',
        'editorial': 'rgba(0,0,0,0.03) 0px 2px 16px, 0px 0px 0px 1px #E5E1DB',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
        '4xl': '36px',
      },
    },
  },
  plugins: [],
};
