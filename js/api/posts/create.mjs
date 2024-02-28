import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

const method = "post";

export async function createPost(postData) {
	const createPostURL = API_BASE + API_POSTS;

	const response = await authFetch(createPostURL, {
		method,
		body: JSON.stringify(postData)
	})

	// const post = await response.json();
	// console.log(post);

	return await response.json();
}