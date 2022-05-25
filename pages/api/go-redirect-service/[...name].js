import Data from "./data.json";

console.log(Data);



export default function handler(req, res) {
	const name = req.query.name.join("/").replace(".html", ""); // < legacy website would accept .html redirects

	const redirectUrl = Data[name];

	if (!redirectUrl) return res.status(404).end("Not Found");

	return res.redirect(301, redirectUrl);
}