import { PropsWithChildren } from "react";

const GalleryRow: React.FC<PropsWithChildren> = ({children}) => {
	return <div className="flex gap-2 justify-between w-full mb-2">
		{children}
	</div>;
};