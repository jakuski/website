import Link from "next/link";
import React from "react";

import {
	Instagram as InstagramRedirectRoute,
	LinkedIn as LinkedInRedirectRoute,
	Twitter as TwitterRedirectRoute,
	GithubAccount as GitHubRedirectRoute,
	Vimeo as VimeoRedirectRoute,
	Route,
	FigmaCommunityAccount as FigmaCommunityAccountRedirectRoute,
	Colophon,
	Privacy,
	Legal
} from "@/routes";

import InstagramIcon from "@/components/icons/Instagram";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import GitHubIcon from "@/components/icons/GitHub";
import FigmaIcon from "@/components/icons/Figma";
import VimeoIcon from "@/components/icons/Vimeo";
import { isProd } from "@/utils";

interface SocialIconProps extends React.PropsWithChildren {
	href: string;
	srLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = props => {
	return <Link href={props.href}>
		<a
			title={`View ${props.srLabel} profile`}
			target="_blank"
			className="min-h-44 min-w-44 flex items-center justify-center opacity-50 hover:opacity-100 ease transition-opacity duration-150"
		>
			<span className="sr-only">{props.srLabel} icon</span>
			{props.children}
		</a>
	</Link>;
};

interface SocialLink {
	icon: React.FC,
	href: Route,
	label: string
}

const socialLinks: SocialLink[] = [
	{ icon: InstagramIcon, href: InstagramRedirectRoute, label: "Instagram" },
	{ icon: LinkedInIcon, href: LinkedInRedirectRoute, label: "LinkedIn" },
	{ icon: TwitterIcon, href: TwitterRedirectRoute, label: "Twitter" },
	{ icon: GitHubIcon, href: GitHubRedirectRoute, label: "GitHub" },
	{ icon: FigmaIcon, href: FigmaCommunityAccountRedirectRoute, label: "Figma Community" },
	{ icon: VimeoIcon, href: VimeoRedirectRoute, label: "Vimeo" }
];

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
			<div className="flex flex-row print:hidden">
				{socialLinks.map(link => {
					const href = link.href.hrefWithSource("footer");

					return <SocialIcon href={href} key={href} srLabel={link.label}>
						{React.createElement(link.icon, {})}
					</SocialIcon>;
				})}
			</div>

			<div className="flex gap-2 print:hidden">
				<TextLink route={Colophon} />
				<TextLink route={Privacy} />
				<TextLink route={Legal} />
			</div>

			<div className="opacity-70 mb-6 mt-2 print:mb-0">
				<span className="italic mr-2">Slava Ukraini.</span>
				Copyright © {new Date().getFullYear()} Jakub Staniszewski
			</div>

			{(!isProd) && <div className="font-bold px-4 py-2 bg-black text-white tracking-wide">
				This is a development version of my website which is not intended for public viewing. <br />If you believe you are here by mistake, click <a className="underline min-h-44 min-w-44" href="https://jakub.studio">here</a> to go to my public website.
			</div>}
		</footer>
	);
};

export default Footer;