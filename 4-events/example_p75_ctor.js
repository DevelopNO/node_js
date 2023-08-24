const EventEmitter = require('events');

class MyClass extends EventEmitter {
    constructor() {
        super();
        setTimeout(() => {
            this.emit('someEvent');
        }, 1000);
    }
}

const myClass = new MyClass();

myClass.on('someEvent', ()=> {
    console.log('my event!');
});
