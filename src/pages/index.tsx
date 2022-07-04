
import Metadata from "@/components/Meta";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import Footer from "../components/Footer";
import { websiteName } from "../config";

const Link = props => {
	return <NextLink href={props.href}>
		<a className="text-2xl font-bold min-h-44 flex items-center hover:underline">{props.children}</a>
	</NextLink>;
};

export default function Home() {
	return (
		<>
			<Metadata title={websiteName} omitTitleSuffix description="Jakub is a multidisciplinary graphic designer and developer specialising in UI/UX design. " />
			<main className="flex items-center justify-center h-full gap-12 flex-col sm:flex-row mx-8 font-serif">
				<div>
					<Image src="/logo.svg" alt="Logo" height={128} width={128} />
				</div>
				<div className="flex gap-4 flex-col">
					<h1 className="text-5xl font-bold tracking-tight">{websiteName}</h1>
					<div className="flex justify-between">
						<Link href="/works">works</Link>
						<Link href="/about">about</Link>
						<Link href="/contact">contact</Link>
					</div>
					<div className="font-sans max-w-sm">
						Hey friend!<br/>
						Welcome to my website, it is still a WIP as I have not had much time to work on it during the current academic year. So be warned, You may see a few loose nuts and bolts but I hope to get it finished Summer 2022.
						<br/><br/> In the mean time, I am looking for new oppurtunities.
						<NextLink href="/contact">
							<a className="ml-1 font-bold underline">Let&apos;s chat.</a>
						</NextLink>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

Home.layout = "none";