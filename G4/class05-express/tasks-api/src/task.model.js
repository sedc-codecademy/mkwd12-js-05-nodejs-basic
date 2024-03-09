import { v4 as uuid } from "uuid";

export class Task {
  id = uuid();
  isFinished = false;

  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}
