import express from "express";
import { createPath } from "./utils.js";
import cors from "cors";

const app = express();

const STATIC_FILES_PATH = createPath(["public"]);

// We use cors package to allow browsers to make requests to our api
app.use(cors());

// We need to write this before any requests which will make express parse json response bodies
app.use(express.json());

// We use express.static to serve static files from a designated folder
app.use("/", express.static(STATIC_FILES_PATH));

app.get("/user", (req, res) => {
  return res.send("<h1>This is from the express api</h1>");
});

app.post("/user", (req, res) => {
  const user = req.body;

  console.log(user);

  res.json({ msg: "User Created" });
});

app.get("/tasks", (req, res) => {
  return res.json({
    text: "Send json with express",
    isFinished: true,
    author: "Borche",
  });
});

app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
