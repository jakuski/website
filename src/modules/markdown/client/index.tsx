import { useMemo, createElement, Fragment } from "react";

import type { RenderableTreeNode } from "@markdoc/markdoc";

import { renderConfig } from "@/components/markdown";
import { MarkdocData } from "@/modules/markdown/types";

import markdocReactRenderer from "./experimentalRender";

/* export const render = (renderableNodes: RenderableTreeNode): React.ReactNode => {
	return renderers.react(renderableNodes, React, renderConfig);
}; */

const render__EXPERIMENTAL__ = (
	renderableNodes: RenderableTreeNode
): React.ReactNode => {
	return markdocReactRenderer(
		renderableNodes,
		{ createElement, Fragment },
		renderConfig
	);
};

const MarkdocRenderer: React.FC<Pick<MarkdocData, "content">> = props => {
	const content = useMemo(
		() => render__EXPERIMENTAL__(props.content as RenderableTreeNode),
		[props.content]
	);

	return <>{content}</>;
};

export default MarkdocRenderer;
