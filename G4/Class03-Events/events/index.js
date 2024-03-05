import { EventEmitter } from "node:events";

const emitter = new EventEmitter();

//Registering an event listener
emitter.on("event", () => {
  console.log("event fired");
});

emitter.on("borche", () => {
  console.log("Borche Borisovski");
});

//Firing or Emitting a named event
// emitter.emit("borche");
// emitter.emit("borche");

//We can emit an event multiple times
// emitter.emit("event");
// emitter.emit("event");
// emitter.emit("event");
// emitter.emit("event");

//We can emit an event with delay
// setTimeout(() => {
//   emitter.emit("event");
// }, 3000);

//Emitting an event with custom data
emitter.on("data", dataString => {
  console.log("data event fired");
  console.log(dataString);
});

// emitter.emit("data", "I AM THE FAMOUS DATA STRING");

//Emitting an event with multiple arguments
emitter.on("full-name", (firstName, lastName, age) => {
  console.log("Full name event fired");
  console.log(`${firstName} ${lastName} Age: ${age}`);
});

// emitter.emit("full-name", "Borche", "Borisovski", "Enough");

//Multiple event listeners on the same event (executed sync on event emit)
emitter
  .on("message", () => {
    console.log("First message listener");
  })
  .on("message", () => {
    console.log("Second message listener");
  })
  .on("message", () => {
    console.log("Third message listener");
  });

// emitter.emit("message");

// Emitting only once using the .once listener
emitter.once("once", () => {
  console.log("Once event fired");
});

emitter.emit("once");
emitter.emit("once");
emitter.emit("once");
emitter.emit("once");
emitter.emit("once");
emitter.emit("once");
emitter.emit("once");

//This in emitter event listeners
emitter.on("function", function () {
  console.log("From function event");
  console.log(this);
});

emitter.on("arrow", () => {
  console.log("From arrow event");
  console.log(this);
});

// emitter.emit("arrow");
emitter.emit("function");
