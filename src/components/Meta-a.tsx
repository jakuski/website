import Head from "next/head";
import { websiteName } from "@/config";

interface MetaProps {
	title: string;
	omitTitleSuffix?: true;
}

const Metadata: React.FC<MetaProps> = props => {
	return <Head>
		<title key={MetaKeys.title}>{createTitleString(props.title)}</title>
	</Head>;
};

export const createTitleString = (pageTitle: string, omitSuffix?: boolean): string => {
	return pageTitle + (omitSuffix ? "" : ` - ${websiteName}`);
};

export const MetaKeys = {
	title: "base-title"
};

export default Metadata;