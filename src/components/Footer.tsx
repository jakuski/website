import Link from "next/link";
import React from "react";

import {
	Instagram as InstagramRoute,
	LinkedIn as LinkedInRoute,
	Twitter as TwitterRoute,
	GithubAccount as GitHubRoute,
	Vimeo as VimeoRoute,
	Route,
	FigmaCommunityAccount
} from "@/routes";

import InstagramIcon from "@/components/icons/Instagram";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import GitHubIcon from "@/components/icons/GitHub";
import VimeoIcon from "@/components/icons/Vimeo";
import { isPreview } from "@/config";

interface SocialIconProps extends React.PropsWithChildren {
	href: string;
	srLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = props => {
	return <Link href={props.href}>
		<a
			title={props.srLabel}
			className="min-h-44 min-w-44 flex items-center justify-center opacity-50 hover:opacity-100 ease transition-opacity duration-150"
		>
			<span className="sr-only">{props.srLabel}</span>
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
	{ icon: InstagramIcon, href: InstagramRoute, label: "Instagram" },
	{ icon: LinkedInIcon, href: LinkedInRoute, label: "LinkedIn" },
	{ icon: TwitterIcon, href: TwitterRoute, label: "Twitter" },
	{ icon: GitHubIcon, href: GitHubRoute, label: "GitHub" },
	{ icon: () => <>CHANGE ME</>, href: FigmaCommunityAccount, label: "Figma Community" },
	{ icon: VimeoIcon, href: VimeoRoute, label: "Vimeo" }
];

const Footer: React.FC = () => {
	return (
		<footer className="font-sans text-sm flex flex-col items-center mt-8 gap-3 pb-6">
			<div className="flex flex-row">
				{socialLinks.map(link => {
					const href = link.href.hrefWithSource("footer");

					return <SocialIcon href={href} key={href} srLabel={link.label}>
						{React.createElement(link.icon, {})}
					</SocialIcon>;
				})}
			</div>
			<div className="opacity-70">
				<span className="italic mr-2">Slava Ukraini.</span>
				Copyright © {new Date().getFullYear()} Jakub Staniszewski
			</div>
			<div className="opacity-70 flex gap-2">
				<div className="min-h-44 min-w-44 flex items-center">
					Colophon
				</div>
				<div className="min-h-44 min-w-44 flex items-center">
					Privacy
				</div>
				<div className="min-h-44 min-w-44 flex items-center">
					Legal
				</div>
			</div>
			{isPreview && <div className="opacity-70 font-bold italic text-center">
				This is a development preview of my website which is not intended for public viewing. <br/>If you believe you are here by mistake, click <a className="underline min-h-44 min-w-44" href="https://jakub.studio">here</a> to go to my public website.
			</div>}
		</footer>
	);
};

export default Footer;