import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

const method = "post";


export async function createPost(postData) {
	const createPostURL = `${API_BASE}${API_POSTS}`;
	const response = await authFetch(createPostURL, {
		method,
		body: JSON.stringify(postData)
	})
	return await response.json();
}



export function createPostListener() {
document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("postForm");

    postForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(postForm);
        const postData = {
            title: formData.get("post-title"),
            body: formData.get("post-body"),
			// image: formData.get("post-image"),
            // Add more properties as needed
        };
        try {
            await createPost(postData);
            // Optionally, display a success message or redirect to another page
            console.log("Post created successfully!");
            // Reset the form
            postForm.reset();
        } catch (error) {
            console.error("Error creating post:", error);
            // Optionally, display an error message to the user
        }
    });
});}