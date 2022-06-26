import { githubRepo, socialHandles, websiteName } from "@/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

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
					<meta name="robots" content="index,follow" />
					<meta name="googlebot" content="index,follow" />
					<meta name="rating" content="General" />
					<meta name="renderer" content="webkit" />
					<meta name="twitter:site" content={"@" + socialHandles.twitter} />
					<meta name="twitter:creator" content={"@" + socialHandles.twitter} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default SiteDocument;