import express from "express";

import authRouter from "./routes/auth.js";
import ticketRouter from "./routes/ticket.js";

const app = express();
const PORT = 3000;
const HOST = "localhost";

app.use(express.json());

app.use("/auth", authRouter);
app.use("/tickets", ticketRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
