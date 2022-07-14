import { readFile } from "fs";
import { join, sep } from "path";

export const contentFolder = join(process.cwd(), "src", "content");

export const getContentPath = (path: string[]) => join(contentFolder, ...path);

export const pathSeperator = sep;

const readContentFile = (path: string): Promise<string> => {
	return new Promise((res, rej) => {
		readFile(path, {encoding: "utf-8"}, (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};

export default readContentFile;