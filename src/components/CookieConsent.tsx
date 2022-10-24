import { Privacy } from "@/routes";
import Link from "next/link";
import { CSSProperties, MouseEventHandler, useCallback, useState } from "react";

const cookieClickerDefaultSize = 24;
const CookieClickerEasterEgg = () => {
	const [size, setSize] = useState(cookieClickerDefaultSize);
	const onClick = useCallback(() => {
		setSize(size + 2);
	}, [size]);
	const onContextMenu = useCallback<MouseEventHandler<HTMLDivElement>>(e => {
		e.stopPropagation();
		e.preventDefault();

		setSize(cookieClickerDefaultSize);
	}, []);

	const style: CSSProperties = {fontSize: size + "px", lineHeight: "75%"};

	return <div
		className="flex items-center justify-center cursor-pointer select-none"
		style={style}
		onClick={onClick}
		onContextMenu={onContextMenu}
		data-psst="Click me!"
	>🍪</div>;
};

const CookieConsentBanner = () => {
	return (
		<div className="fixed bottom-4 left-0 right-0 bg-foreground-dark text-white text-center p-4 max-w-2xl mx-auto rounded shadow-lg z-50">
			<div className="flex gap-6 justify-between">
				<div className="flex flex-row gap-4 text-background-dark">
					<CookieClickerEasterEgg />
					<div className="flex flex-col items-start justify-center">
						<div className="font-bold">Cookies <span className="opacity-50 text-xs">(the boring ones)</span></div>
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
					<button className="border-background-dark border text-background-dark rounded px-4 py-2 font-bold grow-0">Settings</button>
					<button className="bg-brand text-background-dark rounded px-4 py-2 font-bold grow-0">Accept</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsentBanner;