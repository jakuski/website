import Post from "@/components/Post";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { WorksIndex } from "@/routes";

interface BasicPageProps {

}

export default function ProjectPage() {
	return <Post title="Works">
		Hello
	</Post>;
}

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [].map(projectName => ({
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