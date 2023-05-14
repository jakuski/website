import { PropsWithChildren } from "react";
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

export default async function Page() {
	return (
		<main className="mx-8 flex h-full flex-col items-center justify-center gap-14 font-sans sm:flex-row">
			<div>
				<LogoIcon size={128} />
			</div>
			<div className="flex flex-col gap-5">
				<div className="max-w-lg">
					<div className="mb-6 font-serif text-3xl font-bold leading-tight tracking-tight md:leading-snug lg:text-5xl lg:leading-[1.25]">
						<h1 className="inline lg:block">{websiteName}</h1> is&nbsp;a digital
						designer and developer based in&nbsp;London.
					</div>
					<div className="mb-6 text-xl tracking-tight">
						Designing and engineering interfaces for humans.
						<br />
						See <InlineTextLink href="/works">my work</InlineTextLink>, find out
						more <InlineTextLink href="/about">about me</InlineTextLink> or{" "}
						<InlineTextLink href="/contact">get in touch</InlineTextLink>.
					</div>

					<div className="text-xl tracking-tight">
						Seeking digital product design/development roles.
					</div>
				</div>
			</div>
		</main>
	);
}
