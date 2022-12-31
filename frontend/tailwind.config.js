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
                    // 100: "#769ae8",
                    100: "#adc2f0",
                    200: "#2563eb",
                    300: "#153b8f",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
