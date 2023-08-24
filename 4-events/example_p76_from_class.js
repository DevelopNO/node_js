const EventEmitter = require('events');

class MyClass extends EventEmitter {
    constructor() {
        super();
        this.once('someEvent', this.someEventHandler);
        this.emit('someEvent');
    }

    someEventHandler() {
        console.log('someEvent occured');
    }
}

const myClass = new MyClass();
