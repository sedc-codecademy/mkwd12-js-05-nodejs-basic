import express from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

const authController = new AuthController();
// /auth/register
authRouter.post("/register", async (req, res) => {
  await authController.registerController(req, res);
});

// /auth/login
authRouter.post("/login", async (req, res) => {});

// /auth/logout
authRouter.post("/logout", (req, res) => {});

export default authRouter;
