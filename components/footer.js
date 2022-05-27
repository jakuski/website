import Link from "next/link";
import pkg from "../package.json";


const SocialLink = props => {
	return <Link href={props.href}>
		<a className="hover:underline">{props.children}</a>
	</Link>;
};

export default function Footer({ children }) {
	return (
		<footer className="font-sans text-sm flex flex-col items-center mt-4 gap-3">
			
			<div className="flex gap-2">
				<SocialLink href="/go/instagram">Instagram</SocialLink>
				<SocialLink href="/go/twitter">Twitter</SocialLink>
				<SocialLink href="/go/linkedin">LinkedIn</SocialLink>
				<SocialLink href="/go/vimeo">Vimeo</SocialLink>
			</div>
			{/* <div>Powered by <a href="https://vercel.com/">Vercel</a> and available on <a href={pkg.repository.url}>GitHub</a>.</div> */}
			<div><span className="italic">Slava Ukraini.</span>Copyright © {new Date().getFullYear()} Jakub Staniszewski</div>
		</footer>
	);
}