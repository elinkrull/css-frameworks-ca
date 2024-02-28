import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";

const method = "delete";

export async function removePost(id) {
	const removePostURL = `${API_BASE}${API_POSTS}/${id}`;

	const response = await authFetch(removePostURL, {
		method
	})

	// const post = await response.json();
	// console.log(post);

	return await response.json();
}