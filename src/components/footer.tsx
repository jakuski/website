import LinkedInIcon from "@/modules/icons/linkedin";
import { socialHandles } from "@/config";
import { LinkedIn as LinkedInRoute } from "@/routes";
import Link from "next/link";

interface SocialIconProps extends React.PropsWithChildren {
	href: string;
	srLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = props => {
	return <Link href={props.href}>
		<a className="hover:underline min-h-44 min-w-44 flex items-center justify-center opacity-50 hover:opacity-100 ease transition-opacity duration-150">
			<span className="sr-only">{props.srLabel}</span>
			{props.children}
		</a>
	</Link>;
};

const Footer: React.FC = () => {
	return (
		<footer className="font-sans text-sm flex flex-col items-center mt-8 gap-3 pb-6">
			<div className="flex flex-row">
				<SocialIcon href={LinkedInRoute.href} srLabel="LinkedIn">
					<LinkedInIcon />
				</SocialIcon>
			</div>
			<div className="opacity-70">
				<span className="italic mr-2">Slava Ukraini.</span>
				Copyright © {new Date().getFullYear()} Jakub Staniszewski
			</div>
		</footer>
	);
};

export default Footer;