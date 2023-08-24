const fs = require('fs');

let readStream = fs.createReadStream('./test.txt');
let writeStream = fs.createWriteStream('./out.txt');

readStream.pipe(writeStream);