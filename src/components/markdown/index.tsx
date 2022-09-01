import { Config } from "@markdoc/markdoc";

// Nodes
import Paragraph from "./nodes/Paragraph";
import Article from "./nodes/Article";
import Anchor from "./nodes/Anchor";
import Header from "./nodes/Header";
import Divider from "./nodes/Divider";

// Tags
import Email from "./tags/Email";

enum MarkdocComponentNames  {
	NODE_ARTICLE = "AR",
	NODE_PARAGRAPH = "P",
	NODE_ANCHOR = "A",
	NODE_HEADER = "H",
	NODE_DIVIDER = "D",

	TAG_EMAIL = "E"
}

export const transformConfig: Config = {
	nodes: {
		document: { render: MarkdocComponentNames.NODE_ARTICLE  },
		paragraph: { render: MarkdocComponentNames.NODE_PARAGRAPH },
		hr: { render: MarkdocComponentNames.NODE_DIVIDER },
		heading: { render: MarkdocComponentNames.NODE_HEADER, attributes: {
			level: {
				type: Number
			},
			id: {
				type: String
			}
		} },
		link: { render: MarkdocComponentNames.NODE_ANCHOR, attributes: {
			href: {
				type: String
			}
		}}
	},
	tags: {
		email: {
			render: MarkdocComponentNames.TAG_EMAIL,
			attributes: {
				address: { type: String },
				domain: { type: String }
			}
		}
	}
};

// @TODO add typings
export const renderConfig = {
	components: {
		[MarkdocComponentNames.NODE_ARTICLE]: Article,
		[MarkdocComponentNames.NODE_PARAGRAPH]: Paragraph,
		[MarkdocComponentNames.NODE_ANCHOR]: Anchor,
		[MarkdocComponentNames.NODE_HEADER]: Header,
		[MarkdocComponentNames.NODE_DIVIDER]: Divider,
		[MarkdocComponentNames.TAG_EMAIL]: Email
	}
};