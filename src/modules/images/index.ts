import { StaticImageData } from "next/image";

import genericImages from "./generic";
import chivasRegalProjectImages from "./projects/chivas-regal";
import onesAndZeroesProjectImages from "./projects/ones-and-zeroes";
import screwdProjectImages from "./projects/screwd";
import spectrumClockProjectImages from "./projects/spectrum-clock";
import spotify21ProjectImages from "./projects/spotify21";
import wipProjectsImages from "./projects/wip";

interface Image {
	src: StaticImageData;
	alt: string;
}

type ImageObject = Record<string, Image>;

const allImagesObject: ImageObject = Object.assign(
	{},
	genericImages,
	spotify21ProjectImages,
	spectrumClockProjectImages,
	screwdProjectImages,
	chivasRegalProjectImages,
	onesAndZeroesProjectImages,
	wipProjectsImages
);

export default allImagesObject;

export const resolveImage = (imageName: string): Image => {
	if (!allImagesObject.hasOwnProperty(imageName)) {
		throw Error(`Image '${imageName}' does not exist`);
	}
	return allImagesObject[imageName];
};

export type { Image, ImageObject };
