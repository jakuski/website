import { ImageObject } from "@/modules/images";

import imageRings from "@/content/_images/projects/uni-y3-spectrum-clock/cover.png";
// Initial ideas
import imageInitIdea1 from "@/content/_images/projects/uni-y3-spectrum-clock/init_idea_1.png";
import imageInitIdea2 from "@/content/_images/projects/uni-y3-spectrum-clock/init_idea_2.png";
import imageInitIdea3 from "@/content/_images/projects/uni-y3-spectrum-clock/init_idea_3.png";
import imageInitIdea4 from "@/content/_images/projects/uni-y3-spectrum-clock/init_idea_4.png";

// Development
import imagePalette from "@/content/_images/projects/uni-y3-spectrum-clock/palette.png";
import imageClockDevelopment from "@/content/_images/projects/uni-y3-spectrum-clock/clock_development.png";
import imageAppDevelopment from "@/content/_images/projects/uni-y3-spectrum-clock/app_development_1.png";

// CSS
import imageCSS1 from "@/content/_images/projects/uni-y3-spectrum-clock/gradient_css_compute_1.jpg";
import imageCSS2 from "@/content/_images/projects/uni-y3-spectrum-clock/gradient_css_compute_2.jpg";

// Finals
import imageFinal1 from "@/content/_images/projects/uni-y3-spectrum-clock/finals_1.png";
import imageFinal2 from "@/content/_images/projects/uni-y3-spectrum-clock/finals_2.png";
import imageFinal3 from "@/content/_images/projects/uni-y3-spectrum-clock/finals_3.jpg";

const images: ImageObject = {
	// Cover Image
	"p/spectrum-clock/rings": {
		src: imageRings,
		alt: "Coloured rings"
	},
	"p/spectrum-clock/init-ideas/1": {
		src: imageInitIdea1,
		alt: "A slide showcasing an app which utilised password hashing but for time strings"
	},
	"p/spectrum-clock/init-ideas/2": {
		src: imageInitIdea2,
		alt: "A slide showcasing an app which showed the time as blocks of colour"
	},
	"p/spectrum-clock/init-ideas/3": {
		src: imageInitIdea3,
		alt: "A slide showcasing an app which showed human's impact on the climate by counting up by the second, our effects that we have on the climate"
	},
	"p/spectrum-clock/init-ideas/4": {
		src: imageInitIdea4,
		alt: "A slide showcasing an app where users could anonymously post anything that happened to them that day and read other people's posts."
	},
	"p/spectrum-clock/palette": {
		src: imagePalette,
		alt: "Palette of colours with their assigned numbers",
	},
	"p/spectrum-clock/clock_dev": {
		src: imageClockDevelopment,
		alt: "Development of the clock"
	},
	"p/spectrum-clock/app_dev/1": {
		src: imageAppDevelopment,
		alt: "Multiple screenshots of a clock user interface being developed"
	},

	// CSS Development
	"p/spectrum-clock/css_dev/1": {
		src: imageCSS1,
		alt: "Psuedo code for how to generate a overlapping CSS conic gradient"
	},
	"p/spectrum-clock/css_dev/2": {
		src: imageCSS2,
		alt: "A visual diagram of an overlapping CSS conic gradient"
	},

	// Finals
	"p/spectrum-clock/finals/1": {
		src: imageFinal1,
		alt: "3 smart phones showcasing different sections of The Spectrum Clock app/website"
	},
	"p/spectrum-clock/finals/2": {
		src: imageFinal2,
		alt: "Multiple smart phones showcasing different sections of The Spectrum Clock app/website"
	},
	"p/spectrum-clock/finals/3": {
		src: imageFinal3,
		alt: "A desktop and smart phones showcasing a responsive design of The Spectrum Clock app/website"
	},
};

export default images;