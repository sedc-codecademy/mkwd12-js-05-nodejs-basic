import { fileURLToPath } from "node:url";
import path from "node:path";
import { DataService } from "./src/data.service.js";
import { User } from "./src/user.model.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const USERS_PATH = path.join(__dirname, "data", "users.json");

console.log(USERS_PATH);

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
      userExists = true;
      return { ...user, firstName: newFirstName, lastName: newLastName };
    } else {
      return user;
    }
  });

  await saveUsers(updatedUsers);
};

// Student exercise , finish the below methods

//6. Delete User

//7. Delete All Users (nuclear)

const app = async () => {
  try {
    // await createUser("Risto", "Ristovski", 1000);
    // await createUser("Blazho", "Blazhoski", 1000);
    // await updateUser("a9ba3444-4b11-a319-c54a1a008ff5", "Tosho", "Malerot");
    // const risto = await getUserById("a9ba3444-a0b5-4b11-a319-c54a1a008ff5");
    // console.log("THIS IS RISTO:", risto);

    const users = await getAllUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
};

app();
