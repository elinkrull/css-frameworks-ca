import * as post from "../api/posts/index.mjs";


let params = new URLSearchParams(window.location.search);
let id = params.get("id");

await post.displaySinglePost(id)

post.deletePostListener(id)






