import { AuthModel } from "../models/auth.model.js";

export class AuthController {
  constructor() {
    this.authModel = new AuthModel();
  }

  async registerController(req, res) {
    const { firstName, lastName, email, password, permission } = req.body;

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
}
