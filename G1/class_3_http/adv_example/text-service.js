import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(import.meta.dirname, 'db.json');

export const writeData = data => {
	fs.writeFileSync(DB_PATH, data, err => {
		console.error(err);
	});
};

export const readData = () => fs.readFileSync(DB_PATH, { encoding: 'utf-8' });
