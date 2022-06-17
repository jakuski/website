import Data from "./data.json";
import axios from "axios";

export default function handler(req, res) {
	const name = req.query.name.join("/").replace(".html", ""); // < legacy website would accept .html redirects

	const redirectUrl = Data.links[name];

	if (!redirectUrl || (Data.tempDisable[name])) return res.status(404).end();

	/* 	try {
		if (req.query.s) {
			const publicToken = "80012d85736117b337fbb36f2ff51d68",
				sources = {
					i: "Instagram",
					l: "LinkedIn",
					t: "Twitter",
					p: "Portfolio",
					v: "Vimeo"
				};
	
			const sourceParam = req.query.s;
	
			const sourcePrettified = sources[sourceParam];
	
			axios({
				url: "https://api.logsnag.com/v1/log",
				method: "post",
				headers: {
					Authorization: "Bearer " + publicToken,
				},
				data: {
					project: "jakub-studio-website",
					channel: "redirect-source-tracking",
					event: `Visitor from ${sourcePrettified || sourceParam} to ${req.query.name}`,
					description: "Original Parameter: " + sourceParam + "\nDate: " + new Date().toUTCString(),
					icon: "✈",
				}
			}).then(resp => {
				console.log("tracking request response:");
				console.log(resp);
			}).catch(console.error);
		}
	} catch (e) { console.error(e); } */

	res.redirect(302, redirectUrl);
}