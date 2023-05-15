import { ReactNode } from "react";

export interface PostProps extends React.PropsWithChildren {
	title?: ReactNode;
	description?: ReactNode;
	showMetadata?: boolean;
	category?: ReactNode;
	footnotes?: ReactNode;
}

const Post: React.FC<PostProps> = props => (
	<div className="m-auto max-w-md print:max-w-full md:max-w-xl">
		<div className="mx-4 pt-64 print:pt-12">
			{props.category && (
				<div id="category" className="mb-2 font-medium">
					{props.category}
				</div>
			)}

			{props.title && (
				<h1
					id="title"
					className="mb-4 font-serif text-5xl font-bold leading-tight tracking-tight"
				>
					{props.title}
				</h1>
			)}

			{props.showMetadata && (
				<>
					<div id="description" className="mb-4 font-medium">
						{props.description}
					</div>
					<hr className="my-4" />
				</>
			)}

			{props.children}

			{props.footnotes && (
				<div id="footnotes" className="text-sm">
					<hr className="my-4" />
					{props.footnotes}
				</div>
			)}
		</div>
	</div>
);

export default Post;
