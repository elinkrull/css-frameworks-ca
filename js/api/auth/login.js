import { save } from "../../storage.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../constants.js";
import { authFetch } from "../fetch.js";

// // login user function
export async function loginUser(email, password) {
	const response = await authFetch(API_BASE + API_AUTH + API_LOGIN, {
		method: "POST",
		body: JSON.stringify({ email, password })
	});

		if (response.ok) {
			const data = await response.json();
			const { accessToken, ...profile } = data.data;
			save("token", accessToken);
			save("profile", profile);

			 // Redirect to feed.html upon successful login
			window.location.href = "feed/index.html";
			return profile;
		}
		
		throw new Error("Could not login");
	}