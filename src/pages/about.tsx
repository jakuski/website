import { GetStaticProps, GetStaticPropsContext } from "next";
import Post from "../components/Post";
import { render } from "@/modules/markdown";
import { readContentFile } from "@/modules/content";

interface ContentProps {
	content: string;
}

const About: React.FC<ContentProps> = props => {
	return (
		<Post title="About">
			{render(props.content)}
		</Post>
	);
};

export const getStaticProps: GetStaticProps<ContentProps> = async context => {
	return {
		props: {
			content: await readContentFile("base", "about.md")
		}
	};
};

export default About;