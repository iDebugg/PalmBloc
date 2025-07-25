/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        funnel: 'var(--font-funnel-display)',
        mona: 'var(--font-mona-sans)',
      },
    },
  },
  plugins: [],
};
