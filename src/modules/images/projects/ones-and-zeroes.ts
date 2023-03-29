import { ImageObject } from "@/modules/images";

import imageCover from "@/content/_images/projects/flipside-ones-and-zeroes/cover.jpg";
import imageStyleKit from "@/content/_images/projects/flipside-ones-and-zeroes/stylekit.png";
import imageGraph from "@/content/_images/projects/flipside-ones-and-zeroes/graph.jpg";

const images: ImageObject = {
	"p/ones-and-zeros/cover": {
		src: imageCover,
		alt: "The logo of Ones and Zeros, a digital upskilling platform."
	},
	"p/ones-and-zeros/stylekit": {
		src: imageStyleKit,
		alt: "A sheet of styles and components."
	},
	"p/ones-and-zeroes/graph": {
		src: imageGraph,
		alt: "A graph showing digital competency in relation to age and screen time."
	}
};

export default images;
