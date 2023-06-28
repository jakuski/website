import { PropsWithChildren, useRef } from "react";
import NextLink from "next/link";

import LogoIcon from "@/components/icons/Logo";
import { websiteName } from "@/config";
import { c } from "@/utils";

const InlineTextLinkClassName = c(
	"inline text-brand font-bold relative",
	"after:absolute after:h-[2px] after:w-full after:bg-brand after:opacity-50 after:bottom-0 after:left-0 after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-right",
	"after:hover:origin-left"
);

type InlineTextLinkProps = PropsWithChildren<{ href: string }>;

const InlineTextLink: React.FC<InlineTextLinkProps> = props => {
	return (
		<NextLink href={props.href} className={InlineTextLinkClassName}>
			{props.children}
		</NextLink>
	);
};

const NavElement: React.FC<PropsWithChildren> = props => (
	<li className=" py-4 pl-4 transition-transform duration-300 hover:-translate-x-12 ">
		<a href="/" className="  relative">
			<h3>{props.children}</h3>
			<svg
				width="32"
				height="15"
				viewBox="0 0 32 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-1/3 left-[calc(100%+16px)]"
			>
				<path
					d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384079 24.3195 0.0384079 23.9289 0.428932C23.5384 0.819456 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
					fill="currentColor"
				/>
			</svg>
		</a>
	</li>
);

const NavDivider = () => (
	<hr className="ml-auto h-[2px] w-1/4 border-none bg-ui-950/20 last:hidden" />
);

export default async function Page() {
	return (
		<main className="flex h-full flex-col items-center justify-between gap-14 bg-brand font-sans text-ui-800 selection:bg-ui-950/20 sm:flex-row">
			<div className="mx-20">
				<div className="flex flex-col gap-5">
					<div className="">
						<div className="mb-6 font-serif text-3xl leading-tight tracking-tight md:leading-snug lg:text-4xl lg:leading-[1.25]">
							<h1>Ayup, I&apos;m Jakub.</h1>
							<br />
							I’m a digital designer & developer, <br />
							welcome to my slice of the internet.
						</div>
					</div>
				</div>
			</div>
			<div className="m-20 font-serif text-3xl">
				<ul className="flex flex-col overflow-hidden pl-20 text-right">
					<NavElement>Works</NavElement>
					<NavDivider />
					<NavElement>Writing</NavElement>
					<NavDivider />
					<NavElement>About</NavElement>
					<NavDivider />
					<NavElement>Contact</NavElement>
					<NavDivider />
				</ul>
			</div>
		</main>
	);
}
