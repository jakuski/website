import { recordWithLogSnag } from "./logSnag";
import { NextRequest } from "next/server";
import { SourceQueryEvent } from "./types";

const sources: Record<string, string> = {
	i: "Instagram",
	l: "LinkedIn",
	t: "Twitter",
	p: "Portfolio",
	v: "Vimeo",

	footer: "Website Footer"
};

export const recordSource = (
	source: string,
	request: NextRequest
): Promise<unknown> => {
	const { nextUrl: url } = request;
	const data: SourceQueryEvent = {
		rawSource: source,
		source: sources[source],
		url: url.pathname + url.search,
		rawUrl: url.href
	};

	// I have intentionally abstracted the code this way so that
	// should I have to switch to a different analytics service,
	// I can do so relatively easily.
	return recordWithLogSnag(data);
};
