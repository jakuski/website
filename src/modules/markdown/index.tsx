
import Paragraph from "@/components/markdown/Paragraph";
import { parse, Node, transform, RenderableTreeNode, renderers } from "@markdoc/markdoc";
import React from "react";

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
export const renderMarkdoc = (renderableNodes: RenderableTreeNode): React.ReactNode => {
	return renderers.react(renderableNodes, React, {
		components: {
			Paragraph
		}
	});
};
export const render = (src: string): React.ReactNode => {
	return renderMarkdoc(transformMarkdoc(parseMarkdoc(src)));
};