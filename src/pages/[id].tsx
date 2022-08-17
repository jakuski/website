import Post, { BasicMarkdownPost, PostProps } from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";

interface Params {
	[param: string]: string;
	id: string;
}

interface BasicPageProps {
	xyz: boolean
}

export default BasicMarkdownPost;

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: ["test-xyz"].map(pageName => ({
			params: { id: pageName }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<PostProps, Params> = (context) => {
	// This will never be thrown but it's here to satisfy TypeScript.
	if (!context.params) throw "Error: root(id)/getStaticProps context#params is falsy";

	const { id } = context.params;

	//
	// INSERT CONTENT LOADING LOGIC
	//

	return {
		props: {
			xyz: true
		}
	};
};