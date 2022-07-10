import Post from "../../components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectData from "../../content/projects/index.json";
import Head from "next/head";
import { WorksHome } from "@/routes";

interface ProjectPageProps {

}

export default function ProjectPage() {
	return <Post title="Works">
		Hello
	</Post>;
}

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: Object.keys(ProjectData.projectDefs).map(projectName => ({
			params: { id: projectName }
		})),
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = () => {
	return {
		props: {}
	};
};