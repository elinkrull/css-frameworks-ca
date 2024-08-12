import { headers } from "./headers.mjs";

export async function authFetch(url, options = {}) {
	return fetch(url, {
		...options,
		headers: headers(Boolean(options.body)),
	});
}

// We will need to make use of the optional options object so that we can change our method to POST so we can include our payload (data we’re sending) in the body.