import { AllApps } from "./types";

enum Vendors {
	ADOBE = "Adobe",
	MAXON = "Maxon",
	FIGMA = "Figma"
}

interface SoftwareData {
	vendor: Vendors;
	productName: string;

	// @TODO add these?
	icon?: unknown;
	href?: string;
}

class Program {
	data: SoftwareData;
	constructor(data: SoftwareData) {
		this.data = data;
	}
	get displayName() {
		return `${this.data.vendor} ${this.data.productName}`.trim();
	}
}

const programs: Record<AllApps, Program> = {
	"adobe.cc.after-effects": new Program({
		vendor: Vendors.ADOBE,
		productName: "After Effects"
	}),
	"adobe.cc.dimension": new Program({
		vendor: Vendors.ADOBE,
		productName: "Dimension"
	}),
	"adobe.cc.illustrator": new Program({
		vendor: Vendors.ADOBE,
		productName: "Illustrator"
	}),
	"adobe.cc.indesign": new Program({
		vendor: Vendors.ADOBE,
		productName: "InDesign"
	}),
	"adobe.cc.lightroom-cc": new Program({
		vendor: Vendors.ADOBE,
		productName: "Lightroom CC"
	}),
	"adobe.cc.lightroom-classic": new Program({
		vendor: Vendors.ADOBE,
		productName: "Lightroom Classic"
	}),
	"adobe.cc.photoshop": new Program({
		vendor: Vendors.ADOBE,
		productName: "Photoshop"
	}),
	"adobe.cc.xd": new Program({
		vendor: Vendors.ADOBE,
		productName: "XD"
	}),
	"figma.design": new Program({
		vendor: Vendors.FIGMA,
		productName: "" // Product name is an empty string as I simply want it to say "Figma" instead of "Figma Design"
	}),
	"figma.figjam": new Program({
		vendor: Vendors.FIGMA,
		productName: "FigJam"
	}),
	"maxon.cinema4d": new Program({
		vendor: Vendors.MAXON,
		productName: "Cinema 4D"
	}),
	"maxon.magic-bullet": new Program({
		vendor: Vendors.MAXON,
		productName: "Magic Bullet FX"
	}),
	"maxon.redshift": new Program({
		vendor: Vendors.MAXON,
		productName: "Redshift"
	})
};

export default programs;
