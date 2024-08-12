import { API_BASE, API_AUTH, API_REGISTER } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

//register user function
export async function register(name, email, password) {
	const response = await authFetch(API_BASE + API_AUTH + API_REGISTER, {
			method: "POST",
			body: JSON.stringify({ name, email, password }),
	});

	if (response.ok) {
		return await response.json();	
	}
	throw new Error("Could not register the account");
}
