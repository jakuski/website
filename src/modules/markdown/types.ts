import { RenderableTreeNode } from "@markdoc/markdoc";

export enum MarkdownComponentSets {
	BASIC = "BASIC"
}

export interface MarkdocData <F = Record<string, unknown>> {
	content: unknown;
	frontmatter: F
}

export interface BasicFrontmatter {
	title: string;
	titleClean: string | void;
	shortDesc: string | void; 
}