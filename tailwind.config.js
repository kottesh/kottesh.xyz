/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./templates/**/*.html", "./content/**/*.md"],
    theme: {
        extend: {
            fontFamily: {
                halyard: ["HalyardDisplayRegular", "sans-serif"],
                bricolagegrotesque: ["BricolageGrotesque-Bold"],
                gustavo: ["Gustavo-Bold"],
                plexmono: ["IBM Plex Mono", "monospace"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
