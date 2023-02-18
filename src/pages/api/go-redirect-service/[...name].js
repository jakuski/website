import Data from "./data.json";

export default function handler(req, res) {
	const name = req.query.name.join("/").replace(".html", ""); // < legacy website would accept .html redirects

	const redirectUrl = Data.links[name];

	if (!redirectUrl || Data.tempDisable[name]) return res.status(404).end();

	res.redirect(302, redirectUrl);
}
