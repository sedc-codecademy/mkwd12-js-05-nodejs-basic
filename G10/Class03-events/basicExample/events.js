import { EventEmitter } from "node:events";
const emitter = new EventEmitter(); // creates a completely new instance of the EventEmitter class

class MyEmitter extends EventEmitter{}; // custom class that still uses all the functionalities of the EventEmitter class

export const myEmitter = new MyEmitter();

// if we do not export the instantiated object directly, it wil work only for this file
// emitter.on('order-sandwich', function() {
//     console.log('Making sandwich in progres...');
// });

myEmitter.on('order-sanwich', () => {
    console.log('Making sandwich in progres...');
})




