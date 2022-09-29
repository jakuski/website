import { BasicMarkdownPost, BasicMarkdownPostProps } from "@/components/Post";
import { ContentDirectoryNames, getContentIDs, readContentFile } from "@/modules/fs";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params {
	[param: string]: string;
	id: string;
}

export default BasicMarkdownPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = await getContentIDs(ContentDirectoryNames.PROJECTS);
	return {
		paths: ids.map(pageName => ({
			params: { id: pageName }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<BasicMarkdownPostProps, Params> = async (context) => {
	// This will never be thrown but it's here to satisfy TypeScript.
	if (!context.params) throw "Error: works/[id]::getStaticProps context#params is falsy";
	const { id: pageID } = context.params;

	const result = await getStaticMarkdoc([ContentDirectoryNames.PROJECTS, `${pageID}.md`])();

	return result;
};