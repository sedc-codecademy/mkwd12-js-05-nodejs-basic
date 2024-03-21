import { Router } from "express";
import { authRouter } from "../routes/auth.routes.js";
import { studentRouter } from "../routes/student.routes.js";
import { sessionValidator } from "../../middlewares/session-validator.middleware.js";

export const globalRouter = Router();

globalRouter.use("/", authRouter);
globalRouter.use("/students", sessionValidator, studentRouter);
