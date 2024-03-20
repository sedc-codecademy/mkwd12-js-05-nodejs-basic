import { Router } from "express";
import productRouter from "../routes/product.routes.js";
import authRouter from "../routes/auth.routes.js";
import tokenValidator from "../middleware/token-validator.js";

const router = Router();

router.use(authRouter);
router.use("/products", tokenValidator, productRouter);

export default router;
