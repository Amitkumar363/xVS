/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {

    },
    container: {
      padding: {
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3.563rem",
        "2xl": "16rem",
        "3xl": "18rem",
      },
    },
    screens: {
      md: "1024px",
      lg: "1366px",
      xl: "1440px",
      "2xl": "1920px",
      "3xl": "2560 px",
    },
    extend: {
      screens: {
        xl: "1440px",
        "2xl": "1920px",
        "3xl": "2560px",
      },
      colors: {
        primary: "#006D77",
        secondary: "#BEE1E6",
      },
      fontFamily: {
        'sans': ['Verdana'],
        'serif': ['Roboto'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/img/hero.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
}