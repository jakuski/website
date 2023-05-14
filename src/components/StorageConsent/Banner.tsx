import { PropsWithChildren, useState } from "react";
import NextLink from "next/link";

import c from "clsx";

import { CookiePolicy, Legal, Privacy, Route } from "@/routes";

import Button from "./Button";
import CookieClickerEasterEgg from "./CookieClickerEasterEgg";

const Link: React.FC<
	PropsWithChildren<{
		href: Route;
	}>
> = props => {
	return (
		<li>
			<NextLink
				href={props.href.href}
				className="cursor-pointer font-bold text-brand hover:underline"
			>
				{props.children}
			</NextLink>
		</li>
	);
};

const StorageConsentBanner = () => {
	const [visible, setVisible] = useState(false);

	const containerClassName = c(
		"bg-ui-800/90 backdrop-blur-lg text-ui-200 text-center py-4 px-6 max-w-3xl mx-auto rounded-md shadow-lg pointer-events-auto",
		"transition-transform translate ease duration-150 transform-gpu",
		{
			["translate-y-36"]: !visible
		}
	);

	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-2 z-50 mx-2">
			<div className={containerClassName} aria-hidden={!visible}>
				<div className="flex flex-col justify-between gap-4 sm:flex-row md:gap-6">
					<div className="flex flex-row gap-6">
						<CookieClickerEasterEgg />
						<div className="flex flex-col items-start justify-center gap-1">
							<div className="flex flex-col gap-1 text-left text-xs">
								<p>
									This website uses browser storage technologies to ensure you
									get the best experience. By clicking &apos;Accept all&apos;
									you consent to the use of browser storage to improve your
									experience and other uses as described in the policies below.
								</p>
								<ul className="flex flex-row gap-4">
									<Link href={Privacy}>Privacy Policy</Link>
									<Link href={CookiePolicy}>Cookie Policy</Link>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-row items-center justify-end gap-2 sm:flex-col-reverse sm:justify-center md:flex-row">
						<Button secondary className="w-full grow md:grow-0">
							Reject non-essential
						</Button>
						<Button primary className="w-full grow md:w-auto md:grow-0">
							Accept all
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StorageConsentBanner;
