import cookieParser from "cookie-parser";
import express from "express";

const app = express();

app.use(cookieParser());

app.post("/create-cookie", (req, res) => {
  //Classic way of create cookies ( with header )
  res.set("Set-Cookie", "header-cookie=header-value");

  //The express way of handling cookies
  res.cookie("express-cookie", "dark-theme", {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
    secure: false,
  });

  res.cookie("session-cookie", "user-login", {
    httpOnly: true,
    maxAge: 2 * 60 * 60 * 1000,
    secure: false,
  });

  res.cookie("five-second", "i should be fast", {
    maxAge: 5 * 1000,
  });

  return res.send({ msg: "cookies-created" });
});

app.get("/read-cookie", (req, res) => {
  console.log(req.headers.cookie);

  console.log(req.cookies);
  res.send(req.cookies);
});

app.listen(3000, () => {
  console.log("server is up at port 3000");
});
