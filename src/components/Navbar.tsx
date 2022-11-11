import Link from "next/link";
import { navbar as navbarRoutes, Home } from "@/routes";
import LogoIcon from "./icons/Logo";

/* const old = "flex items-center min-h-44 relative after:absolute after:h-6 after:w-[calc(100%+10px)] after:px-2 after:bg-brand/20 after:-left-1 after:transform after:translate-x-full after:hover:translate-x-0 after:transition-transform after:origin-right after:hover:origin-left after:-z-10  after:rounded-full after:overflow-hidden" */

const NavbarLink: React.FC<React.PropsWithChildren<{
	href: string;
}>> = props => {
	return <li className="mx-2 last:ml-2 last:mr-0 hover:text-brand transition-colors duration-150 ">
		<Link href={props.href}>
			<a className="flex items-center min-h-44 after:absolute after:h-[2px] after:w-full after:bg-brand after:bottom-3 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:opacity-50 relative">{props.children}</a>
		</Link>
	</li>;
};

export default function Navbar() {
	return (
		<>
			<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none z-10 print:hidden">
				<Link href={Home.href} >
					<a className="hover:text-brand transition-colors duration-100">
						<LogoIcon />
					</a>
				</Link>

				<nav className="font-serif lowercase italic">
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