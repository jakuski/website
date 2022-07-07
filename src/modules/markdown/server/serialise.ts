import { RenderableTreeNode } from "@markdoc/markdoc";

type ObjectWithToJSON = object & {
	toJSON(): string;
}

export const convertToPrimitive = (val: unknown): unknown => {
	if (["number","string","boolean"].includes(typeof val)) {
		return val;
	}

	if ((typeof val !== "object") || (val == null)) return null;

	if ("toJSON" in val && (typeof (val as ObjectWithToJSON).toJSON === "function" )) {
		return (val as ObjectWithToJSON).toJSON();
	}

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

	const converted = convertToPrimitive(node);

	return converted;
};

export default serialiseRenderableTreeNode;