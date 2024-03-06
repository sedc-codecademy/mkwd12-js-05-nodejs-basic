import { DataService } from "./src/data.service.js";
import { User } from "./src/user.model.js";
import { createPath } from "./utils.js";
import { loggerEmitter } from "./src/logger.js";

const USERS_PATH = createPath(["data", "users.json"]);

//1. Get all users
const getAllUsers = async () => {
  const users = await DataService.readJSONFile(USERS_PATH);

  return users;
};

//2. Save users
const saveUsers = async users => {
  await DataService.saveJSONFile(USERS_PATH, users);
};

//3. Create User
const createUser = async (firstName, lastName, age) => {
  //1.Get all users
  const users = await getAllUsers();

  //2. Create a new user
  const newUser = new User(firstName, lastName, age);

  //3. Adding the new user to the users array
  const updatedUsers = [...users, newUser];

  //4. Saving the new array in file system
  await saveUsers(updatedUsers);

  loggerEmitter.emit("create-user", newUser.id);
};

//4. Get user by id
const getUserById = async userId => {
  //1. Get all users
  const users = await getAllUsers();

  //2. Find the user
  const foundUser = users.find(user => user.id === userId);

  if (!foundUser) throw new Error("USER NOT FOUND!");

  return foundUser;
};

//5. Update User
const updateUser = async (userId, newFirstName, newLastName) => {
  //1. Get all users
  const users = await getAllUsers();

  const idExists = users.some(user => user.id === userId);
  //   const idExists = users.find(user => user.id === userId);

  if (!idExists) throw new Error("Can't update user! User not found!");

  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      return { ...user, firstName: newFirstName, lastName: newLastName };
    } else {
      return user;
    }
  });

  await saveUsers(updatedUsers);

  loggerEmitter.emit("edit-user", userId);
};

//6. Delete User
const deleteUser = async userId => {
  const users = await getAllUsers();

  const updatedUsers = users.filter(user => user.id !== userId);

  if (users.length === updatedUsers.length)
    throw new Error("Can't delete user! User not found!");

  await saveUsers(updatedUsers);

  loggerEmitter.emit("delete-user", userId);
};

//7. Delete All Users (nuclear)
const deleteAllUsers = async () => {
  await saveUsers([]);
};

const app = async () => {
  try {
    // await createUser("Risto", "Ristovski", 1000);
    // await createUser("Blazho", "Blazhoski", 1000);
    await updateUser(
      "14ec3384-3b58-4da2-a500-91509b14b386",
      "Tosho",
      "Malerot"
    );
    // const risto = await getUserById("a9ba3444-a0b5-4b11-a319-c54a1a008ff5");
    // console.log("THIS IS RISTO:", risto);
    await deleteUser("14ec3384-3b58-4da2-a500-91509b14b386");
    // await deleteAllUsers();

    const users = await getAllUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};

app();
