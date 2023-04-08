import { ImageObject } from "@/modules/images";

import imageCover from "@/content/_images/projects/flipside-ones-and-zeroes/cover.jpg";
import imageStyleKit from "@/content/_images/projects/flipside-ones-and-zeroes/stylekit.png";
import imageGraph from "@/content/_images/projects/flipside-ones-and-zeroes/graph.jpg";

import iamgeWireframes1 from "@/content/_images/projects/flipside-ones-and-zeroes/wireframes-1.jpg";
import iamgeWireframes2 from "@/content/_images/projects/flipside-ones-and-zeroes/wireframes-2.jpg";
import imageLofi from "@/content/_images/projects/flipside-ones-and-zeroes/lofi.png";
import imageHifiDev from "@/content/_images/projects/flipside-ones-and-zeroes/hifi-dev.png";
import imageHifiDevFinal from "@/content/_images/projects/flipside-ones-and-zeroes/hifi-dev-final.png";

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
	},
	"p/ones-and-zeroes/wireframes-1": {
		src: iamgeWireframes1,
		alt: "Wireframes of the app (home & search)."
	},
	"p/ones-and-zeroes/wireframes-2": {
		src: iamgeWireframes2,
		alt: "Wireframes of the app (learning)."
	},
	"p/ones-and-zeroes/lofi": {
		src: imageLofi,
		alt: "In-development low-fidelity designs of the app."
	},
	"p/ones-and-zeroes/hifi-dev": {
		src: imageHifiDev,
		alt: "In-development high-fidelity designs of the app."
	},
	"p/ones-and-zeroes/hifi-dev-final": {
		src: imageHifiDevFinal,
		alt: "In-development high-fidelity designs of the app."
	}
};

export default images;
