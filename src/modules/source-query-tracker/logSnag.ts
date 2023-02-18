import { isProd } from "@/utils";
import { SourceQueryEvent } from "./types";

// cSpell:ignore logsnag

const LOGSNAG_API_BASE_URL = "https://api.logsnag.com/v1";
const LOGSNAG_LOG_URL = LOGSNAG_API_BASE_URL + "/log";

const LOGSNAG_TOKEN = process.env.LOGSNAG_API_TOKEN;

const keyValMarkdown = (key: string, value: string) => {
	return `**${key}**: ${value}`;
};

export const recordWithLogSnag = async (event: SourceQueryEvent) => {
	if (!LOGSNAG_TOKEN) {
		console.warn("LogSnag API token not found. Skipping recording of event.");
	}

	return fetch(LOGSNAG_LOG_URL, {
		method: "POST",
		headers: {
			"Authorization": "Bearer " + LOGSNAG_TOKEN,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			project: "jakub-studio-website",
			channel: "source-tracking",
			event: "Page view with source",
			icon: "✈",
			parser: "markdown",
			description: [
				["Source", event.source],
				["Original Source", event.rawSource],
				["URL", `[${event.url}](${event.rawUrl})`],
				["Environment", isProd ? "Production" : "Development"],
				["Server time", new Date().toUTCString()]
			]
				.map(a => keyValMarkdown(a[0] as string, a[1] as string))
				.join("\n")
		})
	});
};
