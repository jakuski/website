import { Privacy } from "@/routes";
import Link from "next/link";
import { CSSProperties, MouseEventHandler, useCallback, useState } from "react";

const cookieClickerConstants = {
	DEFAULT_SIZE_PX: 24,
	INCREMENT_PX: 2
};
const CookieClickerEasterEgg = () => {
	const [size, setSize] = useState<number>(cookieClickerConstants.DEFAULT_SIZE_PX);

	const onClick = useCallback(() => {
		setSize(size + cookieClickerConstants.INCREMENT_PX);
	}, [size]);

	// onContextMenu acts as a reset, however there isn't accessible to touch users iirc.
	const onContextMenu = useCallback<MouseEventHandler<HTMLDivElement>>(e => {
		e.stopPropagation();
		e.preventDefault();

		setSize(cookieClickerConstants.DEFAULT_SIZE_PX);
	}, []);

	const style: CSSProperties = {fontSize: size + "px", lineHeight: "75%"};

	return <div
		className="flex items-center justify-center cursor-pointer select-none transition-all duration-150"
		style={style}
		onClick={onClick}
		onContextMenu={onContextMenu}
		data-psst="Click me!"
	>🍪</div>;
};

const CookieConsentBanner = () => {
	return (
		<div className="fixed bottom-2 left-0 right-0 bg-stone-800/80 backdrop-blur-xl backdrop-brightness-75 text-stone-200 text-center p-4 px-6 max-w-3xl mx-auto rounded shadow-lg z-50">
			<div className="flex gap-6 justify-between">
				<div className="flex flex-row gap-4">
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
					<button className="border-stone-500 border text-stone-200 bg-transparent hover:bg-stone-500/20 transition-colors duration-50 rounded px-4 py-2 font-bold grow-0">Settings</button>
					<button className="bg-brand/70 text-white rounded px-4 py-2 font-bold grow-0">Accept all</button>
				</div>
			</div>
		</div>
	);
};

export default CookieConsentBanner;