import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

import { User } from "../entities/user.entity.js";
import { addUser, readUsers } from "../services/fs.service.js";

export class AuthModel {
  async register(firstName, lastName, email, password, permission) {
    const users = await readUsers();
    const userExist = users.some((u) => u.email === email);

    if (userExist) {
      throw new Error(`User with email: ${email} already exists.`);
    }

    const id = uuid();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User(
      id,
      firstName,
      lastName,
      email,
      hashedPassword,
      permission
    );

    try {
      await addUser(user);
      return id;
    } catch (error) {
      throw new Error("Error at register user.");
    }
  }

  async login() {}

  async logout() {}
}
