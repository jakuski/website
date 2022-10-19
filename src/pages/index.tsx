import Metadata from "@/components/Meta";
import Image from "next/image";
import NextLink from "next/link";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { websiteName } from "../config";

const Link: React.FC<PropsWithChildren<{
	href: string;
}>> = props => {
	return <NextLink href={props.href}>
		<a className="text-2xl font-bold min-h-44 flex items-center hover:underline">{props.children}</a>
	</NextLink>;
};

export default function Home() {
	return (
		<>
			<Metadata
				title={websiteName}
				omitTitleSuffix
				description="Jakub is a multi-disciplinary graphic designer and developer specialising in UI/UX design. "
				image="g/logo"
			/>
			<main className="flex items-center justify-center h-full gap-12 flex-col sm:flex-row mx-8 font-serif">
				<div>
					<Image src="/logo.svg" alt="Logo" height={128} width={128} />
				</div>
				<div className="flex gap-4 flex-col">
					<div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-lg">
						<h1 className="inline">{websiteName}</h1> is a UI/UX designer and developer based in London.
					</div>
					<div className="text-xl font-sans">Currently available for work. <span className="font-bold block sm:inline">Get in touch.</span></div>
					<div className="flex justify-between">
						<Link href="/works">works</Link><span className="sr-only">{" "}</span>
						<Link href="/about">about</Link><span className="sr-only">{" "}</span>
						<Link href="/contact">contact</Link>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

Home.layout = "none";