import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// credit/usage: https://twitter.com/shadcn/status/1614692419039105024
export const c = (...inputs: ClassValue[]): string => {
	return twMerge(clsx(inputs));
};

export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

export const capitaliseFirstLetter = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
