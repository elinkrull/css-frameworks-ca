import { headers } from "./headers.mjs";

export async function authFetch(url, options = {}) {
	return fetch(url, {
		...options,
		headers: headers(Boolean(options.body)),
	});
}


// The HTTP POST request is used to send data to a specified destination.

// The data we send is typically referred to as the payload.

// We will need to make use of the optional options object so that we can change our method to POST so we can include our payload (data we’re sending) in the body.