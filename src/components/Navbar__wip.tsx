import Link from "next/link";
import { navbar as navbarRoutes, Home } from "@/routes";
import LogoIcon from "./icons/Logo";
import { useState } from "react";

const NavbarLink: React.FC<
	React.PropsWithChildren<{
		onClick: () => void;
	}>
> = props => {
	return (
		<li className="mx-2 last:ml-2 last:mr-0 hover:text-brand transition-colors duration-150 ">
			<span
				onClick={props.onClick}
				className="flex items-center min-h-44 after:absolute after:h-[2px] after:w-full after:bg-brand after:bottom-3 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right after:hover:origin-left after:opacity-50 relative"
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
			<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none z-10 dark:mix-blend-exclusion print:hidden">
				<Link
					href={Home.href}
					className="hover:text-brand transition-colors duration-150"
				>
					<LogoIcon />
				</Link>

				<nav>
					<button
						className="px-4 py-2 bg-stone-800 rounded-full font-semibold hover:bg-brand hover:text-black"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						menu
					</button>
				</nav>
			</header>
			{isMenuOpen && (
				<div className="fixed top-0 left-0 w-full h-full bg-stone-800 bg-opacity-80 backdrop-blur-xl z-10">
					<header className="p-4 md:p-6 fixed w-full flex justify-between items-center select-none z-10 dark:mix-blend-exclusion print:hidden">
						<Link
							href={Home.href}
							className="hover:text-brand transition-colors duration-150"
						>
							<LogoIcon />
						</Link>

						<nav>
							<button
								className="px-4 py-2 bg-stone-800 rounded-full font-semibold"
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
