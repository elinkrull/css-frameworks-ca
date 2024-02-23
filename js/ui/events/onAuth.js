import { loginUser } from "../../api/auth/login.js";
import { registerUser } from "../../api/auth/register.js";
import { getPosts } from "../../api/posts/get.js";
 
//function auth user
export async function onAuth(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (location.pathname.includes("/register")) {
        await registerUser(name, email, password);
	} else {

	const login = await loginUser(email, password);
	console.log(login);
}

await getPosts();
}