import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumb from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { Caption } from "@/components/markdown/tags/Image";
import { galleryImageClassName } from "./shared";


const Gallery: React.FC<React.PropsWithChildren<{
	caption?: string;
}>> = props => {
	return <div className="mb-4">
		<LightGallery
			speed={180}
			backdropDuration={200}
			startAnimationDuration={200}
			download={false}
			plugins={[lgZoom, lgThumb]}
			exThumbImage="data-thumbnail-url"
			selector={"." + galleryImageClassName}
			addClass="mb-4"
		>
			{props.children}
			{props.caption && <Caption>{props.caption}</Caption>}
		</LightGallery>
	</div>;
};

export default Gallery;