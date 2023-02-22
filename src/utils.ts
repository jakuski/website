export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

export const capitaliseFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
