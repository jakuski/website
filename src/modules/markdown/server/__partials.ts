//
// @TODO Finish this
// Top level await would be nice?
//

import { ContentDirectoryNames, getContentIDs } from "@/modules/fs";
import { parse, Config } from "@markdoc/markdoc";

getContentIDs(ContentDirectoryNames.PARTIALS);

const partialsConfig: Config = {
	partials: {
		"header.md": parse("file content")
	}
};

export default partialsConfig;