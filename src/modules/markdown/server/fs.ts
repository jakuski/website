import { readFile } from "fs";
import { resolve } from "path";

export const contentFolder = resolve(process.cwd(), "src", "content");

export const getContentPath = (path: string[]) => resolve(contentFolder, ...path);

const pathIsSafe = (path: string): boolean => {
	if ((!path) || (typeof path !== "string")) return false;
	return path.startsWith(contentFolder); // @TODO I don't believe this is sufficient. Possibly revisit this.
};

const readContentFile = (path: string): Promise<string> => {
	return new Promise((res, rej) => {
		if (!pathIsSafe) return rej(new Error("[modules/markdown/fs#readContentFile]: unsafe path detected"));
	
		readFile(path, {encoding: "utf-8"}, (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};

export default readContentFile;