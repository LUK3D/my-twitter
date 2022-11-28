import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    // safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                ll: {

                    base: "#00000014",
                    neutral: "#FFFFFF",
                    primary: "#2697FE",
                    secondary: "#1EE9AC",
                    accent: "#FFD025",
                    info: "#1CB5E7",
                    success: "#2BD3A2",
                    warning: "#FAB34A",
                    error: "#FE4443",
                    border: "#EAEBEF"


                },
                ld: {
                    base: "#212332",
                    neutral: "#2A2E3F",
                    primary: "#2697FE",
                    secondary: "#1EE9AC",
                    accent: "#FFD025",
                    info: "#1CB5E7",
                    success: "#2BD3A2",
                    warning: "#FAB34A",
                    error: "#FE4443",
                    border: "#111219"
                },

            },
        },
    },
    plugins: [],
})