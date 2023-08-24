const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);
const rmdir = util.promisify(fs.rmdir);

(async function () {
    const dir = await readdir('.');
    await dir.forEach((val) => {
        if (val.charAt(0) >= '0' && val.charAt(0) <= '9') {
            rmdir(val);
        }
    })
}())