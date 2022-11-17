import { Frontmatter, MarkdocData } from "@/modules/markdown/types";
import Post from "../components/Post";

const NotFoundPage: React.FC<MarkdocData<Frontmatter>> = props => {
	return (
		<Post title="Error 404">
			The page you are looking has not been found.
		</Post>
	);
};

export default NotFoundPage;