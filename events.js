import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

function runOnStart(start, end) {
    console.log(`started from ${start} to ${end}`);
}

eventEmitter.on("start", runOnStart);

eventEmitter.once("start", () => console.log("Once Listener called!"));

// console.log(eventEmitter.listenerCount("start"));

console.log(eventEmitter.eventNames());

// eventEmitter.setMaxListeners(10000);

console.log(eventEmitter.getMaxListeners());

// console.log(eventEmitter.listenerCount("start"));

eventEmitter.prependOnceListener("start", () => {
    console.log("PrependOnceListener called!")
})

eventEmitter.prependListener("start", () => {
    console.log("PrependListener called!")
})

eventEmitter.removeListener("start", runOnStart);

eventEmitter.emit("start", 1, 100);

eventEmitter.removeAllListeners("start");
console.log(eventEmitter.listenerCount("start"));