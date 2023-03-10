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

import { Inter, Libre_Baskerville } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libreBaskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-serif"
});

// This needs to be exported as it's shared with the Gallery component.
// The Gallery component is appended to the end of document.body, which is
// outside of the scope of the <div id="fonts-root"> element.
export const fontClassNames = [
	inter.variable,
	libreBaskerville.variable,
	"font-sans"
].join(" ");

const fontsRootClassName = [fontClassNames, "h-full", "w-full"].join(" ");

const App: React.FC<{
	Component: React.FC & { layout: string };
	pageProps: Record<string, unknown>;
}> = ({ Component, pageProps }) => {
	let Layout: string | React.FC<React.PropsWithChildren> =
		Component.layout || DefaultLayout;

	if (Layout === "none") {
		Layout = function NoLayout({ children }) {
			return <>{children}</>;
		};
	}

	return (
		<ScriptContextProvider>
			<SkipToMainButton />

			<If condition={isDev}>
				<DeveloperOnly />
			</If>

			{/* https://github.com/pacocoursey/next-themes#with-tailwind */}
			<ThemeProvider attribute="class">
				<div className={fontsRootClassName} id="fonts-root">
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</div>
				{/* <StorageConsentBanner /> */}
			</ThemeProvider>

			<ScriptLoader />
			<Analytics />
			<Script defer async src="https://scripts.withcabin.com/hello.js" />
		</ScriptContextProvider>
	);
};

export default App;
