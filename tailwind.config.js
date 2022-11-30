/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#f8f7ff',
                    500: '#443acf'
                }
            }
        }
    },
    plugins: [],
}
