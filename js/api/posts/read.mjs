import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

//get posts function
export async function getPosts() {
	const response = await authFetch(API_BASE + API_POSTS);
	return await response.json();
}


export async function getPost(id) {
	//add error handling
	// const response = await authFetch`${API_BASE}${API_POSTS}/${id}`;
	// return await response.json();
	const getPostURL = `${API_BASE}${API_POSTS}/${id}`;

	const response = await authFetch(getPostURL)

	return await response.json();
}