import { Router } from "express";
import { v4 as uuid } from "uuid";
import { addUser } from "../services/fs.service.js";

const authRouter = Router();

// Register route
authRouter.post("/register", async (req, res) => {
  // req.body {username, password}
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: "Username or password is missing" });
  }

  if (username.length <= 3 || password.length <= 3) {
    return res.status(400).send({ message: "Password of username is short" });
  }

  const idOfUser = uuid();
  const newUser = {
    id: idOfUser,
    username: username,
    password: password,
  };

  await addUser(newUser);

  // 201 = Created
  res.status(201).send({ message: `User is created`, id: idOfUser });
});

export default authRouter;
