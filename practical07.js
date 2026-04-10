const EventEmitter = require('events');

const emitter = new EventEmitter();

// register event listener
emitter.on('message', (data) => {
    console.log("Event received:", data);
});

// emit(trigger) event
emitter.emit('message', "Hello from EventEmitter");