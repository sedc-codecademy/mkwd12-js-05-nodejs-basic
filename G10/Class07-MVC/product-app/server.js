import express from "express";
// import router

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// add router

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
