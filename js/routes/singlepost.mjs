import * as post from "../api/posts/index.mjs";


let params = new URLSearchParams(window.location.search);
let id = params.get("id");

post.displaySinglePost(id)


