import { EventEmitter } from "node:events";
import { myEmitter } from './events.js'

const emitter = new EventEmitter(); // creates a completely new instance of the EventEmitter class

// REGISTER THE EVENT - ONLY ONCE
emitter.on('order-pizza', function(size, extraTopping = 'mozzarella') {
    console.log(`Making ${size} pizza with ${extraTopping} in progress...`)
});

// FIRE THE EVENT - MULTIPLE TIMES
emitter.emit('order-pizza', 'small', 'mushrooms');
emitter.emit('order-pizza', 'large');

// emitter.emit('order-sandwich'); // will not work because we don't have a registered event "order-sandwich" inside this file

// THE CORRECT WAY - use the instance of the MyEmitter class
myEmitter.emit('order-sanwich');