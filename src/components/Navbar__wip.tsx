import { useState } from "react";
import Link from "next/link";

import { navbar as navbarRoutes, Home } from "@/routes";

import LogoIcon from "./icons/Logo";

const NavbarLink: React.FC<
	React.PropsWithChildren<{
		onClick: () => void;
	}>
> = props => {
	return (
		<li className="mx-2 transition-colors duration-150 last:ml-2 last:mr-0 hover:text-brand ">
			<span
				onClick={props.onClick}
				className="relative flex min-h-44 items-center after:absolute after:bottom-3 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-brand after:opacity-50 after:transition-transform after:hover:origin-left after:hover:scale-x-100"
			>
				{props.children}
			</span>
		</li>
	);
};

// todo: header classname only applies exclusion blend mode on dark mode. look into light mode application
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<header className="fixed z-10 flex w-full select-none items-center justify-between p-4 dark:mix-blend-exclusion print:hidden md:p-6">
				<Link
					href={Home.href}
					className="transition-colors duration-150 hover:text-brand"
				>
					<LogoIcon />
				</Link>

				<nav>
					<button
						className="rounded-full bg-ui-800 px-4 py-2 font-semibold hover:bg-brand hover:text-black"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						menu
					</button>
				</nav>
			</header>
			{isMenuOpen && (
				<div className="fixed left-0 top-0 z-10 h-full w-full bg-ui-800/80 backdrop-blur-xl">
					<header className="fixed z-10 flex w-full select-none items-center justify-between p-4 dark:mix-blend-exclusion print:hidden md:p-6">
						<Link
							href={Home.href}
							className="transition-colors duration-150 hover:text-brand"
						>
							<LogoIcon />
						</Link>

						<nav>
							<button
								className="bg-stone-800 rounded-full px-4 py-2 font-semibold"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								menu
							</button>
						</nav>
					</header>
					<div className="">hello</div>
				</div>
			)}
		</>
	);
}
