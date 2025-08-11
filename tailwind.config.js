/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        hatch: '#d3d3d3',
        offblack: '#121212',
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23f0f0f0' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
        'grid-pattern-dark': `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid-dark' patternUnits='userSpaceOnUse' width='40' height='40'%3e%3cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23202020' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid-dark)'/%3e%3c/svg%3e")`,
        'diagonal-hatch': "repeating-linear-gradient(135deg, #eeeeee 0px, #eeeeee 1px, rgba(255,255,255,0) 1px, rgba(255,255,255,0) 5px)",
        'diagonal-hatch-dark': "repeating-linear-gradient(135deg, #2a2a2a 0px, #2a2a2a 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 5px)",
      }
    },
  },
  plugins: [],
}
