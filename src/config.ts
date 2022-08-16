export const websiteName = "Jakub Staniszewski";
export const domain = "jakub.studio";
export const githubRepo = "jakuski/website";
export const defaultThemeColour = "#d48724";

// Used in footer and <head/> elements.
export const socialHandles = {
	instagram: "jakub.studio",
	twitter: "jakubstudio_",
	linkedin: "jakub-staniszewski",
	vimeo: "jakubstudio"
};

// set document.designMode = "on" when isDev (defined below) is true.
export const useDocumentDesignModeDuringDev = false;

export const isDev = process.env.NODE_ENV === "development";
export const isPreview = process.env.IS_PREVIEW === "true";
export const isProd = process.env.NODE_ENV === "production";