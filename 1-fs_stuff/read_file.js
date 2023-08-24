const fs = require('fs');

fs.readFile('./read_file.js', (err, res) => {
    if (err) throw err;
    console.log(res);
});