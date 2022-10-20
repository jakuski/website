import Link from "next/link";
import React from "react";

import {
	Route,
	Colophon,
	Privacy,
	Legal
} from "@/routes";

import { isProd } from "@/utils";
import SocialIcons from "./SocialIcons";
import ThemePicker from "./ThemePicker";

const TextLink: React.FC<{ route: Route }> = props => {
	return <Link href={props.route.href}>
		<a className="min-h-44 min-w-44 flex items-center opacity-70 hover:opacity-100 hover:underline ease transition-opacity duration-150">
			{props.route.displayName}
		</a>
	</Link>;
};

const Footer: React.FC = () => {
	return (
		<footer className="font-sans text-sm flex flex-col items-center mt-8 pb-6 print:pb-2 select-none">

			<SocialIcons />

			<div className="flex gap-2 print:hidden">
				<TextLink route={Colophon} />
				<TextLink route={Privacy} />
				<TextLink route={Legal} />
			</div>

			<div className="opacity-70 mb-6 mt-2 print:mb-0 flex flex-col items-center gap-1">
				<ThemePicker />
				
				Copyright © {new Date().getFullYear()} Jakub Staniszewski
			</div>

			{(!isProd) && <div className="font-bold px-4 py-2 bg-foreground text-background tracking-wide">
				This is a development version of my website which is not intended for public viewing. <br />If you believe you are here by mistake, click <a className="underline min-h-44 min-w-44" href="https://jakub.studio">here</a> to go to my public website.
			</div>}
		</footer>
	);
};

export default Footer;