import fs from 'fs';
import path from 'path';

// this is a text service that reads and writes data to a file called db.json

// this is the path to the db.json file
const DB_PATH = path.join(import.meta.dirname, 'db.json');

// this function writes data to the db.json file using the fs module from node
export const writeData = data => {
	fs.writeFileSync(DB_PATH, data, err => {
		console.error(err);
	});
};

// this function reads data from the db.json file using the fs module from node
export const readData = () => fs.readFileSync(DB_PATH, { encoding: 'utf-8' });
