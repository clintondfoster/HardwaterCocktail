// import type { Config } from 'tailwindcss'

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                subtitle: ['var(--font-piazzolla)', 'serif'],
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['dark'],
    },
}
export default config