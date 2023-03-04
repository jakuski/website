import type { NextRequest } from "next/server";
import type { CspReport } from "./types";

export default async function handler(req: NextRequest) {
	// ROUTE IS WIP
	return new Response(null, { status: 404 });

	// Only allow POST requests
	if (req.method !== "POST")
		return new Response(null, { status: 405, headers: { Allow: "POST" } });

	// const body = await req.json();

	/* 	return new Response(null, {
		status: 302,
		headers: {
			Location: destination
		}
	}); */
}

export const config = {
	runtime: "edge"
};
