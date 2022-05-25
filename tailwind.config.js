const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    
		colors: {
			"citrine": "#d48724",
			"black": "0D0D0D"
		},
		fontFamily:{
			serif: ["quincy-cf", ...defaultTheme.fontFamily.serif],
			sans: ["neue-haas-grotesk-text", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			minHeight: {
				"44": "44px",
			}
		}
	},
	plugins: [],
};
