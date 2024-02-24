import { login } from "../../api/auth/login.js";
import { register } from "../../api/auth/register.js";
import { getPosts } from "../../api/posts/get.js";

export async function onAuth(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	if (location.pathname.includes("/register")) {
		await register(name, email, password);
	}
	// registerUser(name, email, password);
	login(email, password);

	const posts = await getPosts();
	console.log(posts);
}