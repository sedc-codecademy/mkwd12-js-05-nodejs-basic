import {
  writeFileSync,
  readFileSync,
  appendFileSync,
  readFile,
  writeFile,
  appendFile,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fsPromise from "node:fs/promises";

// Get current working directory path
//Copy in other projects, dont worry about the details
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Absolute path to the file we want to create/read/update
const NOTES_PATH = path.join(__dirname, "notes.txt");

//File operations
//1. Write file methods create a file if it doesn't exist and overwrite a file if it does
//2. Read file methods read the data from a file and return the result
//3. Append file methods add data to the end of the file without overwriting the exising information

//Sync fs methods

//1. Writing a file with sync method
// writeFileSync(NOTES_PATH, "Hello from G4!\n", "utf-8");

//2. Reading a file with sync method
// const notesData = readFileSync(NOTES_PATH, "utf-8");

//3. Appending a file with sync method
// appendFileSync(NOTES_PATH, "And this is a new line", "utf-8");

// console.log(notesData);

// Async fs methods

// writeFile(NOTES_PATH, "I AM WRTTIEN WITH ASYNC", "utf-8", err => {
//   if (err) console.error(err);
//   console.log("From write async");

//   readFile(NOTES_PATH, "utf-8", (err, data) => {
//     if (err) console.error(err);
//     console.log("From read async", data);

//     appendFile(NOTES_PATH, "AND I AM UPDATED WITH ASYNC", "utf-8", err => {
//       if (err) console.error(err);
//       console.log("From append async");
//     });
//   });
// });

const handleNotes = async () => {
  try {
    await fsPromise.writeFile(
      NOTES_PATH,
      "I have been written from the promises function",
      "utf-8"
    );

    await fsPromise.appendFile(
      NOTES_PATH,
      "\n and another new line from the promises function",
      "utf-8"
    );

    const notesData = await fsPromise.readFile(NOTES_PATH, "utf-8");

    console.log("Notes data from promises: ", notesData);
  } catch (error) {
    console.error("Something went terribly wrong", error);
  }
};

handleNotes();
