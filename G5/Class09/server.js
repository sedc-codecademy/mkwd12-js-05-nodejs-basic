import express from "express";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/products.routes.js";

const server = express();
server.use(express.json());

const PORT = 3000;
const HOST = "localhost";

server.get("/", (req, res) => {
  res.send("<p>Server is live</p>");
});

server.use(authRouter);
server.use(productRouter);

server.listen(PORT, HOST, () => {
  console.log(`Server is up and running on host: ${HOST} and port: ${PORT}`);
});
