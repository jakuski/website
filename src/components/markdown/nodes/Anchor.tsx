import { domain } from "@/config";
import Link from "next/link";
import React from "react";
import { parse, UrlWithStringQuery } from "url";

const domainSplit = domain.split(".");

const isExternalHref = (url: UrlWithStringQuery): boolean => {
	// If 'host' or 'hostname' are null, then the link wil not navigate away from the current domain.
	if (url.host === null || url.hostname === null) return false;

	const hostnameSplit = url.hostname.split(".");

	const hostnameTLD = hostnameSplit[hostnameSplit.length - 1];
	const hostnameRootDomain = hostnameSplit[hostnameSplit.length - 2];

	if (
		hostnameTLD === domainSplit[domainSplit.length - 1] &&
		hostnameRootDomain === domainSplit[domainSplit.length - 2]
	) {
		return false;
	}

	return true;
};

const privateRel = "noopener noreferrer";

const Anchor: React.FC<
	React.PropsWithChildren<{
		href: string;
		newWindow?: string;
	}>
> = props => {
	const parsed = parse(props.href);
	const isExternal = isExternalHref(parsed);

	return (
		<Link
			href={props.href}
			className="cursor-pointer text-brand hover:underline font-semibold"
			target={props.newWindow ? "_blank" : void 0}
			rel={isExternal ? privateRel : void 0}
		>
			{props.children}
		</Link>
	);
};

export default Anchor;
