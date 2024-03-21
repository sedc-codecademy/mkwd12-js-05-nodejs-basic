import express from "express";
import { globalRouter } from "./src/const/router.const.js";
import { createSession } from "./src/const/session.const.js";

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();

app.use(express.json());
app.use(createSession);

app.use("/api", globalRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is up at port: ${PORT}`);
});
