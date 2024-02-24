import { save } from "../../storage/save.js"
import { API_BASE, API_AUTH, API_LOGIN } from "../constants.js";

// // login user function
export async function login(email, password) {
	const response = await fetch(API_BASE + API_AUTH + API_LOGIN, {
		headers: {
			"Content-Type": "application/json"
		},
		method: "POST",
		body: JSON.stringify({ email, password })
	});

	console.log(response);

		if (response.ok) {
			const { accessToken, ...profile } = (await response.json()).data;
			save("token", accessToken);
			save("profile", profile);
			return profile;
		}
		throw new Error("Could not login");
	}

	