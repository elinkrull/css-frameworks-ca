import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";

//get posts function
export async function getPosts() {

	const response = await authFetch(`${API_BASE}${API_POSTS}`);
	
	if (response.ok) {
		const postData = await response.json();
		console.log(postData);
		return postData;
	} else {
		throw new Error("Failed to fetch posts");
	}
}
