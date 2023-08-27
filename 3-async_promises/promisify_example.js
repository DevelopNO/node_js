const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

readdir('.').then(res => {
    console.log(res);
});
