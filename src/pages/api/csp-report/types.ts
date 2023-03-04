/* {
	"csp-report": {
		"blocked-uri": "http://example.com/css/style.css",
		"disposition": "report",
		"document-uri": "http://example.com/signup.html",
		"effective-directive": "style-src-elem",
		"original-policy": "default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports",
		"referrer": "",
		"status-code": 200,
		"violated-directive": "style-src-elem"
	}
  } */

export type CspReport = {
	"csp-report": {
		blockedUri: string;
		disposition: string;
		documentUri: string;
		effectiveDirective: string;
		originalPolicy: string;
		referrer: string;
		statusCode: number;
		violatedDirective: string;

		// Optional
		columnNumber?: number;
		lineNumber?: number;
		scriptSample?: string;
		sourceFile?: string;
	};
};
