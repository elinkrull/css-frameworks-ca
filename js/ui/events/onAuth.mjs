import { login } from "../../api/auth/login.mjs";
import { register } from "../../api/auth/register.mjs";

// import * as posts from "../../api/posts/index.mjs";

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
}


// const posts = await getPosts();
// console.log(posts);

// posts.getPost(556).then(console.log)

// createPost({
// 	title: "This is a test",
// 	body: "this is a body test"
// });


// updatePost({
// 	id: 572,
// 	title: "This is a test update",
// 	body: "this is a body test update"
// });

// removePost(572)

// ----------

// post.createPost();
// post.updatePost();
// post.removePost();
// post.getPost();
// posts.getPosts();

// ---------
