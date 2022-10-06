import { resolveImage } from "@/modules/images";
import NextImage from "next/image";

const Image: React.FC<React.PropsWithChildren<{
	src: string;
	caption?: string;
}>> = props => {
	const { src, alt } = resolveImage(props.src);

	let caption = props.caption;

	if (caption === "!ALT") {
		caption = alt;
	}

	return <figure className="mb-1">
		<NextImage
			className="rounded"
			src={src}
			alt={alt}
			placeholder="blur"
		/>
		{caption && <figcaption className="italic text-center mt-1 mb-1">{caption}</figcaption>}
	</figure>;
};

export default Image;