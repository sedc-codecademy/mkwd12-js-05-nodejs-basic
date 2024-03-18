import express from "express";
import jwt from "jsonwebtoken";

const secretKey = "secret_key"; // don't put the secret key here, don't push it to github

const app = express();
const port = 3000;

const authenticate = (req, res, next) => {
  const accessToken = req.headers["authorization"];

  if (!accessToken) {
    return res.status(401).send("Access denied. No token provided");
  }

  try {
    const decoded = jwt.verify(accessToken, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(403).send("Access denied. Invalid token provided");
  }
};

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "bobbobsky",
  };

  const accessToken = jwt.sign({ user }, secretKey, { expiresIn: "1h" });

  res.header("authorization", accessToken).json({ accessToken });
});

app.get("/protected", authenticate, (req, res) => {
  res.send({
    message:
      "This is a protected route that can be accessed only by a user who has logged in",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
