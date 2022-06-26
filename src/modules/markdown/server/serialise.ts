import { RenderableTreeNode } from "@markdoc/markdoc";

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

export default serialiseRenderableTreeNode;