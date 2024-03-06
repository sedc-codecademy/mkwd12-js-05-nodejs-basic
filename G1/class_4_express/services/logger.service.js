import EventEmitter from 'events';
import { appendData } from './db.service.js';
import path from 'path';

// This is the path to the loggs.txt file
const loggsPath = path.join(import.meta.dirname, '..', 'data', 'loggs.txt');

// This is the class that will emit the log event
class LoggerEmitter extends EventEmitter {}

// This is the instance of the LoggerEmitter class
const logger = new LoggerEmitter();

// This is the event listener that listens for the log event
logger.on('log', message => {
	// This is the current time shown as: 2021-09-29T14:00:00.000Z
	const currentTime = new Date().toISOString();

	// This is the data that will be appended to the loggs.txt file
	const data = `
    --------------------------------
    ${message}
    Logged at: ${currentTime}
    ================================
    `;

	appendData(loggsPath, data);
});

export default logger;
