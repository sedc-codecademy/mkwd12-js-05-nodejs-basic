import { v4 as uuid } from "uuid";

export class User {
  id = uuid();

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
