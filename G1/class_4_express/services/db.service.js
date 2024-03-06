import fs from 'fs';

// Read
export function readData(db) {
	return JSON.parse(fs.readFileSync(db));
}

// Write
export function writeData(db, data) {
	fs.writeFileSync(db, JSON.stringify(data));
}

// Append
export function appendData(db, data) {
	fs.appendFileSync(db, data);
}
