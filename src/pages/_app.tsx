/*

_document is rendered server side
https://nextjs.org/docs/advanced-features/custom-document

*/

/* Global CSS */
import "@/styles/globals.css";
import "@/styles/variables.css";

/* App imports */
import DefaultLayout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	let Layout = Component.layout || DefaultLayout;
	// eslint-disable-next-line react/display-name
	if (Layout === "none") Layout = ({children}) => <>{children}</>;

	return <>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		<Script
			id="source-tracker"
			src="js/track-src.js"
			strategy="lazyOnload"
		/>
	</>;
}

export default MyApp;
