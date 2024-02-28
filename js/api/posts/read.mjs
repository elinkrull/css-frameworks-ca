import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

//get posts function
export async function getPosts() {
	const response = await authFetch(API_BASE + API_POSTS);
	return await response.json();
}


export async function getPost(id) {}