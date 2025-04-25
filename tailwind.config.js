/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5',
                secondary: '#6366f1',
                accent: '#f97316',
                success: '#10b981',
                error: '#ef4444',
                'dark-bg': '#1e293b',
                'light-bg': '#f8fafc',
                'text-dark': '#334155',
                'text-light': '#f8fafc',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
        },
    },
    plugins: [],
};