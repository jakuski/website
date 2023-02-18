import Head from "next/head";
import { websiteName, defaultThemeColour } from "@/config";
import { About as AboutRoute } from "@/routes";
import allImagesObject from "@/modules/images";

interface MetaProps {
	/* Basic Meta Stuff */
	title: string;
	description?: string;

	/* Extra Meta */
	author?: string;

	/* Dates */
	published?: Date;
	modified?: Date;

	/* Misc stuff */
	themeColour?: string;

	/* Other small tweaks */
	omitTitleSuffix?: true;

	image?: string;
}

export const createHtmlTitleString = (
	pageTitle: string,
	omitSuffix?: boolean
): string => {
	return pageTitle + (omitSuffix ? "" : ` - ${websiteName}`);
};

const Metadata: React.FC<MetaProps> = props => {
	return (
		<Head>
			<title key={MetaKeys.htmlTitle}>
				{createHtmlTitleString(props.title, props.omitTitleSuffix)}
			</title>

			<meta
				property={MetaKeys.openGraphTitle}
				key={MetaKeys.openGraphTitle}
				content={props.title}
			/>
			<meta
				name={MetaKeys.twitterTitle}
				key={MetaKeys.twitterTitle}
				content={props.title}
			/>

			{props.description && (
				<>
					<meta
						name={MetaKeys.description}
						key={MetaKeys.description}
						content={props.description}
					/>
					<meta
						property={MetaKeys.openGraphDescription}
						key={MetaKeys.openGraphDescription}
						content={props.description}
					/>
					<meta
						name={MetaKeys.twitterDescription}
						key={MetaKeys.twitterDescription}
						content={props.description}
					/>
				</>
			)}

			{props.author && (
				<>
					<meta
						name={MetaKeys.author}
						key={MetaKeys.author}
						content={props.author}
					/>
					<meta
						property={MetaKeys.articleAuthor}
						key={MetaKeys.articleAuthor}
						content={AboutRoute.hrefWithHttpsDomain}
					/>
				</>
			)}

			{props.published && props.published instanceof Date && (
				<>
					<meta
						property={MetaKeys.articlePublishedTime}
						key={MetaKeys.articlePublishedTime}
						content={props.published.toJSON()}
					/>
				</>
			)}

			{props.modified && props.modified instanceof Date && (
				<>
					<meta
						property={MetaKeys.articleModifiedTime}
						key={MetaKeys.articleModifiedTime}
						content={props.modified.toJSON()}
					/>
				</>
			)}

			{props.image &&
				typeof props.image === "string" &&
				allImagesObject[props.image] && (
					<>
						<meta
							property={MetaKeys.openGraphImage}
							key={MetaKeys.openGraphImage}
							content={allImagesObject[props.image].src.src}
						/>
						<meta
							name={MetaKeys.twitterImage}
							key={MetaKeys.twitterImage}
							content={allImagesObject[props.image].src.src}
						/>
						<meta
							property={MetaKeys.openGraphImageAlt}
							key={MetaKeys.openGraphImageAlt}
							content={allImagesObject[props.image].alt}
						/>
						<meta
							name={MetaKeys.twitterImageAlt}
							key={MetaKeys.twitterImageAlt}
							content={allImagesObject[props.image].alt}
						/>
					</>
				)}

			<meta
				name={MetaKeys.themeColour}
				key={MetaKeys.themeColour}
				content={props.themeColour || defaultThemeColour}
			/>
		</Head>
	);
};

// @TODO Change to enum?
export const MetaKeys = {
	htmlTitle: "title",
	description: "description",
	themeColour: "theme-color",

	openGraphTitle: "og:title",
	openGraphDescription: "og:description",
	openGraphImage: "og:image",
	openGraphImageAlt: "og:image:alt",

	twitterTitle: "twitter:title",
	twitterDescription: "twitter:description",
	twitterImage: "twitter:image",
	twitterImageAlt: "twitter:image:alt",

	author: "author",
	articleAuthor: "article:author",

	articlePublishedTime: "article:published_time",
	articleModifiedTime: "article:modified_time"
};

export default Metadata;
