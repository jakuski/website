import Paragraph from "./Paragraph";
import { Config } from "@markdoc/markdoc";
import Article from "./Article";
import Anchor from "./Anchor";

enum BasicSetKeys  {
	ARTICLE = "B-A",
	PARAGRAPH = "B-P",
	ANCHOR = "B-AN"
}

export const transformConfig: Config = {
	nodes: {
		document: { render: BasicSetKeys.ARTICLE  },
		paragraph: { render: BasicSetKeys.PARAGRAPH },
		link: { render: BasicSetKeys.ANCHOR, attributes: {
			href: {
				type: String
			}
		}}
	}
};

export const renderConfig = {
	components: {
		[BasicSetKeys.ARTICLE]: Article,
		[BasicSetKeys.PARAGRAPH]: Paragraph,
		[BasicSetKeys.ANCHOR]: Anchor
	}
};