// After synchronous code, the order is:
// 1. timers
// 2. callbacks
// 3. check (setImmediate)


const fs = require('fs');

console.log('first');

fs.readFile('combination.js', (err, data) => {
    console.log('#1 file');
});

fs.readFile('combination.js', (err, data) => {
    console.log('#2 file');
});

fs.readFile('combination.js', (err, data) => {
    console.log('#3 file');
});

fs.readFile('combination.js', (err, data) => {
    console.log('#4 file');
});

setTimeout(()=> {
    console.log('set time out');
}, 10);

setTimeout(()=> {
    console.log('set time out');
}, 0);

setImmediate(()=> {
    console.log('set immediate');
})

console.log('Last');