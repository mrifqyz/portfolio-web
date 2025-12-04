/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    // Fun fact gradient colors - light mode
    'from-blue-50', 'to-blue-100', 'from-purple-50', 'to-purple-100',
    'from-green-50', 'to-green-100', 'from-orange-50', 'to-orange-100',
    'from-pink-50', 'to-pink-100', 'from-cyan-50', 'to-cyan-100',
    'from-indigo-50', 'to-indigo-100', 'from-red-50', 'to-red-100',
    // Fun fact gradient colors - dark mode
    'dark:from-blue-900/20', 'dark:to-blue-800/20', 'dark:from-purple-900/20', 'dark:to-purple-800/20',
    'dark:from-green-900/20', 'dark:to-green-800/20', 'dark:from-orange-900/20', 'dark:to-orange-800/20',
    'dark:from-pink-900/20', 'dark:to-pink-800/20', 'dark:from-cyan-900/20', 'dark:to-cyan-800/20',
    'dark:from-indigo-900/20', 'dark:to-indigo-800/20', 'dark:from-red-900/20', 'dark:to-red-800/20',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

