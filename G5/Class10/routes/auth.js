import express from "express";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {});

authRouter.post("/login", async (req, res) => {});

authRouter.post("/logout", (req, res) => {});

export default authRouter;
