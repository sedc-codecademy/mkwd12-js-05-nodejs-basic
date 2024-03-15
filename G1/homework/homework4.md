# Homework 4 - MVC with Authentication

### Deadline: 07.04.2024

## Basic Requirement

Let's create a simple APP similar to the ones we use for social media. We will have users and posts.

### App init

1. Create a new project using express.
2. Follow the MVC pattern, and structure the code accordingly, as you see fit. Feel free to еxperiment as long as it is justified, and makes logical sense.
3. Create 2 json files that will be used as databases. One for users and one for posts. The files should be named `users.json` and `posts.json`.
4. We will use authentication for the users. You are free to choose between using:
    * Sessions
    * JWT (if you choose this, there is no need to use refresh tokens, just use the token for authentication)
5. We need to enable the following functionality:
    * User registration
    * User login
    * User logout
    * Post creation
    * Post deletion
    * Post editing

### Models

1. Create a `User` model with the following fields:
    * id - uuid
    * name - string
    * username (email) - string
    * password - string
    * createdAt - date (ISO string)

You are free to add any other fields you see fit to meet requirements.

2. Create a `Post` model with the following fields:
    * id - uuid
    * title - string
    * content - string
    * createdAt - date (ISO string) when post is created
    * updatedAt - date (ISO string) when post is last updated
   
You are free to add any other fields you see fit to meet requirements.

## Bonus Requirements
As a bonus, you can add the following functionalities:
1. User can like a post:
    * A user can like a post only once. If the post is already liked, the second call to the endpoint should remove the like.
    * A user CAN'T like his own post.
2. User can fetch all posts by a certain user IF the user is logged in:
   * If the user is not logged in, the endpoint should return an error.
3. User can edit ONLY his own posts:
   * If the user is not the owner of the post, the endpoint should return an error.
4. User can delete ONLY his own posts:
   * If the user is not the owner of the post, the endpoint should return an error.

## Before you send it...
* Don't forget to test your api with Postman.
* Don't forget to add a .gitignore file to your project and add /node_modules to it.
* Don't forget to send the postman collection with your homework! (instructions on how to do this in the root instructions.md file)
