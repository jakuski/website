import { AllApps } from "@/modules/software-links/types";

export enum MarkdownComponentSets {
	BASIC = "BASIC"
}

export interface MarkdocData <F = Frontmatter> {
	content: unknown;
	frontmatter: F
}

export type Frontmatter = {
	meta: {
		title: string;
		displayTitle?: string;
		description?: string;
		published?: Date;
		edited?: Date;
		image?: string;
	};
	pageProps?: {
		showMetadata?: boolean;
		colours?: {
			foreground?: string;
			background?: string;
		}
	};
	project?: {
		category?: string;
		softwareUsed?: AllApps[];
		credits?: string;
		date?: Date;
	};
	variables?: Record<string, unknown>;
}