// TODO Fix or remove Figma Embeds

import React from "react";

import { domain } from "@/config";

interface FigmaEmbedProps {
	url: string;
}

export const FIGMA_EMBED_BASE_URL = "https://www.figma.com/embed";
export const FIGMA_EMBEDDABLE_URL_REGEX =
	/https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

const buildFigmaEmbedUrl = (props: FigmaEmbedProps): string => {
	const url = new URL(FIGMA_EMBED_BASE_URL);

	url.searchParams.append("embed_host", domain);
	url.searchParams.append("url", props.url);

	return url.toString();
};

const FigmaEmbed: React.FC<FigmaEmbedProps> = props => {
	const src = buildFigmaEmbedUrl(props);

	return (
		<div className="bg-pure-black rounded-md select-none">
			<div>
				<iframe
					src={src}
					className="w-full aspect-video"
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default FigmaEmbed;
