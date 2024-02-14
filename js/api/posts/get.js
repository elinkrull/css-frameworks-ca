import { API_BASE, API_POSTS } from "../constants.js";
import { load } from "../../storage.js"

// //get posts function
export async function getPosts() {
	const response = await fetch(API_BASE + API_POSTS, {
		headers: {
			Authorization: `Bearer ${load("token")}`,
			"X-Noroff-API-Key": API_KEY
		}
	});
	return await response.json();
}

	const posts = await getPosts();
    console.log(posts);
