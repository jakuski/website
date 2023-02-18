import { MarkdownPost, MarkdownPostProps } from "@/components/MarkdownPost";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params {
	[param: string]: string;
	id: string;
	directory: string;
}

export default MarkdownPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = await getContentIDs(ContentDirectoryNames.ROOT);
	return {
		paths: ids.map(pageName => ({
			params: { id: pageName, directory: ContentDirectoryNames.ROOT }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<
	MarkdownPostProps,
	Params
> = async context => {
	// This will never be thrown but it's here to satisfy TypeScript.
	if (!context.params)
		throw "Error: root(id)/getStaticProps context#params is falsy";
	const { id: pageID, directory } = context.params;

	const result = await getStaticMarkdoc(
		ContentDirectoryNames.ROOT,
		`${pageID}.md`
	)();

	return result;
};
