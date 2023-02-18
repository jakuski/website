import { resolveImage } from "@/modules/images";
import NextImage from "next/image";
import React from "react";
import c from "clsx";

export const Caption: React.FC<
	React.PropsWithChildren<{
		className?: string;
		as?: React.ElementType;
	}>
> = props => {
	const Tag = props.as ?? "figcaption";

	const className = c(
		"italic text-base text-center mt-2 mb-2",
		props.className
	);

	return <Tag className={className}>{props.children}</Tag>;
};

const Image: React.FC<
	React.PropsWithChildren<{
		src: string;
		caption?: string;
		className?: string;
		id?: string;
	}>
> = props => {
	const { src, alt } = resolveImage(props.src);

	let caption = props.caption;

	if (caption === "!ALT") {
		caption = alt;
	}

	return (
		<figure
			className="relative h-full w-full flex mb-4 flex-col"
			style={{ fontSize: 0 }}
		>
			<NextImage
				className="rounded object-cover shadow grow"
				src={src}
				alt={alt}
				placeholder="blur"
			/>
			{caption && <Caption>{caption}</Caption>}
		</figure>
	);
};

export default Image;
