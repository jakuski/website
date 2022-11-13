import { ImageObject } from "@/modules/images";

import imageRings from "@/content/_images/projects/uni-y3-spectrum-clock/cover.png";
import imageProjectClockPalette from "@/content/_images/projects/uni-y3-spectrum-clock/palette.png";
import imageProjectClockDevelopment from "@/content/_images/projects/uni-y3-spectrum-clock/clock_development.png";

const images: ImageObject = {
	"p/spectrum-clock/palette": {
		src: imageProjectClockPalette,
		alt: "Palette of colours with their assigned numbers",
	},
	"p/spectrum-clock/rings": {
		src: imageRings,
		alt: "Coloured rings"
	},
	"p/spectrum-clock/clock_dev": {
		src: imageProjectClockDevelopment,
		alt: "Development of the clock"
	},
};

export default images;