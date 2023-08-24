const fs = require('fs');

fs.mkdir('./hello/world/whatsup/goodthanks/hi/hi', {recursive: true}, err => {
    if (err) throw err;
    console.log('hello dir created');
});