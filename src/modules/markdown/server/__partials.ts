//
// @TODO Finish this
// Top level await would be nice?
//

import type { Config } from "@markdoc/markdoc";

import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";

getContentIDs(ContentDirectoryNames.PARTIALS);

const partialsConfig: Config = {
	partials: {
		"example_name.md": /* parse("file content") */ ""
	}
};

export default partialsConfig;
