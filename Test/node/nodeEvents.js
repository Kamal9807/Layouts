// event passes a single when the output is running(error messages).
//setImmediate function runs when the rest of the code is executed.
let EventEmitter = require("events"); // EventEmitter is a class
let myEmitter = new EventEmitter(); // creating object for EventEmitter
// setImmediate(() => {
//   myEmitter.emit("Emitting the event"); //emitting  the event
// });
console.log("kamal");
myEmitter.on("This is support for emit method", () => {
  console.log("the event was fired");
});
myEmitter.on("This is support for emit method", () => {
  console.log("the event was fired");
});
myEmitter.on("This is support for emit method", () => {
  console.log("the event was fired");
});
myEmitter.emit("Emitting the event"); //emitting  the event
