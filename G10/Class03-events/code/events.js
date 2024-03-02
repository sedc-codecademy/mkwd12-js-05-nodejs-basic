import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter{}; // custom class that still uses all the functionalities of the EventEmitter class
export const emitter = new MyEmitter();

// CREATE (REGISTER) AN EVENT ALONG WITH A HANDLER
emitter.on('greet', () => {
    console.log('Hello world');
})

// EMIT THE EVENT 
emitter.emit('greet');


// EMITTING DATA TO SOME EVENT
emitter.on('data', data => {
    console.log(data);
})

// emit fruits
emitter.emit('data', ['banana', 'orange', 'kiwi', 'mango']);
// emit vegetables
emitter.emit('data', ['tomato', 'potato', 'cucumber']);
emitter.emit('data', 'WHATEVER');

// USING LISTENER FUNCTION
const listenerFunction = (from, messsage) => {
    console.log(`Received message from ${from}: ${messsage}`);
};

// emitter.on('message', listenerFunction);

// emitter.emit('message', 'Alice', 'Hi there');

// EMITTING EVENT ONLY ONCE
emitter.once('once-emitted-event', () => {
    console.log('This event will be trigerred only once');
});

// emitter.emit('once-emitted-event');
// emitter.emit('once-emitted-event');

// REGISTER ASYNCHRONOYS EVENT
emitter.on('asyncEvent', async () => {
    await new Promise(resolve => {setTimeout(resolve, 1000)});
    console.log('Async event handling');
})

// emitter.emit('asyncEvent');
// console.log('AFTER EMITTING OF THE ASYNC EVENT');


// REGISTER EVENT LISTEER FOR THE "ERROR" EVENT
emitter.on('error', (error) => {
    console.error('An error occurred:', error);
});

// emitter.emit('error', new Error('Something went wrong!'));

// ATTACHING MULTIPLE LISTENERS TO AN EVENT
emitter.on('event', () => {
    console.log('This listener will be executed every time the event is emitted');
})

emitter.on('event', () => {
    console.log('Anathor listener that will be executed every time the event is emitted');
})

// will be emitted only once
emitter.once('event', () => {
    console.log('This listener will be executed only once');
})

// will be emitted only once fut also first
emitter.prependOnceListener('event', () => {
    console.log('This listener will be executed only once PREPEND');
})

emitter.emit('event');
console.log('--------------------------------------------------------------------');
emitter.emit('event');

// NESTED EVENTS
emitter.on('outer', () => {
    console.log('Emitted from the OUTER listener');
});

emitter.on('inner', () => {
    emitter.emit('outer');
});

emitter.emit('inner');


// emitter.removeAllListeners(); // if we want to unsubscribe from all events