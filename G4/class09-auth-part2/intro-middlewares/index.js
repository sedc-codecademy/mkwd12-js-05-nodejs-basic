import express from "express";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";

const app = express();

app.use(loggerMiddleware);

//REQUEST >> LOGGER MIDDLEWARE >> MIDDLEWARE HERE
app.get("/", (req, res) => {
  return res.send({ msg: "This is from the root endpoint" });
});

app.get("/test", (req, res) => {
  return res.send({ msg: "This is from test" });
});

app.listen(3000, () => {
  console.log("Server is up at port: 3000");
});
