import Head from "next/head";
import { websiteName, defaultThemeColour } from "@/config";

interface MetaProps {
	/* Basic Meta Stuff */
	title: string;
	description?: string;

	/* Misc stuff */
	themeColour?: string;

	/* Other small tweaks */
	omitTitleSuffix?: true;
}

const Metadata: React.FC<MetaProps> = props => {
	return <Head>
		<title key={MetaKeys.title}>{createTitleString(props.title)}</title>
		<meta name="og:title" key={MetaKeys.openGraphTitle} content={props.title} />
		<meta name="twitter:title" key={MetaKeys.twitterTitle} content={props.title} />
	
		<meta name="description" key={MetaKeys.description} content={props.description} />
		<meta name="og:description" key={MetaKeys.openGraphDescription} content={props.description} />
		<meta name="twitter:description" key={MetaKeys.twitterDescription} content={props.description} />
	
		<meta name="theme-color" key={MetaKeys.themeColour} content={props.themeColour || defaultThemeColour} />
	</Head>;
};

export const createTitleString = (pageTitle: string, omitSuffix?: boolean): string => {
	return pageTitle + (omitSuffix ? "" : ` - ${websiteName}`);
};

// @TODO Change to enum?
export const MetaKeys = {
	title: "base-title",
	description: "description",
	themeColour: "themeColour",

	openGraphTitle: "og:title",
	openGraphDescription: "og:description",

	twitterTitle: "twitter:title",
	twitterDescription: "twitter:description",
};

export default Metadata;