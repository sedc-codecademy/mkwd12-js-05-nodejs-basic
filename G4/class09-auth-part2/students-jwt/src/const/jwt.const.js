import jwt from "jsonwebtoken";

export const createAccessToken = userId => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });
};

export const verifyAccessToken = token => {
  // Verifies a token and returns the payload if success or throws an error
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};
