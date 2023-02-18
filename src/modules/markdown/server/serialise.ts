import type { RenderableTreeNode } from "@markdoc/markdoc";

type ObjectWithToJSON = object & {
	toJSON(): unknown;
};

export const serialise = (val: unknown): unknown => {
	// If val is a number, string, or boolean, return it as is.
	if (["number", "string", "boolean"].includes(typeof val)) {
		return val;
	}

	// If its not an object or is null, safely fallback to null. This will remove null, undefined and functions.
	if (typeof val !== "object" || val == null) return null;

	// From this point on, we can safely assume everything is an object as all other typeof cases have been handled.

	// If the object has a callable toJSON method, return the result of calling it. This is present on Date.prototype
	// but can also be utilised by 3rd party data structures.
	if (
		"toJSON" in val &&
		typeof (val as ObjectWithToJSON).toJSON === "function"
	) {
		return (val as ObjectWithToJSON).toJSON();
	}

	// If val is an array, recursively convert it's content to primitives.
	if (Array.isArray(val)) return val.map(serialise);

	// The very last scenario, a plain object.
	// This clones the object and converts it's values to primitives recursively.
	const final: Record<string, unknown> = {};
	for (const [key, value] of Object.entries(val)) {
		final[key] = serialise(value);
	}
	return final;
};

// This
const serialiseTopLevel = (node: RenderableTreeNode): unknown => {
	if (node == null) return "";
	if (typeof node === "string") return node;

	const converted = serialise(node);

	return converted;
};

export default serialiseTopLevel;
