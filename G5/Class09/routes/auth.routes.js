import { Router } from "express";
import { v4 as uuid } from "uuid";
import { addUser, readUsers } from "../services/fs.service.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  // hashing the password using bcrypt algoritm
  const hashedPassword = await bcrypt.hash(password, 10);

  const idOfUser = uuid();
  const newUser = {
    id: idOfUser,
    username: username,
    password: hashedPassword,
  };

  await addUser(newUser);

  // 201 = Created
  res.status(201).send({ message: `User is created`, id: idOfUser });
});

// Login route
authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = await readUsers();

  const user = users.find((userFromDB) => userFromDB.username === username);

  if (!user) {
    return res.status(401).send({ message: "No user with the given username" });
  }

  // password => john123 === $2a$10$oM.JC8BrBPQcnsogvTJYp.1Tz2b3ODaJ7rcc/CbY.y9qR6E.sMRta // false :)

  // user.password is the user object that was found, and password is the hashed value
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send({ message: "Invalid password" });
  }

  // If password is valid: generate access token
  const accessToken = jwt.sign(
    { username: user.username },
    "access_token_secret",
    {
      expiresIn: "1h",
    }
  );

  res.send({ message: "Logged in success", token: accessToken });
});

export default authRouter;
