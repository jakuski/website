import { resolveImage } from "@/modules/images";
import NextImage from "next/future/image";

const Image: React.FC<React.PropsWithChildren<{
	src: string;
	caption?: string;
	className?: string;
	id?: string
}>> = props => {
	const { src, alt } = resolveImage(props.src);

	let caption = props.caption;

	if (caption === "!ALT") {
		caption = alt;
	}

	return <figure className="" style={{fontSize: 0}}>
		<NextImage
			className="rounded"
			src={src}
			alt={alt}
			placeholder="blur"
		/>
		{caption && <figcaption className="italic text-base text-center mt-1 mb-1">{caption}</figcaption>}
	</figure>;
};

export default Image;