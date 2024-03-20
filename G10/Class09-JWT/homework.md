# Homework

- Create a backend service for a Blog with Express following the MVC pattern.
- You can either use your own FE, or use Postman to test the data.
- There should be an /auth router that handles login/register features
- There should be a /posts router that handles GET/POST/PUT(PATCH)/DELETE calls

- Create "User" entity that will serve as a factory class out of which you will instantiate users
  - The user should have id, email, password, and role (Admin || Standard).
- Create "Post" entity that will serve as a factory class out of which you will instantiate posts

  - The post should have id, title, body, tags (array of keywords - topics to which the posts relates to: gaming, healthcare, hobbies, pets etc.).

- Implement auth using JWT (only access token) and make all the /posts routes only accessible by the users who are successfully authenticated (logged in) and own a valid access token

- Add a middleware that validates the role of the current user and let only admin users to edit and remove posts (PUT/PATCH and DELETE requests).

# Bonus

- Implement filtering posts via query params, and return only those posts which tags property includes the given keyword (tag) provided through query params.
- Implement object properties validator using joi library
- Implement password hasing using bcrypt library

# Bonus vol.2 :D (After we finish the last class)

- Implement refresh tokens using JWT

**Don't forget to send us the Postman collection**
