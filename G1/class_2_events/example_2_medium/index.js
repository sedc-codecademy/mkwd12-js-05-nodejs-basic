import { EventEmitter } from 'events';
import Event from './events.js';

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('test', msg => {
	console.log('Test event emitted');
	console.log('Message', msg);
});

emitter.on(Event.drive, () => {
	console.log('We are driving');
});

export default emitter;
