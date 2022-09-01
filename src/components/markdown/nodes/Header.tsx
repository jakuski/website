import { isDev } from "@/utils";
import React from "react";

const getHeaderClassName = (level: number): string => {
	switch (level) {
	case 2: return "text-xl mb-1";
	case 3: return "text-lg mb-1";
	default: return "";
	}
};

const Header: React.FC<React.PropsWithChildren<{
	level: number;
	id?: string;
}>> = props => {

	if (props.level === 1) {
		// <h1/> is not permitted in markdoc as the only h1 on the page is the title in meta frontmatter.
		if (isDev) {
			console.warn("<h1> (#) elements are not allowed in markdoc documents. The only h1 allowed on a webpage is the meta#title or meta#displayTitle which is defined in frontmatter.");
		}
		
		return null;
	}

	return React.createElement(`h${props.level}`, {
		id: "md-" + props.id,
		className: getHeaderClassName(props.level) + " font-bold"
	}, props.children);
};

export default Header;