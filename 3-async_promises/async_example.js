const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

async function showDir() {
    let bla = await readdir('.');
    console.log(bla);
}

showDir();