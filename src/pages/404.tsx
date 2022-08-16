import MarkdocRenderer from "@/modules/markdown/client";
import { getStaticMarkdoc } from "@/modules/markdown/server";
import { BasicFrontmatter, Frontmatter, MarkdocData } from "@/modules/markdown/types";
import Post from "../components/Post";

const NotFoundPage: React.FC<MarkdocData<Frontmatter>> = props => {
	return (
		<Post title={props.frontmatter.meta.title}>
			<MarkdocRenderer content={props.content} />
		</Post>
	);
};

export const getStaticProps = getStaticMarkdoc(["base", "404.md"]);

export default NotFoundPage;