import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Token does not exist");
  }
  try {
    const userPayload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("userPayload in authenticate", userPayload);
    req.user = userPayload;
  } catch (error) {
    return res.status(401).send("Invalid token");
  }

  next();
};

export const authorize = (req, res, next) => {
  // req.user is the user that we added in the request object on line 11 =) (req.user = userPayload)
  if (req.user.permission !== "ADMIN") {
    return res.status(403).send("Forbidden");
  }
  next();
};
