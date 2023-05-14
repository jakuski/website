import { GetStaticPaths, GetStaticProps } from "next";

import { MarkdownPost, MarkdownPostProps } from "@/components/MarkdownPost";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import { getStaticMarkdoc } from "@/modules/markdown/server";

interface Params {
	[param: string]: string;
	id: string;
}

const ProjectPost: React.FC<MarkdownPostProps> = props => {
	return <MarkdownPost {...props} project={true} />;
};

export default ProjectPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const ids = await getContentIDs(ContentDirectoryNames.PROJECTS);
	return {
		paths: ids.map(pageName => ({
			params: { id: pageName }
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
		throw "Error: works/[id]::getStaticProps context#params is falsy";
	const { id: pageID } = context.params;

	const result = await getStaticMarkdoc(
		ContentDirectoryNames.PROJECTS,
		`${pageID}.md`
	)();

	return result;
};
