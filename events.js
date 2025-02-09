import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

function runOnStart(start, end) {
    console.log(`started from ${start} to ${end}`);
}

eventEmitter.on("start", runOnStart);

eventEmitter.emit("start", 1, 100);

console.log(eventEmitter.eventNames());

// eventEmitter.setMaxListeners(10000);

console.log(eventEmitter.getMaxListeners());

eventEmitter.off("start", runOnStart);
console.log(eventEmitter.listenerCount("start"));
