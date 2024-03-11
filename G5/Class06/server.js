import express from "express";
import productsRouter from "./routes/products.routes.js";

const server = express();
server.use(express.json()); // server will understand json :)

const PORT = 3000;
const HOST = "localhost";

server.get("/", (req, res) => {
  res.send("Server is live");
});

server.use(productsRouter);

server.listen(PORT, HOST, () => {
  console.log(`Server is up and running on port: ${PORT}, and host: ${HOST}`);
});
