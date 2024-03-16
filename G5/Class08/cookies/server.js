import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
const host = "localhost";

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is live.");
});

app.get("/set-cookies", (req, res) => {
  res.cookie("exampleCookie", "ThisIsTheCookieValue");
  res.cookie("someData", { data: "Some dummy data" });
  res.send("Cookie has been set");
});

app.get("/get-cookies", (req, res) => {
  const cookies = req.cookies;
  console.log("Cookies are:", cookies);

  res.send(cookies);
});

app.get("/clear-cookies", (req, res) => {
  res.clearCookie("exampleCookie");
  res.clearCookie("someData");

  res.send("Cookies has been cleared.");
});

app.listen(port, host, () => {
  console.log("Server is up and running.");
});
