import express from "express";
import cors from "cors";
import { router as usersRouter } from "./routes/users.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// add users roter
app.use("/api", usersRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
