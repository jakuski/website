import { readFile } from "fs";
import { join } from "path";
type PathSegments = string[];

export const contentFolder = join(process.cwd(), "src", "content");

export const readContentFile = (...path: PathSegments): Promise<string> => {
	const filePath = join(contentFolder, ...path);

	return new Promise((res, rej) => {
		readFile(filePath, {encoding: "utf-8"}, (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};