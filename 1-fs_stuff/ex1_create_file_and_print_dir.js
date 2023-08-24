const fs = require('fs');

fs.writeFile('./test.txt', 'Hello\n', err => {
    if (err) {
        throw err;
    }
    fs.readdir('./', (err, res) => {
        if (err) throw err;
        console.log(res);
    });
});

