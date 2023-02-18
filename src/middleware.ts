import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { recordSource } from "@/modules/source-query-tracker";

export function middleware(req: NextRequest, event: NextFetchEvent) {
	// Record ?s= query parameter
	const sourceParam = req.nextUrl.searchParams.get("s");
	if (sourceParam) {
		event.waitUntil(recordSource(sourceParam, req));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Ignores: api, _next/static, _next/image, favicon.ico
		"/((?!api|_next/static|_next/image|favicon.ico).*)"
	]
};
