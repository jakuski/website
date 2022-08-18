import React, { useMemo } from "react";
import { renderers, RenderableTreeNode } from "@markdoc/markdoc";
import { MarkdocData } from "@/modules/markdown/types";
import { renderConfig } from "@/components/markdown/sets/basic";

export const render = (renderableNodes: RenderableTreeNode): React.ReactNode => {
	return renderers.react(renderableNodes, React, renderConfig);
}; 

const MarkdocRenderer: React.FC<Pick<MarkdocData, "content">> = props => {
	const content = useMemo(() => render(props.content as RenderableTreeNode), [props.content]);

	return <>{content}</>;
};

export default MarkdocRenderer;