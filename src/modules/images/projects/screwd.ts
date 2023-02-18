import { ImageObject } from "@/modules/images";

import imageCover from "@/content/_images/projects/uni-y3-screwd/screwd_cover_image.jpg";
import imageMainMenu from "@/content/_images/projects/uni-y3-screwd/screwd_main_menus.jpg";
import imageScrewScans from "@/content/_images/projects/uni-y3-screwd/screwd_screw_scans.jpg";
import imageScrewScanResult from "@/content/_images/projects/uni-y3-screwd/screwd_screw_scan_result.jpg";
import imageIos from "@/content/_images/projects/uni-y3-screwd/screwd_ios.jpg";
import imageErrorState from "@/content/_images/projects/uni-y3-screwd/screwd_error_state.jpg";
import imageDriveSheet from "@/content/_images/projects/uni-y3-screwd/screw_drive_sheet.jpg";

const images: ImageObject = {
	"p/screwd/cover": {
		src: imageCover,
		alt: "screwd app icon"
	},
	"p/screwd/main_menu": {
		src: imageMainMenu,
		alt: "The main pages of the screwd app"
	},
	"p/screwd/screw_scans": {
		src: imageScrewScans,
		alt: "The scanning process of the screwd app"
	},
	"p/screwd/screw_scan_result": {
		src: imageScrewScanResult,
		alt: "The screw scan result page of the screwd app"
	},
	"p/screwd/ios": {
		src: imageIos,
		alt: "How the screwd app would look on iOS"
	},
	"p/screwd/error_state": {
		src: imageErrorState,
		alt: "The error state of the screwd app"
	},
	"p/screwd/drive_sheet": {
		src: imageDriveSheet,
		alt: "A poster detailing screw drives from across the world."
	}
};

export default images;
