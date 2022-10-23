import { Privacy } from "@/routes";
import Link from "next/link";

const CookieConsentBanner = () => {
	return (
		<div className="absolute bottom-4 left-0 right-0 bg-foreground-dark text-white text-center p-4 max-w-2xl mx-auto rounded shadow-md z-50">
			<div className="flex gap-6 justify-between">
				<div className="flex flex-row gap-4 text-background-dark">
					<div className="flex items-center justify-center">🍪</div>
					<div className="flex flex-col items-start">
						<div className="font-bold">Cookies <span className="opacity-50">(the boring ones)</span></div>
						<div className="text-xs flex flex-col items-start text-left">
							<div>This website uses cookies to ensure you get the best experience.</div>
							<div>This is in accordance with the&nbsp;
								<Link href={Privacy.href}>
									<a className="hover:underline font-bold cursor-pointer">privacy policy</a>
								</Link>.
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2">
					<button className="bg-background-dark text-foreground-dark rounded px-4 py-2 font-bold grow-0">Decline</button>
					<button className="bg-brand text-background-dark rounded px-4 py-2 font-bold grow-0">Accept</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsentBanner;