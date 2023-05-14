const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

const v = varName => `var(--${varName})`;

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,md,mdoc}"],
	theme: {
		fontFamily: {
			serif: [v("font-serif"), ...defaultTheme.fontFamily.serif],
			sans: [v("font-sans"), ...defaultTheme.fontFamily.sans]
		},
		colors: {
			ui: defaultColors.stone,
			brand: "#ffa50a",

			black: defaultColors.black,
			white: defaultColors.white,
			transparent: defaultColors.transparent
		},
		extend: {
			minHeight: {
				44: "44px"
			},
			minWidth: {
				44: "44px"
			}
		}
	},
	plugins: []
};
