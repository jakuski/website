import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumb from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// This is passed to classNames and as a selector for the gallery library
// to add the correct images to the reel.
export const galleryImageSelectorName = "_gallery_image";

const Gallery: React.FC<React.PropsWithChildren<{}>> = props => {
	return <LightGallery
		speed={180}
		backdropDuration={200}
		startAnimationDuration={200}
		download={false}
		plugins={[lgZoom, lgThumb]}
		exThumbImage="data-thumbnail-url"
		selector={"." + galleryImageSelectorName}
	>
		{props.children}
	</LightGallery>;
};

export default Gallery;