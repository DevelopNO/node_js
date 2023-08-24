const fs = require('fs');
// const os = require('os');

// const homedir = os.homedir();
// Alternative to the commented out:
const homedir = require('os').homedir();

fs.writeFile(`${homedir}/test.txt`, 'Hello world!\nWhat is up mate?\n', err=> {
    if (err) throw err;
    console.log('file created in homedir');
})