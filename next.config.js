/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites () {
		return [
			{ destination: "/api/go-redirect-service/:path*", source: "/go/:path*" }
		];
	}
};

module.exports = nextConfig;
