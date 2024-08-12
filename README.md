
# PlantPals Social media platform

The purpose of this project was to create and build a responsive front end for a social media application with the knowledge of JavaScript techniques.

## Description

In this brief we were asked to use the provided API and API documentation, to create a functioning user interface that allows for viewing, posting, editing and deleting social media content.

Social API routes require authorisation via JWT (JSON Web Tokens).

Required features
The following user stories are required for a passing submission:

1. User with @noroff.no or @stud.noroff.no email can register profile
2. Registered user can login/authenticate profile
3. User can view a post content feed
4. User can filter the post content feed
5. User can search the post content feed
6. User can view a post content item by ID
7. User can create a post content item
8. User can update a post content item
9. User can delete a post content item


## Planning the project

https://trello.com/b/fTdt9Y8R/js2-ca

## Built With

- Figma
- HTML
- Bootstrap
- SASS
- Javascript

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/elinkrull/js2/tree/js2
```

### Running

Use the live server to open the website in the browser by clicking on "open in liveserver button" in VSC.

## Contributing

Open a pull request so that the code can be reviewed.

## Contact

[My Linkedin page](https://www.linkedin.com/in/elin-thoen-jakobsen-2224a2264/)

## Acknowledgments



Private Notes:

* When we use async await, we generally want to have our code wrapped in try catch code blocks.

ex.
try {
  // This is the code that will run
} catch (error) {
  // This is where we can handle errors
} finally {
  // This code will execute at the end regardless of
  // whether we had an error or not
}

* avoid using innerHTML becuase it can read js and then you can get bugs in the code.