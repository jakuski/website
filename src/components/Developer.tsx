import { useDocumentDesignModeDuringDev } from "@/config";
import { useEffect } from "react";

export const DeveloperOnly: React.FC = () => {
	useEffect(() => {
		let designModeEnabled = false;

		if (useDocumentDesignModeDuringDev) {
			document.designMode = "on";
			designModeEnabled = true;
		}

		return () => {
			if (designModeEnabled) {
				document.designMode = "off";
			}
		};
	}, []);

	return null;
};