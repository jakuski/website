/*

The server side code handles all parsing and transforming, the client
is only responsible for rendering ready-to-go data.

*/

import { GetStaticProps } from "next";
import { Config, parse, RenderableTreeNode, transform } from "@markdoc/markdoc";
import readContent, { getContentPath, pathSeperator } from "./fs";
import serialise, { convertToPrimitive } from "./serialise";
import { JSON_SCHEMA, load as parseYaml, YAMLException } from "js-yaml";
import { MarkdocData } from "../types";
import { transformConfig } from "@/components/markdown/sets/basic";

export interface MarkdocLoaderProps {
	markdocContent: RenderableTreeNode
}

const onYamlWarning = (e: YAMLException): void => {
	console.warn(`⚠ YAML Warning\n${e}`);
};

const onDefaultFrontmatterWarning = (): void => {
	console.warn("⚠ Markdoc Warning\nDefault frontmatter has been returned.");
};

interface Frontmatter {
	meta: {
		title: string;
		displayTitle?: string;
		description: string;
		published?: Date;
		edited?: Date;
	},
	pageProps: {

	}
	variables: {
		[x: string]: unknown
	}
};

const defaultFrontmatter: Frontmatter = {
	meta: {
		title: "Unnamed document",
		description: "Document description missing"
	},
	pageProps: {},
	variables: {}
};

const processFrontmatter = (rawFrontmatter: string, filename?: string): Frontmatter => {
	if (!rawFrontmatter) {
		onDefaultFrontmatterWarning();
		return defaultFrontmatter;
	}
	
	const parsed = parseYaml(rawFrontmatter, {
		onWarning: onYamlWarning,
		filename,
		schema: JSON_SCHEMA // This prevents non JSON compatible types being accepted.
	}) as Frontmatter;

	if ((parsed !== null) && (typeof parsed === "object")) {
		if (!parsed.meta.displayTitle) {
			// Use the base #title if #displayTitle is not provided.
			parsed.meta.displayTitle = parsed.meta.title;
		}

		if (parsed.meta.edited) {
			parsed.meta.edited = new Date(parsed.meta.edited);
		}
		if (parsed.meta.published) {
			parsed.meta.published = new Date(parsed.meta.published);
		}
		return Object.assign({}, defaultFrontmatter, parsed);
	} else {
		onDefaultFrontmatterWarning();
		return defaultFrontmatter;
	}
};

const getVariables = (frontmatter: Frontmatter) => {



	return Object.assign({}, {
		utils: {
			currentYear: new Date().getFullYear()
		}
	});
};

export const getStaticMarkdoc: (path: string[]) => GetStaticProps<MarkdocData> = (path: string[]) => {
	return async () => {
		// File system operations.
		const filePath = getContentPath(path);
		const document = await readContent(filePath);

		// Parsing
		const ast = parse(document, filePath);

		// Transformations
		const frontmatter = processFrontmatter(
			ast.attributes.frontmatter,
			[...path, "frontmatter"].join(pathSeperator)
			// the arg above appends "frontmatter" to the filename (such as "/Site/Content/hello-world.md/frontmatter")
			// to improve readability of any YAML parser errors that could be thrown.
		);

		const renderable = transform(ast, Object.assign<Config, Config>({
			variables: {
				frontmatter: frontmatter
			}
		}, transformConfig));

		// Prepare for Next.js serialisation.
		const serialised = serialise(renderable);
		return {
			props: {
				content: serialised,
				/* frontmatter needs to be serialised as any dates in YAML will fail Next.js validation for some reason. */
				frontmatter: convertToPrimitive(frontmatter) as MarkdocData["frontmatter"]
			}
		};
	};
};