import fileSystem from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// PATH - THe node path module provides utilities for working with file and directory paths
// using absolute path
// const projectPath = `C:\\Users\\Aneta Stankovska\\SEDC12\\nodejsbasic\\mkwd12-js-05-nodejs-basic\\G10\\Class02-modules-filesystem`;
const projectUrl = import.meta.url; // this provides the url to the current file (the URL, not the PATH);
console.log('URL TO PROJECT PATH', projectUrl);
const projectPath = path.dirname(fileURLToPath(projectUrl));
console.log('PATH: ', projectPath);

const directoryName = path.basename(projectPath);
console.log('DIRECTORY NAME', directoryName);

// FILESYSTEM - provides utilities for working with filesystem (files and folders)
// Display all the files inside a directory
let files = fileSystem.readdirSync('./'); // accepts both absolute and relative paths
let filesFromAbsolutePath = fileSystem.readdirSync('C:\\Users\\Aneta Stankovska\\SEDC12\\nodejsbasic\\mkwd12-js-05-nodejs-basic');
console.log('FILES IN DIRECTORY:', files);
console.log('FILES IN DIRECTORY FROM ABSOLUTE PATH:', filesFromAbsolutePath);

const fileName = 'example.txt';
const text = 'Hello, this text will be written to the files specified in the filename once the code is executed';
// if we add newText content using the writeFile method, it will override the current content of the file
const newText = 'Hello, this is my new text';

// If we send new text, it will override the previous text
// async version
fileSystem.writeFile(fileName, text, function(err) {
    if (err) {
        console.log('Error while writing to file', err);
        return;
    }
    console.log('The text has been written successfully'); // this is optional
});

// sync version
// fileSystem.writeFileSync(fileName, text);

// It will append the new text to the existing one
// async version
const textToAppend = 'This text will be appended to the existing one.';
fileSystem.appendFile(fileName, textToAppend, function(err) {
    if(err) {
        console.log('Error while appending to file', err);
        return;
    }
    console.log('The text has been appended successfully'); // this is optional
});

// sync version
// fileSystem.appendFileSync(fileName, textToAppend);

// async version
fileSystem.readFile(fileName, 'utf8', function(err, data) {
    if(err) {
        console.log('Error while reading the file', err);
        return;
    }
    console.log('Content of the file:', data); // this is optional
});

// sync version
// fileSystem.readFileSync(fileName, 'utf8');

// creating a directory
let directory = './test';

fileSystem.mkdir(directory, 0o777, (err) => {
    if(err) {
        console.log('Error creatin directory', err);
        return;
    }
    console.log(`Directory ${directory} created successfully`);
})




