module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Voor React en andere frontend-code
    "./public/**/*.html",        // Voor handgeschreven HTML-bestanden, indien er daar zijn
    "./content/**/*.{md,mdx}",   // Voor Markdown-content, indien er daar zijn
  ],
  theme: {
    extend: {}, // hierin staan optioneel een heleboel klassen
  },
  plugins: [],
};
