/* Global CSS */
import "@/styles/tailwind.css";
import "@/styles/globals.css";
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
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
/* import StorageConsentBanner from "@/components/StorageConsent/Banner"; */

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

		{/* https://github.com/pacocoursey/next-themes#with-tailwind */}
		<ThemeProvider attribute="class">
			<Layout>
				<Component {...pageProps} />
			</Layout>
			{/* <StorageConsentBanner /> */}
		</ThemeProvider>

		<ScriptLoader />
		<Analytics />
		<Script
			id="source-tracker"
			src="/js/track-src.js"
			strategy="lazyOnload"
		/>
	</ScriptContextProvider>;
};

export default App;

