import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="bg-citrine text-black">
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