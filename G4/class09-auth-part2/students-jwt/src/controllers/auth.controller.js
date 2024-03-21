import { createAccessToken } from "../const/jwt.const.js";
import { AuthModel } from "../models/auth.model.js";

export class AuthController {
  //1. Register user
  static async registerUser(req, res) {
    try {
      const newUser = await AuthModel.registerUser(req.body);

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: error.message });
    }
  }
  //2. Login user
  static async loginUser(req, res) {
    try {
      const user = await AuthModel.loginUser(req.body);

      //Creating a token after successful login
      const accessToken = createAccessToken(user.id);

      //res.set sets a header in the response with the given name and value
      res.set("access-token", accessToken);

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ msg: error.message });
    }
  }
}
