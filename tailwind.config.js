const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    
		colors: {
			"brand": "#d48724",
			"black": "#0D0D0D"
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
