import { filePathDirectory } from "./logger.service.js";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const usersFilePath = path.join(filePathDirectory, "..", "data", "users.json");

const writeToFile = (data) => {
  const stringifiedData = JSON.stringify(data);
  fs.writeFileSync(usersFilePath, stringifiedData);
};

export const getUsers = (queryData) => {
  // accepted query params - key: role, value: admin | standard
  let users = fs.readFileSync(usersFilePath, { encoding: "utf-8" });
  let prsedUsers = JSON.parse(users);
  let validRoles = ["admin", "standard"];
  // if (!validRoles.includes(queryData.role)) {
  //   throw new Error("Wrong query parameters");
  // }
  if (queryData?.role && validRoles.includes(queryData.role)) {
    let filteredUsers = prsedUsers.filter(
      (user) => user.role === queryData.role
    );
    return filteredUsers;
  }
  return prsedUsers;
};

export const registerUser = (userData) => {
  const users = getUsers();
  const newUserId = uuidv4();
  const newUser = {
    id: newUserId,
    ...userData,
  };
  users.push(newUser);
  writeToFile(users);
  return newUser;
};

export const loginUser = (loginData) => {
  const users = getUsers();
  const foundUser = users.find(
    (user) =>
      user.email === loginData.email && user.password === loginData.password
  );
  if (!foundUser) {
    throw new Error("Invalid credentials");
  }
  return foundUser;
};

export const editUser = (userData, userId) => {
  const users = getUsers();
  const userToEditIndex = users.findIndex((user) => user.id === userId);
  if (userToEditIndex < 0) {
    throw new Error("USer not found");
  }
  const editedUser = {
    ...users[userToEditIndex],
    ...userData,
  };
  users[userToEditIndex] = editedUser;
  writeToFile(users);
  return editedUser;
};

export const deleteUser = (userId) => {
  const users = getUsers();
  const filteredUsers = users.filter((user) => user.id !== userId);

  if (users.length === filteredUsers.length) {
    throw new Error("User not found");
  }
  writeToFile(filteredUsers);
};
