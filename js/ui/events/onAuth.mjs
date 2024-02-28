import { login } from "../../api/auth/login.mjs";
import { register } from "../../api/auth/register.mjs";
import { getPosts } from "../../api/posts/read.mjs";
import { updatePost } from "../../api/posts/update.mjs";
import { removePost } from "../../api/posts/delete.mjs";
import { createPost } from "../../api/posts/create.mjs";

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

createPost({
	title: "This is a test",
	body: "this is a body test"
});


updatePost({
	id: 572,
	title: "This is a test update",
	body: "this is a body test update"
});

removePost(572)