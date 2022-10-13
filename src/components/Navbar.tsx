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

const SkipToMainButton: React.FC = () => {
	return <a href="#main-content" className="absolute left-0 top-4 bg-black text-brand pointer-events-none shadow-md z-20 py-4 px-6 -translate-x-full transition-transform duration-75 focus:pointer-events-auto focus:-translate-x-0">
		Skip to main content
	</a>;
};

export default function Navbar() {
	return (
		<>
			<SkipToMainButton />

			<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none z-10 print:hidden">
				<Link href={Home.href}>
					<a>
						<LogoIcon />
					</a>
				</Link>

				<nav className="font-serif text-md font-semibold lowercase">
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