/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#fae7ff",
                    200: "#c45cb6",
                    300: "#8b419e",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
