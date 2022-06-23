import Document, { Html, Head, Main, NextScript } from "next/document";

class SiteDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en" className="bg-brand text-black">
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/hml1ejp.css"
					/>
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