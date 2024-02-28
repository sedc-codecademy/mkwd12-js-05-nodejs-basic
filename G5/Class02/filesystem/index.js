import fs from "fs";
import fsPromises from "fs/promises";

console.log("**** SYNCRONOUS FILE OPERATIONS ****");

// WRITING TO FILE
fs.writeFileSync("my_text.txt", "Hello from nodejs");

const fileName = "movies.txt";
const movieName = "Harry Potter and the Half Blood Prince";

// is method that saves data to a file =)
// it accepts two arguments, the first is the path to the file, and the second is the value of the file
// it will overwrite previous values in the file
fs.writeFileSync(fileName, movieName);
fs.writeFileSync(fileName, "Shawshenk Redemption");

// APPENDING TO FILE
fs.appendFileSync(fileName, "\nLord of the Rings");
fs.appendFileSync(fileName, "\nBefore the Rain");

// READING TO FILE
// const moviesFromDB = fs.readFileSync("./movies.txt", "utf-8");
const moviesFromDB = fs.readFileSync("./movies.txt", {encoding: "utf-8"});
console.log(moviesFromDB);

console.log("**** ASYNCRONOUS FILE OPERATIONS ****");

// OLDER 
const usersFilePath = "users.txt";
console.log(1)
// this callback () => {} will execute when the operation write file finishes
fs.writeFile(usersFilePath, 'Bob', (error) => {
    if(error){
        console.log('Error happened', error)
    }
    console.log(2)

    console.log("Write to file async finished.")
});
console.log(3);

// NEWER
// WRITE TO FILE ASYNC
await fsPromises.writeFile(usersFilePath, "Alex");


// APPEND TO FILE ASYNC
await fsPromises.appendFile(usersFilePath, "\nBob Bobski");
await fsPromises.appendFile(usersFilePath, "\nJohn Doe");

// READ FROM FILE ASYNC
const users = await fsPromises.readFile(usersFilePath, "utf-8");
console.log(users);
const movies = await fsPromises.readFile("movies.txt", {encoding: "utf-8"});
console.log(movies)