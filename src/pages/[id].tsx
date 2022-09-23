import Post, { BasicMarkdownPost, BasicMarkdownPostProps } from "@/components/Post";
import { ContentDirectoryNames, getContentIDs, readContentFile } from "@/modules/fs";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params {
	[param: string]: string;
	id: string;
	directory: string;
}

export default BasicMarkdownPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = await getContentIDs(ContentDirectoryNames.BASE);
	return {
		paths: ids.map(pageName => ({
			params: { id: pageName, directory: ContentDirectoryNames.BASE }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<BasicMarkdownPostProps, Params> = async (context) => {
	// This will never be thrown but it's here to satisfy TypeScript.
	if (!context.params) throw "Error: root(id)/getStaticProps context#params is falsy";
	const { id: pageID, directory } = context.params;

	const result = await getStaticMarkdoc([ContentDirectoryNames.BASE, `${pageID}.md`])(context);

	//
	// INSERT CONTENT LOADING LOGIC
	//

	return result;
};