
import * as post from "./api/posts/index.mjs";
import { getPost } from "./api/posts/index.mjs";




post.getPosts().then(console.log)

post.displayPosts()

// post.removePost().then(console.log)

// post.getPost(1740).then(console.log)


// post.createPost()


post.displaySinglePost()