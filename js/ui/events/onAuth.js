import { loginUser } from "../../api/auth/login.js";
import { registerUser } from "../../api/auth/register.js";

//function auth user
export async function onAuth(event) {
	event.preventDefault();
	const name = event.target.name.value;
	const email = event.target.email.value;
	const password = event.target.password.value;

	await registerUser(name, email, password);
	loginUser(email, password);

} 
