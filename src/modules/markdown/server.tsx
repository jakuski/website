import { GetStaticProps } from "next";
import { readFile } from "fs";
import { join } from "path";
import { parseMarkdoc, transformMarkdoc } from ".";
import { RenderableTreeNode, Tag } from "@markdoc/markdoc";

export interface MarkdocLoaderProps {
	markdocContent: RenderableTreeNode
}

export const contentFolder = join(process.cwd(), "src", "content");

export const readContentFile = (path: string[]): Promise<string> => {
	const filePath = join(contentFolder, ...path);

	return new Promise((res, rej) => {
		readFile(filePath, {encoding: "utf-8"}, (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};

const convertToPrimitive = (val: unknown): unknown => {
	if (["number","string","boolean"].includes(typeof val)) {
		return val;
	}

	if (typeof val !== "object") return null;

	if (Array.isArray(val)) return val.map(convertToPrimitive);

	const final = {};
	for (const [key, value] of Object.entries(val)) {
		final[key] = convertToPrimitive(value);
	}
	return final;
};

const serialiseRenderableTreeNode = (node: RenderableTreeNode): unknown => {
	if (node == null) return "";
	if (typeof node === "string") return node;

	return convertToPrimitive(node);
};

export const getStaticMarkdoc: (path: string[]) => GetStaticProps = (path: string[]) => {
	return async () => {
		const content = transformMarkdoc(parseMarkdoc(await readContentFile(path), path.join("/")));
		const s = serialiseRenderableTreeNode(content);

		return {
			props: {
				markdocContent: s
			}
		};
	};
};


