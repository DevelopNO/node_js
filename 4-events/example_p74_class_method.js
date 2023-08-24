const EventEmitter = require('events');

class MyClass extends EventEmitter {
    callme() {
        this.emit('someEvent');
    }
}

const myClass = new MyClass();

myClass.on('someEvent', ()=> {
    console.log('my event!');
});

myClass.callme();