import Metadata from "@/components/Meta";
import MarkdocRenderer from "@/modules/markdown/client";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { Frontmatter, MarkdocData } from "@/modules/markdown/types";
import { BasicMarkdownPost } from "../components/Post";

/* const About: React.FC<MarkdocData<Frontmatter>> = props => {
	return (
		<Post title={props.frontmatter.meta.displayTitle}>
			<Metadata title={props.frontmatter.meta.title} description={props.frontmatter.meta.description} />
			<MarkdocRenderer content={props.content} />
		</Post>
	);
}; */



export const getStaticProps = getStaticMarkdoc(["base", "about.md"]);

export default BasicMarkdownPost;