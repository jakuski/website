import Head from "next/head";
import DefaultLayout from "../components/layout";
import "../styles/globals.css";
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
