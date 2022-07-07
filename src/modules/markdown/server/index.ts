/*

The server side code handles all parsing and transforming, the client
is only responsible for rendering ready-to-go data.

*/

import { GetStaticProps } from "next";
import { Config, parse, RenderableTreeNode, transform } from "@markdoc/markdoc";
import readContent, { getContentPath } from "./fs";
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

const processFrontmatter = (rawFrontmatter: string, filename?: string): Record<string, unknown> => {
	if (!rawFrontmatter) return {};

	const parsed = parseYaml(rawFrontmatter, {
		onWarning: onYamlWarning,
		filename
	});

	if ((parsed !== null) && (typeof parsed === "object")) return parsed as Record<string, unknown>;
	else return {};
};

export const getStaticMarkdoc: (path: string[]) => GetStaticProps<MarkdocData> = (path: string[]) => {
	return async () => {
		const filePath = getContentPath(path);
		const document = await readContent(filePath);

		const ast = parse(document, filePath);
		const frontmatter = processFrontmatter(ast.attributes.frontmatter, [...path, "frontmatter"].join("/"));

		const renderable = transform(ast, Object.assign<Config, Config>({
			variables: {
				frontmatter: frontmatter.vars || {}
			}
		}, transformConfig));

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