import jwt from "jsonwebtoken";
import { ENV } from "../env.config.js";

export const generateToken = (user) => {
  const tokenPayload = {
    email: user.email,
    permission: user.permission,
  };

  // const token = jwt.sign(tokenPayload, ENV.JWT_SECRET, { expiresIn: "2h" });

  // same as above, but here we access the .env directly;
  const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });

  return token;
};
