/* Global CSS */
import "@/styles/tailwind.css";
import "@/styles/globals.css";
import "@/styles/variables.css";
import "@/styles/lightgallery.css";

/* App imports */
import DefaultLayout from "../components/Layout";
import Script from "next/script";
import { DeveloperOnly } from "@/components/Developer";
import If from "@/components/If";
import { isDev } from "@/utils";
import React from "react";
import { ScriptContextProvider, ScriptLoader } from "@/modules/script-handler";
import SkipToMainButton from "@/components/SkipToMainContent";

const App: React.FC<{
	Component: (React.FC & { layout: string})
	pageProps: Record<string, unknown>
}> = ({ Component, pageProps }) => {
	let Layout: string | React.FC<React.PropsWithChildren> = Component.layout || DefaultLayout;
	// eslint-disable-next-line react/display-name
	if (Layout === "none") Layout = ({children}) => <>{children}</>;

	return <ScriptContextProvider>
		<SkipToMainButton />
		<If condition={isDev}>
			<DeveloperOnly />
		</If>
		
		<Layout>
			<Component {...pageProps} />
		</Layout>

		<ScriptLoader />
		<Script
			id="source-tracker"
			src="/js/track-src.js"
			strategy="lazyOnload"
		/>
	</ScriptContextProvider>;
};

export default App;

