import express from "express";

// Cookies are small pieces of text sent to your browser by a website you visit
// Those cookies are small data files that contain personal user information in the form of a unique identifier called a cookie ID
// If users return to your site, it recognizes their cookie ID and auto-fills their preferences

const userRouter = express.Router();
//Returning a simple cookie;
/**
 * From the server we return a cookie to the user
 * and it is stored in the user's browser.
 */

// Very often we put some products in the cart that we do not buy immediately
// But when we return back to that site later, the cart with the products is still there
// This is done via cookie

userRouter.get("/cart", (req, res) => {
  res.cookie("name", "Jill Wayne");
  res.cookie("cart", ["linen shirt", "leather jacket", "skinny jeans"]);

  res.status(200).send("<h1>Your cart</h1>");
});

userRouter.get("/read_cookies", (req, res) => {
  const cookies = req.cookies;
  console.log("COOKIES", cookies);

  res.status(200).send({
    messsage: `Cookies: {name: ${cookies.name}, cart: ${cookies.cart}}`,
  });
});

userRouter.post("/login", (req, res) => {
  const user = {
    username: "jill",
    password: "jill123",
  };

  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.cookie("me", { loggedId: true, type: "standard user" });
    res.status(200).send({ messsage: "Logged in successfully" });
  } else {
    res.status(401).send({ messsage: "Invalid credentials" });
  }
});

userRouter.get("/products", (req, res) => {
  const cookies = req.cookies;

  const userMeCookes = JSON.parse(cookies.me);
  console.log(userMeCookes);

  if (userMeCookes !== undefined && userMeCookes.loggedIn === true) {
    res.send("<h1>Welcome user, you can proceed to products</h1>");
  } else {
    res.send("<h1>Please login first</h1>");
    // res.redirect("/login");
  }
});

export default userRouter;
