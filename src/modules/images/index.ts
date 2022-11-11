import { StaticImageData } from "next/image";

//
// Refactor desperately needed
//

import imageGenericLogo from "@/content/_images/generic/logo.png";

import imageProjectCookbookCover from "@/content/_images/projects/uni-y3-cookbook/cookbook_cover.jpg";

import imageProjectClockRings from "@/content/_images/projects/uni-y3-spectrum-clock/cover.png";
import imageProjectClockPalette from "@/content/_images/projects/uni-y3-spectrum-clock/palette.png";
import imageProjectClockDevelopment from "@/content/_images/projects/uni-y3-spectrum-clock/clock_development.png";

import imageProjectChivasHero from "@/content/_images/projects/uni-y3-chivas-regal/hero_closeup.jpg";

import imageProjectScrewdMockup from "@/content/_images/projects/uni-y3-screwd/mockup.jpg";

import imageProjectSpotifyPostcodesCover from "@/content/_images/projects/uni-y2-spotify/project_cover.jpg";

interface Image {
	src: StaticImageData;
	alt: string;
}

const images: Record<string, Image> = {
	"g/logo": {
		src: imageGenericLogo,
		alt: "Jakub Staniszewski's Logo, a beanie and glasses"
	},
	/* Cookbook */
	"p/cookbook/cookbook_cover": {
		src: imageProjectCookbookCover,
		alt: "Cover of 'How to cook and not die trying' cookbook",
	},

	/* Spectrum Clock */
	"p/spectrum-clock/palette": {
		src: imageProjectClockPalette,
		alt: "Palette of colours with their assigned numbers",
	},
	"p/spectrum-clock/rings": {
		src: imageProjectClockRings,
		alt: "Coloured rings"
	},
	"p/spectrum-clock/clock_dev": {
		src: imageProjectClockDevelopment,
		alt: "Development of the clock"
	},

	/* Chivas Regal */
	"p/chivas-regal/hero_1": {
		src: imageProjectChivasHero,
		alt: "Chivas Regal logo imprinted on a box"
	},

	/* Screwd */
	"p/screwd/mockup_1": {
		src: imageProjectScrewdMockup,
		alt: "Phones showcasing screw'd user interface"
	},

	/* Spotify Postcodes */
	"p/spotify21/cover": {
		src: imageProjectSpotifyPostcodesCover,
		alt: "A globe and text saying 'Post Codes'"
	}
};

export default images;

export const resolveImage = (imageName: string): Image => {
	if (!images.hasOwnProperty(imageName)) {
		throw Error(`Image '${imageName}' does not exist`);
	}
	return images[imageName];
};

export type {
	Image
};