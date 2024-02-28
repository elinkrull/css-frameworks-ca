import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";


const method = "put";

export async function updatePost(postData) {
	const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;

	const response = await authFetch(updatePostURL, {
		method,
		body: JSON.stringify(postData)
	})

	// const post = await response.json();
	// console.log(post);

	return await response.json();
}