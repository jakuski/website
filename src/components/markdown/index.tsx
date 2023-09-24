import type { Config } from "@markdoc/markdoc";

import Anchor from "./nodes/Anchor";
import Article from "./nodes/Article";
import Divider from "./nodes/Divider";
import Header from "./nodes/Header";
// Nodes
import Paragraph from "./nodes/Paragraph";
// Tags
import Email from "./tags/Email";
import FigmaEmbed, { FIGMA_EMBEDDABLE_URL_REGEX } from "./tags/FigmaEmbed";
import Image from "./tags/Image";
import VimeoEmbed from "./tags/VimeoEmbed";

// Common attributes
const className = { type: String };
const id = { type: String };

enum MarkdocComponentNames {
	NODE_ARTICLE = "AR",
	NODE_PARAGRAPH = "P",
	NODE_ANCHOR = "A",
	NODE_HEADER = "H",
	NODE_DIVIDER = "D",

	TAG_EMAIL = "E",
	TAG_IMAGE = "I",

	TAG_GALLERY = "G",
	TAG_GALLERY_IMAGE = "G/I",
	TAG_GALLERY_ROW = "G/R",

	TAG_EMBED_VIMEO = "EM_VIMEO",
	TAG_EMBED_FIGMA = "EM_FIGMA"
}

const sharedComponents: Config["tags"] = {
	link: {
		render: MarkdocComponentNames.NODE_ANCHOR,
		attributes: {
			href: { type: String },
			newWindow: { type: Boolean, required: false }
		}
	},
	image: {
		render: MarkdocComponentNames.TAG_IMAGE,
		attributes: {
			src: { type: String, required: true },
			alt: { type: String },
			caption: { type: String }
		}
	}
};

export const transformConfig: Config = {
	nodes: {
		document: { render: MarkdocComponentNames.NODE_ARTICLE },
		paragraph: { render: MarkdocComponentNames.NODE_PARAGRAPH },
		hr: { render: MarkdocComponentNames.NODE_DIVIDER },
		heading: {
			render: MarkdocComponentNames.NODE_HEADER,
			attributes: {
				id,
				className,
				level: { type: Number }
			}
		},

		// Overwriting built ins
		link: sharedComponents.link,
		image: sharedComponents.image
	},
	tags: {
		email: {
			render: MarkdocComponentNames.TAG_EMAIL,
			attributes: {
				address: { type: String },
				domain: { type: String }
			}
		},
		link: sharedComponents.link,
		image: sharedComponents.image,
		gallery: {
			render: MarkdocComponentNames.TAG_GALLERY,
			attributes: {
				caption: { type: String }
			}
		},
		galleryImage: {
			render: MarkdocComponentNames.TAG_GALLERY_IMAGE,
			attributes: {
				src: { type: String, required: true }
			}
		},
		galleryRow: {
			render: MarkdocComponentNames.TAG_GALLERY_ROW
		},
		vimeo: {
			render: MarkdocComponentNames.TAG_EMBED_VIMEO,
			attributes: {
				id: { type: String, required: true },
				color: { type: String }
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
		[MarkdocComponentNames.TAG_IMAGE]: Image,

		[MarkdocComponentNames.TAG_EMBED_VIMEO]: VimeoEmbed,
		[MarkdocComponentNames.TAG_EMBED_FIGMA]: FigmaEmbed
	}
};
