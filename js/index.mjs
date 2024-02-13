// All API keys. Export so the can be imported in other modules
export const API_BASE = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";

// export const API_KEY = ""


//local storage functions
export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
	return JSON.parse(localStorage.getItem(key));
}

// //get posts function
// export async function getPosts() {
// 	const response = await fetch(API_BASE + "/social/posts", {
// 		headers: {
// 			Authorization: `Bearer ${load("token")}`
// 		}
// 	});
// 	return await response.json();
// }

// function getAPIKey
export async function getAPIKey() {
	const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${load("token")}`
		},
		body: JSON.stringify({
			name: "Test Key"
		})
	}); 

	if (response.ok) {
		return await response.json();
	}

	console.error(await response.json());
	throw new Error("Could not register for an API key");
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

	console.log(response);
	const data = response.json();
	console.log(data);

	if (response.ok) {
		return data;	
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
			const data = await response.json();
			const { accessToken, ...profile } = await data.data;
			save("token", accessToken);
			save("profile", profile);
			return profile;
		}
		throw new Error("Could not login");
	}


//create an API key
// export async function createAPIKey() {
// 	  const response = await fetch(API_BASE + API_AUTH + API_KEY_URL, {
// 	    method: "POST",
// 	    headers: {
// 	      "Content-Type" : "application/json",
// 	      Authorization: `Bearer ${load("token")}`,
// 	    },
// 	    body: JSON.stringify({
// 	      name: "Test API key",
// 	    })
// 	  });
	
// 	  if (response.ok) {
// 	    return await response.json();
// 	  }
// 	  console.log(response);
	
// 	  console.error(await response.json());
// 	  throw new Error("Could not register for an API key");
// 	}

export async function onAuth(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	registerUser(name, email, password);
	loginUser(email, password);
}

// 	const posts = await getPosts();
// 	console.log(posts);
// }

function setAuthListener() {
	document.forms.auth.addEventListener("submit", onAuth);
}

setAuthListener();

// getAPIKey().then(console.log)

