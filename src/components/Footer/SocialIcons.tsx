import React from "react";
import Link from "next/link";

import FigmaIcon from "@/components/icons/Figma";
import GitHubIcon from "@/components/icons/GitHub";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedInIcon from "@/components/icons/LinkedIn";
import TwitterIcon from "@/components/icons/Twitter";
import VimeoIcon from "@/components/icons/Vimeo";
import {
	Instagram as InstagramRedirectRoute,
	LinkedIn as LinkedInRedirectRoute,
	Twitter as TwitterRedirectRoute,
	GithubAccount as GitHubRedirectRoute,
	Vimeo as VimeoRedirectRoute,
	Route,
	FigmaCommunityAccount as FigmaCommunityAccountRedirectRoute
} from "@/routes";

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
			className="ease flex min-h-44 items-center justify-center opacity-50 transition-opacity duration-150 hover:opacity-100"
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
	/* { icon: InstagramIcon, href: InstagramRedirectRoute, label: "Instagram" }, */
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
		<div className="flex flex-row items-start justify-start gap-8 print:hidden sm:gap-7 md:gap-6">
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
