/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "color-grayish-blue": "hsl(227, 12%, 61%)",
        "color-dark-blue": "hsl(233, 12%, 13%)",
        "color-pale-red": "hsl(13, 100%, 96%)",
        "color-red-fade": "#f98f75",
        "color-red": "#f3613c",
        "color-light-gray": "hsl(0, 0%, 98%)"
      }
    },
    container : {
      center: true,
      padding:  {
        DEFAULT: '20px',
        md: '50px'
      }
    }
  },
  plugins: [],
}
