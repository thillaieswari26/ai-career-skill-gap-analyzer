/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        career: "#5546F5",
        ink: "#172554"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(67, 56, 202, 0.08)"
      }
    }
  },
  plugins: []
}
