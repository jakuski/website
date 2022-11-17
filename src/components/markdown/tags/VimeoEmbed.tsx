import { useScript } from "@/modules/script-handler";
import React from "react";

// https://developer.vimeo.com/player/sdk/embed
interface VimeoEmbedProps {
	// Video ID
	id: string;
	h?: string; // hash for private videos

	// Functionality
	autoplay?: boolean;
	loop?: boolean;

	// Customisation
	color?: string;
	portrait?: boolean;
	title?: boolean;
	byline?: boolean;
}

const VIMEO_PLAYER_URL = "https://player.vimeo.com/video/";

const buildVimeoEmbedUrl = (props: VimeoEmbedProps): string => {
	const url = new URL(VIMEO_PLAYER_URL + props.id);

	const propsKeys = Object.keys(props) as Array<keyof VimeoEmbedProps>;
	for (const prop of propsKeys) {
		if (prop === "id") continue;
		
		const propData = props[prop];
		if (!propData) continue;

		if (typeof propData === "string") {
			url.searchParams.append(prop,
				// If the prop is color, remove the hash from hex code
				prop === "color" ? propData.replace("#", "") : propData
			);
		} else if (typeof propData === "boolean") {
			url.searchParams.append(prop, Number(propData).toString()); // Converts booleans to numbers, e.g. true -> "1"
		}
	}

	return url.toString();
};

/* const VimeoEmbed: React.FC<VimeoEmbedProps> = props => {
	useScript("vimeo");

	return <div>
		<div style={{padding: "216.73% 0 0 0"}} className="relative">
			<iframe
				src={VIMEO_PLAYER_URL + props.id}
				className="absolute top-0 left-0 w-full h-full"
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
			/>
		</div>
	</div>;
}; */

const VimeoEmbed: React.FC<VimeoEmbedProps> = props => {
	useScript("vimeo");

	const src = buildVimeoEmbedUrl(props);

	return <div className="">
		<div className="bg-pure-black rounded-md overflow-hidden select-none mb-1">
			<iframe
				src={src}
				className="w-full aspect-video rounded-md"
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
			/>
		</div>
	</div>;
};

export default VimeoEmbed;