import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";

//fetch data from the API
export async function getPosts() {
	const getPostsUrl = `${API_BASE}${API_POSTS}`;
	const response = await authFetch(getPostsUrl);
	return await response.json();
}

// get posts as an array
async function getPostData() {
	const posts = await getPosts();
	console.log(posts.data);
};

getPostData();


export async function displayPosts() {
	const posts = await getPosts();
	const data = posts.data;
   
	const feedContainer = document.querySelector("#display-posts-container");
   
	const postItem = data.map((el) => {
	 const title = el.title;
	 const body = el.body;
	 const id = el.id;

	 return `<div class="card shadow mt-5 col-10 col-lg-15 mx-3 mb-3 d-flex">
	 <div class="card-body flex-fill">
			 <a href="/post/index.html?id=${id}">${title}</a>
			 <p>${body}</p>
	 </div>
   </div>`;
	});

	const postItemsHTML = postItem.join('');
   
	feedContainer.innerHTML = postItemsHTML;
   };


   //Function to display a single blog post by its id
export async function displaySinglePost(id) {
    try {

		//convert ID from a string to a number
		id = parseInt(id);

		//fetch the post from the API
        const singlePost = await getPost(id);
        const title = singlePost.title;
        const body = singlePost.body;

		//display the post on the page
		const singlePostContainer = document.querySelector("#single-post-container");
        const postHTML = `
            <div class="card shadow mt-5 mx-3 mb-3">
                <div class="card-body">
                    <h2>${title}</h2>
                    <p>${body}</p>
                </div>
            </div>`;

        singlePostContainer.innerHTML = postHTML;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}


   //JSDocs

   /**
	* Gets a single post by from the API provided
	* @param {string} id This is the id for the current post the user is looking at.
	* @example
	* const id = // get data from API;
	* const singlePost = getAinglePost(id);
	* console.log(singlePost);
	 //logs correct single post
	*/
	


//get a single post by its ID
export async function getPost(id) {
	//add error handling
	// const response = await authFetch`${API_BASE}${API_POSTS}/${id}`;
	// return await response.json();
	const getPostURL = `${API_BASE}${API_POSTS}/${id}`;
	const response = await authFetch(getPostURL)
	return await response.json();
}

