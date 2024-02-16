import { save } from "../../storage.js";
import { API_AUTH, API_BASE, API_LOGIN } from "../constants.js";

// // login user function
export async function loginUser(email, password) {
	const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
		headers: {
			"Content-Type": "application/json"
		},
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