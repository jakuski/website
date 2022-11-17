/* eslint-disable jsx-a11y/alt-text */
import { resolveImage } from "@/modules/images";
import { useEffect, useId, useRef } from "react";
import Image from "./Image";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumb from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// This is passed to classNames and as a selector for the gallery library
// to add the correct images to the reel.
const galleryImageClassName = "_gallery_image";

const GalleryImage: React.FC<{
	src: string;
}> = props => {
	const { src, alt } = resolveImage(props.src);

	const thumbnailParams = new URLSearchParams([
		["url", src.src],
		["w", "384"], // This is set to 384 and not lower as it's used for the zoom open animation so if a really low quality image is used, the zoom animation doesn't feel quite right.
		["q", "80"]
	]);

	return <a
		href={src.src}
		className={galleryImageClassName + " w-full shadow-sm"}
		data-lg-size={src.width + "-" + src.height}
		data-sub-html={alt}
		data-thumbnail-url={"/_next/image?" + thumbnailParams.toString()}
	>
		<Image src={props.src} />
	</a>;
};

const Gallery: React.FC<React.PropsWithChildren<{}>> = props => {

	return <LightGallery

		speed={180}
		backdropDuration={200}
		startAnimationDuration={200}
		download={false}
		plugins={[lgZoom, lgThumb]}
		exThumbImage="data-thumbnail-url"
		selector={"." + galleryImageClassName}
	>
		<div className="flex gap-2 justify-between w-full mb-2">
			<GalleryImage src="p/cookbook/cookbook_cover"/>
			<GalleryImage src="p/spectrum-clock/rings"/>
		</div>

		<GalleryImage src="p/chivas-regal/hero_1"/>

	</LightGallery>;
};

export default Gallery;