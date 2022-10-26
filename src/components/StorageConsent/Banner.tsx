import { CookiePolicy, Legal, Privacy, Route } from "@/routes";
import NextLink from "next/link";
import { PropsWithChildren } from "react";
import Button from "./Button";
import CookieClickerEasterEgg from "./CookieClickerEasterEgg";

const Link: React.FC<PropsWithChildren<{
	href: Route
}>> = props => {
	return (
		<li>
			<NextLink href={props.href.href}>
				<a className="hover:underline font-bold cursor-pointer text-brand">{props.children}</a>
			</NextLink>
		</li>
	);
};

const StorageConsentBanner = () => {
	return (
		<div className="fixed bottom-2 left-0 right-0 mx-2 z-50">
			<div className="bg-stone-800/90 backdrop-blur-lg text-stone-200 text-center py-4 px-6 max-w-3xl mx-auto rounded-md shadow-lg">
				<div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-between">
					<div className="flex flex-row gap-4">
						<CookieClickerEasterEgg />
						<div className="flex flex-col gap-1 items-start justify-center">
							<div className="text-xs text-left flex gap-1 flex-col">
								<p>This website uses browser storage technologies to ensure you get the best experience. By clicking &apos;Accept all&apos; you consent to the use of browser storage to improve your experience and other uses as described in the policies below.</p>
								<ul className="flex flex-row gap-4">
									<Link href={Privacy}>Privacy Policy</Link>
									<Link href={CookiePolicy}>Cookie Policy</Link>
									
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-row sm:flex-col-reverse md:flex-row justify-end sm:justify-center items-center gap-2">
						<Button secondary className="grow w-full md:grow-0">Reject non-essential</Button>
						<Button primary className="grow w-full md:grow-0 md:w-auto">Accept all</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StorageConsentBanner;