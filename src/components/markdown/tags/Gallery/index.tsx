import dynamic, { DynamicOptionsLoadingProps } from "next/dynamic";

/* import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumb from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css"; */

import { Caption } from "@/components/markdown/tags/Image";
import { galleryImageClassName } from "./shared";

interface GalleryProps extends React.PropsWithChildren {
	caption?: string;
}

const Fallback: React.FC<DynamicOptionsLoadingProps> = props => {
	return (
		<div className="mb-4">
			<Caption>Loading images...</Caption>
		</div>
	);
};

const GalleryLoader = dynamic<GalleryProps>(
	async () => {
		const { default: LG } = await import("lightgallery/react");
		const { default: lgZoom } = await import("lightgallery/plugins/zoom");
		const { default: lgThumb } = await import("lightgallery/plugins/thumbnail");

		// TS fails to find the CSS files, so we have to ignore it.
		// @ts-ignore
		await import("lightgallery/css/lightgallery.css");
		// @ts-ignore
		await import("lightgallery/css/lg-zoom.css");
		// @ts-ignore
		await import("lightgallery/css/lg-thumbnail.css");

		const LightGalleryWrapper: React.FC<GalleryProps> = props => (
			<LG
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
			</LG>
		);

		return LightGalleryWrapper;
	},
	{
		ssr: false,
		loading: Fallback
	}
);

const Gallery: React.FC<GalleryProps> = props => {
	return (
		<div className="mb-4">
			<GalleryLoader {...props} />
		</div>
	);
};

export default Gallery;
