const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        primary: "#81c408",
        secondary: "#ffb524",
        "bg-main": "#45595b",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
};
