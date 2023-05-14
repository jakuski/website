import Link from "next/link";

import { navbar as navbarRoutes, Home } from "@/routes";

import LogoIcon from "./icons/Logo";

const NavbarLink: React.FC<
	React.PropsWithChildren<{
		href: string;
	}>
> = props => {
	return (
		<li className="mx-2 transition-colors duration-150 last:ml-2 last:mr-0 hover:text-brand ">
			<Link
				href={props.href}
				className="relative flex min-h-44 items-center after:absolute after:bottom-3 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-brand after:opacity-50 after:transition-transform after:hover:origin-left after:hover:scale-x-100"
			>
				{props.children}
			</Link>
		</li>
	);
};

// todo: header classname only applies exclusion blend mode on dark mode. look into light mode application
export default function Navbar() {
	return (
		<>
			<header className="fixed z-10 flex w-full select-none items-center justify-between p-4 dark:mix-blend-exclusion print:hidden md:p-6">
				<Link
					href={Home.href}
					className="transition-colors duration-150 hover:text-brand"
				>
					<LogoIcon />
				</Link>

				<nav className="font-serif lowercase italic">
					<ul className="flex gap-4">
						{navbarRoutes.map(route => (
							<NavbarLink href={route.href} key={route.href}>
								{route.displayName}
							</NavbarLink>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}
