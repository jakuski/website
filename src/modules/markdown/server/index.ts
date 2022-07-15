/*

The server side code handles all parsing and transforming, the client
is only responsible for rendering ready-to-go data.

*/

import { GetStaticProps } from "next";
import { Config, parse, RenderableTreeNode, transform } from "@markdoc/markdoc";
import readContent, { getContentPath, pathSeperator } from "./fs";
import serialise, { convertToPrimitive } from "./serialise";
import { load as parseYaml, YAMLException } from "js-yaml";
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
	[x: string]: unknown;
	
};

const defaultFrontmatter: Frontmatter = {

};

const processFrontmatter = (rawFrontmatter: string, filename?: string): Frontmatter => {
	if (!rawFrontmatter) {
		onDefaultFrontmatterWarning();
		return defaultFrontmatter;
	}
	
	const parsed = parseYaml(rawFrontmatter, {
		onWarning: onYamlWarning,
		filename
	});

	if ((parsed !== null) && (typeof parsed === "object")) {
		return Object.assign({}, defaultFrontmatter, parsed);
	}

	else {
		onDefaultFrontmatterWarning();
		return defaultFrontmatter;
	}
};

const getVariables = (frontmatter: Frontmatter) => {



	return {
		utils: {
			currentYear: new Date().getFullYear()
		}
	};
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
				frontmatter: frontmatter.vars || {}
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