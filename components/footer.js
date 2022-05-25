import pkg from "../package.json";

export default function Footer({ children }) {
	return (
		<footer className="font-sans flex flex-col items-center pb-3 mt-4">
			<div className="italic">Slava Ukraini.</div>
			{/* <div>Powered by <a href="https://vercel.com/">Vercel</a> and available on <a href={pkg.repository.url}>GitHub</a>.</div> */}
			<div className="mt-3">Copyright © {new Date().getFullYear()} Jakub Staniszewski</div>
		</footer>
	);
}