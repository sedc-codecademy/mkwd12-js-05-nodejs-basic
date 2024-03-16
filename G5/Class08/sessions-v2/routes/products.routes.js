import { Router } from "express";
import authSession from "../session.js";

const productsRouter = Router();

// productsRouter.use(authSession); // if the productsRouter is above authRouter in server js then we have to use the session like this.

productsRouter.get("/products", (req, res) => {
  console.log("In products", req.session);
  const isUserLoggedIn = req.session.loggedIn;

  if (!isUserLoggedIn) {
    return res.status(401).send({ message: "You are not logged in" });
  }

  const products = [
    { id: 1, name: "Banana" },
    { id: 2, name: "Oranges" },
  ];

  res.send(products);
});

export default productsRouter;
