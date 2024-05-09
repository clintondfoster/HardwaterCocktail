import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                subtitle: ['var(--font-piazzolla)'],
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['dark'],
    },
}
export default config