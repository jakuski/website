import MarkdocRenderer from "@/modules/markdown/client";
import { getStaticMarkdoc,MarkdocLoaderProps } from "@/modules/markdown/server";
import Post from "../components/Post";

const Contact: React.FC<MarkdocLoaderProps> = props => {
	return (
		<Post title="Ay-up.">
			<MarkdocRenderer markdocContent={props.markdocContent} />
		</Post>
	);
};

export const getStaticProps = getStaticMarkdoc(["base", "contact.md"]);

export default Contact;