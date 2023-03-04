import MarkdocRenderer from "@/modules/markdown/client";
import { MarkdocData, Frontmatter } from "@/modules/markdown/types";
import programs from "@/modules/mappings/software-links";
import { AllApps } from "@/modules/mappings/software-links/types";
import Metadata from "./Meta";
import { websiteLocale, websiteName } from "@/config";
import Post from "./Post";

export interface MarkdownPostProps extends MarkdocData<Frontmatter> {
	project?: boolean;
};

export const MarkdownPost: React.FC<MarkdownPostProps> = props => {
	const { meta, pageProps, project } = props.frontmatter;

	const publishedDate = meta.published && new Date(meta.published);
	const modifiedDate = meta.edited && new Date(meta.edited);

	return (
		<>
			<Metadata
				title={meta.title}
				description={meta.description + (props.project ? `\nA project by ${websiteName}.`  : "")}
				published={publishedDate}
				author={websiteName}
				modified={modifiedDate}
				image={meta.image}
			/>
			<Post
				title={meta.displayTitle || meta.title}
				showMetadata={pageProps?.showMetadata}
				description={meta.description}
				category={project?.category?.join(", ")}
				footnotes={
					(publishedDate ||
						modifiedDate ||
						project?.softwareUsed ||
						project?.credits) && (
						<Footnotes
							published={publishedDate}
							modified={modifiedDate}
							softwareUsed={project?.softwareUsed}
							credits={project?.credits}
						/>
					)
				}
			>
				<MarkdocRenderer content={props.content} />
			</Post>
		</>
	);
};

interface FootnotesProps {
	published?: Date;
	modified?: Date;
	softwareUsed?: AllApps[];
	credits?: string;
}

const Footnotes: React.FC<FootnotesProps> = props => {
	return (
		<>
			{props.softwareUsed && props.softwareUsed.length !== 0 && (
				<FootnoteSection label="Software Used">
					<ul className="list-disc list-inside">
						{props.softwareUsed.map(id => {
							const program = programs[id];
							if (!program) return null;

							return (
								<li key={id}>
									<a>{program.displayName}</a>
								</li>
							);
						})}
					</ul>
				</FootnoteSection>
			)}

			{(props.modified || props.published) && (
				<FootnoteSection label="History">
					<p>
						{props.published && (
							<>
								First published on{" "}
								{props.published.toLocaleDateString(websiteLocale)}
								{props.modified ? " and " : "."}
							</>
						)}

						{props.modified && (
							<>
								{props.published ? "l" : "L"}ast edited on{" "}
								{props.modified.toLocaleDateString(websiteLocale)}.
							</>
						)}
					</p>
				</FootnoteSection>
			)}

			{props.credits && (
				<FootnoteSection label="Credits & Attributions">
					<pre className="whitespace-pre-wrap font-sans">{props.credits}</pre>
				</FootnoteSection>
			)}
		</>
	);
};

interface FootnoteSectionProps extends React.PropsWithChildren {
	label: string;
}

const FootnoteSection: React.FC<FootnoteSectionProps> = props => {
	return (
		<div className="mb-4">
			<h4 className="font-bold mb-1">{props.label}</h4>
			<div>{props.children}</div>
		</div>
	);
};
