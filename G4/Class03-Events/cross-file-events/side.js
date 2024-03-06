import { countEmitter } from "./count.js";

countEmitter.emit("event", "I am emitted from the side file");

for (let i = 0; i < 20; i++) {
  countEmitter.emit("count");
}
