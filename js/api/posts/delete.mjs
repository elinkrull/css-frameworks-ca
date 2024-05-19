import { authFetch } from "../authfetch.mjs";
import { API_BASE, API_POSTS } from "../constants.mjs";

const method = "delete";

async function deletePost(id) {
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
	
        console.log("Post deleted successfully:", response);

    } catch (error) {
        
        console.error("Error deleting post:", error);
    }
});
};
