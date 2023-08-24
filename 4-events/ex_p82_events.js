const EventEmitter = require('events');

class Dog extends EventEmitter {
    constructor() {
        super();
        this.on('food', this.foodHandler);
        this.emit('food');
    }

    foodHandler() {
        console.log('woof!');
    }
}

let hi = new Dog();
hi.emit('food');