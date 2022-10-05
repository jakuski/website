import { Config } from "@markdoc/markdoc";

// Nodes
import Paragraph from "./nodes/Paragraph";
import Article from "./nodes/Article";
import Anchor from "./nodes/Anchor";
import Header from "./nodes/Header";
import Divider from "./nodes/Divider";

// Tags
import Email from "./tags/Email";
import VimeoEmbed from "./tags/VimeoEmbed";
import FigmaEmbed, { FIGMA_EMBEDDABLE_URL_REGEX } from "./tags/FigmaEmbed";

enum MarkdocComponentNames  {
	NODE_ARTICLE = "AR",
	NODE_PARAGRAPH = "P",
	NODE_ANCHOR = "A",
	NODE_HEADER = "H",
	NODE_DIVIDER = "D",

	TAG_EMAIL = "E",
	TAG_EMBED_VIMEO = "EM_VIMEO",
	TAG_EMBED_FIGMA = "EM_FIGMA"
}

const linkTag = {
	render: MarkdocComponentNames.NODE_ANCHOR,
	attributes: {
		href: {
			type: String
		},
		newWindow: {
			type: Boolean,
			required: false
		}
	}
};

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
		link: linkTag
	},
	tags: {
		email: {
			render: MarkdocComponentNames.TAG_EMAIL,
			attributes: {
				address: { type: String },
				domain: { type: String }
			}
		},
		link: linkTag,
		vimeo: {
			render: MarkdocComponentNames.TAG_EMBED_VIMEO,
			attributes: {
				id: { type: String, required: true },
				color: { type: String}
			}
		},
		figma: {
			render: MarkdocComponentNames.TAG_EMBED_FIGMA,
			attributes: {
				url: {
					type: String,
					required: true,
					matches: FIGMA_EMBEDDABLE_URL_REGEX
				}
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

		// Tags
		[MarkdocComponentNames.TAG_EMAIL]: Email,
		[MarkdocComponentNames.TAG_EMBED_VIMEO]: VimeoEmbed,
		[MarkdocComponentNames.TAG_EMBED_FIGMA]: FigmaEmbed
	}
};