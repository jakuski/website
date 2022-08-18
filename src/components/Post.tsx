import MarkdocRenderer from "@/modules/markdown/client";
import { MarkdocData, Frontmatter } from "@/modules/markdown/types";
import programs from "@/modules/software-links";
import { AllApps } from "@/modules/software-links/types";
import { ReactNode } from "react";
import Metadata from "./Meta";

export interface PostProps extends React.PropsWithChildren {
	title?: ReactNode;
	description?: ReactNode;
	showMetadata?: boolean;
	category?: ReactNode;
	footnotes?: ReactNode;
}

const Post: React.FC<PostProps> = props => (
	<div className="max-w-md md:max-w-lg m-auto">
		<div className="mx-4 pt-64">

			{props.category && <div id="category" className="tracking-wide font-medium mb-2">
				{props.category}
			</div>}

			{props.title && <h1 id="title" className="font-serif text-5xl font-bold tracking-tight mb-4">
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

export type BasicMarkdownPostProps = MarkdocData<Frontmatter>;

export const BasicMarkdownPost: React.FC<BasicMarkdownPostProps> = props => {
	const { meta, pageProps, project } = props.frontmatter;

	const publishedDate = meta.published && new Date(meta.published);
	const modifiedDate = meta.edited && new Date(meta.edited);

	return <>
		<Metadata
			title={meta.title}
			description={meta.description}
			published={publishedDate}
			modified={modifiedDate}
		/>
		<Post
			title={meta.displayTitle || meta.title}
			showMetadata={pageProps?.showMetadata}
			description={meta.description}
			category={project?.category}
			footnotes={<Footnotes published={publishedDate} modified={modifiedDate} softwareUsed={project?.softwareUsed} credits={project?.credits}/>}
		>
			<MarkdocRenderer content={props.content} />
		</Post>
	</>;
};

interface FootnotesProps {
	published?: Date;
	modified?: Date;
	softwareUsed?: AllApps[];
	credits?: string;
}

const Footnotes: React.FC<FootnotesProps> = (props) => {
	return <>
		{(props.softwareUsed && props.softwareUsed.length !== 0 && (
			<FootnoteSection label="Software Used">
				<ul className=" list-disc list-inside">
					{props.softwareUsed.map(id => {
						const program = programs[id];
						if (!program) return null;

						return <li key={id}>
							<a>{program.displayName}</a>
						</li>;
					})}
				</ul>

			</FootnoteSection>
		))}

		{(props.modified || props.published) && (
			<FootnoteSection label="History"><p>
				{props.published && <>
					First published on {props.published.toLocaleDateString()} {props.modified && "and "}
				</>}
				
				{props.modified && <>
					{props.published ? "l" : "L"}ast edited on {props.modified.toLocaleDateString()}
				</>}.
			</p></FootnoteSection>
		)}

		{props.credits && (
			<FootnoteSection label="Credits & Attributions">
				<pre className="whitespace-pre-wrap font-sans">{props.credits}</pre>
			</FootnoteSection>
		)}
	</>;
};

interface FootnoteSectionProps extends React.PropsWithChildren {
	label: string;
}

const FootnoteSection: React.FC<FootnoteSectionProps> = (props) => {
	return <div className="mb-2">
		<h4 className="font-bold">{props.label}</h4>
		<div>{props.children}</div>
	</div>;
};