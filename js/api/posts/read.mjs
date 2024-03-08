import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";



const generateSinglePostHtml = (post) => {
	console.log(post);

	const postContainer = document.createElement("div");

	const postTitle = document.createElement("h4");
	postTitle.textContent = post.title;

	const postBody = document.createElement("p");
	postBody.textContent = post.body;

	postContainer.appendChild(postTitle, postBody);

	return postContainer;
}


//display posts function
export function displayPosts(posts) {

	const postsDisplayContainer = document.querySelector("#posts-display-container");
	postsDisplayContainer.textContent = "";
	

	posts.forEach((post, index) => {
		const postHtml = generateSinglePostHtml(post);
		postsDisplayContainer.appendChild(postHtml);
	});
}

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

