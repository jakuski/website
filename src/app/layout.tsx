import { Inter, Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import c from "clsx";

import NoScript from "@/components/misc/NoScript";
import SkipToMainButton from "@/components/misc/SkipToMainContent";
import { defaultThemeColour } from "@/config";
import { websiteName } from "@/config";
import { isProd } from "@/utils";

import AppProviders from "./providers";
import "@/styles/tailwind.css";
import "@/styles/globals.css";

/* const fontText = Inter({ subsets: ["latin"], variable: "--font-sans" }); */

// Switzer, from https://www.fontshare.com/fonts/switzer
const fontText = localFont({
	src: [
		{
			path: "../styles/fonts/sans/Switzer-Variable.ttf",
			style: "normal"
		},
		{
			path: "../styles/fonts/sans/Switzer-VariableItalic.ttf",
			style: "italic"
		}
	],
	variable: "--font-sans"
});

// Libre Baskerville, from https://fonts.google.com/specimen/Libre+Baskerville
const fontDisplay = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: ["normal", "italic"],
	variable: "--font-serif"
});

const fontSerifCond = localFont({
	src: [
		{
			path: "../styles/fonts/serif-cond/LibreCaslonCondensed[wght].woff2",
			style: "normal"
		},
		{
			path: "../styles/fonts/serif-cond/LibreCaslonCondensed-Italic[wght].woff2",
			style: "italic"
		}
	],
	variable: "--font-serif-cond"
});

const bodyClassName = c(
	// Light
	"bg-ui-100 text-ui-700",
	// Dark
	"dark:bg-ui-900 dark:text-ui-300",
	// Selections
	"selection:bg-brand dark:selection:text-ui-800",
	// Misc
	"antialiased",
	fontText.variable, // The font#variable property is a CSS class that defines the CSS variables (e.g. --font-sans) for the typefaces requested above.
	fontDisplay.variable,
	fontSerifCond.variable,
	"font-sans" // font-sans is applied here to act as the default typeface. This effectively applies font-family: var(--font-sans)
);

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* suppressHydrationWarning is required by next-themes. */}
			<body className={bodyClassName}>
				<NoScript />
				<AppProviders>
					<SkipToMainButton />
					{children}
				</AppProviders>
				<Script defer async src="https://scripts.withcabin.com/hello.js" />
			</body>
		</html>
	);
}

const titleSeparator = "\u2013"; // en dash (–), written as it's unicode character to avoid VSCode complaining about syntax issues
export const metadata = {
	title: {
		default: websiteName,
		template: `%s ${titleSeparator} ${websiteName}`
	},
	description: "Welcome to Next.js",
	themeColor: defaultThemeColour,
	robots: {
		index: isProd,
		follow: isProd
	},
	formatDetection: {
		telephone: false
	}
};
