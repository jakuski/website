import Link from "next/link";
import { navbar as navbarRoutes, Home } from "@/routes";
import LogoIcon from "./icons/Logo";

const NavbarLink: React.FC<React.PropsWithChildren<{
	href: string;
}>> = props => {
	return <li className="px-2 last:pl-2 last:pr-0">
		<Link href={props.href}>
			<a className="flex items-center min-h-44">{props.children}</a>
		</Link>
	</li>;
};

export default function Navbar() {
	return (
		<>
			<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none z-10 print:hidden">
				<Link href={Home.href} >
					<a className="hover:text-brand transition-colors duration-200">
						<LogoIcon />
					</a>
				</Link>

				<nav className="font-serif text-lg font-semibold lowercase">
					<ul className="flex gap-4">
						{navbarRoutes.map(route => (
							<NavbarLink
								href={route.href}
								key={route.href}
							>
								{route.displayName}
							</NavbarLink>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}