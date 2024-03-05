import { EventEmitter } from "node:events";
import { createPath } from "../utils.js";
import { appendFileSync } from "node:fs";

export const loggerEmitter = new EventEmitter();

//Path to the log file
const LOG_PATH = createPath(["data", "log.txt"]);

//Event listeners for the log events
loggerEmitter
  .on("create-user", userId => {
    appendFileSync(
      LOG_PATH,
      `The user with id: ${userId} was created on: ${new Date()}\n`
    );
  })
  .on("edit-user", userId => {
    appendFileSync(
      LOG_PATH,
      `The user with id: ${userId} was updated on: ${new Date()}\n`
    );
  })
  .on("delete-user", userId => {
    appendFileSync(
      LOG_PATH,
      `The user with id: ${userId} was deleted on: ${new Date()}\n`
    );
  });
