import EventEmitter from 'events';
import { appendData } from './db.service.js';
import path from 'path';

const loggsPath = path.join(import.meta.dirname, '..', 'data', 'loggs.txt');

class LoggerEmitter extends EventEmitter {}

const logger = new LoggerEmitter();

logger.on('log', message => {
	const currentTime = new Date().toISOString();

	const data = `
    --------------------------------
    ${message}
    Logged at: ${currentTime}
    ================================
    `;

	appendData(loggsPath, data);
});

export default logger;
