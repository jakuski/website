import Paragraph from "./Paragraph";
import { Config } from "@markdoc/markdoc";

enum BasicSetKeys  {
	PARAGRAPH = "B-P"
}

export const transformConfig: Config = {
	nodes: {
		paragraph: { render: BasicSetKeys.PARAGRAPH }
	}
};

export const renderConfig = {
	components: {
		[BasicSetKeys.PARAGRAPH]: Paragraph
	}
};