# Node.js Authentication with JWT, bcrypt, and Express

A simple step by step guide of how to implement authentication in a Node.js application using JSON Web Tokens (JWT), bcrypt for password hashing, and Express as the web application framework, utilizing ES6 module syntax.

## Technologies

- **Express**: A framework for building web applications and APIs in Node.js.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **bcrypt**: A library for hashing passwords, providing a secure way to store passwords in your database.

## Getting Started

Create `app.js` with the following content, using ES6 module syntax:

```javascript
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

// Mock user database for demonstration purposes
const users = [
  {
    id: 1,
    username: "user1",
    password: "$2b$10$E/PRFyL90Et9lZ5jHjG2yOF.5zDzTJ.ZZweJG/aORYoO5aE8hk4I.", // Hashed password for "secret"
  },
];

// Route to authenticate a user and provide a JWT for subsequent requests
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).send("User not found");

  // Compare provided password with stored hashed password
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send("Password is incorrect");

  // Generate a JWT if the user is authenticated
  const token = jwt.sign({ userId: user.id }, "yourSecretKey", {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Protected route that requires a valid JWT to access
app.get("/students", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("Access Denied");

  try {
    // Verify the JWT and allow access if valid
    jwt.verify(token, "yourSecretKey");
    res.send([
      {
        id: "1",
        fullName: "John Doe",
      },
      {
        id: "2",
        fullName: "Bob Bobski",
      },
    ]);
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
});

// Start the server
app.listen(3000, "localhost", () => {
  console.log(`Server is up and running`);
});
```
