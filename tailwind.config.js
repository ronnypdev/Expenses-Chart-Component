/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMsans: ["DM Sans", "sans-serif"],
      },
      colors: {
        softRed: "var(--soft-red)",
        cyan: "var(--cyan)",
        darkBrown: "var(--dark-brown)",
        mediumBrown: "var(--medium-brown)",
        cream: "var(--cream)",
        paleOrange: "var(--pale-orange)",
      }
    },
  },
  plugins: [],
}

