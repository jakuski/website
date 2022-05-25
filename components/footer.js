import Link from "next/link";
import pkg from "../package.json";


const SocialLink = props => {
	return <Link href={props.href}>
		<a className="hover:underline">{props.children}</a>
	</Link>;
};

export default function Footer({ children }) {
	return (
		<footer className="font-sans text-xs flex flex-col items-center pb-3 mt-4">
			<div className="italic mb-3">Slava Ukraini.</div>
			<div className="mb-3 flex gap-2">
				<SocialLink href="/go/instagram">Instagram</SocialLink>
				<SocialLink href="/go/twitter">Twitter</SocialLink>
				<SocialLink href="/go/linkedin">LinkedIn</SocialLink>
			</div>
			{/* <div>Powered by <a href="https://vercel.com/">Vercel</a> and available on <a href={pkg.repository.url}>GitHub</a>.</div> */}
			<div>Copyright © {new Date().getFullYear()} Jakub Staniszewski</div>
		</footer>
	);
}