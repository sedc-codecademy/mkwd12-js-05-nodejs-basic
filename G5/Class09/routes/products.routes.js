import { Router } from "express";
import jwt from "jsonwebtoken";
import { readProducts } from "../services/fs.service.js";
import { verifyToken } from "../middlewares/auth.validator.middleware.js";

const productRouter = Router();

// middleware for specific endpoint/route
productRouter.get("/products", verifyToken, async (req, res) => {
  /**
   * IF WE DO NOT USE verifyToken MIDDLEWARE, UNCOMMENT THIS COME
   * IT IS SAME LOGIC, BUT THE VERIFYCATION IS DONE IN THE MIDDLEWARE
   */

  // const token = req.headers.authorization;
  // console.log(token);
  // // If token was not provided
  // if (!token) {
  //   return res
  //     .status(403)
  //     .send({ message: "A token is required for authentication" });
  // }

  // try {
  //   // We check if the token is valid
  //   const payload = jwt.verify(token, "access_token_secret");
  //   console.log("PAYLOAD", payload);

  //   const products = await readProducts();
  //   res.send(products);
  // } catch (error) {
  //   return res.status(401).send({ message: "Invalid token" });
  // }

  const products = await readProducts();
  res.send(products);
});

export default productRouter;
