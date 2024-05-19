import * as post from "../api/posts/index.mjs";


export async function filterPosts() {
	const posts = await post.getPosts();
	const data = posts.data;
	console.log(data);
			
	const filteredPosts = data.filter(post => post.body && post.body.trim() !== '');

	return filteredPosts;
}

export async function filterPostsListener() {
	const filterButton = document.getElementById("filter-image-btn");
	
	filterButton.addEventListener("click", async () => {
		try {
			const filteredPosts = await filterPosts();
			console.log(filteredPosts);
		} catch (error) {
			console.error("Error filtering posts", error);
		}
	});
}