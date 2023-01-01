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
                    100: "#a8c3ff",
                    200: "#2563eb",
                    300: "#153b8f",
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
