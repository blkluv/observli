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
                    50: "#f1f8f4",
                    100: "#ddeee3",
                    200: "#bedcca",
                    300: "#92c3aa",
                    400: "#63a484",
                    500: "#428767",
                    600: "#337156",
                    700: "#275542",
                    800: "#214436",
                    900: "#1b392d",
                    950: "#0f1f19",
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
