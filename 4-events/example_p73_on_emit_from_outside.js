const EventEmitter = require('events');

class MyClass extends EventEmitter {}

const myClass = new MyClass();

myClass.on('someEvent', ()=> {
    console.log('my event!');
});

myClass.emit('someEvent');
