/*

The server side code handles all parsing and transforming, the client
is only responsible for rendering ready-to-go data.

*/

import { GetStaticProps } from "next";
import { Config, parse, RenderableTreeNode, transform } from "@markdoc/markdoc";
import readContent, { getContentPath } from "./fs";
import serialiseTopLevel, { serialise } from "./serialise";
import parseYaml from "./yaml";
import { MarkdocData, Frontmatter } from "../types";
import { transformConfig } from "@/components/markdown";
import { contentDirectory } from "@/modules/fs";
import { domain, emailDomain } from "@/config";

export interface MarkdocLoaderProps {
	markdocContent: RenderableTreeNode
}

const onDefaultFrontmatterWarning = (): void => {
	console.warn("⚠ Markdoc Warning\nDefault frontmatter has been returned.");
};

const defaultFrontmatter: Frontmatter = {
	meta: {
		title: "Unnamed document",
	},
	pageProps: {},
	variables: {}
};

const processFrontmatter = (rawFrontmatter: string, filename?: string): Frontmatter => {
	if (!rawFrontmatter) {
		onDefaultFrontmatterWarning();
		return defaultFrontmatter;
	}

	const parsed = parseYaml(rawFrontmatter, filename) as Frontmatter;

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

const createTransformConfig = (frontmatter: Frontmatter) => {
	const frontmatterConfig = {
		variables: Object.assign({
			frontmatter,
			utils: {
				currentYear: new Date().getFullYear(),
				domain,
				emailDomain
			}
		}, frontmatter.variables),
	};

	return Object.assign(frontmatterConfig, transformConfig);
};

export const getStaticMarkdoc = (path: string[]) => {
	return async () => {
		// File system operations.
		const filePath = getContentPath(path);
		const rawDocument = await readContent(filePath);

		// Parsing
		const documentAST = parse(rawDocument, filePath);

		// Transformations
		const frontmatter = processFrontmatter(
			documentAST.attributes.frontmatter,
			contentDirectory + "/" + path.join("/") + "::frontmatter",
			// the arg above appends "frontmatter" to the filename (such as "/Site/Content/hello-world.md::frontmatter")
			// to improve readability of any YAML parser errors that could be thrown.
		);

		const renderable = transform(documentAST, createTransformConfig(frontmatter));

		return {
			props: {
				content: serialiseTopLevel(renderable),
				/* frontmatter needs to be serialised as any dates in YAML will fail Next.js validation for some reason. */
				frontmatter: serialise(frontmatter) as MarkdocData["frontmatter"]
			}
		};
	};
};