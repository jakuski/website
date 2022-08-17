export enum MarkdownComponentSets {
	BASIC = "BASIC"
}

export interface MarkdocData <F = Record<string, unknown>> {
	content: unknown;
	// metadata: Metadata;
	frontmatter: F
}

export interface DocumentMetadata {
	title: string;
	displayTitle: string;
	description: string;
	published: Date;
	edited: Date;
}

export interface Frontmatter {
	meta: DocumentMetadata;
	pageProps: Record<string, unknown>;
	project: null;
	variables: Record<string, unknown>;
}

export type PartialFrontmatter = Partial<Frontmatter>;