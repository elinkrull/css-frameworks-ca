// All API keys. Export so the can be imported in other modules
export const API_KEY = "0ae6fc73-5bc5-4996-b33f-99391a812764";

export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";
export const API_POSTS = "/social/posts";

//local storage functions
export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
	return JSON.parse(localStorage.getItem(key));
}

//get posts function
export async function getPosts() {
	const response = await fetch(API_BASE + "/social/posts", {
		headers: {
			Authorization: `Bearer ${load("token")}`,
			"X-Noroff-API-Key":API_KEY
		}
	});
	return await response.json();
}


//register user function
export async function registerUser(name, email, password) {
	const response = await fetch(API_BASE + API_AUTH + API_REGISTER, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			body: JSON.stringify({ name, email, password }),
	});

	if (response.ok) {
		return await response.json();	
	}
	throw new Error("Could not register the account");
}

// // login user function
export async function loginUser(email, password) {
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


export async function onAuth(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	if (location.pathname.includes("/register")) {
		await registerUser(name, email, password);
	}
	// registerUser(name, email, password);
	loginUser(email, password);

	const posts = await getPosts();
	console.log(posts);
}


function setAuthListener() {
	document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener();

