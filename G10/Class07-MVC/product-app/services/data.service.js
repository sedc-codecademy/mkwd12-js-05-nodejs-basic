import fs from "fs/promises";

export default class DataService {
  static async readData(path) {
    const arr = await fs.readFile(path);
    return JSON.parse(arr);
  }

  static async writeData(path, data = []) {
    await fs.writeFile(path, JSON.stringify(data));
  }
}
