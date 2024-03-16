import express from "express";
import authRouter from "./routes/auth.routes.js";
import productsRouter from "./routes/products.routes.js";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("server is live.");
});

// Order matters
server.use(authRouter);
server.use(productsRouter);

server.listen(3000, "localhost", () => {
  console.log("Server is up and running.");
});
