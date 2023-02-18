import type { NextRequest } from "next/server";

import Data from "./data.json";
interface DataStructure {
	links: { [key: string]: string };
	tempDisable : { [key: string]: string };
}

// Update this if the file name ([...name].ts) changes
const QUERY_NAME = "name";

const notFoundConfig = { status: 404 };

export default function handler(req: NextRequest) {
	const requestedDestination = new URL(req.url).searchParams.getAll(QUERY_NAME).join("/");
	if (!requestedDestination) return new Response(null, notFoundConfig);

	const destination = (Data as DataStructure).links[requestedDestination];

	// Check if the destination is disabled
	if (!destination || (Data as DataStructure).tempDisable[requestedDestination]) return new Response(null, notFoundConfig);

	return new Response(null, {
		status: 302,
		headers: {
			Location: destination,
		},
	});
}

export const config = {
	runtime: "edge",
};