import { readFile, readdir } from "fs";
import { resolve, basename } from "path";

export const fileShouldBeIgnored = (filename: string): boolean => {
	return filename.startsWith("_");
};
export const fileIsSafe = (filename: string): boolean => {
	return !fileShouldBeIgnored(filename);
};
export const pathIsSafe = (path: string): boolean => {
	if (!path || typeof path !== "string") return false;
	return path.startsWith(contentDirectory); // @TODO I don't believe this is sufficient. Possibly revisit this.
};

export const contentDirectory = resolve(process.cwd(), "src", "content");
export enum ContentDirectoryNames {
	ROOT = "root",
	BLOG = "blog",
	PROJECTS = "projects",
	PARTIALS = "_partials"
}
const _getContentPath = (path: string[]) => resolve(contentDirectory, ...path);

export const getContentIDs = (
	directory: ContentDirectoryNames
): Promise<string[]> => {
	return new Promise((res, rej) => {
		readdir(
			_getContentPath([directory]),
			{ encoding: "utf-8", withFileTypes: true },
			(err, data) => {
				if (err) return rej(err);
				// This set of functions below could probably be optimised better instead of this chain
				// but since this will be ran server side and only on start up, performance isn't a huge
				// concern here. Speed in dev environments could be affected?
				const result = data
					.filter(dirent => dirent.isFile()) // Filter out directories and other non basic file types.
					.map(dirent => basename(dirent.name, ".mdoc")) // Change Dirent { name: "about.md" } to "about"
					.filter(fileIsSafe); // Filter out any files that start with _

				return res(result);
			}
		);
	});
};

export const readContentFile = (
	directory: ContentDirectoryNames,
	filename: string
): Promise<string> => {
	const path = _getContentPath([directory, filename]);

	return new Promise((res, rej) => {
		if (!pathIsSafe(path))
			return rej(
				new Error("[modules/markdown/fs#readContentFile]: unsafe path detected")
			);

		readFile(path, { encoding: "utf-8" }, (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};
