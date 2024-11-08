/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        darklight: "#1F2937",
        lightgray: "#9CA3AF",
        gray: "#F3F4F6",
        yellow: "#EAB308"
      },
    },
  },
  plugins: [],
}

