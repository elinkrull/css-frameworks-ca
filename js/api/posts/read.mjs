import { API_BASE, API_POSTS } from "../constants.mjs";
import { authFetch } from "../authfetch.mjs";



//get posts as an object
export async function getPosts() {
	const updatePostUrl = `${API_BASE}${API_POSTS}`;
	const response = await authFetch(updatePostUrl);
	return await response.json();
}


// get posts as an array
async function getPostData() {
	const posts = await getPosts();
	console.log(posts.data);
};

getPostData();


//Christopher Tønnesland hjelp med deler av koden
export async function renderPosts() {
	const posts = await getPosts();
	const data = posts.data;
   
	const feedContainer = document.querySelector("#feed");
   
	//for vært object i arrayet skal det hete fra nå el
	const postItem = data.map((el) => {
	 const title = el.title;
	 const body = el.body;
	 return `<div class="card shadow mt-5 col-10 col-lg-15 mx-3 mb-3 d-flex">
	 <div class="card-body flex-fill">
			 <h5>${title}</h5>
			 <p>${body}</p>
	 </div>
   </div>`;
	});
   
	feedContainer.innerHTML = postItem;
   };
   
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









