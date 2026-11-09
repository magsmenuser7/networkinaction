/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        kenburns: { from: { transform: 'scale(1.12)' }, to: { transform: 'scale(1)' } },
      },
      animation: {
        kenburns: 'kenburns 9s cubic-bezier(.22,1,.36,1) both',
      },
      colors: {
        'nia-black': '#0D0D0D',
        'nia-charcoal': '#141414',
        'nia-dark': '#E9E3D9',
        'nia-darker': '#F7F4EF',
        'nia-ivory': '#F2EEE7',
        'nia-gold': '#C6A969',
        'nia-orange': '#E87722',
        'nia-gray': '#5E5A54',
        'nia-muted': '#8B847A',
        'nia-white': '#FFFFFF',
        'nia-border': '#E3DDD3',
        'nia-border-light': '#E0E0E0',
        'nia-navy': '#0E1C40',
        'nia-rust': '#A84B07',
        'nia-peach': '#F4AD78',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        poppins: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-serif)', 'Georgia', 'serif'],
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
