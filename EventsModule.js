const eventEmitter = require("events");

// create a class that extends the EventEmitter
class EventsModule extends eventEmitter {}

// create an instance of the EventsModule
const eventsModule = new EventsModule();

// event listener for the 'event' event
eventsModule.on("event", () => {
  console.log("event triggered");
});

// event trigger
eventsModule.emit("event");

