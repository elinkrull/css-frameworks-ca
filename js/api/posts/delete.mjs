import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";

const method = "delete";

export async function deletePost(id) {
	const deletePostURL = `${API_BASE}${API_POSTS}/${id}`;
	const response = await authFetch(deletePostURL, {
		method
	})
	return await response.json();
}


// Add event listener to the delete button
export function deletePostListener(id) {

const deleteButton = document.getElementById("delete-btn");

deleteButton.addEventListener("click", async () => {
    try {
		await deletePost(id)
        // If the deletion is successful, you can log the response or perform any other action
        console.log("Post deleted successfully:", response);

        // Optionally, you can redirect the user to another page or update the UI
    } catch (error) {
        // Handle errors, such as displaying an error message or logging the error
        console.error("Error deleting post:", error);
    }
});
};
