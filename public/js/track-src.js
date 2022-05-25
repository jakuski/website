
(function () {
	const publicToken = "80012d85736117b337fbb36f2ff51d68",
		dnt = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack,
		sources = {
			i: "Instagram",
			l: "LinkedIn",
			t: "Twitter",
			p: "Portfolio",
			v: "Vimeo"
		};

	// Respects DoNotTrack requests.
	if (dnt == "1" && dnt == "yes") return;

	const sourceParam = new URL(location.href).searchParams.get("s");
	if (!sourceParam) return;

	const sourcePrettified = sources[sourceParam];

	fetch("https://api.logsnag.com/v1/log", {
		method: "POST",
		headers: {
			Authorization: "Bearer " + publicToken,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			project: "jakub-studio-website",
			channel: "source-tracking",
			event: "Visitor from " + (sourcePrettified || sourceParam),
			description: "Original Parameter: " + sourceParam + "\nDate: " + new Date().toUTCString(),
			icon: "✈",
		})
	}).catch(console.error);
})();