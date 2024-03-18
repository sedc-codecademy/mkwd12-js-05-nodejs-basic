import { v4 as uuidv4 } from "uuid";

class User {
  constructor(email, password, role) {
    this.id = uuidv4();
    this.email = email;
    this.password = password;
    this.role = role;
    this.refreshToken = [];
  }
}

export default User;
