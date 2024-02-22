import { API_BASE, API_POSTS } from "../constants.js";
import { authFetch } from "../fetch.js";

//get posts function
export async function getPosts() {
	const response = await authFetch(API_BASE + API_POSTS)
	const posts = await response.json();
	return posts;
}
