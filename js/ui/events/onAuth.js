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
        const loginResponse = await loginUser(email, password); // Renamed 'login' variable
        console.log(loginResponse);
    
        registerUser(name, email, password);
    }
    const posts = await getPosts();
    console.log(posts);
} 
