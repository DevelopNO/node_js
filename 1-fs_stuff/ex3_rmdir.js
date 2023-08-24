
const fs = require('fs');
// import {rmdir} from 'node:fs'

fs.rmdir('./hello', err => {
    if (err) {
        console.log('hello was not removed.');
        throw err;
    }
    console.log('hello removed');
});