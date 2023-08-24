const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'SomeSalt', 32);
const iv = 'myIVstringisnice1'.toString('hex').slice(0, 16);

const ciperDiv = crypto.createCipheriv(algorithm, key, iv);
const readStream = fs.createReadStream('encrypted.txt');
const writeStream = fs.createWriteStream('decrypted.txt');

readStream.pipe(ciperDiv).pipe(writeStream);