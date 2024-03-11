import EventEmitter from "events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

class LoggerEmitter extends EventEmitter {}
const loggerEmitter = new LoggerEmitter();

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const filePathDirectory = path.dirname(currentFilePath);
const logsFilePath = path.join(filePathDirectory, "..", "logs", "logs.txt");

const appendText = (filePath, textToAppend) => {
  fs.appendFileSync(filePath, textToAppend);
};

loggerEmitter.on("log", (action, status) => {
  const currentDateAndTime = new Date().toLocaleString();
  appendText(
    logsFilePath,
    `
       ---------------------------------------------------
       Action: ${action}
       Status: ${status}
       Date and Time: ${currentDateAndTime}
       ---------------------------------------------------
       `
  );
});

// loggerEmitter.emit("log", "register", "successful");

export { loggerEmitter, filePathDirectory };
