import { AuthModel } from "../models/auth.model.js";

export class AuthController {
  constructor() {
    this.authModel = new AuthModel();
  }

  async registerController(req, res) {
    const { firstName, lastName, email, password, permission } = req.body;

    // TODO: Validate the request body =)
    try {
      const id = await this.authModel.register(
        firstName,
        lastName,
        email,
        password,
        permission
      );

      res.status(201).send({ message: "User registered success.", userID: id });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async loginController(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Missing email or password" });
    }

    try {
      const accessToken = await this.authModel.login(email, password);
      res.send({ token: accessToken });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async logoutController(req, res) {
    try {
      const message = await this.authModel.login();
      res.send({ message });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}
