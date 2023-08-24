const fs = require('fs');

fs.readdir('./', {encoding: "hex"}, (err, res) => {
    console.log(res);
})