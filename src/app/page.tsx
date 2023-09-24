import { PropsWithChildren, useRef } from "react";
import NextLink from "next/link";

import LogoIcon from "@/components/icons/Logo";
import { websiteName } from "@/config";
import { c } from "@/utils";
import Clock from "@/components/Clock";

export default async function Page() {
	return (
		<main className="h-full bg-brand font-sans text-ui-800 selection:bg-ui-950/20 sm:flex-row">
			<div className="mx-16 pt-8 flex flex-col h-full justify-between font-serif-cond text-[2vw] leading-[2.5vw]">
				<div className="flex flex-col items-end">
					<div className="flex items-center text-right">
						<svg width="46" height="29" viewBox="0 0 46 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<line x1="23.7667" y1="-2.79008e-08" x2="23.7667" y2="29" stroke="#312718" strokeWidth="1.53333" />
							<line x1="46" y1="15.0334" y2="15.0334" stroke="#312718" strokeWidth="1.53333" />
							<line x1="33.3533" y1="22.8211" x2="14.7068" y2="6.87771" stroke="#312718" strokeWidth="1.53333" />
							<line x1="33.7417" y1="8.29521" x2="13.0839" y2="21.5293" stroke="#312718" strokeWidth="1.53333" />
						</svg>
						<div className="w-[7vw]">
						<Clock />
						</div>
						</div>
					<span>London, United Kingdom.</span>
				</div>
				<div className="mb-6 flex items-baseline font-serif-cond  justify-between">
					<h1 className="text-[14vw] leading-[13vw] italic indent-[1vw] tracking-tight">Jakub<br />Staniszewski</h1>
					<div className="relative">
						<h2 className="absolute text-right w-[30vw] text-[2vw] bottom-full right-0 italic font-medium tracking-tight">Front-end Developer & Designer.</h2>
					</div>
				</div>
			</div>
		</main>
	);
}
