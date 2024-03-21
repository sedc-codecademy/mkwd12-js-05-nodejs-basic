import Joi from "joi";
import { createPath } from "../../utils.js";
import { DataService } from "../services/data.service.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const USERS_PATH = createPath(["data", "users.json"]);

const userSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
});

class User {
  id = uuid();

  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export class AuthModel {
  static async saveUsers(users) {
    await DataService.saveJSONFile(USERS_PATH, users);
  }

  static async getAllUsers() {
    const users = await DataService.readJSONFile(USERS_PATH);

    return users;
  }

  //1. Register user
  static async registerUser(userData) {
    const users = await this.getAllUsers();

    const emailExists = users.some(user => user.email === userData.email);

    if (emailExists) throw new Error("Email already exists");

    const validation = userSchema.validate(userData);

    if (validation?.error) throw new Error(validation.error.details[0].message);

    const { firstName, lastName, email, password } = userData;

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User(firstName, lastName, email, hashedPassword);

    const updatedUsers = [...users, newUser];

    await this.saveUsers(updatedUsers);

    // delete newUser.password;
    // return newUser;

    const { password: userPassword, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  //2. Login user
  static async loginUser({ email, password }) {
    const users = await this.getAllUsers();

    const foundUser = users.find(user => user.email === email);

    if (!foundUser) throw new Error("Invalid Credentials!");

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);

    if (!isPasswordValid) throw new Error("Invalid Credentials!");

    const { password: userPassword, ...userWithoutPassword } = foundUser;
    return userWithoutPassword;
  }
}
