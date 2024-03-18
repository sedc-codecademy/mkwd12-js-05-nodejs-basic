import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  // If token was not provided
  if (!token) {
    return res
      .status(403)
      .send({ message: "A token is required for authentication" });
  }

  try {
    const payload = jwt.verify(token, "access_token_secret");
    console.log("PAYLOAD", payload);
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }

  next();
};
