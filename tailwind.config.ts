import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    boxShadow: {
      'projectFigure': '10px 15px 25px 0px rgba(0, 0, 0, 0.2)'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

export default config