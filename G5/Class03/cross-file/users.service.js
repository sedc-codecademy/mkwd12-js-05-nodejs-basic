import notifierEmitter from "./notifier.service.js"
import { EVENTS } from "./events.js";

// NAMED EXPORT
export const registerUser = (userName) => {
    // .. logic here

    // if success emit this event
    notifierEmitter.emit(EVENTS.REGISTER_SUCCESS, '1', userName)
}

export const loginUser = () => {
    notifierEmitter.emit('user_login_success', '1')
}