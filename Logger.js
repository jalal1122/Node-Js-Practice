const eventEmitter = require("events");
const uuid = require("uuid");

// create a class that extends the EventEmitter
class Logger extends eventEmitter {
  log(message) {
    // generate a unique identifier for the log
    const id = uuid.v4();
    // emit the 'log' event with the message and id
    this.emit("log", { id, message });
  }
}
