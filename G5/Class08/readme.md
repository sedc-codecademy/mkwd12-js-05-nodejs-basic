## Setting Up Your Project

First, ensure you have Node.js installed on your system. Then, create a new directory for your project, navigate into it, and initialize a new Node.js project:

Install Express and express-session:

```bash
npm install express express-session
```

## Initialize Express and express-session

Create a file named `app.js` and use the following code to set up Express and express-session using ES6 modules.

```javascript
import express from "express";
import session from "express-session";

const app = express();
const PORT = 3000;

// Session configuration
app.use(
  session({
    secret: "your_secret_key", // A string key used for signing and/or encrypting cookies set by the application to maintain session state.
    resave: true, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
    cookie: {
      secure: true, // Ensures cookies are only sent over HTTPS. In development, set it to false if HTTPS is not used.
      maxAge: 5 * 60 * 60 * 1000, // 5 hours in miliseconds, means the lifespan of the session. Once expired will be removed
    },
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Adding Items to the Session

You can add items to the session by assigning them to `req.session` object. Here's an example where we're adding a `user` object to the session.

```javascript
app.post("/login", (req, res) => {
  // Simulate user login
  req.session.user = { id: 1, username: "john_doe" };
  res.send("User logged in");
});
```

## Reading from the Session

You can read the stored session data by accessing the `req.session` object. Here's how you could retrieve and use the `user` object we added to the session in the previous step.

```javascript
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user.username}`);
  } else {
    res.send("Please login to view this page.");
  }
});
```

## Running the Server

Run your server with the following command:

```bash
node app.js
```

Visit `http://localhost:3000/login` to log in the user and then `http://localhost:3000/dashboard` to view the dashboard page.

This guide covers the basics of using sessions in Express with express-session. You can now use this functionality to manage user sessions in your own Node.js applications.
