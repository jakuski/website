const securityHeaders = [
	{ key: "X-DNS-Prefetch-Control", value: "on" },
	{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
	{ key: "X-XSS-Protection", value: "1; mode=block" },
	{ key: "X-Frame-Options", value: "SAMEORIGIN" },
	{ key: "X-Content-Type-Options", value: "nosniff" },
	{ key: "Referrer-Policy", value: "origin-when-cross-origin" }, // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
	},
	{
		key: "Content-Security-Policy-Report-Only",
		value: [
			["default-src", "'self'"],
			["style-src",   "'self'", "'unsafe-inline'"],
			["frame-src",    "https://player.vimeo.com/"],
		].map(declaration => {
			const directive = declaration.shift();
			const value = declaration.join(" ");

			return `${directive} ${value}`;
		}).join("; ")
	}
];

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
				source: "/:path*",
				headers: securityHeaders
			}
		];
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
