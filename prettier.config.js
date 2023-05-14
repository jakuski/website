/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
	useTabs: true,
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	arrowParens: "avoid",
	quoteProps: "consistent",
	trailingComma: "none",
	bracketSpacing: true,
	importOrder: [
		"^@core/(.*)$",
		"",
		"^@server/(.*)$",
		"",
		"^@ui/(.*)$",
		"",
		"^[./]"
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "5.0.0"
};
