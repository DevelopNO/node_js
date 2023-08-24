const fs = require('fs');

fs.readFile('./read_file.js', {encoding: 'utf8'}, (err, res) => {
    if (err) throw err;
    console.log(res);
});