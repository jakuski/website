import { isDev } from "@/utils";
import React from "react";
import c from "clsx";

const getHeaderClassName = (level: number): string => {
	switch (level) {
		case 2:
			return "text-xl mb-1";
		case 3:
			return "text-lg mb-1";
		case 4:
			return "mb-1";
		default:
			return "";
	}
};

const Header: React.FC<
	React.PropsWithChildren<{
		level: number;
		id?: string;
		className?: string;
	}>
> = props => {
	if (props.level === 1) {
		// <h1/> is not permitted in markdoc as the only h1 on the page is the title in meta frontmatter.
		if (isDev) {
			console.warn(
				"<h1> (#) elements are not allowed in markdoc documents. The only h1 allowed on a webpage is the meta#title or meta#displayTitle which is defined in frontmatter."
			);
		}

		return null;
	}

	if (props.level >= 5) {
		if (isDev) {
			console.warn(
				"<h5/> or higher (e.g. <h6/>, <h7>) are not permitted in markdoc documents the Heading component does not support it."
			);
		}

		return null;
	}

	// Trim whitespace from headers
	let children = props.children;
	if (typeof children === "string") {
		children = children.trim();
	}

	return React.createElement(
		`h${props.level}`,
		{
			id: props.id,
			className: c(
				getHeaderClassName(props.level),
				"font-bold",
				props.className
			)
		},
		children
	);
};

export default Header;
