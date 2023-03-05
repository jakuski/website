const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

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
		const self = "'self'";

		const securityHeaders = [
			{ key: "X-DNS-Prefetch-Control", value: "on" },
			{
				key: "Strict-Transport-Security",
				value: "max-age=63072000; includeSubDomains; preload"
			},
			{ key: "X-XSS-Protection", value: "1; mode=block" },
			{ key: "X-Frame-Options", value: "SAMEORIGIN" },
			{ key: "X-Content-Type-Options", value: "nosniff" },
			{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // https://scotthelme.co.uk/a-new-security-header-referrer-policy/
			{
				key: "Permissions-Policy",
				value: "camera=(), microphone=(), geolocation=()"
			},
			{
				key: "Content-Security-Policy", // https://content-security-policy.com/
				value: [
					["default-src", self],
					["style-src", self, "'unsafe-inline'"],
					[
						"script-src",
						self,
						"'unsafe-inline'",
						isDev && "'unsafe-eval' https://cdn.vercel-insights.com"
					],
					["img-src", self, "data:"],
					["frame-src", "https://player.vimeo.com/"],
					["connect-src", self, "https://vitals.vercel-insights.com/"]
				]
					.map(declarationRaw => {
						const declaration = declarationRaw.filter(Boolean);
						const directive = declaration.shift();
						const value = declaration.join(" ");

						return `${directive} ${value}`;
					})
					.join("; ")
			}
		];

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
