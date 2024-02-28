// import isEmail from "validator/lib/isEmail";
import validator from "validator";

console.log("from node js and i have been updated");

const testEmail = "asdasd@gmail.com";

const isEmailValid = validator.isEmail(testEmail);

console.log(`The validity of the email is: ${isEmailValid}`);

// npm init = step by step guide for creating node project
// npm init -y = automatic creation of node project
// npm i = installs dependencies of project, always run when first downloading source code
// ls = shows list of all files/folders in terminal location
// cd = changes directory of terminal
// mkdir = makes one or more folders
// touch = makes one or more files
// up arrow on keyboard = loads previous terminal command
