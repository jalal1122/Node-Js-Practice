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

// create an instance of the Logger
const logger = new Logger();

// event listener for the 'log' event
logger.on("log", (data) => {
  console.log(`Log ID: ${data.id}, Message: ${data.message}`);
});

logger.log("This is a log message");

module.exports = Logger;
