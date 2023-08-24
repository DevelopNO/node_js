const fs = require('fs');

fs.writeFile('./test.txt', 'hello world!\nhi what is up?\n', err => {
    if (err) throw err;
    console.log('test.txt created!');
});