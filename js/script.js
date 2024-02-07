// API

// We follow a URL structure of
// https://api.noroff.dev/api/<version>/<endpoint>.

// The API base URL for v1 is 
// https://api.noroff.dev/api/v1


// --------

// Register
// POST
// /social/auth/register
// This endpoint will register a new user profile.

// You will need to send all of the required values in your POST request:

// Request
// {
//   "name": "my_username", // Required
//   "email": "first.last@stud.noroff.no", // Required
//   "password": "UzI1NiIsInR5cCI", // Required
//   "avatar": "https://img.service.com/avatar.jpg", // Optional
//   "banner": "https://img.service.com/banner.jpg" // Optional
// }
// The name value must not contain punctuation symbols apart from underscore (_).

// The email value must be a valid stud.noroff.no or noroff.no email address.

// The password value must be at least 8 characters.

// You can now use your registered account to log in.

// ---------------


// Login
// POST
// /social/auth/login
// You can use this endpoint to login with your registered user.

// Request
// {
//   "email": "first.last@stud.noroff.no",
//   "password": "UzI1NiIsInR5cCI"
// }
// Response
// {
//   "name": "my_username",
//   "email": "first.last@stud.noroff.no",
//   "avatar": "https://img.service.com/avatar.jpg",
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
// }
// You can now use this access token as the Bearer token in the Authorization header for all /social endpoints.


// ----------------



// Example of sending Authorization header.
// Example
// const options = {
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....',
//   },
// }
 
// const response = await fetch(`${API_BASE_URL}/social/posts`, options)
// const data = await response.json()