import React from "react";
import Link from "next/link";

import {
	Instagram as InstagramRedirectRoute,
	LinkedIn as LinkedInRedirectRoute,
	Twitter as TwitterRedirectRoute,
	GithubAccount as GitHubRedirectRoute,
	Vimeo as VimeoRedirectRoute,
	Route,
	FigmaCommunityAccount as FigmaCommunityAccountRedirectRoute
} from "@/routes";

import InstagramIcon from "@/components/icons/Instagram";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import GitHubIcon from "@/components/icons/GitHub";
import FigmaIcon from "@/components/icons/Figma";
import VimeoIcon from "@/components/icons/Vimeo";

interface SocialIconProps extends React.PropsWithChildren {
	href: string;
	srLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = props => {
	return (
		<Link
			href={props.href}
			title={`View my ${props.srLabel} profile`}
			target="_blank"
			className="flex items-center justify-center min-h-44 opacity-50 hover:opacity-100 ease transition-opacity duration-150"
			prefetch={false}
		>
			<span className="sr-only">{props.srLabel} icon</span>
			{props.children}
		</Link>
	);
};

interface SocialLink {
	icon: React.FC;
	href: Route;
	label: string;
}

const socialLinks: SocialLink[] = [
	{ icon: InstagramIcon, href: InstagramRedirectRoute, label: "Instagram" },
	{ icon: LinkedInIcon, href: LinkedInRedirectRoute, label: "LinkedIn" },
	{ icon: TwitterIcon, href: TwitterRedirectRoute, label: "Twitter" },
	{ icon: GitHubIcon, href: GitHubRedirectRoute, label: "GitHub" },
	{
		icon: FigmaIcon,
		href: FigmaCommunityAccountRedirectRoute,
		label: "Figma Community"
	},
	{ icon: VimeoIcon, href: VimeoRedirectRoute, label: "Vimeo" }
];

const SocialIcons = () => {
	return (
		<div className="flex flex-row gap-8 sm:gap-7 md:gap-6 justify-start items-start print:hidden">
			{socialLinks.map(link => {
				const href = link.href.hrefWithSource("footer");

				return (
					<SocialIcon href={href} key={href} srLabel={link.label}>
						{React.createElement(link.icon, {})}
					</SocialIcon>
				);
			})}
		</div>
	);
};

export default SocialIcons;
