import type { NextRequest } from "next/server";

export default function handler(req: NextRequest) {
	return new Response(null);
}

export const config = {
	runtime: "edge"
};
