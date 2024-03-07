## Importing with ES6 Module Import/Export

With the advent of ES6, you can also use import/export syntax for modules. First, ensure you have `"type": "module"` in your `package.json`. Then, you can import Express using the ES6 syntax:

```javascript
import express from "express";
const app = express();
```

## Creating Simple GET and POST Routes

To create a simple GET route, use the `app.get()` method and specify the route and a callback function that handles the request and response:
By convention the Get Http method will consume data from the BE.

```javascript
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
```

For a POST route, you can use `app.post()`. In a POST request, data is sent in the body of the request. To access this data, you need to use `req.body`.
By convention the post http method will carry some request body, which is going to be used to create a new entity into the BE.
And here's how to use it in your Express app:

```javascript
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const data = req.body; // Accessing data sent in the request body
  res.send("Data received", data);
});
```

## Adding Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. Middleware functions can perform tasks like parsing request bodies, logging, authentication, etc.

Here's a simple logging middleware example:

```javascript
// Example 1
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Example 2: This is same as above but different syntax.
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);
```

In the above example, `logger` logs the HTTP method and URL of each request, then calls `next()` to pass control to the next middleware function.

## Running the Server

Finally, to start the server, listen on a specific port using the `app.listen()` method:

```javascript
const PORT = 3000;
const HOST = "localhost";
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT} and host ${HOST}`);
});
```

Save the file and run it using Node.js (`node server.js`). Now you have a basic Express.js server up and running! Happy Hacking!
