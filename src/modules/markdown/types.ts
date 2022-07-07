import { RenderableTreeNode } from "@markdoc/markdoc";

export enum MarkdownComponentSets {
	BASIC = "BASIC"
}

export interface MarkdocData <F = Record<string, unknown>> {
	content: unknown;
	// metadata: Metadata;
	frontmatter: F
}

export interface BasicFrontmatter {
	title: string;
	titleClean: string | void;
	shortDesc: string | void; 
}

export interface Metadata {
	title: string;
	displayTitle?: string;
	description: string;
	published?: Date;
	edited?: Date;
}