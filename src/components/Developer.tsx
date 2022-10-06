import { useDocumentDesignModeDuringDev } from "@/config";
import { useEffect } from "react";

export const DeveloperOnly: React.FC = () => {
	useEffect(() => {
		let designModeEnabled = false;

		if (useDocumentDesignModeDuringDev) {
			document.designMode = "on";
			designModeEnabled = true;
		}

		if (typeof document.getElementById("__NEXT_DATA__")?.innerText === "string") {
			console.log("Next Data ", JSON.parse(document.getElementById("__NEXT_DATA__")?.innerText as string));
		}

		return () => {
			if (designModeEnabled) {
				document.designMode = "off";
			}
		};
	}, []);

	return null;
};