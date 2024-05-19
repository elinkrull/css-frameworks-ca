import * as post from "../api/posts/index.mjs";


const title = document.getElementById("update-title")
const body = document.getElementById("update-body")

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

const data = await post.getPost(id)
console.log(data)
const postData = data.data;

title.value = postData.title;
body.value = postData.body ? postData.body : "";

post.updatePostListener(id);