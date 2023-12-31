import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{jsx,ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                dark: {
                    50: "#b8b8b8",
                    100: "#b0b0b0",
                    200: "#9c9c9c",
                    300: "#7d7d7d",
                    400: "#595959",
                    500: "#3b3b3b",
                    600: "#242424",
                    700: "#121212",
                    800: "#0a0a0a",
                    900: "#0a0a0a",
                    950: "#0a0a0a",
                },
                wedgewood: {
                    50: "#f3fbfb",
                    100: "#e7f7f8",
                    200: "#d4eff2",
                    300: "#bae3e9",
                    400: "#9cd1dd",
                    500: "#84bed2",
                    600: "#6ca3c1",
                    700: "#6495af",
                    800: "#497288",
                    900: "#40606d",
                    950: "#263740",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            scale: {
                98: ".98",
                99: ".99",
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
