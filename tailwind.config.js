module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                sans: ["Outfit", "sans-serif"],
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}