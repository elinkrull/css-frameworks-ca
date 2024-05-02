import { homePage } from "./routes/home.mjs";
import * as post from "./api/posts/index.mjs"


homePage()



post.getPosts().then(console.log)


post.renderPost()

// post.removePost(869).then(console.log)

post.getPost(839).then(console.log)

// post.displayPosts().then(console.log)

