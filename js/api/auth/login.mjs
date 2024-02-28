import { save } from "../../storage/save.mjs"
import { API_BASE, API_AUTH, API_LOGIN } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

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

	