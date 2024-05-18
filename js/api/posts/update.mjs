import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";


const method = "put";

export async function updatePost(postData) {
	const updatePostURL = `${API_BASE}${API_POSTS}/${postData.id}`;

	const response = await authFetch(updatePostURL, {
		method,
		body: JSON.stringify(postData)
	})

	return await response.json();
}



export function updatePostListener() {
	document.addEventListener("DOMContentLoaded", () => {
		const updateForm = document.getElementById("updateForm");


		updateForm.addEventListener("submit", async (event) => {
			event.preventDefault();
	
			const formData = new FormData(updateForm);
			const postData = {
				title: formData.get("update-title"),
				body: formData.get("update-body"),
				// image: formData.get("post-image"),
				// Add more properties as needed
			};
	
			try {
				await updatePost(postData);
				// Optionally, display a success message or redirect to another page
				console.log("Post updated successfully!");
				// Reset the form
				updateForm.reset();
		
			} catch (error) {
				console.error("Error updating post:", error);
				// Optionally, display an error message to the user
			}
		});
	});}
