import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { recordSource } from "@/modules/source-query-tracker";

export function middleware(req: NextRequest, event: NextFetchEvent) {
	console.log("Middleware: ", req.nextUrl.pathname);
	// Record ?s= query parameter
	const sourceParam = req.nextUrl.searchParams.get("s");
	if (sourceParam) {
		event.waitUntil(
			recordSource(sourceParam, req)
		);
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico).*)"
	]
};