//
// @TODO Finish this
// Top level await would be nice?
//

import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import type {  Config } from "@markdoc/markdoc";

getContentIDs(ContentDirectoryNames.PARTIALS);

const partialsConfig: Config = {
	partials: {
		"example_name.md": /* parse("file content") */ ""
	}
};

export default partialsConfig;