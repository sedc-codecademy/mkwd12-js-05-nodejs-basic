import { greetUser, password } from "./greetService.js";
import fileSystem from 'fs';
// let {greetUser} = require('./greetService.js');
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

const users = readUsersFromFile();
console.log(users);