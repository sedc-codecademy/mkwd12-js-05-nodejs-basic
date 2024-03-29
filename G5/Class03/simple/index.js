import colors from "colors";
import { EventEmitter } from "events";
import fs from "fs";

// USAGE #1
console.log("Hello from nodejs".green.underline);

const logMessage = "Application is up and running".bgWhite;
console.log(logMessage);

const errorMesage = "Error happened";
console.log(errorMesage.red);

// USAGE #2
console.log(colors.blue("A blue text using colors"))
const menuForToday = colors.bgMagenta("We gonna learn about events");
console.log(menuForToday);

// *******************************************************************
const eventEmitter = new EventEmitter();

// #1. Basic Event

// EVENT LISTENER
/**
 * .on is as same as addEventListener()
 * "go" is the name of the event.
 * the second argument () => {} is the callback that will be triggered
 * when the event happens
 */
eventEmitter.on("go", () => {
    console.log("GO!")
});

// EVENT TRIGGERER
/**
 * .emit will trigger the event
 * we must provide the same event name value as argument
 */
eventEmitter.emit("go");

// #2. Order of events

// EVENT TRIGGERER // Will fire the event but at this moment we dont have it yet
eventEmitter.emit('event');

// EVENT LISTENER
eventEmitter.on("event", () => {
    console.log('Event triggered')
});

// EVENT TRIGGERER // Will fire the event :)
eventEmitter.emit('event');

// #3. Parameter with events (Events can have parameters);

// EVENT LISTENER
eventEmitter.on("userLoggin", (user) => {
    console.log(`User: ${user} has logged in.`.green)
});

// EVENT TRIGGERER
eventEmitter.emit("userLoggin", "John Doe");

// #4. Events can have multiple parameters

// EVENT LISTENER
eventEmitter.on("forecast", (degrees, time, location) => {
    let recordedForecast = `In ${location} the temp. is: ${degrees}C measured at: ${time}.`

    console.log(recordedForecast)
});

// EVENT TRIGGERER
eventEmitter.emit("forecast", 10, new Date(), "Gevgelija");


const fullName = (firstName, lastName) => {
    console.log(`Fullname: ${firstName} ${lastName}`)
};

// EVENT LISTENER
// eventEmitter.on('full_name', fullName);

// SAME AS ABOVE =)
eventEmitter.on('full_name', (firstName, lastName) => {
    // some conditions
    // some other logic
    fullName(firstName, lastName)
});


// EVENT TRIGGERER
eventEmitter.emit('full_name', "John", "Doe")
eventEmitter.emit('full_name', "Bob", "Bobski")

/**
 * EXERCISE HERE: 
 * Write event that will take 2 params, userName and role (STUDENT/TEACHER/ADMIN).
 * Whenever the event is invoked you should append those info as a whole sentence in a new file named user-info.txt
 */ 
/**
 * eventEmmiter.emit('user', 'student')
 * User is role student.
 */

// EVENT LISTENER
eventEmitter.on("user_info", (userName, role) => {
    const userInfo = `\n${userName} is role: ${role}`;

    fs.appendFileSync("users.txt", userInfo)
});

// EVENT TRIGGERER
eventEmitter.emit("user_info", "BobBobski", "ADMIN");
eventEmitter.emit("user_info", "LeeJane", "TEACHER");

// #5 Events calling other event

// EVENT LISTENER
eventEmitter.on("one", () => {
    console.log('This is event one');
});

// EVENT LISTENER
eventEmitter.on("two", () => {
    console.log('This is event two');
    // EVENT TRIGGERER
    eventEmitter.emit('one')
});

// EVENT TRIGGERER
eventEmitter.emit('two');

// #6 Events can be chained

// EVENT LISTENERS
eventEmitter
.on('first', () => console.log('FIRST'))
.on('second', () => console.log('SECOND'))
.on('third', () => console.log('THIRD'))

// EVENT TRIGGERER
eventEmitter.emit('second');
eventEmitter.emit('third');

// #7 Same name for events

// EVENT LISTENERS
eventEmitter
.on('recording', () => {
    console.log('First Recording')
})
.on('recording', () => {
    console.log('Second Recording')
})
.on('recording', () => {
    console.log('Third Recording')
})

// EVENT TRIGGERER
eventEmitter.emit('recording')