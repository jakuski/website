import Image from "next/image";
import Link from "next/link";
import { navbar as navbarRoutes, Home } from "@/routes";
import LogoIcon from "./icons/Logo";

const NavbarLink: React.FC<React.PropsWithChildren<{
	href: string;
}>> = props => {
	return <Link href={props.href}>
		<a className="text-md font-semibold flex items-center px-2 min-h-44 lowercase">{props.children}</a>
	</Link>;
};

export default function Navbar() {
	return (
		<>
			<a href="#main-content" className="absolute left-0 top-4 bg-black text-brand pointer-events-none shadow-md z-10 py-4 px-6 -translate-x-full transition-transform duration-75 focus:pointer-events-auto focus:-translate-x-0">
				Skip to main content
			</a>

			<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none">
				<Link href={Home.href}>
					<a>
						<LogoIcon />
					</a>
				</Link>

				<nav className="font-serif flex gap-4">
					{navbarRoutes.map(route => (
						<NavbarLink
							href={route.href}
							key={route.href}
						>
							{route.displayName}
						</NavbarLink>
					))}
				</nav>
			</header>
		</>
	);
}