interface Parameters {
	slug: string;
}

export async function GET(
	request: Request,
	{ params }: { params: Parameters }
) {
	const slug = params.slug;

	return new Response("Route unavailable", { status: 404 });
}
