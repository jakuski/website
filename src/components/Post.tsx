import { ReactNode } from "react";

export interface PostProps extends React.PropsWithChildren {
	title?: ReactNode;
	description?: ReactNode;
	showMetadata?: boolean;
	category?: ReactNode;
	footnotes?: ReactNode;
}

const Post: React.FC<PostProps> = props => (
	<div className="max-w-md md:max-w-xl m-auto print:max-w-full">
		<div className="mx-4 pt-64 print:pt-12">

			{props.category && <div id="category" className="font-medium mb-2">
				{props.category}
			</div>}

			{props.title && <h1 id="title" className="font-serif text-5xl leading-tight font-bold tracking-tight mb-4">
				{props.title}
			</h1>}

			{props.showMetadata && <>
				<div id="description" className="font-medium mb-4">{props.description}</div>
				<hr className="my-4" />
			</>
			}

			{props.children}

			{props.footnotes && <div id="footnotes" className="text-sm">
				<hr className="my-4" />
				{props.footnotes}
			</div>}
		</div>
	</div>
);

export default Post;