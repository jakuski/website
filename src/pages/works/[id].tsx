import Post from "../../components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { WorksIndex } from "@/routes";
import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";

interface ProjectPageProps {

}

export default function ProjectPage() {
	return <Post title="Works">
		Hello
	</Post>;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const projectIDs = await getContentIDs(ContentDirectoryNames.PROJECTS);

	return {
		paths: projectIDs.map(id => ({
			params: { id }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {}
	};
};