interface PostProps extends React.PropsWithChildren {
	title: string;
}

const Post: React.FC<PostProps> = props => (
	<div className="max-w-md md:max-w-lg m-auto">
		<div className="mx-4 pt-64">
			{props.title && <h1 className="font-serif text-5xl font-bold tracking-tight mb-4">
				{props.title}
			</h1>}
			{props.children}
		</div>
	</div>
);

/* const BasicMarkdownPost: React.FC<MarkdocData<BasicFrontmatter>> = props => {
	return (
		<Post title={props.frontmatter.title}>
			<MarkdocRenderer content={props.content} />
		</Post>
	);
}; */

export default Post;