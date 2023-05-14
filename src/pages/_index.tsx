import { PropsWithChildren, useEffect, useState } from "react";
import NextLink from "next/link";

import c from "clsx";

import Metadata from "@/components/Meta";
import LogoIcon from "@/components/icons/Logo";

import Footer from "../components/Footer";
import { websiteName } from "../config";

const linkClassName = c(
	"inline text-brand font-bold relative",
	"after:absolute after:h-[2px] after:w-full after:bg-brand after:opacity-50 after:bottom-0 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right",
	"after:hover:origin-left"
);

const Link: React.FC<
	PropsWithChildren<{
		href: string;
	}>
> = props => {
	return (
		<NextLink href={props.href} className={linkClassName}>
			{props.children}
		</NextLink>
	);
};

const LoadingCover: React.FC<PropsWithChildren<{}>> = props => {
	//const router = useRouter();

	// If ?c=0 is present, don't show the loading cover.
	const hideBannerAnimation = /* router.query.c === "0" */ false;

	//
	// The above has been commented out as it's not working as intended.
	// There is a nasty flash on page load when the animation is disabled.
	//
	// I think I will opt for a cookie based solution to remember the banner being shown.
	// and not replay it on subsequent visits.
	//

	const [reveal, setReveal] = useState(hideBannerAnimation);
	const [showLogo, setShowLogo] = useState(hideBannerAnimation);

	useEffect(() => {
		// Size the logo up
		setShowLogo(true);

		const timeout = setTimeout(
			setReveal => {
				// Reveal web page
				setReveal(true);
			},
			1000,
			setReveal
		);

		return () => clearTimeout(timeout);
	}, []);

	const containerClassName = c(
		"fixed left-0 top-0 h-full w-full flex justify-center items-center",
		"bg-brand text-ui-900 shadow-md",
		" transition-transform duration-300",
		{ ["translate-y-0"]: !reveal, ["-translate-y-full"]: reveal }
	);

	const logoContainerClassName = c(
		"scale-0 transition-transform duration-200",
		{
			["scale-100"]: showLogo
		}
	);

	return (
		<div className={containerClassName}>
			<div className={logoContainerClassName}>
				<LogoIcon size={128} />
			</div>
		</div>
	);
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
			<main className="mx-8 flex h-full flex-col items-center justify-center gap-14 font-sans sm:flex-row">
				<div>
					<LogoIcon size={128} />
				</div>
				<div className="flex flex-col gap-5">
					<div className="max-w-lg">
						<div className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight md:leading-snug lg:text-5xl lg:leading-[1.25]">
							<h1 className="inline lg:block">{websiteName}</h1> is&nbsp;a
							digital designer and developer based in&nbsp;London.
						</div>
						<div className="mb-6 text-xl tracking-tight">
							Designing and engineering interfaces for humans.
							<br />
							See <Link href="/works">my work</Link>, find out more{" "}
							<Link href="/about">about me</Link> or{" "}
							<Link href="/contact">get in touch</Link>.
						</div>

						<div className="text-xl tracking-tight">
							Seeking digital product design/development roles.
						</div>
					</div>
				</div>
			</main>
			<Footer />
			<LoadingCover />
		</>
	);
}

Home.layout = "none";
