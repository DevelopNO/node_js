const fs = require('fs');
const dns = require('dns');
const util = require('util');

const lookup = util.promisify(dns.lookup);
const readdir = util.promisify(fs.readdir);
const mkdir = util.promisify(fs.mkdir);

(async function () {
    const google = await lookup('nodejs.org', {family: 4});
    await mkdir(google.address);
    const dir = await readdir('.');
    console.log(dir);
}())

// create_google_ip_dir();