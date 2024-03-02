import {EventEmitter} from "events";
import { EVENTS } from "./events.js";

const notifierEmitter = new EventEmitter();

notifierEmitter.on(EVENTS.REGISTER_SUCCESS, (id, username) => {
    /**
     * Log this file in txt
     * Log this txt value in the database
     */
    console.log(`User with id: ${id} and username: ${username} registered success at: ${Date.now()}`);
});

notifierEmitter.on('user_login_success', (id) => {
   
    console.log(`User with id: ${id} logged in at: ${Date.now()}`);
});

export default notifierEmitter; // NOTE: It works with NAMED export as-well