import * as post from "../api/posts/index.mjs";


const title = document.getElementById("update-title")
const body = document.getElementById("update-body")

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

console.log(id)


const data = await post.getPost(id)
console.log(data)

const postData = data.data;

console.log(postData)

title.value = postData.title;
body.value = postData.body ? postData.body : "";

console.log(title.value)


post.updatePostListener();