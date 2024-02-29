// the import syntax is a new ES6 syntax
// we must add "type": "module" inside our package.json file so that we can use the import syntax
import { greetUser, password } from "./greetService.js";
import fileSystem from 'fs';
// the "require" syntax is used in commonJS modules which are default modules for node.js
// let { greetUser } = require('./greetService.js');
import { readUsersFromFile, addUser } from "./usersService.js";
console.log('We started the app!');
console.log(password);

greetUser('Bob');

const userToAdd = {
    id: 11,
    name: "John Doe",
    username: "johnDoe",
    email: "johndoe@user.net"
}

// addUser(userToAdd);

// const fileName = 'users.json';
// fileSystem.readFile(fileName, 'utf8', (err, data) => {
//     if(err) {
//         console.log('Error occured:', err);
//         return;
//     }
//     console.log('Content of the file:', JSON.parse(data));
// });

// use imported function from usersService
const users = readUsersFromFile();
console.log(users);