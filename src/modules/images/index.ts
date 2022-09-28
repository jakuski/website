import { StaticImageData } from "next/image";

import imageProjectCookbookCover from "@/content/_images/projects/uni-y3-cookbook/cookbook_cover.jpg";
import imageProjectClockRings from "@/content/_images/projects/uni-y3-spectrum-clock/rings.png";

interface Image {
	src: StaticImageData;
	alt: string;
}

const images: Record<string, Image> = {
	"p/cookbook/cookbook_cover": {
		src: imageProjectCookbookCover,
		alt: "Cover of 'How to cook and not die trying' cookbook",
	},
	"p/spectrum-clock/rings": {
		src: imageProjectClockRings,
		alt: "Coloured rings"
	}
};

export default images;

export type {
	Image
};