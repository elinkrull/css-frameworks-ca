import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";

const method = "delete";

export async function deletePost(id) {
	const deletePostURL = `${API_BASE}${API_POSTS}/${id}`;

	const response = await authFetch(deletePostURL, {
		method
	})

	return await response.json();
}
