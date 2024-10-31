/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./templates/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        halyard: ["HalyardDisplayLight", "sans-serif"],
        bricolagegrotesque: ["BricolageGrotesque-Bold"],
        gustavo: ["Gustavo-Bold"],
        dm: ['"DM Sans"'],
        plexmono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
