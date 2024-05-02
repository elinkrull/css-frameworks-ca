import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";




//get posts as an object
export async function getPosts() {
	const updatePostUrl = `${API_BASE}${API_POSTS}`;
	const response = await authFetch(updatePostUrl);
	return await response.json();
}

//Christopher Tønnesland
// get posts as an array
async function getPostData() {
	const posts = await getPosts();
	console.log(posts.data);
};

getPostData();



export async function renderPost() {
	const posts = await getPosts();
	const data = posts.data;
   
	const feedContainer = document.getElementById("feed");
   
	const postItem = data.map((el) => {
	 const title = el.title;
	 return `<div class="card shadow col-10 col-lg-3 mx-3 mb-3 d-flex">
	 <div class="flex-fill">
		 <div class="card-body">
			 <h5>${title}</h5>
		 </div>
	 </div>
   </div>`;
	});
   
	feedContainer.innerHTML = postItem;
   };
   
   renderPost();
   //Christopher Tønnesland slutt



   
//get a single posts by ID
export async function getPost(id) {
	//add error handling
	// const response = await authFetch`${API_BASE}${API_POSTS}/${id}`;
	// return await response.json();
	const getPostURL = `${API_BASE}${API_POSTS}/${id}`;
	const response = await authFetch(getPostURL)
	return await response.json();
}









