import { EventEmitter } from "events";
import fsPromises from "fs/promises";
import fs from "fs"
const errorEmitter = new EventEmitter();

errorEmitter.on('error',  (errorData) => {
    const data = `\n${errorData}, happened at: ${Date.now()}.`
    fs.appendFileSync("db/errors.txt", data )
});

export default errorEmitter