/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	poweredByHeader: false,
	rewrites () {
		return [
			{
				source: "/go/:path*",
				destination: "/api/go-redirect-service/:path*"
			}
		];
	},
	redirects () {
		return [
			{
				source: "/_assets/JakubStaniszewskiPortfolio_W.pdf",
				destination: "/works?pdf-redirect=1",
				permanent: true
			},{
				source: "/go/portfolio",
				destination: "/works?pdf-redirect=1",
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
