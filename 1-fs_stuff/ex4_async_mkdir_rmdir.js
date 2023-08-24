const fs = require('fs');

const randStr = Math.random().toString(36).substring(7);

fs.mkdir(`./${randStr}`, err => {
    if (err) throw err;
    console.log(`${randStr} created successfully.`)
    fs.rmdir(`./${randStr}`, err => {
        if (err) throw err;
        console.log(`${randStr} removed successfully.`);
    })
})