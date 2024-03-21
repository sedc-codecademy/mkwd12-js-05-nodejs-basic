import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

import { User } from "../entities/user.entity.js";
import { addUser, readUsers } from "../services/fs.service.js";
import { generateToken } from "../services/jwt.service.js";

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

  async login(email, password) {
    const users = await readUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
      throw new Error(`User with email: ${email} does not exist.`);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password.");
    }

    // create access token
    const accessToken = generateToken(user);

    return accessToken;
  }

  async logout() {
    return "Logout Successfull";
  }
}
