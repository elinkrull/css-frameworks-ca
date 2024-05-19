import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";

const method = "put";

export async function updatePost(postData) {
	console.log(postData)
	if (!postData.id) {
		throw new Error("Update requires a post ID");
	}

	const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;
	console.log(postData.id);
	
	const response = await authFetch(updatePostURL, {
		method,
		body: JSON.stringify(postData)
	})

	return await response.json();
}

export function updatePostListener(postId) {
console.log(postId)
		const updateForm = document.getElementById("updateForm");


		updateForm.addEventListener("submit", async (event) => {
			event.preventDefault();
	
		
			// const formData = new FormData(updateForm);
			const postData = {
				id: postId,
				title: document.getElementById("update-title").value,
				body: document.getElementById("update-body").value,
				// image: formData.get("post-image"),
				// Add more properties as needed
			};

			console.log(postData)
	
			try {
				await updatePost(postData);
				window.location.href = `/post/index.html?id=${postId}`
				// Optionally, display a success message or redirect to another page
				console.log("Post updated successfully!");
				// Reset the form
				updateForm.reset();
		
			} catch (error) {
				console.error("Error updating post:", error);
				// Optionally, display an error message to the user
			}
		});
}
