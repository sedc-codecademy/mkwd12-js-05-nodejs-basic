import express from "express";
import {
  getUsers,
  registerUser,
  loginUser,
  editUser,
  deleteUser,
} from "../services/users.service.js";
import { loggerEmitter } from "../services/logger.service.js";

const router = express.Router();

router.get("/users", (req, res) => {
  const queryData = req.query; // if no query data, it will return {}
  try {
    const users = getUsers(queryData);
    res.status(200).send(users);
    loggerEmitter.emit("log", "Get users", "Successful");
  } catch (error) {
    res.status(404).send(error.message);
    loggerEmitter.emit("log", "Get users", "Unsuccessful");
  }
});

router.post("/users/register", (req, res) => {
  try {
    const userData = req.body;
    const createdUser = registerUser(userData);
    res.status(201).send(createdUser);
    loggerEmitter.emit("log", "Register user", "Successful");
  } catch (error) {
    res.status(400).send(error.message);
    loggerEmitter.emit("log", "Register user", "Successful");
  }
});

router.post("/users/login", (req, res) => {
  try {
    const userData = req.body;
    const loggedUser = loginUser(userData);
    res.status(200).send(loggedUser);
    loggerEmitter.emit("log", "Login user", "Successful");
  } catch (error) {
    res.status(401).send(error.message);
    loggerEmitter.emit("log", "Login user", "Unsuccessful");
  }
});

router.patch("/users/:id", (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = editUser(userData, userId);
    loggerEmitter.emit("log", "Edit user", "Successful");
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(404).send(error.message);
    loggerEmitter.emit("log", "Edit user", "Unsuccessful");
  }
});

router.delete("/users/:id", (req, res) => {
  try {
    const userId = req.params.id;
    deleteUser(userId);
    res.status(200).send({ message: "User deleted successfully" });
    loggerEmitter.emit("log", "Delete user", "Successful");
  } catch (error) {
    res.status(404).send({ error: error.message });
    loggerEmitter.emit("log", "Delete user", "Unsuccessful");
  }
});

export { router };
