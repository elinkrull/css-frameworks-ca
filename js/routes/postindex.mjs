
import * as post from "../api/posts/index.mjs";

post.getPosts().then(console.log)

post.displayPosts()

// post.getPost(1740).then(console.log)

post.createPostListener()

