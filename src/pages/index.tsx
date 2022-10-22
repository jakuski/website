import Metadata from "@/components/Meta";
import Image from "next/image";
import NextLink from "next/link";
import { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import { websiteName } from "../config";
import LogoIcon from "@/components/icons/Logo";

const Link: React.FC<PropsWithChildren<{
	href: string;
}>> = props => {
	return <NextLink href={props.href}>
		<a className="inline text-brand font-bold relative after:absolute after:h-[2px] after:w-full after:bg-brand after:bottom-0 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:opacity-50">{props.children}</a>
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
			<main className="flex items-center justify-center h-full gap-14 flex-col sm:flex-row mx-8 font-serif">
				<div className=" before:opacity-20 after:opacity-20">
					<LogoIcon size={128} />
				</div>
				<div className="flex gap-5 flex-col">
					<div className="max-w-lg">
						<div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"><h1 className="inline">{websiteName}</h1> is a UI/UX designer and developer based in London.</div>
						<div className="text-xl font-sans mb-6">Designing and engineering interfaces for humans. See <Link href="/works">my work</Link>, find out more <Link href="/about">about me</Link> or <Link href="/contact">get in touch</Link>.</div>

						<div className="text-xl font-sans">Currently available for freelance and full-time work/roles.</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

Home.layout = "none";