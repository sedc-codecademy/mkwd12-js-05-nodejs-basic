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
// emitter.on('data', (name1, name2, name3) => {
// 	console.log('Event data has been triggered');
// 	console.log('Name: ', name1, name2, name3);
// });

// Emitting data
// emitter.emit('data', 'Stefan', 'Filip', 'Filip');

// Async event
// emitter.on('async', () => {
// 	console.log('Async event triggered');
// });

// setTimeout(() => {
// 	emitter.emit('async');
// }, 1000);

// Chaining multiple events
// emitter
// 	.on('event-one', () => console.log('Event one has been triggered'))
// 	.on('event-two', () => console.log('Event two has been triggered'));

// Emitting multiple events
// emitter.emit('event-two');
// emitter.emit('event-one');

// Event: Once
// emitter.once('read-it-once', () => {
// 	console.log('Read it once...');
// });

// emitter.emit('read-it-once');
// emitter.emit('read-it-once');
// emitter.emit('read-it-once');
// emitter.emit('read-it-once');

// Order of execution for events

// emitter
// 	.on('message', () => {
// 		console.log('First message');
// 	})
// 	.on('message', () => {
// 		console.log('second message');
// 	})
// 	.on('message', () => {
// 		console.log('third message');
// 	})
// 	.prependListener('message', () => {
// 		console.log('prepend listener');
// 	})
// 	.on('message', () => {
// 		console.log('fourth message');
// 	})
// 	.prependOnceListener('message', () => {
// 		console.log('prepend once listener');
// 	});

// emitter.emit('message');
// emitter.emit('message');

// Nested events
emitter.on('inside', () => {
	console.log('from the inside');
});

emitter.on('outside', () => {
	console.log('from the outside');
	emitter.emit('inside');
});

emitter.emit('outside');
