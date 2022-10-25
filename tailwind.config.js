const defaultTheme = require("tailwindcss/defaultTheme");

const v = varName => `var(--${varName})`;

module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily:{
			serif: ["quincy-cf", ...defaultTheme.fontFamily.serif],
			sans: ["neue-haas-grotesk-text", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				"brand": "#ffa50a"
			},
			minHeight: {
				"44": "44px",
			},
			minWidth: {
				"44": "44px"
			}
		}
	},
	plugins: [],
};
