import Head from "next/head";
import { websiteName, defaultThemeColour } from "@/config";
import { About as AboutRoute } from "@/routes";
import If from "./If";

interface MetaProps {
	/* Basic Meta Stuff */
	title: string;
	description: string;

	/* Extra Meta */
	author?: string;

	/* Dates */
	published?: Date;
	modified?: Date;

	/* Misc stuff */
	themeColour?: string;

	/* Other small tweaks */
	omitTitleSuffix?: true;
}

export const createHtmlTitleString = (pageTitle: string, omitSuffix?: boolean): string => {
	return pageTitle + (omitSuffix ? "" : ` - ${websiteName}`);
};

const Metadata: React.FC<MetaProps> = props => {
	console.log(props);
	return <Head>
		<title key={MetaKeys.htmlTitle}>{createHtmlTitleString(props.title, props.omitTitleSuffix)}</title>

		<meta name={MetaKeys.openGraphTitle} key={MetaKeys.openGraphTitle} content={props.title} />
		<meta name={MetaKeys.twitterTitle} key={MetaKeys.twitterTitle} content={props.title} />

		<meta name={MetaKeys.description} key={MetaKeys.description} content={props.description} />
		<meta name={MetaKeys.openGraphDescription} key={MetaKeys.openGraphDescription} content={props.description} />
		<meta name={MetaKeys.twitterDescription} key={MetaKeys.twitterDescription} content={props.description} />

		{props.author && <>
			<meta name={MetaKeys.author} key={MetaKeys.author} content={props.author} />
			<meta property={MetaKeys.articleAuthor} key={MetaKeys.articleAuthor} content={AboutRoute.hrefWithHttpsDomain} />
		</>}

		{props.published && props.published instanceof Date && <>
			<meta property={MetaKeys.articlePublishedTime} key={MetaKeys.articlePublishedTime} content={props.published.toJSON()} />
		</>}

		{props.modified && props.modified instanceof Date && <>
			<meta property={MetaKeys.articleModifiedTime} key={MetaKeys.articleModifiedTime} content={props.modified.toJSON()} />
		</>}
	
		<meta name={MetaKeys.themeColour} key={MetaKeys.themeColour} content={props.themeColour || defaultThemeColour} />
	</Head>;
};

// @TODO Change to enum?
export const MetaKeys = {
	htmlTitle: "title",
	description: "description",
	themeColour: "theme-colour",

	openGraphTitle: "og:title",
	openGraphDescription: "og:description",

	twitterTitle: "twitter:title",
	twitterDescription: "twitter:description",

	author: "author",
	articleAuthor: "article:author",

	articlePublishedTime: "article:published_time",
	articleModifiedTime: "article:modified_time"
};

export default Metadata;