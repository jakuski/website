const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

const v = varName => `var(--${varName})`;

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,md}"],
	theme: {
		fontFamily: {
			serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
			// this is not the way things should be done iirc
			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans]
		},
		colors: {
			ui: defaultColors.stone,
			brand: "#ffa50a"
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
