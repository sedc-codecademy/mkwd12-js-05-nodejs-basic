import fsPromises from "fs/promises";

export const readFile = async (path) => {
  const contents = await fsPromises.readFile(path, { encoding: "utf-8" });

  return JSON.parse(contents);
};

export const writeFile = async (path, data) => {
  await fsPromises.writeFile(path, JSON.stringify(data, null, 2));
};

export const readUsers = async () => {
  const users = await readFile("./db/users.db.json");

  return users;
};

export const addUser = async (user) => {
  const users = await readUsers();

  users.push(user);

  await writeFile("./db/users.db.json", users);
};

export const readProducts = async () => {
  const products = await readFile("./db/products.db.json");

  return products;
};
