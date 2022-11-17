/* eslint-disable jsx-a11y/alt-text */
// ^ This line is here as the Image component imported below
// handles alt tags for us.

import { resolveImage } from "@/modules/images";
import { galleryImageSelectorName } from ".";
import Image from "@/components/markdown/tags/Image";

const GalleryImage: React.FC<{
	src: string;
}> = props => {
	const { src, alt } = resolveImage(props.src);

	const thumbnailParams = new URLSearchParams([
		["url", src.src],
		// The width (w) parameter is set to 384 and not lower as it's used
		// for the zoom open animation so if a really low quality image is used,
		// the zoom animation will enlarge the low quality image and doesn't look good.
		["w", "384"],
		
		["q", "80"]
	]);

	return <a
		href={src.src}
		className={galleryImageSelectorName + " w-full shadow-sm"}
		data-lg-size={src.width + "-" + src.height}
		data-sub-html={alt}
		data-thumbnail-url={"/_next/image?" + thumbnailParams.toString()}
	>
		<Image src={props.src} />
	</a>;
};

export default GalleryImage;