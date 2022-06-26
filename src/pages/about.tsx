import MarkdocRenderer from "@/modules/markdown/client";
import { getStaticMarkdoc,MarkdocLoaderProps } from "@/modules/markdown/server";
import Post from "../components/Post";

const About: React.FC<MarkdocLoaderProps> = props => {
	return (
		<Post title="About me.">
			<MarkdocRenderer markdocContent={props.markdocContent} />
		</Post>
	);
};

export const getStaticProps = getStaticMarkdoc(["base", "about.md"]);

export default About;