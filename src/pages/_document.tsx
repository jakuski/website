import { githubRepo, isPreview, socialHandles, websiteName } from "@/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

const robotsMeta = isPreview ? "noindex,nofollow" : "index,follow";

class SiteDocument extends Document {
	render(): JSX.Element {
		return (
			<Html
				lang="en"
				className="bg-brand text-black"
				data-like-what-you-see="I'm available for hire, check out /contact for further details."
				data-github-repo={githubRepo}
			>
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/hml1ejp.css"
					/>
					<meta name="format-detection" content="telephone=no" />
					<link rel="author" href="/about" />
					<meta name="robots" content={robotsMeta} />
					<meta name="rating" content="General" />
					<meta name="renderer" content="webkit" />
					<meta name="twitter:site" content={"@" + socialHandles.twitter} />
					<meta name="twitter:creator" content={"@" + socialHandles.twitter} />
					<link rel="index" href="/" />
				</Head>
				<body>
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