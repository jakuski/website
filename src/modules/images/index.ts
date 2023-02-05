import { StaticImageData } from "next/image";

import genericImages from "./generic";
import spectrumClockProjectImages from "./projects/spectrum-clock";
import spotify21ProjectImages from "./projects/spotify21";
import screwdProjectImages from "./projects/screwd";
import chivasRegalProjectImages from "./projects/chivas-regal";

interface Image {
	src: StaticImageData;
	alt: string;
}

type ImageObject = Record<string, Image>;

const allImagesObject: ImageObject = Object.assign({},
	genericImages,
	spotify21ProjectImages,
	spectrumClockProjectImages,
	screwdProjectImages,
	chivasRegalProjectImages
);

export default allImagesObject;

export const resolveImage = (imageName: string): Image => {
	if (!allImagesObject.hasOwnProperty(imageName)) {
		throw Error(`Image '${imageName}' does not exist`);
	}
	return allImagesObject[imageName];
};

export type {
	Image,
	ImageObject
};