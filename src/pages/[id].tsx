import Post, { BasicMarkdownPost, BasicMarkdownPostProps } from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params {
	[param: string]: string;
	id: string;
}

export default BasicMarkdownPost;

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: ["test-page"].map(pageName => ({
			params: { id: pageName }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<BasicMarkdownPostProps, Params> = (context) => {
	// This will never be thrown but it's here to satisfy TypeScript.
	if (!context.params) throw "Error: root(id)/getStaticProps context#params is falsy";

	const { id: pageID } = context.params;

	//
	// INSERT CONTENT LOADING LOGIC
	//

	return {
		props: {
			content: "lorem ipsum",
			frontmatter: {
				meta: {
					title: "Working title",
					displayTitle: "Working display title.",
					description: "Hello xyz",
					edited: new Date().toJSON(),
					published: new Date().toJSON()
				},
				pageProps: {
					showMetadata: true
				},
				project: {
					category: "UI/UX",
					softwareUsed: ["adobe.cc.after-effects", "adobe.cc.lightroom-cc", "figma.design"],
					credits: "Mawia uwu"
				}
			}
		}
	};
};