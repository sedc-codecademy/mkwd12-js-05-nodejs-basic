import { EventEmitter } from "node:events";
import EventTypes from "./eventTypes.js";

class MyEmitter extends EventEmitter{};
const emitter = new MyEmitter();

emitter.on(EventTypes.info, () => {
    console.log('INFO event trriggered');
})

emitter.on(EventTypes.warning, () => {
    console.log('WARNING event trriggered');
})

emitter.on(EventTypes.error, () => {
    console.log('ERROR event trriggered');
})

export default emitter;
