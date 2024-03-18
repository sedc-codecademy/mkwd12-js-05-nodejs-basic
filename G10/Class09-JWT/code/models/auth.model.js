import DataService from "../services/data.service.js";
import path from "path";
import { fileURLToPath } from "url";
import User from "../entities/user.entity.js";
import bcrypt from "bcryptjs";

const currentFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currentFileURL);
const filePathDirectory = path.dirname(currentFilePath);
const usersPath = path.join(filePathDirectory, "..", "data", "users.json");

export default class AuthModel {
  static async getAll() {
    return DataService.readData(usersPath);
  }

  static async getById(id) {
    const users = await DataService.readData(usersPath);
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
      throw new Error("User not found");
    }
    return foundUser;
  }

  static async registerUser(userData) {
    const users = this.getAll();
    const { email, password, role } = userData;
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      throw new Error(`The user with email ${email} already exists`);
    }
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = new User(email, hashedPassword, role);
    const { password: userPassword, ...userWithoutPassword } = user;
    // delete user.password to delete a property from an object
    users.push(user);
    await DataService.writeData(usersPath, users);
    return userWithoutPassword;
  }

  static async loginUser(credentials) {
    const users = await this.getAll();
    // const email = credentials.email;
    // const password = credentials.password;
    const { email, password } = credentials;
    const foundUser = users.find((user) => user.email === email);
    if (!foundUser) {
      throw new Error("Invalid credentials");
    }
    const isPassworValid = await bcrypt.compare(password, foundUser.password);
    if (!isPassworValid) {
      throw new Error("Invalid credentials");
    }
    delete foundUser.password;
    return foundUser;
  }
}
