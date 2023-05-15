import React, { PropsWithChildren } from "react";
import Link from "next/link";

import {
	Route,
	Colophon,
	Privacy,
	Legal,
	WorksIndex,
	About,
	Contact,
	CookiePolicy
} from "@/routes";
import { isDev, isProd } from "@/utils";

import SocialIcons from "./SocialIcons";
import ThemePicker from "./ThemePicker";

const TextLink: React.FC<{ route: Route }> = props => {
	return (
		<Link
			href={props.route.href}
			className="ease flex min-h-44 min-w-44 items-center font-medium opacity-70 transition-opacity duration-150 hover:opacity-100"
			prefetch={false}
		>
			{props.route.displayName}
		</Link>
	);
};

const FooterColumn: React.FC<PropsWithChildren> = props => {
	return <div className="flex w-16 flex-col">{props.children}</div>;
};

const Footer: React.FC = () => {
	return (
		<footer className="mx-4 mt-12 select-none items-center pb-6 font-sans text-sm print:pb-2 md:mx-10">
			<hr className="mb-4 opacity-30" />
			<div className="flex flex-col-reverse justify-between gap-2 sm:flex-row">
				<div>
					<div className="mb-6 flex flex-row gap-4 print:hidden">
						<FooterColumn>
							<TextLink route={WorksIndex} />
							<TextLink route={Privacy} />
						</FooterColumn>

						<FooterColumn>
							<TextLink route={About} />
							<TextLink route={Legal} />
						</FooterColumn>

						<FooterColumn>
							<TextLink route={Contact} />
							{/* <TextLink route={CookiePolicy}/> */}
						</FooterColumn>

						<FooterColumn>
							<TextLink route={Colophon} />
						</FooterColumn>
					</div>

					<div className="mb-6 mt-4 flex flex-col gap-10 opacity-70 print:mb-0">
						<ThemePicker />
						<div>
							Copyright © {new Date().getFullYear()} Jakub Staniszewski.{" "}
							<span className="block sm:inline">All rights reserved.</span>
						</div>
					</div>
				</div>
				<SocialIcons />
			</div>

			{isDev && (
				<div className=" mx-auto max-w-2xl bg-brand px-4 py-2 text-ui-800">
					This is a development version of my website which is{" "}
					<strong>not intended</strong> for public viewing. If you believe you
					are here by mistake, click{" "}
					<a
						className="min-h-44 min-w-44 underline"
						href="https://jakub.studio"
					>
						here
					</a>{" "}
					to go to my public website.
				</div>
			)}
		</footer>
	);
};

export default Footer;
