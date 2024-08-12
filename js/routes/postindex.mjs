
import * as post from "../api/posts/index.mjs";
import { filterPostsListener } from "./filter.mjs";

post.getPosts().then(console.log)

post.displayPosts()

post.createPostListener()

filterPostsListener()
