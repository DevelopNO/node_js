#!/usr/bin/env node
const decryp = require('../src/module');
console.log(`source is: ${process.argv[2]}`);
decryp.decrypt(process.argv[2]);

