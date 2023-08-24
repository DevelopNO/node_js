const encryp = require('../src/module');
console.log(`source is: ${process.argv[2]}`);
encryp.decrypt(process.argv[2]);
