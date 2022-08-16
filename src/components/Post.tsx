import MarkdocRenderer from "@/modules/markdown/client";
import { MarkdocData, Frontmatter } from "@/modules/markdown/types";
import Metadata from "./Meta";

interface PostProps extends React.PropsWithChildren {
	title?: string;
}

const Post: React.FC<PostProps> = props => (
	<div className="max-w-md md:max-w-lg m-auto">
		<div className="mx-4 pt-64">
			{props.title && <h1 className="font-serif text-5xl font-bold tracking-tight mb-4">
				{props.title}
			</h1>}
			01/02/22
			<hr className="my-4" />
			{props.children}
		</div>
	</div>
);

export const BasicMarkdownPost: React.FC<MarkdocData<Frontmatter>> = props => {
	const { meta } = props.frontmatter;

	return (
		<Post
			title={meta.displayTitle}
		>
			<Metadata
				title={meta.title}
				description={meta.description}
				published={meta.published && new Date(meta.published)}
				modified={meta.edited && new Date(meta.edited)}
			/>
			<MarkdocRenderer content={props.content} />
		</Post>
	);
};

export default Post;