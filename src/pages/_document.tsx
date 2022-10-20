import { githubRepo, socialHandles, websiteName } from "@/config";
import { isProd } from "@/utils";
import Document, { Html, Head, Main, NextScript } from "next/document";

// Disable search engine indexing of development and Vercel Preview variants of the website.
const robotsMetaContent = isProd ? "index,follow" : "noindex,nofollow";

class SiteDocument extends Document {
	render(): JSX.Element {
		return (
			<Html
				lang="en"
				data-github-repo={githubRepo}
			>
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/hml1ejp.css"
					/>
					<meta name="format-detection" content="telephone=no" />
					<link rel="author" href="/about" />
					<meta name="robots" content={robotsMetaContent} />
					<meta name="rating" content="General" />
					<meta name="renderer" content="webkit" />
					<meta name="twitter:site" content={"@" + socialHandles.twitter} />
					<meta name="twitter:creator" content={"@" + socialHandles.twitter} />
					<link rel="index" href="/" />
				</Head>
				<body className="bg-background text-foreground selection:bg-brand dark:selection:text-background-dark dark:bg-background-dark dark:text-foreground-dark">
					<noscript>
						For full functionality of this site, it is necessary to enable JavaScript.
						Here are the <a href="https://www.enable-javascript.com/">instructions on how to enable JavaScript in your web browser</a>.
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default SiteDocument;