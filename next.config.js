const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	}
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	poweredByHeader: false,
	rewrites() {
		return [
			{
				source: "/go/:path*",
				destination: "/api/go-redirect-service/:path*"
			}
		];
	},
	redirects() {
		return [
			{
				source: "/_assets/JakubStaniszewskiPortfolio_W.pdf",
				destination: "/works?pdf-redirect=1",
				permanent: true
			},
			{
				source: "/go/portfolio",
				destination: "/works?pdf-redirect=1",
				permanent: true
			}
		];
	},
	async headers() {
		return [
		  {
			// Apply these headers to all routes in your application.
			source: '/:path*',
			headers: securityHeaders,
		  },
		]
	  }
};

let withBundleAnalyser = e => e;

if (process.env.ANALYZE === "true") {
	withBundleAnalyser = require("@next/bundle-analyzer")({
		enabled: true
	});
}

module.exports =
	process.env.ANALYZE === "true" ? withBundleAnalyser(nextConfig) : nextConfig;
