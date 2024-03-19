# Online Book Store Part 4

Welcome to Part 4 of the Online Book Store project. In this installment, we'll enhance our application by adding authentication features. You'll leverage the skills you've acquired and the technologies we've discussed in class to build these features.

## Requirements

This phase of the project requires you to integrate authentication into the existing book store application. You'll use **bcrypt** for password hashing and comparisons, and **jwt** (JSON Web Tokens) for generating authentication tokens.

### Expectations

The project is divided into two main parts:

#### PART ONE: User Management and Authentication

- **Users Database**: Create a new JSON file named `users.json`. This file should contain an array of user entities, essentially serving as your user database.
- **Authentication Router**: Implement an authentication router with the following endpoints:
  - `POST /register`: Creates a new user and saves them in the `users.json` database.
  - `POST /login`: Authenticates existing users. If the credentials are valid, it generates and returns a JWT access token to the user/client.

#### PART TWO: Route Protection

- **Protected Routes**: To access the `POST /books`, `PUT /books/:id`, and `DELETE /books/:id` endpoints, users must be authenticated. This means they must provide a valid JWT access token when making requests to these routes.
- **Public Routes**: The `GET /books/` and `GET /books/:id` endpoints do not require authentication and should be accessible without a token.

## Important Note

- If you have successfully completed Part 3 of this homework, which involved refactoring the application to follow the MVC (Model-View-Controller) architecture, you are encouraged to implement this part within that MVC structure.
- If you're finding the MVC architecture challenging, or if you haven't implemented Part 3, feel free to add these authentication features to your book store application as it was before the introduction of MVC.
