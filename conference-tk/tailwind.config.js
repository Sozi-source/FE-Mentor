// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/background-mobile.png')", 
      },
      colors: {
        primary: '#FF6B6B',
        darkPurple: '#1F0036',
      },
    },
  },
  plugins: [],
}
