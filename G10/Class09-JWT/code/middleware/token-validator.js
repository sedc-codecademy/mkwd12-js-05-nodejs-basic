import AuthModel from "../models/auth.model.js";
import { verifyAccessToken } from "../services/jwt.service.js";

const tokenValidator = async (req, res, next) => {
  try {
    // Check if we received an authorization header
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return res.sendStatus(403);
    }

    // Take out the token from the string
    const token = authorizationHeader.split(" ")[1];

    // Verify the token and extract the payload
    const { userId } = verifyAccessToken(token);

    // Check if the user exists
    const user = await AuthModel.getById(userId);

    if (!user) {
      return res.sendStatus(403);
    }

    // Attach user information to the request object
    delete user.password;
    req.user = user;

    // If nothing errors out above, we give access to the resource
    next();
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
};

export default tokenValidator;
