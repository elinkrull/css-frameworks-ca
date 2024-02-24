import { save } from "../../storage/save.js"
import { API_BASE, API_AUTH, API_LOGIN } from "../constants.js";
import { authFetch } from "../fetch.js";

// // login user function
export async function login(email, password) {
	const response = await authFetch(API_BASE + API_AUTH + API_LOGIN, {
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

	