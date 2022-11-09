import Metadata from "@/components/Meta";
import NextLink from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { websiteName } from "../config";
import LogoIcon from "@/components/icons/Logo";
import c from "clsx";
import { useRouter } from "next/router";

const Link: React.FC<PropsWithChildren<{
	href: string;
}>> = props => {
	return <NextLink href={props.href}>
		<a className="inline text-brand font-bold relative after:absolute after:h-[2px] after:w-full after:bg-brand after:bottom-0 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:opacity-50">{props.children}</a>
	</NextLink>;
};

const LoadingCover: React.FC<PropsWithChildren<{}>> = props => {
	//const router = useRouter();

	// If ?c=0 is present, don't show the loading cover.
	const animationInitialState = /* router.query.c === "0" */ false;

	//
	// The above has been commented out as it's not working as intended.
	// There is a nasty flash on page load when the animation is disabled.
	//
	// I think I will opt for a cookie based solution to remember the banner being shown.
	// and not replay it on subsequent visits.
	//

	const [reveal, setReveal] = useState(animationInitialState);
	const [showLogo, setShowLogo] = useState(animationInitialState);

	useEffect(() => {
		// Size the logo up
		setShowLogo(true);

		setTimeout(() => {
			// Reveal web page
			setReveal(true);
		}, 1000);
	}, []);
	
	const containerClassName = c("fixed left-0 top-0 h-full w-full flex justify-center items-center",
		"bg-brand text-stone-900 shadow-md",
		"translate-y-0 transition-transform duration-300",
		{ ["-translate-y-full"]: reveal }
	);

	const logoContainerClassName = c("scale-0 transition-transform duration-200", {
		["scale-100"]: showLogo
	});
	
	return <div className={containerClassName}>
		<div className={logoContainerClassName}>
			<LogoIcon size={128} />
		</div>
	</div>;
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
						<div className="text-xl font-sans mb-6">Designing and engineering interfaces for humans.<br/> See <Link href="/works">my work</Link>, find out more <Link href="/about">about me</Link> or <Link href="/contact">get in touch</Link>.</div>

						<div className="text-xl font-sans">Currently available for freelance and full-time work/roles.</div>
					</div>
				</div>
			</main>
			<Footer />
			<LoadingCover />
		</>
	);
}

Home.layout = "none";