export const isDev = process.env.NODE_ENV === "development";
// For isPreview to work, IS_PREVIEW needs to be declared in process.env for just preview processes on Vercel.
export const isPreview = process.env.IS_PREVIEW === "true";
export const isProd = process.env.NODE_ENV === "production";