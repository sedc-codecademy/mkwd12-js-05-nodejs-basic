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
    return await DataService.readData(usersPath);
  }

  static async getById(id) {
    const users = await DataService.readData(usersPath);
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
      throw new Error("Product not found");
    }
    return foundUser;
  }

  static async registerUser(userData) {
    const users = await this.getAll();
    const { email, password, role } = userData;
    const userExists = users.some((user) => user.email === userData.email);
    if (userExists) {
      throw new Error(`User with email: ${email} already exists.`);
    }
    const hashedPassword = await bcrypt.hash(password, 8);

    const user = new User(email, hashedPassword, role);
    users.push(user);
    await DataService.writeData(usersPath, users);
    //Remove hashed password from user object
    // delete user.password - use delete to remove a property from an object
    const { password: userPassword, ...userWithoutPassword } = user; // extract the user without the password with destructuring
    return userWithoutPassword;
  }

  static async loginUser(credentials) {
    const users = await this.getAll();
    const { email, password } = credentials;
    const foundUser = users.find((user) => user.email === email);
    if (!foundUser) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    }
    //Remove hashed password from user object
    // delete foundUser.password;
    const { password: hashedPassword, ...userWithoutPassword } = foundUser;

    return userWithoutPassword;
  }
}
