// Importing general exports
// import * as user from './user.js';
// console.log(user.getUser());

// Importing default exports
// import getUser from './user.js';

// Importing default exports + general exports
import getUser, { getEmployee, SECRET_KEY } from './user.js';
// console.log(getUser());
// console.log(getEmployee());
// console.log(SECRET_KEY);

// File System
// const fs = require('fs')
import fs from 'fs';
import path from 'path';

const newTxtPath = path.join(import.meta.dirname, 'new.txt');

console.log(newTxtPath);
// console.log('DIRNAME', __dirname);
// console.log('FILENAME', __filename);

// console.log('DIRNAME', import.meta.dirname);
// console.log('FILENAME', import.meta.filename);

// fs.writeFileSync(newTxtPath, 'Ova e test');

const text = fs.readFileSync(newTxtPath, { encoding: 'utf-8' });

console.log(text);
