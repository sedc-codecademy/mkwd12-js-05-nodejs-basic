import { Router } from "express";
import authSession from "../session.js";

const authRouter = Router();

authRouter.use(authSession);

authRouter.post("/login", (req, res) => {
  const user = {
    username: "user_123",
    password: "user_123", // in real life
  };

  const credentials = req.body;

  if (
    user.username === credentials.username &&
    user.password === credentials.password
  ) {
    // if creadentials are met we add new prop. to the session object, loggedIn = true
    req.session.loggedIn = true;

    res.send({ message: "User is logged in" });
  } else {
    res.status(401).send({ message: "User does not exist" });
  }
});

authRouter.post("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("auth_session_name");
  res.send({ message: "Logout success" });
});

export default authRouter;
