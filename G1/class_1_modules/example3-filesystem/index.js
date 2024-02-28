import fs from 'fs';
import path from 'path';
import fs from 'fs/promises';

// FS sync method
// const textFilePath = path.join(import.meta.dirname, 'notepad.txt');
// fs.writeFileSync(textFilePath, 'This text is from the sync method');
// fs.appendFileSync(textFilePath, ' appended text');
// const text = fs.readFileSync(textFilePath, { encoding: 'utf-8' });
// console.log('Returned text', text);

// FS Async Methods
const textFilePath = path.join(import.meta.dirname, 'notepad.txt');

fs.writeFile(textFilePath, 'This is async text', err => {
	if (err) {
		console.log('Error from writeFile', err);
		return;
	}
});
fs.appendFile(textFilePath, ' appended text', err => {
	if (err) {
		console.log('Error from appendFile', err);
	}
});
fs.readFile(textFilePath, { encoding: 'utf-8' }, (err, data) => {
	if (err) {
		console.log('Error:', err);
		return;
	}
	console.log('The text from readFile:', data);
});

console.log('Reading file ended');
