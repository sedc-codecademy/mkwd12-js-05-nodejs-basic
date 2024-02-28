import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

// Subscribers use "on"
// emitter.on('event', () => {
// 	console.log('Event has been triggered');
// });

// Emitters use "emit"
// emitter.emit('event');

// Subscribing for data
emitter.on('data', (name1, name2, name3) => {
	console.log('Event data has been triggered');
	console.log('Name: ', name1, name2, name3);
});

// Emitting data
emitter.emit('data', 'Stefan', 'Filip', 'Filip');
