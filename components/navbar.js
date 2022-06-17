import Image from "next/image";
import Link from "next/link";

const NavbarLink = props => {
	return <Link href={props.href}>
		<a className="text-md font-semibold flex items-center px-2 min-h-44">{props.children}</a>
	</Link>;
};

export default function Navbar() {
	return (
		<div className="p-4 md:p-6 fixed w-full flex justify-between items-center">
			<Link href="/">
				<a>
					<Image src="/logo.svg" alt="Logo" height={80} width={80} />
				</a>
			</Link>
			
			
			<div className="font-serif flex gap-4">
				<NavbarLink href="/go/portfolio">works</NavbarLink>
				<NavbarLink href="/about">about</NavbarLink>
				<NavbarLink href="/contact">contact</NavbarLink>
			</div>
		</div>
	);
}