const Logger = require("./logger.js");

const middlewareFunc = async (req, res, next) => {
  // create an instance of the Logger
  const logger = new Logger();

  // event listener for the 'log' event
  logger.on("log", (data) => {
    console.log(
      `Log ID: ${data.id}, Message: ${
        data.message
      }, timestamp: ${new Date().toISOString()}`
    );
  });

  logger.log("This is a log message");

  console.log(req.url);

  next();
};

module.exports = middlewareFunc;
