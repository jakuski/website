import { useScript } from "@/modules/script-handler";
import React from "react";

interface VimeoEmbedProps {
	// Video ID
	id: string;
	hash?: string; // for private video

	// Functionality
	autoplay?: boolean;
	loop?: boolean;

	// Customisation
	color?: string;
	hidePortrait?: boolean;
	hideTitle?: boolean;
	hideByLine?: boolean;
}

const VIMEO_PLAYER_URL = "https://player.vimeo.com/video/";

const buildVimeoEmbedUrl = (props: VimeoEmbedProps): string => {
	const url = new URL(VIMEO_PLAYER_URL + props.id);

	// todo

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

	return <div className=" bg-pure-black rounded-md select-none">
		<div>
			<iframe
				src={VIMEO_PLAYER_URL + props.id}
				className="w-full aspect-video"
				frameBorder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
			/>
		</div>
	</div>;
};

export default VimeoEmbed;