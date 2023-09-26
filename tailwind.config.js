const defaultTheme = require("tailwindcss/defaultTheme");
const defaultColors = require("tailwindcss/colors");

const cssVar = varName => `var(--${varName})`;

const units = [
	1,
	2,
	4,
	6,
	8,
	10,
	12,
	16,
	20,
	24,
	32,
	40,
	48,
	56,
	64,
	72,
	80,
	96,
	128,
	160,
	192,
	224,
	256,
	288,
	320,
	384,
	448,
	512
];

const unitVariablesObject = units.reduce((obj, unit) => {
	obj[unit] = cssVar(`unit-${unit}`);
	return obj;
}, {});

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx,md,mdoc}"],
	theme: {
		fontFamily: {
			serif: [cssVar("font-serif"), ...defaultTheme.fontFamily.serif],
			["serif-cond"]: [cssVar("font-serif-cond"), ...defaultTheme.fontFamily.serif],
			sans: [cssVar("font-sans"), ...defaultTheme.fontFamily.sans]
		},
		colors: {
			ui: defaultColors.stone,
			brand: "#ffa50a",
			"brand-dark": "#312818",

			black: defaultColors.black,
			white: defaultColors.white,
			transparent: defaultColors.transparent
		},
		spacing: {
			...unitVariablesObject,
			0: 0
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
