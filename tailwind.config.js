// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5a4', // مثال — غيّر هنا
          50: '#e6f7f6',
          100: '#cfeff0'
        },
        'brand-dark': '#002D2D',      // Petrol/Deep Teal
        'brand-primary': '#4AD9B1',   // Mint/Cyan
        'brand-light': '#F2F4F5',     // Light Gray Background
        'brand-text': '#333333',      // Dark Gray Body Text
        accent: '#4AD9B1',            // Updated to match Mint
        bg: '#0f1724',                // Keep existing just in case
        card: '#121826',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [],
}