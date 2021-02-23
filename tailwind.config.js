module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
