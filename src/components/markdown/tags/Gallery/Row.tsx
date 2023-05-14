import { PropsWithChildren } from "react";

const GalleryRow: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="mb-2 flex w-full flex-col justify-between gap-2 md:flex-row">
			{children}
		</div>
	);
};

export default GalleryRow;
