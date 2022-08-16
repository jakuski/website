/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	poweredByHeader: false,
	rewrites () {
		return [
			{ destination: "/api/go-redirect-service/:path*", source: "/go/:path*" }
		];
	}
};

module.exports = nextConfig;
