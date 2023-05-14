/*
links for import sorting:
- https://github.com/IanVS/prettier-plugin-sort-imports
- https://github.com/shadcn/ui/blob/main/prettier.config.cjs
*/

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
		"react",
		"next",
		"^next/(.*)$",
		"next-themes",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^@/(.*)$",
		"",
		"^[./]"
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "5.0.4"
};
