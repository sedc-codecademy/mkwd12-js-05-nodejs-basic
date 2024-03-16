import express from "express";
import session from "express-session";

const app = express();
app.use(express.json());

/**
 * When we create session
 * - A new session cookie is created, and stored in the client's browser.
 * - An empty session object that we can add things to it.
 */

const mySession = session({
  name: "my_session",
  secret: "my_session_secret_key", //unique,
  cookie: {
    maxAge: 5 * 60 * 60 * 1000, // value must be in miliseconds
  },
  resave: true,
  saveUninitialized: true,
});

app.use(mySession);
// Once inited. we can access it in the routes below
// Order matters

app.get("/", (req, res) => {
  res.send("Server is live.");
});

app.get("/get-session", (req, res) => {
  const session = req.session;
  console.log(session);

  console.log(session.user);
  res.send(session);
});

app.get("/set-session", (req, res) => {
  req.session.user = {
    firstName: "Bob",
    lastName: "Bobski",
  };

  res.send("Added in session");
});

app.get("/products", (req, res) => {
  const sessionInProducts = req.session;
  console.log(sessionInProducts);
  res.send([{ id: 1, name: "Orange" }]);
});

app.listen(3000, "localhost", () => {
  console.log("Server is up and running.");
});
