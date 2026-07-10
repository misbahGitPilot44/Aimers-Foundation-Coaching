/** @type {import('tailwindcss').Config} */
export default {
  // Keep Tailwind's `dark:` utilities in sync with the `.dark` class
  // that App.tsx applies to the document root.
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
