module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg": "url('/src/static/landing-bg.png')",
        "cval-token-bg": "url('/src/static/CVAL_Token_background.png')",
      },
      fontFamily: {
        outfit: ["Outfit"],
      },
      colors: {
        "violet-color": "#670070",
        "second-violet-color": "#740087",
        "third-violet-color": "#607ADB",
        "fourth-violet-color": "#00CCCD",

        "second-violet-color": "#A533FF",
        "first-black-color": "#B2B2B2",
        "second-black-color": "#1F1F1F",
        "third-black-color": "#4E4E4E",
        "fourth-black-color": "#383838",
        "fifth-black-color": "#212121",
        "six-black-color": "#878787",
        "seven-black-color": "#1E1E1E",

        "first-green-color": "#00DC72",
        "second-green-color": "#A6BB28",
        "third-green-color": "#41F96A",
        "fourth-green-color": "#32E178",
        "fifth-green-color": "#00D64C",

        "first-red-color": "#DC0F0F",

        "first-yellow-color": "#CFD01A",
      },
    },
  },
  plugins: [],
};
