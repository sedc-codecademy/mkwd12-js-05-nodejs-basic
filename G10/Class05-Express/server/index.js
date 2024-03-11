import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { router as studentsRouter } from "./routes/students.routes.js";

// Routing refers to determining how an application responds to a client request to a particular endpoint,
// which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
// Each route can have one or more handler functions, which are executed when the route is matched.

// Route definition takes the following structure:
// app.METHOD(PATH, HANDLER)
const app = express();
const PORT = process.env.PORT || 3000;
// 0.0.0.0 means that the server will be accessible from everywhere
// 127.0.0.1 means that it will be accessible from the local machine
const HOST = process.env.HOST || "0.0.0.0";

// Ousr server can accept data in JSON format
app.use(express.json());

// set cors policy
// The cors() middleware automatically adds the necessary headers to the response, allowing cross-origin requests
// This is crucial when your front-end and back-end are served from different domains or ports
app.use(cors());

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const projectPath = path.dirname(currentFilePath);

const staticHomePagePath = path.join(projectPath, "homePage");
const staticAboutPagePath = path.join(projectPath, "aboutPage");

// import the students router
app.use("/api", studentsRouter); // localhost:3000/api/students?gender=F

app.use("/home", express.static(staticHomePagePath));
app.use("/about", express.static(staticAboutPagePath));

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({ message: "Hello World!" });
});

// Set the server to listen on port
app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
});
