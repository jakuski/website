const defaultTheme = require("tailwindcss/defaultTheme");

const v = varName => `var(--${varName})`;

module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"brand": v("color-background"),
			"black": v("color-foreground"),
			"white": v("color-white"),

			"pure-black": "#000",
			"transparent": "transparent",
		},
		fontFamily:{
			serif: ["quincy-cf", ...defaultTheme.fontFamily.serif],
			sans: ["neue-haas-grotesk-text", ...defaultTheme.fontFamily.sans],
		},
		extend: {
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
