import Link from "next/link";
import React from "react";

const MAILTO_PREFIX = "mailto:";

const isEmailAnchor = (href: string) => href.startsWith(MAILTO_PREFIX);

const Anchor: React.FC<React.PropsWithChildren<{
	href: string;
}>> = props => {
	// const isEmail = isEmailAnchor(props.href);

	return <Link href={props.href}>
		<a className="underline cursor-pointer">
			{props.children}
		</a>
	</Link>;
};

export default Anchor;