import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';

// FS sync method
// const textFilePath = path.join(import.meta.dirname, 'notepad.txt');
// fs.writeFileSync(textFilePath, 'This text is from the sync method');
// fs.appendFileSync(textFilePath, ' appended text');
// const text = fs.readFileSync(textFilePath, { encoding: 'utf-8' });
// console.log('Returned text', text);

// FS Async Methods
// const textFilePath = path.join(import.meta.dirname, 'notepad.txt');

// fs.writeFile(textFilePath, `Some text to be written`, err => {
// 	if (err) {
// 		console.log('Error from writeFile', err);
// 		return;
// 	}
// });
// fs.appendFile(textFilePath, ' appended text', err => {
// 	if (err) {
// 		console.log('Error from appendFile', err);
// 	}
// });
// fs.readFile(textFilePath, { encoding: 'utf-8' }, (err, data) => {
// 	if (err) {
// 		console.log('Error:', err);
// 		return;
// 	}
// 	console.log('The text from readFile:', data);
// });

// console.log('Reading file ended');

// FS Promises

// const textFilePath = path.join(import.meta.dirname, 'notepad.txt');

// fsPromises
// 	.writeFile(textFilePath, 'Text written using promises')
// 	.then(err => {
// 		if (err) {
// 			console.log('Error while writing file', err);
// 		}
// 		return fsPromises.appendFile(textFilePath, ' appended text');
// 	})
// 	.then(err => {
// 		if (err) {
// 			console.log('Error while appending text', err);
// 		}

// 		return fsPromises.readFile(textFilePath, { encoding: 'utf-8' });
// 	})
// 	.then(value => {
// 		console.log('Reading text:', value);
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	})
// 	.finally(() => {
// 		console.log('Finally it is done');
// 	});

// FS Promises and Async Await

const textFilePath = path.join(import.meta.dirname, 'notepad.txt');

const textReadingApp = async () => {
	try {
		await fsPromises.writeFile(textFilePath, 'Writing with async await');
		await fsPromises.appendFile(textFilePath, ' appended text');
		const text = await fsPromises.readFile(textFilePath, { encoding: 'utf-8' });
		console.log('the text is:', text);
	} catch (err) {
		console.log('Something went wrong', err);
	} finally {
		console.log('Using file notepad is done');
	}
};

textReadingApp();
