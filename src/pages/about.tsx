import Metadata from "@/components/Meta";
import MarkdocRenderer from "@/modules/markdown/client";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { BasicFrontmatter, MarkdocData } from "@/modules/markdown/types";
import Post from "../components/Post";

const About: React.FC<MarkdocData<BasicFrontmatter>> = props => {
	return (
		<Post title={props.frontmatter.title}>
			<Metadata title={props.frontmatter.titleClean || props.frontmatter.title} description={props.frontmatter.shortDesc as string} />
			<MarkdocRenderer content={props.content} />
		</Post>
	);
};

export const getStaticProps = getStaticMarkdoc(["base", "about.md"]);

export default About;