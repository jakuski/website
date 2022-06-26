import { parse, Node, transform, RenderableTreeNode } from "@markdoc/markdoc";

export const parseMarkdoc = (source: string, filename?: string): Node => {
	return parse(source, filename);
};
export const transformMarkdoc = (node: Node): RenderableTreeNode => {
	return transform(node, {
		nodes: {
			paragraph: { render: "Paragraph" }
		}
	});
};