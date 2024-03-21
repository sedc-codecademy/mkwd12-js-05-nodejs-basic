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

      //after user is logged in, we add a isLoggedIn property to the session object, then for every next request we check the isLoggedIn property
      req.session.isLoggedIn = true;

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ msg: error.message });
    }
  }

  //3. Logout user
  static async logoutUser(req, res) {
    try {
      req.session.destroy();

      return res.sendStatus(204);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
}
