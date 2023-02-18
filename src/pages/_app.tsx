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

import { Inter, Libre_Baskerville } from "@next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libreBaskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-serif"
});

const fontProviderClassName = [
	inter.variable,
	libreBaskerville.variable,
	"h-full",
	"w-full",
	"font-sans"
].join(" ");

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
				<div className={fontProviderClassName}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</div>
				{/* <StorageConsentBanner /> */}
			</ThemeProvider>

			<ScriptLoader />
			<Analytics />
		</ScriptContextProvider>
	);
};

export default App;
