import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        // fontFamily: {
        //     'body': ['Montserrat Alternates', 'sans-serif'],
        //     'display': ['Montserrat Alternates', 'sans-serif'],
        // },
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()]
} satisfies Config

