import imageProjectCookbookCover from "@/content/_images/projects/cookbook/cookbook_cover.jpg";
import { StaticImageData } from "next/image";

interface Image {
	src: StaticImageData;
	alt: string;
}

const images: Record<string, Image> = {
	"p/cookbook/cookbook_cover": {
		src: imageProjectCookbookCover,
		alt: "Cover of 'How to cook and not die trying' cookbook",
	},
};

export default images;

export type {
	Image
};